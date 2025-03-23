import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App
