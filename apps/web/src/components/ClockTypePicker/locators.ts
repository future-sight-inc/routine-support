export enum ClockTypePickerLocators {
  Digital = "ClockTypePickerColor",
  Analog = "ClockTypePickerActiveColor",
}

export const createClockTypeDataTestId = ({
  locator,
  isActive,
}: {
  locator: ClockTypePickerLocators;
  isActive?: boolean;
}) => {
  return `${locator}${isActive ? "-active" : ""}`;
};
