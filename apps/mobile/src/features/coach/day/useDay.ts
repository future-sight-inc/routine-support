import { createCoachUseDay } from "@routine-support/domains";
import { coachDayAPI } from "apps/mobile/src/services/ApiService";

export const useDay = createCoachUseDay({ dayApi: coachDayAPI });
