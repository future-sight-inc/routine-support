import { ChangeEvent, useState } from "react";

import { ImageUrl } from "types/main";

import { PictogramPickerActions } from "./PictogramPicker";

export const usePictogramPickerComponent = (
  actions: PictogramPickerActions
) => {
  const [opened, setOpened] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [pictograms, setPictograms] = useState<ImageUrl[]>([
    "https://www.sclera.be/resources/pictos/bloemschikken.png",
    "https://www.sclera.be/resources/pictos/barbeque.png",
    "https://www.sclera.be/resources/pictos/zee.png",
    "https://www.sclera.be/resources/pictos/fietsen.png",
  ]);

  const onSearchStringChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchString(evt.target.value);
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
