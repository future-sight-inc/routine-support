import "@testing-library/jest-dom";
import { useEffect } from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../../components/AppWrapper";
import { ConfirmationModalLocators } from "../../components/ConfirmationModal/locators";
import { ConfirmationProvider } from "./ConfirmationProvider";
import { useConfirm } from "./hooks";

afterEach(cleanup);

const ComponentWithConfirmation: React.FC<{
  title: string;
  description?: string;
  confirmButtonText?: string;
  onConfirm: () => void;
}> = ({ title, description, confirmButtonText, onConfirm }) => {
  const { confirm } = useConfirm();

  useEffect(() => {
    confirm({ title, description, confirmButtonText, onConfirm });
  }, []);

  return null;
};

describe("ConfirmationProvider", () => {
  it("Opens modal", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation title="" onConfirm={() => null} />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();
  });

  it("Opens and closes modal", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation title="" onConfirm={() => null} />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();

    await userEvent.click(getByTestId(ConfirmationModalLocators.CancelButton));

    expect(queryByTestId(ConfirmationModalLocators.ModalContent)).toBeFalsy();
  });

  it("Shows proper title without description and default button text", () => {
    const TITLE = "Title";
    const DEFAULT_BUTTON_TEXT = "Confirm";
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation title={TITLE} onConfirm={() => null} />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();
    expect(getByTestId(ConfirmationModalLocators.Title)).toHaveTextContent(TITLE);
    expect(queryByTestId(ConfirmationModalLocators.Description)).toBeFalsy();
    expect(queryByTestId(ConfirmationModalLocators.ConfirmButton)).toHaveTextContent(
      DEFAULT_BUTTON_TEXT
    );
  });

  it("Shows proper description", () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation
            title={TITLE}
            description={DESCRIPTION}
            onConfirm={() => null}
          />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();
    expect(getByTestId(ConfirmationModalLocators.Description)).toHaveTextContent(DESCRIPTION);
  });

  it("Shows proper confirm button text", () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const CONFIRM_BUTTON_TEXT = "Confirm button text";
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation
            title={TITLE}
            description={DESCRIPTION}
            confirmButtonText={CONFIRM_BUTTON_TEXT}
            onConfirm={() => null}
          />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();
    expect(getByTestId(ConfirmationModalLocators.ConfirmButton)).toHaveTextContent(
      CONFIRM_BUTTON_TEXT
    );
  });

  it("Calls confirm function", async () => {
    const TITLE = "Title";
    const DESCRIPTION = "Description";
    const handleConfirm = () => {
      console.log();
    };
    const logSpy = jest.spyOn(console, "log");
    const { getByTestId } = render(
      <AppWrapper>
        <ConfirmationProvider>
          <ComponentWithConfirmation
            title={TITLE}
            description={DESCRIPTION}
            onConfirm={handleConfirm}
          />
        </ConfirmationProvider>
      </AppWrapper>
    );

    expect(getByTestId(ConfirmationModalLocators.ModalContent)).toBeVisible();

    await userEvent.click(getByTestId(ConfirmationModalLocators.ConfirmButton));

    expect(logSpy).toBeCalledTimes(1);
  });
});
