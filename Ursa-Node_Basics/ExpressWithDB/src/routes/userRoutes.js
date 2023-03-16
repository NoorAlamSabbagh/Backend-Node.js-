//<======================Lec18March12-Better Folder Structure=================================>
/*
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
*/
//<======================End: Lec18March12===================================>




//<======================Lec19March14-Updating a document -update first Scale your Ecommerce data=================================>
//Is lec19 me srif updateUser Routes ka code likha ha bs

const express = require("express");
const {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

// http://localhost/5800/user
router.get("/", getUserList); //reading user list
router.get("/singleUser", getUser);
router.post("/", createUser);
router.get("/address", getUserAddress);
router.get("/orders", getUserOrders);
// router.patch("/:id", updateUser);
router.patch("/:email", updateUser);
//lec20
router.delete('/:id', deleteUser)

module.exports = router;

//<======================End: Lec19March14=================================>