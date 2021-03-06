import { useContext, useEffect, useState } from 'react';
import { IStorageContext, ITask, ITaskContext } from '../../interfaces';
import { StorageContext } from '../../context';
import { useStorage } from './useStorage';

export const useTasks = (initialTasks: ITask[]) => {
  const { setTasksStorage } = useContext(StorageContext) as IStorageContext;
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [currentTask, setCurrentTask] = useState<ITask | any>(initialTasks[0]);

  useEffect(() => {
    if (tasks.length > 0 && !tasks[0].isDone) {
      setCurrentTask(tasks[0]);
    } else {
      setCurrentTask('');
    }
    setTasksStorage(tasks);
  }, [tasks]);

  const createTask = (taskName: string) => {
    const newTask = {
      id: new Date().valueOf(),
      task: taskName,
      isDone: false,
    };
    let valid_tasks = tasks.filter((task) => !task.isDone);
    valid_tasks.push(newTask);
    const final_array = valid_tasks.concat(tasks.filter((task) => task.isDone));
    setTasks(final_array);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const resetAllTasks = () => {
    let reseted_tasks = [...tasks];
    reseted_tasks.map((task) => (task.isDone = false));
    setTasks(reseted_tasks);
  };

  const getValidTasks = () => tasks.filter((task) => !task.isDone);

  const getDoneTasks = () => tasks.filter((task) => task.isDone);

  const jumpTask = () => {
    if (!currentTask.isDone) {
      let validTasks = getValidTasks();
      let doneTasks = getDoneTasks();
      validTasks.reverse();
      validTasks.pop();
      validTasks.reverse();
      validTasks.push(currentTask);
      const finalArray = validTasks.concat(doneTasks);
      setTasks(finalArray);
    } else {
      let auxTasks = [...tasks];
      auxTasks.reverse();
      auxTasks.pop();
      auxTasks.reverse();
      auxTasks.push(currentTask);
      setTasks(auxTasks);
    }
  };

  const deleteTask = (taskId: number) => {
    let auxTasks = [...tasks];
    const index = tasks.findIndex((item) => {
      return item.id == taskId;
    });
    auxTasks.splice(index, 1);
    setTasks(auxTasks);
  };

  const editTask = (taskId: number, isDone: boolean, newTask: string) => {
    const newTaskObject = {
      id: taskId,
      task: newTask,
      isDone,
    };

    let auxTasks = [...tasks];
    const index = tasks.findIndex((item) => {
      return item.id == taskId;
    });
    auxTasks[index] = newTaskObject;
    setTasks(auxTasks);
  };

  const updateToDone = (task: ITask, isDone: boolean) => {
    const index = tasks.findIndex((item) => {
      return item.id == task.id;
    });

    const tempTasks = [...tasks];

    tempTasks[index].isDone = isDone;

    setTasks(tempTasks);
  };

  return {
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
  };
};
