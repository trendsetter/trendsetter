// strip unnecessary leading and trailing whitespace
// takes: a string
// returns: a string
module.exports = function(data) {

	// replace tabs with spaces (YAML does not support tabs)
	data = data.replace(/\t/g, '  ');

	// split the string into individual key/value pairs
	data = splitIntoItems(data);

	// loop through each item and further clean
	for(var i=0; i<data.length; i++){

		// ensure each item is a string
		data[i] = data[i].toString();

		// remove leading/trailing whitespace
		data[i] = data[i].replace(/^\s+|\s+$/g,'');

		// wrap single line (contains no line-breaks) values in quotes
		if(data[i].indexOf("\n") < 1){
			// look for [: ] and wrap contents in single quotes
			data[i] = data[i].replace(/:\s(.*)/g, ": '$1'");
		}
	}

	// re-join the array items and return a string
	return data.join('\n');
}

// takes a string (formatted as YAML)
// returns an array containing the individual key/value pairs
function splitIntoItems(data){

	// split based on line breaks
	data = data.split('\n');

	// verify that data is now an array
	if(data.constructor == Array && data.length > 1){

		// loop through each item
		for(var i=0; i<data.length; i++){

			// check if the first character is a whitespace one
			// if so, assume its part of a multi-line key/value pair
			if (/^\s/.test(data[i])){

				// combine this item with the previous one
				data[i-1] += '\n' + data[i];

				// remove this item from the array
				data.splice(i, 1);

				// reset the iterator
				i--;
			}
		}
	}
	else{
		// if split didn't split then return an array
		// with a single string item
		return [data];
	}

	return data;
}