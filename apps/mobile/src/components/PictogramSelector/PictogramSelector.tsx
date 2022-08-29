import React, { useEffect, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pictogram } from "@routine-support/types";
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
import { createPictogramTestId, PictogramSelectorLocators } from "./locators";

interface PictogramSelectorProps {
  value?: string;
  pictograms: Pictogram[];
  onSelect: (value?: string) => void;
}

export const PictogramSelector: React.FC<PictogramSelectorProps> = ({
  value: defaultValue,
  pictograms,
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
    setValue(defaultValue);
  };

  const handleSelect = (newValue?: string) => {
    setValue(newValue);
  };

  const handleConfirm = () => {
    onSelect(value);
    setOpened(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen} testID={PictogramSelectorLocators.ValueWrapper}>
        <View style={[styles.pictogramPreviewWrapper, styles.currentValueWrapper]}>
          {value ? (
            <Image
              style={styles.pictogramPreview}
              source={{ uri: value }}
              testID={PictogramSelectorLocators.Image}
            />
          ) : (
            <Typography
              color="secondary"
              variant="text1"
              testID={PictogramSelectorLocators.NoValueText}
            >
              Изображение не выбрано
            </Typography>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        title="Пиктограммы"
        isOpened={isOpened}
        onClose={handleClose}
        footer={
          <Button
            text="Выбрать"
            fullWidth
            onPress={handleConfirm}
            testID={PictogramSelectorLocators.ConfirmButton}
          />
        }
      >
        <View
          style={styles.pictogramPreviewWrapper}
          testID={PictogramSelectorLocators.PreviewWrapper}
        >
          {value ? (
            <Image
              style={styles.pictogramPreview}
              source={{ uri: value }}
              testID={PictogramSelectorLocators.Image}
            />
          ) : (
            <Typography
              color="secondary"
              variant="text1"
              testID={PictogramSelectorLocators.NoValueText}
            >
              Изображение не выбрано
            </Typography>
          )}
        </View>
        <View style={styles.pictogramsWrapper}>
          <FlatList
            data={[
              { value: undefined },
              ...pictograms.map((pictogram) => ({
                value: pictogram.url,
              })),
            ]}
            renderItem={({ item }) =>
              item.value ? (
                <TouchableWithoutFeedback onPress={() => handleSelect(item.value)}>
                  <Image
                    style={[
                      styles.pictogramWrapper,
                      value === item.value && styles.selectedPictogram,
                    ]}
                    source={{ uri: item.value }}
                    testID={createPictogramTestId({
                      value: item.value,
                      isSelected: value === item.value,
                    })}
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
                    testID={
                      !value
                        ? PictogramSelectorLocators.NoImageOptionSelected
                        : PictogramSelectorLocators.NoImageOption
                    }
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
            keyExtractor={(__, index) => index}
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
    marginBottom: 0,
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
    height: Dimensions.get("screen").height - 480,
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
