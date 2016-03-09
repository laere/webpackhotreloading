
module.exports = {

  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
      loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: __dirname
      }
    ]
  }

}
