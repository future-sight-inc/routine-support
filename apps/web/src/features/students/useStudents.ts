import { createCoachUseStudents } from "@routine-support/domains";

import { useAppSelector } from "../../app/store";
import { coachStudentAPI } from "../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
    coachStudents: state.coachStudents,
  };
};

export const useStudents = createCoachUseStudents({ studentApi: coachStudentAPI, useStoreState });
