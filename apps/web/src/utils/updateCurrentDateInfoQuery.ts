import { DateInfo } from "features/week/types";

import { getDateInfoQuery } from "./getDateInfoQuery";

export const updateCurrentDateInfoQuery = (
  dateInfo: DateInfo,
  // ! Нет типа
  history: any
) => {
  const dateInfoQuery = getDateInfoQuery(dateInfo);

  history.push("/?" + dateInfoQuery);
};
