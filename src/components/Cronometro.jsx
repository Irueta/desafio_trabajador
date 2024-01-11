// Cronometro.jsx
import React, { useState, useEffect } from 'react';

const Cronometro = ({ activo, onTick }) => {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [activo, setTiempo]); // Added setTiempo to the dependency array

  const reiniciarCronometro = () => {
    setTiempo(0);
  };

  useEffect(() => {
    if (tiempo === 0) {
      onTick(); // Llamada a la función proporcionada por el padre al hacer clic en el tick.
    }
  }, [tiempo, onTick]);

  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <div>
      <p>Tiempo: {formatoTiempo(tiempo)}</p>
    </div>
  );
};

export default Cronometro;
