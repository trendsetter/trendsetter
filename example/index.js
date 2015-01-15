var connect = require('connect');
var serveStatic = require('serve-static');
var root = process.cwd() + '/';

// trendsetter test - start
var trendsetter = require(root + 'lib/trendsetter.js');
var fs = require('fs');
var file = fs.readFileSync(root + 'example/assets/stylesheets/styles.styl', 'utf8');
file = trendsetter(file);
// trendsetter test - end

connect().use(serveStatic(root + 'example/public/')).listen(8080);
console.log('Server Started: http://localhost:8080');