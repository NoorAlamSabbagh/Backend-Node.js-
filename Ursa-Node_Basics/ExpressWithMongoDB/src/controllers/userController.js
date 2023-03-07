//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
const User = require('../models/userModel');

const getAllUsers = (req, res) => {
    // Read Operation
    console.log('getting all users');
    // return an array of all the documents
    User.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send({err})
    })
}

const getUserByEmail = (req, res) => {
    console.log('params',req.params); 
    const {email} = req.params
    // returns an array 
    User.findOne({email, age: 28})
    .then((user) => {
        console.log('user found');
        res.send(user)
    })

    // User.findOne({email})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })
}



const getUserByAge = (req, res) => {
    console.log('params',req.query); 
    // const {age} = req.params
    //returns an array of documents matching the conditions
    // User.find({age:req.query.age})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

     // return one single document
    // in case of multiple match return first document
    // User.findOne({age: req.query.age })
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })


     // to select some specific fields from doc
    // User.find({age: req.query.age}).select('username email')
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

     // User.find({age: req.query.age}).select({username: 1})
    // User.find({age: req.query.age}).select(['-username'])

    // to remove some specific fields

    // User.find({age: req.query.age}).select({username: 0})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })


     // limit the no of document returned
     User.find({age: req.query.age}).select({username: 1, age: 1}).limit(2)
     .then((user) => {
         console.log('user found');
         res.send(user)
     })
 
     User.find({age: req.query.age}).select({username: 1, age: 1}).limit(4)
     .then((user) => {
         console.log('user found');
         res.send(user)
     })
 
 }

//
const createUser = (req, res) => {
    //create operation
    console.log('create user', req.body)
     // this returns a promise(promise ko handle karne ke 2 tarike .then dusra aync await)
     User.create(req.body)
     .then((data) => {
         console.log('data', data);
        //  res.send('user created');
         res.send(data);
     })
     .catch((err) => {
         console.log('error occured', err);
         res.send('Something went wrong')
     })
}

module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUserByAge
}


//<========================End Lec15March6=============================>