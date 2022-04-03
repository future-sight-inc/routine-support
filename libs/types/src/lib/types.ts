export type Id = string;

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

export interface FormError {
  message: string;
  type: string;
}

export interface SubmitErrorData {
  isValid: boolean;
  errors?: { [key: string]: FormError };
  error?: string;
}

export enum LanguageEnum {
  En = "en",
  Nl = "nl",
  Ru = "ru",
}
