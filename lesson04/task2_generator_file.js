const fs = require('fs');
const util = require('util');
const co = require('co');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readDirectory = util.promisify(fs.readdir);

const inputDir = '.\\lesson02\\input\\';

function readFiles(files) {
	const readFilePromises = files.map(filename => readFile(filename));
	return Promise.all(readFilePromises);
}

function* exercise() {
	try {
		const files = yield readDirectory(inputDir);
		const fileNames = files.map(file => `./lesson02/input/${file}`);
		const fileContents = yield readFiles(fileNames);
		const contentsJoined = fileContents.join('');
		yield writeFile('output.txt', contentsJoined);
		console.log('yay');
	} catch (e) {
		console.log(e);
	}
}

co(exercise).then(() => console.log('co végzett'));
