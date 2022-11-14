import { MobileThemeType, ThemeType } from "@routine-support/ui-theme";
import { pxToNumber } from "@routine-support/utils";

export const mapThemeToMobile = (theme: ThemeType): MobileThemeType => {
  const mobileTheme = theme as any;

  for (const key in mobileTheme) {
    if (typeof mobileTheme[key] === "object") {
      mapThemeToMobile(mobileTheme[key]);
    }

    if (/^\d+px$/.test(mobileTheme[key])) {
      mobileTheme[key] = pxToNumber(mobileTheme[key]);
    }
  }

  return mobileTheme;
};
