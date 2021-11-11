import { StudentModel } from "@routine-support/models";
import { Router } from "express";
import { authorization } from "../middleware/authorization";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { getAuthCookie } from "../utils/getAuthCookie";
import { getRandomColor } from "../utils/getRandomColor";

export const studentRouter = Router();

studentRouter.post("/", authorization, async (req, res) => {
  StudentModel.create({ ...req.body, color: getRandomColor() }, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.sendStatus(200);
  });
});

studentRouter.post("/login", async (req, res) => {
  StudentModel.findById(req.body.id, (err, result) => {
    if (err || !result) {
      return res.status(401).send(err);
    }

    const cookie = getAuthCookie(result);
    return res
      .status(200)
      .cookie(cookie.name, cookie.token)
      .send(result);
  });
});

studentRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});

studentRouter.get("/", studentAuthorization, (__, res) => {
  return res.status(200).send(res.locals.student);
});

studentRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  StudentModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    res.status(200).send("Activity deleted");
  });
});

studentRouter.put("/:id", (req, res) => {
  // ! _v - мусор, который летит из бд, починить !
  const { _v, ...data } = req.body;
  const id = req.params.id;

  StudentModel.findByIdAndUpdate(
    id,
    {
      ...data,
    },
    (err) => {
      if (err) return console.log(err);

      res.status(200).send("Activity is updated");
    }
  );
});

studentRouter.get("/coach/:id", authorization, (req, res) => {
  StudentModel.find({ coachId: req.params.id }, (err, result) => {
    if (err) {
      return res.status(401).send(err);
    }

    return res.status(200).send(result);
  });
});
