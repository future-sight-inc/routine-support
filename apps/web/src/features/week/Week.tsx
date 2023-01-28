import React from "react";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Modal } from "../../components/Modal";
import { ActivityForm } from "../../features/activity/components/ActivityForm";
import { useActivity } from "../activity/useActivity";
import { useCoach } from "../coach/useCoach";
import { AddActivityButton } from "./components/AddActivityButton";
import { MiniCalendar } from "./components/MiniCalendar";
import { WeekCalendar } from "./components/WeekCalendar";
import { WeekLayout } from "./components/WeekLayout";
import { WeekRange } from "./components/WeekRange";
import { useWeek } from "./useWeek";

export const Week: React.FC = () => {
  const { t } = useTranslation();

  const Week = useWeek();
  const Activity = useActivity();
  // const Students = useStudents();
  const Coach = useCoach();

  if (!Coach.models.coach) {
    return null;
  }

  return (
    <ContentWrapper loading={Week.models.loading} error={Week.models.error}>
      <Helmet>
        <title>{t("Calendar")}</title>
      </Helmet>
      <WeekLayout
        miniCalendar={
          <MiniCalendar
            currentDate={Week.models.currentDate}
            actions={{ getWeek: Week.operations.getWeek }}
          />
        }
        weekRange={<WeekRange week={Week.models.week} />}
        calendar={
          Week.models.week && (
            <WeekCalendar
              week={Week.models.week}
              students={[]}
              actions={{
                openActivityModal: Activity.operations.openActivityModal,
                openNewActivityModal: Activity.operations.openNewActivityModal,
              }}
            />
          )
        }
        addActivityButton={
          <AddActivityButton onClick={() => Activity.operations.openNewActivityModal()} />
        }
        activityFilter={
          // !Students.models.loading && (
          //   <ActivityFilter
          //     students={Students.models.students}
          //     actions={{ getWeek: Week.operations.getWeek }}
          //   />
          // )
          null
        }
        activityModal={
          <Modal
            isOpened={Activity.models.isOpened}
            onClose={Activity.operations.closeActivityModal}
          >
            <ActivityForm
              coach={Coach.models.coach}
              activity={Activity.models.activity}
              pictograms={Activity.models.pictograms}
              actions={{
                createActivity: Activity.operations.createActivity,
                updateActivity: Activity.operations.updateActivity,
                deleteActivity: Activity.operations.deleteActivity,
                closeModal: Activity.operations.closeActivityModal,
                updateCalendar: Week.operations.getWeek,
              }}
            />
          </Modal>
        }
      />
    </ContentWrapper>
  );
};
