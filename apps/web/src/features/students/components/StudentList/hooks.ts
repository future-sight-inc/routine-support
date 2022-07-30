import { useState } from "react";

import { Student } from "@routine-support/domains";
import { useConfirm } from "apps/web/src/services/ConfirmationService";
import QRCode from "qrcode";
import { useTranslation } from "react-i18next";

import { StudentListActions } from "./StudentList";

export const useStudentListComponent = (actions: StudentListActions) => {
  const [qr, setQR] = useState<string | null>(null);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [qrLoading, setQrLoading] = useState(false);
  const { t } = useTranslation();
  const { confirm } = useConfirm();

  const onStudentDelete = async (student: Student) => {
    confirm({
      title: t("Confirm your action"),
      description: t("Are you sure you want to delete this student?"),
      onConfirm: async () => {
        await actions.deleteStudent(student);

        actions.getStudents({ silent: true });
      },
    });
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

  return {
    models: { qr, qrLoading, currentStudent },
    operations: { onStudentDelete, onQrOpen, onQrClose },
  };
};
