import React, { useEffect } from "react";

import { useActivityForm } from "@routine-support/forms";
import { isToday } from "@routine-support/utils";
import { Button } from "apps/mobile/src/components/Button";

import { MainLayout } from "../coach/MainLayout";
import { useCoach } from "../coach/useCoach";
import { useStudents } from "../students/useStudents";
import { ActivityModal } from "./components/ActivityModal";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";
import { useActivity } from "./useActivity";
import { useDay } from "./useDay";

export const Day: React.FC = () => {
  const Coach = useCoach();
  const Students = useStudents();
  const Day = useDay();
  const Activity = useActivity();

  const ActivityForm = useActivityForm(Coach.models.coach, Activity.models.activity, {
    createActivity: Activity.operations.createActivity,
    updateActivity: Activity.operations.updateActivity,
    deleteActivity: Activity.operations.deleteActivity,
    updateCalendar: Day.operations.getDay,
  });

  useEffect(() => {
    Day.operations.setDefaultActivityFilter({ students: Students.models.students });
  }, [Students.models.students]);

  return (
    <MainLayout
      title="Calendar"
      footer={
        <Button
          text="Activity"
          icon="add"
          onPress={() => Activity.operations.openNewActivityModal()}
        />
      }
    >
      <DayLayout
        daySelect={
          <DaySelect date={Day.models.currentDate} onSelect={Day.operations.onDateSelect} />
        }
        filter={
          <Filter
            students={Students.models.students}
            value={Day.models.activityFilter}
            onSelect={Day.operations.onActivityFilterSelect}
          />
        }
        calendar={
          <Calendar
            loading={Students.models.loading || Day.models.loading}
            isToday={isToday(Day.models.currentDate)}
            activities={Day.models.day?.activities}
            students={Students.models.students}
            timeRange={Day.models.day?.timeRange}
            onActivityPress={Activity.operations.openActivityModal}
            onCellPress={Activity.operations.openNewActivityModal}
          />
        }
      />
      <ActivityModal
        isEdit={Activity.models.activity?._id}
        isLoading={Activity.models.isLoading}
        isOpened={Activity.models.isOpened}
        pictograms={ActivityForm.models.pictograms}
        repeatTypeOptions={ActivityForm.models.repeatTypeOptions}
        students={Students.models.students}
        control={ActivityForm.models.control}
        isStudentsSelectorVisible={ActivityForm.models.isStudentsSelectorVisible}
        onClose={Activity.operations.closeActivityModal}
        onSubmit={ActivityForm.operations.onSubmit}
        onDelete={ActivityForm.operations.onDelete}
      />
    </MainLayout>
  );
};
