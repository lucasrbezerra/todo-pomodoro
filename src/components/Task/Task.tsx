import { ContentTask, Band, Text, Content } from '../../components';
import { IStageContext, ITask } from '../../interfaces';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';
import { useContext, useEffect, useMemo, useState } from 'react';
import { StageContext } from '../../context';

type TaskProps = {
  task: ITask;
  currentTask: ITask;
  children: JSX.Element;
};

export const Task: React.FC<TaskProps> = ({ task, currentTask, children }) => {
  const theme = useTheme() as ThemeType;
  const { stage, STAGES } = useContext(StageContext) as IStageContext;

  const stageIsNext = () => {
    // console.log('isCalled');
    if (stage === STAGES['SLEEP_START'] || stage === STAGES['SLEEPING'] || stage === STAGES['FINISHED_SLEEP']) {
      return true;
    } else {
      return false;
    }
  };

  const selected_stage_color = (type: string) => {
    switch (type) {
      case 'border':
        if (task.id === currentTask?.id && !stageIsNext()) {
          return `1px solid ${theme.colors.running}`;
        } else if (task.id === currentTask?.id && stageIsNext()) {
          return `1px solid ${theme.colors.next}`;
        } else if (task.isDone) {
          return `1px solid ${theme.colors.success}`;
        } else {
          return '0';
        }
      case 'background':
        if (task.id === currentTask?.id && !stageIsNext()) {
          return theme.colors.running;
        } else if (task.id === currentTask?.id && stageIsNext()) {
          return theme.colors.next;
        } else if (task.isDone) {
          return theme.colors.success;
        } else {
          return theme.colors.secondary;
        }
      case 'text':
        if (task.id === currentTask?.id && !stageIsNext()) {
          return theme.colors.running;
        } else if (task.id === currentTask?.id && stageIsNext()) {
          return theme.colors.next;
        } else if (task.isDone) {
          return theme.colors.success;
        } else {
          return theme.colors.light;
        }
      default:
        break;
    }
  };

  // const [border, setBorder] = useState(selected_stage_color('border'));
  // const [background, setBackground] = useState(selected_stage_color('background'));
  // const [text, setText] = useState(selected_stage_color('text'));

  // useEffect(() => {
  //   setBorder(selected_stage_color('border'));
  //   setBackground(selected_stage_color('background'));
  //   setText(selected_stage_color('text'));
  //   // console.log({stage});

  // }, [stage]);

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
