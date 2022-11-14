import { createCoachUseStudents } from "@routine-support/domains";

import { coachStudentAPI } from "../../services/ApiService";

export const useStudents = createCoachUseStudents({ studentApi: coachStudentAPI });
