import React from 'react'
import Navbar from './Navbar'

function Home(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h2>{props.title}</h2>
      <p>This is my home page content.</p>
    </div>
  )
}

export default Home
