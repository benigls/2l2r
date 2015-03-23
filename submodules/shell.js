var sh = require('shelljs');

var Shell = function() {
	this.config = 'MaxEntClassificationEDAModel_Base+WN+TP+TPPos+TS_EN';

	var makeTemp = function() {
		sh.mkdir('-p', ['/tmp/EN/dev', '/tmp/EN/test']);
	};

	var cdToEOP = function () {
		sh.cd('/home/ben/Excitement-Open-Platform-1.2.1/target/EOP-1.2.1/');
	};

	var runTrain = function () {
		var command = [
			'java -Djava.ext.dirs=../EOP-1.2.1/ eu.excitementproject.eop.util.runner.EOPRunner',
			'-config ./eop-resources-1.2.1/configuration-files/' + config + '.xml',
			'-language EN',
			'-train',
			'-trainFile ./eop-resources-1.2.1/data-set/English_dev.xml',
			'-trainDir /tmp/EN/dev',
			'-output ./eop-resources-1.2.1/results/res'
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
			'-config ./eop-resources-1.2.1/configuration-files/' + config + '.xml',
			'-language EN',
			'-model ' + config,
			'-test',
			'-testFile /tmp/input.xml',
			'-testDir /tmp/EN/test',
			'-output ./eop-resources-1.2.1/results/res'
		].join(' ');

		cdToEOP();
		
		if (sh.exec(command).code !== 0) {
  			sh.echo('EOP stops');
  			sh.exit(1);
		}	
	};


	this.train = function () {
		makeTemp();
		runTrain();
	};

	this.annotate = function () {
		makeTemp();
		runAnnotate();
	};

};

module.exports = new Shell();