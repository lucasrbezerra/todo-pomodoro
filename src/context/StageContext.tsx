import React, { createContext } from "react";
import { useStage } from "./hooks";
import { IStageContext } from "../interfaces";

const STAGES = {
  START: 0,
  RUNNING: 1,
  FINISHED_WORK: 2,
  SLEEP_START: 3,
  SLEEPING: 4,
  FINISHED_SLEEP: 5,
};

const initialValues = {
  STAGES: STAGES,
  stage: STAGES["START"],
  setStage: () => {},
};

const StageContext = createContext<IStageContext>(initialValues);

const StageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { stage, setStage } = useStage(initialValues);

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
