//Login.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../apiDesafio.js';
import './Login.css';
import happyflow from '/login/happyflow.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputType, setInputType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState('/login/eyeOculto.svg');
  const navigate = useNavigate();



  const handleSumbit = async (e) => {
    e.preventDefault();
 if (email === '' || password === '') {
        setError('Todos los campos son obligatorios');
        return;
    }
    setError(null);
    const {response, data} = await loginApi(email, password)
    console.log(response)
    console.log("DATA",data)
    if (response.status === 200) {
      navigate('/fichaje');
    }else{
      alert('Credenciales incorrectas')
    }
    

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
    <div className='bodyLogin'>
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