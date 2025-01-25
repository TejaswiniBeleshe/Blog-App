import { useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../hostname";

const Header = function(){
  useEffect(()=>{
    let fetchData = async()=>{
      
    }

  },[])
   
    return(
        <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    )
}

export default Header;