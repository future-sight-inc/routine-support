import { createMockNotification, createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Notification } from "./Notification";

storiesOf("Coach/Notifications", module).add("Notification", () => {
  const notification = createMockNotification();
  const student = createMockStudent();

  return <Notification notification={notification} students={[student]} />;
});
