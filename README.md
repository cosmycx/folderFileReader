# folderFileReader
reads files by extension from folder, returns array of files

//example:
//retunrs all the html files in the designated folder
var fileReadr = require('./folderFilesReadr.js');
var folder = './folder';
var ext = 'html';
console.log( fileReadr(folder, ext));
