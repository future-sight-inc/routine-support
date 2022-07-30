import React from "react";

import { Activity, Coach, WeekNumber, YearNumber } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { CommonFlagPicker } from "apps/web/src/components/FormFields/CommonFlagPicker";
import { ImportantFlagPicker } from "apps/web/src/components/FormFields/ImportantFlagPicker";
import { StudentsPicker } from "apps/web/src/components/FormFields/StudentsPicker";
import { useTranslation } from "react-i18next";

import { ErrorText } from "../../../../components/ErrorText";
import { ActivityNameInput } from "../../../../components/FormFields/ActivityNameInput";
import { DatePicker } from "../../../../components/FormFields/DatePicker";
import { PictogramPicker } from "../../../../components/FormFields/PictogramPicker";
import { RepeatTypePicker } from "../../../../components/FormFields/RepeatTypePicker";
import { TimePicker } from "../../../../components/FormFields/TimePicker";
import { useActivityFormComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFormActions {
  createActivity: (activity: Activity) => Promise<void>;
  updateActivity: (activity: Activity) => Promise<void>;
  deleteActivity: (id: Id) => Promise<void>;
  closeModal: () => void;
  getWeek: (data: {
    params?: { year: YearNumber; week: WeekNumber };
    config?: { silent: boolean };
  }) => void;
}

export interface ActivityFormProps {
  coach: Coach;
  activity: Partial<Activity> | undefined;
  actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({ coach, activity, actions }) => {
  const {
    models: {
      control,
      isDirty,
      isSubmitting,
      submitError,
      shouldShowStudents,
      isRepeatTypeAvailable,
    },
    operations: { handleSubmit, onDelete },
  } = useActivityFormComponent(coach, activity, actions);

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
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
        <PictogramPicker name="pictogram" control={control} label={t("Pictogram")} required />
        <CommonFlagPicker label={t("Activity type")} control={control} name="isCommon" />
        {shouldShowStudents && (
          <StudentsPicker name="students" label={t("Students")} required control={control} />
        )}
        <S.RepeatWrapper>
          <RepeatTypePicker
            control={control}
            name="repeatType"
            label={t("Repeat type")}
            disabled={!isRepeatTypeAvailable}
          />
        </S.RepeatWrapper>
        <ImportantFlagPicker control={control} name="isImportant" />
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
