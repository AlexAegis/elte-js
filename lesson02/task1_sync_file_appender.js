const fs = require('fs');
const inputDir = '.\\lesson02\\input\\';
// Append the files from the input folder one after each other, order doesn't matter

const fileContents = [];

let files = fs.readdirSync(inputDir).forEach(file => {
	fileContents.push(fs.readFileSync(`${inputDir}${file}`));
});
console.log(fileContents.join(''));
