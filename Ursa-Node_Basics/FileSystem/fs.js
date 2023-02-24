//<===========================================================>//
// Lec5Feb21: Using Core Module, OS Module
// File system CRUD

const fs = require("fs");
// const { clearScreenDown } = require("readline");

// const fsPromise = require('fs/promises');//(most latest way of handelling promises)

/*
//
// working with Directories
//below code create new directory
// fs.mkdir('new', (err) => {
//     console.log(err);
// })

//
// fs.mkdir('FileSystem/new', (err) => {
//     console.log(err);
// })

//
// console.log('start');
// fs.mkdir('FileSystem/myDir/alam', {recursive: true}, (err) => {
//     if(err){
//         console.log(err);
// }else{
//     console.log('created successfully');
// }
// });
// console.log('end');


//agar upar wala hi code sync method se karu 
console.log('start');
// fs.mkdir('FileSystem/myDir/alam', {recursive: true}, (err) => {
//     if(err){
//         console.log(err);
// }else{
//     console.log('created successfully');
// }
// });


// sycronous execution of mkdir
fs.mkdirSync('FileSystem/my')                     
console.log('end');
*/

//
// fs.readdir('Filesystem', (e, files) => {
//     if(e){
//         console.log(`error occured: ${e.message}`);
//     } else{
//         console.log('getting files here');
//         console.log(files);
//     }
// })

//
/*
fs.readdir('Filesystem', (e, files) => {
    if(e){
        console.log(`error occured: ${e.message}`);
    } else{
        console.log('getting files here');
        console.log(files);
    }
})
*/

//
/*
fs.rmdir('Filesystem/my', {recursive: true}, (err) => {
    if(err){
        console.log(`error occured: ${err.message}`);
    } else{
        console.log('deleted succesfully');
    }
})
*/
//don with directory
//<===========================================================>//




//<===========================================================>//
// Lec6Feb22: Creating and working files, Events module, Emitting Events

//
// CRUD on files
/*
// if file is not there then it will create one, and then write the content
// if file is there already then it will overwrite the content in that file
fs.writeFile('Filesystem/myFile.txt', 'hi this is Abhinav', (err) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    }
  })
  */ 

  /*
  // if file is not there then it will create one, and then write the content
  // if file is there already then it will append the content in that file
  fs.appendFile('Filesystem/File.txt', '\nHi this line no 1', (err) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    }else{
      console.log('file appended successfully');
    }
  })
*/
//   fs.open('Filesystem/File.txt', 'r') 

/*
// open
  fs.open('Filesystem/File.txt', 'r', (err, file) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    }else{
      console.log(file);
      console.log('file appended successfully');
    }
  })
*/

//
/*
  fs.readFile('Filesystem/File.txt', 'utf-8', (err, file) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    }else{
      // console.log(file+'');
      console.log(file);
      console.log('file reading successfully');
    }
  })
  */

  
  //to delete file
  /*
  fs.unlink('Filesystem/myFile.js', (err) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    } else{
      console.log('file deleted successfully');
    }
  })
  */

  //same code as above, now using async method
  /* 
  const fsPromise = require('fs/promises');//(most latest way of handelling promises)
  const deleteFile = async() => {
    await fsPromise.unlink('Filesystem/myFile.txt');
  }
  
  deleteFile(); 
  */
  
  /*
 (function(){
  
  })()
*/





//callback
/*
fetch('https://myapi.com')
.then((data) => {
})

.catch(() => {

})
*/

//
// const callmyApi = async() => {
//   await fetch('https://myapi.com')
// }

//<===========================================================>