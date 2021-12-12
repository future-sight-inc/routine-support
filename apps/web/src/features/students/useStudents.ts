import { useState } from "react";

import { studentAPI, studentsActions } from "@routine-support/models";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const useStudents = () => {
  // * Необходимо состояние без скачков при рендере с false на true
  const [loading, setLoading] = useState(true);
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

  return {
    models: { students, loading },
    operations: { getStudents },
  };
};
