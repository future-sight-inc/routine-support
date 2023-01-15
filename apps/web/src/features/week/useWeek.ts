import { createCoachUseWeek } from "@routine-support/domains";

import { useAppSelector } from "../../app/store";
import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useSavedActivityFilter } from "../../hooks/useSavedActivityFilter";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";
import { coachWeekAPI } from "../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
    coachWeek: state.coachWeek,
  };
};

export const useWeek = createCoachUseWeek({
  weekApi: coachWeekAPI,
  useDateInfoQuery,
  useSavedActivityFilter,
  useUpdateCurrentDateInfoQuery,
  useStoreState,
});
