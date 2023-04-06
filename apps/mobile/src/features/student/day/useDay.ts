import { createStudentUseDay } from "@routine-support/features";
import { useAppSelector } from "apps/mobile/src/app/store";
import { studentActivityAPI, studentDayAPI } from "apps/mobile/src/services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    studentDay: state.studentDay,
  };
};

export const useDay = createStudentUseDay({
  studentDayApi: studentDayAPI,
  studentActivityApi: studentActivityAPI,
  useStoreState,
});
