var markdown = require('micromarkdown');

// expand descriptions markdown
// takes: a string
// returns: a string
module.exports = function(data) {

	return markdown.parse(data);

}