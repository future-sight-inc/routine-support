import React, { ReactNode, useEffect, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Layout } from "apps/mobile/src/components/Layout";
import {
  Modal as NativeModal,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

import { ModalLocators } from "./locators";

interface ModalProps {
  title: string;
  pressElement?: ReactNode;
  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isOpened?: boolean;
  scrollable?: boolean;
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
  scrollable,
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
            <TouchableWithoutFeedback onPress={handleClose}>
              <View testID={ModalLocators.CloseIcon}>
                <MaterialIcons name="close" size={30} />
              </View>
            </TouchableWithoutFeedback>
          }
          rightIcon={<MaterialIcons name="close" size={30} color="transparent" />}
          footer={footer}
          footerStyle={footerStyle}
          scrollable={scrollable}
        >
          {children}
        </Layout>
      </NativeModal>
    </>
  );
};
