var fs = require('fs'),
	js2xmlparser = require('js2xmlparser'),
	hypotheses = require('./data/hypotheses');

var XML = function () {
	this.generateXML = function (text) {
		var length = hypotheses.length,
			templateXML = {
				'@': {
					'lang': 'EN'
				},
				'pair': [
				]
			},
			xml;

		for(var i = 0; i < length; i++) {
			templateXML.pair[i] = {
				'@': {
					'id': i + 1,
					'entailment': 'UNKNOWN',
					'task': 'IE'
				},
				't': text,
				'h': hypotheses[i].hypothesis
			};
		}

		xml = js2xmlparser('entailment-corpus', templateXML);
		saveXML(xml);
	};

	var saveXML = function (data) {
		fs.writeFile("/tmp/input.xml", data, function (err) {
			if (err) {
				return console.log(err);
			}
		});
	};
};

module.exports = new XML();