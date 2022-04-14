import { useState } from "react";

import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import QRCode from "qrcode";
import { useTranslation } from "react-i18next";

import { StudentListActions } from "./StudentList";

export const useStudentListComponent = (actions: StudentListActions) => {
  const [qr, setQR] = useState<string | null>(null);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [qrLoading, setQrLoading] = useState(false);
  const { t } = useTranslation();

  const onStudentDelete = async (id: Id) => {
    if (window.confirm(t("Confirm student delete"))) {
      await actions.deleteStudent(id);

      actions.getStudents();
    }
  };

  const onQrOpen = async (student: Student) => {
    try {
      setQrLoading(true);

      const qr = await QRCode.toDataURL(JSON.stringify({ id: student._id }));

      setQR(qr);
      setCurrentStudent(student);
    } catch (error) {
      console.error(error);
    } finally {
      setQrLoading(false);
    }
  };

  const onQrClose = () => {
    setQR(null);
    setCurrentStudent(null);
  };

  const onStudentClick = actions.openSettingsModal;

  return {
    models: { qr, qrLoading, currentStudent },
    operations: { onStudentClick, onStudentDelete, onQrOpen, onQrClose },
  };
};
