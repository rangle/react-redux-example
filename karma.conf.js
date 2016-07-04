process.env.TEST = true;

const loaders = require('./webpack/loaders');
const postcssInit = require('./webpack/postcss');
const plugins = require('./webpack/plugins');
const webpack = require('./webpack.config');

module.exports = (config) => {
  const coverage = config.singleRun ? ['coverage'] : [];

  config.set({
    frameworks: [
      'source-map-support',
      'jasmine',
      'sinon',
    ],

    plugins: [
      'karma-jasmine',
      'karma-sinon',
      'karma-webpack',
      'karma-coverage',
      'karma-source-map-support',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-remap-istanbul',
    ],

    files: [
      './src/tests.entry.js',
    ],

    preprocessors: {
      './src/tests.entry.js': [
        'webpack',
        'sourcemap',
      ],
    },

    webpack: Object.assign({}, webpack, {
      entry: './src/tests.entry.js',
      output: null,
      devtool: 'inline-source-map',
      verbose: true,
      module: {
        loaders: combinedLoaders(),
        postLoaders: config.singleRun
          ? [ loaders.istanbulInstrumenter ]
          : [ ],
      },
      stats: {
        colors: true,
        reasons: true,
      },
      debug: config.singleRun ? false : true,
      plugins,
      postcss: postcssInit,
    }),

    webpackMiddleware: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    reporters: ['spec']
      .concat(coverage)
      .concat(coverage.length > 0 ? ['karma-remap-istanbul'] : []),

    remapIstanbulReporter: {
      src: 'coverage/chrome/coverage-final.json',
      reports: {
        html: 'coverage',
      },
      timeoutNotCreated: 2000,
      timeoutNoMoreFiles: 2000,
    },

    coverageReporter: {
      reporters: [
        { type: 'json' },
      ],
      dir: './coverage/',
      subdir: (browser) => {
        return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'
      },
    },

    port: 9999,
    colors: true,
    logLevel: config.singleRun ? config.LOG_INFO : config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
  });
};

function combinedLoaders() {
  return Object.keys(loaders).reduce(function reduce(aggregate, k) {
    switch (k) {
    case 'istanbulInstrumenter':
    case 'eslint':
      return aggregate;
    default:
      return aggregate.concat([loaders[k]]);
    }
  },
  []);
}

