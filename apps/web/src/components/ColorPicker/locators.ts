export enum ColorPickerLocators {
  Color = "ColorPickerColor",
  ActiveColor = "ColorPickerActiveColor",
}

export const createColorDataTestId = (value: number) => {
  return `${ColorPickerLocators.Color}-${value}`;
};

export const createActiveColorDataTestId = (value: number) => {
  return `${ColorPickerLocators.ActiveColor}-${value}`;
};
