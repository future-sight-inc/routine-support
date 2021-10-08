import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { PictogramPicker } from "components/PictogramPicker";
import { Controller } from "react-hook-form";

import { useActivityFormComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFormActions {}

export interface ActivityFormProps {
  // activity: Activity | null;
  // actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = () =>
  // {
  // activity,
  // actions,
  // }
  {
    const {
      models: { control },
      operations: {},
    } = useActivityFormComponent();

    return (
      <form>
        <S.Wrapper>
          {/* <input type="text" {...register("title")} />
          <input type="text" {...register("pictogram")} />
          <input type="text" {...register("date")} />
          <input type="text" {...register("time")} /> */}

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <S.NameInput
                  {...field}
                  placeholder="Add name of the activity"
                />
              )}
            />
            <Controller
              name="datetime"
              control={control}
              render={({ field }) => (
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  {...field}
                />
              )}
            />

            <PictogramPicker />

            {/* <Controller
              name="datetime"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value={10}>
                    <img
                      src="https://www.sclera.be/resources/pictos/bloemschikken.png"
                      width="128px"
                      height="128px"
                    />
                  </MenuItem>
                </Select>
              )}
            /> */}
          </LocalizationProvider>
        </S.Wrapper>
      </form>
    );
  };
