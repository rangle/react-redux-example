/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = '0.0.0.0';

const config = require('./webpack.config');
const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  winston.info('Bundling webpack... Please wait.');

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening at http://${ DOMAIN }:${ PORT }`);
});
