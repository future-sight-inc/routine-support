export const parseWeekFilter = (filter = ""): string[] => {
  return filter?.split(",");
};
