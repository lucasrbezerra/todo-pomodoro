import React, { createContext } from 'react';
import { useStorage } from './hooks';
import { IStorageContext } from '../interfaces';

const StorageContext = createContext<IStorageContext | null>(null);

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
