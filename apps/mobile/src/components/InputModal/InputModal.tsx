import React, { ReactNode, useState } from "react";

import { rgba } from "polished";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { MobileTheme } from "../../theme";
import { Popup } from "../Popup";
import { Typography } from "../Typography";
import { InputModalLocators } from "./locators";

interface InputModalProps {
  pressElement: ReactNode;
  input: ReactNode;
  onConfirm: () => void;
  onClose: () => void;
}

export const InputModal: React.FC<InputModalProps> = ({
  pressElement,
  input,
  onConfirm,
  onClose,
}) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
    onClose();
  };

  const handleConfirm = () => {
    setOpened(false);
    onConfirm();
  };

  return (
    <Popup
      pressElement={pressElement}
      isOpened={isOpened}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={handleClose}>
          <Typography variant="text1Bold" color="primary" testID={InputModalLocators.CloseText}>
            Закрыть
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleConfirm}>
          <Typography variant="text1Bold" color="primary" testID={InputModalLocators.ConfirmText}>
            Выбрать
          </Typography>
        </TouchableOpacity>
      </View>
      {input}
    </Popup>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: rgba(MobileTheme.palette.common.black, 0.6),
    position: "absolute",
  },
  modalContentWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  modalContent: {
    width: Dimensions.get("screen").width - 32,
    backgroundColor: MobileTheme.palette.common.white,
    borderRadius: MobileTheme.borderRadius.m,
    padding: 16,
    margin: 16,
  },
  modalDim: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
