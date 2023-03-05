//<========================Lec14March4:MongoDB=============================================>
const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRoute = require('./src/routes/userRoutes')

require('./src/connectDb')
app.use('/user', userRoute)

const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log(`express server running at ${PORT}`);
})