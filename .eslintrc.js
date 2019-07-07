module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true,
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features,
    sourceType:  'module',  // Allows for the use of imports
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:react/recommended"
  ],
  "plugins": ["@typescript-eslint", "react-hooks"],
  "env": {
    "browser": true
  },
  "rules": {
    "indent": ["error", 4],
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/interface-name-prefix" : "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "semi": [2, "always"],
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-return-assign": 0,
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "only-multiline",
    }],
    "arrow-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "standard/object-curly-even-spacing": 0,
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-cond-assign": 0,
  }
};
