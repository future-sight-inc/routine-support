import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { StudentController } from "./StudentController";
import { emitToUser } from "../main";
import { SocketUserTypeEnum } from "@routine-support/types";

export const EmitController = {
  emitToAllCoachStudents: async (coachId: string, eventType: WeekSocketEventTypeEnum) => {
    const coachStudents = await StudentController.getAllByCoachId(coachId);

    coachStudents.forEach(
      (student) =>
        emitToUser({
          userId: student._id,
          userType: SocketUserTypeEnum.Student,
          message: {
            type: eventType,
          },
        }) // todo Это не окей, имеет смысл переделать через класс и использовать экземпляр
    );
  },
};
