import { useEffect, useState } from "react";

import { studentsActions } from "@routine-support/domains";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { coachStudentAPI } from "../../services/ApiService";

export const useStudents = () => {
  const [loading, setLoading] = useState(true);
  const { students } = useAppSelector((state) => state.students);
  const coachId = useAppSelector((state) => state.coach.coach?._id);
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async (config?: { silent: boolean }) => {
    if (coachId) {
      try {
        setError(null);

        !config?.silent && setLoading(true);

        const students = await coachStudentAPI.getStudents(coachId);

        dispatch(studentsActions.setStudents(students));
      } catch (error: any) {
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
