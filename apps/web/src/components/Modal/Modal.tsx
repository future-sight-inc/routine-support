import React from "react";

// import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";

import * as S from "./styled";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ opened, onClose, children }) => {
  return (
    <S.Modal open={opened} onClose={onClose}>
      <S.ModalContent>
        <S.IconWrapper onClick={onClose}>
          <CloseIcon />
        </S.IconWrapper>
        {children}
      </S.ModalContent>
    </S.Modal>
  );
};
