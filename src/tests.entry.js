import 'babel-polyfill';

const context = require.context('./', true, /^(.(?!tests\.entry))*\.js$/);

context('./index.js');

context.keys().forEach(
  key => {
    if (/\.test\.js$/.test(key)) {
      context(key);
    }
  });

