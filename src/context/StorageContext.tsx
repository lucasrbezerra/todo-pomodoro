import React, { createContext } from 'react';
import { useStorage } from './hooks';
import { IStorageContext } from '../interfaces';

// const initialValues = {
//   KEYS_STORAGE: {
//     TIME_VALUE: 'time-value',
//     TIME_VALUE_SLEEP: 'time-value-sleep',
//     TASKS: 'tasks',
//   },
// };

const StorageContext = createContext<IStorageContext>({} as IStorageContext);

const StorageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { setTimeStorage, setTasksStorage, setTimeSleepStorage, getStorage, KEYS_STORAGE } = useStorage();

  return (
    <StorageContext.Provider
      value={{
        setTimeStorage,
        setTasksStorage,
        setTimeSleepStorage,
        getStorage,
        KEYS_STORAGE,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export { StorageProvider, StorageContext };
