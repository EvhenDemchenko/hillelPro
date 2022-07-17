const path = require('path');
const HTMLwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app1: './app.js',
        app2: './app2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HTMLwebpackplugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module : {
        rules:[
            {
                test:/\.css$/,
                use : ['style-loader' , 'css-loader']
            }
        ]
    }
}