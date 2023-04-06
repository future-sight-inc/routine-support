import { parseDate } from "./parseDate";

describe("parseDate", () => {
  it("should return a date object with the correct format", () => {
    const inputDate = "01.01.2022";
    const expectedOutput = new Date(2022, 0, 1);

    expect(parseDate(inputDate)).toEqual(expectedOutput);
  });
});
