var responseHelper = {
	success: function(body) {
		return {
			status: 'success',
			body: body
		};
	},
	fail: function(body) {
		return {
			status: 'fail',
			body: body
		};
	},
}

module.exports = responseHelper;
