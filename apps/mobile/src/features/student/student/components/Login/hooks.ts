import { useEffect, useState } from "react";

import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "react-native";
import { useToast } from "react-native-toast-notifications";

import { BARCODE_FRAME_WIDTH } from "./constants";
import { LoginActions } from "./Login";
import { isInArea } from "./utils";

export const useLoginComponent = (actions: LoginActions) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [barcode, setBarcode] = useState<BarCodeEvent | undefined>();

  const { height: viewportHeight, width: viewportWidth } = useWindowDimensions();
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    checkPermission();
  }, []);

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

        const barcodeArea = {
          x: viewportWidth / 2 - BARCODE_FRAME_WIDTH / 2,
          y: viewportHeight / 2 - BARCODE_FRAME_WIDTH / 2,
          width: BARCODE_FRAME_WIDTH,
          height: BARCODE_FRAME_WIDTH,
        };
        const barcode = {
          x: event.cornerPoints[0].x,
          y: event.cornerPoints[0].y,
          width: event.bounds.size.width,
          height: event.bounds.size.height,
        };

        if (isInArea(barcodeArea, barcode)) {
          const data = JSON.parse(event.data);

          if (data.id) {
            await actions.login(data);

            setScanning(false);
          } else {
            throw new Error();
          }
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
