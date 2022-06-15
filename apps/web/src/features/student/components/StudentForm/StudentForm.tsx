import React from "react";

import { Student } from "@routine-support/domains";
import { ColorPicker } from "apps/web/src/components/FormFields/ColorPicker";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { useTranslation } from "react-i18next";

import { ErrorText } from "../../../../components/ErrorText";
import { useStudentFormComponent } from "./hooks";
import * as S from "./styled";

export interface StudentFormActions {
  createStudent: (student: Student) => Promise<void>;
  updateStudent: (student: Student) => Promise<void>;
  deleteStudent: (student: Student) => Promise<void>;
  closeModal: () => void;
  getStudents: (config?: { silent: boolean }) => void;
}

export interface StudentFormProps {
  student: Partial<Student> | undefined;
  actions: StudentFormActions;
}

export const StudentForm: React.FC<StudentFormProps> = ({
  student,
  actions,
}) => {
  const {
    models: { control, isDirty, isSubmitting, submitError },
    operations: { handleSubmit, onDelete },
  } = useStudentFormComponent(student, actions);

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Title>
          {student?._id ? t("Modify student") : t("Add student")}
        </S.Title>
        <TextField name="name" control={control} label={t("Name")} required />
        <ColorPicker
          name="color"
          control={control}
          label={t("Activity card color")}
          required
        />
        <S.ButtonsWrapper>
          <S.SubmitButton
            type="submit"
            isLoading={isSubmitting}
            disabled={!isDirty}
          >
            {student?._id ? t("Update") : t("Create")}
          </S.SubmitButton>

          <S.SecondaryButton
            onClick={student?._id ? onDelete : actions.closeModal}
          >
            {student?._id ? t("Delete") : t("Cancel")}
          </S.SecondaryButton>
        </S.ButtonsWrapper>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Wrapper>
    </form>
  );
};
