module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    "react-native/no-unused-styles": 2,
    quotes: ["error", "double"],
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "no-use-before-define": "off",
    "import/order": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "no-nested-ternary": "off",
    "linebreak-style": ["error", "unix"],
    "react-native/no-color-literals": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "no-plusplus": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "linebreak-style": 0,
    "react/jsx-no-bind": "off",
    "react/sort-comp": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    camelcase: "off",
    "max-len": "off",
    "no-return-assign": "off",
    "jsx-one-expression-per-line": "off"
  }
};
