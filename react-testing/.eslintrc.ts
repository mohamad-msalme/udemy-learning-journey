/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: [
    "node_modules/",
    "build/",
    "dist/",
    ".eslintrc.ts",
    "webpack.config.ts",
  ],
};
