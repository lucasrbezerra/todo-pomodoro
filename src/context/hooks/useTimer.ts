import { useContext, useEffect, useState } from 'react';
import { IAnimationContext, IModalContext, IStageContext, IStorageContext } from '../../interfaces';
import { AnimationContext } from '../AnimationContext';
import { ModalContext } from '../ModalContext';
import { StageContext } from '../StageContext';
import { StorageContext } from '../StorageContext';

export const useTimer = () => {
  const { MODAL_TYPE, setModalType, toggle } = useContext(ModalContext) as IModalContext;
  const { stage, setStage, STAGES } = useContext(StageContext) as IStageContext;
  const { KEYS_STORAGE, getStorage, setTimeStorage } = useContext(StorageContext) as IStorageContext;
  const { setAnimation, notifyMe } = useContext(AnimationContext) as IAnimationContext;
  const DEFAULT_TIME = getStorage(KEYS_STORAGE['TIME_VALUE']) || 25 * 60;

  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(DEFAULT_TIME);
  const [auxTime, setAuxTime] = useState(DEFAULT_TIME);

  useEffect(() => {
    if (stage === STAGES['RUNNING'] && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (stage === STAGES['RUNNING'] && time === 0) {
      setStage(STAGES['FINISHED']);
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 2500);
      notifyMe();
    }
  }, [stage, time]);

  const onChangeTime = (time: number) => {
    console.log('Before: ', time);
    setAuxTime(time);
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
    setTime(getStorage(KEYS_STORAGE['TIME_VALUE']) || DEFAULT_TIME);
  };

  const onConfirmTime = () => {
    // setTimeStorage(auxTime);
    setTime(auxTime);
    resetCountdown();
    toggle();
  };

  useEffect(() => {
    setTimeStorage(auxTime);
  }, [auxTime]);

  const onKeyDownTime = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onConfirmTime();
    }
  };

  return {
    time,
    auxTime,
    openModalTimer,
    handleStartTimer,
    resetCountdown,
    onKeyDownTime,
    setAuxTime,
    onChangeTime,
    onConfirmTime,
  };
};
