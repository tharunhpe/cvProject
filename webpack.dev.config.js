const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader/useable', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname),
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: ['file-loader'],
            }            
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname),
            path.resolve(__dirname, 'js', 'fw', 'lib')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
        new HtmlWebpackPlugin({
            title: 'hashMAPS',
            description: 'Connecting professionals',
            username: 'Tharun Kariveda',
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            "css" : 'styles.css',
            hash: false
        })
    ]
};
