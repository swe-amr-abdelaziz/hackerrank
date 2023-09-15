module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: "latest",
    sourceType: "script",
  },
};
