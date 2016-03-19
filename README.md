# folderFileReader
reads files by extension from folder, returns array of files

###example

```javascript
//returns all the html files in the designated folder
var folderFilesReadr = require('./folderFilesReadr.js');
var folder = './folder';
var ext = 'html'
console.log( folderFilesReadr(folder, ext));
```
