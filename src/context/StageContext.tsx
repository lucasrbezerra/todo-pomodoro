import React, { createContext } from 'react';
import { useStages } from './hooks';
import { IStageContext } from '../interfaces';

const StageContext = createContext<IStageContext | null>(null);

const StageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { STAGES, stage, setStage } = useStages();

  return (
    <StageContext.Provider
      value={{
        STAGES,
        stage,
        setStage,
      }}
    >
      {children}
    </StageContext.Provider>
  );
};

export { StageContext, StageProvider };
