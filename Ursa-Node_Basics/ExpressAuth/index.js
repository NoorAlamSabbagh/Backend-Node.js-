//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
/*
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
    */
//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express();
require('./connectDb')

app.use(express.json()) //iske bina body undefined show karega

//cors allow your server resources with all different function
app.use(cors());

app.use(express.static('./src/views'))//for static file to render

app.set('view engine', 'pug')//template engine
app.set('views', './src/views')

const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoute');



app.use('/user', userRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT

    app.listen(PORT, ()=>{
        console.log(`auth server running at ${PORT}`);
    })

// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>








// <======================END: Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
