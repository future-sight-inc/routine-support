import { useEffect, useState } from "react";

import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";

import { LoginActions } from "./Login";
import { useWindowDimensions } from "react-native";
import { isInArea } from "./utils";

export const useLoginComponent = (actions: LoginActions) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const { height: viewportHeight, width: viewportWidth } =
    useWindowDimensions();

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(status === "granted");
  };

  const handleQrScanned = (event: BarCodeEvent) => {
    try {
      if (event.cornerPoints && event.bounds) {
        const barcodeArea = {
          x: viewportWidth / 2 - 125,
          y: viewportHeight / 2 - 125,
          width: 250,
          height: 250,
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
            actions.login(data);
          }

          setScanning(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleScannerOpen = () => {
    setScanning(true);
  };

  const handleScannerClose = () => {
    setScanning(false);
  };

  return {
    models: { hasPermission, scanning },
    operations: { handleQrScanned, handleScannerOpen, handleScannerClose },
  };
};
