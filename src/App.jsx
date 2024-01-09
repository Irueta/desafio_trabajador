//App.jsx

import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Fichaje from './pages/Fichaje'
import Perfil from './pages/Perfil'
import Comunidad from './pages/Comunidad'


function App() {

  return (

        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/fichaje" element={<Fichaje />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/comunidad" element={<Comunidad />} />
          </Routes>
        </Router>
  );
}

export default App
