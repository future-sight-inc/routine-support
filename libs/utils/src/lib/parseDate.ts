import { parse } from "date-fns";
import { DATE_FORMAT } from "./constants";

export const parseDate = (date: string) => parse(date, DATE_FORMAT, new Date());
