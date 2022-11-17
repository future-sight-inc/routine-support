import { createContext, ReactNode, useState } from "react";

import { ConfirmationModal } from "../../components/ConfirmationModal";

interface ConfirmationModalData {
  title: string;
  description?: string;
  onConfirm: () => void;
  confirmButtonText?: string;
}

export const ConfirmationContext = createContext<{
  confirm: (data: ConfirmationModalData) => void;
    }>({ confirm: () => null });

interface ConfirmationProviderProps {
  children: ReactNode;
}

export const ConfirmationProvider: React.FC<ConfirmationProviderProps> = ({ children }) => {
  const [isOpened, setOpened] = useState(false);
  const [modalData, setModalData] = useState<ConfirmationModalData>({
    title: "",
    onConfirm: () => null,
  });

  const confirm = (data) => {
    setModalData(data);
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleConfirm = () => {
    modalData.onConfirm();
    setOpened(false);
  };

  return (
    <ConfirmationContext.Provider value={{ confirm }}>
      <ConfirmationModal
        isOpened={isOpened}
        title={modalData.title}
        description={modalData.description}
        confirmButtonText={modalData.confirmButtonText}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
      {children}
    </ConfirmationContext.Provider>
  );
};
