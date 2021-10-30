import React, { useEffect } from "react";
import { Modal } from "../../components/Modal";
import { useActivity } from "../activity/useActivity";
import { ActivityForm } from "./components/ActivityForm";
import { AddActivityButton } from "./components/AddActivityButton";
import { WeekCalendar } from "./components/WeekCalendar";
import { WeekLayout } from "./components/WeekLayout";
import { WeekRange } from "./components/WeekRange";
import { WeekSelect } from "./components/WeekSelect";
import { useWeek } from "./useWeek";

export const Week: React.FC = () => {
  const Week = useWeek();
  const Activity = useActivity();

  useEffect(() => {
    Week.operations.getWeek();
  }, []);

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
            activity={Activity.models.activity}
            loading={Activity.models.loading}
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
