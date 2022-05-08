import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { ConfirmationModal } from "./ConfirmationModal";
import { ConfirmationModalLocators } from "./locators";

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

describe("ConfirmationModal", () => {
  it("Closed modal", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened={false}
          title=""
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationModalLocators.ModalContent)).toBeFalsy();
  });

  it("Opened modal", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title=""
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();
  });

  it("Shows proper title", () => {
    const TITLE = "Title";
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.Title)).toHaveTextContent(
      TITLE
    );
  });

  it("Doesn't have description", () => {
    const TITLE = "Title";
    const { queryByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(queryByTestId(ConfirmationModalLocators.Description)).toBeFalsy();
  });

  it("Shows proper description", () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const { queryByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          description={DESCRIPTION}
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(
      queryByTestId(ConfirmationModalLocators.Description)
    ).toHaveTextContent(DESCRIPTION);
  });

  it("Shows proper confirm button text", () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const CONFIRM_BUTTON_TEXT = "Confirm";
    const { queryByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          description={DESCRIPTION}
          confirmButtonText={CONFIRM_BUTTON_TEXT}
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(
      queryByTestId(ConfirmationModalLocators.ConfirmButton)
    ).toHaveTextContent(CONFIRM_BUTTON_TEXT);
  });

  it("Shows proper passed confirm button text", () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const CONFIRM_BUTTON_TEXT = "Confirm text";
    const { queryByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          description={DESCRIPTION}
          confirmButtonText={CONFIRM_BUTTON_TEXT}
          onConfirm={() => null}
          onClose={() => null}
        />
      </AppWrapper>
    );

    expect(
      queryByTestId(ConfirmationModalLocators.ConfirmButton)
    ).toHaveTextContent(CONFIRM_BUTTON_TEXT);
  });

  it("Calls confirm on click", async () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const CONFIRM_BUTTON_TEXT = "Confirm text";
    const handleConfirm = () => {
      console.log();
    };
    const logSpy = jest.spyOn(console, "log");
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          description={DESCRIPTION}
          confirmButtonText={CONFIRM_BUTTON_TEXT}
          onConfirm={handleConfirm}
          onClose={() => null}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(ConfirmationModalLocators.ConfirmButton));

    expect(logSpy).toBeCalledTimes(1);
  });

  it("Calls cancel on click", async () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const CONFIRM_BUTTON_TEXT = "Confirm text";
    const handleCancel = () => {
      console.log();
    };
    const logSpy = jest.spyOn(console, "log");
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationModal
          isOpened
          title={TITLE}
          description={DESCRIPTION}
          confirmButtonText={CONFIRM_BUTTON_TEXT}
          onConfirm={() => null}
          onClose={handleCancel}
        />
      </AppWrapper>
    );

    await userEvent.click(getByTestId(ConfirmationModalLocators.CancelButton));

    expect(logSpy).toBeCalledTimes(1);
  });
});
