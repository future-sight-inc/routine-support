import { createCoachUseActivity } from "@routine-support/domains";

import { coachActivityAPI } from "../../services/ApiService";

export const useActivity = createCoachUseActivity({ activityApi: coachActivityAPI });
