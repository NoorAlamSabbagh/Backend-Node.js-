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