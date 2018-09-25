const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
/*
rl.question('Your name: ', a => {
	console.log(`Hi, ${a}!`);
	rl.close();
});*/

rl.question('operand 1: ', o1 => {
	rl.question('operator: ', o => {
		rl.question('operand 2: ', o2 => {
			console.log(eval(`${o1}${o}${o2}`));
			rl.close();
		});
	});
});
