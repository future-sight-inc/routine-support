import { DATE_FORMAT } from "@routine-support/constants";
import { DateString } from "@routine-support/types";
import moment from "moment";

export const parseDate = (date: DateString) => moment(date, DATE_FORMAT);
