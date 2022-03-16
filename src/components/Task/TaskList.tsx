import { Task, Content, Button } from '../../components';
import { useTasks } from '../../hooks';
import { ITask } from '../../interfaces';

type TaskListProps = {
  tasks: ITask[];
};

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { deleteTask, editTask } = useTasks();

  return (
    <Content width="450px" maxHeight="340px" overflowY="scroll" overflowX="hidden" m="0 auto">
      {tasks.map((task, index) => (
        <Task key={index} {...task} width="450px" m="1rem auto">
          <Content display="flex" position="absolute" right="16px">
            <Button width="35px" height="35px" icon="fas fa-pen" onClick={() => editTask(task.id)} />
            <Button width="35px" height="35px" icon="fas fa-trash" onClick={() => deleteTask(task.id)} />
          </Content>
        </Task>
      ))}
    </Content>
  );
};
