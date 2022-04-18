/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/db/mongodb.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION_STRING || "");
const db = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);
db.on("error", console.error.bind(console, "❌ Connection error:"));
db.once("open", () => {
    console.log("Mongo connected 🔌");
});


/***/ }),

/***/ "./apps/server/src/middleware/coachAuthorization.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COACH_LOCALS_NAME": () => (/* binding */ COACH_LOCALS_NAME),
/* harmony export */   "coachAuthorization": () => (/* binding */ coachAuthorization)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/middleware/createAuthorizationMiddleware.ts");


const COACH_LOCALS_NAME = "coach";
const coachAuthorization = (0,_createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__.createAuthorizationMiddleware)(COACH_LOCALS_NAME, _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.CoachModel);


/***/ }),

/***/ "./apps/server/src/middleware/createAuthorizationMiddleware.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAuthorizationMiddleware": () => (/* binding */ createAuthorizationMiddleware)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAuthorizationMiddleware = (authName, model) => (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, process.env.SECRET_KEY || "");
        return model.findById(data._id, (err, result) => {
            if (err || !result) {
                res.clearCookie("access_token");
                return res.status(401).send(err);
            }
            // todo В отдельную функцию
            res.locals[authName] = result;
            res.locals[authName]._id = data._id;
            return next();
        });
    }
    catch (_a) {
        return res.sendStatus(403);
    }
};


/***/ }),

/***/ "./apps/server/src/middleware/studentAuthorization.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STUDENT_LOCALS_NAME": () => (/* binding */ STUDENT_LOCALS_NAME),
/* harmony export */   "studentAuthorization": () => (/* binding */ studentAuthorization)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/middleware/createAuthorizationMiddleware.ts");


const STUDENT_LOCALS_NAME = "student";
const studentAuthorization = (0,_createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__.createAuthorizationMiddleware)(STUDENT_LOCALS_NAME, _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.StudentModel);


/***/ }),

/***/ "./apps/server/src/routes/ActivityRouter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activityRouter": () => (/* binding */ activityRouter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/utils/src/index.ts");
/* harmony import */ var _utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./apps/server/src/utils/validateActivity.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./apps/server/src/middleware/coachAuthorization.ts");








const activityRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();
activityRouter.get("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__.coachAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const activity = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.findById(req.params.id);
    if (activity) {
        res.status(200).send(activity);
    }
    return res.sendStatus(404);
}));
activityRouter.post("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__.coachAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const validationData = yield (0,_utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__.validateActivity)(req.body);
    if (validationData && !validationData.isValid) {
        return res.status(422).send(validationData);
    }
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.create(Object.assign({}, req.body));
    return res.sendStatus(200);
}));
activityRouter.put("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__.coachAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const validationData = yield (0,_utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__.validateActivity)(req.body);
    if (validationData && !validationData.isValid) {
        return res.status(422).send(validationData);
    }
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.findByIdAndUpdate(id, Object.assign({}, req.body));
    return res.sendStatus(200);
}));
activityRouter.delete("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__.coachAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.findByIdAndDelete(id, (err) => {
        if (err)
            return console.log(err);
        return res.sendStatus(200);
    });
}));
activityRouter.put("/confirm/:id/:timestamp", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_3__.studentAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const { id, timestamp } = req.params;
    const { _id: studentId } = res.locals.student;
    const dateString = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_4__.stringifyDate)(moment__WEBPACK_IMPORTED_MODULE_6___default().unix(Number(timestamp)));
    const updatedActivity = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.findById(id);
    // todo resolve type
    if (!updatedActivity.confirmation[dateString]) {
        updatedActivity.confirmation[dateString] = [];
    }
    updatedActivity.confirmation[dateString].push(studentId);
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.ActivityModel.findByIdAndUpdate(id, Object.assign({}, updatedActivity), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.sendStatus(200);
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/CoachRouter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coachRouter": () => (/* binding */ coachRouter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/server/src/utils/getAuthCookie.ts");
/* harmony import */ var _utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./apps/server/src/utils/hashPassword.ts");






const coachRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
coachRouter.post("/", (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const _a = req.body, { password } = _a, data = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["password"]);
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.CoachModel.create(Object.assign(Object.assign({}, data), { password: (0,_utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__.hashPassword)(password) }), (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const cookie = (0,_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__.getAuthCookie)(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
}));
coachRouter.post("/login", (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.CoachModel.findOne({ email, password: (0,_utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__.hashPassword)(password) }, (err, result) => {
        if (err || !result) {
            return res.status(401).send(err);
        }
        const cookie = (0,_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__.getAuthCookie)(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
}));
coachRouter.get("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__.coachAuthorization, (__, res) => {
    return res.status(200).send(res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__.COACH_LOCALS_NAME]);
});
coachRouter.get("/logout", (__, res) => {
    return res.clearCookie("access_token").sendStatus(200);
});


/***/ }),

/***/ "./apps/server/src/routes/DayRouter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayRouter": () => (/* binding */ dayRouter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getDayScheduleActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/utils/getDayScheduleActivities.ts");
/* harmony import */ var _utils_filterActivitiesForStudent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/server/src/utils/filterActivitiesForStudent.ts");





const dayRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
dayRouter.get("/:date", (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const { date } = req.params;
    const studentId = res.locals.student._id;
    const activities = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.find({ date }).lean();
    const studentActivities = (0,_utils_filterActivitiesForStudent__WEBPACK_IMPORTED_MODULE_4__.filterActivitiesForStudent)(activities, {
        _id: studentId,
    });
    const parsedActivities = studentActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createActivityFromSchema);
    const dayScheduleActivities = (0,_utils_getDayScheduleActivities__WEBPACK_IMPORTED_MODULE_3__.getDayScheduleActivities)(parsedActivities);
    return res.status(200).send({
        date,
        activities: dayScheduleActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createSchemaFromActivity),
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/StudentRouter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentRouter": () => (/* binding */ studentRouter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./apps/server/src/utils/getAuthCookie.ts");






const studentRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
studentRouter.post("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__.coachAuthorization, (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.StudentModel.create(Object.assign({}, req.body), (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.status(200).send(result);
    });
}));
studentRouter.post("/login", (req, res) => {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.StudentModel.findById(req.body.id, (err, result) => {
        if (err || !result) {
            return res.status(401).send(err);
        }
        const cookie = (0,_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_5__.getAuthCookie)(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
});
studentRouter.get("/logout", (__, res) => {
    return res.clearCookie("access_token").sendStatus(200);
});
studentRouter.get("/", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__.studentAuthorization, (__, res) => {
    return res.status(200).send(res.locals[_middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__.STUDENT_LOCALS_NAME]);
});
studentRouter.delete("/:id", (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const studentId = req.params.id;
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.StudentModel.findByIdAndDelete(studentId);
    const studentsActivities = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.find({
        students: { $in: [studentId] },
    }).lean();
    studentsActivities.forEach(({ _id: activityId, students }) => {
        const filteredStudents = students.filter((id) => id !== studentId);
        const shouldDeleteStudentActivity = !filteredStudents.length;
        if (shouldDeleteStudentActivity) {
            _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.findByIdAndDelete(activityId);
        }
        else {
            _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.findByIdAndUpdate(activityId, {
                students: filteredStudents,
            });
        }
    });
    res.sendStatus(200);
}));
studentRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.StudentModel.findByIdAndUpdate(id, Object.assign({}, req.body), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});
studentRouter.get("/coach/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__.coachAuthorization, (req, res) => {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.StudentModel.find({ coachId: req.params.id }, (err, result) => {
        if (err) {
            return res.status(401).send(err);
        }
        return res.status(200).send(result);
    });
});


/***/ }),

/***/ "./apps/server/src/routes/WeekRouter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekRouter": () => (/* binding */ weekRouter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/utils/filterActivities.ts");
/* harmony import */ var _utils_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/server/src/utils/getDateStringRangeFromWeek.ts");
/* harmony import */ var _utils_getTimeRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./apps/server/src/utils/getTimeRange.ts");
/* harmony import */ var _utils_getDaysOfCalendarWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./apps/server/src/utils/getDaysOfCalendarWeek.ts");
/* harmony import */ var _utils_parseActivitiesFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./apps/server/src/utils/parseActivitiesFilter.ts");
/* harmony import */ var _utils_repeatActivities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./apps/server/src/utils/repeatActivities.ts");
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./apps/server/src/middleware/coachAuthorization.ts");










const weekRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
weekRouter.get("/:year/:week", (req, res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const year = Number(req.params.year);
    const week = Number(req.params.week);
    const currentWeek = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.getDaysOfWeek)({ year, week });
    const { filter } = req.query;
    const parsedFilter = (0,_utils_parseActivitiesFilter__WEBPACK_IMPORTED_MODULE_7__.parseActivitiesFilter)(filter);
    let activitiesWithoutRepeat = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.find({
        coachId: res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__.COACH_LOCALS_NAME]._id,
        repeatType: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None,
    }).lean();
    activitiesWithoutRepeat = (0,_utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__.filterActivities)(activitiesWithoutRepeat, parsedFilter);
    let activitiesWithRepeat = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.find({
        coachId: res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__.COACH_LOCALS_NAME]._id,
        repeatType: { $gt: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None },
    }).lean();
    activitiesWithRepeat = (0,_utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__.filterActivities)(activitiesWithRepeat, parsedFilter);
    activitiesWithRepeat = (0,_utils_repeatActivities__WEBPACK_IMPORTED_MODULE_8__.repeatActivities)(activitiesWithRepeat, currentWeek);
    res.status(200).send({
        days: (0,_utils_getDaysOfCalendarWeek__WEBPACK_IMPORTED_MODULE_6__.getDaysOfCalendarWeek)([...activitiesWithoutRepeat, ...activitiesWithRepeat], { week, year }),
        year,
        week,
        weekInfo: {
            days: (0,_utils_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_4__.getDateStringRangeFromWeek)({ week, year }),
            timeRange: (0,_utils_getTimeRange__WEBPACK_IMPORTED_MODULE_5__.getTimeRange)(),
        },
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _ActivityRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/server/src/routes/ActivityRouter.ts");
/* harmony import */ var _DayRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/server/src/routes/DayRouter.ts");
/* harmony import */ var _StudentRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./apps/server/src/routes/StudentRouter.ts");
/* harmony import */ var _CoachRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./apps/server/src/routes/CoachRouter.ts");
/* harmony import */ var _WeekRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./apps/server/src/routes/WeekRouter.ts");








// Init router and path
const router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
// Add sub-routes
router.use("/activity", _ActivityRouter__WEBPACK_IMPORTED_MODULE_3__.activityRouter);
router.use("/week", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_1__.coachAuthorization, _WeekRouter__WEBPACK_IMPORTED_MODULE_7__.weekRouter);
router.use("/day", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_2__.studentAuthorization, _DayRouter__WEBPACK_IMPORTED_MODULE_4__.dayRouter);
router.use("/coach", _CoachRouter__WEBPACK_IMPORTED_MODULE_6__.coachRouter);
router.use("/student", _StudentRouter__WEBPACK_IMPORTED_MODULE_5__.studentRouter);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./apps/server/src/utils/filterActivities.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActivities": () => (/* binding */ filterActivities)
/* harmony export */ });
/* harmony import */ var _filterActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./apps/server/src/utils/filterActivity.ts");

const filterActivities = (activities, filter = []) => {
    return activities.filter((activity) => (0,_filterActivity__WEBPACK_IMPORTED_MODULE_0__.filterActivity)(activity, filter));
};


/***/ }),

/***/ "./apps/server/src/utils/filterActivitiesForStudent.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActivitiesForStudent": () => (/* binding */ filterActivitiesForStudent)
/* harmony export */ });
/* harmony import */ var _filterActivityForStudent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./apps/server/src/utils/filterActivityForStudent.ts");

const filterActivitiesForStudent = (activities, student) => {
    return activities.filter((activity) => (0,_filterActivityForStudent__WEBPACK_IMPORTED_MODULE_0__.filterActivityForStudent)(activity, student));
};


/***/ }),

/***/ "./apps/server/src/utils/filterActivity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActivity": () => (/* binding */ filterActivity)
/* harmony export */ });
const filterActivity = (activity, filter = []) => {
    const isCommonActivity = !activity.students.length && filter.includes("common");
    if (isCommonActivity) {
        return true;
    }
    if (activity.students) {
        for (const student of activity.students) {
            if (filter.includes(student)) {
                return true;
            }
        }
    }
    return false;
};


/***/ }),

/***/ "./apps/server/src/utils/filterActivityForStudent.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActivityForStudent": () => (/* binding */ filterActivityForStudent)
/* harmony export */ });
const filterActivityForStudent = (activity, student) => {
    if (activity.isCommon) {
        return true;
    }
    return activity.students.includes(student._id);
};


/***/ }),

/***/ "./apps/server/src/utils/getActivityImportanceValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActivityImportanceValue": () => (/* binding */ getActivityImportanceValue)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");

const getActivityImportanceValue = (activity) => {
    let importanceValue = 0;
    if (activity.isImportant) {
        return 64;
    }
    switch (activity.repeatType) {
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.None: {
            importanceValue = 31;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryYear: {
            importanceValue = 15;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryMonth: {
            importanceValue = 7;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryWeek: {
            importanceValue = 3;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryDay: {
            importanceValue = 1;
            break;
        }
    }
    if (!activity.isCommon) {
        importanceValue *= 2;
    }
    return importanceValue;
};


/***/ }),

/***/ "./apps/server/src/utils/getAuthCookie.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAuthCookie": () => (/* binding */ getAuthCookie)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const getAuthCookie = (user) => {
    return {
        name: "access_token",
        token: jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
    };
};


/***/ }),

/***/ "./apps/server/src/utils/getDateStringRangeFromWeek.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateStringRangeFromWeek": () => (/* binding */ getDateStringRangeFromWeek)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/utils/src/index.ts");


const getDateStringRangeFromWeek = (weekInfo) => {
    const daysOfWeek = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.getDaysOfWeek)(weekInfo);
    return daysOfWeek.map(_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyDate);
};


/***/ }),

/***/ "./apps/server/src/utils/getDayScheduleActivities.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayScheduleActivities": () => (/* binding */ getDayScheduleActivities)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _getHighPriorityActivityFromGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/utils/getHighPriorityActivityFromGroup.ts");


const getDayScheduleActivities = (activities) => {
    const groups = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.groupActivities)(activities);
    const unsortedScheduleActivities = [];
    groups.forEach((group) => {
        const activity = (0,_getHighPriorityActivityFromGroup__WEBPACK_IMPORTED_MODULE_1__.getHighPriorityActivityFromGroup)(group);
        if (activity) {
            unsortedScheduleActivities.push(activity);
        }
    });
    return (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.sortActivitiesByTime)(unsortedScheduleActivities);
};


/***/ }),

/***/ "./apps/server/src/utils/getDaysOfCalendarWeek.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDaysOfCalendarWeek": () => (/* binding */ getDaysOfCalendarWeek)
/* harmony export */ });
/* harmony import */ var _getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./apps/server/src/utils/getDateStringRangeFromWeek.ts");

function getDaysOfCalendarWeek(activities, weekInfo) {
    const daysOfWeek = (0,_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_0__.getDateStringRangeFromWeek)(weekInfo);
    const daysOfCalendarWeek = daysOfWeek.map((day) => {
        const calendarDay = {
            date: day,
            activities: [],
        };
        calendarDay.activities = activities.filter((activity) => (activity === null || activity === void 0 ? void 0 : activity.date) === calendarDay.date);
        return calendarDay;
    });
    return daysOfCalendarWeek;
}


/***/ }),

/***/ "./apps/server/src/utils/getHighPriorityActivityFromGroup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHighPriorityActivityFromGroup": () => (/* binding */ getHighPriorityActivityFromGroup)
/* harmony export */ });
/* harmony import */ var _getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./apps/server/src/utils/getActivityImportanceValue.ts");

const getHighPriorityActivityFromGroup = (group) => {
    const maxImportance = Math.max(...group.activities.map((activity) => (0,_getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__.getActivityImportanceValue)(activity)));
    const firstMaxImportant = group.activities.find((activity) => (0,_getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__.getActivityImportanceValue)(activity) === maxImportance);
    return firstMaxImportant;
};


/***/ }),

/***/ "./apps/server/src/utils/getTimeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeRange": () => (/* binding */ getTimeRange)
/* harmony export */ });
const getTimeRange = () => [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
];


/***/ }),

/***/ "./apps/server/src/utils/hashPassword.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashPassword": () => (/* binding */ hashPassword)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const hashPassword = (password) => {
    return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac("sha256", process.env.SECRET_KEY || "")
        .update(password)
        .digest("hex");
};


/***/ }),

/***/ "./apps/server/src/utils/parseActivitiesFilter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseActivitiesFilter": () => (/* binding */ parseActivitiesFilter)
/* harmony export */ });
const parseActivitiesFilter = (filter = "") => {
    return filter === null || filter === void 0 ? void 0 : filter.split(",");
};


/***/ }),

/***/ "./apps/server/src/utils/repeatActivities.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivities": () => (/* binding */ repeatActivities)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");

const repeatActivities = (activities, currentWeek) => {
    let repeatedActivities = [];
    activities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createActivityFromSchema).forEach((activity) => {
        const repeatedActivity = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.repeatActivity)(activity, currentWeek);
        if (repeatedActivity) {
            repeatedActivities = repeatedActivities.concat(repeatedActivity);
        }
    });
    return repeatedActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createSchemaFromActivity);
};


/***/ }),

/***/ "./apps/server/src/utils/validateActivity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateActivity": () => (/* binding */ validateActivity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validateActivityImportance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/utils/validateActivityImportance.ts");
/* harmony import */ var _validateActivityTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./apps/server/src/utils/validateActivityTime.ts");



const validateActivity = (activity) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        (0,_validateActivityTime__WEBPACK_IMPORTED_MODULE_2__.validateActivityTime)(activity);
        yield (0,_validateActivityImportance__WEBPACK_IMPORTED_MODULE_1__.validateActivityImportance)(activity);
        return;
    }
    catch (error) {
        return error;
    }
});


/***/ }),

/***/ "./apps/server/src/utils/validateActivityImportance.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateActivityImportance": () => (/* binding */ validateActivityImportance)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");


const validateActivityImportance = (activity) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    if (activity.isImportant) {
        const importantActivitySameDay = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ActivityModel.findOne({
            date: activity.date,
            isImportant: true,
        });
        if (importantActivitySameDay &&
            (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.isTimeCrossed)((0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createActivityFromSchema)(activity), (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createActivityFromSchema)(importantActivitySameDay))) {
            throw {
                isValid: false,
                error: "Important activity this day already exists",
            };
        }
        return;
    }
    return;
});


/***/ }),

/***/ "./apps/server/src/utils/validateActivityTime.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateActivityTime": () => (/* binding */ validateActivityTime)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/index.ts");

const validateActivityTime = (activity) => {
    const startTime = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseTime)(activity.start);
    const endTime = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseTime)(activity.end);
    if (startTime >= endTime) {
        const endError = {
            name: "end",
            message: "Invalid time",
        };
        throw { isValid: false, errors: [endError] };
    }
    return { isValid: true };
};


/***/ }),

/***/ "./libs/constants/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT),
/* harmony export */   "TIME_FORMAT": () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.TIME_FORMAT)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/constants/src/lib/constants.ts");



/***/ }),

/***/ "./libs/constants/src/lib/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "TIME_FORMAT": () => (/* binding */ TIME_FORMAT)
/* harmony export */ });
const DATE_FORMAT = "DD.MM.YYYY";
const TIME_FORMAT = "HH:mm";


/***/ }),

/***/ "./libs/domains/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModel": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.ActivityModel),
/* harmony export */   "ClockTypeEnum": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.ClockTypeEnum),
/* harmony export */   "CoachModel": () => (/* reexport safe */ _lib_coach__WEBPACK_IMPORTED_MODULE_3__.CoachModel),
/* harmony export */   "ColorEnum": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.ColorEnum),
/* harmony export */   "RepeatTypeEnum": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum),
/* harmony export */   "StudentModel": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.StudentModel),
/* harmony export */   "activityActions": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.activityActions),
/* harmony export */   "activityReducer": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.activityReducer),
/* harmony export */   "activitySlice": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.activitySlice),
/* harmony export */   "addActivityToGroup": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.addActivityToGroup),
/* harmony export */   "coachActions": () => (/* reexport safe */ _lib_coach__WEBPACK_IMPORTED_MODULE_3__.coachActions),
/* harmony export */   "coachReducer": () => (/* reexport safe */ _lib_coach__WEBPACK_IMPORTED_MODULE_3__.coachReducer),
/* harmony export */   "coachSlice": () => (/* reexport safe */ _lib_coach__WEBPACK_IMPORTED_MODULE_3__.coachSlice),
/* harmony export */   "createActivityAPI": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.createActivityAPI),
/* harmony export */   "createActivityFromSchema": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.createActivityFromSchema),
/* harmony export */   "createCoachAPI": () => (/* reexport safe */ _lib_coach__WEBPACK_IMPORTED_MODULE_3__.createCoachAPI),
/* harmony export */   "createDayAPI": () => (/* reexport safe */ _lib_day__WEBPACK_IMPORTED_MODULE_2__.createDayAPI),
/* harmony export */   "createDayFromSchema": () => (/* reexport safe */ _lib_day__WEBPACK_IMPORTED_MODULE_2__.createDayFromSchema),
/* harmony export */   "createSchemaFromActivity": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.createSchemaFromActivity),
/* harmony export */   "createStudentAPI": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.createStudentAPI),
/* harmony export */   "createWeekAPI": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.createWeekAPI),
/* harmony export */   "createWeekFromSchema": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.createWeekFromSchema),
/* harmony export */   "createWeekInfoFromSchema": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.createWeekInfoFromSchema),
/* harmony export */   "dateInfoToMoment": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.dateInfoToMoment),
/* harmony export */   "dayActions": () => (/* reexport safe */ _lib_day__WEBPACK_IMPORTED_MODULE_2__.dayActions),
/* harmony export */   "dayReducer": () => (/* reexport safe */ _lib_day__WEBPACK_IMPORTED_MODULE_2__.dayReducer),
/* harmony export */   "daySlice": () => (/* reexport safe */ _lib_day__WEBPACK_IMPORTED_MODULE_2__.daySlice),
/* harmony export */   "getCurrentDateInfo": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateInfo),
/* harmony export */   "getDateInfoFromMoment": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.getDateInfoFromMoment),
/* harmony export */   "getDateInfoQuery": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.getDateInfoQuery),
/* harmony export */   "getDaysOfWeek": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.getDaysOfWeek),
/* harmony export */   "groupActivities": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.groupActivities),
/* harmony export */   "isTimeCrossed": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.isTimeCrossed),
/* harmony export */   "repeatActivity": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.repeatActivity),
/* harmony export */   "sortActivitiesByTime": () => (/* reexport safe */ _lib_activity__WEBPACK_IMPORTED_MODULE_0__.sortActivitiesByTime),
/* harmony export */   "studentActions": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentActions),
/* harmony export */   "studentAuthActions": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentAuthActions),
/* harmony export */   "studentAuthReducer": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentAuthReducer),
/* harmony export */   "studentAuthSlice": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentAuthSlice),
/* harmony export */   "studentReducer": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentReducer),
/* harmony export */   "studentSlice": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentSlice),
/* harmony export */   "studentsActions": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentsActions),
/* harmony export */   "studentsReducer": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentsReducer),
/* harmony export */   "studentsSlice": () => (/* reexport safe */ _lib_student__WEBPACK_IMPORTED_MODULE_4__.studentsSlice),
/* harmony export */   "weekActions": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.weekActions),
/* harmony export */   "weekReducer": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.weekReducer),
/* harmony export */   "weekSlice": () => (/* reexport safe */ _lib_week__WEBPACK_IMPORTED_MODULE_1__.weekSlice)
/* harmony export */ });
/* harmony import */ var _lib_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/index.ts");
/* harmony import */ var _lib_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/index.ts");
/* harmony import */ var _lib_day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/day/index.ts");
/* harmony import */ var _lib_coach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/coach/index.ts");
/* harmony import */ var _lib_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/student/index.ts");







/***/ }),

/***/ "./libs/domains/src/lib/activity/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActivityAPI": () => (/* binding */ createActivityAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/activity/utils/index.ts");


const createActivityAPI = (client) => ({
    createActivity: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.post("/activity", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSchemaFromActivity)(data));
        return request;
    }),
    updateActivity: (activity) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.put(`/activity/${activity._id}`, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSchemaFromActivity)(activity));
        return request;
    }),
    deleteActivity: (id) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.delete(`/activity/${id}`);
        return request;
    }),
    confirmActivity: ({ id, timestamp }) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.put(`/activity/confirm/${id}/${timestamp}`);
        return request;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/activity/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModel": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ActivityModel),
/* harmony export */   "RepeatTypeEnum": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.RepeatTypeEnum),
/* harmony export */   "activityActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.activityActions),
/* harmony export */   "activityReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.activityReducer),
/* harmony export */   "activitySlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.activitySlice),
/* harmony export */   "addActivityToGroup": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.addActivityToGroup),
/* harmony export */   "createActivityAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createActivityAPI),
/* harmony export */   "createActivityFromSchema": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.createActivityFromSchema),
/* harmony export */   "createSchemaFromActivity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.createSchemaFromActivity),
/* harmony export */   "groupActivities": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.groupActivities),
/* harmony export */   "isTimeCrossed": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isTimeCrossed),
/* harmony export */   "sortActivitiesByTime": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.sortActivitiesByTime)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/api.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/activity/model.ts");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/activity/slice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/activity/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/activity/utils/index.ts");







/***/ }),

/***/ "./libs/domains/src/lib/activity/model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModel": () => (/* binding */ ActivityModel)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/activity/types.ts");


const activitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true,
    },
    pictogram: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    coachId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        required: true,
    },
    repeatType: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None,
    },
    isCommon: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Boolean,
        required: true,
        default: false,
    },
    isImportant: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Boolean,
        required: true,
        default: false,
    },
    students: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Array,
        default: [],
    },
    confirmation: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Mixed,
        default: {},
    },
}, { versionKey: false, minimize: false });
const ActivityModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("activity", activitySchema);


/***/ }),

/***/ "./libs/domains/src/lib/activity/slice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activityActions": () => (/* binding */ activityActions),
/* harmony export */   "activityReducer": () => (/* binding */ activityReducer),
/* harmony export */   "activitySlice": () => (/* binding */ activitySlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    activity: null,
};
const activitySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "activity",
    initialState,
    reducers: {
        setActivity: (state, action) => {
            state.activity = action.payload;
        },
    },
});
const activityActions = activitySlice.actions;
const activityReducer = activitySlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/activity/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypeEnum": () => (/* binding */ RepeatTypeEnum)
/* harmony export */ });
var RepeatTypeEnum;
(function (RepeatTypeEnum) {
    RepeatTypeEnum[RepeatTypeEnum["None"] = 0] = "None";
    RepeatTypeEnum[RepeatTypeEnum["EveryDay"] = 1] = "EveryDay";
    RepeatTypeEnum[RepeatTypeEnum["EveryWeek"] = 2] = "EveryWeek";
    RepeatTypeEnum[RepeatTypeEnum["EveryMonth"] = 3] = "EveryMonth";
    RepeatTypeEnum[RepeatTypeEnum["EveryYear"] = 4] = "EveryYear";
})(RepeatTypeEnum || (RepeatTypeEnum = {}));


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/addActivityToGroup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addActivityToGroup": () => (/* binding */ addActivityToGroup)
/* harmony export */ });
const addActivityToGroup = (group, activity) => {
    const shouldUpdateStart = activity.start <= group.start;
    const shouldUpdateEnd = activity.end >= group.end;
    if (shouldUpdateStart) {
        group.start = activity.start.clone();
    }
    if (shouldUpdateEnd) {
        group.end = activity.end.clone();
    }
    group.activities.push(activity);
    return group;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/compareActivitiesByTime.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareActivitiesByTime": () => (/* binding */ compareActivitiesByTime)
/* harmony export */ });
const compareActivitiesByTime = (a, b) => {
    return a.start.unix() - b.start.unix();
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/createActivityFromSchema.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActivityFromSchema": () => (/* binding */ createActivityFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/index.ts");

const createActivityFromSchema = (activitySchema) => {
    return Object.assign(Object.assign({}, activitySchema), { date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseDate)(activitySchema.date), start: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseTime)(activitySchema.start), end: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseTime)(activitySchema.end) });
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/createSchemaFromActivity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSchemaFromActivity": () => (/* binding */ createSchemaFromActivity)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/index.ts");

const createSchemaFromActivity = (activity) => {
    return Object.assign(Object.assign({}, activity), { date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.stringifyDate)(activity.date), start: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.stringifyTime)(activity.start), end: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.stringifyTime)(activity.end) });
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/groupActivities.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupActivities": () => (/* binding */ groupActivities)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");
/* harmony import */ var _makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/activity/utils/groupActivities/makeGroupFromActivity.ts");
/* harmony import */ var _mergeGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/activity/utils/groupActivities/mergeGroups.ts");




const groupActivities = (activities = []) => {
    let groups = [];
    activities.forEach((activity) => {
        const groupsOfActivity = groups.filter((group) => (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.isTimeCrossed)(group, activity));
        const otherGroups = groups.filter((group) => !(0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.isTimeCrossed)(group, activity));
        const shouldMergeGroups = groupsOfActivity.length > 1;
        const groupOfActivity = groupsOfActivity[0];
        if (shouldMergeGroups) {
            const mergedGroup = (0,_mergeGroups__WEBPACK_IMPORTED_MODULE_3__.mergeGroups)(groupsOfActivity);
            groups = [...otherGroups, mergedGroup];
            return;
        }
        if (groupOfActivity) {
            (0,_addActivityToGroup__WEBPACK_IMPORTED_MODULE_1__.addActivityToGroup)(groupOfActivity, activity);
        }
        else {
            const newGroup = (0,_makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_2__.makeGroupFromActivity)(activity);
            groups.push(newGroup);
        }
    });
    return groups;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupActivities": () => (/* reexport safe */ _groupActivities__WEBPACK_IMPORTED_MODULE_0__.groupActivities)
/* harmony export */ });
/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/utils/groupActivities/groupActivities.ts");



/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/makeGroupFromActivity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGroupFromActivity": () => (/* binding */ makeGroupFromActivity)
/* harmony export */ });
const makeGroupFromActivity = (activity) => {
    const group = {
        start: activity.start,
        end: activity.end,
        activities: [activity],
    };
    return group;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/mergeGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeGroups": () => (/* binding */ mergeGroups)
/* harmony export */ });
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");

const mergeGroups = (groups) => {
    const baseGroup = groups[0];
    for (let i = 1; i < groups.length; i++) {
        groups[i].activities.forEach((activity) => (0,_addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__.addActivityToGroup)(baseGroup, activity));
    }
    return baseGroup;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addActivityToGroup": () => (/* reexport safe */ _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__.addActivityToGroup),
/* harmony export */   "createActivityFromSchema": () => (/* reexport safe */ _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__.createActivityFromSchema),
/* harmony export */   "createSchemaFromActivity": () => (/* reexport safe */ _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__.createSchemaFromActivity),
/* harmony export */   "groupActivities": () => (/* reexport safe */ _groupActivities__WEBPACK_IMPORTED_MODULE_3__.groupActivities),
/* harmony export */   "isTimeCrossed": () => (/* reexport safe */ _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__.isTimeCrossed),
/* harmony export */   "sortActivitiesByTime": () => (/* reexport safe */ _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__.sortActivitiesByTime)
/* harmony export */ });
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");
/* harmony import */ var _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/activity/utils/createActivityFromSchema.ts");
/* harmony import */ var _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/activity/utils/createSchemaFromActivity.ts");
/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/activity/utils/groupActivities/index.ts");
/* harmony import */ var _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/activity/utils/isTimeCrossed.ts");
/* harmony import */ var _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./libs/domains/src/lib/activity/utils/sortActivitiesByTime.ts");








/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/isTimeCrossed.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTimeCrossed": () => (/* binding */ isTimeCrossed)
/* harmony export */ });
const isTimeCrossed = (time1, time2) => {
    const isTime1StartInTime2Period = time2.start <= time1.start && time1.start < time2.end;
    const isTime1EndInTime2Period = time2.start < time1.end && time1.end <= time2.end;
    const isTime2StartInTime1Period = time1.start <= time2.start && time2.start < time1.end;
    const isTime2EndInTime1Period = time1.start < time2.end && time2.end <= time1.end;
    return (isTime1StartInTime2Period ||
        isTime1EndInTime2Period ||
        isTime2StartInTime1Period ||
        isTime2EndInTime1Period);
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/sortActivitiesByTime.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortActivitiesByTime": () => (/* binding */ sortActivitiesByTime)
/* harmony export */ });
/* harmony import */ var _compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/activity/utils/compareActivitiesByTime.ts");

const sortActivitiesByTime = (activities) => {
    return activities.sort((a, b) => (0,_compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_0__.compareActivitiesByTime)(a, b));
};


/***/ }),

/***/ "./libs/domains/src/lib/coach/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCoachAPI": () => (/* binding */ createCoachAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

const createCoachAPI = (client) => ({
    login: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.post("/coach/login", data);
        return request.data;
    }),
    logout: () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.get("/coach/logout");
        return request.data;
    }),
    register: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.post("/coach", data);
        return request.data;
    }),
    getCoach: () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.get("/coach");
        return request.data;
    }),
    updateCoach: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.put("/coach", data);
        return request.data;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/coach/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachModel": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.CoachModel),
/* harmony export */   "coachActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachActions),
/* harmony export */   "coachReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachReducer),
/* harmony export */   "coachSlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachSlice),
/* harmony export */   "createCoachAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createCoachAPI)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/coach/api.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/coach/model.ts");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/coach/slice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/coach/types.ts");






/***/ }),

/***/ "./libs/domains/src/lib/coach/model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachModel": () => (/* binding */ CoachModel)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const coachSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
}, { versionKey: false });
const CoachModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("coach", coachSchema);


/***/ }),

/***/ "./libs/domains/src/lib/coach/slice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coachActions": () => (/* binding */ coachActions),
/* harmony export */   "coachReducer": () => (/* binding */ coachReducer),
/* harmony export */   "coachSlice": () => (/* binding */ coachSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    coach: null,
    isLogged: false,
};
const coachSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "coach",
    initialState,
    reducers: {
        setCoach: (state, action) => {
            state.coach = action.payload;
            state.isLogged = !!action.payload;
        },
    },
});
const coachActions = coachSlice.actions;
const coachReducer = coachSlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/coach/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/day/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayAPI": () => (/* binding */ createDayAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/index.ts");


const createDayAPI = (client) => ({
    getDay: (date) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const response = yield client.get(`/day/${date}`);
        return (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createDayFromSchema)(response.data);
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/day/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createDayAPI),
/* harmony export */   "createDayFromSchema": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createDayFromSchema),
/* harmony export */   "dayActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.dayActions),
/* harmony export */   "dayReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.dayReducer),
/* harmony export */   "daySlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.daySlice)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/day/api.ts");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/day/slice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/day/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/day/utils/index.ts");






/***/ }),

/***/ "./libs/domains/src/lib/day/slice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayActions": () => (/* binding */ dayActions),
/* harmony export */   "dayReducer": () => (/* binding */ dayReducer),
/* harmony export */   "daySlice": () => (/* binding */ daySlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    day: null,
};
const daySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "day",
    initialState,
    reducers: {
        setDay: (state, action) => {
            state.day = action.payload;
        },
    },
});
const dayActions = daySlice.actions;
const dayReducer = daySlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/day/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/day/utils/createDayFromSchema.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayFromSchema": () => (/* binding */ createDayFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/utils/src/index.ts");


const createDayFromSchema = (daySchema) => {
    const day = {
        date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(daySchema.date),
        activities: daySchema.activities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createActivityFromSchema),
    };
    return day;
};


/***/ }),

/***/ "./libs/domains/src/lib/day/utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayFromSchema": () => (/* reexport safe */ _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__.createDayFromSchema)
/* harmony export */ });
/* harmony import */ var _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/day/utils/createDayFromSchema.ts");



/***/ }),

/***/ "./libs/domains/src/lib/student/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStudentAPI": () => (/* binding */ createStudentAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

const createStudentAPI = (client) => ({
    login: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.post("/student/login", data);
        return request.data;
    }),
    logout: () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.get("/student/logout");
        return request.data;
    }),
    getStudent: () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.get("/student");
        return request.data;
    }),
    createStudent: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.post("/student", data);
        return request;
    }),
    updateStudent: (_a) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        var { _id } = _a, data = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["_id"]);
        const request = yield client.put(`/student/${_id}`, data);
        return request.data;
    }),
    deleteStudent: (id) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.delete(`/student/${id}`);
        return request;
    }),
    getStudents: (coachId) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const request = yield client.get(`/student/coach/${coachId}`);
        return request.data;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/student/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypeEnum": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.ClockTypeEnum),
/* harmony export */   "ColorEnum": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.ColorEnum),
/* harmony export */   "StudentModel": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.StudentModel),
/* harmony export */   "createStudentAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createStudentAPI),
/* harmony export */   "studentActions": () => (/* reexport safe */ _studentSlice__WEBPACK_IMPORTED_MODULE_2__.studentActions),
/* harmony export */   "studentAuthActions": () => (/* reexport safe */ _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__.studentAuthActions),
/* harmony export */   "studentAuthReducer": () => (/* reexport safe */ _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__.studentAuthReducer),
/* harmony export */   "studentAuthSlice": () => (/* reexport safe */ _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__.studentAuthSlice),
/* harmony export */   "studentReducer": () => (/* reexport safe */ _studentSlice__WEBPACK_IMPORTED_MODULE_2__.studentReducer),
/* harmony export */   "studentSlice": () => (/* reexport safe */ _studentSlice__WEBPACK_IMPORTED_MODULE_2__.studentSlice),
/* harmony export */   "studentsActions": () => (/* reexport safe */ _studentsSlice__WEBPACK_IMPORTED_MODULE_4__.studentsActions),
/* harmony export */   "studentsReducer": () => (/* reexport safe */ _studentsSlice__WEBPACK_IMPORTED_MODULE_4__.studentsReducer),
/* harmony export */   "studentsSlice": () => (/* reexport safe */ _studentsSlice__WEBPACK_IMPORTED_MODULE_4__.studentsSlice)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/student/api.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/student/model.ts");
/* harmony import */ var _studentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/student/studentSlice.ts");
/* harmony import */ var _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/student/studentAuthSlice.ts");
/* harmony import */ var _studentsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/student/studentsSlice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./libs/domains/src/lib/student/types.ts");








/***/ }),

/***/ "./libs/domains/src/lib/student/model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentModel": () => (/* binding */ StudentModel)
/* harmony export */ });
/* harmony import */ var _routine_support_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/types/src/index.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/student/types.ts");



const studentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
    name: {
        type: String,
        required: true,
    },
    coachId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema.Types.ObjectId,
        required: true,
    },
    color: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_2__.ColorEnum.Purple,
    },
    pinCode: {
        type: String,
        required: true,
        default: "0000",
    },
    clockType: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_2__.ClockTypeEnum.Analog,
    },
    language: {
        type: String,
        required: true,
        default: _routine_support_types__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum.En,
    },
}, { versionKey: false });
const StudentModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_1__.model)("student", studentSchema);


/***/ }),

/***/ "./libs/domains/src/lib/student/studentAuthSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentAuthActions": () => (/* binding */ studentAuthActions),
/* harmony export */   "studentAuthReducer": () => (/* binding */ studentAuthReducer),
/* harmony export */   "studentAuthSlice": () => (/* binding */ studentAuthSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    student: null,
    isLogged: false,
};
const studentAuthSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "student",
    initialState,
    reducers: {
        setStudent: (state, action) => {
            var _a;
            state.student = action.payload;
            state.isLogged = Boolean((_a = action.payload) === null || _a === void 0 ? void 0 : _a._id);
        },
    },
});
const studentAuthActions = studentAuthSlice.actions;
const studentAuthReducer = studentAuthSlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/student/studentSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentActions": () => (/* binding */ studentActions),
/* harmony export */   "studentReducer": () => (/* binding */ studentReducer),
/* harmony export */   "studentSlice": () => (/* binding */ studentSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    student: null,
};
const studentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "student",
    initialState,
    reducers: {
        setStudent: (state, action) => {
            state.student = action.payload;
        },
    },
});
const studentActions = studentSlice.actions;
const studentReducer = studentSlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/student/studentsSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentsActions": () => (/* binding */ studentsActions),
/* harmony export */   "studentsReducer": () => (/* binding */ studentsReducer),
/* harmony export */   "studentsSlice": () => (/* binding */ studentsSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    students: [],
};
const studentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "students",
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
    },
});
const studentsActions = studentsSlice.actions;
const studentsReducer = studentsSlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/student/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypeEnum": () => (/* binding */ ClockTypeEnum),
/* harmony export */   "ColorEnum": () => (/* binding */ ColorEnum)
/* harmony export */ });
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["Yellow"] = 0] = "Yellow";
    ColorEnum[ColorEnum["Purple"] = 1] = "Purple";
    ColorEnum[ColorEnum["Pink"] = 2] = "Pink";
    ColorEnum[ColorEnum["Red"] = 3] = "Red";
    ColorEnum[ColorEnum["Mint"] = 4] = "Mint";
    ColorEnum[ColorEnum["Orange"] = 5] = "Orange";
    ColorEnum[ColorEnum["Brown"] = 6] = "Brown";
    ColorEnum[ColorEnum["DarkGreen"] = 7] = "DarkGreen";
})(ColorEnum || (ColorEnum = {}));
var ClockTypeEnum;
(function (ClockTypeEnum) {
    ClockTypeEnum[ClockTypeEnum["Analog"] = 0] = "Analog";
    ClockTypeEnum[ClockTypeEnum["Digital"] = 1] = "Digital";
})(ClockTypeEnum || (ClockTypeEnum = {}));


/***/ }),

/***/ "./libs/domains/src/lib/week/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekAPI": () => (/* binding */ createWeekAPI)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/utils/index.ts");


const createWeekAPI = (client) => ({
    getWeek: (year, week, filter) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        // todo resolve type
        let filterParam = undefined;
        if (filter) {
            filterParam = [];
            for (const key in filter) {
                if (filter[key]) {
                    filterParam.push(key);
                }
            }
            filterParam = filterParam.join(",");
        }
        const response = yield client.get(`/week/${year}/${week}`, { params: { filter: filterParam } });
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createWeekFromSchema)(response.data);
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/week/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createWeekAPI),
/* harmony export */   "createWeekFromSchema": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createWeekFromSchema),
/* harmony export */   "createWeekInfoFromSchema": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createWeekInfoFromSchema),
/* harmony export */   "dateInfoToMoment": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.dateInfoToMoment),
/* harmony export */   "getCurrentDateInfo": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getCurrentDateInfo),
/* harmony export */   "getDateInfoFromMoment": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getDateInfoFromMoment),
/* harmony export */   "getDateInfoQuery": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getDateInfoQuery),
/* harmony export */   "getDaysOfWeek": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getDaysOfWeek),
/* harmony export */   "repeatActivity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.repeatActivity),
/* harmony export */   "weekActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.weekActions),
/* harmony export */   "weekReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.weekReducer),
/* harmony export */   "weekSlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.weekSlice)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/api.ts");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/slice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/week/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/week/utils/index.ts");






/***/ }),

/***/ "./libs/domains/src/lib/week/slice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekActions": () => (/* binding */ weekActions),
/* harmony export */   "weekReducer": () => (/* binding */ weekReducer),
/* harmony export */   "weekSlice": () => (/* binding */ weekSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    week: null,
};
const weekSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "week",
    initialState,
    reducers: {
        setWeek: (state, action) => {
            state.week = action.payload;
        },
    },
});
const weekActions = weekSlice.actions;
const weekReducer = weekSlice.reducer;


/***/ }),

/***/ "./libs/domains/src/lib/week/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/createWeekFromSchema.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekFromSchema": () => (/* binding */ createWeekFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts");


const createWeekFromSchema = (weekSchema) => {
    const week = {
        days: weekSchema.days.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createDayFromSchema),
        weekInfo: (0,_createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__.createWeekInfoFromSchema)(weekSchema.weekInfo),
    };
    return week;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekInfoFromSchema": () => (/* binding */ createWeekInfoFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/index.ts");

const createWeekInfoFromSchema = (weekInfoSchema) => {
    const weekInfo = Object.assign(Object.assign({}, weekInfoSchema), { days: weekInfoSchema.days.map((day) => (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.parseDate)(day)), timeRange: weekInfoSchema.timeRange });
    return weekInfo;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/dateInfoToMoment.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateInfoToMoment": () => (/* binding */ dateInfoToMoment)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const dateInfoToMoment = (dateInfo) => {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()().year(dateInfo.year).isoWeek(dateInfo.week);
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getCurrentDateInfo.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentDateInfo": () => (/* binding */ getCurrentDateInfo)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts");


const getCurrentDateInfo = () => {
    return (0,_getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__.getDateInfoFromMoment)(moment__WEBPACK_IMPORTED_MODULE_0___default()());
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateInfoFromMoment": () => (/* binding */ getDateInfoFromMoment)
/* harmony export */ });
const getDateInfoFromMoment = (moment) => {
    return {
        year: Number(moment.clone().get("year")),
        week: Number(moment.clone().format("W")),
    };
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDateInfoQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateInfoQuery": () => (/* binding */ getDateInfoQuery)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/index.ts");

const getDateInfoQuery = (dateInfo) => {
    const query = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.serialize)(dateInfo);
    return query;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDaysOfWeek.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDaysOfWeek": () => (/* binding */ getDaysOfWeek)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getDaysOfWeek = ({ week, year }) => {
    const monday = moment__WEBPACK_IMPORTED_MODULE_0___default()().year(year).day("Monday").isoWeek(week);
    const days = [monday];
    for (let i = 1; i < 7; i++) {
        const day = moment__WEBPACK_IMPORTED_MODULE_0___default()(monday).add(i, "days");
        days.push(day);
    }
    return days;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekFromSchema": () => (/* reexport safe */ _createWeekFromSchema__WEBPACK_IMPORTED_MODULE_0__.createWeekFromSchema),
/* harmony export */   "createWeekInfoFromSchema": () => (/* reexport safe */ _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__.createWeekInfoFromSchema),
/* harmony export */   "dateInfoToMoment": () => (/* reexport safe */ _dateInfoToMoment__WEBPACK_IMPORTED_MODULE_2__.dateInfoToMoment),
/* harmony export */   "getCurrentDateInfo": () => (/* reexport safe */ _getCurrentDateInfo__WEBPACK_IMPORTED_MODULE_3__.getCurrentDateInfo),
/* harmony export */   "getDateInfoFromMoment": () => (/* reexport safe */ _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_4__.getDateInfoFromMoment),
/* harmony export */   "getDateInfoQuery": () => (/* reexport safe */ _getDateInfoQuery__WEBPACK_IMPORTED_MODULE_5__.getDateInfoQuery),
/* harmony export */   "getDaysOfWeek": () => (/* reexport safe */ _getDaysOfWeek__WEBPACK_IMPORTED_MODULE_6__.getDaysOfWeek),
/* harmony export */   "repeatActivity": () => (/* reexport safe */ _repeatActivity__WEBPACK_IMPORTED_MODULE_7__.repeatActivity)
/* harmony export */ });
/* harmony import */ var _createWeekFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/createWeekFromSchema.ts");
/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts");
/* harmony import */ var _dateInfoToMoment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/week/utils/dateInfoToMoment.ts");
/* harmony import */ var _getCurrentDateInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/week/utils/getCurrentDateInfo.ts");
/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts");
/* harmony import */ var _getDateInfoQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./libs/domains/src/lib/week/utils/getDateInfoQuery.ts");
/* harmony import */ var _getDaysOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./libs/domains/src/lib/week/utils/getDaysOfWeek.ts");
/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/index.ts");










/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivity": () => (/* reexport safe */ _repeatActivity__WEBPACK_IMPORTED_MODULE_0__.repeatActivity)
/* harmony export */ });
/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivity.ts");



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivity": () => (/* binding */ repeatActivity)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/index.ts");
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/index.ts");
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/index.ts");
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/index.ts");
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/index.ts");





const repeatActivity = (activity, currentWeek) => {
    switch (activity.repeatType) {
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryDay:
            return (0,_repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_1__.repeatActivityEveryDay)(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryWeek:
            return (0,_repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_3__.repeatActivityThisWeek)(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryMonth:
            return (0,_repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_2__.repeatActivityThisMonth)(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.RepeatTypeEnum.EveryYear:
            return (0,_repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_4__.repeatActivityThisYear)(activity, currentWeek);
        default:
            return;
    }
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityEveryDay": () => (/* reexport safe */ _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__.repeatActivityEveryDay)
/* harmony export */ });
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/repeatActivityEveryDay.ts");



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/repeatActivityEveryDay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityEveryDay": () => (/* binding */ repeatActivityEveryDay)
/* harmony export */ });
const repeatActivityEveryDay = (activity, daysOfCurrentWeek) => {
    const repeatedActivity = [];
    daysOfCurrentWeek.forEach((day) => {
        const shouldRepeatActivity = day.isSameOrAfter(activity.date);
        if (shouldRepeatActivity) {
            repeatedActivity.push(Object.assign(Object.assign({}, activity), { date: day }));
        }
    });
    return repeatedActivity;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/getDayNumbersFromWeek.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayNumbersFromWeek": () => (/* binding */ getDayNumbersFromWeek)
/* harmony export */ });
const getDayNumbersFromWeek = (daysOfWeek) => {
    return daysOfWeek.map((day) => day.date());
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisMonth": () => (/* reexport safe */ _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisMonth)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/repeatActivityThisMonth.ts");



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/repeatActivityThisMonth.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisMonth": () => (/* binding */ repeatActivityThisMonth)
/* harmony export */ });
/* harmony import */ var _getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/getDayNumbersFromWeek.ts");

const repeatActivityThisMonth = (activity, daysOfCurrentWeek) => {
    const dayNumbersOfWeek = (0,_getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_0__.getDayNumbersFromWeek)(daysOfCurrentWeek);
    const activityDayNumber = activity.date.date();
    const repeatActivityDayIndex = dayNumbersOfWeek.indexOf(activityDayNumber);
    const shouldRepeatActivity = repeatActivityDayIndex !== -1;
    if (shouldRepeatActivity) {
        return Object.assign(Object.assign({}, activity), { date: daysOfCurrentWeek[repeatActivityDayIndex] });
    }
    return undefined;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisWeek": () => (/* reexport safe */ _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisWeek)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/repeatActivityThisWeek.ts");



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/repeatActivityThisWeek.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisWeek": () => (/* binding */ repeatActivityThisWeek)
/* harmony export */ });
const repeatActivityThisWeek = (activity, daysOfCurrentWeek) => {
    // todo Решить проблемы с локалью в 22 задаче
    const dayOfWeekIndex = activity.date.locale("ru").weekday();
    const repeatedActivityDate = daysOfCurrentWeek[dayOfWeekIndex];
    const shouldRepeatActivity = repeatedActivityDate.isSameOrAfter(activity.date);
    if (shouldRepeatActivity) {
        return Object.assign(Object.assign({}, activity), { date: repeatedActivityDate });
    }
    return undefined;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisYear": () => (/* reexport safe */ _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisYear)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/repeatActivityThisYear.ts");



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/repeatActivityThisYear.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisYear": () => (/* binding */ repeatActivityThisYear)
/* harmony export */ });
const repeatActivityThisYear = (activity, daysOfCurrentWeek) => {
    const newActivityDate = daysOfCurrentWeek.find((day) => isSameDatesWithoutYear(day, activity.date));
    if (newActivityDate && newActivityDate >= activity.date) {
        return Object.assign(Object.assign({}, activity), { date: newActivityDate });
    }
    return undefined;
};
const isSameDatesWithoutYear = (a, b) => {
    const SPECIAL_DATE = "29.02";
    const SPECIAL_DATE_YEAR_AFTER = "01.03";
    const is_a_leap = a.isLeapYear();
    const is_b_leap = b.isLeapYear();
    if (is_a_leap && !is_b_leap) {
        if (getDateStringWithoutYear(a) === SPECIAL_DATE) {
            return getDateStringWithoutYear(b) === SPECIAL_DATE_YEAR_AFTER;
        }
    }
    if (!is_a_leap && is_b_leap) {
        if (getDateStringWithoutYear(b) === SPECIAL_DATE) {
            return getDateStringWithoutYear(a) === SPECIAL_DATE_YEAR_AFTER;
        }
    }
    return getDateStringWithoutYear(a) === getDateStringWithoutYear(b);
};
const getDateStringWithoutYear = (date) => {
    return date.format("DD.MM");
};


/***/ }),

/***/ "./libs/types/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageEnum": () => (/* reexport safe */ _lib_types__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum)
/* harmony export */ });
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/types/src/lib/types.ts");



/***/ }),

/***/ "./libs/types/src/lib/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageEnum": () => (/* binding */ LanguageEnum)
/* harmony export */ });
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["En"] = "en";
    LanguageEnum["Nl"] = "nl";
    LanguageEnum["Ru"] = "ru";
})(LanguageEnum || (LanguageEnum = {}));


/***/ }),

/***/ "./libs/utils/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMinutes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getMinutes),
/* harmony export */   "indexOfTimeRange": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.indexOfTimeRange),
/* harmony export */   "isToday": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.isToday),
/* harmony export */   "parseDate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.parseDate),
/* harmony export */   "parseTime": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.parseTime),
/* harmony export */   "pxToNumber": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.pxToNumber),
/* harmony export */   "serialize": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.serialize),
/* harmony export */   "stringifyDate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.stringifyDate),
/* harmony export */   "stringifyTime": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.stringifyTime)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/lib/index.ts");



/***/ }),

/***/ "./libs/utils/src/lib/getMinutes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMinutes": () => (/* binding */ getMinutes)
/* harmony export */ });
const getMinutes = (time) => {
    return time.get("hours") * 60 + time.get("minutes");
};


/***/ }),

/***/ "./libs/utils/src/lib/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMinutes": () => (/* reexport safe */ _getMinutes__WEBPACK_IMPORTED_MODULE_0__.getMinutes),
/* harmony export */   "indexOfTimeRange": () => (/* reexport safe */ _indexOfTimeRange__WEBPACK_IMPORTED_MODULE_1__.indexOfTimeRange),
/* harmony export */   "isToday": () => (/* reexport safe */ _isToday__WEBPACK_IMPORTED_MODULE_2__.isToday),
/* harmony export */   "parseDate": () => (/* reexport safe */ _parseDate__WEBPACK_IMPORTED_MODULE_3__.parseDate),
/* harmony export */   "parseTime": () => (/* reexport safe */ _parseTime__WEBPACK_IMPORTED_MODULE_4__.parseTime),
/* harmony export */   "pxToNumber": () => (/* reexport safe */ _pxToNumber__WEBPACK_IMPORTED_MODULE_5__.pxToNumber),
/* harmony export */   "serialize": () => (/* reexport safe */ _serialize__WEBPACK_IMPORTED_MODULE_6__.serialize),
/* harmony export */   "stringifyDate": () => (/* reexport safe */ _stringifyDate__WEBPACK_IMPORTED_MODULE_7__.stringifyDate),
/* harmony export */   "stringifyTime": () => (/* reexport safe */ _stringifyTime__WEBPACK_IMPORTED_MODULE_8__.stringifyTime)
/* harmony export */ });
/* harmony import */ var _getMinutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/utils/src/lib/getMinutes.ts");
/* harmony import */ var _indexOfTimeRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/utils/src/lib/indexOfTimeRange.ts");
/* harmony import */ var _isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/utils/src/lib/isToday.ts");
/* harmony import */ var _parseDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/utils/src/lib/parseDate.ts");
/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/utils/src/lib/parseTime.ts");
/* harmony import */ var _pxToNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./libs/utils/src/lib/pxToNumber.ts");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./libs/utils/src/lib/serialize.ts");
/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./libs/utils/src/lib/stringifyDate.ts");
/* harmony import */ var _stringifyTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./libs/utils/src/lib/stringifyTime.ts");











/***/ }),

/***/ "./libs/utils/src/lib/indexOfTimeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexOfTimeRange": () => (/* binding */ indexOfTimeRange)
/* harmony export */ });
const indexOfTimeRange = (timeRange, time) => {
    return timeRange.findIndex((timeString) => new RegExp(`^${time.get("hours")}:00`).test(timeString));
};


/***/ }),

/***/ "./libs/utils/src/lib/isToday.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isToday": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/utils/src/lib/stringifyDate.ts");


const isToday = (date) => {
    return (0,_stringifyDate__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(moment__WEBPACK_IMPORTED_MODULE_0___default()()) === (0,_stringifyDate__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(date);
};


/***/ }),

/***/ "./libs/utils/src/lib/parseDate.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDate": () => (/* binding */ parseDate)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/constants/src/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const parseDate = (date) => moment__WEBPACK_IMPORTED_MODULE_1___default()(date, _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT);


/***/ }),

/***/ "./libs/utils/src/lib/parseTime.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseTime": () => (/* binding */ parseTime)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const parseTime = (time) => {
    const [hours, minutes] = time.split(":");
    const newDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().set({
        hours: Number(hours),
        minutes: Number(minutes),
    });
    return newDate;
};


/***/ }),

/***/ "./libs/utils/src/lib/pxToNumber.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pxToNumber": () => (/* binding */ pxToNumber)
/* harmony export */ });
const pxToNumber = (px) => {
    return Number(px.split("px")[0]);
};


/***/ }),

/***/ "./libs/utils/src/lib/serialize.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": () => (/* binding */ serialize)
/* harmony export */ });
const serialize = (obj) => {
    const str = [];
    for (const p in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return str.join("&");
};


/***/ }),

/***/ "./libs/utils/src/lib/stringifyDate.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyDate": () => (/* binding */ stringifyDate)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/constants/src/index.ts");

const stringifyDate = (date) => {
    return date.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT);
};


/***/ }),

/***/ "./libs/utils/src/lib/stringifyTime.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyTime": () => (/* binding */ stringifyTime)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/constants/src/index.ts");

const stringifyTime = (time) => {
    return time.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.TIME_FORMAT);
};


/***/ }),

/***/ "@reduxjs/toolkit":
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "body-parser":
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-bearer-token":
/***/ ((module) => {

module.exports = require("express-bearer-token");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./apps/server/src/routes/index.ts");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_bearer_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("express-bearer-token");
/* harmony import */ var express_bearer_token__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_bearer_token__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _db_mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./apps/server/src/db/mongodb.ts");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);










dotenv__WEBPACK_IMPORTED_MODULE_9__.config();
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().urlencoded({ extended: false }));
app.use(express_bearer_token__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(morgan__WEBPACK_IMPORTED_MODULE_7___default()("tiny"));
app.use("/api", _routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"](path__WEBPACK_IMPORTED_MODULE_8___default().join(__dirname, "../web")));
app.use("*", (req, res) => {
    res.sendFile(path__WEBPACK_IMPORTED_MODULE_8___default().join(__dirname, "../web/index.html"));
});
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api 🚀`);
});
server.on("error", console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map