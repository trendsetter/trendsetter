var yaml = require('js-yaml');

// strip unnecessary leading and trailing whitespace
// takes: an array of strings
// returns: an array of strings
module.exports = function(data) {
	for(var i=0; i<data.length; i++){

		// remove leading and trailing whitespace
		data[i] = data[i].replace(/^\s+|\s+$/g,'');

		// replace tabs with spaces (YAML does not support tabs)
		data[i] = data[i].replace(/\t\t/g, '  ');

		// parse string as YAML
		data[i] = yaml.safeLoad(data[i]);
	}
	return data;
}