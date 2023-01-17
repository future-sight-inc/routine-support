import React from "react";

import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
  getActivityStatusesFromStudents,
} from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { Activity } from "./Activity";
import { ActivityLocators } from "./locators";

jest.mock("../../../../../theme/");

describe("Activity", () => {
  const activity = createMockActivity();
  const student = createMockStudent();

  addStudentToActivity(activity, student);

  const handleActivityPress = jest.fn();
  const handleConfirmationStatusPress = jest.fn();

  it("Has proper name", () => {
    const { getByTestId } = render(
      <Activity
        activity={activity}
        students={[student]}
        onActivityPress={handleActivityPress}
        onConfirmationStatusPress={handleConfirmationStatusPress}
      />
    );

    expect(getByTestId(ActivityLocators.Name)).toHaveTextContent(activity.name);
  });

  it("Has proper status", () => {
    const { getByTestId } = render(
      <Activity
        activity={activity}
        students={[student]}
        onActivityPress={handleActivityPress}
        onConfirmationStatusPress={handleConfirmationStatusPress}
      />
    );

    const { confirmedStudents, assignedStudents } = getActivityStatusesFromStudents(activity, [
      student,
    ]);

    expect(getByTestId(ActivityLocators.Status)).toHaveTextContent(
      `${confirmedStudents.length}/${assignedStudents.length}`
    );
  });

  it("Calls on activity press", () => {
    const { getByTestId } = render(
      <Activity
        activity={activity}
        students={[student]}
        onActivityPress={handleActivityPress}
        onConfirmationStatusPress={handleConfirmationStatusPress}
      />
    );

    fireEvent.press(getByTestId(ActivityLocators.Name));

    expect(handleActivityPress).toBeCalled();
  });

  it("Calls on confirmation status press", () => {
    const { getByTestId } = render(
      <Activity
        activity={activity}
        students={[student]}
        onActivityPress={handleActivityPress}
        onConfirmationStatusPress={handleConfirmationStatusPress}
      />
    );

    fireEvent.press(getByTestId(ActivityLocators.Status));

    expect(handleConfirmationStatusPress).toBeCalled();
  });
});
