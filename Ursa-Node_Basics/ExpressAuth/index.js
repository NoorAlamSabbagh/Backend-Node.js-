//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
require('./connectDb')

app.use(express.json()) //iske bina body undefined show karega

const userRouter = require('./src/routes/userRoutes');
app.use('/user', userRouter);

const PORT = process.env.PORT

    app.listen(PORT, ()=>{
        console.log(`auth server running at ${PORT}`);
    })
//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>