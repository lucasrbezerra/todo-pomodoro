import { ContentTask, Band, Text } from '../../components';
import { ITask } from '../../interfaces';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';

type TaskProps = {
  task: ITask;
  currentTask: ITask;
  children: JSX.Element;
};

export const Task: React.FC<TaskProps> = ({ task, currentTask, children }) => {
  const theme = useTheme() as ThemeType;

  const selected_stage_color = (type: string) => {
    switch (type) {
      case 'border':
        if (task.id === currentTask?.id) {
          return `1px solid ${theme.colors.running}`;
        } else if (task.isDone) {
          return `1px solid ${theme.colors.success}`;
        } else {
          return '0';
        }
      case 'background':
        if (task.id === currentTask?.id) {
          return theme.colors.running;
        } else if (task.isDone) {
          return theme.colors.success;
        } else {
          return theme.colors.secondary;
        }
      case 'text':
        if (task.id === currentTask?.id) {
          return theme.colors.running;
        } else if (task.isDone) {
          return theme.colors.success;
        } else {
          return theme.colors.light;
        }
      default:
        break;
    }
  };
  
  return (
    <ContentTask border={selected_stage_color('border')}>
      <Band bg={selected_stage_color('background')} />
      <Text ml="16px" color={selected_stage_color('text')}>
        {task.task}
      </Text>
      {!task.isDone && children}
    </ContentTask>
  );
};
