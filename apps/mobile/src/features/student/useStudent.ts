import { useEffect, useState } from "react";

import {
  LoginStudentDto,
  Student,
  studentActions,
} from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { useTranslation } from "react-i18next";
import { io } from "socket.io-client";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { studentAPI } from "../../services/ApiService";

export const useStudent = () => {
  const dispatch = useAppDispatch();

  const { student, isLogged, socketConnection } = useAppSelector(
    (state) => state.student
  );
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (student && !socketConnection) {
      dispatch(
        studentActions.setSocketConnection(
          // todo Использовать переменную окружения
          io("http://192.168.2.7:4000", {
            auth: {
              userId: student._id,
              userType: SocketUserTypeEnum.Student,
            },
          })
        )
      );
    }
  }, [student, socketConnection]);

  useEffect(() => {
    if (student) {
      i18n.changeLanguage(student.language);
    }
  }, [student]);

  const login = async (data: LoginStudentDto) => {
    try {
      setLoading(true);

      const student = await studentAPI.login(data);

      dispatch(studentActions.setStudent(student));
    } catch (error) {
      dispatch(studentActions.setStudent(null));
      console.error(error);

      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await studentAPI.logout();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(studentActions.setStudent(null));
      setIsChecked(true);
      setLoading(false);

      socketConnection?.disconnect();
      dispatch(studentActions.setSocketConnection(null));
    }
  };

  const getStudent = async () => {
    try {
      setLoading(true);

      const student = await studentAPI.getStudent();

      dispatch(studentActions.setStudent(student));
    } catch {
      dispatch(studentActions.setStudent(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const updateStudentSettings = (settings: Partial<Student>) => {
    dispatch(studentActions.updateStudentSettings(settings));
  };

  return {
    models: {
      student,
      isLogged,
      isChecked,
      loading,
      socketConnection,
    },
    operations: {
      login,
      logout,
      getStudent,
      updateStudentSettings,
    },
  };
};
