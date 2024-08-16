import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:"wheat"}}>
     <Link to="/"> <a style={{padding:"20px"}} >Home</a></Link>
     <Link to="/about"><a style={{padding:"20px"}} >About</a></Link>
     <Link to="/services"><a style={{padding:"20px"}}>Services</a></Link>
     <Link to="/contact"><a style={{padding:"20px"}}>Contact</a></Link>
     <Link to="/login"><a style={{padding:"20px"}} >Login</a></Link>
    </div>
  )
}

export default Header