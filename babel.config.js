module.exports = {
    presets: [
        ["@babel/preset-env", { targets: "defaults" }],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
    ],
    env: {
        production: {
            plugins: ["babel-plugin-jsx-remove-data-test-id"],
        },
        development: {
            plugins: ["babel-plugin-jsx-remove-data-test-id"],
        },
    },
};
