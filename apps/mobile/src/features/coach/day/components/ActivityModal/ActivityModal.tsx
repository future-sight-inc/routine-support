import React from "react";

import { Modal } from "apps/mobile/src/components/Modal";
import { Typography } from "apps/mobile/src/components/Typography";

interface ActivityModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ isOpened, onClose }) => {
  return (
    <Modal title="New activity" isOpened={isOpened} onClose={onClose}>
      <Typography>Here will be activity modal</Typography>
    </Modal>
  );
};
