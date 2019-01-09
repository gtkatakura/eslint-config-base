module.exports = {
  extends: "airbnb",
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
    semi: ["error", "never"]
  }
};
