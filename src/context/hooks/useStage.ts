import { useState } from "react";
import { IStageContext } from "../../interfaces";

export const useStage = (initialValues: IStageContext) => {
  const [stage, setStage] = useState(initialValues.stage);

  return {
    stage,
    setStage,
  };
};
