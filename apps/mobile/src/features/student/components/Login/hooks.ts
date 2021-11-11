import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { LoginActions } from "./Login";

export const useLoginComponent = (actions: LoginActions) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const handleQrScanned = (event: BarCodeEvent) => {
    try {
      const data = JSON.parse(event.data);

      if (data.id) {
        actions.login(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setScanning(false);
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
