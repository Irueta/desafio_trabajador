// TimerContext.js

import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <TimerContext.Provider value={{ isActive, time, toggle, reset }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
