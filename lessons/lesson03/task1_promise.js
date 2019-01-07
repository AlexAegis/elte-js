const a = Promise.resolve('a');
/*
console.log(a);

const b = a.then(v => console.log(v));

console.log(b);

b.then(console.log);*/

a.then(v => console.log(v))
	.then(console.log)
	.catch(console.log);
