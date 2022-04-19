import { ITask } from '../interfaces';

export interface ITaskContext {
  tasks: ITask[];
  currentTask: ITask;
  createTask: (taskName: string) => void;
  jumpTask: () => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number, isDone: boolean, newTask: string) => void;
  clearTasks: () => void;
  updateToDone: (task: ITask, isDone: boolean) => void;
  getValidTasks: () => ITask[];
  resetAllTasks: () => void;
}
