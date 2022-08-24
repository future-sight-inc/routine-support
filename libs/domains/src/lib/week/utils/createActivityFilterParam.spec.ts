import { ActivityFilter } from "../types";
import { createActivityFilterParam } from "./createActivityFilterParam";

describe("createActivityFilterParam", () => {
  it("Filter is empty", () => {
    expect(createActivityFilterParam([])).toBe(undefined);
  });

  it("Filter has one id", () => {
    const filter: ActivityFilter = ["Bill"];

    expect(createActivityFilterParam(filter)).toBe("Bill");
  });
});
