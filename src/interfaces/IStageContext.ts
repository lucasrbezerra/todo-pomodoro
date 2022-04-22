import { Dispatch, SetStateAction } from "react";

export interface IStageContext {
  STAGES: any;
  stage: number;
  setStage: Dispatch<SetStateAction<number>>;
}
