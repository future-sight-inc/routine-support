import React from "react";

import {
  Activity,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Badge } from "apps/web/src/components/Badge";
import { StudentBadge } from "apps/web/src/components/StudentBadge";
import { useTranslation } from "react-i18next";

import * as S from "./styled";

interface NotificationProps {
  activity: Activity;
  students: Student[];
  isViewed: boolean;
  onDelete: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  activity,
  students,
  isViewed,
  onDelete,
}) => {
  const { t } = useTranslation();

  const { pendingStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

  if (pendingStudents.length === 0) {
    return null;
  }

  return (
    <S.Wrapper>
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
