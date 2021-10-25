import { ChangeEvent, useState } from "react";

import { Pictogram } from "types/main";

import { PICTOGRAMS } from "./constants";
import { PictogramPickerActions } from "./PictogramPicker";

export const usePictogramPickerComponent = (
  actions: PictogramPickerActions
) => {
  const [opened, setOpened] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [pictograms, setPictograms] = useState<Pictogram[]>(PICTOGRAMS);

  const onSearchStringChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const regexp = new RegExp(`^${value}`);

    setSearchString(value);
    setPictograms(
      PICTOGRAMS.filter(
        (pictogram) =>
          regexp.test(pictogram.en) ||
          regexp.test(pictogram.be) ||
          regexp.test(pictogram.be)
      )
    );
  };

  const onSearchStringClear = () => {
    setSearchString("");
  };

  const onModalOpen = () => {
    setOpened(true);
  };

  const onModalClose = () => {
    setOpened(false);
  };

  const onPictogramClick = (pictogram: string) => {
    actions.onChange(pictogram);
    onModalClose();
  };

  return {
    models: {
      pictograms,
      opened,
      searchString,
    },
    operations: {
      onModalOpen,
      onModalClose,
      onPictogramClick,
      onSearchStringChange,
      onSearchStringClear,
    },
  };
};
