import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../hostname";
import { context } from "../App";
const Header = function(){
  const {reload,setReload} = useContext(context);
  const [loggedUser,setLoggedUser] = useState('')
  const {api} = config
  useEffect(()=>{
    apiCall()
  },[reload])

  const apiCall = async()=>{
    try{
      let res = await fetch(`${api}/user/profile`,{
        method:"GET",
        credentials:'include',
       
      })
     let data = await res.json()
     console.log(data)
     setLoggedUser(data)
    }
    catch(err){
        console.log(err)
    }
  }
   
    return(
       <header className="header">
        <Link to="/" className="logo">MyBlog</Link>
        {
          !loggedUser.username?
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>:<nav>
          <span >{loggedUser.username}</span>
          <Link to="/">Create new Blog</Link>
        </nav>

      }
      </header>
    )
}

export default Header;