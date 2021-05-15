const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
__webpack_base_uri__ = '';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '../', 'public', 'js'),
        filename: 'bundle.[contenthash].js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            filename: '../index.html'
        }),
        new CleanWebpackPlugin()
    ]
};