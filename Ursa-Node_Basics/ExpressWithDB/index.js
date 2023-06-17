//<======================Lec17March10-Introducing MVC Architecture=================================>
/*
const express = require('express');
const {getUserList} =require("./src/controllers/userControllers");

const app = express();


app.get('/', getUserList)

const PORT = 5800
app.listen(PORT, ()=>{
    console.log(`express server running at ${PORT} `)
})
*/
//<======================END: Lec17March10-Introducing MVC Architecture=================================>



//
//<======================Lec18March12-Better Folder Structure=================================>
//lec 19 me index me koi code nhi likha
/*
const express = require('express');
const {getUserList} =require("./src/controllers/userControllers");
const app = express();

const userRouter = require('./src/routes/userRoutes')

app.use(express.json())//middleware to read your json from your postman and console it on your terminal as obj format

app.use('/user', userRouter)
require('./dbConnection')

//product
// app.get('/product', () =>{
    
// })
// app.get('/product/clothing', () =>{

// })


const PORT = 5800
app.listen(PORT, ()=>{
    console.log(`express server running at ${PORT} `)
})
*/
//<======================END: Lec18March12-Better Folder Structure=================================>

//
//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
const express = require("express");
const {getUserList} = require("./src/controllers/userControllers");

const app = express();

const userRouter = require('./src/routes/userRoutes')
//lec20
const productRouter = require('./src/routes/productRoute')
//

app.use(express.json())//middleware to read your json from your postman and console it on your terminal as obj
app.use('/user', userRouter)

//
app.use('/product', productRouter)
//

require('./dbConnection')//dbConnection ko connect kiya
// http://localhost/5800

//user

// //is pure code ko userRoute me routes me likhenge
// app.get('/user', getUserList);//reading a user
// app.post('/user',()=>{
    
// })
// app.get('/user/address', ()=>{
    
// })
// app.get('/user/orders', ()=>{

// })


//products
// product routes ki tarah bhi kar sakte ha
// app.get('/product', ()=>{
    
// })
// app.get('/product/clothing', ()=>{

// })


const PORT = 5800;
app.listen(PORT,()=>{
    console.log(`express server running on ${PORT}`);
})

//<======================End: Lec20March=================================>