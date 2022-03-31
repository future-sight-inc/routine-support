import { DateInfo } from "@routine-support/domains";
import { serialize } from "@routine-support/utils";

export const getDateInfoQuery = (dateInfo: DateInfo): string => {
  const query = serialize(dateInfo);

  return query;
};
