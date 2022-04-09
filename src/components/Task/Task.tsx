import { ContentTask, Band, Text } from '../../components';
import { ITask } from '../../interfaces';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';

type TaskProps = {
  task: ITask;
  children: JSX.Element;
};

export const Task: React.FC<TaskProps> = ({ task, children }) => {
  const theme = useTheme() as ThemeType;
  return (
    <ContentTask border={task.isDone ? `1px solid ${theme.colors.success}` : `0`}>
      <Band bg={task.isDone ? `${theme.colors.success}` : `${theme.colors.secondary}`} />
      <Text ml="16px" color={task.isDone ? `${theme.colors.success}` : `${theme.colors.light}`}>
        {task.task}
      </Text>
      {!task.isDone && children}
    </ContentTask>
  );
};
