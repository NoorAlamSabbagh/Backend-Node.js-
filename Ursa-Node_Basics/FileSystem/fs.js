// File system CRUD

const fs = require("fs");
// const { clearScreenDown } = require("readline");

/*
// const fsPromise = require('fs/promises');

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
fs.readdir('Filesystem', (e, files) => {
    if(e){
        console.log(`error occured: ${e.message}`);
    } else{
        console.log('getting files here');
        console.log(files);
    }
})