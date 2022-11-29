import "@testing-library/jest-dom";
import React, { useState } from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { ModalLocators } from "./locators";
import { Modal } from "./Modal";

const ConnectedModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <button onClick={handleOpen} data-testid="button">
        Open modal
      </button>
      <Modal isOpened={isOpened} onClose={handleClose} />
    </>
  );
};

afterEach(cleanup);

describe("Modal", () => {
  it("Should be opened", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Modal isOpened onClose={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(ModalLocators.Container)).toBeVisible();
  });

  it("Should be closed", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <Modal isOpened={false} onClose={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(ModalLocators.Container)).toBeFalsy();
  });

  it("Open by click on button, close by click on close icon", async () => {
    const { queryByTestId, getByTestId } = render(
      <AppWrapper>
        <ConnectedModal />
      </AppWrapper>
    );

    await userEvent.click(getByTestId("button"));
    expect(queryByTestId(ModalLocators.Container)).toBeTruthy();

    await userEvent.click(getByTestId(ModalLocators.CloseIcon));
    expect(queryByTestId(ModalLocators.Container)).toBeFalsy();
  });

  it("Open by click on button, close by click on background", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConnectedModal />
      </AppWrapper>
    );

    await userEvent.click(getByTestId("button"));
    expect(queryByTestId(ModalLocators.Container)).toBeTruthy();

    await userEvent.click(getByTestId(ModalLocators.Container));
    expect(queryByTestId(ModalLocators.Container)).toBeFalsy();
  });
});
