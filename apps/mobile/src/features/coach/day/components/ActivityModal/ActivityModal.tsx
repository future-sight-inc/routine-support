import React from "react";

import { DateSelector } from "apps/mobile/src/components/FormFields/DateSelector";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Modal } from "apps/mobile/src/components/Modal";
import { MobileTheme } from "apps/mobile/src/theme";
import { useForm } from "react-hook-form";
import { Dimensions, StyleSheet, View } from "react-native";

interface ActivityModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ isOpened, onClose }) => {
  const { control } = useForm();

  return (
    <Modal title="Новое событие" isOpened={isOpened} onClose={onClose}>
      <TextField
        name="name"
        control={control}
        placeholder="Введите заголовок"
        style={styles.activityNameInput}
      />
      <View style={styles.dateInputsWrapper}>
        <DateSelector
          name="date"
          control={control}
          label="Дата"
          InputProps={{ style: styles.dateInput }}
        />
        <DateSelector
          name="start"
          mode="time"
          control={control}
          label="Начало"
          InputProps={{ style: styles.dateInput }}
        />
        <DateSelector
          name="end"
          mode="time"
          control={control}
          label="Окончание"
          InputProps={{ style: styles.dateInput }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  activityNameInput: {
    borderWidth: 0,
    paddingHorizontal: 0,
    fontSize: MobileTheme.fonts.caption4.size,
    fontWeight: MobileTheme.fonts.caption4.weight,
    marginBottom: 16,
  },
  dateInputsWrapper: {
    flexDirection: "row",
  },
  dateInput: {
    width: Dimensions.get("screen").width / 3 - 16,
    marginRight: 8,
  },
});
