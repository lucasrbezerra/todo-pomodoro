import { Dispatch, SetStateAction } from 'react';

export interface ITimerContext {
  time: number;
  auxTime: number;
  setAuxTime: Dispatch<SetStateAction<number>>;
  openModalTimer: () => void;
  handleStartTimer: () => void;
  resetCountdown: () => void;
  onKeyDownTime: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onChangeTime: (time: number) => void;
  onConfirmTime: () => void;
}
