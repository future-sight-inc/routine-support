import { useTranslation } from 'react-i18next';

import { LayoutActions } from "./Layout";

export const useLayoutComponent = (actions: LayoutActions) => {
  const { t } = useTranslation()
  
  const handleLogout = () => {
  if (window.confirm(t("Logout confirm message"))) {
      actions.logout();
    }
  };

  return { operations: { handleLogout } };
};
