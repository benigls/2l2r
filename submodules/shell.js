var sh = require('shelljs');

var Shell = function() {
	this.mkdir = function () {
		sh.mkdir('-p', ['/tmp/EN/dev', '/tmp/EN/test', __dirname + '/data/eop']);
	};

	var cdToEOP = function () {
		sh.cd('/home/ben/Excitement-Open-Platform-1.2.1/target/EOP-1.2.1/');
	};

	var runTrain = function () {
		var command = [
			'java -Djava.ext.dirs=../EOP-1.2.1/ eu.excitementproject.eop.util.runner.EOPRunner',
			'-config ./eop-resources-1.2.1/configuration-files/MaxEntClassificationEDA_Base+WN+TP+TPPos+TS_EN.xml',
			'-language EN',
			'-eda cMaxEntClassificationEDA',
			'-train',
			'-trainFile ./eop-resources-1.2.1/data-set/English_dev.xml',
			'-trainDir /tmp/EN/dev',
			'-output ' + __dirname + '/data/eop/'
		].join(' ');

		cdToEOP();
		
		if (sh.exec(command).code !== 0) {
  			sh.echo('EOP stops');
  			sh.exit(1);
		}
	};

	var runAnnotate = function () {
		var command = [
			'java -Djava.ext.dirs=../EOP-1.2.1/ eu.excitementproject.eop.util.runner.EOPRunner',
			'-config ./eop-resources-1.2.1/configuration-files/MaxEntClassificationEDA_Base+WN+TP+TPPos+TS_EN.xml',
			'-language EN',
			'-model MaxEntClassificationEDA_Base+WN+TP+TPPos+TS_EN',
			'-test',
			'-testFile ' + __dirname + '/data/eop/input.xml',
			'-testDir /tmp/EN/test',
			'-output ' + __dirname + '/data/eop/'
		].join(' ');

		cdToEOP();

		if (sh.exec(command).code !== 0) {
  			sh.echo('EOP stops');
  			sh.exit(1);
		}	
	};


	this.train = function () {
		this.mkdir();
		runTrain();
	};

	this.annotate = function () {
		this.mkdir();
		runAnnotate();
	};

};

module.exports = new Shell();