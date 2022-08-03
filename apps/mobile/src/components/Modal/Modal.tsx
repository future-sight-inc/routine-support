import React, { ReactNode, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Layout } from "apps/mobile/src/components/Layout";
import { Modal as NativeModal, TouchableWithoutFeedback } from "react-native";

import { ModalLocators } from "./locators";

interface ModalProps {
  title: string;
  pressElement: ReactNode;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, pressElement, children }) => {
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
        >
          {children}
        </Layout>
      </NativeModal>
    </>
  );
};
