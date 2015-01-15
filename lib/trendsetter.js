var yaml = require('js-yaml');
var fs = require('fs');
var prepString = require('./util/prepString');
var generateView = require('./util/generateView');
var saveView = require('./util/saveView');
var root = process.cwd();

// main interface
module.exports = function(data){

	// scan for styleguide comments 
	var styleguideData = [];
	var regexExpression = /\/\*gd([\s\S]*?)\*\//g;
	while ((match = regexExpression.exec(data)) != null){

		// save the result
		var result = match[1];

		// prep the result for yaml parsing
		result = prepString(result);

		// parse the result as yaml
		result = yaml.safeLoad(result);

		// check if any items need special formatting
		for (var key in result){
			if (fs.existsSync(root + '/lib/util/keys/' + key + '.js')){
				var formatter = require(root + '/lib/util/keys/' + key);
				result[key] = formatter(result[key]);
			}
		}

		// add the new item to the set of items
		styleguideData.push(result);
	}

	// generate the styleguide markup and write to disk
	var styleguideMarkup = generateView(styleguideData); 
	saveView(styleguideMarkup);
}