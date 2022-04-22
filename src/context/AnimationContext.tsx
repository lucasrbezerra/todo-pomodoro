import React, { createContext } from 'react';
import { useAnimation } from './hooks';
import { IAnimationContext } from '../interfaces';

const initialValues = {
  animation: false,
  setAnimation: () => {},
  notifyMe: () => {},
}

const AnimationContext = createContext<IAnimationContext>(initialValues);

const AnimationProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { animation, setAnimation, notifyMe } = useAnimation();

  return (
    <AnimationContext.Provider
      value={{
        animation,
        setAnimation,
        notifyMe,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export { AnimationContext, AnimationProvider };
