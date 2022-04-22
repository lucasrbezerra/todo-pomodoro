import React, { createContext } from 'react';
import { useAnimation } from './hooks';
import { IAnimationContext } from '../interfaces';

const initialValues = {
  animation: false,
  setAnimation: () => {},
  notifyWork: () => {},
  notifySleep: () => {},
  toogleAnimation: () => {},
};

const AnimationContext = createContext<IAnimationContext>(initialValues);

const AnimationProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { animation, setAnimation, notifyWork, notifySleep, toogleAnimation } = useAnimation(initialValues);

  return (
    <AnimationContext.Provider
      value={{
        animation,
        setAnimation,
        notifyWork,
        notifySleep,
        toogleAnimation,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export { AnimationContext, AnimationProvider };
