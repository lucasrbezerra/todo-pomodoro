import { useEffect, useState } from 'react';
import { ITask } from '../interfaces';

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [currentTask, setCurrentTask] = useState<ITask | any>();

  useEffect(() => {
    if (tasks.length > 0) {
      setCurrentTask(tasks[0]);
    }
    console.log('updated: ', tasks);
  }, [tasks]);

  const createTask = (taskName: string) => {
    const newTask = {
      id: new Date().valueOf(),
      task: taskName,
    };
    setTasks([...tasks, newTask]);
  };
  // let auxTasks = [...tasks];
  // const index = auxTasks.map((item) => item.id).indexOf(TaskId);
  // console.log({index});
  // auxTasks.splice(index, 1);
  // console.log('splice: ', auxTasks);
  // setTasks([...auxTasks]);

  const jumpTask = () => {
    let auxTasks = [...tasks];
    auxTasks.reverse();
    auxTasks.pop();
    auxTasks.reverse();
    auxTasks.push(currentTask);
    setTasks(auxTasks);
  };

  const deleteTask = (taskId: number) => {
    // Como está declarado o estado tasks
    // const [tasks, setTasks] = useState<ITask[]>([]);
    // let auxTasks = [...tasks];
    // const index = auxTasks.map((item) => item.id).indexOf(taskId);
    // auxTasks.splice(index, 1);
    setTasks([]);

    /* Aparece como vazio, nos log's abaixo */
    console.log('***hooks/useTasks: ', tasks);
    console.log('***hooks/useTasks:  []');
  };

  const editTask = (taskId: number) => {
    console.log('tasks: ', tasks);
  };

  return { tasks, currentTask, createTask, jumpTask, deleteTask, editTask };
};
