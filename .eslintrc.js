module.exports = {
    root: true,
    extends: [
        "airbnb-base",
        "prettier",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended"
    ],
    parser: "babel-eslint",
    env: {
        node: true,
        browser: true,
    },
    plugins: ["prettier", "import", "react"],
    rules: {
        "array-bracket-spacing": [1, "always"],
        "no-duplicate-imports": "off",
        "no-restricted-imports": ["error", "@atlaskit/modal-dialog"],
        "import/extensions": ["error", "never"],
        "import/default": ["error", "never"],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true }
        ],
        "no-unused-expressions": "off",
        "no-console": "off",
        "react/no-array-index-key": "off",
        "prettier/prettier": "error",
        "react/default-props-match-prop-types": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/no-typos": "off",
        "prefer-destructuring": "off",
        quotes: [1, "single", "avoid-escape"],
        "space-before-blocks": [1, "always"]
    }
};
