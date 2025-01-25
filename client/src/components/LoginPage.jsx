import { useState } from "react"

const LoginPage = function(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    return(
       <form className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
       </form>
    )
}

export default LoginPage