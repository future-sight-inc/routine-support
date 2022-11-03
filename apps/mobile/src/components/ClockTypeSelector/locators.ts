export enum ClockTypeSelectorLocators {
  Digital = "ClockTypeSelectorDigital",
  Analog = "ClockTypeSelectorAnalog",
}

export const createActiveTypeTestId = ({
  locator,
  isSelected,
}: {
  locator: ClockTypeSelectorLocators;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${locator}-active`;
  }

  return locator;
};
