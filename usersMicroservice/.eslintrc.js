module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    quotes: [0, "double"],
    eqeqeq: 1,
    semi: 0,
  },
};
