const mongoose = require('mongoose')

const connectDB = async function(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected with DB')
    }
    catch(err){
        console.log('Not able to connect with database',err)
    }
}

module.exports = connectDB