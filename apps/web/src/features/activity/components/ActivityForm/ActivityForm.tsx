import React from "react";

import {
  Activity,
  User,
  WeekNumber,
  YearNumber,
} from "@routine-support/domains";
import { Id } from "@routine-support/types";

import { ErrorText } from "../../../../components/ErrorText";
import { ActivityNameInput } from "../../../../components/FormFields/ActivityNameInput";
import { DatePicker } from "../../../../components/FormFields/DatePicker";
import { PictogramPicker } from "../../../../components/FormFields/PictogramPicker";
import { RepeatTypePicker } from "../../../../components/FormFields/RepeatTypePicker";
import { TimePicker } from "../../../../components/FormFields/TimePicker";
import { StudentsPicker } from "../../../students/components/StudentsPicker";
import { useActivityFormComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFormActions {
  createActivity: (activity: Activity) => Promise<void>;
  updateActivity: (activity: Activity) => Promise<void>;
  deleteActivity: (id: Id) => Promise<void>;
  getWeek: (data: {
    params?: { year: YearNumber; week: WeekNumber };
    config?: { silent: boolean };
  }) => void;
}

export interface ActivityFormProps {
  user: User;
  activity: Partial<Activity> | null;
  actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  user,
  activity,
  actions,
}) => {
  const {
    models: {
      control,
      minDate,
      minStartTime,
      minEndTime,
      isDirty,
      isSubmitting,
      submitError,
    },
    operations: { handleSubmit, onDelete },
  } = useActivityFormComponent(user, activity, actions);

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <ActivityNameInput
          name="name"
          control={control}
          required
          // ! Добавить локализацию
          placeholder="Название события"
        />
        <DatePicker
          name="date"
          control={control}
          // ! Добавить локализацию
          label="Дата"
          minDate={minDate}
          required
        />
        <S.Row>
          <TimePicker
            name="start"
            control={control}
            // ! Добавить локализацию
            label="Начало"
            required
            minTime={minStartTime}
          />
          <TimePicker
            name="end"
            control={control}
            // ! Добавить локализацию
            label="Окончание"
            required
            minTime={minEndTime}
          />
        </S.Row>
        <PictogramPicker name="pictogram" control={control} required />

        <RepeatTypePicker control={control} name="repeat" label="Повторять" />

        <StudentsPicker name="students" control={control} />

        <S.ButtonsWrapper>
          <S.SubmitButton
            type="submit"
            loading={isSubmitting}
            disabled={!isDirty} // ! Добавить локализацию
          >
            {activity?._id ? "Обновить" : "Создать"}
          </S.SubmitButton>
          {activity?._id && (
            <S.DeleteButton
              color="error"
              onClick={onDelete}
              // ! Добавить локализацию
            >
              Удалить
            </S.DeleteButton>
          )}
        </S.ButtonsWrapper>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Wrapper>
    </form>
  );
};
