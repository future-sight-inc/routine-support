import React from "react";

import { ActivityNameInput } from "components/FormFields/ActivityNameInput";
import { DatePicker } from "components/FormFields/DatePicker";
import { PictogramPicker } from "components/FormFields/PictogramPicker";
import { TimePicker } from "components/FormFields/TimePicker";
import { Activity } from "features/activity/types";
import { Id } from "types/main";

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
}) =>
  // {
  // activity,
  // actions,
  // }
  {
    const {
      models: { control, minDate, minStartTime, minEndTime, isDirty },
      operations: { onSubmit, onDelete },
    } = useActivityFormComponent(activity, actions);

    return (
      <form onSubmit={onSubmit}>
        <S.Wrapper>
          <ActivityNameInput
            name="name"
            control={control}
            required
            placeholder="Add name of the activity"
          />
          <DatePicker
            name="date"
            control={control}
            label="Date"
            minDate={minDate}
            required
          />
          <S.Row>
            <TimePicker
              name="start"
              control={control}
              label="From"
              required
              minTime={minStartTime}
            />
            <TimePicker
              name="end"
              control={control}
              label="To"
              required
              minTime={minEndTime}
            />
          </S.Row>
          <PictogramPicker name="pictogram" control={control} required />
          <S.ButtonsWrapper>
            <S.SubmitButton type="submit" loading={loading} disabled={!isDirty}>
              {activity?._id ? "Update" : "Create"}
            </S.SubmitButton>
            {activity?._id && (
              <S.DeleteButton color="error" onClick={onDelete}>
                Delete
              </S.DeleteButton>
            )}
          </S.ButtonsWrapper>
        </S.Wrapper>
      </form>
    );
  };
