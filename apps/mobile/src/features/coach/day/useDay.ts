import { createCoachUseDay } from "@routine-support/features";
import { useAppSelector } from "apps/mobile/src/app/store";
import { coachDayAPI } from "apps/mobile/src/services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
    coachDay: state.coachDay,
  };
};

export const useDay = createCoachUseDay({ dayApi: coachDayAPI, useStoreState });
