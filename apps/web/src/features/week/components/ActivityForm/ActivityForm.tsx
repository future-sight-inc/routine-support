import { Activity } from "@routine-support/models";
import { Id } from "@routine-support/types";
import { ActivityNameInput } from "apps/web/src/components/FormFields/ActivityNameInput";
import { DatePicker } from "apps/web/src/components/FormFields/DatePicker";
import { TimePicker } from "apps/web/src/components/FormFields/TimePicker";
import { PictogramPicker } from "apps/web/src/components/FormFields/PictogramPicker";
import React from "react";

import { useActivityFormComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFormActions {
  createActivity: (activity: Activity) => Promise<void>;
  updateActivity: (activity: Activity) => Promise<void>;
  deleteActivity: (id: Id) => Promise<void>;
  getWeek: () => void;
}

export interface ActivityFormProps {
  activity: Partial<Activity> | null;
  loading: boolean;
  actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  activity,
  loading,
  actions,
}) => {
  const {
    models: { control, minDate, minStartTime, minEndTime, isDirty },
    operations: { handleSubmit, onDelete },
  } = useActivityFormComponent(activity, actions);

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
        <S.ButtonsWrapper>
          <S.SubmitButton
            type="submit"
            loading={loading}
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
      </S.Wrapper>
    </form>
  );
};
