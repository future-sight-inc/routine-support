import { ChangeEvent, useState } from "react";

import { Pictogram } from "@routine-support/types";

import { PictogramPickerActions } from "./PictogramPicker";

export const usePictogramPickerComponent = (
  value: string | undefined,
  pictograms: Pictogram[],
  actions: PictogramPickerActions
) => {
  const [opened, setOpened] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [filteredPictograms, setFilteredPictograms] = useState<Pictogram[]>(pictograms);
  const [selectedPictogram, setSelectedPictogram] = useState<string | undefined>(value);

  const onSearchStringChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const regexp = new RegExp(`^${value}`);

    setSearchString(value);
    setFilteredPictograms(
      pictograms.filter(
        (pictogram: Pictogram) =>
          regexp.test(pictogram.en) || regexp.test(pictogram.nl) || regexp.test(pictogram.ru)
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
    setSelectedPictogram(pictogram);
    actions.onChange(pictogram);
    onModalClose();
  };

  return {
    models: {
      selectedPictogram,
      filteredPictograms,
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
