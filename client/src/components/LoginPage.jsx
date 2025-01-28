import { useContext, useState } from "react"
import config from "../hostname";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { context } from "../App";
import Cookies from "js-cookie"
const LoginPage = function(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const {userInfo,setUserInfo} = useContext(context)
    const navigate = useNavigate()
    const login = async function(e){
        e.preventDefault();
        const {api} = config

        let response = await fetch(`${api}/user/login`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({username,password}),
            credentials:'include',
            
        })
        let data = await response.json()
        console.log(data)
        if(response.status === 404){
            enqueueSnackbar(data.message,{
                variant:"error",
                autoHideDuration:1200,
                anchorOrigin:{horizontal:"center",vertical:"top"}
            })
        }else if(response.status === 401){
            enqueueSnackbar(data.message,{
                variant:"warning",
                autoHideDuration:1200,
                anchorOrigin:{horizontal:"center",vertical:"top"}
            })
        }else{
            
            enqueueSnackbar('Logged in',{
                variant:"success",
                autoHideDuration:1200,
                anchorOrigin:{horizontal:"center",vertical:"top"}
            })
            setUserInfo(data.user)
            navigate('/')    
        }


    }
    return(
       <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text"
         placeholder="username"
         value={username}
         onChange={(e)=>setUsername(e.target.value)} 
         />
        <input type="text" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
        <button type="submit">Login</button>
       </form>
    )
}

export default LoginPage