var root = process.cwd() + '/';
var should = require('chai').should();
var extractComments = require(root + 'lib/util/extractComments.js');

describe('extractComments', function(){
	describe('no comments', function(){
		it('should return null', function(){
			var str = 'foo';
			extractComments(str).should.be.a('array').with.length(0);
		})

	});

	describe('1 comment', function(){
		it('should return 1 item', function(){
			var str = '/*gd\nhello: world\n*/';
			extractComments(str).should.be.a('array').with.length(1);
		})
	});
});