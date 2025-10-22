const functions = require('@google-cloud/functions-framework');
const app = require('./src/app');

// HTTP Cloud Function entry point
functions.http('api', (req, res) => {
  return app(req, res);
});


