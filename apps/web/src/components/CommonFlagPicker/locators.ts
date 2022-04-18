export enum CommonFlagPickerLocators {
  Common = "CommonFlagPickerCommon",
  Individual = "CommonFlagPickerIndividual",
}

export const createActiveButtonDataTestId = (
  locator: CommonFlagPickerLocators
) => {
  return `${locator}-active`;
};
