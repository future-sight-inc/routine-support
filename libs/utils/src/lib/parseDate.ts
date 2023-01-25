import { DateString } from "@routine-support/types";
import moment from "moment";
import { DATE_FORMAT } from "./constants";

export const parseDate = (date: DateString) => moment(date, DATE_FORMAT);
