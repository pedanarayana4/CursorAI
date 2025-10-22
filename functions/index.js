const functions = require('firebase-functions');
const app = require('./src/app');

// HTTP Cloud Function (Gen1)
exports.api = functions.https.onRequest(app);