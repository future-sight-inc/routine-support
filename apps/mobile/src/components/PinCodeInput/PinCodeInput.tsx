import React, { useEffect, useState } from "react";

// import { useTranslation } from "react-i18next";
// import { TouchableOpacity, View } from "react-native";

const MAX_PIN_LENGTH = 4;
// const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

interface pinCodeInputProps {
  pinCode: string;
  onSuccessInput: () => void;
  onClose: () => void;
}

export const PinCodeInput: React.FC<pinCodeInputProps> = ({
  pinCode,
  onSuccessInput,
  // onClose
}) => {
  // const theme = useTheme();
  // const styles = useStyleSheet(themedStyles);
  // const { t } = useTranslation();

  const [value, setValue] = useState("");

  // const onNumberButtonPress = (digit: number) => {
  //   setValue(value + digit);
  // };

  // const onBackspaceButtonPress = () => {
  //   setValue(value.slice(0, -1));
  // };

  useEffect(() => {
    if (value.length === MAX_PIN_LENGTH) {
      if (value === pinCode) {
        onSuccessInput();
      } else {
        setTimeout(() => setValue(""), 300);
      }
    }
  }, [pinCode, value]);

  return null;

  // return (
  //   <Layout style={styles.container}>
  //     <Text category="h5" style={styles.title}>
  //       {t<string>("Enter PIN to log out")}
  //     </Text>
  //     <Layout style={styles.dotsContainer}>
  //       {Array(MAX_PIN_LENGTH)
  //         .fill("")
  //         .map((__, index) => (
  //           <View
  //             key={index}
  //             style={{
  //               ...styles.dot,
  //               backgroundColor: index < value.length ? "black" : theme["color-basic-600"],
  //             }}
  //           />
  //         ))}
  //       <TouchableOpacity style={styles.backspace} onPress={onBackspaceButtonPress}>
  //         <Icon
  //           style={styles.backspaceIcon}
  //           fill={theme["color-basic-600"]}
  //           name="backspace-outline"
  //         />
  //       </TouchableOpacity>
  //     </Layout>
  //     <Layout style={styles.keyboard}>
  //       {DIGITS.map((digit) => (
  //         <TouchableOpacity style={styles.button} onPress={() => onNumberButtonPress(digit)}>
  //           <Text category="h2">{digit}</Text>
  //         </TouchableOpacity>
  //       ))}
  //     </Layout>
  //     <Layout style={styles.closeIconWrapper}>
  //       <Icon
  //         onPress={onClose}
  //         style={styles.closeIcon}
  //         name="close-square-outline"
  //         fill={theme["color-basic-600"]}
  //       />
  //     </Layout>
  //   </Layout>
  // );
};

// const themedStyles = StyleService.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     paddingTop: 100,
//     backgroundColor: "white",
//   },
//   title: { width: "100%", textAlign: "center", marginBottom: 16 },
//   dotsContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     marginBottom: 48,
//   },
//   dot: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     margin: 10,
//   },
//   backspace: {
//     marginLeft: 16,
//   },
//   backspaceIcon: {
//     width: 48,
//     height: 48,
//   },

//   keyboard: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   button: {
//     height: 100,
//     width: 100,

//     alignItems: "center",
//     justifyContent: "center",

//     borderRadius: 50,
//     margin: 5,
//     backgroundColor: "color-basic-300",
//   },
//   closeIconWrapper: { flexDirection: "row", justifyContent: "center" },
//   closeIcon: { width: 48, height: 48, marginTop: 96 },
// });
