import React from "react";

import { LoginStudentDto, Student } from "@routine-support/domains";
import { AuthFormLayout } from "apps/mobile/src/components/AuthFormLayout";
import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { useSafeAreaDimensions } from "apps/mobile/src/hooks/useSafeAreaDimensions";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { Theme } from "apps/mobile/src/theme";
import { SafeAreaDimensions } from "apps/mobile/src/types";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { useLoginComponent } from "./hooks";
import qrImage from "./qr.png";

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
  } = useLoginComponent(actions, student);
  const { t } = useTranslation();

  const dimensions = useSafeAreaDimensions();
  const styles = createStyles(dimensions);

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
      <AuthFormLayout
        authRole="student"
        loading={loading}
        submitButtonText={t<string>("Open scanner")}
        onSubmit={handleScannerOpen}
        caption={
          <Link to={LinkService.coach.register()} underlayColor="transparent">
            <Typography variant="text1" color="secondary">
              Или войдите{" "}
              <Typography variant="text1" color="primary">
                с помощью пин-кода
              </Typography>
            </Typography>
          </Link>
        }
      >
        <Typography style={styles.previewTitle} color="secondary">
          {t<string>("Отсканируйте QR код ребенка")}
        </Typography>
        <Image source={qrImage} style={styles.previewImage} />
      </AuthFormLayout>
    );
  }

  return (
    <View style={styles.scannerWrapper}>
      <BarCodeScanner onBarCodeScanned={handleQrScanned} style={StyleSheet.absoluteFillObject} />
      <View style={styles.barcodeFrame}>
        {loading && <ActivityIndicator color={Theme.palette.primary.main} />}
      </View>
      <Button
        onPress={handleScannerClose}
        style={styles.closeScannerButton}
        text={t<string>("Close")}
      />
    </View>
  );
};

const createStyles = (dimensions: SafeAreaDimensions) =>
  StyleSheet.create({
    previewImage: {
      width: 250,
      height: 250,
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
      width: dimensions.width,
      marginTop: "auto",
    },
    barcodeFrame: {
      width: 250,
      height: 250,
      position: "absolute",
      top: dimensions.height / 2 - 250 / 2,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    closeScannerButton: {
      width: dimensions.width,
    },
    infoText: {
      paddingTop: dimensions.height / 2 - 20,
      width: dimensions.width,
      textAlign: "center",
    },
  });
