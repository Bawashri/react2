import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css'
function App() {
  return (
    <div>
      <div className='bghead'>
       <div className='head'>
        Evara Holidays
       </div>
        <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About title="About Evara"></About>}></Route>
          <Route path="/contact" element={<Contact title="Contact us"></Contact>}></Route>
        </Routes>
        </div>
      </div>
        <div>
          <footer className='footer'>© 2025-My React Website || Evara Travel || All rights reserved</footer>
        </div>
      
    </div>
    
  )
}

export default App
