import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div className='display'>
      
      <ul>
      <li className='link'><Link to="/" >Home</Link></li> 
      <li className='link'><Link to="/about">About Us</Link></li> 
      <li className='link'><Link to="/contact">Contact Us</Link></li></ul>
      
    </div>
   
  )
}

export default Navbar
