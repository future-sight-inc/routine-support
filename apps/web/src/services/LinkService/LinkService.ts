import { Id } from "@routine-support/types";

import { PathEnum } from "./types";

export const LinkService = {
  login: () => PathEnum.Login,
  register: () => PathEnum.Register,
  home: () => PathEnum.Home,
  profile: (id: Id) => `${PathEnum.Profile}/${id}`,
  students: () => PathEnum.Students,
};
