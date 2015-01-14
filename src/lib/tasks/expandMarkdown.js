var markdown = require('micromarkdown');

// loop through data and expand all markdown
// takes: the data hash
// returns: the data hash
module.exports = function(data) {

	// loop through each item in the data array
	for(var index=0; index < data.length; index++){
		var dataItem = data[index];

		// loop through each key/value pair
		for(var key in dataItem){
			if(dataItem.hasOwnProperty(key)){

				// expand any markdown held in the value
				dataItem[key] = markdown.parse(dataItem[key]);
			}
		}
	}
	return data;
}