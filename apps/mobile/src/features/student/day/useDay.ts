import { createStudentUseDay } from "@routine-support/domains";
import { studentActivityAPI, studentDayAPI } from "apps/mobile/src/services/ApiService";

export const useDay = createStudentUseDay({
  studentDayApi: studentDayAPI,
  studentActivityApi: studentActivityAPI,
});
