import { createCoachUseActivity } from "@routine-support/domains";
import { coachActivityAPI } from "apps/mobile/src/services/ApiService";

export const useActivity = createCoachUseActivity({ activityApi: coachActivityAPI });
