//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>

const UserModel = require("../models/userModel")

const createUser = (req, res) => {
    console.log('body', req.body)
UserModel.create(req.body)
.then((data)=>{
    res.send('user created successfully')
 })
 .catch((err)=>{
    res.send(err)
 })
}

module.exports = {createUser}


//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>



//<===============Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>
/*
const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = (req, res) => {
    console.log('body', req.body)
    //Lec22 code yaha se start kiya
    const { name, email, password, mobile, batch } = req.body;
    const saltRounds = bcrypt.genSaltSync(10);
    const securePassword = bcrypt.hashSync(password, saltRounds);
    console.log("securePassword", securePassword);


  UserModel.create({ name, email, password: securePassword, mobile, batch })
.then((data)=>{
    res.send('user created successfully')
 })
 .catch((err)=>{
    res.send(err)
 })
}


// isme login ka mail pass match kiya ha 
//ye pura auth ka code ha
// const loginUser = (req, res)=> {
// const {email, password} = req.body
// //step 1 --> find the user
// UserModel.findOne({email})
// .then((user)=>{
// console.log('user', user);
// //match the password kyoki humara pass plaintext me ha lakin data me hash ki tarah save ha pass isliye bycrpt.compareSync use kiya ha
// const status = bcrypt.compareSync(password, user.password)
// console.log('status', status);
// if(status){
// res.send('user logged in successfully');
// }else{
//     res.send('password incorrect')
// }
// })
// .catch((err)=>{
//     res.send('user is not a valid user');
// })
// }

// upar wale code me authentication ke liye session id use kar rahe the lakin wo problematic tha
//ialiye JWT Jason web token use kiya is code me 
const loginUser = (req, res) => {
    const {email, password} = req.body
    // step 1 --> find the user
    UserModel.findOne({email})
    .then((user) => {
        console.log('user', user);
        // match the password
        const status = bcrypt.compareSync(password, user.password)
        console.log('status', status);
        const secretKey = 'Newton#june#2022'//base64encoded.org 
        if(status){
            // send a JWT token
            const token = jwt.sign({
                id: user._id,
                email: user.email
            },secretKey);
            
            console.log('token', token);
            res.send('user logged in successfully')
        } else{
            res.send('password incorrect !!')
        }
    })
    .catch((err) => {
        res.send('user is not a valid user')
    })
}

const getProfile = (req, res) => {

    // res.send()
}


module.exports = {createUser, loginUser, getProfile}
*/
//<===============End of Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>




//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
/*
const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const createUser = (req, res) => {
    console.log('body', req.body)
    //Lec22 code yaha se start kiya
    const { name, email, password, mobile, batch } = req.body;
    const saltRounds = bcrypt.genSaltSync(10);
    const securePassword = bcrypt.hashSync(password, saltRounds);
    console.log("securePassword", securePassword);


  UserModel.create({ name, email, password: securePassword, mobile, batch })
.then((data)=>{
    res.send('user created successfully')
 })
 .catch((err)=>{
    res.send(err)
 })
}


// isme login ka mail pass match kiya ha 
//ye pura auth ka code ha
// const loginUser = (req, res)=> {
// const {email, password} = req.body
// //step 1 --> find the user
// UserModel.findOne({email})
// .then((user)=>{
// console.log('user', user);
// //match the password kyoki humara pass plaintext me ha lakin data me hash ki tarah save ha pass isliye bycrpt.compareSync use kiya ha
// const status = bcrypt.compareSync(password, user.password)
// console.log('status', status);
// if(status){
// res.send('user logged in successfully');
// }else{
//     res.send('password incorrect')
// }
// })
// .catch((err)=>{
//     res.send('user is not a valid user');
// })
// }

// upar wale code me authentication ke liye session id use kar rahe the lakin wo problematic tha
//ialiye JWT Jason web token use kiya is code me 
const loginUser = (req, res) => {
    const {email, password} = req.body
    // step 1 --> find the user
    UserModel.findOne({email})
    .then((user) => {
        console.log('user', user);
        // match the password
        const status = bcrypt.compareSync(password, user.password)
        console.log('status', status);
        //isko maine .env me daal diya
       
        if(status){
            // send a JWT token
            const token = jwt.sign({
                id: user._id,
                email: user.email,
            },
    
            // process.env.SECRET_KEY
            );
            
            console.log('token', token);
            //lec23March18 ka code yaha se start hua
            // res.send('user logged in successfully')
            res.json({
                message: "login successful",
                token,
                });

        } else{
            res.send('password incorrect !!')
        }
    })
    .catch((err) => {
        res.send('user is not a valid user')
    })
}

//is code se tumhe token mila user ka
// const getProfile = (req, res) => {
//     res.send('profile Page')
//     console.log('headers', req.headers)
//     // agar req.header ko destructure kar du to authorization milega
//     const {authorization} = req.headers;
//     if(authorization){
//                 const authData = authorization.split(" ");//Bearer ko hatya token se mujhe srif token chahiye
//                 const token = authData[1];
//                 console.log('token', token);
//              res.send('profile');
//             }else{
//             res.send('you have to login first !!')
//             }
// }

//
const getProfile = (req, res) => {
    // console.log('headers', req.headers)
    // agar req.header ko destructure kar du to authorization milega
    const {authorization} = req.headers;
    if(authorization){
                const authData = authorization.split(" ");//Bearer ko hatya token se mujhe srif token chahiye
                const token = authData[1];
                console.log('token', token);
                const userInfo = jwt.verify(token, process.env.SECRET_KEY);
                console.log('userInfo', userInfo);
             res.send('profile');
            }else{
            res.send('you have to login first !!')
            }
}
//stuck in this code and unable to debug
// const getProfile = (req, res) => {
//     // res.send()
//     // console.log('headers', req.headers)
//     const {authorization} = req.headers;
    
//     //maine token nikala is code me
//     if(authorization){
//         const authData = authorization.split(" ");
//         const token = authData[1];
//         console.log('token', token);
//         try{
//         const userInfo = jwt.verify(token, process.env.SECRET_KEY);
//         console.log('userInfo', userInfo);
//         UserModel.findById(userInfo.id).select({password: 0})
//         .then((user) => {
//             res.send(user)
//         })
//         }catch(err){
//             res.send(err)
//         }
//     }else{
//     res.send('you have to login first !!')
//     }
// };

//
// const getProfile = (req, res) => {
//     //   console.log("headers", req.headers);
//     console.log("id", req.userId);
//     UserModel
//     .findById(req.userId)
//     .select({ password: 0, _id: 0 })
//     .then((userData) => {
//       res.send(userData)
//     })
//     .catch(() => {
//       res.send("something went wrong!!");
//     })
//   };

//   const getBatchName = (req, res) => {
//     res.send({batchName: "juno"})
//     UserModel
//     .findById(req.userId)
//     .select({ batch: 1 })
//     .then((userData) => {
//       res.send(userData)
//     })
//     .catch(() => {
//       res.send("something went wrong!!");
//     })
// };

// const getAllUsers = (req, res) => {
//   console.log("id", req.userId);
//   UserModel.find().select({name: 1})
//   .then((userList) => {
//     res.send(userList)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// };

module.exports = {createUser, loginUser, getProfile}
*/
//<===============End of Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>