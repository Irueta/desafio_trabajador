import { useContext } from 'react';
import './Modal.css';
import TimerButton from './TimerButton';
import { TimerContext } from '../contexts/TimerContext';


const Modal = ({ isOpen, handleClose, emotion, setIsOpen}) => {
    const { isActive } = useContext(TimerContext);
    const timerStatus = isActive ? 'Salida' : 'Entrada';

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal'>
            {emotion === 'MIEDO' && <>
            <div className='datosModal'>
            <p className='info'>Estado de ánimo seleccionado:</p>
            <h1 className='titulo'>MIEDO</h1>
            <img className='gifModal miedoGif' src="/emociones/miedo_mod.gif" alt="" />
            <div className='datosFichaje'>
            <p className='datosTitulo'>Tipo de fichaje:</p>
            <p className='datosTitulo'>Fecha:</p>
            <p className='datosInfo'>{timerStatus}</p>
            <p className='datosInfo'>03 / 05 / 2024</p>
            </div>
            <p className='confirmacion'>¿Está seguro de realizar éste fichaje?</p>
            <div className='botones'>
                <img className='cross' src="/modal/cross.svg" alt="" onClick={handleClose}/>
                <TimerButton emotion={emotion} timerStatus={timerStatus} setIsOpen={setIsOpen}/>
            </div>
            </div>
            </>}
            {emotion === 'TRISTEZA' && <>
            <div className='datosModal'>
            <p className='info'>Estado de ánimo seleccionado:</p>
            <h1 className='titulo'>TRISTEZA</h1>
            <img className='gifModal' src="/emociones/tristeza_mod.gif" alt="" />
            <div className='datosFichaje'>
            <p className='datosTitulo'>Tipo de fichaje:</p>
            <p className='datosTitulo'>Fecha:</p>
            <p className='datosInfo'>{timerStatus}</p>
            <p className='datosInfo'>03 / 05 / 2024</p>
            </div>
            <p className='confirmacion'>¿Está seguro de realizar éste fichaje?</p>
            <div className='botones'>
                <img className='cross' src="/modal/cross.svg" alt="" onClick={handleClose}/>
                <TimerButton emotion={emotion} timerStatus={timerStatus} setIsOpen={setIsOpen}/>
            </div>
            </div>
            </>}
            {emotion === 'IRA' && <>
            <div className='datosModal'>
            <p className='info'>Estado de ánimo seleccionado:</p>
            <h1 className='titulo'>IRA</h1>
            <img className='gifModal' src="/emociones/ira_mod.gif" alt="" />
            <div className='datosFichaje'>
            <p className='datosTitulo'>Tipo de fichaje:</p>
            <p className='datosTitulo'>Fecha:</p>
            <p className='datosInfo'>{timerStatus}</p>
            <p className='datosInfo'>03 / 05 / 2024</p>
            </div>
            <p className='confirmacion'>¿Está seguro de realizar éste fichaje?</p>
            <div className='botones'>
                <img className='cross' src="/modal/cross.svg" alt="" onClick={handleClose}/>
                <TimerButton emotion={emotion} timerStatus={timerStatus} setIsOpen={setIsOpen}/>
            </div>
            </div>
            </>}
            {emotion === 'ALEGRÍA' && <>
            <div className='datosModal'>
            <p className='info'>Estado de ánimo seleccionado:</p>
            <h1 className='titulo'>ALEGRIA</h1>
            <img className='gifModal' src="/emociones/alegria_mod.gif" alt="" />
            <div className='datosFichaje'>
            <p className='datosTitulo'>Tipo de fichaje:</p>
            <p className='datosTitulo'>Fecha:</p>
            <p className='datosInfo'>{timerStatus}</p>
            <p className='datosInfo'>03 / 05 / 2024</p>
            </div>
            <p className='confirmacion'>¿Está seguro de realizar éste fichaje?</p>
            <div className='botones'>
                <img className='cross' src="/modal/cross.svg" alt="" onClick={handleClose}/>
                <TimerButton emotion={emotion} timerStatus={timerStatus} setIsOpen={setIsOpen}/>
            </div>
            </div>
            </>}
        </div>
    );
}

export default Modal;