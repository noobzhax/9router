import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

function read(path) {
  return readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");
}

describe("material-symbols icon font scope", () => {
  it("is not imported in root layout", () => {
    const root = read("src/app/layout.js");
    expect(root).not.toMatch(/material-symbols\/outlined\.css/);
  });

  it("is imported in dashboard layout", () => {
    const dash = read("src/app/(dashboard)/layout.js");
    expect(dash).toMatch(/material-symbols\/outlined\.css/);
  });
});
