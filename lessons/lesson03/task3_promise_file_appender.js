const fs = require('fs');
const util = require('util');
//const readDir = util.promisify(fs.readdir);

const inputDir = '.\\lesson02\\input\\';
// Append the files from the input folder one after each other, order doesn't matter
const readDir = dir =>
	new Promise((res, rej) => {
		fs.readdir(dir, (err, files) => {
			if (err) {
				rej(err);
			} else {
				res(files);
			}
		});
	});

//const readFile = promisify(fs.readFile);
//const writeFile = promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readDir(inputDir).then(console.log);

readDir(inputDir)
	.then(files => files.map(file => './input/' + file))
	.then(files => readFiles(files))
	.then(contents => contents.join(''))
	.then(allContent => writeFile('./output.txt', allContent));
//.catch(console.log);

function readFiles(files) {
	const readFilePromises = files.map(filename => readFile(filename));
	return Promise.all(readFilePromises);
}

function promisify(fn) {
	return (...args) => {
		return new Promise((res, rej) => {
			fn(...args, (err, result) => {
				if (err) {
					rej(fn);
				} else {
					res(result);
				}
			});
		});
	};
}

/*

readDir(inputDir)
	.then(files => readFiles(files))
	.then(contents => contents.join(''))
	.then(allContent => writeFile('output.txt', allContent));

const fileContents = [];
let filesLeft = [];

fs.readdir(inputDir, (err, files) => {
	filesLeft = files.length;
	files.forEach(file => {
		console.log(file);
		fs.readFile(`${inputDir}${file}`, (err, content) => {
			handleFileRead(content);
		});
	});
});

function handleFileRead(fileContent) {
	fileContents.push(fileContent);
	filesLeft--;
	if (filesLeft === 0) {
		console.log(fileContents.join(''));
		fs.writeFile(`${inputDir}output.txt`, fileContents.join(''), err => {});
	}
}
*/
