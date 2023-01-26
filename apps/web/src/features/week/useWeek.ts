import { createCoachUseWeek } from "@routine-support/features";

import { useAppSelector } from "../../app/store";
import { coachWeekAPI } from "../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachWeek: state.coachWeek,
  };
};

export const useWeek = createCoachUseWeek({
  weekApi: coachWeekAPI,
  useStoreState,
});
