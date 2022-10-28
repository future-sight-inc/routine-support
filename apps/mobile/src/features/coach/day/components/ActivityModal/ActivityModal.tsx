import React from "react";

import { Student } from "@routine-support/domains";
import { Option, Pictogram } from "@routine-support/types";
import { Button } from "apps/mobile/src/components/Button";
import { ControlsGroup } from "apps/mobile/src/components/ControlsGroup";
import { ActivityTypeSelector } from "apps/mobile/src/components/FormFields/ActivityTypeSelector";
import { DateSelector } from "apps/mobile/src/components/FormFields/DateSelector";
import { PictogramSelector } from "apps/mobile/src/components/FormFields/PictogramSelector";
import { Select } from "apps/mobile/src/components/FormFields/Select";
import { StudentsSelector } from "apps/mobile/src/components/FormFields/StudentsSelector";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Modal } from "apps/mobile/src/components/Modal";
import { MobileTheme } from "apps/mobile/src/theme";
import { Control } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface ActivityModalProps {
  isEdit;
  isLoading: boolean;
  isOpened: boolean;
  pictograms: Pictogram[];
  repeatTypeOptions: Option[];
  isStudentsSelectorVisible: boolean;
  students: Student[];
  control: Control;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  isEdit,
  isLoading,
  isOpened,
  pictograms,
  repeatTypeOptions,
  control,
  isStudentsSelectorVisible,
  students,
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
      <TextField
        name="name"
        control={control}
        placeholder="Введите заголовок"
        required
        style={styles.activityNameInput}
      />
      <ControlsGroup style={styles.dateInputsWrapper}>
        <DateSelector name="date" control={control} label="Дата" required />
        <DateSelector name="start" mode="time" control={control} label="Начало" required />
        <DateSelector name="end" mode="time" control={control} label="Окончание" required />
      </ControlsGroup>
      <View style={styles.fieldWrapper}>
        <PictogramSelector
          name="pictogram"
          control={control}
          label="Изображение"
          required
          pictograms={pictograms}
        />
      </View>
      <View style={styles.fieldWrapper}>
        <ActivityTypeSelector name="isCommon" label="Тип события" control={control} />
      </View>
      {isStudentsSelectorVisible && (
        <View style={styles.fieldWrapper}>
          <StudentsSelector
            name="students"
            label="Студенты"
            control={control}
            students={students}
            required
          />
        </View>
      )}
      <View style={styles.fieldWrapper}>
        <Select
          name="repeatType"
          options={repeatTypeOptions}
          control={control}
          label="Повторять"
          required
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
    marginBottom: 16,
  },
  fieldWrapper: {
    marginBottom: 16,
  },
});
