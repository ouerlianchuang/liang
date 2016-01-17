var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = "/static/";

module.exports = {
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
          }
        ]
    },
    resolve: {
        extensions: ['', '.coffee', '.js'],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    devtool: "source-map",
};
