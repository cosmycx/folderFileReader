# folderFileReader
reads files by extension from folder, returns array of files

<code>
//example:
//returns all the html files in the designated folder
var fileReadr = require('./folderFilesReadr.js');
var folder = './folder';
var ext = 'html';
console.log( fileReadr(folder, ext));
</code>