import React, { createContext } from "react";
import { useTimer } from "./hooks";
import { ITimerContext } from "../interfaces";

const DEFAULT_TIMER = Number(localStorage.getItem("time-value")) || 25 * 60;
const DEFAULT_TIMER_SLEEP =
  Number(localStorage.getItem("time-value-sleep")) || 5 * 60;

const initialValues = {
  time: DEFAULT_TIMER,
  auxTime: DEFAULT_TIMER,
  timeSleep: DEFAULT_TIMER_SLEEP,
  auxTimeSleep: DEFAULT_TIMER_SLEEP,
  setAuxTimeSleep: () => {},
  handleStartTimer: () => {},
  handleStartTimerSleep: () => {},
  resetCountdown: () => {},
  resetCountdownSleep: () => {},
  handleDone: () => {},
  handleDoneSleep: () => {},
  openModalTimer: () => {},
  openModalTimerSleep: () => {},
  onChangeTime: () => {},
  onChangeTimeSleep: () => {},
  onConfirmTime: () => {},
  onConfirmTimeSleep: () => {},
  onKeyDownTime: () => {},
  onKeyDownTimeSleep: () => {},
};

const TimerContext = createContext<ITimerContext>(initialValues);

const TimerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const {
    time,
    auxTime,
    timeSleep,
    auxTimeSleep,
    setAuxTimeSleep,
    handleStartTimer,
    handleStartTimerSleep,
    resetCountdown,
    resetCountdownSleep,
    handleDone,
    handleDoneSleep,
    openModalTimer,
    openModalTimerSleep,
    onChangeTime,
    onChangeTimeSleep,
    onConfirmTime,
    onConfirmTimeSleep,
    onKeyDownTime,
    onKeyDownTimeSleep,
  } = useTimer(DEFAULT_TIMER, DEFAULT_TIMER_SLEEP);

  return (
    <TimerContext.Provider
      value={{
        time,
        auxTime,
        timeSleep,
        auxTimeSleep,
        setAuxTimeSleep,
        handleStartTimer,
        handleStartTimerSleep,
        resetCountdown,
        resetCountdownSleep,
        handleDone,
        handleDoneSleep,
        openModalTimer,
        openModalTimerSleep,
        onChangeTime,
        onChangeTimeSleep,
        onConfirmTime,
        onConfirmTimeSleep,
        onKeyDownTime,
        onKeyDownTimeSleep,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
