import { PathEnum } from "./types";

export const LinkService = {
  coach: {
    createPath: (path: PathEnum) => `/coach${path}`,
    login: () => LinkService.coach.createPath(PathEnum.Login),
    register: () => LinkService.coach.createPath(PathEnum.Register),
    day: () => LinkService.coach.createPath(PathEnum.Day),
    students: () => LinkService.coach.createPath(PathEnum.Students),
    notifications: () => LinkService.coach.createPath(PathEnum.Notifications),
    profile: () => LinkService.coach.createPath(PathEnum.Profile),
  },
  student: {
    createPath: (path: PathEnum) => `/student${path}`,
    login: () => LinkService.student.createPath(PathEnum.Login),
    register: () => LinkService.student.createPath(PathEnum.Register),
    day: () => LinkService.student.createPath(PathEnum.Day),
  },
};
