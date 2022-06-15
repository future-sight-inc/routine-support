import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";

import { AppWrapper } from "../AppWrapper";
import { Option } from "../Select";
import { createOptionDataTestId, MenuLocators } from "./locators";
import { Menu } from "./Menu";

afterEach(cleanup);

const OPTION1: Option = { text: "123", value: 123 };
const OPTION2: Option = { text: "456", value: 456 };

describe("Menu", () => {
  it("Should be closed", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <Menu
          isOpened={false}
          options={[]}
          onClose={() => null}
          onSelect={() => null}
        >
          Anchor element
        </Menu>
      </AppWrapper>
    );

    expect(queryByTestId(MenuLocators.Overlay)).toBeFalsy();
    expect(queryByTestId(MenuLocators.MenuWrapper)).toBeFalsy();
  });

  it("Should be opened", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <Menu isOpened options={[]} onClose={() => null} onSelect={() => null}>
          Anchor element
        </Menu>
      </AppWrapper>
    );

    expect(queryByTestId(MenuLocators.Overlay)).toBeTruthy();
    expect(queryByTestId(MenuLocators.MenuWrapper)).toBeTruthy();
  });

  it("Should display empty text", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <Menu isOpened options={[]} onClose={() => null} onSelect={() => null}>
          Anchor element
        </Menu>
      </AppWrapper>
    );

    expect(queryByTestId(MenuLocators.Overlay)).toBeTruthy();
    expect(queryByTestId(MenuLocators.MenuWrapper)).toBeTruthy();
    expect(queryByTestId(MenuLocators.EmptyText)).toBeTruthy();
  });

  it("Should display proper items", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <Menu
          isOpened
          options={[OPTION1, OPTION2]}
          onClose={() => null}
          onSelect={() => null}
        >
          Anchor element
        </Menu>
      </AppWrapper>
    );

    expect(queryByTestId(MenuLocators.Overlay)).toBeTruthy();
    expect(queryByTestId(MenuLocators.MenuWrapper)).toBeTruthy();
    expect(queryByTestId(MenuLocators.EmptyText)).toBeFalsy();

    expect(
      queryByTestId(createOptionDataTestId(OPTION1.value))
    ).toHaveTextContent(OPTION1.text);
    expect(
      queryByTestId(createOptionDataTestId(OPTION2.value))
    ).toHaveTextContent(OPTION2.text);
  });

  it("Should display selected item", () => {
    const { queryByTestId, queryAllByTestId } = render(
      <AppWrapper>
        <Menu
          isOpened
          options={[OPTION1, OPTION2]}
          selected={OPTION1.value}
          onClose={() => null}
          onSelect={() => null}
        >
          Anchor element
        </Menu>
      </AppWrapper>
    );

    expect(queryByTestId(MenuLocators.Overlay)).toBeTruthy();
    expect(queryByTestId(MenuLocators.MenuWrapper)).toBeTruthy();

    expect(queryAllByTestId(MenuLocators.SelectedOption)).toHaveLength(1);
    expect(queryByTestId(MenuLocators.SelectedOption)).toHaveTextContent(
      OPTION1.text
    );
  });
});
