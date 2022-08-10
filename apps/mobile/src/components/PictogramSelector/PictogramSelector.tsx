import React, { useEffect, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MobileTheme } from "../../theme";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Typography } from "../Typography";

interface PictogramSelectorProps {
  value?: string;
  onSelect: (value?: string) => void;
}

export const PictogramSelector: React.FC<PictogramSelectorProps> = ({
  value: defaultValue,
  onSelect,
}) => {
  const [isOpened, setOpened] = useState(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleSelect = (newValue?: string) => {
    setValue(newValue);
  };

  const handleConfirm = () => {
    onSelect(value);
    handleClose();
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen}>
        <View style={[styles.pictogramPreviewWrapper, styles.currentValueWrapper]}>
          {value ? (
            <Image style={styles.pictogramPreview} />
          ) : (
            <Typography color="secondary" variant="text1">
              Изображение не выбрано
            </Typography>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        title="Пиктограммы"
        isOpened={isOpened}
        onClose={handleClose}
        footer={<Button text="Выбрать" fullWidth onPress={handleConfirm} />}
      >
        <View style={styles.pictogramPreviewWrapper}>
          {value ? (
            <Image style={styles.pictogramPreview} />
          ) : (
            <Typography color="secondary" variant="text1">
              Изображение не выбрано
            </Typography>
          )}
        </View>
        <View style={styles.pictogramsWrapper}>
          <FlatList
            data={[
              { value: undefined },
              { value: "1" },
              { value: "2" },
              { value: "3" },
              { value: "4" },
            ]}
            renderItem={({ item }) =>
              item.value ? (
                <TouchableWithoutFeedback onPress={() => handleSelect(item.value)}>
                  <View
                    style={[
                      styles.pictogramWrapper,
                      value === item.value && styles.selectedPictogram,
                    ]}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback onPress={() => handleSelect(item.value)}>
                  <View
                    style={[
                      styles.pictogramWrapper,
                      styles.notSelectedWrapper,
                      value === item.value && styles.selectedPictogram,
                    ]}
                  >
                    <MaterialIcons
                      name="not-interested"
                      size={40}
                      color={MobileTheme.palette.secondary.text}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )
            }
            numColumns={4}
            keyExtractor={(item) => item.value}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  currentValueWrapper: {
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.m,
  },
  pictogramPreviewWrapper: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  pictogramPreview: {
    width: 200,
    height: 200,
    backgroundColor: "black",
  },
  pictogramsWrapper: {
    // todo Добавить метод получения безопасных размеров тела лейаута (включая отступы)
    height: Dimensions.get("screen").height - 416,
  },
  pictogramWrapper: {
    backgroundColor: MobileTheme.palette.common.black,
    width: Dimensions.get("screen").width / 4 - 16,
    height: Dimensions.get("screen").width / 4 - 16,
    margin: 2,
    borderRadius: MobileTheme.borderRadius.m,
  },
  notSelectedWrapper: {
    backgroundColor: MobileTheme.palette.secondary.main,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedPictogram: {
    borderWidth: 4,
    borderColor: MobileTheme.palette.primary.main,
  },
});
