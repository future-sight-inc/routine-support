import React from "react";

import * as S from "./styled";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ opened, onClose, children }) => {
  return (
    <S.Modal open={opened} onClose={onClose}>
      <S.ModalContent>{children}</S.ModalContent>
    </S.Modal>
  );
};
