//Inicio.jsx
import "./Inicio.css";

const Inicio = () => {
    return (
        <>
        <img src="/inicio/miniLogo.svg" alt="logo" className="miniLogo" />
        <div className="frase"><p>Un empleado feliz es un empleado productivo.</p></div>
        <div className="confia">
            <p>Confía en</p>
            <img src="/inicio/happyflowInicio.svg" alt="happyFlow" />
        </div>
        <div className="botonInicio">COMENZAR</div>
        </>
    )
}

export default Inicio;