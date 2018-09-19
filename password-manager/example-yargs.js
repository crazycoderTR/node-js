"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const argv = require('yargs')
	.command('hello', 'Say Hi to users!', function(yargs){
		yargs.options({
			name: {
				demand: true,
				description: 'It is name variable...',
				alias: 'n',
				type: 'string'
			},
			surname: {
				demand: true,
				description: 'It is surname variable...',
				alias: 'n',
				type: 'string'
			}
		}).help('help');
	}).help('help').argv;
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*--------------------- First use of yargs ---------------------*/
if(argv._[0] === 'hello' && typeof argv.name !== 'undefined' && argv.surname !== 'undefined'){
	console.log('Hoşgeldiniz ' + argv.name + ' ' + argv.surname);
}
