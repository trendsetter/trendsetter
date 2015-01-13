var fs = require('fs');
var parser = require('./parser');
var generator = require('./ui/generator');

function parse(str){

	var content = parser(str);

	content = generator(content);

	console.log(content);

	fs.writeFile('./public/styleguide.html', content, function(err){
		if(err) throw err;
		console.log('file saved!');
	})
}

exports.parse = parse;