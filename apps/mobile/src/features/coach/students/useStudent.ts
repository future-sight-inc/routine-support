import { createCoachUseStudent } from "@routine-support/domains";
import { useAppSelector } from "apps/mobile/src/app/store";
import { coachStudentAPI } from "apps/mobile/src/services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
  };
};

export const useStudent = createCoachUseStudent({ studentApi: coachStudentAPI, useStoreState });
