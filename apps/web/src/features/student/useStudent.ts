import { createCoachUseStudent } from "@routine-support/features";

import { useAppSelector } from "../../app/store";
import { coachStudentAPI } from "../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
  };
};

export const useStudent = createCoachUseStudent({ studentApi: coachStudentAPI, useStoreState });
