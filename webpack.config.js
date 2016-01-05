var vue = require('vue-loader');
var coffee = require('coffee-loader');
var webpack = require('webpack');

module.exports = {
    entry: {
        app:'./src/main.coffee',
        vendors: ['vue','jquery','vuex','vue-router']
    },
    output: {
        path: './static',
        publicPath: '/static/',
        filename: 'app.js'
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
   plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
