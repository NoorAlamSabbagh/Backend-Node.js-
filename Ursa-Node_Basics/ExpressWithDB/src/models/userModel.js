//<======================Lec18March12-Better Folder Structure=================================>
const {Schema, model} = require('mongoose');
//OR
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema

//Schema allow how our documents look like whereas Model allow to deal with data
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    student: Boolean
},{versionKey: false})

const User = model('student', userSchema);

module.exports = User



//
//Schema define that how the MODEL look like
/*
const {Schema, model} = require('mongoose');
const paginate = require('mongoose-paginate-v2')

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    student: Boolean
}, {versionKey: false})//DB me __v:0 karke aa raha tha isliye versionKey false kiya

userSchema.plugin(paginate)

const User = model('student', userSchema);//yaha pe student ya kuch bhi naam likho to DB me us naam ka collection ban jata ha

module.exports = User
*/
//<======================ENDLec18March12=================================>