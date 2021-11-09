import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { ListItemText } from "@mui/material";
import { ListItemButton } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { Student } from "@routine-support/models";
import { Id } from "@routine-support/types";
import { Modal } from "apps/web/src/components/Modal";

import * as S from "./styled";
import { useStudentListComponent } from "./useStudentListComponent";

export interface StudentListActions {
  openStudentModal: (student: Student) => void;
  deleteStudent: (id: Id) => void;
  getStudents: () => void;
}

interface StudentListProps {
  students: Student[];
  actions: StudentListActions;
}

export const StudentList: React.FC<StudentListProps> = ({
  students,
  actions,
}) => {
  const {
    models: { qr },
    operations: { onStudentClick, onStudentDelete, onQrOpen, onQrClose },
  } = useStudentListComponent(actions);

  return (
    <S.List>
      {students.map((student) => (
        <ListItem divider>
          <ListItemButton onClick={() => onStudentClick(student)}>
            <ListItemText primary={student.name} />
            <div>
              <IconButton onClick={() => onQrOpen(student._id)}>
                <QrCodeIcon />
              </IconButton>
              <IconButton onClick={() => onStudentDelete(student._id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItemButton>
        </ListItem>
      ))}
      <Modal opened={Boolean(qr)} onClose={onQrClose}>
        <S.Qr src={qr!} />
        <S.QrTitle>
          Отсканируйте в приложении
          <br />
          Routine Support, чтобы войти
        </S.QrTitle>
      </Modal>
      {!students.length && (
        <S.EmptyInfo>Пока нет ни одного студента</S.EmptyInfo>
      )}
    </S.List>
  );
};
