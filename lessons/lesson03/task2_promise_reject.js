const a = Promise.reject('a');

a.then(v => console.log(v))
	.then(v => console.log('value: ' + v))
	.catch(v => console.log('error: ' + v));
