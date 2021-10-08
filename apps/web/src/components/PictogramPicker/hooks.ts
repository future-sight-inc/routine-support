import { useState } from "react";

export const usePictogramPickerComponent = () => {
  const [opened, setOpened] = useState(false);
  const [selectedPictogram, setSelectedPictogram] = useState<string | null>(
    null
  );

  const onModalOpen = () => {
    setOpened(true);
  };

  const onModalClose = () => {
    setOpened(false);
  };

  const onPictogramClick = (pictogram: string) => {
    setSelectedPictogram(pictogram);
    onModalClose();
  };

  return {
    models: { opened, selectedPictogram },
    operations: {
      onModalOpen,
      onModalClose,
      onPictogramClick,
    },
  };
};
