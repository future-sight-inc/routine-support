import "@testing-library/jest-dom";
import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "apps/web/src/components/AppWrapper";

import {
  createDeleteIconDataTestId,
  createOptionDataTestId,
  createStudentDataTestId,
  StudentsPickerLocators,
} from "./locators";
import { StudentsPicker } from "./StudentsPicker";

const STUDENT1 = createMockStudent({ name: "Masha" });
const STUDENT2 = createMockStudent({ name: "Misha" });
const STUDENT3 = createMockStudent({ name: "Nikita" });
const STUDENT4 = createMockStudent({ name: "Pasha" });
const STUDENTS = [STUDENT1, STUDENT2, STUDENT3, STUDENT4];
const NO_MATCHES_FILTER = "Boris";
const ONE_MATCH_FILTER = "Nikita";
const ONE_MATCH_FILTER_IGNORE_REGISTER = "nik";
const TWO_MATCHES_FILTER = "M";

afterEach(cleanup);

describe("StudentsPicker", () => {
  it("Should not display menu", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <StudentsPicker students={STUDENTS} onChange={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(StudentsPickerLocators.Menu)).toBeFalsy();
  });

  it("Click on field, close menu", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <StudentsPicker students={STUDENTS} onChange={() => null} />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));

    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    expect(getByTestId(StudentsPickerLocators.Overlay)).toBeInTheDocument();
    await userEvent.click(getByTestId(StudentsPickerLocators.Overlay));

    expect(queryByTestId(StudentsPickerLocators.Menu)).not.toBeInTheDocument();
  });

  it("Click on field, type, close, open field again", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker students={STUDENTS} onChange={() => null} />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));
    expect(getByTestId(StudentsPickerLocators.SearchField)).toBeVisible();
    await userEvent.type(
      getByTestId(StudentsPickerLocators.SearchField),
      "123"
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.Overlay));
    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));

    expect(
      getByTestId(StudentsPickerLocators.SearchField).getAttribute("value")
    ).toBeFalsy();
  });

  it("Click on open text, close menu", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <StudentsPicker students={STUDENTS} onChange={() => null} />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.OpenText));

    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    expect(getByTestId(StudentsPickerLocators.Overlay)).toBeInTheDocument();
    await userEvent.click(getByTestId(StudentsPickerLocators.Overlay));

    expect(queryByTestId(StudentsPickerLocators.Menu)).not.toBeInTheDocument();
  });

  it("Click on field, choose student", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <StudentsPicker students={STUDENTS} onChange={() => null} />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));

    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();

    const studentOption = getByTestId(createOptionDataTestId(STUDENT1));

    expect(studentOption).toBeInTheDocument();
    await userEvent.click(studentOption);

    expect(queryByTestId(StudentsPickerLocators.Menu)).not.toBeInTheDocument();
    expect(getByTestId(createStudentDataTestId(STUDENT1))).toBeVisible();
  });

  it("Show value in selected", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={STUDENTS}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    const getStudent = () => getByTestId(createStudentDataTestId(STUDENT1));

    expect(getStudent()).toBeVisible();
    expect(getStudent()).toHaveTextContent(STUDENT1.name);
  });

  it("Delete value", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={STUDENTS}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    const getStudent = () => queryByTestId(createStudentDataTestId(STUDENT1));
    const deleteIcon = getByTestId(createDeleteIconDataTestId(STUDENT1));

    expect(getStudent()).toBeVisible();
    expect(deleteIcon).toBeVisible();
    await userEvent.click(deleteIcon);

    expect(getStudent()).toBeFalsy();
  });

  it("No one to choose", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={[STUDENT1]}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));

    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    expect(getByTestId(StudentsPickerLocators.EmptyText)).toBeVisible();
  });

  it("Filter with one match", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={[STUDENT1]}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));
    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    await userEvent.type(
      getByTestId(StudentsPickerLocators.SearchField),
      ONE_MATCH_FILTER
    );

    waitFor(() =>
      expect(getByTestId(createOptionDataTestId(STUDENT3))).toBeVisible()
    );
  });

  it("Filter with one match (ignore register)", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={[STUDENT1]}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));
    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    await userEvent.type(
      getByTestId(StudentsPickerLocators.SearchField),
      ONE_MATCH_FILTER_IGNORE_REGISTER
    );

    waitFor(() =>
      expect(getByTestId(createOptionDataTestId(STUDENT3))).toBeVisible()
    );
  });

  it("Filter with one match", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={[STUDENT1]}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));
    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    await userEvent.type(
      getByTestId(StudentsPickerLocators.SearchField),
      TWO_MATCHES_FILTER
    );

    waitFor(() =>
      expect(getByTestId(createOptionDataTestId(STUDENT1))).toBeVisible()
    );
    waitFor(() =>
      expect(getByTestId(createOptionDataTestId(STUDENT2))).toBeVisible()
    );
  });

  it("Filter with no matches", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <StudentsPicker
          students={[STUDENT1]}
          value={[STUDENT1._id]}
          onChange={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(StudentsPickerLocators.FieldWrapper));
    await userEvent.type(
      getByTestId(StudentsPickerLocators.SearchField),
      NO_MATCHES_FILTER
    );

    expect(getByTestId(StudentsPickerLocators.Menu)).toBeVisible();
    expect(getByTestId(StudentsPickerLocators.EmptyText)).toBeVisible();
  });
});
