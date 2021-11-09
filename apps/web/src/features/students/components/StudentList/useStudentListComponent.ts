import { useState } from "react";

import { Id } from "@routine-support/types";
import QRCode from "qrcode";

import { StudentListActions } from "./StudentList";

export const useStudentListComponent = (actions: StudentListActions) => {
  const [qr, setQR] = useState<string | null>(null);
  const [qrLoading, setQrLoading] = useState(false);

  const onStudentDelete = async (id: Id) => {
    if (window.confirm("Confirm your action")) {
      await actions.deleteStudent(id);

      actions.getStudents();
    }
  };

  const onQrOpen = async (id: Id) => {
    try {
      setQrLoading(true);

      const qr = await QRCode.toDataURL(String(id));

      setQR(qr);
    } catch (error) {
      console.error(error);
    } finally {
      setQrLoading(false);
    }
  };

  const onQrClose = () => {
    setQR(null);
  };

  const onStudentClick = actions.openStudentModal;

  return {
    models: { qr, qrLoading },
    operations: { onStudentClick, onStudentDelete, onQrOpen, onQrClose },
  };
};
