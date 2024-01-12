//App.jsx

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.body.style.background = 'url(../assets/img/inicioFondo.png) no-repeat center center fixed';
        break;
      case '/login':
        document.body.style.background = 'url(../assets/img/inicioFondo.png) no-repeat center center fixed';
        break;
      default:
        document.body.style.background = '#fff';
    }
  }, [location]);

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
