import { StudentModel, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { Router } from "express";
import { STUDENT_LOCALS_NAME } from "../../middleware/studentAuthorization";
import { getAuthCookie } from "../../utils/getAuthCookie";
import { studentAuthorization } from "../../middleware/studentAuthorization";
import { emitToUser } from "../../main";

export const authRouter = Router();

authRouter.post("/", (req, res) => {
  StudentModel.findById(req.body.id, (err, result) => {
    if (err || !result) {
      return res.status(401).send(err);
    }

    const cookie = getAuthCookie(result);

    return res.status(200).cookie(cookie.name, cookie.token).send(result);
  });
});

authRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});

authRouter.get("/", studentAuthorization, (__, res) => {
  return res.status(200).send(res.locals[STUDENT_LOCALS_NAME]);
});

authRouter.put("/:id", async (req, res) => {
  const id = req.params.id;

  await StudentModel.findByIdAndUpdate(id, {
    ...req.body,
  });

  emitToUser({
    userId: id,
    userType: SocketUserTypeEnum.Student,
    message: {
      type: WeekSocketEventTypeEnum.UpdateSettings,
      data: req.body,
    },
  });

  res.sendStatus(200);
});
