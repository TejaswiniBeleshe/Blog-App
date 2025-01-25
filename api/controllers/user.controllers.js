const userlogics = require("../services/user.service");
const allUserlogics = new userlogics();

const register = async(req,res)=>{
    const {username,password} = req.body;
    try{
        let userExist = await allUserlogics.findUser(username);
        if(userExist){
            return res.status(409).send({message:"User already exist"})
        }
        let data = await allUserlogics.createNewUser({username,password}) ;
        // console.log(data)
        return res.status(200).send(data)
    }
    catch(err){
        return res.status(500).send(err)
    }
}

module.exports = {register}