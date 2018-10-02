const fs = require('fs');
const { bindNodeCallback } = require('rxjs');
const { map, concatMap } = require('rxjs/operators');

const readDir = bindNodeCallback(fs.readdir);
const readFile = bindNodeCallback(fs.readFile);
const writeFile = bindNodeCallback(fs.writeFile);

const inputDir = '.\\lesson02\\input\\';

const readInputFolder$ = readDir(inputDir);

// not finished
readInputFolder$.pipe(
	map(files => files.map(file => `./lesson02/input/${file}`)).concatMap()
);
