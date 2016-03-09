var webpack = require('webpack');

module.exports = {

  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: __dirname
    }]
  }
};
