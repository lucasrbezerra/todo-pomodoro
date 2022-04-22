import React, { createContext } from "react";
import { useModal } from "./hooks";
import { IModalContext } from "../interfaces";
import { Modal } from "../components";

const MODAL_TYPE = {
  CLEAR: "clear",
  DELETE: 'delete',
  EDIT: 'edit',
  RESET_TASKS: "reset-tasks",
  INPUT_TIME: "input-time",
  INPUT_TIME_SLEEP: "input-time-sleep",
};

const initialValues = {
  MODAL_TYPE: MODAL_TYPE,
  isShown: false,
  modalType: MODAL_TYPE["CLEAR"],
  setModalType: (value: string) => {},
  toggle: () => {},
};

const ModalContext = createContext<IModalContext>(initialValues);

const ModalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { isShown, modalType, setModalType, toggle } = useModal(initialValues);

  return (
    <ModalContext.Provider
      value={{
        MODAL_TYPE,
        isShown,
        modalType,
        setModalType,
        toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
