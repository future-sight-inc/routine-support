import React, { useEffect, useState } from "react";

import { Icon, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const MAX_PIN_LENGTH = 4;
interface pinCodeInputProps {
  pinCode: string;
  onSuccessInput: () => void;
  onClose: () => void;
}
export const PinCodeInput: React.FC<pinCodeInputProps> = ({
  pinCode,
  onSuccessInput,
  onClose,
}) => {
  const [value, setValue] = useState("");

  const onNumberBtnPress = (digit: number) => {
    setValue(value + digit);
  };

  const onBackspaceBtnPress = () => {
    setValue(value.slice(0, -1));
  };

  useEffect(() => {
    if (value.length === MAX_PIN_LENGTH) {
      if (value === pinCode) {
        onSuccessInput();
      } else {
        setTimeout(() => setValue(""), 300);
        // todo: freeze buttons
      }
    }
  }, [pinCode, value]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.dotsContainer}>
        {Array(MAX_PIN_LENGTH)
          .fill("")
          .map((__, index) =>
            index < value.length ? (
              <View style={styles.activeDot}></View>
            ) : (
              <View style={styles.dot}></View>
            )
          )}

        <TouchableOpacity
          style={styles.backspace}
          onPress={onBackspaceBtnPress}
        >
          <Icon
            style={styles.backspaceIcon}
            fill="#8F9BB3"
            name="backspace-outline"
          />
        </TouchableOpacity>
      </Layout>
      <Layout style={styles.keyboard}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onNumberBtnPress(i)}
          >
            <Text category="h2">{i}</Text>
          </TouchableOpacity>
        ))}
      </Layout>
      <Layout style={{ flexDirection: "row", justifyContent: "center" }}>
        <Icon
          onPress={onClose}
          style={{ width: 64, height: 64, marginTop: 96 }}
          name="close-square-outline"
          fill="#8F9BB3"
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    paddingTop: 120,
    backgroundColor: "white",
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 48,
  },
  dot: {
    backgroundColor: "#8F9BB3",
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 10,
  },
  activeDot: {
    backgroundColor: "black",
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 10,
  },
  backspace: {
    marginLeft: 16,
  },
  backspaceIcon: {
    width: 48,
    height: 48,
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    height: 100,
    width: 100,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 50,
    margin: 5,
    backgroundColor: "#eeeeee",
  },
});
