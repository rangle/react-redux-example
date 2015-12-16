// We need this to build our post string
const querystring = require('querystring'),
  path = require('path'),
  http = require('http');

const KEY = process.env.CLUSTERNATOR_SHARED_KEY,
      AUTH = process.env.CLUSTERNATOR_AUTH,
      HOST = process.env.CLUSTERNATOR_HOST,
      PR = process.env.CIRCLE_BUILD_NUM,
      REPO = process.env.CIRCLE_PROJECT_REPONAME,
      IMAGE = `rafkhan/${REPO}:pr-${PR}`,
      CLUSTERNATOR = HOST.replace(/\/$/, ""),
      PORT = 80,
      PATH = '/0.0.1/pr/create',
      APPDEF = path.join(
        __dirname, '..', '.private', 'deployments', 'pr'
      );

function getAppDef() {
  var appDef = require(APPDEF);
  appDef.tasks[0].containerDefinitions[0].environment.push({
    name: 'PASSPHRASE',
    value: KEY
  });
  appDef.tasks[0].containerDefinitions[0].environment.push({
    name: 'HOST',
    value: `${REPO}-pr-${PR}.${HOST}`
  });
  appDef.tasks[0].containerDefinitions[0].image = IMAGE;
  return JSON.stringify(appDef);
}

function post() {
  // Build the post string from an object
  var post_data = querystring.stringify({
    hello: 'Hello World',
    pr: PR,
    repo: REPO,
    image: IMAGE,
    appDef: getAppDef()
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: CLUSTERNATOR,
      port: PORT,
      path: PATH,
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data),
          'Authorization': 'Token ' + AUTH
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}

post();
