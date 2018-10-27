"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const storage = require("node-persist");
const crypto = require('crypto-js');
const argv = require('yargs')
	.command('create_account','This command creates the account!', function(yargs){
		yargs.options({
			username: {
				demand: true,
				description: 'This variable is account username',
				alias: 'u',
				type: 'string'
			},
			mail: {
				demand: true,
				description: 'This variable is account mail',
				alias: 'm',
				type: 'string'
			},
			password: {
				demand: true,
				description: 'This variable is account password',
				alias: 'p',
				type: 'string'
			},
			passwordKey: {
				demand: true,
				description: "This key usage for your's password encrypt",
				alias: 'k',
				type: 'string'
			}
		}).help('help');
	}).help('help')
	.command('get_account', 'This command get the account', function(yargs){
		yargs.options({
			username: {
				demand: true,
				description: 'This variable is account username',
				alias: 'u',
				type: 'string'
			},
			password: {
				demand: true,
				description: 'This variable is account password',
				alias: 'p',
				type: 'string'
			},
			passwordKey: {
				demand: true,
				description: "This key usage for your's password encrypt",
				alias: 'k',
				type: 'string'
			}
		}).help('help');
	}).help('help')
	.argv;
storage.initSync();
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*----------------------------------------- Control Structure -----------------------------------------*/
if(argv._[0] === 'create_account' && argv.username.length > 0 && argv.mail.length > 0 && argv.password.length > 0 && argv.passwordKey.length > 0) {
	try {
		let account = createAccount({
			username: argv.username,
			mail: argv.mail,
			password: argv.password
		},argv.passwordKey);
		console.log(`${account} => was successfully!`);
	} catch (error) {
		console.log("Account not created!! Check the information...");
	}
}
else if(argv._[0] === 'get_account' && argv.username.length > 0 && argv.password.length > 0 && argv.passwordKey.length > 0){
	try {
		let account = getAccount(argv.username, argv.password, argv.passwordKey);
		if(typeof account === 'undefined') console.log('Wrong !!!!!');
		else console.log(`${account} => yours account!`);
	} catch (error) {
		console.log("No account!! Check the information...");
	}
}
else console.log('Wrong !!!!!');
/*----------------------------------------- Control Structure -----------------------------------------*/

/*---------------------------------------- Create-Get Structure ----------------------------------------*/
function createAccount(account, passwordKey){
	//Take accounts => getItemSync
	let accounts = storage.getItemSync("accounts");

	//Create array account if not account
	accounts = typeof accounts === 'undefined' ? [] : accounts;

	//Add to account in array
	let encryptedAccount = crypto.AES.encrypt(JSON.stringify(account), passwordKey);
	accounts.push(encryptedAccount.toString());

	//Save account => setItemSync
	storage.setItemSync("accounts",accounts);
	return JSON.stringify(account);
}
function getAccount(username, password, passwordKey){
	//Take accounts => getItemSync
	let accounts = storage.getItemSync("accounts");
	let matchedAccount;
	
	//Find accounts with forEach
	accounts.forEach(function(account){
		let bytes = crypto.AES.decrypt(account, passwordKey);
		account = bytes.toString(crypto.enc.Utf8);
		if(typeof account !== 'undefined' && account.length > 0){
			account = JSON.parse(account);
			matchedAccount = account.username == username && account.password == password ? account : 'undefined';
		}
	})
	matchedAccount = JSON.stringify(matchedAccount)
	return matchedAccount;
}
/*---------------------------------------- Create-Get Structure ----------------------------------------*/

/*------------------------------ First Example ------------------------------
createAccount({
	appName: "Twitter",
	userName: "crazycoder",
	password: "123"
});
let account = getAccount('Twitter');
console.log(account);
*/