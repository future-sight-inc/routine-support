import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoachStudentAPI } from "../api";
import { studentsActions } from "../studentsSlice";

interface Deps {
  studentApi: ReturnType<typeof createCoachStudentAPI>;
}

export const createCoachUseStudents =
  ({ studentApi }: Deps) =>
    () => {
      const [loading, setLoading] = useState(false);
      const { students } = useSelector((state: any) => state.coachStudents);
      const coachId = useSelector((state: any) => state.coachAuth.coach?._id);
      const dispatch = useDispatch();

      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        if (students.length === 0) {
          getStudents();
        }
      }, []);

      const getStudents = async (config?: { silent: boolean }) => {
        if (coachId) {
          try {
            setError(null);

            !config?.silent && setLoading(true);

            const students = await studentApi.getStudents(coachId);

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
