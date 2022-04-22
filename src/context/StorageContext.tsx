import React, { createContext } from "react";
import { useStorage } from "./hooks";
import { IStorageContext } from "../interfaces";

const KEYS_STORAGE = {
  TIME_VALUE: "time-value",
  TIME_VALUE_SLEEP: "time-value-sleep",
  TASKS: "tasks",
};

const initialValues = {
  KEYS_STORAGE,
  getStorage: () => {},
  setTasksStorage: () => {},
  setTimeStorage: () => {},
  setTimeSleepStorage: () => {},
};

const StorageContext = createContext<IStorageContext>(initialValues);

const StorageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { setTimeStorage, setTasksStorage, setTimeSleepStorage, getStorage } =
    useStorage(KEYS_STORAGE);

  return (
    <StorageContext.Provider
      value={{
        KEYS_STORAGE,
        setTimeStorage,
        setTasksStorage,
        setTimeSleepStorage,
        getStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export { StorageProvider, StorageContext };
