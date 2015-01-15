// main interface
module.exports = function(data){
	data = require('./util/extractComments')(data); 
	data = require('./util/cleanComments')(data);
	data = require('./util/expandMarkdown')(data);
	data = require('./util/generateView')(data);	
	data = require('./util/saveView')(data);
}