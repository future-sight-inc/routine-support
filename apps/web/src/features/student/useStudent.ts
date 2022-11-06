import { createCoachUseStudent } from "@routine-support/domains";

import { coachStudentAPI } from "../../services/ApiService";

export const useStudent = createCoachUseStudent({ studentApi: coachStudentAPI });
