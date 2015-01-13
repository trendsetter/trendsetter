var connect = require('connect');
var serveStatic = require('serve-static');

// trendsetter test - start
var trendsetter = require('../src/lib/trendsetter.js');
var fs = require('fs');
var file = fs.readFileSync('assets/stylesheets/styles.styl', 'utf8');
file = trendsetter(file);
// trendsetter test - end

connect().use(serveStatic(__dirname+'/public/')).listen(8080);
console.log('Server Started: http://localhost:8080');