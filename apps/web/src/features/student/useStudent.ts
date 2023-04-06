import { createCoachUseStudent } from "@routine-support/features";

import { coachStudentAPI } from "../../services/ApiService";

export const useStudent = createCoachUseStudent({ studentApi: coachStudentAPI });
