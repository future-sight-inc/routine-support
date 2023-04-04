import { ActivityFilterQuery, Day, getDaysOfWeek, Week } from "@routine-support/domains";
import { setISOWeek, setYear } from "date-fns";
import { filterActivities } from "../utils/filterActivities";
import { getActivitiesOfWeek } from "../utils/getActivitiesOfWeek";
import { getDaysOfCalendarWeek } from "../utils/getDaysOfCalendarWeek";
import { getTimeRange } from "../utils/getTimeRange";
import { ActivityController } from "./ActivityController";

export const ScheduleController = {
  getWeekSchedule: async ({
    year,
    week,
    filter,
    coachId,
  }: {
    year: number;
    week: number;
    filter: ActivityFilterQuery;
    coachId: string;
  }): Promise<Week> => {
    const activitiesOfTheWeek = await getActivitiesOfWeek({
      currentDate: setISOWeek(setYear(new Date(), year), week),
      coachId: coachId,
    });

    const filteredActivities = filterActivities(activitiesOfTheWeek, filter);

    return {
      days: getDaysOfCalendarWeek(filteredActivities, { week, year }),
      weekInfo: {
        year,
        week,
        days: getDaysOfWeek({ week, year }),
        timeRange: getTimeRange(),
      },
    };
  },
  getCoachDaySchedule: async ({
    date,
    filter,
    coachId,
  }: {
    date: Date;
    filter: ActivityFilterQuery;
    coachId: string;
  }): Promise<Day> => {
    const activities = await ActivityController.getActivities({ date, coachId });
    const filteredActivities = filterActivities(activities, filter);

    return {
      date,
      activities: filteredActivities,
      timeRange: getTimeRange(),
    };
  },
  getStudentDaySchedule: async ({
    date,
    studentId,
  }: {
    date: Date;
    studentId: string;
  }): Promise<Day> => {
    const activities = await ActivityController.getStudentActivities(studentId, date);

    return {
      date,
      activities,
      timeRange: getTimeRange(),
    };
  },
};
