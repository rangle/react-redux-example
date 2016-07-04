const testing = process.env.TEST;

exports.eslint = {
  test: /\.jsx?$/,
  loader: 'eslint-loader',
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css?-minimize!postcss',
};

exports.js = {
  test: /\.jsx?$/,
  loaders: testing
    ? ['babel?sourceMaps=both' ]
    : ['react-hot-loader', 'babel?sourceMaps=both'],
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!test))*\.jsx?$/,
  loader: 'istanbul-instrumenter-loader',
  query: {
    embedSource: true,
  },
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.image = {
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  loader: 'url-loader?prefix=img/&limit=5000',
};

exports.font = {
  test: /\.(woff|woff2|ttf|eot)$/,
  loader: 'url-loader?prefix=font/&limit=5000',
};
