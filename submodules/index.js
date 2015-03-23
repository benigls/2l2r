var js2xmlparser = require('js2xmlparser'),
	fs = require('fs'),
	alchemy = require('./alchemy'),
	xml = require('./xml');

var templateXML = {
	'@': {
		'lang': 'EN'
	},
	'pair': [
	]
};

var url = 'https://twitter.com/privacy?lang=en';

var content = alchemy.getContent(url);

console.log(content);