var should = require('chai').should(),
	s4rbFile = require('../index'),
	parts = s4rbFile.parts;

describe('#parts', function () {
	it('extract .ext extension from path/to/file.ext', function () {
		parts('path/to/file.ext').extension.should.equal('.ext');
	});

	it('extract path/to/file stem from path/to/file.ext', function () {
		parts('path/to/file.ext').stem.should.equal('path/to/file');
	});
});
