module.exports = {
  plugins: ["@getify/proper-arrows"],
  extends: [
    "airbnb",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "@getify/proper-arrows/name": ["error"],
    "react/forbid-prop-types": 0,
    "no-plusplus": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    "jsx-a11y/alt-text": 0,
    "no-underscore-dangle": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-unescaped-entities": 0,
  },
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "@getify/proper-arrows/name": "off",
      },
    },
  ],
  globals: {
    __ENV__: true,
    __DEV__: true,
    __TEST__: true,
    __PROD__: true,
    t: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
