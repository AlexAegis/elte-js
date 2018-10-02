/*function* natGen() {
	let i = 0;
	while (true) {
		yield i;
		i++;
	}
}

function* intervalGen(a, b) {
	let i = a;
	while (i < b) {
		yield i;
	}
}

const generator = natGen();
*/

function* dummyGenerator() {
	console.log('a');
	const a = yield;
	console.log('b');
	const b = yield;
	console.log('c');
	return a + b;
}

const gen = dummyGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
