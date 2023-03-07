const mongoose = require('mongoose');

// used to connect our node server with mongoDB
// connect methods returns a promise
mongoose.connect("mongodb://localhost:27017/NSUrsa")//monogodb ka server ha ye
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`Error: ${err.message}`);
})