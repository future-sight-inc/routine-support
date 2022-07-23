import React, { ReactNode, useRef, useState } from "react";

import DatePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import moment, { Moment } from "moment";
import { rgba } from "polished";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";
import { DateSelectorLocators } from "./locators";

interface DateSelectorProps {
  pressElement: ReactNode;
  onSelect: (value: Moment) => void;
  value?: Moment;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  pressElement,
  onSelect,
  value: defaultValue,
}) => {
  const [value, setValue] = useState<Moment>(defaultValue || moment());
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
  };

  const handleChange = (__: DateTimePickerEvent, date?: Date | undefined) => {
    const newValue = moment(date);

    setValue(newValue);
  };

  const handleSelect = () => {
    onSelect(value);
    handleClose();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOpen} testID={DateSelectorLocators.PressElement}>
        {pressElement}
      </TouchableWithoutFeedback>
      {isBackgroundVisible && (
        <Animated.View
          style={[
            styles.background,
            {
              opacity: fadeAnim,
            },
          ]}
          testID={DateSelectorLocators.Background}
        />
      )}
      <Modal
        visible={isOpened}
        animationType="slide"
        transparent
        testID={DateSelectorLocators.Modal}
      >
        <View style={styles.modalContentWrapper}>
          <TouchableWithoutFeedback onPress={handleClose} testID={DateSelectorLocators.ModalDim}>
            <View style={styles.modalDim} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Typography
                variant="text1Bold"
                color="primary"
                onPress={handleClose}
                testID={DateSelectorLocators.CloseText}
              >
                Закрыть
              </Typography>
              <Typography
                variant="text1Bold"
                color="primary"
                onPress={handleSelect}
                testID={DateSelectorLocators.ConfirmText}
              >
                Выбрать
              </Typography>
            </View>
            <DatePicker value={value.toDate()} onChange={handleChange} display="spinner" />
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
  },
});
