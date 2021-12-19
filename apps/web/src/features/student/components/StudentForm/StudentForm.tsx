import React from "react";

import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { TextField } from "apps/web/src/components/FormFields/TextField";

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
    models: { control, isDirty, isSubmitting },
    operations: { handleSubmit, onDelete },
  } = useStudentFormComponent(student, actions);

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Title>
          {student?._id ? "Редактирование студента" : "Создание студента"}
        </S.Title>
        <TextField
          name="name"
          control={control}
          placeholder="Имя"
          fullWidth
          required
        />
        <S.ButtonsWrapper>
          <S.SubmitButton
            type="submit"
            loading={isSubmitting}
            disabled={!isDirty} // ! Добавить локализацию
          >
            {student?._id ? "Обновить" : "Создать"}
          </S.SubmitButton>
          {student?._id && (
            <S.DeleteButton
              color="error"
              onClick={onDelete}
              // ! Добавить локализацию
            >
              Удалить
            </S.DeleteButton>
          )}
        </S.ButtonsWrapper>
      </S.Wrapper>
    </form>
  );
};
