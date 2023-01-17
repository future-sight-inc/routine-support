import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CoachState } from "../../coach";
import { createCoachStudentAPI } from "../api";
import { studentsActions, StudentsState } from "../studentsSlice";

interface State {
  coachStudents: StudentsState;
  coachAuth: CoachState;
}

interface Deps {
  studentApi: ReturnType<typeof createCoachStudentAPI>;
  useStoreState: () => State;
}

const useStudents = ({ studentApi, useStoreState }: Deps) => {
  const [loading, setLoading] = useState(false);
  const {
    coachStudents: { students },
    coachAuth: { coach },
  } = useStoreState();
  const coachId = coach?._id;
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStudents();
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

export const createCoachUseStudents = (deps: Deps) => () => useStudents(deps);
