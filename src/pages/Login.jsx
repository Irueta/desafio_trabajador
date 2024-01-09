//Login.jsx

import { useState } from 'react';
import { loginApi } from '../../apiDesafio.js';
import './Login.css';
import happyflow from '/happyflow.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const validateInputs = () => {
    // Validación de email
    let errorsAccumulated = '';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
    errorsAccumulated += 'El formato del email no es válido. ';
    }

    // Validación de contraseña
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
    errorsAccumulated += 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número. ';
    }

    if (errorsAccumulated !== '') {
    setError(errorsAccumulated);
    return false;
    }

    return true;
}

const handleSumbit = (e) => {
    e.preventDefault();
 /*    if (email === '' || password === '') {
        setError('Todos los campos son obligatorios');
        return;
    }
    if (!validateInputs()) {
        return;
    } */
    setError(null);
    loginApi(email, password)
    .then(response => {
        setSession(response.data);
    }).catch(error => {
        setError('Usuario o contraseña incorrectos');
    });        
}

  return (
    <div>
      <img  className='happyflow' src={happyflow} alt='happyflow' />
      <form>
        <div className='inputs'>
        <div className='input'>
        <label>
        <input type="text" className='inputLogin' value={email} placeholder='Usuario' onChange={(e) => setEmail(e.target.value)} />
        </label>
        </div>
        <div className='input'>
        <label>
          <input type="password" className='inputLogin' value={password} placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        </div>
        <div>
        <p className='passForgot'>¿Has olvidado la contraseña?</p>
        </div>
        <button className='inicio' onClick={handleSumbit}>Iniciar sesión</button>
      </form>
      <div className='sincuenta'><p>¿No tienes cuenta?</p></div>
      <div>
      <button className='registro'>ENVIAR SOLICITUD A RRHH</button>
      </div>
    </div>
  );
};

export default Login;