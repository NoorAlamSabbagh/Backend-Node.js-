//<===============Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
const {Router} = require('express');
const { createUser } = require('../controllers/userController');
const router = Router()


router.post('/', createUser);

module.exports = router;
//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>