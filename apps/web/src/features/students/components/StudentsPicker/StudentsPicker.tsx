import React, { ChangeEvent, useState } from "react";

import { getStudentsByIds, Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import {
  createDeleteIconDataTestId,
  createOptionDataTestId,
  createStudentDataTestId,
  StudentsPickerLocators,
} from "./locators";
import * as S from "./styled";
import { filterStudents } from "./utils";

interface StudentPickerProps {
  value?: Id[];
  students: Student[];
  onChange: (students: Id[]) => void;
}

export const StudentsPicker: React.FC<StudentPickerProps> = ({
  value,
  students,
  onChange,
}) => {
  const { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);
  const [filter, setFilter] = useState<string>("");

  const [selectedStudents, setSelectedStudents] = useState<Id[]>(value || []);

  const studentsToChoose = filterStudents({
    students,
    selectedStudents,
    filter,
  });

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
    setFilter("");
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSelect = (student: Student) => {
    selectedStudents.push(student._id);
    setSelectedStudents(selectedStudents);
    onChange(selectedStudents);
    handleClose();
  };

  const handleDeleteStudent = (studentToDelete: Student) => {
    const updatedStudents = selectedStudents.filter(
      (student) => student !== studentToDelete._id
    );

    setSelectedStudents(updatedStudents);
    onChange(updatedStudents);
  };

  return (
    <>
      {isOpened && (
        <S.Overlay
          onClick={handleClose}
          data-testid={StudentsPickerLocators.Overlay}
        />
      )}
      <S.Wrapper>
        <S.FieldWrapper
          isActive={isOpened}
          onClick={handleOpen}
          data-testid={StudentsPickerLocators.FieldWrapper}
        >
          {selectedStudents.length > 0 && (
            <S.StudentsWrapper>
              {getStudentsByIds(students, selectedStudents).map(
                (student, index) => (
                  <S.StudentWrapper
                    key={index}
                    data-testid={createStudentDataTestId(student)}
                  >
                    <S.StudentName>{student.name}</S.StudentName>
                    <S.DeleteStudentIcon
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteStudent(student);
                      }}
                      data-testid={createDeleteIconDataTestId(student)}
                    />
                  </S.StudentWrapper>
                )
              )}
            </S.StudentsWrapper>
          )}
          {isOpened ? (
            <S.SearchField
              placeholder={t("Pick a student")}
              value={filter}
              onChange={handleFilterChange}
              data-testid={StudentsPickerLocators.SearchField}
            />
          ) : (
            <S.OpenText
              onClick={handleOpen}
              data-testid={StudentsPickerLocators.OpenText}
            >
              + {t("Add student")}
            </S.OpenText>
          )}
        </S.FieldWrapper>
        {isOpened && (
          <S.Menu data-testid={StudentsPickerLocators.Menu}>
            {studentsToChoose.length > 0 ? (
              studentsToChoose.map((student, index) => (
                <S.Option
                  key={index}
                  onClick={() => handleSelect(student)}
                  data-testid={createOptionDataTestId(student)}
                >
                  {student.name}
                </S.Option>
              ))
            ) : (
              <S.EmptyText data-testid={StudentsPickerLocators.EmptyText}>
                {t("No students to pick")}
              </S.EmptyText>
            )}
          </S.Menu>
        )}
      </S.Wrapper>
    </>
  );
};
