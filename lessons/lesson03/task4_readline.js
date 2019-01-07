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
/*
rl.question('operand 1: ', o1 => {
	rl.question('operator: ', o => {
		rl.question('operand 2: ', o2 => {
			console.log(eval(`${o1}${o}${o2}`));
			rl.close();
		});
	});
}); */

const question = q => {
	return new Promise(res => {
		rl.question(q, o => {
			res(o);
		});
	});
};

let op1, op, op2;
question('operand 1: ')
	.then(o1 => {
		op1 = o1;
		return question('operator: ');
	})
	.then(o => {
		op = o;
		return question('operand 2: ');
	})
	.then(o2 => {
		op2 = o2;
		console.log(eval(op1 + op + op2));
		rl.close();
	});
