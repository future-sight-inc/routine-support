import React, { ReactNode, useEffect, useRef, useState } from "react";

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
import { PopupLocators } from "./locators";

interface PopupProps {
  isOpened?: boolean;
  pressElement: ReactNode;
  children: ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  isOpened: defaultOpened = false,
  pressElement,
  children,
  onClose,
  onOpen,
}) => {
  const [isOpened, setOpened] = useState(defaultOpened);

  const [isBackgroundVisible, setBackgroundVisible] = useState(isOpened);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setOpened(defaultOpened);
    setBackgroundVisible(defaultOpened);
  }, [defaultOpened]);

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
    onOpen && onOpen();
  };

  const handleClose = () => {
    fadeOutBackground();
    setOpened(false);
    onClose && onClose();
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen} testID={PopupLocators.PressElement}>
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
            testID={PopupLocators.Background}
          />
        )}
        <Modal visible={isOpened} animationType="slide" transparent testID={PopupLocators.Modal}>
          <View style={styles.modalContentWrapper}>
            <TouchableWithoutFeedback onPress={handleClose} testID={PopupLocators.ModalDim}>
              <View style={styles.modalDim} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>{children}</View>
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
});
