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
      <button onClick={handleOpen}>Open modal</button>
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
    const { getByTestId } = render(
      <AppWrapper>
        <Modal isOpened={false} onClose={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(ModalLocators.Container)).not.toBeVisible();
  });

  it("Open by click on button, close by click on close icon", async () => {
    const { container, getByTestId } = render(
      <AppWrapper>
        <ConnectedModal />
      </AppWrapper>
    );

    container.querySelector("button")?.click();
    expect(getByTestId(ModalLocators.Container)).toBeVisible();

    await userEvent.click(getByTestId(ModalLocators.CloseIcon));
    expect(getByTestId(ModalLocators.Container)).not.toBeVisible();
  });

  it("Open by click on button, close by click on background", async () => {
    const { container, getByTestId } = render(
      <AppWrapper>
        <ConnectedModal />
      </AppWrapper>
    );

    container.querySelector("button")?.click();
    expect(getByTestId(ModalLocators.Container)).toBeVisible();

    await userEvent.click(getByTestId(ModalLocators.Container));
    expect(getByTestId(ModalLocators.Container)).not.toBeVisible();
  });
});
