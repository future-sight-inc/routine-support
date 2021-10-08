import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { Modal } from "components/Modal";

import { usePictogramPickerComponent } from "./hooks";
import * as S from "./styled";

export const PictogramPicker: React.FC = () => {
  const {
    models: { opened, selectedPictogram },
    operations: { onModalClose, onModalOpen, onPictogramClick },
  } = usePictogramPickerComponent();

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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <S.PictogramsWrapper>
            {[
              "https://www.sclera.be/resources/pictos/bloemschikken.png",
              "https://www.sclera.be/resources/pictos/barbeque.png",
              "https://www.sclera.be/resources/pictos/zee.png",
              "https://www.sclera.be/resources/pictos/fietsen.png",
            ].map((item) => (
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
