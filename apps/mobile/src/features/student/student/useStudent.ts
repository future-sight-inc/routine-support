import { createStudentUseStudent } from "@routine-support/features";
import { useAppSelector } from "apps/mobile/src/app/store";
import { studentAuthAPI } from "apps/mobile/src/services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    studentAuth: state.studentAuth,
  };
};

export const useStudent = createStudentUseStudent({
  studentApi: studentAuthAPI,
  useStoreState,
});
