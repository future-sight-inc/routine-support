import { DATE_FORMAT } from "constants/DateFormat";

import moment from "moment";

export const formatDate = (date: moment.Moment) => {
  // ! Передавать локаль
  return date.locale("ru").format(DATE_FORMAT);
};
