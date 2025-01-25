const User = require('../models/user.model.js');
const bcrypt = require('bcrypt')

let salt = bcrypt.genSaltSync(10)
class userlogics{
    
    createNewUser(payload){
        return User.create({...payload,password:this.convertPassword(payload.password) })
    }

    findUser(username){
        return User.findOne({username})
    }

    convertPassword(payload){
        return bcrypt.hashSync(payload,salt)
    }
    comparePassword(plain,hashed){
        return bcrypt.compareSync(plain,hashed)
    }
}

module.exports = userlogics