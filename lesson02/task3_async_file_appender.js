const fs = require('fs');
const inputDir = '.\\lesson02\\input\\';
// Append the files from the input folder one after each other, order doesn't matter

const fileContents = [];

async function a() {
	let content = await fs.readFile(inputDir, 'utf8');
	let result = await processAsync(content);
	return result;
}
let files = a();
console.log(files);

console.log('Hello There!');
