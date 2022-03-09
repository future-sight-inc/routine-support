import { ActivityModel, StudentModel } from "@routine-support/domains";
import { Router } from "express";
import { authorization } from "../middleware/authorization";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { getAuthCookie } from "../utils/getAuthCookie";
import { getRandomColor } from "../utils/getRandomColor";

export const studentRouter = Router();

studentRouter.post("/", authorization, async (req, res) => {
  StudentModel.create(
    { ...req.body, color: getRandomColor() },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.status(200).send(result);
    }
  );
});

studentRouter.post("/login", (req, res) => {
  StudentModel.findById(req.body.id, (err, result) => {
    if (err || !result) {
      return res.status(401).send(err);
    }

    const cookie = getAuthCookie(result);

    return res.status(200).cookie(cookie.name, cookie.token).send(result);
  });
});

studentRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});

studentRouter.get("/", studentAuthorization, (req, res) => {
  return res.status(200).send(res.locals.student);
});

studentRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  StudentModel.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err);

      return;
    }
  });

  ActivityModel.find({ students: { $in: [id] } }, (__, activities) => {
    activities.forEach(({ _id: activityId, students }) => {
      const filteredStudents = students.filter((studentId) => studentId !== id);

      if (!filteredStudents.length) {
        ActivityModel.findByIdAndDelete(activityId);
      } else {
        ActivityModel.findByIdAndUpdate(activityId, {
          students: filteredStudents.length ? filteredStudents : undefined,
        });
      }
    });
  });

  res.status(200).send("Student deleted");
});

studentRouter.put("/:id", (req, res) => {
  const id = req.params.id;

  StudentModel.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    (err) => {
      if (err) {
        console.log(err);

        return;
      }

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
