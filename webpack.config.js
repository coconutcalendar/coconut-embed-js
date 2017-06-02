const path = require('path');
const webpack = require('webpack');

const regular = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'coconut-embed-js.js',
    libraryTarget: 'umd',
  },
  node: {
    process: false,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};

const minified = Object.assign({}, regular, {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'coconut-embed-js.min.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
  ],
});

module.exports = [
  regular,
  minified,
];