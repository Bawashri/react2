import React from 'react'
import Navbar from './Navbar'

function About(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h2>{props.title}</h2>
      <p>This is my About page content.</p>
    </div>
  )
}

export default About
