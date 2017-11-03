var path = require("path")
var webpack = require("webpack")
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
/*  entry: "./systemjs.config.js",*/
  entry: "./app/main.js",
  output: {
    // ./dist
    path: path.join(__dirname, "dist"),
    // nous aurons (vu notre point d'entrée)
    // - dist/index.js
    filename: "[name].js",
    // notre base url
    publicPath: "/",
  },

  resolve: {
    // ici, on peut ajouter nos extensions à résoudre lors d'un require()
    // on va rester simple en n'autorisant rien, ou .js(on) (comme en nodejs et
    // browserify)
    extensions: [
      "",
      ".js",
      ".json",
    ],
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },

  plugins: [
    new ExtractTextPlugin('geomap.css', {
      allChunks: true,
      disable: true
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
    new HardSourceWebpackPlugin()
  ]
};
