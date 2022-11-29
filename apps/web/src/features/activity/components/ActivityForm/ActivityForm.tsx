import React from "react";

import { Activity, Coach, WeekNumber, YearNumber } from "@routine-support/domains";
import { useActivityForm } from "@routine-support/forms";
import { Id, Pictogram } from "@routine-support/types";
import { CommonFlagPicker } from "apps/web/src/components/FormFields/CommonFlagPicker";
import { StudentsPicker } from "apps/web/src/components/FormFields/StudentsPicker";
import { useTranslation } from "react-i18next";

import { ErrorText } from "../../../../components/ErrorText";
import { ActivityNameInput } from "../../../../components/FormFields/ActivityNameInput";
import { DatePicker } from "../../../../components/FormFields/DatePicker";
import { PictogramPicker } from "../../../../components/FormFields/PictogramPicker";
import { RepeatTypePicker } from "../../../../components/FormFields/RepeatTypePicker";
import { TimePicker } from "../../../../components/FormFields/TimePicker";
import * as S from "./styled";

export interface ActivityFormActions {
  createActivity: (activity: Activity) => Promise<void>;
  updateActivity: (activity: Activity) => Promise<void>;
  deleteActivity: (id: Id) => Promise<void>;
  closeModal: () => void;
  updateCalendar: (data: {
    params?: { year: YearNumber; week: WeekNumber };
    config?: { silent: boolean };
  }) => void;
}

interface ActivityFormProps {
  coach: Coach;
  activity: Partial<Activity> | undefined;
  pictograms: Pictogram[];
  actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  coach,
  activity,
  pictograms,
  actions,
}) => {
  const {
    models: { control, isDirty, isSubmitting, submitError, isStudentsSelectorVisible },
    operations: { onSubmit, onDelete },
  } = useActivityForm(coach, activity, actions);

  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit}>
      <S.Wrapper>
        <ActivityNameInput
          name="name"
          control={control}
          required
          placeholder={t("Activity name")}
        />
        <S.DateWrapper>
          <DatePicker name="date" control={control} label={t("Activity date")} required />
          <TimePicker name="start" control={control} label={t("Activity start time")} required />
          <TimePicker name="end" control={control} label={t("Activity end time")} required />
        </S.DateWrapper>
        <PictogramPicker
          name="pictogram"
          control={control}
          label={t("Pictogram")}
          pictograms={pictograms}
          required
        />
        <CommonFlagPicker label={t("Activity type")} control={control} name="isCommon" />
        {isStudentsSelectorVisible && (
          <StudentsPicker name="students" label={t("Students")} required control={control} />
        )}
        <S.RepeatWrapper>
          <RepeatTypePicker control={control} name="repeatType" label={t("Repeat type")} />
        </S.RepeatWrapper>
        <S.ButtonsWrapper>
          <S.SubmitButton type="submit" isLoading={isSubmitting} disabled={!isDirty}>
            {activity?._id ? t("Update") : t("Create")}
          </S.SubmitButton>
          <S.SecondaryButton type="button" onClick={activity?._id ? onDelete : actions.closeModal}>
            {activity?._id ? t("Delete") : t("Cancel")}
          </S.SecondaryButton>
        </S.ButtonsWrapper>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Wrapper>
    </form>
  );
};
