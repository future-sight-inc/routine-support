// import { Theme } from "@routine-support/ui-theme";
// import { pxToNumber } from "@routine-support/utils";
// import React, { useState } from "react";
// import {
//   GestureResponderEvent,
//   Pressable,
//   PressableProps,
//   StyleSheet,
// } from "react-native";
// import { Typography } from "../Typography";

// type ButtonVariant = "primary" | "secondary";

// interface ButtonProps extends PressableProps {
//   text: string;
//   variant?: ButtonVariant;
//   fullWidth?: boolean;
//   disabled?: boolean;
// }

// export const Button: React.FC<ButtonProps> = ({
//   text,
//   variant = "primary",
//   fullWidth,
//   disabled,
//   style,
//   onPressIn,
//   onPressOut,
//   ...props
// }) => {
//   const [isPressed, setPressed] = useState(false);

//   const handlePressIn = (event: GestureResponderEvent) => {
//     setPressed(true);
//     onPressIn(event);
//   };

//   const handlePressOut = (event: GestureResponderEvent) => {
//     setPressed(false);
//     onPressOut(event);
//   };

//   const getTextColor = (variant: ButtonVariant) => {
//     switch (variant) {
//     case "primary":
//       return Theme.palette.common.white;
//     default:
//       return Theme.palette.primary.text;
//     }
//   };

//   return (
//     <Pressable
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       style={{
//         ...style,
//         ...styles.button,
//         backgroundColor: isPressed
//           ? Theme.palette[variant].clicked
//           : Theme.palette[variant].main,
//         width: fullWidth ? "100%" : styles.button.width,
//         opacity: disabled ? 0.3 : 1,
//       }}
//       {...props}
//       disabled={disabled}
//     >
//       <Typography style={{ ...styles.text, color: getTextColor(variant) }}>
//         {text}
//       </Typography>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     width: 200,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Theme.palette.primary.main,
//     borderRadius: 5,
//   },
//   text: {
//     fontWeight: Theme.fonts.caption4.weight,
//     fontSize: pxToNumber(Theme.fonts.caption4.size),
//   },
// });
