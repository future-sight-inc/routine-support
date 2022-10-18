import React from "react";

import { ImageUrl, Pictogram } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import { Modal } from "../Modal";
import { TextField } from "../TextField";
import { usePictogramPickerComponent } from "./hooks";
import { createPictogramDataTestId, PictogramPickerLocators } from "./locators";
import * as S from "./styled";

interface PictogramPickerProps {
  value?: ImageUrl;
  pictograms: Pictogram[];
  onChange: (pictogram: ImageUrl) => void;
}

export interface PictogramPickerActions {
  onChange: (pictogram: ImageUrl) => void;
}

export const PictogramPicker: React.FC<PictogramPickerProps> = ({
  value,
  pictograms,
  onChange,
}) => {
  const {
    models: { selectedPictogram, opened, searchString, filteredPictograms },
    operations: { onModalClose, onModalOpen, onPictogramClick, onSearchStringChange },
  } = usePictogramPickerComponent(value, pictograms, { onChange });
  const { t } = useTranslation();

  return (
    <S.Wrapper backgroundImage={selectedPictogram}>
      {selectedPictogram ? (
        <S.EditButton onClick={onModalOpen} data-testid={PictogramPickerLocators.EditButton}>
          <S.EditIcon />
        </S.EditButton>
      ) : (
        <S.OpenButton onClick={onModalOpen} data-testid={PictogramPickerLocators.OpenButton}>
          {t("Choose")}
        </S.OpenButton>
      )}
      <Modal isOpened={opened} onClose={onModalClose}>
        <S.ModalContent data-testid={PictogramPickerLocators.ModalContent}>
          <S.ModalTitle>{t("Pictograms")}</S.ModalTitle>
          <TextField
            placeholder={t("Search")}
            value={searchString}
            onChange={onSearchStringChange}
            data-testid={PictogramPickerLocators.SearchField}
          />
          <S.PictogramsWrapper>
            {filteredPictograms.map((item, index) => (
              <S.Pictogram
                key={index}
                src={item.url}
                active={selectedPictogram === item.url}
                data-testid={`${createPictogramDataTestId({
                  name: item.en,
                  isActive: selectedPictogram === item.url,
                })}`}
                onClick={() => onPictogramClick(item.url)}
              />
            ))}
          </S.PictogramsWrapper>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};
