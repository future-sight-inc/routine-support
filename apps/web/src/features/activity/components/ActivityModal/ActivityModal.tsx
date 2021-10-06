import React from "react";

import * as S from "./styled";
export interface ActivityModalActions {
  closeActivityModal: () => void;
}

export interface ActivityModalProps {
  opened: boolean;
  actions: ActivityModalActions;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  opened,
  actions,
}) => {
  return (
    <S.Modal open={opened} onClose={actions.closeActivityModal}>
      <S.ModalContent></S.ModalContent>
    </S.Modal>
  );
};
