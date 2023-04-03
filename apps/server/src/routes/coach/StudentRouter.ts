import { Student, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { Response, Router } from "express";
import { ActivityModel } from "../../db/models/Activity";
import { StudentModel } from "../../db/models/Student";
import { emitToUser } from "../../main";
import { coachAuthorization } from "../../middleware/coachAuthorization";

export const studentRouter = Router();

studentRouter.post("/", coachAuthorization, async (req, res: Response<Student>) => {
  StudentModel.create({ ...req.body, coachId: res.locals.coach._id }, (err, result) => {
    if (err) {
      console.log(err);

      return;
    }

    return res.status(200).send(result);
  });
});

studentRouter.delete("/:id", async (req, res) => {
  const studentId = req.params.id;

  await StudentModel.findByIdAndDelete(studentId);

  const studentsActivities = await ActivityModel.find({
    students: { $in: [studentId] },
  }).lean({ getters: true });

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

studentRouter.put("/:id", async (req, res) => {
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

studentRouter.get("/coach/:id", coachAuthorization, (req, res) => {
  StudentModel.find({ coachId: req.params.id }, (err, result) => {
    if (err) {
      return res.status(401).send(err);
    }

    return res.status(200).send(result);
  });
});
