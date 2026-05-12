import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";

describe("UsageStats lazy visualization", () => {
  const file = readFileSync(
    path.resolve("../src/shared/components/UsageStats.js"),
    "utf8"
  );

  it("does not statically import recharts or @xyflow/react", () => {
    expect(file).not.toMatch(/^import\s[^\n]*ProviderTopology.*from\s+["']@\/app/m);
    expect(file).not.toMatch(/^import\s[^\n]*UsageChart.*from\s+["']@\/app/m);
  });

  it("uses next/dynamic for the chart panels", () => {
    expect(file).toMatch(/next\/dynamic/);
    expect(file).toMatch(/dynamic\(\s*\(\)\s*=>\s*import\(["'][^"']*UsageChart["']\)/);
    expect(file).toMatch(/dynamic\(\s*\(\)\s*=>\s*import\(["'][^"']*ProviderTopology["']\)/);
  });
});
