import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
describe("providers/page.js direct imports", () => {
  it("does not import from @/shared/components barrel", () => {
    const src = readFileSync(new URL("../../src/app/(dashboard)/dashboard/providers/page.js", import.meta.url), "utf8");
    expect(src).not.toMatch(/from\s+["']@\/shared\/components["']/);
  });
});
