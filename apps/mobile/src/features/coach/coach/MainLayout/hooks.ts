import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Coach } from "@routine-support/domains";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { Alert } from "react-native";

import { MainLayoutActions } from ".";

export const useMainLayoutComponent = (actions: MainLayoutActions, coach: Coach) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!coach) {
      navigation.navigate(LinkService.coach.login(), {});
    }
  }, [coach]);

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
    navigation.navigate(LinkService.coach.notifications(), {});
  };

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return { operations: { handleLogout, handleNotificationsIconPress, handleMenuIconPress } };
};
