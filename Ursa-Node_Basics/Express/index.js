//<===========================================================>//
// Lec8Feb24: Restful Services, Introducing express, Building first Express server

const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    console.log('///endPoint');
    res.send('<h2>Default page using express</h2>');
})

app.get('/login',(req, res)=>{
    console.log('///login endPoint');
    res.end('<h1>login page....</h1>')
})

app.get('/data',(req, res)=>{
    console.log('/// data endPoint');
    res.send({name:'Abhinav'});
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})

//<===========================================================>//