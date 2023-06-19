module.exports = {
  extends: [require.resolve("@johnnyxcy/eslint-config/eslint.react")],
  parserOptions: {
    project: require.resolve("./tsconfig.eslint.json"),
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    "*.config.js",
    "sidebars.js"
  ],
  overrides: [
    {
      files: ["jest.config.ts"],
      rules: {
        "import/no-relative-parent-imports": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-relative-packages": "off",
        "import/no-dynamic-require": "off",
        "@typescript-eslint/no-restricted-imports": "off"
      }
    }
  ],
  rules: {
    "global-require": "warn",
    "i18next/no-literal-string": "off",
    "import/no-unassigned-import": "off",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@site/**",
            group: "internal"
          }
        ]
      }
    ]
  }
};
