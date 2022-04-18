import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { ModalLocators } from "../Modal/locators";
import { createPictogramDataTestId, PictogramPickerLocators } from "./locators";
import { PictogramPicker } from "./PictogramPicker";
import pictogramsInfo from "./pictograms_info.json";

const SELECTED = pictogramsInfo.pictograms[0];

afterEach(cleanup);

describe("PictogramPicker", () => {
  it("Without value", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <PictogramPicker onChange={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(PictogramPickerLocators.OpenButton)).toBeVisible();
    expect(queryByTestId(PictogramPickerLocators.EditButton)).toBeFalsy();
  });

  it("With value", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <PictogramPicker value={SELECTED.url} onChange={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(PictogramPickerLocators.OpenButton)).toBeFalsy();
    expect(queryByTestId(PictogramPickerLocators.EditButton)).toBeVisible();
  });

  it("Open modal, close modal without value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <PictogramPicker onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(PictogramPickerLocators.OpenButton)).toBeVisible();
    await userEvent.click(getByTestId(PictogramPickerLocators.OpenButton));

    expect(getByTestId(PictogramPickerLocators.ModalContent)).toBeVisible();
    await userEvent.click(getByTestId(ModalLocators.CloseIcon));

    expect(getByTestId(PictogramPickerLocators.OpenButton)).toBeVisible();
  });

  it("Open modal, close modal with value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <PictogramPicker value={SELECTED.url} onChange={() => null} />
      </AppWrapper>
    );
    const activePictogramId = createPictogramDataTestId({
      name: SELECTED.en,
      isActive: true,
    });

    expect(getByTestId(PictogramPickerLocators.EditButton)).toBeVisible();
    await userEvent.click(getByTestId(PictogramPickerLocators.EditButton));

    expect(getByTestId(PictogramPickerLocators.ModalContent)).toBeVisible();

    expect(getByTestId(activePictogramId)).toBeVisible();

    await userEvent.click(getByTestId(ModalLocators.CloseIcon));

    expect(getByTestId(PictogramPickerLocators.EditButton)).toBeVisible();
  });

  it("Open modal, choose value, open and check", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <PictogramPicker onChange={() => null} />
      </AppWrapper>
    );
    const pictogramToClickId = createPictogramDataTestId({ name: SELECTED.en });
    const activePictogramId = createPictogramDataTestId({
      name: SELECTED.en,
      isActive: true,
    });

    expect(getByTestId(PictogramPickerLocators.OpenButton)).toBeVisible();
    await userEvent.click(getByTestId(PictogramPickerLocators.OpenButton));

    expect(getByTestId(PictogramPickerLocators.ModalContent)).toBeVisible();

    await userEvent.click(getByTestId(pictogramToClickId));

    expect(getByTestId(PictogramPickerLocators.EditButton)).toBeVisible();
    await userEvent.click(getByTestId(PictogramPickerLocators.EditButton));

    expect(getByTestId(activePictogramId)).toBeVisible();
  });
});
