import React from "react";

import { LoginStudentDto, Student } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, View } from "react-native";
import { Redirect } from "react-router-native";

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
    return <Redirect to={LinkService.student.day()} />;
  }

  if (hasPermission === null) {
    return (
      <Typography style={styles.infoText}>{t<string>("Camera permission request")}</Typography>
    );
  }

  if (hasPermission === false) {
    return <Typography style={styles.infoText}>{t<string>("No camera permission")}</Typography>;
  }

  if (!scanning) {
    return (
      <View style={styles.previewWrapper}>
        <View style={styles.previewTextWrapper}>
          <Typography style={styles.previewTitle}>{t<string>("You need to login")}</Typography>
          <Typography style={styles.previewCaption}>{t<string>("Scan QR instructions")}</Typography>
          {/* <Image source={qrImage} style={styles.previewImage} /> */}
        </View>
        <Button
          onPress={handleScannerOpen}
          text={t<string>("Open scanner")}
          style={styles.openScannerButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.scannerWrapper}>
      <BarCodeScanner onBarCodeScanned={handleQrScanned} style={StyleSheet.absoluteFillObject} />
      <View style={styles.barcodeFrame}>
        {/* <ImageBackground source={barcodeFrame} style={styles.barcodeImage} /> */}
        {/* {loading && <Spinner status="control" size="giant" />} */}
      </View>

      <Button
        onPress={handleScannerClose}
        style={styles.closeScannerButton}
        text={t<string>("Close")}
      />
    </View>
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
