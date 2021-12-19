import { useState } from "react";

import { Student, studentActions, studentAPI } from "@routine-support/domains";
import { Id } from "@routine-support/types";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ActivityFilterService } from "../../services/ActivityFilterService";

export const useStudent = () => {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const { student } = useAppSelector((state) => state.student);
  const coachId = useAppSelector((state) => state.user.user?._id);
  const dispatch = useAppDispatch();

  const setStudent = (student?: Partial<Student>) => {
    dispatch(studentActions.setStudent(student || null));
  };

  const createStudent = async (student: { name: string }) => {
    if (coachId) {
      try {
        setLoading(true);

        const response = await studentAPI.createStudent({
          ...student,
          coachId,
        });

        ActivityFilterService.addStudent(response.data._id);

        setOpened(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateStudent = async (student: Student) => {
    try {
      setLoading(true);

      await studentAPI.updateStudent(student);

      setOpened(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id: Id) => {
    try {
      setLoading(true);

      await studentAPI.deleteStudent(id);

      ActivityFilterService.removeStudent(id);

      setOpened(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openStudentModal = (student: Student) => {
    setStudent(student);
    setOpened(true);
  };

  const openNewStudentModal = () => {
    setStudent();
    setOpened(true);
  };

  const closeStudentModal = () => {
    setStudent();
    setOpened(false);
  };

  return {
    models: {
      student,
      opened,
      loading,
    },
    operations: {
      setStudent,
      createStudent,
      updateStudent,
      deleteStudent,
      openStudentModal,
      openNewStudentModal,
      closeStudentModal,
    },
  };
};
