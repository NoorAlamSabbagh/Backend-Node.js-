//<========================Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>
/*
const mongoose = require('mongoose');

// used to connect our node server with mongoDB
// connect methods returns a promise
mongoose.connect("mongodb://localhost:27017/NSJune2022")//monogodb ka server ha ye
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`Error: ${err.message}`);
})
*/
//<========================END: Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>


//
//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
const mongoose = require('mongoose');

// used to connect our node server with mongoDB
// connect methods returns a promise
mongoose.connect("mongodb://localhost:27017/NSJune2022")//monogodb ka server ha ye(DatabaseName ha ye)
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`Error: ${err.message}`);
})

//<====================END: Lec15March6: Schemas Models, saving a document, querrying a document===================>