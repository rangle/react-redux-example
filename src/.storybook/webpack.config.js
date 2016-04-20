const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: path.resolve(__dirname, '../../')
      },
    ]
  },
  postcss: function postcssInit() {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
      }),
      require('postcss-cssnext')({
        browsers: ['ie >= 8', 'last 2 versions'],
      }),
    ];
  },
}
