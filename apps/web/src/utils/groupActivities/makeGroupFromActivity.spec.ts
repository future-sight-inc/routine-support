import { createMockActivity } from "../testUtils";
import { makeGroupFromActivity } from "./makeGroupFromActivity";

describe("makeGroupFromActivity", () => {
  it("Group should be made of activity", () => {
    const activity = createMockActivity();
    const group = makeGroupFromActivity(activity);

    expect(group.start).toStrictEqual(activity.start);
    expect(group.end).toStrictEqual(activity.end);
    expect(group.activities).toContain(activity);
  });
});
