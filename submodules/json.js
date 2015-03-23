var fs = require('fs'),
	parser = require('xml2js'),
	hypotheses = require('./data/hypotheses');

var Xml2Json = function () {
	var disect = function (json) {
		var length = json['entailment-corpus'].pair.length,
			newJSON;

		for (var i = 0; i < length; i++) {
			newJSON[i].question = hypotheses[i].question;
			newJSON[i].res = json['entailment-corpus'].pair[i].$.entailment === 'NonEntailment' ? 1 : 0;
		}

		return newJSON;
	};

	this.getResult = function () {
		fs.readFile(__dirname + '/data/eop/MaxEntClassificationEDA_Base+WN+TP+TPPos+TS_EN.xml_results.xml',
			function(err, data) {
		    	parser.parseString(data, function (err, result) {
		        	if (!err) {
		        		return disect(result);
		        	}
		    	});
			});
	}; 
};

module.exports = new Xml2Json();