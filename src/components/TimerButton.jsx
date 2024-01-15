// TimerButton.js
import React, { useContext, useEffect, useState } from 'react';
import { TimerContext } from '../contexts/TimerContext';
import { fetchUserData, registerEmotion } from '../../apiDesafio';

const TimerButton = ({ emotion, timerStatus, setIsOpen }) => {
  const { startTimer, stopTimer, isActive } = useContext(TimerContext);
  const [userData, setUserData] = useState(null);



  const handleClick = () => {
    const fetchData = async () => {
      const {response,data} = await fetchUserData();
      const fetchEmotionData = await registerEmotion(emotion, timerStatus);
      if (response.status === 200) {
          setUserData(data);
      }
  }
  fetchData();
  console.log(emotion);
  console.log(timerStatus);
/*   if (userData !== null) {
    console.log(userData);
  } */
  setIsOpen(false);
  alert(`Se ha realizado un fichaje de ${timerStatus} con el estado de ánimo ${emotion}\nConocer su estado de ánimo nos sirve de gran ayuda para que podamos mejorar sus condiciones laborales.`);
  };


  return (
    <>
      {isActive ? (
        <img className='tick' src="/modal/tick.svg" alt="" onClick={() => { stopTimer(); handleClick(); }}/>
      ) : (
        <img className='tick' src="/modal/tick.svg" alt="" onClick={() => { startTimer(); handleClick(); }}/>
      )}
    </>
  );
};

export default TimerButton;