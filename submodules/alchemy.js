var alchemyAPI = require('alchemy-api'),
	apiKeys = require('../api-keys.json');

var Alchemy = function () {
	var callback = function(err, response) {
  		if (!err) {
  			content = response.text;
  		}
	};

	this.getContent = function (url) {
		var alchemyApiKey = apiKeys[0].key,
			alchemy = new alchemyAPI(alchemyApiKey),
			content;

		alchemy.text(url, {}, callback);
	};
};

module.exports = new Alchemy();