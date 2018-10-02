function* natGen() {
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
