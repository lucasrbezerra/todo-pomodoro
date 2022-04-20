import { useContext, useEffect, useState } from 'react';
import { IAnimationContext, IModalContext, IStageContext, IStorageContext } from '../../interfaces';
import { AnimationContext } from '../AnimationContext';
import { ModalContext } from '../ModalContext';
import { StageContext } from '../StageContext';
import { StorageContext } from '../StorageContext';
import { useStorage, useStages } from '../hooks';

export const useTimer = () => {
  const { MODAL_TYPE, setModalType, toggle } = useContext(ModalContext) as IModalContext;
  const { stage, setStage } = useContext(StageContext) as IStageContext;
  const { STAGES } = useStages();
  const { getStorage, setTimeStorage, setTimeSleepStorage } = useContext(StorageContext) as IStorageContext;
  const { KEYS_STORAGE } = useStorage();
  const { setAnimation, notifyMe } = useContext(AnimationContext) as IAnimationContext;
  const DEFAULT_TIME = getStorage(KEYS_STORAGE['TIME_VALUE']) || 25 * 60;
  const DEFAULT_TIME_SLEEP = getStorage(KEYS_STORAGE['TIME_VALUE_SLEEP']) || 5 * 60;

  let countdownTimeout: NodeJS.Timeout;
  let countdownTimeoutSleeping: NodeJS.Timeout;

  const [time, setTime] = useState(DEFAULT_TIME);
  const [auxTime, setAuxTime] = useState(DEFAULT_TIME);
  const [timeSleep, setTimeSleep] = useState(DEFAULT_TIME_SLEEP);
  const [auxTimeSleep, setAuxTimeSleep] = useState(DEFAULT_TIME_SLEEP);

  useEffect(() => {
    if (stage === STAGES['RUNNING'] && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (stage === STAGES['RUNNING'] && time === 0) {
      setStage(STAGES['FINISHED_WORK']);
      // setAnimation(true);
      // setTimeout(() => {
      //   setAnimation(false);
      // }, 2500);
      notifyMe();
    } else if (stage === STAGES['SLEEPING'] && timeSleep > 0) {
      countdownTimeoutSleeping = setTimeout(() => {
        setTimeSleep(timeSleep - 1);
      }, 1000);
    } else if (stage === STAGES['SLEEPING'] && timeSleep === 0) {
      setStage(STAGES['FINISHED_SLEEP']);
      // setAnimation(true);
      // setTimeout(() => {
      //   setAnimation(false);
      // }, 2500);
      notifyMe();
    }
  }, [stage, time, timeSleep]);

  const onChangeTime = (time: number) => {
    setAuxTime(time);
  };

  const onChangeTimeSleep = (time: number) => {
    setAuxTimeSleep(time);
  };

  const openModalTimer = () => {
    setModalType(MODAL_TYPE['INPUT_TIME']);
    toggle();
  };

  const openModalTimerSleep = () => {
    setModalType(MODAL_TYPE['INPUT_TIME_SLEEP']);
    toggle();
  };

  const handleStartTimer = () => {
    setStage(STAGES['RUNNING']);
  };

  const handleStartTimerSleep = () => {
    setStage(STAGES['SLEEPING']);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setStage(STAGES['START']);
    setTime(getStorage(KEYS_STORAGE['TIME_VALUE']) || DEFAULT_TIME);
  };

  const resetCountdownSleep = () => {
    clearTimeout(countdownTimeoutSleeping);
    setStage(STAGES['START']);
    setTime(getStorage(KEYS_STORAGE['TIME_VALUE']) || DEFAULT_TIME);
    setTimeSleep(getStorage(KEYS_STORAGE['TIME_VALUE_SLEEP']) || DEFAULT_TIME_SLEEP);
  };

  const onConfirmTime = () => {
    // setTimeStorage(auxTime);
    setTime(auxTime);
    resetCountdown();
    toggle();
  };

  const onConfirmTimeSleep = () => {
    setTime(auxTime);
    resetCountdown();
    toggle();
  };

  useEffect(() => {
    setTimeStorage(auxTime);
  }, [auxTime]);

  useEffect(() => {
    setTimeSleepStorage(auxTimeSleep);
  }, [auxTimeSleep]);

  const onKeyDownTime = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onConfirmTime();
    }
  };

  const onKeyDownTimeSleep = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onConfirmTimeSleep();
    }
  };

  return {
    time,
    timeSleep,
    auxTime,
    auxTimeSleep,
    openModalTimer,
    openModalTimerSleep,
    handleStartTimer,
    handleStartTimerSleep,
    resetCountdown,
    resetCountdownSleep,
    onKeyDownTime,
    onKeyDownTimeSleep,
    onChangeTime,
    onChangeTimeSleep,
    onConfirmTime,
    onConfirmTimeSleep,
  };
};
