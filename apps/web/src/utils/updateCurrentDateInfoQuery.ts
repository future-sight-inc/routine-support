import { DateInfo, getDateInfoQuery } from "@routine-support/domains";

export const updateCurrentDateInfoQuery = (
  dateInfo: DateInfo,
  // ! Нет типа
  // eslint-disable-next-line
  history: any
) => {
  const dateInfoQuery = getDateInfoQuery(dateInfo);

  history.push("/?" + dateInfoQuery);
};
