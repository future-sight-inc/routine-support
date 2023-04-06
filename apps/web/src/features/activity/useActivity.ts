import { createCoachUseActivity } from "@routine-support/features";

import { coachActivityAPI } from "../../services/ApiService";

export const useActivity = createCoachUseActivity({ activityApi: coachActivityAPI });
