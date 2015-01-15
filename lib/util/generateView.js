var fs = require('fs');
var handlebars = require('handlebars');
var html2jade = require('html2jade');

// fetch the required interface files and populate
// the template with the data, returns the HTML as
// a string.
module.exports = function(data){

	// house data under a key
	data = { items: data };

	// fetch the template file
	//var file = fs.readFileSync('src/lib/ui/template.html', 'utf8');
	var file = fs.readFileSync(__dirname + '/../template/index.html', 'utf8');

	// add css into the head of the template
	var css = fs.readFileSync(__dirname + '/../template/styles.css', 'utf8');
	file = file.replace('{{css}}', css);

	// add javascript into the head of the template
	var js = fs.readFileSync(__dirname + '/../template/scripts.js', 'utf8');
	file = file.replace('{{js}}', js);

	// compile the template into a Handlebars object
	var template = handlebars.compile(file);

	// populate the template with data
	return template(data);
}