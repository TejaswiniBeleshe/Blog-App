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
        let isPasswordMatch = await allUserlogics.comparePassword(password,isUserExist.password)
        if(!isPasswordMatch){
            return res.status(401).send({message:"wrong credential"})
        }
        console.log(isUserExist.id)
        let token = await allUserlogics.createToken({id:isUserExist.id},process.env.SECREATE_KEY);
        res.cookie('token',token,{
            httpOnly:true,
            maxAge:60*60*1000,  
            path:'/'
        })
        res.status(200).send({user:isUserExist})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err})

    }
}

const userIsValid = async(req,res)=>{
   
    const {token} = req.cookies
    
    try{
        if(!token){
            return res.status(401).send('no token present')
        }
        let decodedToken = await allUserlogics.verifyUserByToken(token,process.env.SECREATE_KEY);
        let user = await allUserlogics.findUserById(decodedToken.token);
        console.log(user,decodedToken)
        if(!user){
            return res.status(404).send({message:"user doesn't exit"})
        }
        return res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err})
    }
   

}

const logoutUser = async(req,res)=>{
    res.cookie('token','');
    res.status(200).send()
}

module.exports = {register,login,userIsValid,logoutUser}