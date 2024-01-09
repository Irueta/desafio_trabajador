//App.jsx

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'




function App() {

  return (
    <div className='App'>
    <Router>
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='' element={<div>404 Not found</div>}></Route>
      </Routes>
    </div>
    </Router>

    </div>
  );
}

export default App
