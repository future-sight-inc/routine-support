import { useTranslation } from 'react-i18next';
import { Alert } from "react-native";
import { useHistory } from "react-router-native";

import { ProfileActions } from "./Profile";

export const useProfileComponent = (actions: ProfileActions) => {
  const history = useHistory();
  const { t } = useTranslation()

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

  return { operations: { handleBackPress, handleLogout } };
};
