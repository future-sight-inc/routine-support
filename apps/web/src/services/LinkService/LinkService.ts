import { PathEnum } from "./types";

export const LinkService = {
  login: () => PathEnum.Login,
  register: () => PathEnum.Register,
  home: () => PathEnum.Home,
  students: () => PathEnum.Students,
  notifications: () => PathEnum.Notifications,
};
