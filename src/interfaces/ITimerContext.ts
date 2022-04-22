import { Dispatch, SetStateAction } from "react";

export interface ITimerContext {
  time: number;
  auxTime: number;
  timeSleep: number;
  auxTimeSleep: number;
  setAuxTimeSleep: Dispatch<SetStateAction<number>>;
  handleStartTimer: () => void;
  handleStartTimerSleep: () => void;
  resetCountdown: () => void;
  resetCountdownSleep: () => void;
  handleDone: () => void;
  handleDoneSleep: () => void;
  openModalTimer: () => void;
  openModalTimerSleep: () => void;
  onConfirmTime: () => void;
  onConfirmTimeSleep: () => void;
  onChangeTime: (time: number) => void;
  onChangeTimeSleep: (time: number) => void;
  onKeyDownTime: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onKeyDownTimeSleep: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}
