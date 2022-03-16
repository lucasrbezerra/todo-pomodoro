import { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Title, Container, Box, Timer, Task, TaskList, Button, Content, Subtitle, Input } from '../components';
import { useTasks } from '../hooks';
import { useTheme } from 'styled-components';
import { ThemeType } from '../themes';

const STAGES = {
  READY: 0,
  RUNNING: 1,
  FINISHED: 2,
};

const DEFAULT_TIME = 10;

let countdownTimeout: NodeJS.Timeout;

export const Home = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [stage, setStage] = useState(STAGES['READY']);

  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const { tasks, currentTask, createTask, jumpTask } = useTasks();
  const theme = useTheme() as ThemeType;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    if (taskName.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (taskName.length > 0) {
        createTask(taskName);
        setTaskName('');
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (stage === STAGES['RUNNING'] && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (stage === STAGES['RUNNING'] && time === 0) {
      setStage(STAGES['FINISHED']);
    }
  }, [stage, time]);

  const handleStartTimer = () => {
    setStage(STAGES['RUNNING']);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setStage(STAGES['READY']);
    setTime(DEFAULT_TIME);
  };

  const handleNext = () => {
    jumpTask();
    resetCountdown();
  };

  const handleCleanAll = () => {
    console.log('Clear All');
  };

  const handleAddTask = () => {
    if (taskName.length > 0) {
      createTask(taskName);
      setTaskName('');
    } else {
      setError(true);
    }
  };

  const handleDone = () => {
    resetCountdown();
  };

  // const handleEdit = useCallback((taskId: number) => {
  //   editTask(taskId)
  // }, []);

  // const handleDelete = useCallback((taskId: number) => {
  //   deleteTask(taskId);
  // }, []);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 0:
        return (
          <Button
            width="200px"
            height="50px"
            label="Iniciar"
            m="3rem 0 0 150px"
            bg={`${theme.colors.primary}`}
            onClick={handleStartTimer}
          />
        );

      case 1:
        return (
          <Button
            width="200px"
            height="50px"
            label="Desistir"
            icon="fas fa-ban"
            m="3rem 0 0 150px"
            bg={`${theme.colors.failure}`}
            onClick={resetCountdown}
          />
        );

      case 2:
        return (
          <Button
            width="200px"
            height="50px"
            label="Pronto!"
            icon="far fa-check-circle"
            m="3rem 0 0 150px"
            bg={`${theme.colors.success}`}
            onClick={handleDone}
          />
        );

      default:
        return (
          <Button
            width="200px"
            height="50px"
            label="Iniciar"
            m="3rem 0 0 150px"
            bg={`${theme.colors.primary}`}
            onClick={handleStartTimer}
          />
        );
    }
  }, [handleStartTimer, handleDone, resetCountdown, stage]);

  return (
    <Container>
      <Box>
        <Content m="0 auto" width="400px" p="0 0 3rem 0" borderBottom={`1px solid ${theme.colors.shadow}`}>
          <Title>Pronto!</Title>
          <Subtitle mt="4rem">Tarefa Atual</Subtitle>
          {currentTask ? (
            <Task width="400px" m="1rem 0 0 0" task={currentTask.task}>
              <Content display="flex" position="absolute" right="16px">
                {tasks.length > 1 && (
                  <Button
                    width="80px"
                    height="25px"
                    label="Pular"
                    icon="fas fa-angle-double-right"
                    onClick={handleNext}
                  />
                )}
              </Content>
            </Task>
          ) : (
            <Text mt="1.5rem" ml="125px">
              Crie tarefas agora!
            </Text>
          )}
        </Content>
        <Timer minutes={minutes} seconds={seconds} />
        {handleStageButtons}
      </Box>
      <Box>
        <Content m="0 auto" width="450px" borderBottom={`1px solid ${theme.colors.shadow}`}>
          <Title>Tarefas</Title>
          <Content display="flex" alignItems="center" p="1rem 0 1.5rem 0">
            <Input
              placeholder="Entre com uma tarefa nova..."
              error={error}
              value={taskName}
              onChange={onChange}
              onClick={handleAddTask}
              onKeyDown={onKeyDown}
            />
            <Button width="100px" height="40px" label="Limpar" onClick={handleCleanAll} />
          </Content>
        </Content>
        <TaskList tasks={tasks} />
      </Box>
    </Container>
  );
};
