import { Alert } from "react-native";

import { MainLayoutActions } from ".";

export const useMainLayoutComponent = (actions: MainLayoutActions) => {
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

  return { operations: { handleLogout } };
};
