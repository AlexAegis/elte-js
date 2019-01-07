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

async function exercise() {
	try {
		const files = await readDirectory(inputDir);
		const fileNames = files.map(file => `./lesson02/input/${file}`);
		const fileContents = await readFiles(fileNames);
		const contentsJoined = fileContents.join('');
		await writeFile('./lesson04/output.txt', contentsJoined);
		console.log('yay');
	} catch (e) {
		console.log(e);
	}
}

exercise().then(() => console.log('async végzett'));
