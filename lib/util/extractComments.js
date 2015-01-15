// parse a string for styleguide comment blocks
// takes: a string
// returns: an array of strings
module.exports = function(data) {

	var matches = [];

	// scan for styleguide comments 
	var regexExpression = /\/\*gd([\s\S]*?)\*\//g;
	while ((match = regexExpression.exec(data)) != null){
		matches.push(match[1]);
	}
	return matches;
}