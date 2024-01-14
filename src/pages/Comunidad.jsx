//Comunidad.jsx

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Comunidad.css';


const Comunidad = () => {
    
        return (
            <div className="comunidad">
                <UserBar />
                <div className='perfilPestañas2'>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>INTERES</h1>
                <div className='seleccion_1'></div>
                    </div>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>SIGUIENDO</h1>
                <div className='seleccion_2'></div>
                    </div>
                </div>
                <div className='publicaciones'>
                    <img src="/comunidad/publicacionFalsa.svg" alt="" />
                    <img src="/comunidad/linea.svg" alt="" />
                    <img src="/comunidad/publicacionFalsa.svg" alt="" />
                </div>
                <NavBar />
            </div>
        )
    }

export default Comunidad;