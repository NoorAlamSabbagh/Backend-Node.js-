// 17Feb_Node_Lecture3_by_AnubhavKumar
/*
console.log("inside node js file"); //1(syn call)

const fs = require("fs");

console.log("start");//2(syn call)

setTimeout(() => {
  console.log("timer 1");
 }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// }, 1000);

console.log("end");//3(syn call)

//
setImmediate(() => {
  console.log("immidiately called");
});

fs.open("file1.txt", (err) => {
//   console.log(err);
  console.log("file openned successfully");
});


//procees aur promise vip log ha
process.nextTick(() => {
        console.log('calling next tick');
})

Promise.resolve().then(() => console.log('log from internal promise'));
*/
// <========================================================================>



// <========================================================================>
// 20Feb_Node_Lecture4_by_AnubhavKumar
// const fs = require("fs");

// setTimeout(() => {
//   console.log("timer 1");
//  }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// // }, 1000);

// //
// setImmediate(() => {
//   console.log("immidiately called");
// });

// fs.open("file1.txt", (err) => {
// //   console.log(err);
//   console.log("file openned successfully");
// });


// //procees aur promise vip log ha
// Promise.resolve().then(() => console.log('log from promise'));

// process.nextTick(() => {
//         console.log('calling next tick');//ye phele print hua due to queue concept
//         Promise.resolve().then(() => console.log('log from internal promise'))
// })



//
const fs = require("fs");

setTimeout(() => {
  console.log("timer 1");
 }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// }, 1000);

//
setImmediate(() => {
  console.log("immidiately called");
});

fs.open("file1.txt", (err) => {
//   console.log(err);
  console.log("file openned successfully");
});


//procees aur promise vip log ha
Promise.resolve().then(() => console.log('log from promise'));

//multiple nexting
process.nextTick(() => {
        console.log('calling next tick');//ye phele print hua due to queue concept
        Promise.resolve().then(() => {
          console.log('log from internal promise');
          setImmediate(() => {
              console.log('immidiate from internal ');
          })
      })
  })