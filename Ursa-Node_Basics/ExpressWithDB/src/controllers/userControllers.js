//<======================Lec18March12-Better Folder Structure=================================>
const UserModel = require("../models/userModel")
const getUserList = (req, res)=>{
    // res.send('user List')
    //sara data show ho gaya postman pe list of data
    UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
    // always return you a list
    UserModel.find({password: '99999'})
    .then((data) => {
      res.send(data)
    })
  };

const createUser = (req, res) => {
    // get the data coming from client
    console.log("user data", req.body);
    UserModel.create(req.body)
      .then((data) => {
        console.log("data", data);
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    // we have to create a user using this data in our DB
    // res.send("creating user")
  };

const getUserAddress = (req, res)=>{
    res.send('address of user')
}

const getUserOrders = (req, res)=>{
    res.send('user orders')
}

module.exports = {getUserList, createUser, getUserAddress, getUserOrders, getUser};
//<======================End: Lec18March12=================================>