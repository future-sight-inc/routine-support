import React from "react";

import { LoginStudentDto, Student } from "@routine-support/domains";
import { Button, Icon, Layout, Spinner, Text } from "@ui-kitten/components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import { Redirect } from "react-router-native";

import barcodeFrame from "../../../../../assets/barcode-frame.png";
import qrImage from "../../../../../assets/qr.png";
import { BARCODE_FRAME_WIDTH } from "./constants";
import { useLoginComponent } from "./hooks";

export interface LoginActions {
  login: (data: LoginStudentDto) => void;
}

interface LoginProps {
  student: Student | null;
  actions: LoginActions;
}

export const Login: React.FC<LoginProps> = ({ student, actions }) => {
  const {
    models: { hasPermission, scanning, loading },
    operations: { handleQrScanned, handleScannerOpen, handleScannerClose },
  } = useLoginComponent(actions);
  const { t } = useTranslation();

  if (student) {
    return <Redirect to="/" />;
  }

  if (hasPermission === null) {
    return <Text style={styles.infoText}>{t<string>("Camera permission request")}</Text>;
  }

  if (hasPermission === false) {
    return <Text style={styles.infoText}>{t<string>("No camera permission")}</Text>;
  }

  if (!scanning) {
    return (
      <Layout style={styles.previewWrapper}>
        <Layout style={styles.previewTextWrapper}>
          <Text category="h4" style={styles.previewTitle}>
            {t<string>("You need to login")}
          </Text>
          <Text category="s1" style={styles.previewCaption}>
            {t<string>("Scan QR instructions")}
          </Text>
          <Image source={qrImage} style={styles.previewImage} />
        </Layout>
        <Button
          onPress={handleScannerOpen}
          size="giant"
          style={styles.openScannerButton}
          accessoryLeft={(props) => <Icon {...props} name="camera-outline" />}
        >
          {t<string>("Open scanner")}
        </Button>
      </Layout>
    );
  }

  return (
    <Layout style={styles.scannerWrapper}>
      <BarCodeScanner onBarCodeScanned={handleQrScanned} style={StyleSheet.absoluteFillObject} />
      <View style={styles.barcodeFrame}>
        <ImageBackground source={barcodeFrame} style={styles.barcodeImage} />
        {loading && <Spinner status="control" size="giant" />}
      </View>

      <Button
        onPress={handleScannerClose}
        size="giant"
        style={styles.closeScannerButton}
        accessoryLeft={(props) => <Icon {...props} name="close-outline" />}
      >
        {t<string>("Close")}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  previewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    paddingTop: 64,
    ...StyleSheet.absoluteFillObject,
  },
  previewTextWrapper: {
    marginTop: "auto",
  },
  previewImage: {
    width: BARCODE_FRAME_WIDTH,
    height: BARCODE_FRAME_WIDTH,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
  },
  previewTitle: {
    textAlign: "center",
  },
  previewCaption: {
    textAlign: "center",
    marginTop: 8,
  },
  scannerWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 32,
  },
  openScannerButton: {
    width: "100%",
    marginTop: "auto",
  },
  barcodeFrame: {
    width: BARCODE_FRAME_WIDTH,
    height: BARCODE_FRAME_WIDTH,
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - BARCODE_FRAME_WIDTH / 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barcodeImage: {
    width: BARCODE_FRAME_WIDTH,
    height: BARCODE_FRAME_WIDTH,
    position: "absolute",
  },
  closeScannerButton: {
    width: "100%",
  },
  infoText: {
    paddingTop: Dimensions.get("screen").height / 2 - 20,
    width: "100%",
    textAlign: "center",
  },
});
