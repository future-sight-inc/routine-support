import { Option } from "./Select";

export enum SelectLocators {
  Input = "SelectInput",
  Option = "SelectOption",
  ActiveOption = "SelectActiveOption",
}

export const createOptionTestId = ({
  option,
  isSelected,
}: {
  option: Option;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${SelectLocators.ActiveOption}-${option.value}`;
  } else {
    return `${SelectLocators.Option}-${option.value}`;
  }
};
