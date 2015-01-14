var fs = require('fs');

module.exports = function(data){
	// write styleguide to console for testing
	console.log(data);

	// write styleguide to disk
	fs.writeFile('./public/styleguide.html', data, function(err){
		if(err) throw err;
		console.log('file saved!');
	})
}