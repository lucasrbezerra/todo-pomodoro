import { useContext, useEffect, useMemo, useState } from 'react';
import {
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
  Image,
  ConfirmationModal,
  InputTime,
  Switch,
  Animation,
  Navbar,
} from '../components';
import { useWindowSize, useAnimation } from '../context/hooks';
import { useTheme } from 'styled-components';
import { ThemeType } from '../themes';
import { ModalContext, StageContext, TaskContext, TimerContext } from '../context';
import { IAnimationContext, IModalContext, IStageContext, ITaskContext, ITimerContext } from '../interfaces';
import { AnimationContext } from '../context/AnimationContext';

const SELECTED_SWITCH = {
  TIMER: 'timer',
  TASKS: 'tasks',
};

export const Home = () => {
  const {
    time,
    openModalTimer,
    onChangeTime,
    onConfirmTime,
    onKeyDownTime,
    resetCountdown,
    handleStartTimer,
    setAuxTime,
  } = useContext(TimerContext) as ITimerContext;
  const { MODAL_TYPE, modalType, setModalType, toggle, isShown } = useContext(ModalContext) as IModalContext;
  const { stage } = useContext(StageContext) as IStageContext;
  const { animation } = useContext(AnimationContext) as IAnimationContext;
  const [selectedSwitch, setSelectedSwitch] = useState(SELECTED_SWITCH['TIMER']);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const {
    tasks,
    currentTask,
    createTask,
    jumpTask,
    deleteTask,
    editTask,
    clearTasks,
    updateToDone,
    getValidTasks,
    resetAllTasks,
  } = useContext(TaskContext) as ITaskContext;
  const { windowDimensions } = useWindowSize();
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

  const handleClear = () => {
    setModalType(MODAL_TYPE['CLEAR']);
    toggle();
  };

  const handleNext = () => {
    jumpTask();
    resetCountdown();
  };

  const handleResetTasks = () => {
    setModalType(MODAL_TYPE['RESET_TASKS']);
    toggle();
  };

  const handleResetAllTasks = () => {
    resetAllTasks();
    toggle();
  };

  const handleCleanAll = () => {
    clearTasks();
    resetCountdown();
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

  const chooseLayout = (value: string) => {
    const { width } = windowDimensions;
    return width > 1024 || value === selectedSwitch;
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

  const handleModalType = useMemo(() => {
    switch (modalType) {
      case MODAL_TYPE['CLEAR']:
        return (
          <ConfirmationModal
            onConfirm={handleCleanAll}
            onCancel={() => toggle()}
            message="Tem certeza que quer deletar TODAS as tarefa?"
          />
        );
      case MODAL_TYPE['INPUT_TIME']:
        return (
          <Content width="250px">
            <InputTime error={error} value={time} onChange={setAuxTime} width="100%" onKeyDown={onKeyDownTime} />
            <ConfirmationModal onConfirm={onConfirmTime} haveNoButton={false} />
          </Content>
        );
      case MODAL_TYPE['RESET_TASKS']:
        return (
          <ConfirmationModal
            onConfirm={handleResetAllTasks}
            onCancel={() => toggle()}
            message="Tem certeza que quer resetar todas as tarefas?"
          />
        );
      // case MODAL_TYPE['INPUT_TIME_SLEEP']:
      //   return (
      //     <Content width="250px">
      //       <InputTime
      //         error={error}
      //         value={timeSleep}
      //         onChange={onChangeTimeSleep}
      //         width="100%"
      //         onKeyDown={onKeyDownTimeSleep}
      //       />
      //       <ConfirmationModal onConfirm={onConfirmTimeSleep} haveNoButton={false} />
      //     </Content>
      //   );
    }
  }, [modalType]);

  const handleModalTypeTitle = useMemo(() => {
    switch (modalType) {
      case MODAL_TYPE['CLEAR']:
        return 'Limpar Tudo?';
      case MODAL_TYPE['INPUT_TIME']:
        return 'Escolha um tempo de trabalho';
      case MODAL_TYPE['RESET_TASKS']:
        return 'Reiniciar Tarefas?';
      case MODAL_TYPE['INPUT_TIME_SLEEP']:
        return 'Escolha um tempo de descanso';
    }
  }, [modalType]);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 0:
        return (
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
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
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
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
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="160px"
              height="50px"
              label="Pronto!"
              mIcon="0 .35rem 0 0"
              icon="far fa-check-circle"
              bg={`${theme.colors.success}`}
              onClick={handleDone}
            />
            <Button
              width="120px"
              height="35px"
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
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
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
      {animation && <Animation />}
      <Navbar
        handleClear={handleClear}
        resetAllTasks={handleResetTasks}
        handleChangeTime={openModalTimer}
        // handleChangeTimeSleep={handleChangeTimeSleep}
      />
      <Switch selectedSwitch={selectedSwitch} setSelectedSwitch={setSelectedSwitch} SELECTED_SWITCH={SELECTED_SWITCH} />
      {chooseLayout(SELECTED_SWITCH['TIMER']) && (
        <Box>
          <Content m="0 auto" width="80%" borderBottom={`1px solid ${theme.colors.shadow}`}>
            {handleStageTitle}
            {currentTask ? (
              <Content p="3rem 0" width="100%">
                <Subtitle>Tarefa Atual</Subtitle>
                <Task task={currentTask} currentTask={currentTask}>
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
              </Content>
            ) : (
              <Content
                p="1rem 0"
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <Image src="empty_task.svg" alt="Create Task" />
                <Subtitle color="light" mt="1rem">
                  Crie tarefas agora!
                </Subtitle>
              </Content>
            )}
          </Content>
          {<Timer minutes={minutes} seconds={seconds} onClick={openModalTimer} />}
          {handleStageButtons}
        </Box>
      )}
      {chooseLayout(SELECTED_SWITCH['TASKS']) && (
        <Box>
          <Content m="0 auto" width="85%" borderBottom={`1px solid ${theme.colors.shadow}`}>
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
            </Content>
          </Content>
          <TaskList
            tasks={tasks}
            currentTask={currentTask}
            resetCountdown={resetCountdown}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </Box>
      )}
      <Modal isShown={isShown} hide={toggle} headerText={handleModalTypeTitle} modalContent={handleModalType} />
    </Container>
  );
};
