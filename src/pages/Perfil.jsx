//perfil.jsx

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Perfil.css';

const Perfil = () => {
    
        return (
            <div className="perfil">
                <UserBar />
                <div className='perfilPestañas'>
                <h1 className='perfilTitle'>ENCUESTAS</h1>
                <h1 className='perfilTitle'>DOCUMENTOS</h1>
                <h1 className='perfilTitle'>FLOW</h1>
                </div>
                <div className='ultimasEncuestas'>
                        <p className='ultimas'>Últimas encuestas</p>
                        <p className='verMas'>VER MAS</p>
                </div>
                <div className='encuestas'>
                    <div className='encuesta1'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagen.svg" alt="" />
                        </div>
                        <div className='infoEncuesta'>
                            <div className='info1'>
                                <p className='encuestaTitulo'>TEMATICA</p>
                                <p className='encuestaTexto'>Compañerismo en el trabajo</p>
                            </div>
                            <div className='info2'>
                                <div className='info2_1'>
                                <p className='encuestaTitulo'>FECHA DE CREACIÓN</p>
                                <p className='encuestaTexto'>09/01/2024</p>
                                </div>
                                <div className='info2_2'>
                                <button className='participar'>PARTICIPAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='encuesta2'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagen.svg" alt="" />
                        </div>
                        <div className='infoEncuesta'>
                            <div className='info1'>
                                <p className='encuestaTitulo'>TEMATICA</p>
                                <p className='encuestaTexto'>Compañerismo en el trabajo</p>
                            </div>
                            <div className='info2'>
                                <div className='info2_1'>
                                <p className='encuestaTitulo'>FECHA DE CREACIÓN</p>
                                <p className='encuestaTexto'>09/01/2024</p>
                                </div>
                                <div className='info2_2'>
                                <button className='participar'>PARTICIPAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='encuesta3'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagen.svg" alt="" />
                        </div>
                        <div className='infoEncuesta'>
                            <div className='info1'>
                                <p className='encuestaTitulo'>TEMATICA</p>
                                <p className='encuestaTexto'>Compañerismo en el trabajo</p>
                            </div>
                            <div className='info2'>
                                <div className='info2_1'>
                                <p className='encuestaTitulo'>FECHA DE CREACIÓN</p>
                                <p className='encuestaTexto'>09/01/2024</p>
                                </div>
                                <div className='info2_2'>
                                <button className='participar'>PARTICIPAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ultimasEncuestas'>
                        <p className='ultimas'>Encuestas realizadas</p>
                        <p className='verMas'>VER MAS</p>
                </div>
                <div className='encuestasRealizadas'>
                    <div className='realizada1'>
                        <div className='realizadaTitulo'>SOSTENIBILIDAD</div>
                        <div className='realizadaImgBut'>
                            <img src="/encuestas/imagenRealizada1.svg" alt="" />
                            <button className='ver'>VER</button>
                        </div>

                    </div>
                </div>

                <NavBar />
            </div>
        )
    }

export default Perfil;