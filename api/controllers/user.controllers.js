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

const login = async(req,res)=>{
    try{
        const {username,password} = req.body;
        let isUserExist = await allUserlogics.findUser(username);
        if(!isUserExist){
            return res.status(404).send({message:"User not found,Please register"})
        }
        let isPasswordMatch = allUserlogics.comparePassword(password,isUserExist.password)
        if(!isPasswordMatch){
            return res.status(401).send({message:"wrong credential"})
        }
        let token = await allUserlogics.createToken(isUserExist.id,process.env.SECREATE_KEY);
        res.cookie('token',token,{
            httpOnly:true,
            maxAge:60*1*1000,
            
        })
        res.status(200).send({message:"Login successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err})

    }
}

const userIsValid = async(req,res)=>{
   
    res.send(req.cookies)
}

module.exports = {register,login,userIsValid}