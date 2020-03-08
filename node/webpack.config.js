const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const _externals = require('externals-dependencies');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /test/,
          /node_modules/
        ],
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    __filename: false,
    __dirname: false
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new TerserPlugin()]
    // minimizer: []
  },
  plugins: [
    new CopyWebpackPlugin(['config', '.env*', 'package.json'])
  ],
  externals: _externals()
};