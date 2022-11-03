import React, { useState } from "react";

import { Student } from "@routine-support/domains";
import { IconButton } from "apps/mobile/src/components/IconButton";
import { Popup } from "apps/mobile/src/components/Popup";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

interface QrCodeProps {
  student: Student;
}

export const QrCode: React.FC<QrCodeProps> = ({ student }) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <IconButton icon="qr-code" onPress={handleOpen} />
      <Popup isOpened={isOpened} onClose={handleClose}>
        <View style={styles.wrapper}>
          <Typography variant="caption4" style={styles.text}>
            Вход в приложение Никиты
          </Typography>
          <QRCode value={student._id} size={200} />
          <Typography variant="text1" style={[styles.text, styles.authCode]}>
            Код авторизации: <Typography variant="text1Bold">567243</Typography>
          </Typography>
          <Typography variant="text1" color="secondary" style={styles.text}>
            Чтобы войти отсканируйте QR-код или введите код авторизации в приложении Routine Support
          </Typography>
        </View>
      </Popup>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  authCode: { marginTop: 16 },
  text: { marginBottom: 16, textAlign: "center" },
});
