import { useState } from "react"
import config from "../hostname";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const LoginPage = function(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const login = async function(e){
        e.preventDefault();
        const {api} = config

        let response = await fetch(`${api}/user/login`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({username,password})
        })
        let data = await response.json()
 
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

            enqueueSnackbar("Welcome to user page",{
                variant:"success",
                autoHideDuration:1200,
                anchorOrigin:{horizontal:"center",vertical:"top"}
            })
            navigate('/userpage')
            
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