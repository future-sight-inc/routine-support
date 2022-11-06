import { createStudentUseStudent } from "@routine-support/domains";
import { getEnvVars } from "apps/mobile/environment";
import { studentAuthAPI } from "apps/mobile/src/services/ApiService";

export const useStudent = createStudentUseStudent({
  socketEndpoint: getEnvVars().socketEndpoint,
  studentApi: studentAuthAPI,
});
