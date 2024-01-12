//Inicio.jsx
import "./Inicio.css";
import { useNavigate, Link } from "react-router-dom";

const Inicio = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="inicioPage1">
        <img src="/inicio/miniLogo.svg" alt="logo" className="miniLogo" />
        <div className="frase"><p>Un empleado feliz es un empleado productivo.</p></div>
        <div className="confia">
            <p>Confía en</p>
            <img src="/inicio/happyflowInicio.svg" alt="happyFlow" />
        </div>
        <div className="botonInicio">
            <Link to="/login"><button className="inicio">COMENZAR</button></Link>
            
            </div>
        </div>
        </>
    )
}

export default Inicio;