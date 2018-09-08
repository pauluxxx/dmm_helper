const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),
        }
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js','.css'],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("styles.css"),
      new CopyWebpackPlugin([
          {from: 'src/views', to: path.resolve(__dirname, 'dist/views ')}
      ]),],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};