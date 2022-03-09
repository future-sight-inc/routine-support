import { useTranslation } from "react-i18next";
import { Alert } from "react-native";
import { useHistory } from "react-router-native";

import { ProfileActions } from "./Profile";

export const useProfileComponent = (actions: ProfileActions) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const isRussianChecked = i18n.language === "ru";
  const isEnglishChecked = i18n.language === "en";
  const isDutchChecked = i18n.language === "nl";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleBackPress = () => {
    history.push("/");
  };

  const handleLogout = () => {
    Alert.alert(
      t<string>("Confirm your action"),
      "",
      [
        {
          text: t<string>("Cancel"),
          style: "cancel",
        },
        {
          text: t<string>("Confirm"),
          onPress: () => actions.logout(),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return {
    models: { isRussianChecked, isEnglishChecked, isDutchChecked },
    operations: { handleLanguageChange, handleBackPress, handleLogout },
  };
};
