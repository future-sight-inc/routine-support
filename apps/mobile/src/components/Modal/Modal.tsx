import React, { ReactNode, useEffect, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Dimensions,
  Modal as NativeModal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Theme } from "../../theme";
import { SafeAreaDimensions } from "../../types";
import { useSafeAreaDimensions } from "../hooks/useSafeAreaDimensions";
import { Typography } from "../Typography";
import { ModalLocators } from "./locators";

interface ModalProps {
  title: string;
  pressElement?: ReactNode;
  footer?: ReactNode;
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
  isOpened: defaultOpened = false,
  onOpen,
  onClose,
}) => {
  const [isOpened, setOpened] = useState(defaultOpened);
  const dimensions = useSafeAreaDimensions();
  const styles = createStyles(dimensions);

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
        <ScrollView
          style={styles.wrapper}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View>
            <View style={styles.header}>
              <TouchableWithoutFeedback onPress={handleClose}>
                <View testID={ModalLocators.CloseIcon}>
                  <MaterialIcons name="close" size={30} />
                </View>
              </TouchableWithoutFeedback>
              <Typography variant="caption3Normal">{title}</Typography>
              <View />
            </View>
          </View>
          {children}
        </ScrollView>
        <View style={styles.footer}>{footer}</View>
      </NativeModal>
    </>
  );
};

const createStyles = (dimensions: SafeAreaDimensions) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 16,
      maxHeight: Dimensions.get("screen").height - 120,
      marginTop: dimensions.top,
    },
    header: {
      height: 78,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Theme.palette.common.white,
    },
    footer: {
      position: "absolute",
      bottom: dimensions.bottom,
      width: "100%",
      paddingHorizontal: 16,
      backgroundColor: Theme.palette.common.white,
    },
  });
