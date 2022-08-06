import React, { ReactNode, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Layout } from "apps/mobile/src/components/Layout";
import { Modal as NativeModal, StyleProp, TouchableWithoutFeedback, ViewStyle } from "react-native";

import { ModalLocators } from "./locators";

interface ModalProps {
  title: string;
  pressElement: ReactNode;
  footer: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  pressElement,
  children,
  footer,
  footerStyle,
}) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOpen}>{pressElement}</TouchableWithoutFeedback>
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
