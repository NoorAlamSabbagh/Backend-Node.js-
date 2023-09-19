//<===============Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
/*
const {Router} = require('express');
const router = Router()

const { createUser } = require('../controllers/userController');


router.post('/', createUser);

module.exports = router;
*/

//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>

//<===============Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>
/*
const {Router} = require('express');
const { createUser, loginUser, getProfile} = require('../controllers/userController');
const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', getProfile);


module.exports = router;
*/

//<===============End of Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>

//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
const {Router} = require('express');
const { createUser, loginUser, getProfile} = require('../controllers/userController');
const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', getProfile);


module.exports = router;

/*
const { Router } = require("express");
const {
  createUser,
  loginUser,
  getProfile,
  getBatchName,
  getAllUsers,
} = require("../controllers/userController");
const { auth, roleBasedAuthrisation } = require("../middleware/authMiddleware");

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/profile", getProfile); //auth lagaya kyoki login me authenication check karna ha
// router.get("/batch", getBatchName); //just want to check
router.get("/batch", auth, getBatchName); //just want to check
router.get("/allusers", auth, roleBasedAuthrisation, getAllUsers);

module.exports = router;
*/
//<===============END: Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments============>
