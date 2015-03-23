var fs = require('fs'),
	js2xmlparser = require('js2xmlparser'),
	hypotheses = require('./data/hypotheses');

var XML = function () {
	this.generateXML = function (text, callback) {
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
		saveXML(xml, callback);
	};

	var saveXML = function (data, callback) {
		fs.writeFile("/tmp/input.xml", data, function (err) {
			if (err) {
				return console.log(err);
			} else {
				callback.annotate();
			}
		});
	};
};

module.exports = new XML();