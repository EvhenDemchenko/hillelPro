const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: [
            path.join(__dirname, "./src/js/main2.js"),
            path.join(__dirname, "./src/scss/index.scss"),
        ]
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html' }),
        new miniCssExtractPlugin()
    ]
}