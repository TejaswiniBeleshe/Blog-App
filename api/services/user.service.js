const User = require('../models/user.model.js');
const bcrypt = require('bcrypt')
class userlogics{
    
    createNewUser=async(payload)=>{
        return User.create({...payload,password:await this.convertPassword(payload.password) })
    }

    findUser(username){
        return User.findOne({username})
    }

    convertPassword(payload){
        return bcrypt.hash(payload,10)
    }
}

module.exports = userlogics