import { useState } from "react";

import {
  studentAPI,
  StudentDto,
  studentsActions,
} from "@routine-support/models";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const useStudents = () => {
  const [loading, setLoading] = useState(false);
  const { students } = useAppSelector((state) => state.students);
  const coachId = useAppSelector((state) => state.user.user?._id);
  const dispatch = useAppDispatch();

  const getStudents = async () => {
    if (coachId) {
      try {
        setLoading(true);

        const students = await studentAPI.getStudents(coachId);

        dispatch(studentsActions.setStudents(students));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const createStudent = async (data: StudentDto) => {
    try {
      setLoading(true);

      await studentAPI.createStudent(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStudent = async (data: StudentDto) => {
    try {
      setLoading(true);

      await studentAPI.updateStudent(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    models: { students, loading },
    operations: { getStudents, createStudent, updateStudent },
  };
};
