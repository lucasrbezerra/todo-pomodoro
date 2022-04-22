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
import { useWindowSize } from '../context/hooks';
import { useTheme } from 'styled-components';
import { ThemeType } from '../themes';
import { ModalContext, StageContext, TaskContext, TimerContext, AnimationContext } from '../context';
import { IAnimationContext, IModalContext, IStageContext, ITaskContext, ITimerContext } from '../interfaces';

const SELECTED_SWITCH = {
  TIMER: 'timer',
  TASKS: 'tasks',
};

export const Home = () => {
  const {
    time,
    timeSleep,
    handleStartTimer,
    handleStartTimerSleep,
    resetCountdown,
    resetCountdownSleep,
    handleDone,
    handleDoneSleep,
    openModalTimer,
    openModalTimerSleep,
    onConfirmTime,
    onConfirmTimeSleep,
    onKeyDownTime,
    onKeyDownTimeSleep,
    onChangeTime,
    onChangeTimeSleep,
  } = useContext(TimerContext) as ITimerContext;
  const { MODAL_TYPE, modalType, setModalType, toggle, isShown } = useContext(ModalContext) as IModalContext;
  const { stage, STAGES } = useContext(StageContext) as IStageContext;
  const { animation } = useContext(AnimationContext) as IAnimationContext;
  const [selectedSwitch, setSelectedSwitch] = useState(SELECTED_SWITCH['TIMER']);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const { tasks, currentTask, createTask, jumpTask, deleteTask, editTask, clearTasks, getValidTasks, resetAllTasks } =
    useContext(TaskContext) as ITaskContext;
  const { windowDimensions } = useWindowSize();
  const theme = useTheme() as ThemeType;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesSleep = Math.floor(timeSleep / 60);
  const secondsSleep = timeSleep % 60;

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
    resetCountdownSleep();
  };

  const handleResetTasks = () => {
    setModalType(MODAL_TYPE['RESET_TASKS']);
    toggle();
  };

  const handleResetAllTasks = () => {
    resetAllTasks();
    resetCountdown();
    resetCountdownSleep();
    toggle();
  };

  const handleCleanAll = () => {
    clearTasks();
    resetCountdown();
    resetCountdownSleep();
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

  const chooseLayout = (value: string) => {
    const { width } = windowDimensions;
    return width > 1024 || value === selectedSwitch;
  };

  const chooseColorSubtitle = () => {
    switch (stage) {
      case STAGES['START']:
        return theme.colors.running;
      case STAGES['RUNNING']:
        return theme.colors.running;
      case STAGES['FINISHED_WORK']:
        return theme.colors.running;
      case STAGES['SLEEP_START']:
       return theme.colors.next;
      case STAGES['SLEEPING']:
       return theme.colors.next;
      case STAGES['FINISHED_SLEEP']:
       return theme.colors.next;
    }
  }

  const handleStageSubtitle = useMemo(() => {
    switch (stage) {
      case STAGES['START']:
        return <Subtitle color={chooseColorSubtitle()}>Tarefa Atual</Subtitle>;
      case STAGES['RUNNING']:
        return <Subtitle color={chooseColorSubtitle()}>Tarefa Atual</Subtitle>;
      case STAGES['FINISHED_WORK']:
        return <Subtitle color={chooseColorSubtitle()}>Tarefa Atual</Subtitle>;
      case STAGES['SLEEP_START']:
        return <Subtitle color={chooseColorSubtitle()}>Próxima Tarefa</Subtitle>;
      case STAGES['SLEEPING']:
        return <Subtitle color={chooseColorSubtitle()}>Próxima Tarefa</Subtitle>;
      case STAGES['FINISHED_SLEEP']:
        return <Subtitle color={chooseColorSubtitle()}>Próxima Tarefa</Subtitle>;
    }
  }, [
    handleStartTimer,
    handleStartTimerSleep,
    handleDone,
    handleDoneSleep,
    resetCountdown,
    resetCountdownSleep,
    stage,
  ]);

  const handleStageTitle = useMemo(() => {
    switch (stage) {
      case STAGES['START']:
        return <Title>Preparado?</Title>;
      case STAGES['RUNNING']:
        return <Title>Trabalhando!</Title>;
      case STAGES['FINISHED_WORK']:
        return <Title>Pronto?</Title>;
      case STAGES['SLEEP_START']:
        return <Title>Hora de descansar?</Title>;
      case STAGES['SLEEPING']:
        return <Title>Descansando ZzZ</Title>;
      case STAGES['FINISHED_SLEEP']:
        return <Title>Mais uma?</Title>;
    }
  }, [
    handleStartTimer,
    handleStartTimerSleep,
    handleDone,
    handleDoneSleep,
    resetCountdown,
    resetCountdownSleep,
    stage,
  ]);

  const timerStages = useMemo(() => {
    switch (stage) {
      case STAGES['SLEEP_START']:
        return (
          <Timer
            minutes={minutesSleep}
            seconds={secondsSleep}
            onClick={openModalTimerSleep}
            bg={`${theme.colors.sleepPrimary}`}
          />
        );
      case STAGES['SLEEPING']:
        return (
          <Timer
            minutes={minutesSleep}
            seconds={secondsSleep}
            onClick={openModalTimerSleep}
            bg={`${theme.colors.sleepPrimary}`}
          />
        );
      case STAGES['FINISHED_SLEEP']:
        return (
          <Timer
            minutes={minutesSleep}
            seconds={secondsSleep}
            onClick={openModalTimerSleep}
            bg={`${theme.colors.sleepPrimary}`}
          />
        );
      default:
        return <Timer minutes={minutes} seconds={seconds} onClick={openModalTimer} />;
    }
  }, [stage, time, timeSleep, onConfirmTime]);

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
            <InputTime error={error} value={time} onChange={onChangeTime} width="100%" onKeyDown={onKeyDownTime} />
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
      case MODAL_TYPE['INPUT_TIME_SLEEP']:
        return (
          <Content width="250px">
            <InputTime
              error={error}
              value={timeSleep}
              onChange={onChangeTimeSleep}
              width="100%"
              onKeyDown={onKeyDownTimeSleep}
            />
            <ConfirmationModal onConfirm={onConfirmTimeSleep} haveNoButton={false} />
          </Content>
        );
    }
  }, [modalType, time, onConfirmTime]);

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
      case STAGES['START']:
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

      case STAGES['RUNNING']:
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

      case STAGES['FINISHED_WORK']:
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
      case STAGES['SLEEP_START']:
        return (
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Iniciar"
              mIcon="0 .35rem 0 0"
              bg={`${theme.colors.sleepSecondary}`}
              onClick={handleStartTimerSleep}
            />
          </Content>
        );

      case STAGES['SLEEPING']:
        return (
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="200px"
              height="50px"
              label="Parar"
              icon="fas fa-ban"
              mIcon="0 .35rem 0 0"
              bg={`${theme.colors.failure}`}
              onClick={resetCountdownSleep}
            />
          </Content>
        );
      case STAGES['FINISHED_SLEEP']:
        return (
          <Content width="100%" mt="2.5rem" justifyContent="center" alignItems="center" display="flex">
            <Button
              width="160px"
              height="50px"
              label="Descansado!"
              mIcon="0 .35rem 0 0"
              icon="far fa-check-circle"
              bg={`${theme.colors.success}`}
              onClick={handleDoneSleep}
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
  }, [
    handleStartTimer,
    handleStartTimerSleep,
    handleDone,
    handleDoneSleep,
    resetCountdown,
    resetCountdownSleep,
    stage,
  ]);

  return (
    <Container>
      {animation && <Animation />}
      <Navbar
        handleClear={handleClear}
        resetAllTasks={handleResetTasks}
        handleChangeTime={openModalTimer}
        handleChangeTimeSleep={openModalTimerSleep}
      />
      <Switch selectedSwitch={selectedSwitch} setSelectedSwitch={setSelectedSwitch} SELECTED_SWITCH={SELECTED_SWITCH} />
      {chooseLayout(SELECTED_SWITCH['TIMER']) && (
        <Box>
          <Content m="0 auto" width="80%" borderBottom={`1px solid ${theme.colors.shadow}`}>
            {handleStageTitle}
            {currentTask ? (
              <Content p="3rem 0" width="100%">
                {handleStageSubtitle}
                <Task task={currentTask} currentTask={currentTask}>
                  <Content display="flex" position="absolute" right="16px">
                    {getValidTasks().length > 1 && (
                      <Button
                        width="80px"
                        height="25px"
                        label="Pular"
                        icon="fas fa-angle-double-right"
                        bg={`${theme.colors.running}`}
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
          {timerStages}
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
