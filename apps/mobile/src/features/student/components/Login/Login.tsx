import React from "react";

import { Student, StudentLoginDto } from "@routine-support/domains";
import { Button, Icon, Layout, Spinner, Text } from "@ui-kitten/components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Image, StyleSheet } from "react-native";
import { Redirect } from "react-router-native";

import qrImage from "../../../../../assets/qr.png";
import { useLoginComponent } from "./hooks";

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

  if (loading) {
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
      </Layout>
    );
  }

  if (!scanning) {
    return (
      <Layout
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          paddingTop: 64,
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <Layout style={{ marginTop: "auto" }}>
          <Text category="h4" style={{ textAlign: "center" }}>
            You need to login
          </Text>
          <Text category="s1" style={{ textAlign: "center", marginTop: 8 }}>
            Scan QR code placed in your coach panel to login student
          </Text>
          <Image
            source={qrImage}
            style={{
              width: 250,
              height: 250,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 16,
            }}
          />
        </Layout>

        <Button
          onPress={handleScannerOpen}
          size="giant"
          style={{ width: "100%", marginTop: "auto" }}
          accessoryLeft={(props) => <Icon {...props} name="camera-outline" />}
        >
          Open scanner
        </Button>
      </Layout>
    );
  }

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 32,
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={handleQrScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Button
        onPress={handleScannerClose}
        size="giant"
        style={{ width: "100%" }}
        accessoryLeft={(props) => <Icon {...props} name="close-outline" />}
      >
        Close
      </Button>
    </Layout>
  );
};
