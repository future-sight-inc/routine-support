import { Theme } from "@routine-support/ui-theme";
import { mapThemeToMobile } from "./mapThemeToMobile";
import { MobileTheme } from "./mapThemeToMobile.mock";

describe("mapThemeToMobile", () => {
  it("Should map theme", () => {
    expect(mapThemeToMobile(Theme)).toStrictEqual(MobileTheme);
  });
});
