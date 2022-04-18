export enum PictogramPickerLocators {
  OpenButton = "PictogramPickerOpenButton",
  EditButton = "PictogramPickerEditButton",
  ModalContent = "PictogramPickerModalContent",
  SearchField = "PictogramPickerSearchField",
  Pictogram = "PictogramPickerPictogram",
  ActivePictogram = "PictogramPickerActivePictogram",
}

export const createPictogramDataTestId = ({
  name,
  isActive,
}: {
  name: string;
  isActive?: boolean;
}) => {
  return `${
    isActive
      ? PictogramPickerLocators.ActivePictogram
      : PictogramPickerLocators.Pictogram
  }-${name}`;
};
