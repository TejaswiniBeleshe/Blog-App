const router = require("express").Router();
// const User = require('../models/user.model.js')
const {register,login,userIsValid} = require('../controllers/user.controllers.js')

router.post('/register',register)
router.post('/login',login)
router.get('/profile',userIsValid)








module.exports = router