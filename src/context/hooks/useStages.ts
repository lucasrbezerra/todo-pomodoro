import { useState } from 'react';

export const useStages = () => {
  const STAGES = {
    START: 0,
    RUNNING: 1,
    FINISHED: 2,
    SLEEP_START: 3,
    SLEEPING: 4,
  };
  const [stage, setStage] = useState(STAGES['START']);

  return {
    STAGES,
    stage,
    setStage,
  };
};
