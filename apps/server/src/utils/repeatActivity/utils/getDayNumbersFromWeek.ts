export const getDayNumbersFromWeek = (
  daysOfWeek: moment.Moment[]
): number[] => {
  return daysOfWeek.map((day) => day.date());
};
