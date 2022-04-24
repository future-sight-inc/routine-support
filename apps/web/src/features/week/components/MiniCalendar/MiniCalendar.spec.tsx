import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "apps/web/src/components/AppWrapper";
import moment from "moment";

import { MiniCalendarLocators } from "./locators";
import { MiniCalendar } from "./MiniCalendar";

const DATE_STANDARD = moment("2022-04-15");
const DATE_WEEK_BETWEEN_MONTHS = moment("2022-06-02");
const DATE_WEEK_BETWEEN_YEARS = moment("2021-01-01");

afterEach(cleanup);

describe("MiniCalendar", () => {
  it("Init: April 2022", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Apr 2022"
    );

    // expect displayed weeks to be weeks 13-17 of 2022
    // expect to have exactly one active week
    // expect active week to be week 15 of 2022
    // expect day numbers in active week to be [11 .. 17]
  });

  it("Init: April 2022, click next month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Apr 2022"
    );

    // expect displayed weeks to be weeks 13-17 of 2022
    // expect to have exactly one active week
    // expect active week to be week 15 of 2022
    // expect day numbers in active week to be [11 .. 17]

    await userEvent.click(getByTestId(MiniCalendarLocators.NextMonthButton));
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "May 2022"
    );

    // expect displayed weeks to be weeks 17-22 of 2022
    // expect to have no active weeks
  });

  it("Init: April 2022, click prev month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Apr 2022"
    );

    // expect displayed weeks to be weeks 13-17 of 2022
    // expect to have exactly one active week
    // expect active week to be week 15 of 2022
    // expect day numbers in active week to be [11 .. 17]

    await userEvent.click(
      getByTestId(MiniCalendarLocators.PreviousMonthButton)
    );
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Mar 2022"
    );

    // expect displayed weeks to be weeks 09-13 of 2022
    // expect to have no active weeks
  });

  it("Init: June 2022", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jun 2022"
    );

    expect(getByTestId(MiniCalendarLocators.ActiveWeek)).toBeTruthy();

    // expect displayed weeks to be weeks 22-26 of 2022
    // expect to have exactly one active week
    // expect active week to be week 22 of 2022
    // expect day numbers in active week to be [30, 31, 1 .. 5]
  });

  it("Init: June 2022, click next month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jun 2022"
    );

    // expect displayed weeks to be weeks 22-26 of 2022
    // expect to have exactly one active week
    // expect active week to be week 22 of 2022
    // expect day numbers in active week to be [30, 31, 1 .. 5]

    await userEvent.click(getByTestId(MiniCalendarLocators.NextMonthButton));
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jul 2022"
    );

    // expect displayed weeks to be weeks 26-30 of 2022
    // expect to have no active weeks
  });

  it("Init: June 2022, click prev month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jun 2022"
    );

    // expect displayed weeks to be weeks 22-26 of 2022
    // expect to have exactly one active week
    // expect active week to be week 22 of 2022
    // expect day numbers in active week to be [30, 31, 1 .. 5]

    await userEvent.click(
      getByTestId(MiniCalendarLocators.PreviousMonthButton)
    );
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "May 2022"
    );

    // expect displayed weeks to be weeks 17-22 of 2022
    // expect to have no active weeks
  });

  it("Init: January 2021", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jan 2021"
    );

    // expect displayed weeks to be weeks 53 of 2020 - 04 of 2021
    // expect to have exactly one active week
    // expect active week to be week 0?? of 2021 or week 53 of 2020
    // expect day numbers in active week to be [28, 29, 30, 31, 1, 2, 3]
  });

  it("Init: January 2021, click next month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jan 2021"
    );

    // expect displayed weeks to be weeks 53 of 2020 - 04 of 2021
    // expect to have exactly one active week
    // expect active week to be week 0?? of 2021 or week 53 of 2020
    // expect day numbers in active week to be [28, 29, 30, 31, 1, 2, 3]

    await userEvent.click(getByTestId(MiniCalendarLocators.NextMonthButton));
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Feb 2021"
    );

    // expect displayed weeks to be weeks 5-8 of 2020
    // expect to have no active weeks
  });

  it("Init: January 2021, click prev month", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Jan 2021"
    );

    // expect displayed weeks to be weeks 53 of 2020 - 04 of 2021
    // expect to have exactly one active week
    // expect active week to be week 0?? of 2021 or week 53 of 2020
    // expect day numbers in active week to be [28, 29, 30, 31, 1, 2, 3]

    await userEvent.click(
      getByTestId(MiniCalendarLocators.PreviousMonthButton)
    );
    expect(getByTestId(MiniCalendarLocators.CurrentMonth)).toHaveTextContent(
      "Dec 2020"
    );

    // expect displayed weeks to be weeks 49-53 of 2020
    // expect to have no active weeks
  });
});
