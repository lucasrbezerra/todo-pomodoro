import { Content, Band, Text } from '../../components';
import { ITask } from '../../interfaces';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';

type TaskProps = {
  task: ITask;
  width: string;
  m?: string | null;
  children: JSX.Element;
};

export const Task: React.FC<TaskProps> = ({ task, width, m, children }) => {
  const theme = useTheme() as ThemeType;
  return (
    <Content
      border={task.isDone ? `1px solid ${theme.colors.success}` : `0`}
      width={width}
      height="50px"
      position="relative"
      m={m}
      display="flex"
      bg="bgTask"
      alignItems="center"
    >
      <Band bg={task.isDone ? `${theme.colors.success}` : `${theme.colors.secondary}`} />
      <Text ml="16px" color={task.isDone ? `${theme.colors.success}` : `${theme.colors.light}`}>
        {task.task}
      </Text>
      {!task.isDone && children}
    </Content>
  );
};
