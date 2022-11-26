import { DateInfo, getDateInfoQuery } from "@routine-support/domains";

export const updateCurrentDateInfoQuery = (dateInfo: DateInfo, navigate: any) => {
  const dateInfoQuery = getDateInfoQuery(dateInfo);

  navigate("/?" + dateInfoQuery);
};
