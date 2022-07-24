import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";

import { MainLayout } from "../coach/MainLayout";
import { useStudents } from "../students/useStudents";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";
import { useDay } from "./useDay";

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

export const Day: React.FC = () => {
  const {
    models: { day, currentDate, filter },
    operations: { onDateSelect, onFilterSelect },
  } = useDay();
  const {
    models: { students },
  } = useStudents();

  if (!day) {
    return <Typography>Loading</Typography>;
  }

  return (
    <MainLayout title="Calendar" footer={<Button text="Activity" icon="add" fullWidth />}>
      <DayLayout
        daySelect={<DaySelect date={currentDate} onSelect={onDateSelect} />}
        filter={<Filter students={students} value={filter} onSelect={onFilterSelect} />}
        calendar={
          <Calendar
            activities={day.activities}
            students={students}
            timeRange={TIME_RANGE}
            onActivityPress={() => null}
            onConfirmationStatusPress={() => null}
          />
        }
      />
    </MainLayout>
  );
};
