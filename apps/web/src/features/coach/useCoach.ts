import { createCoachUseCoach } from "@routine-support/domains";

import { coachAuthAPI } from "../../services/ApiService";

export const useCoach = createCoachUseCoach({ coachApi: coachAuthAPI });
