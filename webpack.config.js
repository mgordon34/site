var path = require('path');

//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//  template: './src/index.html',
//  filename: 'index.html',
//  inject: 'body'
//})

module.exports = {  
  entry: path.resolve(__dirname, 'src/client.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    host: '192.168.56.101',
    contentBase: './public',
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  node: {
    dns: 'mock',
    net: 'mock'
  }
};
