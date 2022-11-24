import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

interface LinkProps {
  text: string;
  name: string;
  iconName: string;
  IconComponent: any;
}

export const Link: React.FC<LinkProps> = ({ text, name, iconName, IconComponent }) => {
  const route = useRoute();
  const navigation = useNavigation()

  const createLinkIconWrapperStyles = (name: string) => {
    if (name === route.name) {
      return [styles.linkIconWrapper, { backgroundColor: Theme.palette.primary.main }];
    }

    return styles.linkIconWrapper;
  };

  const getIconColor = (name: string) => {
    if (name === route.name) {
      return Theme.palette.common.white;
    }

    return Theme.palette.primary.text;
  };

  const getLinkColor = (name: string) => {
    if (name === route.name) {
      return "primary";
    }

    return "normal";
  };

  const handleLinkPress = (name: string) => {
    return navigation.navigate(name, {});
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleLinkPress(name)}>
      <View style={styles.wrapper}>
        <View style={createLinkIconWrapperStyles(name)}>
          <IconComponent name={iconName} size={18} color={getIconColor(name)} />
        </View>
        <Typography variant="caption4Normal" color={getLinkColor(name)}>
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
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: Theme.borderRadius.s,
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
