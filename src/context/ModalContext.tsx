import React, { createContext } from 'react';
import { useModal } from './hooks';
import { IModalContext } from '../interfaces';

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { isShown, modalType, setModalType, MODAL_TYPE, toggle } = useModal();

  return (
    <ModalContext.Provider
      value={{
        isShown,
        modalType,
        setModalType,
        MODAL_TYPE,
        toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
