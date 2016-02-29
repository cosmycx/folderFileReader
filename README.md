# folderFileReader
reads files by extension from folder, returns array of files

<code>
//example<br>
//returns all the html files in the designated folder<br>
var folderFilesReadr = require('./folderFilesReadr.js');<br>
var folder = './folder';<br>
var ext = 'html';<br>
console.log( folderFilesReadr(folder, ext));
</code>