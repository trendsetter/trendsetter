var root = process.cwd() + '/';
var should = require('chai').should();
var extractComments = require(root + 'lib/tasks/extractComments.js');

describe('extractComments', function(){
	describe('no comments', function(){
		it('should return null', function(){
			extractComments('foo').should.be.a('array').with.length(0);
		})

	})

	describe('1 comment', function(){
		it('should return 1 item', function(){
			extractComments('/*gd\nhello: world\n*/').should.be.a('array').with.length(1);
		})
	})
});