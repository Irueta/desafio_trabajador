//perfil.jsx

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Perfil.css';
import { useNavigate, Link } from 'react-router-dom';

const Perfil = () => {
    const navigate = useNavigate();



    
        return (
            <div className="perfil">
                <UserBar />
                <div className='perfilPestañas'>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>ENCUESTAS</h1>
                <div className='seleccion_1'></div>
                    </div>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>DOCUMENTOS</h1>
                <div className='seleccion_2'></div>
                    </div>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>FLOW</h1>
                <div className='seleccion_3'></div>
                    </div>
                </div>
                <div className='ultimasEncuestas'>
                        <p className='ultimas'>Últimas encuestas</p>
                        <p className='verMas'>VER MAS</p>
                </div>
                <div className='encuestas'>
                    <Link to="/encuestas">
                    <img className='pendienteImg' src="/encuestas/pendiente1.svg" alt="" />
                    </Link>
                    <img  className='pendienteImg'src="/encuestas/pendiente1.svg" alt="" />
                    <img  className='pendienteImg'src="/encuestas/pendiente1.svg" alt="" />
                </div>
                <div className='encuestasRealizadas'>
                    <img className='realizadas' src="/encuestas/imagenRealizada1.svg" alt="" />
                </div>

                <NavBar />
            </div>
        )
    }

export default Perfil;











/* 

import NavBar from '../components/NavBar';
import UserBar from '../components/UserBar';
import './Perfil.css';

const Perfil = () => {
    
        return (
            <div className="perfil">
                <UserBar />
                <div className='perfilPestañas'>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>ENCUESTAS</h1>
                <div className='seleccion_1'></div>
                    </div>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>DOCUMENTOS</h1>
                <div className='seleccion_2'></div>
                    </div>
                    <div className='perfilPestaña'>
                <h1 className='perfilTitle'>FLOW</h1>
                <div className='seleccion_3'></div>
                    </div>
                </div>
                <div className='ultimasEncuestas'>
                        <p className='ultimas'>Últimas encuestas</p>
                        <p className='verMas'>VER MAS</p>
                </div>
                <div className='encuestas'>
                    <div className='encuesta1 encuesta'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagenPendiente.svg" alt="" />
                        <img src="/encuestas/pendiente1.svg" alt="" />
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
                    <div className='encuesta2 encuesta'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagenPendiente.svg" alt="" />
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
                    <div className='encuesta3 encuesta'>
                        <div className='imagenEncuesta'>
                        <img src="/encuestas/imagenPendiente.svg" alt="" />
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
                    <img src="/encuestas/imagenRealizada1.svg" alt="" />
                </div>

                <NavBar />
            </div>
        )
    }

export default Perfil; */