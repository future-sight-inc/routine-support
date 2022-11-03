import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { ControlsGroup } from "apps/mobile/src/components/ControlsGroup";
import { ClockTypeSelector } from "apps/mobile/src/components/FormFields/ClockTypeSelector";
import { LanguageSelector } from "apps/mobile/src/components/FormFields/LanguageSelector";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Modal } from "apps/mobile/src/components/Modal";
import { Control } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface StudentSettingsModalProps {
  isLoading: boolean;
  isOpened: boolean;
  control: Control;
  onClose: () => void;
  onSubmit: () => void;
}

export const StudentSettingsModal: React.FC<StudentSettingsModalProps> = ({
  isLoading,
  isOpened,
  control,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal
      title="Настройки"
      isOpened={isOpened}
      onClose={onClose}
      footer={
        <ControlsGroup>
          <Button text="Edit" loading={isLoading} onPress={onSubmit} />
        </ControlsGroup>
      }
      scrollable
    >
      <View style={styles.fieldWrapper}>
        <LanguageSelector label="Язык" name="language" control={control} required />
      </View>
      <View style={styles.fieldWrapper}>
        <ClockTypeSelector label="Тип часов" name="clockType" control={control} />
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          label="Пин-код"
          name="pinCode"
          control={control}
          required
          maxLength={4}
          keyboardType="decimal-pad"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fieldWrapper: {
    marginBottom: 16,
  },
});
