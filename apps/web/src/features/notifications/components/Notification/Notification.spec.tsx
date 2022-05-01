import "@testing-library/jest-dom";
import React from "react";

import {
  addStudentToActivity,
  createMockActivity,
  createMockNotification,
  createMockStudent,
} from "@routine-support/test-utils";
import { stringifyTime } from "@routine-support/utils";
import { cleanup, render } from "@testing-library/react";
import { AppWrapper } from "apps/web/src/components/AppWrapper";
import "intersection-observer";

import {
  createStudentBadgeDataTestId,
  NotificationLocatorsEnum,
} from "./locators";
import { Notification } from "./Notification";

afterEach(cleanup);

describe("Notification", () => {
  it("Initial state", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();
    const notification = createMockNotification({
      activity,
    });

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { getByTestId } = render(
      <AppWrapper>
        <Notification
          activity={activity}
          students={[student1, student2]}
          isViewed={notification.isViewed}
          onDelete={() => null}
          onView={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(NotificationLocatorsEnum.NotViewedBadge)).toBeVisible();
    expect(
      getByTestId(NotificationLocatorsEnum.ActivityName)
    ).toHaveTextContent(activity.name);
    expect(
      getByTestId(NotificationLocatorsEnum.ActivityTime)
    ).toHaveTextContent(
      `${stringifyTime(activity.start)} - ${stringifyTime(activity.end)}`
    );
    expect(getByTestId(createStudentBadgeDataTestId(student1))).toBeVisible();
    expect(getByTestId(createStudentBadgeDataTestId(student2))).toBeVisible();
  });

  it("Viewed notification", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();
    const notification = createMockNotification({
      isViewed: true,
      activity,
    });

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <Notification
          activity={activity}
          students={[student1, student2]}
          isViewed={notification.isViewed}
          onDelete={() => null}
          onView={() => null}
        />
      </AppWrapper>
    );

    expect(queryByTestId(NotificationLocatorsEnum.NotViewedBadge)).toBeFalsy();
    expect(
      getByTestId(NotificationLocatorsEnum.ActivityName)
    ).toHaveTextContent(activity.name);
    expect(
      getByTestId(NotificationLocatorsEnum.ActivityTime)
    ).toHaveTextContent(
      `${stringifyTime(activity.start)} - ${stringifyTime(activity.end)}`
    );
    expect(getByTestId(createStudentBadgeDataTestId(student1))).toBeVisible();
    expect(getByTestId(createStudentBadgeDataTestId(student2))).toBeVisible();
  });

  it("No pending students", () => {
    const activity = createMockActivity();
    const notification = createMockNotification({
      activity,
    });

    const { queryByTestId } = render(
      <AppWrapper>
        <Notification
          activity={activity}
          students={[]}
          isViewed={notification.isViewed}
          onDelete={() => null}
          onView={() => null}
        />
      </AppWrapper>
    );

    expect(queryByTestId(NotificationLocatorsEnum.Wrapper)).toBeFalsy();
  });
});
