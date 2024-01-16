import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="navBar">
            <div className='navComunidad navItem'>
                <Link to="/comunidad">
                {location.pathname === '/comunidad' && <div className='seleccion choice1'></div>}
                    <img className='imgComunidad' src="/navBar/comunidad.svg" alt="" />
                </Link>
                <Link to="/comunidad" className="navbar__link">
                    Comunidad
                </Link>
            </div>
            <div className='navFichaje navItem'>
                <Link to="/fichaje">
                {location.pathname === '/fichaje' && <div className='seleccion choice2'></div>}
                    <img className='imgFichaje' src="/navBar/fichaje.svg" alt="" />
                </Link>
                <Link to="/fichaje" className="navbar__link">
                    Fichaje
                </Link>
            </div>
            <div className='navPerfil navItem'>
                <Link to="/perfil">
                {location.pathname === '/perfil' && <div className='seleccion choice3'></div>}
                    <img className='imgPerfil' src="/navBar/perfil.svg" alt="" />
                </Link>
                <Link to="/perfil" className="navbar__link">
                    Perfil
                </Link>
            </div>
        </div>
    )
}

export default NavBar;