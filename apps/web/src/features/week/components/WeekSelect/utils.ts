import moment, { Moment } from "moment";

export const addWeekToMoment = (date: Moment) => {
  if (date.get("W") === date.weeksInYear()) {
    const newDate = moment()
      .set("year", date.get("year") + 1)
      .set("W", 1);

    return newDate;
  }

  return date.clone().set("W", date.get("W") + 1);
};

export const removeWeekFromMoment = (date: Moment) => {
  if (date.get("W") === 1) {
    const newDate = moment().set("year", date.get("year") - 1);

    return newDate;
  }

  return date.clone().set("W", date.get("W") - 1);
};
