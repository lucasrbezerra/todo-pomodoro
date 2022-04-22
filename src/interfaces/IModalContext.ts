export interface IModalContext {
  isShown: boolean;
  modalType: string;
  setModalType: (value: string) => void;
  MODAL_TYPE: any;
  toggle: () => void;
}
