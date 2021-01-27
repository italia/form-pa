module.exports = {
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    "generated",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/__tests__/*",
    "**/__mocks__/*",
    "Dangerfile.*",
    "*.d.ts",
  ],
  extends: ["@pagopa/eslint-config/strong"],
  rules: {
    // Any project level custom rule
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["default"],
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
};
