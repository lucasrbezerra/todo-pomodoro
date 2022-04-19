import { Dispatch, SetStateAction } from "react";

export interface IModalContext {
  isShown: boolean;
  modalType: string;
  setModalType: Dispatch<SetStateAction<string>>;
  MODAL_TYPE: any;
  toggle: () => void;
}
