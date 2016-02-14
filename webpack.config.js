var webpack = require("webpack");
var vue = require("vue-loader");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = "/static/";
var plugins = [
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ];

if(process.env.NODE_ENV === 'clean-build'){
    plugins[2] =
        new HtmlWebpackPlugin({
          filename: '../index.html',
          template: './static/template/index.html'
        });
}

var config = {
    entry: {
        app:['./src/main.coffee'],
        vendors: ['vue','jquery','vuex','vue-router']
    },
    output: {
        path: __dirname + publicPath,
        filename: 'app.js',
        publicPath: publicPath,
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.coffee$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'coffee'
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
                    "style", "css!less")
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        },
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            less: ExtractTextPlugin.extract("css!less-loader")
        }
    },
    resolve: {
        extensions: ['', '.coffee', '.js'],
    },
    plugins: plugins,
    devtool: "source-map",
};
module.exports = config;
