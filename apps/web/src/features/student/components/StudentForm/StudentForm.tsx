import React from "react";

import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { useTranslation } from 'react-i18next';

import { ErrorText } from "../../../../components/ErrorText";
import { useStudentFormComponent } from "./hooks";
import * as S from "./styled";

export interface StudentFormActions {
  createStudent: (student: Student) => Promise<void>;
  updateStudent: (student: Student) => Promise<void>;
  deleteStudent: (id: Id) => Promise<void>;
  getStudents: () => void;
}

export interface StudentFormProps {
  student: Partial<Student> | null;
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

  const { t } = useTranslation()

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Title>
          {student?._id ? t("Modify student") : t("Add student")}
        </S.Title>
        <TextField
          name="name"
          control={control}
          placeholder={t("Name")}
          fullWidth
          required
        />
        <S.ButtonsWrapper>
          <S.SubmitButton
            type="submit"
            loading={isSubmitting}
            disabled={!isDirty}
          >
            {student?._id ? t("Update") : t("Create")}
          </S.SubmitButton>
          {student?._id && (
            <S.DeleteButton
              color="error"
              onClick={onDelete}
            >
              {t("Delete")}
            </S.DeleteButton>
          )}
        </S.ButtonsWrapper>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Wrapper>
    </form>
  );
};
