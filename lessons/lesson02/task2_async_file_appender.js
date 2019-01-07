const fs = require('fs');
const inputDir = '.\\lesson02\\input\\';
// Append the files from the input folder one after each other, order doesn't matter

const fileContents = [];

let files = fs.readdir(inputDir, (err, files) => {
	files.forEach(file => {
		console.log(file);

		fileContents.push(fs.readFileSync(`${inputDir}${file}`));
	});
});

fs.writeFileSync(`${inputDir}output.txt`, fileContents.join(''));
