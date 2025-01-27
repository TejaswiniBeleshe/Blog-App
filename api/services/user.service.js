const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let salt = bcrypt.genSaltSync(10)
class userlogics{
    
    createNewUser(payload){
        return User.create({...payload,password:this.convertPassword(payload.password) })
    }

    findUser(username){
        return User.findOne({username})
    }

    findUserById(id){
        return User.findOne({id:id})
    }

    convertPassword(payload){
        return bcrypt.hashSync(payload,salt)
    }
    comparePassword(plain,hashed){
        return bcrypt.compareSync(plain,hashed)
    }

    createToken(payload,key){
        return jwt.sign({...payload},key)
    }
    verifyUserByToken(token,key){
        return jwt.verify(token,key)
    }

}

module.exports = userlogics