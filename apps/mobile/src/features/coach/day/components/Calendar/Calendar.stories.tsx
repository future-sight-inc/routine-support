import {
  addStudentToActivity,
  createMockActivityFromTimePeriod,
  createMockStudent,
} from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Calendar } from "./Calendar";

const TIME_RANGE = [
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

storiesOf("Coach/Day", module).add("Calendar", () => {
  const activity1 = createMockActivityFromTimePeriod({ start: "12:00", end: "13:00" });
  const activity2 = createMockActivityFromTimePeriod({ start: "12:00", end: "13:40" });
  const activity3 = createMockActivityFromTimePeriod({ start: "13:40", end: "16:40" });
  const student = createMockStudent();

  addStudentToActivity(activity1, student);

  return (
    <Calendar
      activities={[activity1, activity2, activity3]}
      students={[student]}
      timeRange={TIME_RANGE}
      onActivityPress={() => null}
      onConfirmationStatusPress={() => null}
    />
  );
});
