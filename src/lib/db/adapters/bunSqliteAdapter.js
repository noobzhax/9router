// Bun runtime adapter — uses built-in bun:sqlite (native, fastest under Bun).
// Loaded only when process.versions.bun is present.
import { PRAGMA_SQL } from "../schema.js";

const CHECKPOINT_INTERVAL_MS = 5 * 60 * 1000;
const MAX_STATEMENT_CACHE_SIZE = 250;
const CHECKPOINT_SQL = "PRAGMA wal_checkpoint(PASSIVE)";
const FINAL_CHECKPOINT_SQL = "PRAGMA wal_checkpoint(TRUNCATE)";

export async function createBunSqliteAdapter(filePath) {
  // Dynamic import — only resolves under Bun runtime
  const { Database } = await import("bun:sqlite");
  const db = new Database(filePath, { create: true });
  db.exec(PRAGMA_SQL);

  // Small LRU-ish statement cache. Prevents unbounded memory growth if dynamic
  // SQL accidentally reaches this adapter while still keeping hot statements fast.
  const stmtCache = new Map();
  function prepare(sql) {
    let stmt = stmtCache.get(sql);
    if (stmt) {
      stmtCache.delete(sql);
      stmtCache.set(sql, stmt);
      return stmt;
    }
    stmt = db.prepare(sql);
    stmtCache.set(sql, stmt);
    if (stmtCache.size > MAX_STATEMENT_CACHE_SIZE) {
      const oldestKey = stmtCache.keys().next().value;
      stmtCache.delete(oldestKey);
    }
    return stmt;
  }

  let closed = false;
  let checkpointInFlight = false;
  function checkpoint(sql = CHECKPOINT_SQL) {
    if (closed || checkpointInFlight) return;
    checkpointInFlight = true;
    try { db.exec(sql); }
    catch (e) { console.warn("[DB] bun:sqlite checkpoint failed:", e?.message); }
    finally { checkpointInFlight = false; }
  }

  const checkpointTimer = setInterval(() => checkpoint(), CHECKPOINT_INTERVAL_MS);
  if (typeof checkpointTimer.unref === "function") checkpointTimer.unref();

  function gracefulClose() {
    if (closed) return;
    closed = true;
    clearInterval(checkpointTimer);
    try { db.exec(FINAL_CHECKPOINT_SQL); } catch (e) { console.warn("[DB] bun:sqlite final checkpoint failed:", e?.message); }
    stmtCache.clear();
    try { db.close(); } catch (e) { console.warn("[DB] bun:sqlite close failed:", e?.message); }
  }

  const onShutdown = () => gracefulClose();
  process.once("beforeExit", onShutdown);
  process.once("SIGINT", () => { onShutdown(); process.exit(0); });
  process.once("SIGTERM", () => { onShutdown(); process.exit(0); });

  return {
    driver: "bun:sqlite",
    run(sql, params = []) {
      const r = prepare(sql).run(...params);
      return { changes: Number(r.changes ?? 0), lastInsertRowid: Number(r.lastInsertRowid ?? 0) };
    },
    get(sql, params = []) {
      return prepare(sql).get(...params);
    },
    all(sql, params = []) {
      return prepare(sql).all(...params);
    },
    exec(sql) { return db.exec(sql); },
    transaction(fn) {
      // bun:sqlite has db.transaction() API (similar to better-sqlite3)
      const tx = db.transaction(fn);
      return tx();
    },
    checkpoint() { checkpoint(FINAL_CHECKPOINT_SQL); },
    close() { gracefulClose(); },
    raw: db,
  };
}
