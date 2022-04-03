import { ActivityModel, StudentModel } from "@routine-support/domains";
import { Router } from "express";
import { coachAuthorization } from "../middleware/coachAuthorization";
import { STUDENT_LOCALS_NAME, studentAuthorization } from "../middleware/studentAuthorization";
import { getAuthCookie } from "../utils/getAuthCookie";
import { getRandomColor } from "../utils/getRandomColor";

export const studentRouter = Router();

studentRouter.post("/", coachAuthorization, async (req, res) => {
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

studentRouter.get("/", studentAuthorization, (__, res) => {
  return res.status(200).send(res.locals[STUDENT_LOCALS_NAME]);
});

studentRouter.delete("/:id", async (req, res) => {
  const studentId = req.params.id;

  await StudentModel.findByIdAndDelete(studentId);

  const studentsActivities = await ActivityModel.find({
    students: { $in: [studentId] },
  }).lean();

  studentsActivities.forEach(({ _id: activityId, students }) => {
    const filteredStudents = students.filter((id) => id !== studentId);
    const shouldDeleteStudentActivity = !filteredStudents.length;

    if (shouldDeleteStudentActivity) {
      ActivityModel.findByIdAndDelete(activityId);
    } else {
      ActivityModel.findByIdAndUpdate(activityId, {
        students: filteredStudents,
      });
    }
  });

  res.sendStatus(200);
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

      res.sendStatus(200);
    }
  );
});

studentRouter.get("/coach/:id", coachAuthorization, (req, res) => {
  StudentModel.find({ coachId: req.params.id }, (err, result) => {
    if (err) {
      return res.status(401).send(err);
    }

    return res.status(200).send(result);
  });
});
