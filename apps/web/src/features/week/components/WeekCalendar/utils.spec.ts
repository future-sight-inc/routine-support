import moment from "moment";

import { isWeekend } from "./utils";

describe("isWeekend", () => {
  it("Monday", () => {
    const day = moment().day(1);

    expect(isWeekend(day)).toBeFalsy();
  });

  it("Tuesday", () => {
    const day = moment().day(2);

    expect(isWeekend(day)).toBeFalsy();
  });

  it("Wednesday", () => {
    const day = moment().day(3);

    expect(isWeekend(day)).toBeFalsy();
  });

  it("Thursday", () => {
    const day = moment().day(4);

    expect(isWeekend(day)).toBeFalsy();
  });

  it("Friday", () => {
    const day = moment().day(5);

    expect(isWeekend(day)).toBeFalsy();
  });

  it("Saturday", () => {
    const day = moment().day(6);

    expect(isWeekend(day)).toBeTruthy();
  });

  it("Sunday", () => {
    const day = moment().day(0);

    expect(isWeekend(day)).toBeTruthy();
  });
});
