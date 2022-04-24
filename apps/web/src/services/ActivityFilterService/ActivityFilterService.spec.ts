import { createMockStudent } from "@routine-support/test-utils";

import { ActivityFilterService } from "./ActivityFilterService";

beforeEach(ActivityFilterService.clearFilter);

describe("ActivityFilterService", () => {
  it("Get filter. Empty", () => {
    expect(ActivityFilterService.getFilter()).toStrictEqual({});
  });

  it("Get filter. Has value", () => {
    localStorage.setItem("filter", JSON.stringify({ common: true }));
    expect(ActivityFilterService.getFilter()).toStrictEqual({ common: true });
  });

  it("Set filter. Common filter", () => {
    ActivityFilterService.setFilter({ common: true });
    expect(ActivityFilterService.getFilter()).toStrictEqual({ common: true });
  });

  it("Add property. Common filter", () => {
    ActivityFilterService.addProperty("common");

    expect(ActivityFilterService.getFilter()).toStrictEqual({ common: true });
  });

  it("Add property. Common filter with two students", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    ActivityFilterService.addProperty("common");
    ActivityFilterService.addProperty(student1._id);
    ActivityFilterService.addProperty(student2._id);

    expect(ActivityFilterService.getFilter()).toStrictEqual({
      common: true,
      [student1._id]: true,
      [student2._id]: true,
    });
  });

  it("Remove property. No one left", () => {
    ActivityFilterService.addProperty("common");
    ActivityFilterService.removeProperty("common");

    expect(ActivityFilterService.getFilter()).toStrictEqual({});
  });
});
