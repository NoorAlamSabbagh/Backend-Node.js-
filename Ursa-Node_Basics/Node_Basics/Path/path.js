//<============================Lec5Feb21_UsingCoreModule, OS_Module=========================> 
// const path = require('path');
// console.log(path);

//
/*
const {dirname, basename, extname} = require('path');

const pathDirNAme = dirname("/D:\Newton\Backend\SourceCodeNode.js\Node_Basics\export-import\info.js");
console.log('dirName', pathDirNAme);

const pathFileName = basename("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js");
console.log('pathFileName', pathFileName);

const pathFileNameWithOutExt = basename("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js", '.js');
console.log('pathFileNameWithOutExt', pathFileNameWithOutExt);

const pathFileExtName = extname("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.png");
console.log('pathFileExtName', pathFileExtName)
*/

// 
/*
const {dirname, basename, extname, join, isAbsolute} = require('path');

const pathDirNAme = dirname("/D:\Newton\Backend\SourceCodeNode.js\Node_Basics\export-import\info.js");
console.log('dirName', pathDirNAme);

const pathFileName = basename("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js");
console.log('pathFileName', pathFileName);

const pathFileNameWithOutExt = basename("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js", '.js');
console.log('pathFileNameWithOutExt', pathFileNameWithOutExt);

const pathFileExtName = extname("/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.png");
console.log('pathFileExtName', pathFileExtName)

const rootPath = "/Users/abhinav/Desktop/Ursa/BE/Node_Basics";
// const rootPath = "D:\Newton\Backend\SourceCodeNode.js\Node_Basics\Path";
const infoJSPath = join(rootPath, "pathModule/test",  "export-import/info.js");
const BeImagePath = join(rootPath, "Images/eventLoop.png")
console.log('infoJSPath', infoJSPath);
console.log('BeImagePath', BeImagePath);

const isPathAbsolute = isAbsolute(rootPath);
console.log("isPathAbsolute", isPathAbsolute);
*/

// /Users/abhinav/Desktop/Ursa/BE/Node_Basics/pathModule/export-import/info.js



// relative path
// const {name} = require('Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js');

// absolute path
// "/Users/abhinav/Desktop/Ursa/BE/Node_Basics/export-import/info.js"
// "/Users/abhinav/Desktop/Ursa/BE/Node_Basics/package.json"




// values
// const a= 100
// const b = 20
// const c = a+20 // 30

// iske baad os module dekho
//<============================END: Lec5Feb21_UsingCoreModule, OS_Module=========================> 