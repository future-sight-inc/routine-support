import { createCoachUseWeek } from "@routine-support/domains";

import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useSavedActivityFilter } from "../../hooks/useSavedActivityFilter";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";
import { coachWeekAPI } from "../../services/ApiService";

export const useWeek = createCoachUseWeek({
  weekApi: coachWeekAPI,
  useDateInfoQuery,
  useSavedActivityFilter,
  useUpdateCurrentDateInfoQuery,
});
