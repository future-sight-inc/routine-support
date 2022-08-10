import React, { ReactNode, useRef, useState } from "react";

import { rgba } from "polished";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MobileTheme } from "../../theme";
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

  const [isBackgroundVisible, setBackgroundVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeInBackground = () => {
    setBackgroundVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const fadeOutBackground = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setBackgroundVisible(false));
  };

  const handleOpen = () => {
    setOpened(true);
    fadeInBackground();
  };

  const handleClose = () => {
    fadeOutBackground();
    setOpened(false);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    fadeOutBackground();
    setOpened(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen} testID={InputModalLocators.PressElement}>
        {pressElement}
      </TouchableOpacity>
      <Modal visible={isBackgroundVisible} transparent animationType="none">
        {isBackgroundVisible && (
          <Animated.View
            style={[
              styles.background,
              {
                opacity: fadeAnim,
              },
            ]}
            testID={InputModalLocators.Background}
          />
        )}
        <Modal
          visible={isOpened}
          animationType="slide"
          transparent
          testID={InputModalLocators.Modal}
        >
          <View style={styles.modalContentWrapper}>
            <TouchableWithoutFeedback onPress={handleClose} testID={InputModalLocators.ModalDim}>
              <View style={styles.modalDim} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Typography
                  variant="text1Bold"
                  color="primary"
                  onPress={handleClose}
                  testID={InputModalLocators.CloseText}
                >
                  Закрыть
                </Typography>
                <Typography
                  variant="text1Bold"
                  color="primary"
                  onPress={handleConfirm}
                  testID={InputModalLocators.ConfirmText}
                >
                  Выбрать
                </Typography>
              </View>
              {input}
            </View>
          </View>
        </Modal>
      </Modal>
    </>
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
