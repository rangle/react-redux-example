import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

const context = require.context('./', true, /^(.(?!tests\.entry))*\.js$/);

context('./index.js');

context.keys().forEach(
  key => {
    if (/\.test\.js$/.test(key)) {
      context(key);
    }
  });

