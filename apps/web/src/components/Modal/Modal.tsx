import React, { MouseEvent } from "react";

import { ModalLocators } from "./locators";
import * as S from "./styled";

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpened,
  onClose,
  children,
}) => {
  if (!isOpened) {
    return null;
  }

  return (
    <S.Modal onClick={onClose} data-testid={ModalLocators.Container}>
      <S.ModalContent
        onClick={(event: MouseEvent) => event.stopPropagation()}
        data-testid={ModalLocators.Content}
      >
        <S.CloseIcon onClick={onClose} data-testid={ModalLocators.CloseIcon} />
        {children}
      </S.ModalContent>
    </S.Modal>
  );
};
