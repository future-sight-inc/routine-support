import { Week } from "features/week/types";
import { TimeString } from "types/main";

// Вынести в отдельный запрос
export const getTimeRange = (week: Week): TimeString[] => {
  return Object.keys([
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
};
