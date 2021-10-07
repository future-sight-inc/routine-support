import React from "react";

import { Modal } from "components/Modal";
import { ActivityForm } from "features/activity/components/ActivityForm";
import { AddActivityButton } from "features/activity/components/AddActivityButton";
import { useActivity } from "features/activity/hooks/useActivity";

import { WeekCalendar } from "./components/WeekCalendar";
import { WeekLayout } from "./components/WeekLayout";
import { WeekRange } from "./components/WeekRange";
import { WeekSelect } from "./components/WeekSelect";
import { useWeek } from "./hooks/useWeek";

export const Week: React.FC = () => {
  const Week = useWeek();
  const Activity = useActivity();

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
        <AddActivityButton onClick={Activity.operations.openNewActivityModal} />
      }
      activityModal={
        <Modal
          opened={Activity.models.opened}
          onClose={Activity.operations.closeActivityModal}
        >
          <ActivityForm />
        </Modal>
      }
    />
  );
};
