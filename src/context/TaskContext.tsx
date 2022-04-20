import React, { createContext } from 'react';
import { useTasks } from './hooks';
import { ITaskContext } from '../interfaces';

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const TaskProvider: React.FC<React.ReactNode> = ({ children }) => {
  const {
    tasks,
    currentTask,
    createTask,
    jumpTask,
    deleteTask,
    editTask,
    clearTasks,
    updateToDone,
    getValidTasks,
    resetAllTasks,
  } = useTasks();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        currentTask,
        createTask,
        jumpTask,
        deleteTask,
        editTask,
        clearTasks,
        updateToDone,
        getValidTasks,
        resetAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
