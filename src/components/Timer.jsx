// Timer.js
import React, { useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';
import './Timer.css';

const Timer = () => {
  const { time, isActive } = useContext(TimerContext);
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const timerClass = `timerShow ${isActive ? 'active' : 'inactive'}`;

  return (
    <div className={timerClass}>
      {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}
    </div>
  );
}

export default Timer;