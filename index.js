// string, string
function folderFileReader(folder, fileExtension){

    folder = folder || __dirname ;
    fileExtension = fileExtension || '';

    var fs = require('fs'),
    path = require('path'),
    files = [];

    function readFiles(inPath, callback) {
       var fs = require('fs'),
           path = require('path');
           //--
           fs.readdirSync(inPath).forEach(function (name) {
               var filePath = path.join(inPath, name);
               var stat = fs.statSync(filePath);
               if (stat.isFile()) {
                   callback(filePath);
               } else if (stat.isDirectory()) {
                   readFiles(filePath, callback);
               }
           });
    }//.readFiles

    readFiles(folder, function(filePath) {
        if( filePath.includes( ('.'+fileExtension) ) ) 
            files.push(filePath);
    });

return files;

}//.forderGetFiles

module.exports = folderFileReader;
