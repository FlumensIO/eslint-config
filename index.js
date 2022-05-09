module.exports = {
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@getify/proper-arrows",
    "sort-class-members",
    "@typescript-eslint",
  ],
  extends: [
    "airbnb",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-underscore-dangle": 0,
    "@getify/proper-arrows/name": ["error"],
    "no-plusplus": 0,
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    "sort-class-members/sort-class-members": [
      2,
      {
        order: [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "constructor",
          "[methods]",
          {
            type: "property",
            propertyType: "ArrowFunctionExpression",
          },
          "[methods]",
          {
            name: "/^render$/",
            type: "method",
          },
        ],
        accessorPairPositioning: "getThenSet",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // react
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],

    // testing
    "jest/no-if": 2,
    "jest/expect-expect": 2,
    "jest/require-top-level-describe": 2,

    // swiper issue https://github.com/nolimits4web/swiper/issues/5058
    "import/no-unresolved": [2, { ignore: ["swiper"] }],
  },
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "@getify/proper-arrows/name": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    __ENV__: true,
    __DEV__: true,
    __TEST__: true,
    __PROD__: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
