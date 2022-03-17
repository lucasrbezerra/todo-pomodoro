import { useEffect, useState } from 'react';
import { ITask } from '../interfaces';

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [currentTask, setCurrentTask] = useState<ITask | any>();

  useEffect(() => {
    if (tasks.length > 0) {
      setCurrentTask(tasks[0]);
    } else {
      setCurrentTask('');
    }
  }, [tasks]);

  const createTask = (taskName: string) => {
    const newTask = {
      id: new Date().valueOf(),
      task: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  const clearTasks = () => {
    setTasks([]);
  }

  const jumpTask = () => {
    let auxTasks = [...tasks];
    auxTasks.reverse();
    auxTasks.pop();
    auxTasks.reverse();
    auxTasks.push(currentTask);
    setTasks(auxTasks);
  };

  const deleteTask = (taskId: number) => {
    let auxTasks = [...tasks];
    const index = auxTasks.map((item) => item.id).indexOf(taskId);
    auxTasks.splice(index, 1);
    setTasks(auxTasks);
  };

  const editTask = (taskId: number, newTask: string) => {
    const newTaskObject = {
      id: taskId,
      task: newTask,
    };
    let auxTasks = [...tasks];
    const index = tasks.map((item) => item.id).indexOf(taskId);
    auxTasks[index] = newTaskObject;
    setTasks(auxTasks);
  };

  return { tasks, currentTask, createTask, jumpTask, deleteTask, editTask, clearTasks };
};
