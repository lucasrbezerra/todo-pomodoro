import { useState } from "react";
import { IModalContext } from "../../interfaces";

export const useModal = (initialValues: IModalContext) => {
  const [isShown, setIsShown] = useState<boolean>(initialValues.isShown);
  const [modalType, setModalType] = useState<string>(
    initialValues.MODAL_TYPE["CLEAR"]
  );
  const toggle = () => setIsShown(!isShown);

  return {
    isShown,
    modalType,
    setModalType,
    toggle,
  };
};
