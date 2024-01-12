//App.jsx

import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Fichaje from './pages/Fichaje'
import Perfil from './pages/Perfil'
import Comunidad from './pages/Comunidad'
import Encuestas from './pages/Encuestas'
import Inicio from './pages/Inicio'
import { TimerProvider } from './contexts/TimerContext'
import Modal from './components/Modal'


function App() {

  return (
<TimerProvider>
  <Modal />
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fichaje" element={<Fichaje />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/encuestas" element={<Encuestas />} />
          </Routes>
        </Router>
</TimerProvider>
  );
}

export default App
