import { NextResponse } from "next/server";
import { access, constants } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

// Hardcoded whitelist of lookup keys — guards CLI fallback even though
// user input never flows into these queries.
const ACCESS_TOKEN_KEYS = Object.freeze([
  "cursorAuth/accessToken",
  "cursorAuth/token",
]);
const MACHINE_ID_KEYS = Object.freeze([
  "storage.serviceMachineId",
  "storage.machineId",
  "telemetry.machineId",
]);
const KEY_WHITELIST = new Set([...ACCESS_TOKEN_KEYS, ...MACHINE_ID_KEYS]);

/** Normalize a stored value that may be a JSON-encoded string. */
function normalize(value) {
  if (typeof value !== "string") return value;
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "string" ? parsed : value;
  } catch {
    return value;
  }
}

/** Get candidate db paths by platform */
function getCandidatePaths(platform) {
  const home = homedir();

  if (platform === "darwin") {
    return [
      join(home, "Library/Application Support/Cursor/User/globalStorage/state.vscdb"),
      join(home, "Library/Application Support/Cursor - Insiders/User/globalStorage/state.vscdb"),
    ];
  }

  if (platform === "win32") {
    const appData = process.env.APPDATA || join(home, "AppData", "Roaming");
    const localAppData = process.env.LOCALAPPDATA || join(home, "AppData", "Local");
    return [
      join(appData, "Cursor", "User", "globalStorage", "state.vscdb"),
      join(appData, "Cursor - Insiders", "User", "globalStorage", "state.vscdb"),
      join(localAppData, "Cursor", "User", "globalStorage", "state.vscdb"),
      join(localAppData, "Programs", "Cursor", "User", "globalStorage", "state.vscdb"),
    ];
  }

  return [
    join(home, ".config/Cursor/User/globalStorage/state.vscdb"),
    join(home, ".config/cursor/User/globalStorage/state.vscdb"),
  ];
}

/**
 * Extract tokens via bun:sqlite — Bun runtime built-in, zero extra deps.
 * Runs only when process.versions.bun is set.
 */
async function extractTokensViaBunSqlite(dbPath) {
  if (!process.versions.bun) return null;
  const { Database } = await import("bun:sqlite");
  const db = new Database(dbPath, { readonly: true });
  try {
    const stmt = db.prepare("SELECT value FROM itemTable WHERE key=? LIMIT 1");
    const lookup = (key) => {
      const row = stmt.get(key);
      return row?.value ?? null;
    };

    let accessToken = null;
    for (const key of ACCESS_TOKEN_KEYS) {
      const raw = lookup(key);
      if (raw) { accessToken = normalize(raw); break; }
    }
    let machineId = null;
    for (const key of MACHINE_ID_KEYS) {
      const raw = lookup(key);
      if (raw) { machineId = normalize(raw); break; }
    }
    return { accessToken, machineId };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

/**
 * Extract tokens via better-sqlite3 — Node-only, bundled native addon.
 */
function extractTokensViaBetterSqlite(dbPath) {
  if (process.versions.bun) return null;
  // eslint-disable-next-line no-undef
  const Database = require("better-sqlite3");
  const db = new Database(dbPath, { readonly: true, fileMustExist: true });
  try {
    const stmt = db.prepare("SELECT value FROM itemTable WHERE key=? LIMIT 1");
    const lookup = (key) => {
      const row = stmt.get(key);
      return row?.value ?? null;
    };

    let accessToken = null;
    for (const key of ACCESS_TOKEN_KEYS) {
      const raw = lookup(key);
      if (raw) { accessToken = normalize(raw); break; }
    }
    let machineId = null;
    for (const key of MACHINE_ID_KEYS) {
      const raw = lookup(key);
      if (raw) { machineId = normalize(raw); break; }
    }
    return { accessToken, machineId };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

/**
 * Extract tokens via sqlite3 CLI — last-resort fallback when no SQLite
 * driver is available. Uses whitelisted keys only; no user input flows
 * into the SQL string.
 */
async function extractTokensViaCLI(dbPath) {
  const query = async (key) => {
    if (!KEY_WHITELIST.has(key)) {
      throw new Error(`key ${key} not in whitelist`);
    }
    // Use parameterized-ish approach: pass key via -cmd parameter binding.
    // sqlite3 CLI doesn't support placeholders in single-shot mode, so we
    // rely on the whitelist above plus strict single-quote escaping.
    const safeKey = key.replace(/'/g, "''");
    const sql = `SELECT value FROM itemTable WHERE key='${safeKey}' LIMIT 1`;
    const { stdout } = await execFileAsync("sqlite3", [dbPath, sql], { timeout: 10000 });
    return stdout.trim();
  };

  let accessToken = null;
  for (const key of ACCESS_TOKEN_KEYS) {
    try {
      const raw = await query(key);
      if (raw) { accessToken = normalize(raw); break; }
    } catch { /* try next */ }
  }

  let machineId = null;
  for (const key of MACHINE_ID_KEYS) {
    try {
      const raw = await query(key);
      if (raw) { machineId = normalize(raw); break; }
    } catch { /* try next */ }
  }

  return { accessToken, machineId };
}

/**
 * GET /api/oauth/cursor/auto-import
 * Auto-detect and extract Cursor tokens from local SQLite database.
 * Strategy: bun:sqlite (Bun) → better-sqlite3 (Node) → sqlite3 CLI → manual fallback
 */
export async function GET() {
  try {
    const platform = process.platform;
    const candidates = getCandidatePaths(platform);

    let dbPath = null;
    for (const candidate of candidates) {
      try {
        await access(candidate, constants.R_OK);
        dbPath = candidate;
        break;
      } catch {
        // try next
      }
    }

    if (!dbPath) {
      return NextResponse.json({
        found: false,
        error: `Cursor database not found. Checked locations:\n${candidates.join("\n")}\n\nMake sure Cursor IDE is installed and opened at least once.`,
      });
    }

    // On Linux, verify Cursor is actually installed (not just leftover config)
    if (platform === "linux") {
      let cursorInstalled = false;
      try {
        await execFileAsync("which", ["cursor"], { timeout: 5000 });
        cursorInstalled = true;
      } catch {
        try {
          const desktopFile = join(homedir(), ".local/share/applications/cursor.desktop");
          await access(desktopFile, constants.R_OK);
          cursorInstalled = true;
        } catch { /* not found */ }
      }
      if (!cursorInstalled) {
        return NextResponse.json({
          found: false,
          error: "Cursor config files found but Cursor IDE does not appear to be installed. Skipping auto-import.",
        });
      }
    }

    // Strategy 0: bun:sqlite (when running under Bun runtime — zero native deps)
    try {
      const tokens = await extractTokensViaBunSqlite(dbPath);
      if (tokens?.accessToken && tokens?.machineId) {
        return NextResponse.json({
          found: true,
          accessToken: tokens.accessToken,
          machineId: tokens.machineId,
        });
      }
    } catch (err) {
      console.warn("[cursor-auto-import] bun:sqlite failed:", err?.message);
    }

    // Strategy 1: better-sqlite3 (Node runtime; native bindings required)
    try {
      const tokens = extractTokensViaBetterSqlite(dbPath);
      if (tokens?.accessToken && tokens?.machineId) {
        return NextResponse.json({
          found: true,
          accessToken: tokens.accessToken,
          machineId: tokens.machineId,
        });
      }
    } catch (err) {
      console.warn("[cursor-auto-import] better-sqlite3 failed:", err?.message);
    }

    // Strategy 2: sqlite3 CLI
    try {
      const tokens = await extractTokensViaCLI(dbPath);
      if (tokens.accessToken && tokens.machineId) {
        return NextResponse.json({
          found: true,
          accessToken: tokens.accessToken,
          machineId: tokens.machineId,
        });
      }
    } catch (err) {
      console.warn("[cursor-auto-import] sqlite3 CLI failed:", err?.message);
    }

    // Strategy 3: ask user to paste manually
    return NextResponse.json({ found: false, windowsManual: true, dbPath });
  } catch (error) {
    console.error("[cursor-auto-import] unexpected error:", error);
    return NextResponse.json(
      { found: false, error: error?.message || "unknown error" },
      { status: 500 },
    );
  }
}
