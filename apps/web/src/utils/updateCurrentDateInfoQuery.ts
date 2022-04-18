import { DateInfo, getDateInfoQuery } from "@routine-support/domains";

export const updateCurrentDateInfoQuery = (
  dateInfo: DateInfo,
  history: {
    push: (url: string) => void;
  }
) => {
  const dateInfoQuery = getDateInfoQuery(dateInfo);

  history.push("/?" + dateInfoQuery);
};
