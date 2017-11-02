const Webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: Path.resolve(__dirname, 'src'),

  entry: {
    app: './app.js',
    admin: './admin.js'
  },

  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {

    rules: [{
      test: /\.js$/,
      include: Path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'sass-loader'
        ]
      })
    }]
  },

  plugins: [

    new Webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js'
    }),

    new ExtractTextPlugin('[name].css')
  ]

};
