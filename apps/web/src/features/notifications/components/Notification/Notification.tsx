import React, { createRef, useEffect } from "react";

import { Activity, getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { StudentBadge } from "apps/web/src/components/StudentBadge";
import { useTranslation } from "react-i18next";

import useOnScreen from "./hooks";
import { createStudentBadgeDataTestId, NotificationLocatorsEnum } from "./locators";
import * as S from "./styled";

interface NotificationProps {
  activity: Activity;
  students: Student[];
  isViewed: boolean;
  onDelete: () => void;
  onView: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  activity,
  students,
  isViewed,
  onDelete,
  onView,
}) => {
  console.log(activity)

  const containerRef = createRef<HTMLDivElement>();
  const isVisible = useOnScreen(containerRef);

  const { t } = useTranslation();

  useEffect(() => {
    if (!isViewed && isVisible) {
      setTimeout(() => onView(), 1000);
    }
  }, [isVisible]);

  const { pendingStudents } = getActivityStatusesFromStudents(activity, students);

  if (pendingStudents.length === 0) {
    return null;
  }

  return (
    <S.Wrapper ref={containerRef} data-testid={NotificationLocatorsEnum.Wrapper}>
      <S.Row>
        {!isViewed && <S.NotViewedBadge data-testid={NotificationLocatorsEnum.NotViewedBadge} />}
        <S.NotificationType>{t("Activity was missed")}</S.NotificationType>
      </S.Row>
      <S.ActivityInfo>
        <S.Image
          src={activity.pictogram}
          data-testid={NotificationLocatorsEnum.ActivityPictogram}
        />
        <S.InfoWrapper>
          <S.Title>
            <S.Name data-testid={NotificationLocatorsEnum.ActivityName}>{activity.name}</S.Name>
            <S.DeleteButton onClick={onDelete}>
              <S.DeleteIcon />
            </S.DeleteButton>
          </S.Title>
          <S.Time data-testid={NotificationLocatorsEnum.ActivityTime}>
            {stringifyTime(activity.start)} - {stringifyTime(activity.end)}
          </S.Time>
          <S.StudentsWrapper>
            <S.StudentsList>
              {pendingStudents.map((student, index) => (
                <StudentBadge
                  student={student}
                  key={index}
                  dataTestId={createStudentBadgeDataTestId(student)}
                />
              ))}
            </S.StudentsList>
          </S.StudentsWrapper>
        </S.InfoWrapper>
      </S.ActivityInfo>
    </S.Wrapper>
  );
};
