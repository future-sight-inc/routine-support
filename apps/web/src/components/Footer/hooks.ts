import { useTranslation } from "react-i18next";

export const useFooterComponent = () => {
  const { i18n } = useTranslation();
  const showRussianSwitch = i18n.language !== "ru";
  const showEnglishSwitch = i18n.language !== "en";
  const showDutchSwitch = i18n.language !== "nl";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    models: { showRussianSwitch, showEnglishSwitch, showDutchSwitch },
    operations: { handleLanguageChange },
  };
};