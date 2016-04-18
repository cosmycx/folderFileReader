# folderFileReadr
Reads files by extension from folder, returns array of files

###example

```javascript
//returns all the html files in the current path folder
var folderFilesReadr = require('folderFilesReadr');
var folder = './';
var ext = 'html';
console.log(folderFilesReadr(folder, ext));
```
