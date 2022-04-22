import { Dispatch, SetStateAction } from 'react';

export interface IAnimationContext {
  animation: boolean;
  setAnimation: Dispatch<SetStateAction<boolean>>;
  notifyWork: () => void;
  notifySleep: () => void;
  toogleAnimation: () => void;
}
