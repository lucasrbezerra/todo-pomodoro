import { useState } from 'react';
export const useModal = () => {
  const MODAL_TYPE = {
    CLEAR: 'clear',
    RESET_TASKS: 'reset-tasks',
    INPUT_TIME: 'input-time',
    INPUT_TIME_SLEEP: 'input-time-sleep',
  };

  const [isShown, setIsShown] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>(MODAL_TYPE['CLEAR']);
  const toggle = () => setIsShown(!isShown);

  return {
    isShown,
    modalType,
    setModalType,
    MODAL_TYPE,
    toggle,
  };
};
