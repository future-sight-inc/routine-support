import React from "react";

import { FormFieldControl } from "@routine-support/forms";
import { Button } from "apps/mobile/src/components/Button";
import { ControlsGroup } from "apps/mobile/src/components/ControlsGroup";
import { ColorSelector } from "apps/mobile/src/components/FormFields/ColorSelector";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Modal } from "apps/mobile/src/components/Modal";
import { StyleSheet, View } from "react-native";

interface StudentModalProps {
  isEdit: boolean;
  isLoading: boolean;
  isOpened: boolean;
  control: FormFieldControl;
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
