import React, { ReactNode, useEffect, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Layout } from "apps/mobile/src/components/Layout";
import { Modal as NativeModal, StyleProp, TouchableWithoutFeedback, ViewStyle } from "react-native";

import { ModalLocators } from "./locators";

interface ModalProps {
  title: string;
  pressElement?: ReactNode;
  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isOpened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  pressElement,
  children,
  footer,
  footerStyle,
  isOpened: defaultOpened = false,
  onOpen,
  onClose,
}) => {
  const [isOpened, setOpened] = useState(defaultOpened);

  useEffect(() => {
    setOpened(defaultOpened);
  }, [defaultOpened]);

  const handleOpen = () => {
    setOpened(true);
    onOpen && onOpen();
  };

  const handleClose = () => {
    setOpened(false);
    onClose && onClose();
  };

  return (
    <>
      {pressElement && (
        <TouchableWithoutFeedback onPress={handleOpen}>{pressElement}</TouchableWithoutFeedback>
      )}
      <NativeModal visible={isOpened} animationType="slide" testID={ModalLocators.Modal}>
        <Layout
          title={title}
          leftIcon={
            <MaterialIcons
              name="close"
              size={30}
              onPress={handleClose}
              testID={ModalLocators.CloseIcon}
            />
          }
          rightIcon={<MaterialIcons name="close" size={30} color="transparent" />}
          footer={footer}
          footerStyle={footerStyle}
        >
          {children}
        </Layout>
      </NativeModal>
    </>
  );
};
