import { Student, StudentLoginDto } from "@routine-support/models";
import { Button, Layout, Text } from "@ui-kitten/components";
import { BarCodeScanner } from "expo-barcode-scanner";
import React from "react";
import { StyleSheet } from "react-native";
import { Redirect } from "react-router-native";
import { useLoginComponent } from "./hooks";
import { Spinner } from "@ui-kitten/components";

export interface LoginActions {
  login: (data: StudentLoginDto) => void;
}

interface LoginProps {
  loading: boolean;
  student: Student | null;
  actions: LoginActions;
}

export const Login: React.FC<LoginProps> = ({ loading, student, actions }) => {
  const {
    models: { hasPermission, scanning },
    operations: { handleQrScanned, handleScannerOpen, handleScannerClose },
  } = useLoginComponent(actions);

  if (student) {
    return <Redirect to="/" />;
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!scanning) {
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={handleScannerOpen} size="giant">
          Scan
        </Button>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
    >
      <BarCodeScanner
        onBarCodeScanned={handleQrScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Button onPress={handleScannerClose} size="giant">
        Close
      </Button>
    </Layout>
  );
};
