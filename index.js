module.exports = {
  extends: ["airbnb", "plugin:unicorn/recommended"],
  plugins: ["unicorn", "import-helpers"],
  rules: {
    "arrow-parens": "off",
    "import/prefer-default-export": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1
      }
    ],
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/no-multi-comp": "off",
    semi: ["error", "never"],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ]
  }
};
