import "styled-components";
import { ThemeType } from "@routine-support/ui-theme";

declare module "styled-components" {
  export type DefaultTheme = ThemeType;
}
