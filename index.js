module.exports = {
  "root": true,

  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true,
  },

  "extends": [
    "adorable-base",
    "plugin:react/recommended",
  ],

  "plugins": [
    "react"
  ],

  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true,
    },
  }
};
