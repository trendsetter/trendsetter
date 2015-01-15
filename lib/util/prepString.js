var yaml = require('js-yaml');

// strip unnecessary leading and trailing whitespace
// takes: a strings
// returns: a strings
module.exports = function(data) {

	// remove leading and trailing whitespace
	data = data.replace(/^\s+|\s+$/g,'');

	// replace tabs with spaces (YAML does not support tabs)
	data = data.replace(/\t/g, '  ');

	return data;
}