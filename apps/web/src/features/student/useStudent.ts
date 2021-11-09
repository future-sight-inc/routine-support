import { useState } from "react";

import { Student, studentActions, studentAPI } from "@routine-support/models";
import { Id } from "@routine-support/types";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

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

        await studentAPI.createStudent({ ...student, coachId });

        setOpened(false);

        toast.success("Student added!");
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

      toast.success("Student updated!");
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

      setOpened(false);

      toast.success("Student deleted!");
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
