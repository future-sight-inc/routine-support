import { stringifyTime } from "./stringifyTime";

describe("stringifyTime", () => {
  it("should return a string in the correct format", () => {
    const time = new Date("January 26, 2011 13:51:50");

    expect(stringifyTime(time)).toEqual("13:51");
  });
});
