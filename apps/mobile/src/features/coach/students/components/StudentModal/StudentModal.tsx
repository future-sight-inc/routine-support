import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { ControlsGroup } from "apps/mobile/src/components/ControlsGroup";
import { ColorSelector } from "apps/mobile/src/components/FormFields/ColorSelector";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Modal } from "apps/mobile/src/components/Modal";
import { Control } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface StudentModalProps {
  isEdit;
  isLoading: boolean;
  isOpened: boolean;
  control: Control;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
}

export const StudentModal: React.FC<StudentModalProps> = ({
  isEdit,
  isLoading,
  isOpened,
  control,
  onClose,
  onSubmit,
  onDelete,
}) => {
  return (
    <Modal
      title={isEdit ? "Редактирование" : "Новое событие"}
      isOpened={isOpened}
      onClose={onClose}
      footer={
        <ControlsGroup>
          {isEdit && (
            <Button text="Delete" variant="secondary" disabled={isLoading} onPress={onDelete} />
          )}
          <Button text={isEdit ? "Edit" : "Create"} loading={isLoading} onPress={onSubmit} />
        </ControlsGroup>
      }
      scrollable
    >
      <View style={styles.fieldWrapper}>
        <TextField label="Имя" name="name" control={control} placeholder="Введите имя" required />
      </View>
      <View style={styles.fieldWrapper}>
        <ColorSelector label="Цвет" name="color" control={control} required />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fieldWrapper: {
    marginBottom: 16,
  },
});
