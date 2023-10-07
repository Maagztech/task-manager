


const mailgun = require("mailgun-js");
const DOMAIN = 'https://api.mailgun.net/v3/sandboxc64ada412f0c4677bef377308c28adbe.mailgun.org';
const api_key = '155c514a6d03328b594ee908faefa69f-53ce4923-b4076a1d';

const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'pasutosh15@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});