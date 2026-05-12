import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("Cursor auto-import SQL safety", () => {
  const route = readFileSync(
    new URL("../../src/app/api/oauth/cursor/auto-import/route.js", import.meta.url),
    "utf8",
  );

  it("does not interpolate arbitrary query keys directly into SQL", () => {
    expect(route).toMatch(/KEY_WHITELIST/);
    expect(route).toMatch(/key\.replace\(\/'\/g,\s*"''"\)/);
    expect(route).not.toMatch(/WHERE key='\$\{key\}'/);
  });

  it("prefers bun:sqlite when running under Bun", () => {
    expect(route).toMatch(/extractTokensViaBunSqlite/);
    expect(route).toMatch(/import\("bun:sqlite"\)/);
  });
});
