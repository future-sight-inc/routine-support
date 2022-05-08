import { createMockNotification } from "@routine-support/test-utils";
import { parseDate } from "@routine-support/utils";
import { addNotificationToGroup } from "./addNotificationToGroup";

describe("addNotificationToGroup", () => {
  it("Empty groups", () => {
    const groups = [];
    const notification = createMockNotification();

    addNotificationToGroup(notification, groups);

    expect(groups).toStrictEqual([
      {
        date: notification.date,
        notifications: [notification],
      },
    ]);
  });

  it("One group with the same date", () => {
    const groups = [];
    const notification1 = createMockNotification();
    const notification2 = createMockNotification();

    addNotificationToGroup(notification1, groups);
    addNotificationToGroup(notification2, groups);

    expect(groups).toStrictEqual([
      {
        date: notification1.date,
        notifications: [notification2, notification1],
      },
    ]);
  });

  it("One group with the different dates", () => {
    const groups = [];
    const notification1 = createMockNotification({
      date: parseDate("27.11.1997"),
    });
    const notification2 = createMockNotification({
      date: parseDate("19.06.1999"),
    });

    addNotificationToGroup(notification1, groups);
    addNotificationToGroup(notification2, groups);

    expect(groups).toStrictEqual([
      {
        date: notification1.date,
        notifications: [notification1],
      },
      {
        date: notification2.date,
        notifications: [notification2],
      },
    ]);
  });
});
