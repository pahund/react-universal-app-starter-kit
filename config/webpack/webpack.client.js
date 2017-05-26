const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.resolve(__dirname, '../..', 'src');
const distPath = path.resolve(__dirname, '../..', 'build', 'public');

const ExtractSASS = new ExtractTextPlugin('styles.bundle.css');

module.exports = {
  context: srcPath,
  target: 'web',
  devtool: 'source-map',
  entry: './app/index.jsx',
  output: {
    path: distPath,
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: ExtractSASS.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
    ],
  },
  plugins: [
    ExtractSASS,
  ],
};
