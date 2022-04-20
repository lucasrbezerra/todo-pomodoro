import { Dispatch, SetStateAction } from 'react';

export interface ITimerContext {
  time: number;
  timeSleep: number;
  auxTime: number;
  auxTimeSleep: number;
  openModalTimer: () => void;
  openModalTimerSleep: () => void;
  handleStartTimer: () => void;
  handleStartTimerSleep: () => void;
  resetCountdown: () => void;
  resetCountdownSleep: () => void;
  onKeyDownTime: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onKeyDownTimeSleep: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onChangeTime: (time: number) => void;
  onChangeTimeSleep: (time: number) => void;
  onConfirmTime: () => void;
  onConfirmTimeSleep: () => void;
}
