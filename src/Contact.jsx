import React from 'react'
import Navbar from './Navbar'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram} from "@fortawesome/free-brands-svg-icons";


function Contact(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='contact-head'>{props.title}</h2>
      <div className='contact-box'>
        <h2>Get In Touch</h2>
        <h3><q>We are here to make your travel dreams come true</q></h3>
        <p>contact us trough..</p>
        <p> Phone number   : +91 9988776655<br/><br/>
            G-mail      : @Evaraholidays.com<br/><br/>
            Office Address :123,Beach Road, Chennai,India.<br/><br/>
            Instagram      : _evara.holidays__<br/><br/>
            Follow us for travel inspiration!..<br/>
        </p>
        <p>
          Need any help?<br/><br/>
          <textarea type="Description" ></textarea>
        </p>
      </div>
      
    </div>
  )
}

export default Contact
