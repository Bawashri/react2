import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function App() {
  return (
    <div>
        
        <Routes>
          <Route path="/" element={<Home title="Welcome"></Home>}></Route>
          <Route path="/about" element={<About title="About us"></About>}></Route>
          <Route path="/contact" element={<Contact title="Contact us"></Contact>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
