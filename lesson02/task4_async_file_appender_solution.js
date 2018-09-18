const fs = require('fs');
const inputDir = '.\\lesson02\\input\\';
// Append the files from the input folder one after each other, order doesn't matter

const fileContents = [];
let filesLeft = 0;

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
		fs.writeFileSync(`${inputDir}output.txt`, fileContents.join(''));
	}
}
