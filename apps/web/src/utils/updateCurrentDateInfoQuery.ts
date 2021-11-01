import { DateInfo, getDateInfoQuery } from "@routine-support/models";

export const updateCurrentDateInfoQuery = (
  dateInfo: DateInfo,
  // ! Нет типа
  history: any
) => {
  const dateInfoQuery = getDateInfoQuery(dateInfo);

  history.push("/?" + dateInfoQuery);
};
