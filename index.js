import { configs, plugins, rules } from "eslint-config-airbnb-extended";
import prettierConfigPkg from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import prettierPlugin from "eslint-plugin-prettier";
import sortClassMembers from "eslint-plugin-sort-class-members";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";

const gitignorePath = path.resolve(".", ".gitignore");

const prettierConfigRules = prettierConfigPkg.rules || {};

const jsConfig = [
  { name: "js/config", ...js.configs.recommended },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
  rules.base.importsStrict,
];

const reactConfig = [
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,
  ...configs.react.recommended,
  rules.react.strict,
];

const typescriptConfig = [
  plugins.typescriptEslint,
  ...configs.base.typescript,
  rules.typescript.typescriptEslintStrict,
  ...configs.react.typescript,
];

const prettierConfig = [
  {
    name: "prettier/plugin/config",
    plugins: { prettier: prettierPlugin },
  },
  {
    name: "prettier/config",
    rules: { ...prettierConfigRules, "prettier/prettier": "error" },
  },
];

const additionalPlugins = {
  name: "additional-plugins",
  plugins: {
    "sort-class-members": sortClassMembers,
    "unused-imports": unusedImports,
    jest: jestPlugin,
    import: importPlugin,
  },
  settings: {
    "import/resolver": {
      typescript: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

const customRules = {
  name: "custom-rules",
  files: ["src/**/*.{js,jsx,ts,tsx}"],
  rules: {
    "no-underscore-dangle": 0, // allow dangling underscores for private properties
    "no-plusplus": 0, // allow ++ and --
    "@typescript-eslint/no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
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
    "@typescript-eslint/no-explicit-any": "warn",
    "react/require-default-props": 0, // don't require default props
    "react/destructuring-assignment": 0, // don't enforce destructuring
    "react/button-has-type": 0, // allow buttons without type
    "jsx-a11y/alt-text": 0, // allow images without alt text
    "react/no-unescaped-entities": 0, // allow ' and " in JSX
    "react/react-in-jsx-scope": 0, // not needed with React 17+
    "jsx-a11y/no-static-element-interactions": 0, // allow static elements with interaction handlers
    "jsx-a11y/click-events-have-key-events": 0, // allow clickable divs/spans
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-alert": 2, // error against alert usage
    "class-methods-use-this": 0, // allow class methods that don't use this
    "react/function-component-definition": 0, // allow both function and arrow function components
    "react/jsx-no-bind": 0, // allow bind in JSX
    "@stylistic/comma-dangle": 0, // handled by prettier
    "@stylistic/arrow-parens": 0, // handled by prettier
    "@stylistic/function-paren-newline": 0, // handled by prettier
    "@stylistic/implicit-arrow-linebreak": 0, // handled by prettier
    "@stylistic/indent": 0, // handled by prettier
    "@stylistic/max-len": 0, // handled by prettier, allow long lines in some cases
    "@stylistic/no-confusing-arrow": 0, // don't enforce
    "@stylistic/nonblock-statement-body-position": 0, // don't enforce
    "@stylistic/object-curly-newline": 0, // don't enforce
    "@stylistic/operator-linebreak": 0, // don't enforce
    "@stylistic/wrap-iife": 0, // don't enforce
    "@typescript-eslint/await-thenable": 0, // allow awaiting non-Promise values
    "@typescript-eslint/consistent-type-definitions": [2, "type"], // prefer type over interface
    "@typescript-eslint/consistent-type-imports": 0, // don't enforce
    "@typescript-eslint/explicit-module-boundary-types": 0, // don't enforce
    "@typescript-eslint/no-confusing-void-expression": 0, // allow void expressions
    "@typescript-eslint/no-non-null-assertion": 0, // allow ! when sure
    "@typescript-eslint/prefer-nullish-coalescing": 0, // allow both || and ??
    "@typescript-eslint/prefer-regexp-exec": 0, // don't enforce, match is OK
    "@typescript-eslint/no-unsafe-return": 0, // allow any return types
    "@typescript-eslint/promise-function-async": 0, // TODO: enable later
    "import-x/consistent-type-specifier-style": 0, // allow mixing type imports and value imports
    "import-x/extensions": 0, // don't need extensions with tsconfig paths
    "import-x/no-anonymous-default-export": 0, // allowed in some cases
    "import-x/no-cycle": 0, // TODO: enable later
    "import-x/no-named-as-default": 0, // no need
    "import-x/no-unresolved": 0, // handled by other rules
    "import-x/order": 0, // we use prettier for automatic import sorting
    "react-hooks/exhaustive-deps": 0, // allowing omission of deps in hooks
    "react/jsx-fragments": 0, // allowing both <> </> and <React.Fragment>
    "react/jsx-no-leaked-render": 0, // allowing boolean expressions in JSX
    "react/jsx-sort-props": 0, // Disabled to allow flexibility in prop ordering
  },
};

export default [
  includeIgnoreFile(gitignorePath), // Ignore files and folders listed in .gitignore
  ...jsConfig,
  ...reactConfig,
  ...typescriptConfig,
  ...prettierConfig,
  additionalPlugins,
  customRules,
];
