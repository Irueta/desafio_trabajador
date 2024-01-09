//Login.jsx

import { useState } from 'react';
import { loginApi } from '../../apiDesafio.js';
import './Login.css';
import happyflow from '/login/happyflow.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputType, setInputType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState('/login/eyeOculto.svg');

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


const handleEyeClick = () => {
  if (inputType === 'password') {
    setInputType('text');
    setEyeIcon('/login/eyeAlavista.svg');
  } else {
    setInputType('password');
    setEyeIcon('/login/eyeOculto.svg');
  }
};

  return (
    <div>
      <img  className='happyflow' src={happyflow} alt='happyflow' />
      <form>
        <div className='inputs'>
        <div className='input1'>
        <label>
          <input type="text" className='inputLogin' value={email} placeholder='Usuario' onChange={(e) => setEmail(e.target.value)} />
          <img src="/login/userIcon.svg" alt="user icon" className="user-icon" />
        </label>
        </div>
        <div className='input2'>
        <label>
          <input type={inputType} className='inputLogin' value={password} placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
          <img src={eyeIcon} alt="eye icon" className="eye-icon" onClick={handleEyeClick} />
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