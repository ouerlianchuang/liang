webpack = require 'webpack'
WebpackDevServer = require 'webpack-dev-server'
config = require './webpack.config'

config.entry.app.unshift "webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server"

config.plugins.push new webpack.HotModuleReplacementPlugin()

proxy = {}

app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
});

app.listen(9090);
