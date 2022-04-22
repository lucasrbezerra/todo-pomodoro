import { IStorageContext, ITask } from "../../interfaces";

// export const useStorage = (initialValues: IStorageContext) => {
export const useStorage = (KEYS_STORAGE: any) => {
  const setTimeStorage = (value: number) => {
    localStorage.setItem(KEYS_STORAGE["TIME_VALUE"], value.toString());
  };

  const setTimeSleepStorage = (value: number) =>
    localStorage.setItem(KEYS_STORAGE["TIME_VALUE_SLEEP"], value.toString());

  const setTasksStorage = (value: ITask[]) => {
    let updated_value = JSON.stringify(value);
    localStorage.setItem(KEYS_STORAGE["TASKS"], updated_value);
  };

  const getStorage = (key: string) => {
    let value = localStorage.getItem(key);
    if (typeof value === "string") {
      const parse = JSON.parse(value);
      return parse;
    }
  };

  return {
    setTimeStorage,
    setTasksStorage,
    setTimeSleepStorage,
    getStorage,
    KEYS_STORAGE,
  };
};
