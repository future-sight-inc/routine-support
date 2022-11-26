import React, { ReactNode } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSafeAreaDimensions } from "../../hooks/useSafeAreaDimensions";
import { AuthRole, SafeAreaDimensions } from "../../types";
import { AuthRoleSelector } from "./components/AuthRoleSelector";

interface AuthFormLayoutProps {
  children: ReactNode;
  caption: ReactNode;
  submitButtonText: string;
  loading: boolean;
  authRole: AuthRole;
  onSubmit: () => void;
}

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  caption,
  children,
  submitButtonText,
  loading,
  authRole,
  onSubmit,
}) => {
  const dimensions = useSafeAreaDimensions();
  const styles = createStyles(dimensions);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name="baby-face" size={32} color="white" />
      </View>
      <Typography variant="caption4" style={styles.title}>
        Routine Support
      </Typography>
      <AuthRoleSelector authRole={authRole} />
      {children}
      <View style={styles.captionWrapper}>{caption}</View>
      <Button
        text={submitButtonText}
        onPress={onSubmit}
        loading={loading}
        style={styles.submitButton}
      />
    </SafeAreaView>
  );
};

const createStyles = (dimensions: SafeAreaDimensions) =>
  StyleSheet.create({
    wrapper: {
      height: '100%',
      padding: 16,
      paddingTop: dimensions.height / 5,
      position: "relative",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    iconWrapper: {
      width: 50,
      height: 50,
      marginBottom: 16,
      backgroundColor: Theme.palette.primary.main,
      borderRadius: Theme.borderRadius.m,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    title: { marginBottom: 16, width: "100%", textAlign: "center" },
    textInput: {
      marginBottom: 16,
      width: dimensions.width - 32,
    },
    captionWrapper: {
      position: "absolute",
      bottom: dimensions.bottom + 66,
    },
    submitButton: {
      position: "absolute",
      bottom: dimensions.bottom || 16,
      left: 16,
    },
  });
