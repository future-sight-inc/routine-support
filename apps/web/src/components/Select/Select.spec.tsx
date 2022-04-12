import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { SelectLocators } from "./locators";
import { Select } from "./Select";

afterEach(cleanup);

const OPTIONS = [
  { text: "Option1", value: 0 },
  { text: "Option2", value: 1 },
  { text: "Option3", value: 2 },
];

describe("Select", () => {
  it("Should display down icon", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(SelectLocators.IconDown)).toBeVisible();
  });

  it("Should display up icon", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={() => null} />
      </AppWrapper>
    );

    await useEvent.click(getByTestId(SelectLocators.TextField));

    expect(getByTestId(SelectLocators.IconUp)).toBeVisible();
  });

  it("Contain proper value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Select
          options={OPTIONS}
          onChange={() => null}
          value={OPTIONS[0].value}
        />
      </AppWrapper>
    );

    expect(getByTestId(SelectLocators.TextField)).toHaveValue(OPTIONS[0].text);

    await useEvent.click(getByTestId(SelectLocators.TextField));

    expect(getByTestId(SelectLocators.SelectedOption)).toHaveTextContent(
      OPTIONS[0].text
    );
  });

  it("Contain proper options", async () => {
    const { getByTestId, getByText } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={() => null} value={0} />
      </AppWrapper>
    );

    await useEvent.click(getByTestId(SelectLocators.TextField));

    expect(getByText(OPTIONS[0].text)).toBeVisible();
    expect(getByText(OPTIONS[1].text)).toBeVisible();
    expect(getByText(OPTIONS[2].text)).toBeVisible();
  });

  it("Open select, close select", async () => {
    const { getByTestId, queryByTestId } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={() => null} value={0} />
      </AppWrapper>
    );

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();

    await useEvent.click(getByTestId(SelectLocators.TextField));

    expect(getByTestId(SelectLocators.Menu)).toBeVisible();

    await useEvent.click(getByTestId(SelectLocators.Overlay));

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();
  });

  it("Open select, select value", async () => {
    const { getByTestId, queryByTestId, getByText } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();

    await useEvent.click(getByTestId(SelectLocators.TextField));

    await useEvent.click(getByText(OPTIONS[1].text));

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();

    expect(getByTestId(SelectLocators.TextField)).toHaveValue(OPTIONS[1].text);
  });

  it("Pass proper value into callback", async () => {
    let value = undefined;

    const changeValue = (newValue) => {
      value = newValue;
    };

    const { getByTestId, queryByTestId, getByText } = render(
      <AppWrapper>
        <Select options={OPTIONS} onChange={changeValue} />
      </AppWrapper>
    );

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();

    await useEvent.click(getByTestId(SelectLocators.TextField));

    await useEvent.click(getByText(OPTIONS[1].text));

    expect(value).toBe(OPTIONS[1].value);

    expect(queryByTestId(SelectLocators.Menu)).toBeFalsy();

    expect(getByTestId(SelectLocators.TextField)).toHaveValue(OPTIONS[1].text);
  });
});
