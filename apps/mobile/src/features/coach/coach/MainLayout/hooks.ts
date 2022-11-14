import { LinkService } from "apps/mobile/src/services/LinkService";
import { Alert } from "react-native";
import { useHistory } from "react-router-native";

import { MainLayoutActions } from ".";

export const useMainLayoutComponent = (actions: MainLayoutActions) => {
  const history = useHistory();

  const handleLogout = () => {
    Alert.alert(
      "Confirm your action",
      "",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => actions.logout(),
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => null,
      }
    );
  };

  const handleNotificationsIconPress = () => {
    history.push(LinkService.coach.notifications());
  };

  return { operations: { handleLogout, handleNotificationsIconPress } };
};
