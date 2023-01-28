import { DateString } from "@routine-support/types";
import { parse } from "date-fns";
import { DATE_FORMAT } from "./constants";

export const parseDate = (date: DateString) => parse(date, DATE_FORMAT, new Date());
