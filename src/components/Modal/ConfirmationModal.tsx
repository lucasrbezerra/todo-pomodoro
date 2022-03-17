import React, { FunctionComponent } from 'react';
import { ConfirmationButtons, Message, YesButton, NoButton } from '../Modal';

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel?: () => void;
  message?: string;
  haveNoButton?: boolean;
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({
  onConfirm,
  onCancel,
  message,
  haveNoButton = true,
}) => {
  return (
    <React.Fragment>
      <Message>{message}</Message>
      <ConfirmationButtons>
        <YesButton onClick={onConfirm}>Confirmar</YesButton>
        {haveNoButton && <NoButton onClick={onCancel}>Cancelar</NoButton>}
      </ConfirmationButtons>
    </React.Fragment>
  );
};
