import { createCoachUseStudents } from "@routine-support/domains";
import { coachStudentAPI } from "apps/mobile/src/services/ApiService";

export const useStudents = createCoachUseStudents({ studentApi: coachStudentAPI });
