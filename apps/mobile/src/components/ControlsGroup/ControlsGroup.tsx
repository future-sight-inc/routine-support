import React, { ReactElement } from "react";

import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ControlsGroupProps {
  children: ReactElement | ReactElement[];
  style?: StyleProp<ViewStyle>;
}

export const ControlsGroup: React.FC<ControlsGroupProps> = ({ children, style }) => {
  const calcProps = () => {
    const childrenLength = Array.isArray(children) ? children.filter(Boolean).length : 1;
    const width =
      Dimensions.get("screen").width / childrenLength -
      32 / childrenLength -
      4 * (childrenLength - 1);

    return {
      style: { width },
      InputProps: { style: { width } },
    };
  };

  return (
    <View style={[styles.wrapper, style]}>
      {Array.isArray(children)
        ? children.filter(Boolean).map((child, index) => (
          <>
            {index > 0 && <View style={styles.gap} />}
            {React.cloneElement(child, calcProps())}
          </>
        ))
        : React.cloneElement(children, calcProps())}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gap: {
    width: 8,
  },
});
