import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../hostname";
import { context } from "../App";
const Header = function(){
  const {userInfo,setUserInfo} = useContext(context);
  const {api} = config
  useEffect(()=>{
    apiCall()
    console.log('done')
  },[])

  const apiCall = async()=>{
    try{
      let res = await fetch(`${api}/user/profile`,{
        method:"GET",
        credentials:'include',
      })
     let data = await res.json()
     console.log('execured')
     setUserInfo(data)
    }
    catch(err){
        console.log(err)
    }
    
  }

  const handleLogout = ()=>{
    try{
      let response = fetch(`${api}/user/logout`,{
        credentials:'include',
        method:'POST'
      })
       setUserInfo('')
    } 
    catch(err){
      console.log(err)
    }
  }
   
    return(
       <header className="header">
        <Link to="/" className="logo">MyBlog</Link>
        {
          !userInfo?
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>:<nav>
          <span >{userInfo.username}</span>
          <Link to="/create">Create new Blog</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>

      }
      </header>
    )
}

export default Header;