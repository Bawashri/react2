import React from 'react'
import Navbar from './Navbar'

function About(props) {
  return (
    <div >
      <Navbar></Navbar>
      <div className='about-box'>
      <h2 className='about-head'>{props.title}</h2>
      <p className='about-para'>At Evara Travel, we believe that every journey tells a story.<br/>
         Our mission is to make travel effortless, affordable, and inspiring.<br/>
         Whether you dream of relaxing on tropical beaches, hiking through scenic mountains,<br/> or exploring vibrant cities, Evara helps you find your perfect destination and craft a personalized travel experience.</p>
      </div>
    </div>
  )
}

export default About
