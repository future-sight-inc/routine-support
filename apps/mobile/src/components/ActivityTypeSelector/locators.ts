export enum ActivityTypeSelectorLocators {
  Common = "ActivityTypeSelectorCommon",
  Individual = "ActivityTypeSelectorIndividual",
}

export const createActiveTypeTestId = ({
  locator,
  isSelected,
}: {
  locator: ActivityTypeSelectorLocators;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${locator}-active`;
  }

  return locator;
};
