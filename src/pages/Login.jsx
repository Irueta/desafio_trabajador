//Login.jsx

import { useState } from 'react';
import { loginApi } from '../../apiDesafio.js';

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
      <form>
        <div>
        <label>
          Username:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <button onClick={handleSumbit}>Enviar</button>
      </form>
    </div>
  );
};

export default Login;