import "@testing-library/jest-dom";
import React from "react";

import {
  cleanup,
  getByTestId,
  queryAllByTestId,
  queryByTestId,
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "apps/web/src/components/AppWrapper";
import moment from "moment";

import { MiniCalendarLocators } from "./locators";
import { MiniCalendar } from "./MiniCalendar";
import {
  DATE_SHORT_MONTH,
  DATE_STANDARD,
  DATE_WEEK_BETWEEN_MONTHS_BEGIN,
  DATE_WEEK_BETWEEN_MONTHS_END,
  DATE_WEEK_BETWEEN_YEARS_BEGIN,
  DATE_WEEK_BETWEEN_YEARS_END,
} from "./mocks";

afterEach(cleanup);

describe("MiniCalendar", () => {
  it("DATE_STANDARD: February 2022", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-7-2022")).toBeVisible();
  });

  it("DATE_STANDARD: February 2022, click next month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-7-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.NextMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Mar 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_STANDARD: February 2022, click prev month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar currentDate={DATE_STANDARD} onWeekSelect={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-7-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.PreviousMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_WEEK_BETWEEN_MONTHS_BEGIN: February 2022", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-5-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_MONTHS_BEGIN: February 2022, click next month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-5-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.NextMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Mar 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_WEEK_BETWEEN_MONTHS_BEGIN: February 2022, click prev month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-5-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.PreviousMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-5-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_MONTHS_END: February 2022", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-9-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_MONTHS_END: February 2022, click next month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-9-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.NextMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Mar 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-9-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_MONTHS_END: February 2022, click prev month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_MONTHS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-9-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.PreviousMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_WEEK_BETWEEN_YEARS_BEGIN: January 2023", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2023");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_YEARS_BEGIN: January 2023, click next month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2023");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.NextMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2023");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_WEEK_BETWEEN_YEARS_BEGIN: January 2023, click prev month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_BEGIN}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2023");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.PreviousMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Dec 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_YEARS_END: December 2022", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Dec 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_YEARS_END: December 2022, click next month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Dec 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.NextMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Jan 2023");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(6);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();
  });

  it("DATE_WEEK_BETWEEN_YEARS_END: December 2022, click prev month", async () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_WEEK_BETWEEN_YEARS_END}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Dec 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-52-2022")).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.PreviousMonthButton)
    );
    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Nov 2022");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(5);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(0);
  });

  it("DATE_SHORT_MONTH: February 2021", () => {
    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={DATE_SHORT_MONTH}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent("Feb 2021");

    expect(queryAllByTestId(container, /.*Week-.*/)).toHaveLength(4);
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(queryByTestId(container, "ActiveWeek-6-2021")).toBeVisible();
  });

  /* Today button test */

  it("Today button click: already in today", async () => {
    const today = moment();
    const calendarCurrentDate = today.clone();

    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={calendarCurrentDate}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(today.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(container, `ActiveWeek-${today.isoWeek()}-${today.year()}`)
    ).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.TodayButton)
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(calendarCurrentDate.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(
        container,
        `ActiveWeek-${calendarCurrentDate.isoWeek()}-${calendarCurrentDate.year()}`
      )
    ).toBeVisible();
  });

  it("Today button click: today is next month", async () => {
    const today = moment();
    const calendarCurrentDate = today.clone().add(-1, "m");

    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={calendarCurrentDate}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(calendarCurrentDate.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(
        container,
        `ActiveWeek-${calendarCurrentDate.isoWeek()}-${calendarCurrentDate.year()}`
      )
    ).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.TodayButton)
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(today.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(container, `ActiveWeek-${today.isoWeek()}-${today.year()}`)
    ).toBeVisible();
  });

  it("Today button click: today is next year", async () => {
    const today = moment();
    const calendarCurrentDate = today.clone().add(-1, "y");

    const { container } = render(
      <AppWrapper>
        <MiniCalendar
          currentDate={calendarCurrentDate}
          onWeekSelect={() => null}
        />
      </AppWrapper>
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(calendarCurrentDate.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(
        container,
        `ActiveWeek-${calendarCurrentDate.isoWeek()}-${calendarCurrentDate.year()}`
      )
    ).toBeVisible();

    await userEvent.click(
      getByTestId(container, MiniCalendarLocators.TodayButton)
    );

    expect(
      getByTestId(container, MiniCalendarLocators.CurrentMonth)
    ).toHaveTextContent(today.format("MMM YYYY"));
    expect(queryAllByTestId(container, /ActiveWeek-.*/)).toHaveLength(1);
    expect(
      queryByTestId(container, `ActiveWeek-${today.isoWeek()}-${today.year()}`)
    ).toBeVisible();
  });
});
