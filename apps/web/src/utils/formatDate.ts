import { DATE_FORMAT } from "constants/DateFormat";

import moment from "moment";

export const formatDate = (date: moment.Moment) => {
  return date.locale("ru").format(DATE_FORMAT);
};
