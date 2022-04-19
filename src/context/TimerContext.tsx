import React, { createContext } from 'react';
import { useTimer } from './hooks';
import { ITimerContext } from '../interfaces';

const TimerContext = createContext<ITimerContext | null>(null);

const TimerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const {
    time,
    auxTime,
    openModalTimer,
    handleStartTimer,
    resetCountdown,
    onKeyDownTime,
    onChangeTime,
    onConfirmTime,
    setAuxTime,
  } = useTimer();

  return (
    <TimerContext.Provider
      value={{
        time,
        auxTime,
        openModalTimer,
        handleStartTimer,
        resetCountdown,
        onKeyDownTime,
        onChangeTime,
        onConfirmTime,
        setAuxTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
