import { describe, it, expect } from "vitest";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execFileAsync = promisify(execFile);

describe("Cursor Auto-Import SQL Injection", () => {
  it("should not execute injected SQL in extractTokensViaCLI", async () => {
    // Mock a DB file with a dummy table
    const dbPath = "/tmp/test_injection.db";
    const { execSync } = require("node:child_process");
    execSync(`sqlite3 ${dbPath} "CREATE TABLE itemTable(key TEXT, value TEXT);"`);
    execSync(`sqlite3 ${dbPath} "INSERT INTO itemTable VALUES('safe_key', 'safe_value');"`);

    // Dangerous key
    const maliciousKey = "safe_key' OR '1'='1";
    
    // We test the logic inside extractTokensViaCLI.
    // Since we can't easily import the private function, we simulate the CLI call
    // as the function does: execFile("sqlite3", [dbPath, sql])
    
    const sql = `SELECT value FROM itemTable WHERE key='${maliciousKey}' LIMIT 1`;
    const { stdout } = await execFileAsync("sqlite3", [dbPath, sql]);
    
    // If injected, it might return 'safe_value' even if key doesn't match exactly
    // or throw a syntax error.
    // The real fix is to NOT use string interpolation.
    expect(stdout).not.toContain("safe_value");
  });
});
