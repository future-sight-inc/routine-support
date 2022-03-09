import { useTranslation } from "react-i18next";

export const useFooterComponent = () => {
  const { i18n } = useTranslation();
  const showRussianLink = i18n.language !== "ru";
  const showEnglishLink = i18n.language !== "en";
  const showDutchLink = i18n.language !== "nl";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    models: { showRussianLink, showEnglishLink, showDutchLink },
    operations: { handleLanguageChange },
  };
};
