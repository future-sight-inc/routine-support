import { useState } from "react";

import { useConfirm } from "apps/web/src/services/ConfirmationService";
import { useTranslation } from "react-i18next";

import { MainLayoutActions } from "./MainLayout";

export const useMainLayoutComponent = (actions: MainLayoutActions) => {
  const { t } = useTranslation();
  const { confirm } = useConfirm();

  const [isProfileModalOpened, setProfileModalOpened] = useState(false);

  const handleProfileModalOpen = () => {
    setProfileModalOpened(true);
  };

  const handleProfileModalClose = () => {
    setProfileModalOpened(false);
  };

  const handleDeleteProfile = () => {
    confirm({
      title: t("Confirm your action"),
      description: t("Delete confirm message"),
      onConfirm: () => {
        actions.deleteCoach();
      },
    });
  };

  const handleLogout = () => {
    confirm({
      title: t("Confirm your action"),
      description: t("Logout confirm message"),
      onConfirm: () => {
        actions.logout();
      },
    });
  };

  return {
    models: {
      isProfileModalOpened,
    },
    operations: {
      handleProfileModalOpen,
      handleProfileModalClose,
      handleDeleteProfile,
      handleLogout,
    },
  };
};
