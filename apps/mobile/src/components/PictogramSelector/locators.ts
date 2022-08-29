export enum PictogramSelectorLocators {
  ValueWrapper = "PictogramSelectorValueWrapper",
  NoValueText = "PictogramSelectorNoValueText",
  Image = "PictogramSelectorImage",
  PreviewWrapper = "PictogramSelectorPreviewWrapper",
  List = "PictogramSelectorList",
  NoImageOption = "PictogramSelectorNoImageOption",
  NoImageOptionSelected = "PictogramSelectorNoImageOptionSelected",
  Pictogram = "PictogramSelectorPictogram",
  SelectedPictogram = "PictogramSelectorSelectedPictogram",
  ConfirmButton = "PictogramSelectorConfirmButton",
}

export const createPictogramTestId = ({
  value,
  isSelected,
}: {
  value?: string;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${PictogramSelectorLocators.SelectedPictogram}-${value}`;
  }

  return `${PictogramSelectorLocators.Pictogram}-${value}`;
};
