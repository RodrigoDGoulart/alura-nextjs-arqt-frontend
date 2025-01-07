const baseConfig = require("@alura/eslint-commons/base");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...baseConfig,
  ...compat.extends("next"),
];
