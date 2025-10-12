import React from 'react'
import Navbar from './Navbar'

function Contact(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h2>{props.title}</h2>
      <p>This is the Contact page content.</p>
    </div>
  )
}

export default Contact
