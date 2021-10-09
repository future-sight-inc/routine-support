import React from "react";

import { ActivityNameInput } from "components/FormFields/ActivityNameInput";
import { DatePicker } from "components/FormFields/DatePicker";
import { PictogramPicker } from "components/FormFields/PictogramPicker";
import { TimePicker } from "components/FormFields/TimePicker";
import { Activity } from "features/activity/types";
import { Button } from "styled/components/Button";

import { useActivityFormComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFormActions {}

export interface ActivityFormModels {
  activity: Partial<Activity> | null;
}

export interface ActivityFormProps {
  models: ActivityFormModels;
  // actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({ models }) =>
  // {
  // activity,
  // actions,
  // }
  {
    const {
      models: {
        control,
        minDate,
        // minStartTime,
        // startDisabled,
        // minEndTime,
        // endDisabled,
      },
      operations: { onSubmit },
    } = useActivityFormComponent(models);

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
              // minTime={minStartTime}
              // disabled={startDisabled}
            />
            <TimePicker
              name="end"
              control={control}
              label="To"
              required
              // minTime={minEndTime}
              // disabled={endDisabled}
            />
          </S.Row>
          <PictogramPicker name="pictogram" control={control} required />
          <Button type="submit">Submit</Button>
        </S.Wrapper>
      </form>
    );
  };
