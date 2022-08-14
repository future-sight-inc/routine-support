import React, { useEffect } from "react";

import { isToday } from "@routine-support/utils";
import { Button } from "apps/mobile/src/components/Button";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";

import { MainLayout } from "../coach/MainLayout";
import { useCoach } from "../coach/useCoach";
import { useStudents } from "../students/useStudents";
import { ActivityModal } from "./components/ActivityModal";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";
import { useActivity } from "./useActivity";
import { useActivityForm } from "./useActivityForm";
import { useDay } from "./useDay";

export const Day: React.FC = () => {
  const { coach } = useCoach();
  const {
    models: { students, loading: loadingStudents },
  } = useStudents();
  const {
    models: { day, currentDate, activityFilter, loading: loadingDay },
    operations: { onDateSelect, onActivityFilterSelect, setDefaultActivityFilter, getDay },
  } = useDay();
  const {
    models: { isOpened, activity },
    operations: {
      createActivity,
      updateActivity,
      deleteActivity,
      openNewActivityModal,
      closeActivityModal,
    },
  } = useActivity();
  const {
    models: { pictograms, repeatTypeOptions },
    // operations: {},
  } = useActivityForm(coach, activity, {
    createActivity,
    updateActivity,
    deleteActivity,
    getDay,
  });

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
