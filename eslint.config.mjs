import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Non-app directories:
    "tests/**",
    "cli/**",
    "gitbook/**",
    "open-sse/**",
  ]),
  {
    rules: {
      // React Compiler rules — downgrade to warn until codebase is migrated.
      // These flag valid patterns (setState in mount effects, function hoisting).
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",
      // Allow anonymous default exports in config files
      "import/no-anonymous-default-export": "warn",
      // Allow <img> in components that don't benefit from next/image optimization
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;
