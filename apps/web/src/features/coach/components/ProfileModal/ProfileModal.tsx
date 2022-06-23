import React from "react";

import { Modal } from "apps/web/src/components/Modal";
import { Button } from "apps/web/src/styled/components/Button";

import { ProfileModalLocators } from "./locators";

interface ProfileModalActions {
  deleteCoach: () => void;
  closeModal: () => void;
}

interface ProfileModalProps {
  isOpened: boolean;
  actions: ProfileModalActions;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpened,
  actions,
}) => {
  return (
    <Modal isOpened={isOpened} onClose={actions.closeModal}>
      <Button
        variant="secondary"
        onClick={actions.deleteCoach}
        data-testid={ProfileModalLocators.DeleteProfileButton}
      >
        Delete profile
      </Button>
    </Modal>
  );
};
