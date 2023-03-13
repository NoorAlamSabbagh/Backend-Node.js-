const express = require("express");
const {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
} = require("../controllers/userControllers");

const router = express.Router();

// http://localhost/5800/user
router.get("/", getUserList); //reading user list
router.get("/singleUser", getUser);//for single user(filtering) 

// router.post('/',(req, res)=>{//kyoki maine user ko base router me daal diya index folder me
//     res.send('creating user')
// })
//createuser ko usercontroller me call kiya 
router.post("/", createUser);

//
// router.get('/address',(req, res)=>{
//     res.send('address of user')
// })
//getUser ko usercontroller me call kiya 
router.get('/address', getUserAddress)

//
// router.get('/orders',(req, res)=>{
//     res.send('user orders')
// })
router.get("/orders", getUserOrders);



module.exports = router;

// module.exports = {
//     a: 10,
//     b:20
// }
//<======================End: Lec18March12===================================>