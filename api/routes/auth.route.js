const router = require("express").Router();
// const User = require('../models/user.model.js')
const {register,login} = require('../controllers/user.controllers.js')

router.post('/register',register)
router.post('/login',login)








module.exports = router