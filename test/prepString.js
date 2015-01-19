var root = process.cwd();
var prepString = require(root + '/lib/util/prepString.js');
var assert = require('assert');

describe('prepString()', function(){

	it('should replace tabs with two spaces', function(){
		var input = 'foo\tbar';
		var output = 'foo  bar';
		assert.equal(prepString(input), output);
	})

	it('should wrap single line values in quotes', function(){
		var input = 'foo: bar';
		var output = "foo: 'bar'";
		assert.equal(prepString(input), output);
	})

	it('should wrap multiple single line values in quotes (individually)', function(){
		var input = 'foo: bar\nlorem: ipsum dolor sit';
		var output = "foo: 'bar'\nlorem: 'ipsum dolor sit'";
		assert.equal(prepString(input), output);
	})

	it('should remove trailing whitespace', function(){
		var input = '   foo: bar    ';
		var output = "foo: 'bar'";
		assert.equal(prepString(input), output);
	})

	it('should return valid YAML when valid YAML is passed in', function(){
		var input = '' +
		  'foo: bar\n' +
		  'lorem: ipsum dolor sit\n' +
		  'test: |\n' +
		  '  123 this: is a\n' +
		  '  multi-line test\n' +
		  'another: single liner';

		var output = '' +
		  "foo: 'bar'\n" +
		  "lorem: 'ipsum dolor sit'\n" +
		  "test: |\n" +
		  "  123 this: is a\n" +
		  "  multi-line test\n" +
		  "another: 'single liner'";

		assert.equal(prepString(input), output);
	})

});