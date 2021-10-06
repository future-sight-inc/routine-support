import moment from "moment";

export const formatDate = (date: moment.Moment) => {
  return date.locale("ru").format("DD.MM.YYYY");
};
