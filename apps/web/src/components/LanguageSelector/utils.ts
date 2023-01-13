export const getLocaleFromDetector = (localeString: string) => {
  return localeString.split("-")[0];
};
