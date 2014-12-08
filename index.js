module.exports = {
	parts: function (path) {
		var extension = path.match(/\.[a-zA-Z0-9]*$/i)[0];
		var stem = path.replace(new RegExp(extension + "$"), "");

		return {
			extension: extension,
			stem: stem
		};
	}
};
