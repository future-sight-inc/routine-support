import { LocaleEnum } from "./types";

const DEFAULT_LOCALE = LocaleEnum.En;
const LOCALES = [LocaleEnum.En, LocaleEnum.Nl, LocaleEnum.Ru];

export const LocaleService = {
  getLocale: (): LocaleEnum => {
    const savedLocale = LocaleService.convertToLocale(
      localStorage.getItem("locale")
    );
    const browserLocale = LocaleService.convertToLocale(navigator.language);

    return savedLocale || browserLocale || DEFAULT_LOCALE;
  },

  setLocale: (locale: LocaleEnum): void => {
    localStorage.setItem("locale", locale);
  },

  isValidLocaleString: (locale: string): boolean => {
    return LOCALES.includes(LocaleEnum[locale as keyof typeof LocaleEnum]);
  },

  convertToLocale: (
    locale: string | null | undefined
  ): LocaleEnum | undefined => {
    if (!locale || !LocaleService.isValidLocaleString(locale)) {
      return undefined;
    }

    return LocaleEnum[locale as keyof typeof LocaleEnum];
  },
};
