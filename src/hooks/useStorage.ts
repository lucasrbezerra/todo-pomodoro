import { ITask } from '../interfaces';

export const useStorage = () => {
  const KEYS_STORAGE = {
    TIME_VALUE: 'time-value',
    TASKS: 'tasks',
  };

  const setTimeStorage = (value: string) => localStorage.setItem(KEYS_STORAGE['TIME_VALUE'], value);

  const setTasksStorage = (value: ITask[]) => {
    let updated_value = JSON.stringify(value);
    localStorage.setItem(KEYS_STORAGE['TASKS'], updated_value);
  };

  const getStorage = (key: string) => {
    let value = localStorage.getItem(key);
    if (typeof value === 'string') {
      const parse = JSON.parse(value);
      return parse;
    }
  };

  return { setTimeStorage, setTasksStorage, getStorage, KEYS_STORAGE };
};
