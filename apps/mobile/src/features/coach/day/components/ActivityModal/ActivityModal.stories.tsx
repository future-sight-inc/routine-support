import React from "react";

import { RepeatTypeEnum } from "@routine-support/domains";
import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ActivityModal } from "./ActivityModal";

storiesOf("Coach/Day", module).add("ActivityModal", () => {
  return (
    <SafeAreaProvider>
      <ActivityModal
        isOpened
        onClose={() => null}
        pictograms={PICTOGRAMS}
        repeatTypeOptions={[
          { text: "Never", value: RepeatTypeEnum.None },
          { text: "Every day", value: RepeatTypeEnum.EveryDay },
          { text: "Every week", value: RepeatTypeEnum.EveryWeek },
          { text: "Every month", value: RepeatTypeEnum.EveryMonth },
          { text: "Every year", value: RepeatTypeEnum.EveryYear },
        ]}
      />
    </SafeAreaProvider>
  );
});
