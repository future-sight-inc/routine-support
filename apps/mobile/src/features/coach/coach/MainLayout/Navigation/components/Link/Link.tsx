import React from "react";

import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useHistory } from "react-router-native";

interface LinkProps {
  text: string;
  path: string;
  iconName: string;
  // todo Добавить тип
  IconComponent: any;
}

export const Link: React.FC<LinkProps> = ({ text, path, iconName, IconComponent }) => {
  const history = useHistory();

  const createLinkIconWrapperStyles = (path: string) => {
    if (path === history.location.pathname) {
      return [styles.linkIconWrapper, { backgroundColor: MobileTheme.palette.primary.main }];
    }

    return styles.linkIconWrapper;
  };

  const getIconColor = (path: string) => {
    if (path === history.location.pathname) {
      return MobileTheme.palette.common.white;
    }

    return MobileTheme.palette.primary.text;
  };

  const getLinkColor = (path: string) => {
    if (path === history.location.pathname) {
      return "primary";
    }

    return "normal";
  };

  const handleLinkPress = (path: string) => {
    return history.push(path);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleLinkPress(path)}>
      <View style={styles.wrapper}>
        <View style={createLinkIconWrapperStyles(path)}>
          <IconComponent name={iconName} size={18} color={getIconColor(path)} />
        </View>
        <Typography variant="caption4Normal" color={getLinkColor(path)}>
          {text}
        </Typography>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 30,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  linkIconWrapper: {
    width: 30,
    height: 30,
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.s,
    marginRight: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    marginTop: "auto",
  },
  footer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});
