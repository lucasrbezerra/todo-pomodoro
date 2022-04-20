import { useState } from 'react';

export const useStages = () => {
  const STAGES = {
    START: 0,
    RUNNING: 1,
    FINISHED_WORK: 2,
    SLEEP_START: 3,
    SLEEPING: 4,
    FINISHED_SLEEP: 5,
  };
  const [stage, setStage] = useState(STAGES['START']);

  return {
    STAGES,
    stage,
    setStage,
  };
};
