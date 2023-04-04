import { Student } from "@routine-support/domains";
import { Response, Router } from "express";
import { AuthNames } from "../../constants/AuthNames";
import { AuthController } from "../../controllers";
import { studentAuthorization } from "../../middleware/studentAuthorization";

export const authRouter = Router();

authRouter.post("/login", async (req, res: Response<Student>) => {
  const { student, cookie } = await AuthController.loginStudent(req.body.id);

  if (student && cookie) {
    return res.status(200).cookie(cookie.name, cookie.token).send(student);
  }

  return res.sendStatus(401);
});

authRouter.get("/logout", (__, res) => {
  return res.clearCookie(`${AuthNames.Student}_access_token`).sendStatus(200);
});

authRouter.get("/", studentAuthorization, (__, res) => {
  return res.status(200).send(res.locals[AuthNames.Student]);
});
