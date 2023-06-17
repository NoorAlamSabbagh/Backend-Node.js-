//<===============Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>

const {Router} = require('express');
const { createUser } = require('../controllers/userController');
const router = Router()


router.post('/', createUser);

module.exports = router;

//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>


//<===============Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>
/*
const {Router} = require('express');
const { createUser, loginUser, getProfile,} = require('../controllers/userController');
// const { auth } = require('../middleware/authMiddleware');
const router = Router()


router.post('/', createUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get('/profile', auth, getProfile);
router.get('/batch', getBatchName);


module.exports = router;
*/
//<===============End of Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>


