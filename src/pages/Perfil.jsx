//perfil.jsx

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Perfil.css';

const Perfil = () => {
    
        return (
            <div className="perfil">
                <UserBar />
                <h1 className='perfilTitle'>Perfil</h1>
                <NavBar />
            </div>
        )
    }

export default Perfil;