import React, { useRef, useState } from "react";

import { rgba } from "polished";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";

export const DateSelector: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  const [isBackgroundVisible, setBackgroundVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

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
  };

  return (
    <>
      <Typography onPress={handleOpen}>Press to open</Typography>

      {isBackgroundVisible && (
        <Animated.View
          style={[
            styles.background,
            {
              opacity: fadeAnim,
            },
          ]}
        />
      )}

      <Modal visible={isOpened} animationType="slide" transparent>
        <View style={styles.modalWrapper}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalDim} />
          </TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Typography variant="text1Bold" color="primary" onPress={handleClose}>
                Закрыть
              </Typography>
              <Typography variant="text1Bold" color="primary">
                Выбрать
              </Typography>
            </View>
            <DatePicker date={new Date()} onDateChange={() => null} />
          </View>
        </View>
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
  modalWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  modal: {
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
  },
});
