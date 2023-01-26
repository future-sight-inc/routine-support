import { createCoachUseStudents } from "@routine-support/features";
import { useAppSelector } from "apps/mobile/src/app/store";
import { coachStudentAPI } from "apps/mobile/src/services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
    coachStudents: state.coachStudents,
  };
};

export const useStudents = createCoachUseStudents({ studentApi: coachStudentAPI, useStoreState });
