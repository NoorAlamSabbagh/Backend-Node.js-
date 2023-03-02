// <===============Lec11March1: Building Restful API using Express-CRUD for Ecommerce API===============>//
//1)
/*
const express = require('express');

const app = express();

const {checkLogInStatus} = require('./middleware');

app.use(checkLogInStatus)

app.get ('/product', (req,res) =>{
    console.log('inside product route');
    res.send('product page')
})

app.get ('/profile', (req,res) =>{
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/

//2)
/*
const express = require('express');

const app = express();

const {checkLogInStatus, checkUser} = require('./middleware');
// app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//product route
app.route('/product/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})
//

//
//user Route
app.route('/user/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})

app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/

//3)
const express = require('express');

const app = express();

//after installing dotenv
const dotEnv = require('dotenv')
dotEnv.config();
app.use(express.json());

const {checkLogInStatus, checkUser} = require('./middleware');
// app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//product route
app.route('/product/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})
//

//
//user Route
app.route('/user/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})

app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

//
const PORT = process.env.PORT || 5800
// console.log(process);

app.listen(PORT, () =>{
    console.log(`app running on ${PORT}`)//maine bs 
})

// 
// I am hiding my port
// app.listen(process.env.PORT, () =>{
//     console.log(`app running at ${process.env.PORT}`)//maine bs 
// })