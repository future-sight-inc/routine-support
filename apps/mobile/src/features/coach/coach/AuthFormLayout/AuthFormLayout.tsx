import React, { ReactNode } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AuthFormLayoutProps {
  title: string;
  children: ReactNode;
  submitButtonText: string;
  onSubmit: () => void;
}

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  title,
  children,
  submitButtonText,
  onSubmit,
}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name="baby-face" size={32} color="white" />
      </View>
      <Typography variant="caption3" style={styles.title}>
        {title}
      </Typography>
      {children}
      <Button text={submitButtonText} fullWidth onPress={onSubmit} style={styles.submitButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
    height: Dimensions.get("screen").height,
    paddingHorizontal: 16,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    marginBottom: 16,
    backgroundColor: MobileTheme.palette.primary.main,
    borderRadius: MobileTheme.borderRadius.m,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginBottom: 16, width: "100%", textAlign: "center" },
  textInput: {
    marginBottom: 16,
    width: Dimensions.get("screen").width - 32,
  },
  submitButton: {
    marginTop: "auto",
  },
});
