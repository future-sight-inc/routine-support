import { useHistory } from "react-router-native";
import { ProfileActions } from "./Profile";
import { Alert } from "react-native";

export const useProfileComponent = (actions: ProfileActions) => {
  const history = useHistory();

  const handleBackPress = () => {
    history.push("/");
  };

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
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return { operations: { handleBackPress, handleLogout } };
};
