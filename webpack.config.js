const path = require('path');
const proxy = require('./server/webpack-dev-proxy');
const plugins = require('./webpack/plugins');
const postcss = require('./webpack/postcss');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client');
  }

  return sources;
}

module.exports = {
  entry: { app: getEntrySources(['./src/index.js']) },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'source-map',
  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' }),
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.js$/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader?prefix=font/&limit=5000' },
    ],
  },

  postcss: postcss,
};
