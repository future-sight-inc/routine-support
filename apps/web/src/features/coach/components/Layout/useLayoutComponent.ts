import { useConfirm } from "apps/web/src/services/ConfirmationService";
import { useTranslation } from "react-i18next";

import { LayoutActions } from "./Layout";

export const useLayoutComponent = (actions: LayoutActions) => {
  const { t } = useTranslation();
  const { confirm } = useConfirm();

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
    operations: { handleLogout },
  };
};
