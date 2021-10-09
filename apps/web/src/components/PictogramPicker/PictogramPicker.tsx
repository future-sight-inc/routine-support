import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { Modal } from "components/Modal";
import { ImageUrl } from "types/main";

import { usePictogramPickerComponent } from "./hooks";
import * as S from "./styled";

interface PictogramPickerProps {
  value?: ImageUrl;
  onChange: (pictogram: ImageUrl) => void;
}

export interface PictogramPickerActions {
  onChange: (pictogram: ImageUrl) => void;
}

export const PictogramPicker: React.FC<PictogramPickerProps> = ({
  value: selectedPictogram,
  onChange,
}) => {
  const {
    models: { opened, searchString, pictograms },
    operations: {
      onModalClose,
      onModalOpen,
      onPictogramClick,
      onSearchStringChange,
    },
  } = usePictogramPickerComponent({ onChange });

  return (
    <S.Wrapper backgroundImage={selectedPictogram}>
      <S.OpenButton onClick={onModalOpen}>
        {selectedPictogram ? "Change pictogram" : "Choose pictogram"}
      </S.OpenButton>
      <Modal opened={opened} onClose={onModalClose}>
        <S.ModalContent>
          <TextField
            placeholder="Search..."
            fullWidth
            value={searchString}
            onChange={onSearchStringChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <S.PictogramsWrapper>
            {pictograms.map((item) => (
              <S.Pictogram
                src={item}
                active={selectedPictogram === item}
                onClick={() => onPictogramClick(item)}
              />
            ))}
          </S.PictogramsWrapper>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};
