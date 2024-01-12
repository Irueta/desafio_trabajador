// TimerButton.js
import React, { useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';

const TimerButton = () => {
  const { startTimer, stopTimer, isActive } = useContext(TimerContext);

  return (
    <>
      {isActive ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
    </>
  );
};

export default TimerButton;