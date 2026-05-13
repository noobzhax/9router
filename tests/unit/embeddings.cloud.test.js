import { describe, it } from "vitest";

// Cloudflare Worker cloud variant is not present in this repository checkout
// (`cloud/src/handlers/embeddings.js` does not exist), so these tests cannot
// import their target module. Keep a skipped placeholder so the intended
// coverage is visible without breaking the app test suite.
describe.skip("cloud embeddings handler", () => {
  it("requires the cloud/src/handlers/embeddings.js module", () => {});
});
