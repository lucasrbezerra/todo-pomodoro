import { useContext, useEffect, useState } from 'react';
import { AnimationContext, ModalContext, StageContext, StorageContext, TaskContext } from '../../context';
import { IAnimationContext, IModalContext, IStageContext, IStorageContext, ITaskContext } from '../../interfaces';

export const useTimer = (DEFAULT_TIMER: number, DEFAULT_TIMER_SLEEP: number) => {
  const { stage, setStage, STAGES } = useContext(StageContext) as IStageContext;
  const { setTimeStorage, setTimeSleepStorage } = useContext(StorageContext) as IStorageContext;
  const { setModalType, toggle, MODAL_TYPE } = useContext(ModalContext) as IModalContext;
  const { currentTask, jumpTask, updateToDone } = useContext(TaskContext) as ITaskContext;
  const { toogleAnimation, notifyWork, notifySleep } = useContext(AnimationContext) as IAnimationContext;

  let countdownTimeout: NodeJS.Timeout;
  let countdownTimeoutSleeping: NodeJS.Timeout;

  const [time, setTime] = useState(DEFAULT_TIMER);
  const [auxTime, setAuxTime] = useState(DEFAULT_TIMER);
  const [timeSleep, setTimeSleep] = useState(DEFAULT_TIMER_SLEEP);
  const [auxTimeSleep, setAuxTimeSleep] = useState(DEFAULT_TIMER_SLEEP);

  useEffect(() => {
    if (stage === STAGES['RUNNING'] && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (stage === STAGES['RUNNING'] && time === 0) {
      setStage(STAGES['FINISHED_WORK']);
      toogleAnimation();
      notifyWork();
    } else if (stage === STAGES['SLEEPING'] && timeSleep > 0) {
      countdownTimeoutSleeping = setTimeout(() => {
        setTimeSleep(timeSleep - 1);
      }, 1000);
    } else if (stage === STAGES['SLEEPING'] && timeSleep === 0) {
      setStage(STAGES['FINISHED_SLEEP']);
      toogleAnimation();
      notifySleep();
    }
  }, [stage, time, timeSleep]);

  /* Work Timer */
  const onChangeTime = (t: number) => {
    setAuxTime(t);
  };

  const onConfirmTime = () => {
    setTimeStorage(auxTime);
    setTime(auxTime);
    toggle();
    resetCountdown();
  };

  const onKeyDownTime = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onConfirmTime();
    }
  };

  const openModalTimer = () => {
    setModalType(MODAL_TYPE['INPUT_TIME']);
    toggle();
  };

  const handleStartTimer = () => {
    setStage(STAGES['RUNNING']);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setStage(STAGES['START']);
    setTime(auxTime);
  };

  const handleDone = () => {
    if (!!currentTask) {
      updateToDone(currentTask, true);
      jumpTask();
    }
    setStage(STAGES['SLEEP_START']);
  };

  /* Sleep Timer */
  const onChangeTimeSleep = (time: number) => {
    setAuxTimeSleep(time);
  };

  const onConfirmTimeSleep = () => {
    clearTimeout(countdownTimeoutSleeping);
    setTimeSleepStorage(auxTimeSleep);
    setTime(auxTime);
    setTimeSleep(auxTimeSleep);
    toggle();
  };

  const onKeyDownTimeSleep = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onConfirmTimeSleep();
    }
  };

  const openModalTimerSleep = () => {
    setModalType(MODAL_TYPE['INPUT_TIME_SLEEP']);
    toggle();
  };

  const handleStartTimerSleep = () => {
    setStage(STAGES['SLEEPING']);
  };

  const resetCountdownSleep = () => {
    clearTimeout(countdownTimeoutSleeping);
    setTime(auxTime);
    setTimeSleep(auxTimeSleep);
    setStage(STAGES['START']);
  };

  const handleDoneSleep = () => {
    setStage(STAGES['START']);
    resetCountdownSleep();
  };

  return {
    time,
    timeSleep,
    auxTime,
    auxTimeSleep,
    setAuxTimeSleep,
    handleStartTimer,
    handleStartTimerSleep,
    resetCountdown,
    resetCountdownSleep,
    handleDone,
    handleDoneSleep,
    openModalTimer,
    openModalTimerSleep,
    onChangeTime,
    onChangeTimeSleep,
    onConfirmTime,
    onConfirmTimeSleep,
    onKeyDownTime,
    onKeyDownTimeSleep,
  };
};
