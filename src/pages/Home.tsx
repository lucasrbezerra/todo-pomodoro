import { useEffect, useMemo, useState } from 'react';
import {
  Text,
  Title,
  Container,
  Box,
  Timer,
  Task,
  TaskList,
  Button,
  Content,
  Subtitle,
  Input,
  Modal,
  ConfirmationModal,
} from '../components';
import { useTasks } from '../hooks';
import { useModal } from '../hooks';

import { useTheme } from 'styled-components';
import { ThemeType } from '../themes';

const STAGES = {
  READY: 0,
  RUNNING: 1,
  FINISHED: 2,
};

const DEFAULT_TIME = 1;

let countdownTimeout: NodeJS.Timeout;

export const Home = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [stage, setStage] = useState(STAGES['READY']);

  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const { tasks, currentTask, createTask, jumpTask, deleteTask, editTask, clearTasks, updateToDone, getValidTasks } =
    useTasks();
  const { toggle, isShown } = useModal();
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
    clearTasks();
    toggle();
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
    if (!!currentTask) {
      updateToDone(currentTask, true);
      jumpTask();
    }
  };

  const handleStageTitle = useMemo(() => {
    switch (stage) {
      case 0:
        return <Title>Pronto!</Title>;
      case 1:
        return <Title>Trabalhando!</Title>;
      case 2:
        return <Title>Mais uma?!</Title>;
    }
  }, [handleStartTimer, handleDone, resetCountdown, stage]);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 0:
        return (
          <Content width="100%" mt="3.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Iniciar"
              mIcon="0 .35rem 0 0"
              bg={`${theme.colors.primary}`}
              onClick={handleStartTimer}
            />
          </Content>
        );

      case 1:
        return (
          <Content width="100%" mt="3.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Desistir"
              icon="fas fa-ban"
              mIcon="0 .35rem 0 0"
              bg={`${theme.colors.failure}`}
              onClick={resetCountdown}
            />
          </Content>
        );

      case 2:
        return (
          <Content width="100%" mt="3.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Pronto!"
              mIcon="0 .35rem 0 0"
              icon="far fa-check-circle"
              bg={`${theme.colors.success}`}
              onClick={handleDone}
            />
            <Button
              width="120px"
              height="30px"
              label="Repita!"
              mIcon="0 .35rem 0 0"
              icon="fas fa-redo"
              bg={`${theme.colors.failure}`}
              onClick={resetCountdown}
            />
          </Content>
        );

      default:
        return (
          <Content width="100%" mt="3.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Iniciar"
              bg={`${theme.colors.primary}`}
              onClick={handleStartTimer}
            />
          </Content>
        );
    }
  }, [handleStartTimer, handleDone, resetCountdown, stage]);

  return (
    <Container>
      <Box>
        <Content m="0 auto" width="400px" p="0 0 3rem 0" borderBottom={`1px solid ${theme.colors.shadow}`}>
          {handleStageTitle}
          <Subtitle mt="4rem">Tarefa Atual</Subtitle>
          {currentTask ? (
            <Task width="400px" m="1rem 0 0 0" task={currentTask}>
              <Content display="flex" position="absolute" right="16px">
                {getValidTasks().length > 1 && (
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
              autoFocus
              placeholder="Entre com uma tarefa nova..."
              error={error}
              value={taskName}
              onChange={onChange}
              onClick={handleAddTask}
              onKeyDown={onKeyDown}
            />
            <Button width="100px" height="40px" label="Limpar" onClick={() => toggle()} />
          </Content>
        </Content>
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </Box>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Deletar Todas Tarefas"
        modalContent={
          <ConfirmationModal
            onConfirm={handleCleanAll}
            onCancel={() => toggle()}
            message="Tem certeza que quer deletar TODAS as tarefa?"
          />
        }
      />
    </Container>
  );
};
