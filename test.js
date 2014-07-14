
var sassdoc = require('sassdoc');
var logger = require('sassdoc/src/log');

var src = __dirname + '/stylesheets';
var dest = __dirname + '/docs';
// var options = Object.create(null);

var options = {
  display: {
    access: ['public'],
    alias: false,
    watermark: true
  },
  package: false
};

logger.enabled = true;

// api.parse(__dirname + '/stylesheets').then(function (results) {
//   console.log(results);
// });

sassdoc.documentize(src, dest, options);
