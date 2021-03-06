import { ChangeEvent, useState } from "react";

import { Pictogram } from "@routine-support/types";

import { PictogramPickerActions } from "./PictogramPicker";
import pictogramsInfo from "./pictograms_info.json";

export const usePictogramPickerComponent = (
  value: string | undefined,
  actions: PictogramPickerActions
) => {
  const [opened, setOpened] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [pictograms, setPictograms] = useState<Pictogram[]>(
    pictogramsInfo.pictograms
  );
  const [selectedPictogram, setSelectedPictogram] = useState<
  string | undefined
  >(value);

  const onSearchStringChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const regexp = new RegExp(`^${value}`);

    setSearchString(value);
    setPictograms(
      pictogramsInfo.pictograms.filter(
        (pictogram: Pictogram) =>
          regexp.test(pictogram.en) ||
          regexp.test(pictogram.nl) ||
          regexp.test(pictogram.ru)
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
