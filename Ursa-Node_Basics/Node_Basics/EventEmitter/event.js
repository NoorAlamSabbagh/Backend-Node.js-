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
Login.on('success', ()=> {//define listener as ON
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
//output 3 logged
*/
//<===========================================================>//


//<===========================================================>//
// Lec7Feb23: Creating and working files, Events module, Emitting Events
const Event = require('events');

//
// const SignUp = new Event();
// // runs only one time
// const successSignup = () =>{
//     console.log(`signup is successful`);
// }
// SignUp.addListener('success', successSignup);//listener
// SignUp.emit('success');


//
// const SignUp = new Event();
// // runs only one time
// const successSignup1 = () =>{
//     console.log(`signup is successful first`);
// }
// const successSignup2 = () =>{
//     console.log(`signup is successful second`);
// }
// SignUp.addListener('success', successSignup1);
// SignUp.addListener('success', successSignup2);
// SignUp.emit('success');

//
/*
const SignUp = new Event();
// runs only one time
const successSignup1 = (name) =>{
    console.log(`first signup is successful ${name}`);
}
const successSignup2 = (name) =>{
    console.log(`second signup is successful ${name}`);
}
SignUp.addListener('success', successSignup1);
SignUp.on('success', successSignup2);
SignUp.emit('success', 'Noor', 'Alam');

// removeListener removes one listener whatever we pass as a second argument
// SignUp.removeListener('success', successSignup1);
SignUp.off('success', successSignup1);
SignUp.emit('success','sameer');
*/

//
/*
const SignUp = new Event();

const successSignup1 = (name) =>{
    console.log(`first signup is successful ${name}`);
}
const successSignup2 = (name) =>{
    console.log(`second signup is successful ${name}`);
}
SignUp.addListener('success', successSignup1);
SignUp.on('success', successSignup2);
SignUp.emit('success', 'Noor', 'Alam');

// removeAllListener removes for the event
SignUp.removeAllListeners('success');
SignUp.emit('success','sameer');
*/


//doubt in this code
/*
const SignUp = new Event();
const successSignup2 = (name) =>{
    console.log(`second signup is successful`);
}

SignUp.on('success', successSignup2);
SignUp.once('success', ()=>{
    console.log('running only once');
})
SignUp.emit('sucess', 'Abhinav');
SignUp.emit('sucess', 'Alam');
*/

/*
const SignUp = new Event();//to create instant of event class
const successSignup2 = (name) =>{
    console.log(`second signup is successful`);
}

SignUp.on('success', successSignup2);//on is the object of event class
SignUp.once('success', ()=>{
    console.log('running only once');
})
SignUp.emit('sucess', 'Abhinav');
// deprecated
console.log(SignUp.listenerCount('success'));//give listener number
*/

// Login.emit('error');
//<===========================================================>//