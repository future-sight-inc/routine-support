import React, { useEffect } from "react";

import { Modal } from "../../components/Modal";
import { ActivityForm } from "../../features/activity/components/ActivityForm";
import { useActivity } from "../activity/useActivity";
import { useStudents } from "../students/useStudents";
import { useUser } from "../user/useUser";
import { AddActivityButton } from "./components/AddActivityButton";
import { WeekCalendar } from "./components/WeekCalendar";
import { WeekLayout } from "./components/WeekLayout";
import { WeekRange } from "./components/WeekRange";
import { WeekSelect } from "./components/WeekSelect";
import { useWeek } from "./useWeek";

export const Week: React.FC = () => {
  const Week = useWeek();
  const Activity = useActivity();
  const Students = useStudents();
  const User = useUser();

  useEffect(() => {
    if (User.models.user) {
      Week.operations.getWeek();
      Students.operations.getStudents();
    }
  }, [User.models.user]);

  if (!User.models.user) {
    return null;
  }

  return (
    <WeekLayout
      loading={Week.models.loading}
      weekSelect={
        <WeekSelect
          loading={Week.models.loading}
          actions={{ getWeek: Week.operations.getWeek }}
        />
      }
      weekRange={<WeekRange week={Week.models.week} />}
      calendar={
        Week.models.week && (
          <WeekCalendar
            week={Week.models.week}
            students={Students.models.students}
            actions={{
              openActivityModal: Activity.operations.openActivityModal,
              openNewActivityModal: Activity.operations.openNewActivityModal,
            }}
          />
        )
      }
      addActivityButton={
        <AddActivityButton
          onClick={() => Activity.operations.openNewActivityModal()}
        />
      }
      activityModal={
        <Modal
          opened={Activity.models.opened}
          onClose={Activity.operations.closeActivityModal}
        >
          <ActivityForm
            user={User.models.user}
            activity={Activity.models.activity}
            actions={{
              createActivity: Activity.operations.createActivity,
              updateActivity: Activity.operations.updateActivity,
              deleteActivity: Activity.operations.deleteActivity,
              getWeek: Week.operations.getWeek,
            }}
          />
        </Modal>
      }
    />
  );
};
