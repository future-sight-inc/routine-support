import React, { MouseEvent } from "react";

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
  return (
    <S.Modal isOpened={isOpened} onClick={onClose}>
      <S.ModalContent onClick={(event: MouseEvent) => event.stopPropagation()}>
        <S.CloseIcon onClick={onClose} />
        {children}
      </S.ModalContent>
    </S.Modal>
  );
};
