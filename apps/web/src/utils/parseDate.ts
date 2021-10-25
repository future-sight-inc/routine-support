import { DATE_FORMAT } from "constants/DateFormat";

import moment from "moment";
import { DateString } from "types/main";

export const parseDate = (date: DateString) => moment(date, DATE_FORMAT);
