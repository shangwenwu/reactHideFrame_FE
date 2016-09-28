var path = require('path');
var webpack = require('webpack');
var args = require('node-args');


var config = {
    entry: {
        frameJs: './index.js'
    },
    output: {
        path: path.join(__dirname, '/assets/script'),
        publicPath: '/assets/script/',
        filename: '[name].js'
    },
    devServer: {
        port: 3000
    },
    node: {
        fs: "empty"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel?presets[]=react,presets[]=es2015"
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            exclude: /node_modules/,
            loader: "url-loader"
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: "file-loader"
        }, {
            test: /\.html$/,
            loader: "html?config=otherHtmlLoaderConfig"
        }]
    }
}

//如果是-p生产环境的build，设置NODE_ENV
if (args.p) {
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"' //production
        }),
    ];
}
module.exports = config;