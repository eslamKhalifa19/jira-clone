module.exports = {
  plugins: ["react", "import", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "warn",
    "no-console": "warn",
  },
};
