export enum MiniCalendarLocators {
  CurrentMonth = "CurrentMonth",
  PreviousMonthButton = "PreviousMonthButton",
  NextMonthButton = "NextMonthButton",
  Week = "Week",
  ActiveWeek = "ActiveWeek",
  Day = "Day",
  TodayButton = "TodayButton",
}

export const createWeekDataTestId = (week: number, year: number) => {
  return `${MiniCalendarLocators.Week}-${week}-${year}`;
};

export const createActiveWeekDataTestId = (week: number, year: number) => {
  return `${MiniCalendarLocators.ActiveWeek}-${week}-${year}`;
};
