import React, { useEffect } from "react";

import { isToday } from "@routine-support/utils";
import { Button } from "apps/mobile/src/components/Button";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";

import { MainLayout } from "../coach/MainLayout";
import { useStudents } from "../students/useStudents";
import { ActivityModal } from "./components/ActivityModal";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";
import { useActivity } from "./useActivity";
import { useDay } from "./useDay";

export const Day: React.FC = () => {
  const {
    models: { students, loading: loadingStudents },
  } = useStudents();
  const {
    models: { day, currentDate, activityFilter, loading: loadingDay },
    operations: { onDateSelect, onActivityFilterSelect, setDefaultActivityFilter },
  } = useDay();
  const {
    models: { isOpened, pictograms, repeatTypeOptions },
    operations: { openNewActivityModal, closeActivityModal },
  } = useActivity();

  useEffect(() => {
    setDefaultActivityFilter({ students });
  }, [students]);

  if (loadingStudents || loadingDay) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout
      title="Calendar"
      footer={
        <Button text="Activity" icon="add" fullWidth onPress={() => openNewActivityModal()} />
      }
    >
      <DayLayout
        daySelect={<DaySelect date={currentDate} onSelect={onDateSelect} />}
        filter={
          <Filter students={students} value={activityFilter} onSelect={onActivityFilterSelect} />
        }
        calendar={
          <Calendar
            isToday={isToday(currentDate)}
            activities={day!.activities}
            students={students}
            timeRange={day!.timeRange}
            onActivityPress={() => null}
            onConfirmationStatusPress={() => null}
          />
        }
      />
      <ActivityModal
        isOpened={isOpened}
        onClose={() => closeActivityModal()}
        pictograms={pictograms}
        repeatTypeOptions={repeatTypeOptions}
      />
    </MainLayout>
  );
};
