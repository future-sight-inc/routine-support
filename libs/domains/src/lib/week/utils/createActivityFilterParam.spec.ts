import { ActivityFilter } from "../types";
import { createActivityFilterParam } from "./createActivityFilterParam";

describe("createActivityFilterParam", () => {
  it("No filter", () => {
    expect(createActivityFilterParam()).toBe(undefined);
  });

  it("Filter is an empty object", () => {
    expect(createActivityFilterParam({})).toBe(undefined);
  });

  it("Filter has one truthy filter", () => {
    const filter: ActivityFilter = {
      Bill: true,
    };

    expect(createActivityFilterParam(filter)).toBe("Bill");
  });

  it("Filter has one truthy filter", () => {
    const filter: ActivityFilter = {
      Bill: true,
    };

    expect(createActivityFilterParam(filter)).toBe("Bill");
  });

  it("Filter has one falsy filter", () => {
    const filter: ActivityFilter = {
      Bill: false,
    };

    expect(createActivityFilterParam(filter)).toBe(undefined);
  });

  it("Filter has one truthy and one falsy filter", () => {
    const filter: ActivityFilter = {
      Bill: true,
      Joe: false,
    };

    expect(createActivityFilterParam(filter)).toBe("Bill");
  });
});
