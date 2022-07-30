import React from "react";

import { useTranslation } from "react-i18next";

import { Modal } from "../Modal";
import { ConfirmationModalLocators } from "./locators";
import * as S from "./styled";

interface ConfirmationModalProps {
  isOpened: boolean;
  title: string;
  description?: string;
  confirmButtonText?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpened,
  title,
  description,
  confirmButtonText,
  onConfirm,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <S.ModalContent data-testid={ConfirmationModalLocators.ModalContent}>
        <S.Title data-testid={ConfirmationModalLocators.Title}>{title}</S.Title>
        {description && (
          <S.Description data-testid={ConfirmationModalLocators.Description}>
            {description}
          </S.Description>
        )}
        <S.ButtonsWrapper>
          <S.ConfirmButton
            onClick={onConfirm}
            data-testid={ConfirmationModalLocators.ConfirmButton}
          >
            {confirmButtonText || t("Confirm")}
          </S.ConfirmButton>
          <S.CancelButton onClick={onClose} data-testid={ConfirmationModalLocators.CancelButton}>
            {t("Cancel")}
          </S.CancelButton>
        </S.ButtonsWrapper>
      </S.ModalContent>
    </Modal>
  );
};
