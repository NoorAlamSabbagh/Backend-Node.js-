//<========================Lec14March4:MongoDB=============================================>
const express = require('express');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const userRoute = require('./src/routes/userRoutes')//to connectuserRoutes

app.use(express.json())

require('./connectDb')//to connnect mongodb with my index.js(require runs the whole file not only that code)
app.use('/user', userRoute)//middleware to connect router in your main file(index.js)

const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log(`express server running at ${PORT}`);
})
//<========================End Lec15March6=============================>