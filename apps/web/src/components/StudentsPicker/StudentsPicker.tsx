import React, { ChangeEvent, createRef, useEffect, useState } from "react";

import { getStudentsByIds, Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import { Menu } from "../Menu";
import {
  createDeleteIconDataTestId,
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

export const StudentsPicker: React.FC<StudentPickerProps> = ({ value, students, onChange }) => {
  const { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);
  const [filter, setFilter] = useState<string>("");

  const [selectedStudents, setSelectedStudents] = useState<Id[]>(value || []);

  const studentsToChoose = filterStudents({
    students,
    selectedStudents,
    filter,
  });

  const inputRef = createRef<HTMLInputElement>();

  const handleOpen = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    if (isOpened && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpened, inputRef]);

  const handleClose = () => {
    setIsOpened(false);
    setFilter("");
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSelect = (studentId: Id) => {
    const selectedStudent = students.find((student) => student._id === studentId);

    if (selectedStudent) {
      selectedStudents.push(selectedStudent._id);
      setSelectedStudents(selectedStudents);
      onChange(selectedStudents);
    }

    handleClose();
  };

  const handleDeleteStudent = (studentToDelete: Student) => {
    const updatedStudents = selectedStudents.filter((student) => student !== studentToDelete._id);

    setSelectedStudents(updatedStudents);
    onChange(updatedStudents);
  };

  return (
    <Menu
      options={studentsToChoose.map((student) => ({
        text: student.name,
        value: student._id,
      }))}
      isOpened={isOpened}
      onSelect={(option) => handleSelect(option.value as string)}
      onClose={handleClose}
    >
      <S.Wrapper>
        <S.FieldWrapper
          isActive={isOpened}
          onClick={handleOpen}
          data-testid={StudentsPickerLocators.FieldWrapper}
        >
          {selectedStudents.length > 0 && (
            <S.StudentsWrapper>
              {getStudentsByIds(students, selectedStudents).map((student, index) => (
                <S.StudentWrapper key={index} data-testid={createStudentDataTestId(student)}>
                  <S.StudentName>{student.name}</S.StudentName>
                  <S.DeleteStudentIcon
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteStudent(student);
                    }}
                    data-testid={createDeleteIconDataTestId(student)}
                  />
                </S.StudentWrapper>
              ))}
            </S.StudentsWrapper>
          )}
          {isOpened ? (
            <S.SearchField
              placeholder={t("Pick a student")}
              value={filter}
              onChange={handleFilterChange}
              ref={inputRef}
              data-testid={StudentsPickerLocators.SearchField}
            />
          ) : (
            <S.OpenText onClick={handleOpen} data-testid={StudentsPickerLocators.OpenText}>
              + {t("Add student")}
            </S.OpenText>
          )}
        </S.FieldWrapper>
      </S.Wrapper>
    </Menu>
  );
};
