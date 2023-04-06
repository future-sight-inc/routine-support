import { confirmStudentActivity } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "apps/web/src/components/AppWrapper";
import { ModalLocators } from "apps/web/src/components/Modal/locators";

import { ConfirmationStatus } from "./ConfirmationStatus";
import {
  ConfirmationStatusLocatorsEnum,
  createConfirmedStudentDataTestId,
  createPendingStudentDataTestId,
} from "./locators";

afterEach(cleanup);

describe("ConfirmationStatus", () => {
  it("Unopened, all students pending", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();
    expect(getByTestId(ConfirmationStatusLocatorsEnum.Counter)).toHaveTextContent("0/2");
  });

  it("Unopened, one student pending, one student confirmed", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);
    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();
    expect(getByTestId(ConfirmationStatusLocatorsEnum.Counter)).toHaveTextContent("1/2");
  });

  it("Unopened, all students confirmed", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);
    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });
    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: activity.date,
    });

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();
    expect(getByTestId(ConfirmationStatusLocatorsEnum.Counter)).toHaveTextContent("2/2");
  });

  it("Modal opens and closes", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();

    await userEvent.click(getByTestId(ConfirmationStatusLocatorsEnum.Counter));

    expect(getByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeVisible();

    await userEvent.click(getByTestId(ModalLocators.CloseIcon));

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();
  });

  it("Opened, all students pending", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();

    await userEvent.click(getByTestId(ConfirmationStatusLocatorsEnum.Counter));

    expect(getByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeVisible();

    expect(getByTestId(createPendingStudentDataTestId(student1)));
    expect(getByTestId(createPendingStudentDataTestId(student2)));
  });

  it("Opened, one student pending, one confirmed", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);
    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: activity.date,
    });

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();

    await userEvent.click(getByTestId(ConfirmationStatusLocatorsEnum.Counter));

    expect(getByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeVisible();

    expect(getByTestId(createPendingStudentDataTestId(student1)));
    expect(getByTestId(createConfirmedStudentDataTestId(student2)));
  });

  it("Opened, all students confirmed", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const activity = createMockActivity();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);
    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });
    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: activity.date,
    });

    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationStatus activity={activity} students={[student1, student2]} />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeFalsy();

    await userEvent.click(getByTestId(ConfirmationStatusLocatorsEnum.Counter));

    expect(getByTestId(ConfirmationStatusLocatorsEnum.ModalContent)).toBeVisible();

    expect(queryByTestId(ConfirmationStatusLocatorsEnum.PendingStudentWrapper)).toBeFalsy();
    expect(getByTestId(createConfirmedStudentDataTestId(student1)));
    expect(getByTestId(createConfirmedStudentDataTestId(student2)));
  });
});
