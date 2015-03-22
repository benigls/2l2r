var alchemyAPI = require('alchemy-api'),
	apiKeys = require('../api-keys.json');

var Alchemy = function () {
	this.getContent = function (url) {
		var alchemyApiKey = apiKeys[0].key,
			alchemy = new alchemyAPI(alchemyApiKey),
			content;

		alchemy.text(url, {}, function(err, response) {
	  		if (!err) {
	  			content = response;
	  		}
		});

		return content;
	};
};

module.exports = new Alchemy();