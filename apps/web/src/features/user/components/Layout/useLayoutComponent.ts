import { useTranslation } from "react-i18next";

import { LayoutActions } from "./Layout";

export const useLayoutComponent = (actions: LayoutActions) => {
  const { t, i18n } = useTranslation();
  const showRussianLink = i18n.language !== "ru";
  const showEnglishLink = i18n.language !== "en";
  const showDutchLink = i18n.language !== "nl";

  const handleLogout = () => {
    if (window.confirm(t("Logout confirm message"))) {
      actions.logout();
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    models: { showRussianLink, showEnglishLink, showDutchLink },
    operations: { handleLogout, handleLanguageChange },
  };
};
