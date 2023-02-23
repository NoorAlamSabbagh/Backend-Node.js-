//<===========================================================>//
// Lec6Feb22: Creating and working files, Events module, Emitting Events
/*
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner


//  Login.emit('error');// this will throw error
Login.addListener('success', () => {//callback
    console.log('user logged in successfully');
})
Login.addListener('error', () => {
    console.log('error while logging in user');
})
//  Login.emit('success');//abhinav
//  Login.emit('success');//alam
//  Login.emit('success');//noor
 Login.emit('error');
 */

 //
/*
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner

Login.addListener('success', (username, country) => {//callback
    console.log(`${username} logged in successfully ${country}`);
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
 Login.emit('success', 'Alam');//alam
 Login.emit('success', );//noor
 Login.emit('error');
*/

//
/*
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner

//1 Listener
Login.addListener('success', (username, country) => {//callback
    console.log(`${username} logged in successfully ${country}`);
})

//2 Listener
Login.addListener('success', ()=> {
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
//  Login.emit('success', 'Alam');//alam
//  Login.emit('success', );//noor
//  Login.emit('error');
//output 2 logged
*/

//
/*
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner

//1 Listener
Login.addListener('success', (username, country) => {//callback
    console.log(`${username} logged in successfully ${country}`);
})
Login.emit('success', 'Alam', 'India')
//2 Listener
Login.addListener('success', ()=> {
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
//output 3 logged

*/

//
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner

//1 Listener
Login.addListener('success', (username, country) => {//callback
    console.log(`${username} logged in successfully ${country}`);
})
Login.emit('success', 'Alam', 'India')
//2 Listener
Login.on('success', ()=> {//define listener as ON
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
//output 3 logged

 
