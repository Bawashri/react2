import React from 'react'
import Navbar from './Navbar'
import './App.css'
import logo from './assets/logo.png'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className='home'>
        <h1>Evara Holidays</h1>
        <h3>EXPLORE EDGE</h3>
         <div className='homelogo'>
                <img src={logo}></img>
          </div>
        <p><q>Your gateway to seamless, personalized.<br/>and breathtaking travel adventure</q></p>
      </div>
    </div>
  )
}

export default Home
