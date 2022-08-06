import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";
import { StyleSheet } from "react-native";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";
import { Select } from "./Select";

storiesOf("Components", module).add("Select", () => {
  return (
    <OverlayProvider>
      <Select
        pressElement={<Typography style={styles.text}>Open regular select</Typography>}
        onSelect={() => null}
        options={[
          { value: "1", text: "Boris", color: MobileTheme.palette.common.red },
          { value: "2", text: "Andrew", color: MobileTheme.palette.common.brown },
        ]}
      />
      <Select
        pressElement={<Typography style={styles.text}>Open multiple select</Typography>}
        onSelect={() => null}
        multiple
        options={[
          { value: "1", text: "Boris", color: MobileTheme.palette.common.red },
          { value: "2", text: "Andrew", color: MobileTheme.palette.common.brown },
        ]}
      />
    </OverlayProvider>
  );
});

const styles = StyleSheet.create({
  text: { margin: 16 },
});
