import React, { useEffect } from "react";

import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";

import { MainLayout } from "../coach/MainLayout";
import { useStudents } from "../students/useStudents";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";
import { useDay } from "./useDay";

export const Day: React.FC = () => {
  const {
    models: { students },
  } = useStudents();
  const {
    models: { day, currentDate, activityFilter },
    operations: { onDateSelect, onActivityFilterSelect, setDefaultActivityFilter },
  } = useDay();

  useEffect(() => {
    setDefaultActivityFilter({ students });
  }, [students]);

  if (!day) {
    return <Typography>Loading</Typography>;
  }

  return (
    <MainLayout title="Calendar" footer={<Button text="Activity" icon="add" fullWidth />}>
      <DayLayout
        daySelect={<DaySelect date={currentDate} onSelect={onDateSelect} />}
        filter={
          <Filter students={students} value={activityFilter} onSelect={onActivityFilterSelect} />
        }
        calendar={
          <Calendar
            activities={day.activities}
            students={students}
            timeRange={day.timeRange}
            onActivityPress={() => null}
            onConfirmationStatusPress={() => null}
          />
        }
      />
    </MainLayout>
  );
};
