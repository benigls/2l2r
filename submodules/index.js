var fs = require('fs'),
	xml = require('./xml'),
	shell = require('./shell'),
	json = require('./json');

var alchemyAPI = require('alchemy-api'),
	apiKeys = require('../api-keys.json'),
	alchemyApiKey = apiKeys[0].key,
	alchemy = new alchemyAPI(alchemyApiKey);




var AI = function () {
	var callback = function (err, response) {
		xml.generateXML(response.text, shell);
		return json.getResult();
	};

	this.run = function (url) {
		var alchemyApiKey = apiKeys[0].key,
			alchemy = new alchemyAPI(alchemyApiKey);

		alchemy.text(url, {}, callback);
	};
};

module.exports = new AI();