import React from "react";

import {
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { storiesOf } from "@storybook/react";

import { Notification } from "./Notification";

storiesOf("Notifications", module).add("Notification", () => {
  const activity = createMockActivity({ name: "Billiard" });
  const student1 = createMockStudent();
  const student2 = createMockStudent();

  return (
    <Notification
      activity={activity}
      students={[student1, student2]}
      isViewed={false}
      onDelete={() => null}
    />
  );
});
