import { useState } from "react";

import {
  StudentLoginDto,
  studentAPI,
  studentActions,
} from "@routine-support/models";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const useStudent = () => {
  const dispatch = useAppDispatch();

  const { student, isLogged } = useAppSelector((state) => state.student);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const login = async (data: StudentLoginDto) => {
    try {
      setLoading(true);

      const student = await studentAPI.login(data);

      dispatch(studentActions.setStudent(student));
    } catch (error) {
      dispatch(studentActions.setStudent(null));
      console.log(error)
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
    }
  };

  const getStudent = async () => {
    try {
      setLoading(true);

      const student = await studentAPI.getStudent();

      console.log(student);

      dispatch(studentActions.setStudent(student));
    } catch {
      dispatch(studentActions.setStudent(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  return {
    models: {
      student,
      isLogged,
      isChecked,
      loading,
    },
    operations: {
      login,
      logout,
      getStudent,
    },
  };
};
