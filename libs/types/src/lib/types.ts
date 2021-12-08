export type Id = string | number;

export type DateString = string;
export type TimeString = string;
export type TimeRange = TimeString[];

export type ImageUrl = string;

export type Pictogram = {
  url: ImageUrl;
  en: string;
  nl: string;
  ru: string;
};

export type Email = string;
export type Password = string;

export type AuthQrCodeData = {
  token: string;
};

export type AuthQrCode = {
  data: AuthQrCodeData;
};
