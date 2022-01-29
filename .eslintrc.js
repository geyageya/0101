module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //一番効いてほしいものを最後に配置（shimabu video)
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // "ecmaVersion": "latest",
    sourceType: "module",
  },
  rules: {
    //以下二つはprettierで対応
    // "semi": ["error", "always"],
    // "quotes":["error", "double"],
    "no-undef": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    //景谷追加
    "react/display-name": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
