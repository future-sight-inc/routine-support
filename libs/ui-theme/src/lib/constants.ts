import { ColorEnum } from "@routine-support/domains";
import { Theme } from "./theme";

export const COLORS = [
  { value: ColorEnum.Purple, color: Theme.palette.common.purple },
  { value: ColorEnum.Pink, color: Theme.palette.common.pink },
  { value: ColorEnum.Red, color: Theme.palette.common.red },
  { value: ColorEnum.Mint, color: Theme.palette.common.mint },
  { value: ColorEnum.Orange, color: Theme.palette.common.orange },
  { value: ColorEnum.Brown, color: Theme.palette.common.brown },
  { value: ColorEnum.DarkGreen, color: Theme.palette.common.darkGreen },
];

export const COMMON_ACTIVITY_COLOR = Theme.palette.common.blue;
export const GROUP_ACTIVITY_COLOR = Theme.palette.common.green;
export const IMPORTANT_ACTIVITY_COLOR = Theme.palette.common.yellow;
