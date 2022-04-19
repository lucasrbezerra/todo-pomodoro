import { ITask } from './ITask';

export interface IStorageContext {
  setTimeStorage: (value: string) => void;
  setTasksStorage: (value: ITask[]) => void;
  setTimeSleepStorage: (value: string) => void;
  getStorage: any;
  KEYS_STORAGE: any;
}
