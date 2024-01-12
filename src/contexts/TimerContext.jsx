// TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 60000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  return (
    <TimerContext.Provider value={{ time, isActive, startTimer, stopTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };