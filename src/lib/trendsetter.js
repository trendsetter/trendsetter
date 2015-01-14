// main interface
module.exports = function(data){
	data = require('./tasks/extractComments')(data); 
	data = require('./tasks/cleanComments')(data);
	data = require('./tasks/expandMarkdown')(data);
	data = require('./tasks/generateView')(data);	
	data = require('./tasks/saveView')(data);
}