import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Student } from "@routine-support/domains";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useTranslation } from "react-i18next";
import { useToast } from "react-native-toast-notifications";

import { LoginActions } from "./Login";

export const useLoginComponent = (actions: LoginActions, student: Student | null) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [barcode, setBarcode] = useState<BarCodeEvent | undefined>();

  const navigation = useNavigation();
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    if (student) {
      navigation.navigate(LinkService.student.day(), {});
    }
  }, [student]);

  const checkPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(status === "granted");
  };

  const handleQrScanned = async (event: BarCodeEvent) => {
    if (barcode) {
      return;
    }

    try {
      if (event.cornerPoints && event.bounds) {
        setLoading(true);
        setBarcode(event);

        const data = JSON.parse(event.data);

        if (data.id) {
          await actions.login(data);

          setScanning(false);
        } else {
          throw new Error();
        }
      }
    } catch (error) {
      // todo Сделать так, чтобы можно было прокидывать открытие одним объектом
      toast.show(null, {
        type: "custom",
        placement: "top",
        duration: 3000,
        animationType: "zoom-in",
        data: {
          title: t("Student is not found"),
          description: t("Scan QR instructions"),
        },
      });
    } finally {
      setLoading(false);

      setTimeout(() => setBarcode(undefined), 1000);
    }
  };

  const handleScannerOpen = () => {
    setScanning(true);
  };

  const handleScannerClose = () => {
    setScanning(false);
  };

  return {
    models: { hasPermission, scanning, loading },
    operations: {
      handleQrScanned,
      handleScannerOpen,
      handleScannerClose,
    },
  };
};
