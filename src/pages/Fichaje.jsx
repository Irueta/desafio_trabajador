//Fichaje.jsx

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Fichaje.css';
import { useState } from 'react';
import Modal from '../components/Modal';

const Fichaje = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    return (
        <div className="fichaje">
            <UserBar />
            <div className='fichaje_container'>
                <div className='explicacion'><p>Para fichar selecciona la animación que mejor te represente en éste momento.</p></div>
                <div className='emociones_container'>
                    <div className='emocion emocion1' onClick={() => {setIsOpen(true); setSelectedEmotion('MIEDO');}}>
                        <img className='gif' src="/emociones/miedo_mod.gif" alt="" />
                        <p className='emocion_name'>MIEDO</p>
                    </div>
                    <div className='emocion emocion2' onClick={() => {setIsOpen(true); setSelectedEmotion('TRISTEZA');}}>
                        <img className='gif' src="/emociones/tristeza_mod.gif" alt="" />
                        <p className='emocion_name'>TRISTEZA</p>
                    </div>
                    <div className='emocion emocion3' onClick={() => {setIsOpen(true); setSelectedEmotion('IRA');}}>
                        <img className='gif' src="/emociones/ira_mod.gif" alt="" />
                        <p className='emocion_name'>IRA</p>
                    </div>
                    <div className='emocion emocion4' onClick={() => {setIsOpen(true); setSelectedEmotion('ALEGRÍA');}}>
                        <img className='gif' src="/emociones/alegria_mod.gif" alt="" />
                        <p className='emocion_name'>ALEGRÍA</p>
                    </div>
                </div>
                {isOpen && (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} handleClose={() => setIsOpen(false)} emotion={selectedEmotion} />
)}
                <div className='recordatorio'><p>Aún no has realizado el fichaje de entrada.</p></div>
                <NavBar />
            </div>
        </div>
    )
}

export default Fichaje;