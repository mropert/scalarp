module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "linebreak-style": 0,
        "react/jsx-no-bind": 0,
        "react/prefer-stateless-function": 1
    },
    "settings": {
      "import/resolver": "node"
//      "import/extensions" : [ ".js", ".jsx" ]
    }
};
