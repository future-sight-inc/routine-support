import React from "react";

import { createMockActivity, createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react";

import { Notification } from "./Notification";

storiesOf("Notifications", module).add("Notification", () => {
  const activity = createMockActivity({
    pictogram: "https://www.sclera.be/resources/pictos/biljart.png",
    name: "Billiards",
  });
  const student1 = createMockStudent();
  const student2 = createMockStudent();
  const student3 = createMockStudent();
  const student4 = createMockStudent();
  const student5 = createMockStudent();
  const student6 = createMockStudent();
  const student7 = createMockStudent();

  return (
    <Notification
      activity={activity}
      students={[student1, student2, student3, student4, student5, student6, student7]}
      isViewed={false}
      onDelete={() => null}
      onView={() => null}
    />
  );
});
