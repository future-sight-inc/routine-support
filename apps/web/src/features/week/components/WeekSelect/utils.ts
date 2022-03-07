import { Moment } from "moment";

// todo add tests
export const addWeekToMoment = (date: Moment) => {
  return date.clone().add(1, "weeks");
};

// todo add tests
// ! Если от 1 недели 2022 отнять одну неделю, то сделает 52 неделю 2022
export const subtractWeekFromMoment = (date: Moment) => {
  return date.clone().subtract(1, "weeks");
};
