import { OptionValue } from "../Select";

export enum MenuLocators {
  Overlay = "MenuOverlay",
  MenuWrapper = "MenuWrapper",
  Option = "MenuOption",
  SelectedOption = "MenuSelectedOption",
  EmptyText = "MenuEmptyText",
}

export const createOptionDataTestId = (value: OptionValue) => {
  return `${MenuLocators.Option}-${value}`;
};
