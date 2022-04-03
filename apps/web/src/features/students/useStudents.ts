import { useState } from "react";

import { studentsActions } from "@routine-support/domains";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { studentAPI } from "../../services/ApiService";

export const useStudents = () => {
  const [loading, setLoading] = useState(true);
  const { students } = useAppSelector((state) => state.students);
  const coachId = useAppSelector((state) => state.coach.coach?._id);
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string | null>(null);

  const getStudents = async () => {
    if (coachId) {
      try {
        setError(null);

        setLoading(true);

        const students = await studentAPI.getStudents(coachId);

        dispatch(studentsActions.setStudents(students));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    models: { students, loading, error },
    operations: { getStudents },
  };
};
