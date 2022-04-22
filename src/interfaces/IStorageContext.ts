import { ITask } from "./ITask";

export interface IStorageContext {
  setTimeStorage: (value: number) => void;
  setTasksStorage: (value: ITask[]) => void;
  setTimeSleepStorage: (value: number) => void;
  getStorage: any;
  KEYS_STORAGE: any;
}
