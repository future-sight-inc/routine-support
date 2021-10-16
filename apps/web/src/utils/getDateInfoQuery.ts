import { DateInfo } from "features/week/types";

import { serialize } from "./serialize";

export const getDateInfoQuery = (dateInfo: DateInfo): string => {
  const query = serialize(dateInfo);

  return query;
};
