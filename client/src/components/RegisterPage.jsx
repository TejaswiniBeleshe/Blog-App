import { useState } from "react"
import config from "../hostname";
import { useNavigate} from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const RegisterPage = function(){
    const navigate = useNavigate()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')

    const handleRegister = async function(e){
        
        e.preventDefault();
        let {api} = config;
        
            let response = await fetch(`${api}/user/register`,{
                method:"POST",
                body:JSON.stringify({username,password}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            // console.log(response)
            if(response.status === 409){
                enqueueSnackbar('this username already taken please enter new one',{
                    autoHideDuration:1200,
                    variant:'error',
                    anchorOrigin:{horizontal:"center",vertical:'top'}  
                })
            }
            if(response.status === 200){
                enqueueSnackbar('welcome to userpage',{
                    autoHideDuration:1200,
                    variant:'success',
                    anchorOrigin:{horizontal:"center",vertical:'top'}  
                })
                navigate('/')
            }  
    }
    return(
       <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input type="text"
         placeholder="username"
          value={username}
           onChange={(e)=>setUsername(e.target.value)} 
        />
        <input type="password"
         placeholder="password" 
         value={password} 
         onChange={(e)=>setPassword(e.target.value)} 
         />
        <button>Register</button>
       </form>
    )
}
export default RegisterPage;