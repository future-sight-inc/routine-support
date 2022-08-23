import React from "react";

import { createMockStudent, RepeatTypeEnum } from "@routine-support/domains";
import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ActivityModal } from "./ActivityModal";

storiesOf("Coach/Day", module).add("ActivityModal", () => {
  const student1 = createMockStudent();
  const student2 = createMockStudent();
  const student3 = createMockStudent();
  const { control } = useForm();

  return (
    <SafeAreaProvider>
      <ActivityModal
        isEdit={false}
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
        isStudentsSelectorVisible
        students={[student1, student2, student3]}
        onSubmit={() => null}
        control={control}
      />
    </SafeAreaProvider>
  );
});
