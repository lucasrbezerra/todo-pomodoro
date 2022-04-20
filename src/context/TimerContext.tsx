import React, { createContext } from 'react';
import { useTimer } from './hooks';
import { ITimerContext } from '../interfaces';

const TimerContext = createContext<ITimerContext>({} as ITimerContext);

const TimerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const {
    time,
    timeSleep,
    auxTime,
    auxTimeSleep,
    openModalTimer,
    openModalTimerSleep,
    handleStartTimer,
    handleStartTimerSleep,
    resetCountdown,
    resetCountdownSleep,
    onKeyDownTime,
    onKeyDownTimeSleep,
    onChangeTime,
    onChangeTimeSleep,
    onConfirmTime,
    onConfirmTimeSleep,
  } = useTimer();

  return (
    <TimerContext.Provider
      value={{
        time,
        timeSleep,
        auxTime,
        auxTimeSleep,
        openModalTimer,
        openModalTimerSleep,
        handleStartTimer,
        handleStartTimerSleep,
        resetCountdown,
        resetCountdownSleep,
        onKeyDownTime,
        onKeyDownTimeSleep,
        onChangeTime,
        onChangeTimeSleep,
        onConfirmTime,
        onConfirmTimeSleep,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
