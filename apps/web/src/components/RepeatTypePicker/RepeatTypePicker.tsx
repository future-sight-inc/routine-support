import React from "react";

import { MenuItem, SelectProps } from "@mui/material";
import { RepeatTypeEnum } from "@routine-support/models";

import { Select } from "../Select";

export const RepeatTypePicker: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <Select {...props} defaultValue={RepeatTypeEnum.None}>
      <MenuItem value={RepeatTypeEnum.None}>Никогда</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryDay}>Каждый день</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryWeek}>Каждую неделю</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryMonth}>Каждый месяц</MenuItem>
    </Select>
  );
};
