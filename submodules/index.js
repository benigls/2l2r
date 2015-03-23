var fs = require('fs'),
	xml = require('./xml');

var alchemyAPI = require('alchemy-api'),
	apiKeys = require('../api-keys.json'),
	alchemyApiKey = apiKeys[0].key,
	alchemy = new alchemyAPI(alchemyApiKey);

var url = 'https://twitter.com/privacy?lang=en';

function getContent(url) {
	var alchemyApiKey = apiKeys[0].key,
		alchemy = new alchemyAPI(alchemyApiKey),
		content;

	alchemy.text(url, {}, callback);
}

function callback(err, response) {
	xml.generateXML(response.text);
}


getContent(url);