//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
const express = require('express')
 const {getAllUsers, createUser,  getUserByEmail, getUserByAge } = require('../controllers/userController');

 const router = express.Router();

 //http://localhost:7500/user
 router.get('/all', getAllUsers)
 router.post('/', createUser)//ye tumhare usercontrollers se aa raha ha//ye slash default ha to kuch bhi pass mat karna 
router.get('/:email',  getUserByEmail )
router.get('/',  getUserByAge )

 module.exports=router

 //<========================End Lec15March6=============================>