// Timer.js
import React, { useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';

const Timer = () => {
  const { time } = useContext(TimerContext);
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return (
    <div>
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}
    </div>
  );
};

export default Timer;