const router = require("express").Router();
// const User = require('../models/user.model.js')
const {register} = require('../controllers/user.controllers.js')

router.post('/register',register)








module.exports = router