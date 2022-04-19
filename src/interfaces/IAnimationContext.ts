import { Dispatch, SetStateAction } from 'react';

export interface IAnimationContext {
  animation: boolean;
  setAnimation: Dispatch<SetStateAction<boolean>>;
  notifyMe: () => void;
}
