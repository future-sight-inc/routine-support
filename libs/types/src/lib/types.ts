export type TimeRange = string[];

export type Pictogram = {
  url: string;
  en: string;
  nl: string;
  ru: string;
};

export type AuthQrCodeData = {
  token: string;
};

export type AuthQrCode = {
  data: AuthQrCodeData;
};

export enum LanguageEnum {
  En = "en",
  Nl = "nl",
  Ru = "ru",
}

export enum SocketUserTypeEnum {
  Coach = "coach",
  Student = "student",
}

export type Option = {
  value: string | number;
  text: string;
  color?: string;
};

export interface FormError {
  name: string;
  message: string;
}

export interface SubmitErrorData {
  isValid: boolean;
  errors?: FormError[];
  error?: string;
}
