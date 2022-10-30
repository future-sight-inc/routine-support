import React, { ReactNode } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { Dimensions, StyleSheet, View } from "react-native";
import { EdgeInsets, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface AuthFormLayoutProps {
  title: string;
  children: ReactNode;
  submitButtonText: string;
  loading: boolean;
  onSubmit: () => void;
}

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  title,
  children,
  submitButtonText,
  loading,
  onSubmit,
}) => {
  const insets = useSafeAreaInsets();
  const styles = createStyles({ insets });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name="baby-face" size={32} color="white" />
      </View>
      <Typography variant="caption3" style={styles.title}>
        {title}
      </Typography>
      {children}
      <Button
        text={submitButtonText}
        onPress={onSubmit}
        loading={loading}
        style={styles.submitButton}
      />
    </SafeAreaView>
  );
};

const createStyles = ({ insets }: { insets: EdgeInsets }) =>
  StyleSheet.create({
    wrapper: {
      height: Dimensions.get("screen").height,
      padding: 16,
      paddingBottom: Dimensions.get("screen").height / 5,
      position: "relative",
      flexDirection: "column",
      justifyContent: "center",
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
      width: Dimensions.get("screen").width - 32,
    },
    submitButton: {
      position: "absolute",
      bottom: insets.bottom || 16,
      left: 16,
      marginTop: "auto",
    },
  });
