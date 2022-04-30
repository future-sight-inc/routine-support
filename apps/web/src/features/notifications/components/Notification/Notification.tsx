import React, { createRef, useEffect } from "react";

import {
  Activity,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Badge } from "apps/web/src/components/Badge";
import { StudentBadge } from "apps/web/src/components/StudentBadge";
import { useTranslation } from "react-i18next";

import useOnScreen from "./hooks";
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
  const containerRef = createRef<HTMLDivElement>();
  const isVisible = useOnScreen(containerRef);

  const { t } = useTranslation();

  useEffect(() => {
    if (!isViewed && isVisible) {
      setTimeout(() => onView(), 2000);
    }
  }, [isVisible]);

  const { pendingStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

  if (pendingStudents.length === 0) {
    return null;
  }

  return (
    <S.Wrapper ref={containerRef}>
      <S.Image src="https://www.sclera.be/resources/pictos/biljart%20t.png" />
      <S.InfoWrapper>
        <S.Row>
          <S.Title>{t("Activity was missed")}</S.Title>
          {!isViewed && <Badge>{t("New")}</Badge>}
        </S.Row>
        <S.Row>
          <S.Name>{activity.name}</S.Name>
          <S.Time>
            {stringifyTime(activity.start)} - {stringifyTime(activity.end)}
          </S.Time>
        </S.Row>
        <S.StudentsWrapper>
          <S.Caption>{t("These students were late")}:</S.Caption>
          <S.StudentsList>
            {pendingStudents.map((student, index) => (
              <StudentBadge student={student} key={index} />
            ))}
          </S.StudentsList>
        </S.StudentsWrapper>
      </S.InfoWrapper>
      <S.DeleteButton onClick={onDelete}>{t("Delete")}</S.DeleteButton>
    </S.Wrapper>
  );
};
