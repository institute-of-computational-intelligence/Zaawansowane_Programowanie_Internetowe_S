var htmlWebpackPlugin = require ('html-webpack-plugin');
var path = require ('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.join (__dirname, './build/'),
    filename: 'bundle.js',
  },
  watch: true,
  resolve: {extensions: ['.js', '.ts']},
  devServer: {
    contentBase: path.join (__dirname, './build/'),
    port: 9000,
  },
  module: {
    rules: [{test: /\.ts$/, loader: 'ts-loader'}],
  },
  plugins: [
    new htmlWebpackPlugin ({
      hash: true,
      title: 'Nasza pierwsza aplikacja typescript',
      myPageHeader: 'Nasza pierwsza aplikacja typescript',
      template: './build/index.html',
      chunks: ['vendor', 'shared', 'app'],
      path: path.join (__dirname, './build/'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([ { from: 'src/static', to: 'static' } ])
  ],
};
