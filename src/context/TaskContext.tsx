import React, { createContext } from 'react';
import { useTasks } from './hooks';
import { ITask, ITaskContext } from '../interfaces';
// import { useStorage } from '../context/hooks';

const getStorage = (key: string) => {
  let value = localStorage.getItem(key);
  if (typeof value === "string") {
    const parse = JSON.parse(value);
    return parse;
  }
};

const initialValues = {
  tasks: getStorage('tasks') || [],
  currentTask: getStorage('tasks') ? getStorage('tasks')[0] : '',
  createTask: (taskName: string) => {},
  jumpTask: () => {},
  deleteTask: (taskId: number) => {},
  editTask: (taskId: number, isDone: boolean, newTask: string) => {},
  clearTasks: () => {},
  updateToDone: (task: ITask, isDone: boolean) => {},
  getValidTasks: () => [],
  resetAllTasks: () => {},
};

const TaskContext = createContext<ITaskContext>(initialValues);

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
  } = useTasks(initialValues.tasks);

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
