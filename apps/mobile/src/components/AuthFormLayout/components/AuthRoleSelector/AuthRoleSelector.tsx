import React from "react";

import { LinkService } from "apps/mobile/src/services/LinkService";
import { Theme } from "apps/mobile/src/theme";
import { AuthRole, SafeAreaDimensions } from "apps/mobile/src/types";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useHistory } from "react-router-native";

import { useSafeAreaDimensions } from "../../../hooks/useSafeAreaDimensions";
import { Typography } from "../../../Typography";

interface AuthRoleSelectorProps {
  authRole: AuthRole;
}

export const AuthRoleSelector: React.FC<AuthRoleSelectorProps> = ({ authRole }) => {
  const history = useHistory();

  const createHandleSelect = (newRole: AuthRole) => () => {
    console.log(authRole, newRole);
    if (authRole === newRole) {
      return;
    }

    console.log(LinkService[newRole].login());

    history.push(LinkService[newRole].login());
  };

  const dimensions = useSafeAreaDimensions();
  const styles = createStyles(dimensions);

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={createHandleSelect("coach")}>
        <View style={[styles.option, authRole === "coach" && styles.currentOption]}>
          <Typography variant="text2Bold" style={authRole === "coach" && styles.currentOptionText}>
            Родитель
          </Typography>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={createHandleSelect("student")}>
        <View style={[styles.option, authRole === "student" && styles.currentOption]}>
          <Typography
            variant="text2Bold"
            style={authRole === "student" && styles.currentOptionText}
          >
            Ребенок
          </Typography>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const createStyles = (dimensions: SafeAreaDimensions) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Theme.palette.secondary.main,
      width: dimensions.width,
      marginBottom: 16,
      borderRadius: Theme.borderRadius.m,
    },
    option: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 30,
      borderRadius: Theme.borderRadius.m,
      backgroundColor: Theme.palette.secondary.main,
    },
    currentOption: {
      backgroundColor: Theme.palette.primary.main,
    },
    currentOptionText: {
      color: Theme.palette.common.white,
    },
  });
