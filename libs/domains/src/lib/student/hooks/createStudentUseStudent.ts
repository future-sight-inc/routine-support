import { SocketUserTypeEnum } from "@routine-support/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { studentDayActions } from "../../day";
import { createStudentAuthAPI } from "../api";
import { studentActions } from "../studentSlice";
import { LoginStudentDto, Student } from "../types";

interface Deps {
  studentApi: ReturnType<typeof createStudentAuthAPI>;
  socketEndpoint: string;
}

export const createStudentUseStudent =
  ({ studentApi, socketEndpoint }: Deps) =>
    () => {
      const dispatch = useDispatch();

      const { student, isLogged, socketConnection } = useSelector((state: any) => state.studentAuth);
      const [loading, setLoading] = useState(false);
      const [isChecked, setIsChecked] = useState(false);

      useEffect(() => {
        if (student && !socketConnection) {
          dispatch(
            studentActions.setSocketConnection(
              io(socketEndpoint, {
                auth: {
                  userId: student._id,
                  userType: SocketUserTypeEnum.Student,
                },
              })
            )
          );
        }
      }, [student, socketConnection]);

      const login = async (data: LoginStudentDto) => {
        try {
          const student = await studentApi.login(data);

          dispatch(studentActions.setStudent(student));
        } catch (error) {
          dispatch(studentActions.setStudent(null));
          console.error(error);

          throw error;
        } finally {
          setIsChecked(true);
        }
      };

      const logout = async () => {
        try {
          setLoading(true);

          await studentApi.logout();
        } catch (error) {
          console.error(error);
        } finally {
          dispatch(studentActions.setStudent(null));
          setIsChecked(true);
          setLoading(false);
          dispatch(studentDayActions.setDay(null));

          socketConnection?.disconnect();
          dispatch(studentActions.setSocketConnection(null));
        }
      };

      const getStudent = async () => {
        try {
          setLoading(true);

          const student = await studentApi.getStudent();

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