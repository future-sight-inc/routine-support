import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Student } from "@routine-support/domains";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { Alert } from "react-native";

import { MainLayoutActions } from ".";

export const useMainLayoutComponent = (actions: MainLayoutActions, student: Student) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!student) {
      navigation.navigate(LinkService.student.login(), {});
    }
  }, [student]);

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

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return { operations: { handleLogout, handleMenuIconPress } };
};
