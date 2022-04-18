(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/server/src/db/mongodb.ts":
/*!***************************************!*\
  !*** ./apps/server/src/db/mongodb.ts ***!
  \***************************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DB_CONNECTION_STRING || "");
const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;
db.on("error", console.error.bind(console, "❌ Connection error:"));
db.once("open", () => {
    console.log("Mongo connected 🔌");
});


/***/ }),

/***/ "./apps/server/src/main.ts":
/*!*********************************!*\
  !*** ./apps/server/src/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./apps/server/src/routes/index.ts");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_bearer_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-bearer-token */ "express-bearer-token");
/* harmony import */ var express_bearer_token__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_bearer_token__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _db_mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db/mongodb */ "./apps/server/src/db/mongodb.ts");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);










dotenv__WEBPACK_IMPORTED_MODULE_9__["config"]();
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({ extended: false }));
app.use(express_bearer_token__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(morgan__WEBPACK_IMPORTED_MODULE_7___default()("tiny"));
app.use("/api", _routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_8___default.a.join(__dirname, "../web")));
app.use("*", (req, res) => {
    res.sendFile(path__WEBPACK_IMPORTED_MODULE_8___default.a.join(__dirname, "../web/index.html"));
});
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api 🚀`);
});
server.on("error", console.error);


/***/ }),

/***/ "./apps/server/src/middleware/coachAuthorization.ts":
/*!**********************************************************!*\
  !*** ./apps/server/src/middleware/coachAuthorization.ts ***!
  \**********************************************************/
/*! exports provided: COACH_LOCALS_NAME, coachAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACH_LOCALS_NAME", function() { return COACH_LOCALS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachAuthorization", function() { return coachAuthorization; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAuthorizationMiddleware */ "./apps/server/src/middleware/createAuthorizationMiddleware.ts");


const COACH_LOCALS_NAME = "coach";
const coachAuthorization = Object(_createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__["createAuthorizationMiddleware"])(COACH_LOCALS_NAME, _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["CoachModel"]);


/***/ }),

/***/ "./apps/server/src/middleware/createAuthorizationMiddleware.ts":
/*!*********************************************************************!*\
  !*** ./apps/server/src/middleware/createAuthorizationMiddleware.ts ***!
  \*********************************************************************/
/*! exports provided: createAuthorizationMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthorizationMiddleware", function() { return createAuthorizationMiddleware; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAuthorizationMiddleware = (authName, model) => (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"](token, process.env.SECRET_KEY || "");
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
/*!************************************************************!*\
  !*** ./apps/server/src/middleware/studentAuthorization.ts ***!
  \************************************************************/
/*! exports provided: STUDENT_LOCALS_NAME, studentAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENT_LOCALS_NAME", function() { return STUDENT_LOCALS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentAuthorization", function() { return studentAuthorization; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAuthorizationMiddleware */ "./apps/server/src/middleware/createAuthorizationMiddleware.ts");


const STUDENT_LOCALS_NAME = "student";
const studentAuthorization = Object(_createAuthorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__["createAuthorizationMiddleware"])(STUDENT_LOCALS_NAME, _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["StudentModel"]);


/***/ }),

/***/ "./apps/server/src/routes/ActivityRouter.ts":
/*!**************************************************!*\
  !*** ./apps/server/src/routes/ActivityRouter.ts ***!
  \**************************************************/
/*! exports provided: activityRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityRouter", function() { return activityRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/studentAuthorization */ "./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");
/* harmony import */ var _utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validateActivity */ "./apps/server/src/utils/validateActivity.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/coachAuthorization */ "./apps/server/src/middleware/coachAuthorization.ts");








const activityRouter = Object(express__WEBPACK_IMPORTED_MODULE_1__["Router"])();
activityRouter.get("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__["coachAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const activity = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].findById(req.params.id);
    if (activity) {
        res.status(200).send(activity);
    }
    return res.sendStatus(404);
}));
activityRouter.post("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__["coachAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const validationData = yield Object(_utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__["validateActivity"])(req.body);
    if (validationData && !validationData.isValid) {
        return res.status(422).send(validationData);
    }
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].create(Object.assign({}, req.body));
    return res.sendStatus(200);
}));
activityRouter.put("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__["coachAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const validationData = yield Object(_utils_validateActivity__WEBPACK_IMPORTED_MODULE_5__["validateActivity"])(req.body);
    if (validationData && !validationData.isValid) {
        return res.status(422).send(validationData);
    }
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].findByIdAndUpdate(id, Object.assign({}, req.body));
    return res.sendStatus(200);
}));
activityRouter.delete("/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_7__["coachAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].findByIdAndDelete(id, (err) => {
        if (err)
            return console.log(err);
        return res.sendStatus(200);
    });
}));
activityRouter.put("/confirm/:id/:timestamp", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_3__["studentAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const { id, timestamp } = req.params;
    const { _id: studentId } = res.locals.student;
    const dateString = Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_4__["stringifyDate"])(moment__WEBPACK_IMPORTED_MODULE_6___default.a.unix(Number(timestamp)));
    const updatedActivity = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].findById(id);
    // todo resolve type
    if (!updatedActivity.confirmation[dateString]) {
        updatedActivity.confirmation[dateString] = [];
    }
    updatedActivity.confirmation[dateString].push(studentId);
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__["ActivityModel"].findByIdAndUpdate(id, Object.assign({}, updatedActivity), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.sendStatus(200);
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/CoachRouter.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/routes/CoachRouter.ts ***!
  \***********************************************/
/*! exports provided: coachRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachRouter", function() { return coachRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/coachAuthorization */ "./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAuthCookie */ "./apps/server/src/utils/getAuthCookie.ts");
/* harmony import */ var _utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hashPassword */ "./apps/server/src/utils/hashPassword.ts");






const coachRouter = Object(express__WEBPACK_IMPORTED_MODULE_2__["Router"])();
coachRouter.post("/", (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const _a = req.body, { password } = _a, data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["password"]);
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["CoachModel"].create(Object.assign(Object.assign({}, data), { password: Object(_utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__["hashPassword"])(password) }), (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const cookie = Object(_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__["getAuthCookie"])(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
}));
coachRouter.post("/login", (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["CoachModel"].findOne({ email, password: Object(_utils_hashPassword__WEBPACK_IMPORTED_MODULE_5__["hashPassword"])(password) }, (err, result) => {
        if (err || !result) {
            return res.status(401).send(err);
        }
        const cookie = Object(_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_4__["getAuthCookie"])(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
}));
coachRouter.get("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__["coachAuthorization"], (__, res) => {
    return res.status(200).send(res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__["COACH_LOCALS_NAME"]]);
});
coachRouter.get("/logout", (__, res) => {
    return res.clearCookie("access_token").sendStatus(200);
});


/***/ }),

/***/ "./apps/server/src/routes/DayRouter.ts":
/*!*********************************************!*\
  !*** ./apps/server/src/routes/DayRouter.ts ***!
  \*********************************************/
/*! exports provided: dayRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayRouter", function() { return dayRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getDayScheduleActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getDayScheduleActivities */ "./apps/server/src/utils/getDayScheduleActivities.ts");
/* harmony import */ var _utils_filterActivitiesForStudent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/filterActivitiesForStudent */ "./apps/server/src/utils/filterActivitiesForStudent.ts");





const dayRouter = Object(express__WEBPACK_IMPORTED_MODULE_2__["Router"])();
dayRouter.get("/:date", (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const { date } = req.params;
    const studentId = res.locals.student._id;
    const activities = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].find({ date }).lean();
    const studentActivities = Object(_utils_filterActivitiesForStudent__WEBPACK_IMPORTED_MODULE_4__["filterActivitiesForStudent"])(activities, {
        _id: studentId,
    });
    const parsedActivities = studentActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["createActivityFromSchema"]);
    const dayScheduleActivities = Object(_utils_getDayScheduleActivities__WEBPACK_IMPORTED_MODULE_3__["getDayScheduleActivities"])(parsedActivities);
    return res.status(200).send({
        date,
        activities: dayScheduleActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["createSchemaFromActivity"]),
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/StudentRouter.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/routes/StudentRouter.ts ***!
  \*************************************************/
/*! exports provided: studentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentRouter", function() { return studentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/coachAuthorization */ "./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/studentAuthorization */ "./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getAuthCookie */ "./apps/server/src/utils/getAuthCookie.ts");






const studentRouter = Object(express__WEBPACK_IMPORTED_MODULE_2__["Router"])();
studentRouter.post("/", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__["coachAuthorization"], (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["StudentModel"].create(Object.assign({}, req.body), (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.status(200).send(result);
    });
}));
studentRouter.post("/login", (req, res) => {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["StudentModel"].findById(req.body.id, (err, result) => {
        if (err || !result) {
            return res.status(401).send(err);
        }
        const cookie = Object(_utils_getAuthCookie__WEBPACK_IMPORTED_MODULE_5__["getAuthCookie"])(result);
        return res.status(200).cookie(cookie.name, cookie.token).send(result);
    });
});
studentRouter.get("/logout", (__, res) => {
    return res.clearCookie("access_token").sendStatus(200);
});
studentRouter.get("/", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__["studentAuthorization"], (__, res) => {
    return res.status(200).send(res.locals[_middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_4__["STUDENT_LOCALS_NAME"]]);
});
studentRouter.delete("/:id", (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const studentId = req.params.id;
    yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["StudentModel"].findByIdAndDelete(studentId);
    const studentsActivities = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].find({
        students: { $in: [studentId] },
    }).lean();
    studentsActivities.forEach(({ _id: activityId, students }) => {
        const filteredStudents = students.filter((id) => id !== studentId);
        const shouldDeleteStudentActivity = !filteredStudents.length;
        if (shouldDeleteStudentActivity) {
            _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].findByIdAndDelete(activityId);
        }
        else {
            _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].findByIdAndUpdate(activityId, {
                students: filteredStudents,
            });
        }
    });
    res.sendStatus(200);
}));
studentRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["StudentModel"].findByIdAndUpdate(id, Object.assign({}, req.body), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});
studentRouter.get("/coach/:id", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_3__["coachAuthorization"], (req, res) => {
    _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["StudentModel"].find({ coachId: req.params.id }, (err, result) => {
        if (err) {
            return res.status(401).send(err);
        }
        return res.status(200).send(result);
    });
});


/***/ }),

/***/ "./apps/server/src/routes/WeekRouter.ts":
/*!**********************************************!*\
  !*** ./apps/server/src/routes/WeekRouter.ts ***!
  \**********************************************/
/*! exports provided: weekRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekRouter", function() { return weekRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filterActivities */ "./apps/server/src/utils/filterActivities.ts");
/* harmony import */ var _utils_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getDateStringRangeFromWeek */ "./apps/server/src/utils/getDateStringRangeFromWeek.ts");
/* harmony import */ var _utils_getTimeRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTimeRange */ "./apps/server/src/utils/getTimeRange.ts");
/* harmony import */ var _utils_getDaysOfCalendarWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getDaysOfCalendarWeek */ "./apps/server/src/utils/getDaysOfCalendarWeek.ts");
/* harmony import */ var _utils_parseActivitiesFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parseActivitiesFilter */ "./apps/server/src/utils/parseActivitiesFilter.ts");
/* harmony import */ var _utils_repeatActivities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/repeatActivities */ "./apps/server/src/utils/repeatActivities.ts");
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middleware/coachAuthorization */ "./apps/server/src/middleware/coachAuthorization.ts");










const weekRouter = Object(express__WEBPACK_IMPORTED_MODULE_2__["Router"])();
weekRouter.get("/:year/:week", (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const year = Number(req.params.year);
    const week = Number(req.params.week);
    const currentWeek = Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["getDaysOfWeek"])({ year, week });
    const { filter } = req.query;
    const parsedFilter = Object(_utils_parseActivitiesFilter__WEBPACK_IMPORTED_MODULE_7__["parseActivitiesFilter"])(filter);
    let activitiesWithoutRepeat = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].find({
        coachId: res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__["COACH_LOCALS_NAME"]]._id,
        repeatType: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["RepeatTypeEnum"].None,
    }).lean();
    activitiesWithoutRepeat = Object(_utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__["filterActivities"])(activitiesWithoutRepeat, parsedFilter);
    let activitiesWithRepeat = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].find({
        coachId: res.locals[_middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_9__["COACH_LOCALS_NAME"]]._id,
        repeatType: { $gt: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["RepeatTypeEnum"].None },
    }).lean();
    activitiesWithRepeat = Object(_utils_filterActivities__WEBPACK_IMPORTED_MODULE_3__["filterActivities"])(activitiesWithRepeat, parsedFilter);
    activitiesWithRepeat = Object(_utils_repeatActivities__WEBPACK_IMPORTED_MODULE_8__["repeatActivities"])(activitiesWithRepeat, currentWeek);
    res.status(200).send({
        days: Object(_utils_getDaysOfCalendarWeek__WEBPACK_IMPORTED_MODULE_6__["getDaysOfCalendarWeek"])([...activitiesWithoutRepeat, ...activitiesWithRepeat], { week, year }),
        year,
        week,
        weekInfo: {
            days: Object(_utils_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_4__["getDateStringRangeFromWeek"])({ week, year }),
            timeRange: Object(_utils_getTimeRange__WEBPACK_IMPORTED_MODULE_5__["getTimeRange"])(),
        },
    });
}));


/***/ }),

/***/ "./apps/server/src/routes/index.ts":
/*!*****************************************!*\
  !*** ./apps/server/src/routes/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/coachAuthorization */ "./apps/server/src/middleware/coachAuthorization.ts");
/* harmony import */ var _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/studentAuthorization */ "./apps/server/src/middleware/studentAuthorization.ts");
/* harmony import */ var _ActivityRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActivityRouter */ "./apps/server/src/routes/ActivityRouter.ts");
/* harmony import */ var _DayRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DayRouter */ "./apps/server/src/routes/DayRouter.ts");
/* harmony import */ var _StudentRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudentRouter */ "./apps/server/src/routes/StudentRouter.ts");
/* harmony import */ var _CoachRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CoachRouter */ "./apps/server/src/routes/CoachRouter.ts");
/* harmony import */ var _WeekRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WeekRouter */ "./apps/server/src/routes/WeekRouter.ts");








// Init router and path
const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
// Add sub-routes
router.use("/activity", _ActivityRouter__WEBPACK_IMPORTED_MODULE_3__["activityRouter"]);
router.use("/week", _middleware_coachAuthorization__WEBPACK_IMPORTED_MODULE_1__["coachAuthorization"], _WeekRouter__WEBPACK_IMPORTED_MODULE_7__["weekRouter"]);
router.use("/day", _middleware_studentAuthorization__WEBPACK_IMPORTED_MODULE_2__["studentAuthorization"], _DayRouter__WEBPACK_IMPORTED_MODULE_4__["dayRouter"]);
router.use("/coach", _CoachRouter__WEBPACK_IMPORTED_MODULE_6__["coachRouter"]);
router.use("/student", _StudentRouter__WEBPACK_IMPORTED_MODULE_5__["studentRouter"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/server/src/utils/filterActivities.ts":
/*!***************************************************!*\
  !*** ./apps/server/src/utils/filterActivities.ts ***!
  \***************************************************/
/*! exports provided: filterActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActivities", function() { return filterActivities; });
/* harmony import */ var _filterActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterActivity */ "./apps/server/src/utils/filterActivity.ts");

const filterActivities = (activities, filter = []) => {
    return activities.filter((activity) => Object(_filterActivity__WEBPACK_IMPORTED_MODULE_0__["filterActivity"])(activity, filter));
};


/***/ }),

/***/ "./apps/server/src/utils/filterActivitiesForStudent.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/utils/filterActivitiesForStudent.ts ***!
  \*************************************************************/
/*! exports provided: filterActivitiesForStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActivitiesForStudent", function() { return filterActivitiesForStudent; });
/* harmony import */ var _filterActivityForStudent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterActivityForStudent */ "./apps/server/src/utils/filterActivityForStudent.ts");

const filterActivitiesForStudent = (activities, student) => {
    return activities.filter((activity) => Object(_filterActivityForStudent__WEBPACK_IMPORTED_MODULE_0__["filterActivityForStudent"])(activity, student));
};


/***/ }),

/***/ "./apps/server/src/utils/filterActivity.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/utils/filterActivity.ts ***!
  \*************************************************/
/*! exports provided: filterActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActivity", function() { return filterActivity; });
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
/*!***********************************************************!*\
  !*** ./apps/server/src/utils/filterActivityForStudent.ts ***!
  \***********************************************************/
/*! exports provided: filterActivityForStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActivityForStudent", function() { return filterActivityForStudent; });
const filterActivityForStudent = (activity, student) => {
    if (activity.isCommon) {
        return true;
    }
    return activity.students.includes(student._id);
};


/***/ }),

/***/ "./apps/server/src/utils/getActivityImportanceValue.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/utils/getActivityImportanceValue.ts ***!
  \*************************************************************/
/*! exports provided: getActivityImportanceValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityImportanceValue", function() { return getActivityImportanceValue; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");

const getActivityImportanceValue = (activity) => {
    let importanceValue = 0;
    if (activity.isImportant) {
        return 64;
    }
    switch (activity.repeatType) {
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].None: {
            importanceValue = 31;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryYear: {
            importanceValue = 15;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryMonth: {
            importanceValue = 7;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryWeek: {
            importanceValue = 3;
            break;
        }
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryDay: {
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
/*!************************************************!*\
  !*** ./apps/server/src/utils/getAuthCookie.ts ***!
  \************************************************/
/*! exports provided: getAuthCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthCookie", function() { return getAuthCookie; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const getAuthCookie = (user) => {
    return {
        name: "access_token",
        token: jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["sign"](JSON.stringify(user), process.env.SECRET_KEY || ""),
    };
};


/***/ }),

/***/ "./apps/server/src/utils/getDateStringRangeFromWeek.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/utils/getDateStringRangeFromWeek.ts ***!
  \*************************************************************/
/*! exports provided: getDateStringRangeFromWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateStringRangeFromWeek", function() { return getDateStringRangeFromWeek; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");


const getDateStringRangeFromWeek = (weekInfo) => {
    const daysOfWeek = Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["getDaysOfWeek"])(weekInfo);
    return daysOfWeek.map(_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__["stringifyDate"]);
};


/***/ }),

/***/ "./apps/server/src/utils/getDayScheduleActivities.ts":
/*!***********************************************************!*\
  !*** ./apps/server/src/utils/getDayScheduleActivities.ts ***!
  \***********************************************************/
/*! exports provided: getDayScheduleActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayScheduleActivities", function() { return getDayScheduleActivities; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _getHighPriorityActivityFromGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHighPriorityActivityFromGroup */ "./apps/server/src/utils/getHighPriorityActivityFromGroup.ts");


const getDayScheduleActivities = (activities) => {
    const groups = Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["groupActivities"])(activities);
    const unsortedScheduleActivities = [];
    groups.forEach((group) => {
        const activity = Object(_getHighPriorityActivityFromGroup__WEBPACK_IMPORTED_MODULE_1__["getHighPriorityActivityFromGroup"])(group);
        if (activity) {
            unsortedScheduleActivities.push(activity);
        }
    });
    return Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["sortActivitiesByTime"])(unsortedScheduleActivities);
};


/***/ }),

/***/ "./apps/server/src/utils/getDaysOfCalendarWeek.ts":
/*!********************************************************!*\
  !*** ./apps/server/src/utils/getDaysOfCalendarWeek.ts ***!
  \********************************************************/
/*! exports provided: getDaysOfCalendarWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysOfCalendarWeek", function() { return getDaysOfCalendarWeek; });
/* harmony import */ var _getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDateStringRangeFromWeek */ "./apps/server/src/utils/getDateStringRangeFromWeek.ts");

function getDaysOfCalendarWeek(activities, weekInfo) {
    const daysOfWeek = Object(_getDateStringRangeFromWeek__WEBPACK_IMPORTED_MODULE_0__["getDateStringRangeFromWeek"])(weekInfo);
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
/*!*******************************************************************!*\
  !*** ./apps/server/src/utils/getHighPriorityActivityFromGroup.ts ***!
  \*******************************************************************/
/*! exports provided: getHighPriorityActivityFromGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighPriorityActivityFromGroup", function() { return getHighPriorityActivityFromGroup; });
/* harmony import */ var _getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getActivityImportanceValue */ "./apps/server/src/utils/getActivityImportanceValue.ts");

const getHighPriorityActivityFromGroup = (group) => {
    const maxImportance = Math.max(...group.activities.map((activity) => Object(_getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__["getActivityImportanceValue"])(activity)));
    const firstMaxImportant = group.activities.find((activity) => Object(_getActivityImportanceValue__WEBPACK_IMPORTED_MODULE_0__["getActivityImportanceValue"])(activity) === maxImportance);
    return firstMaxImportant;
};


/***/ }),

/***/ "./apps/server/src/utils/getTimeRange.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/utils/getTimeRange.ts ***!
  \***********************************************/
/*! exports provided: getTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeRange", function() { return getTimeRange; });
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
/*!***********************************************!*\
  !*** ./apps/server/src/utils/hashPassword.ts ***!
  \***********************************************/
/*! exports provided: hashPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const hashPassword = (password) => {
    return crypto__WEBPACK_IMPORTED_MODULE_0___default.a
        .createHmac("sha256", process.env.SECRET_KEY || "")
        .update(password)
        .digest("hex");
};


/***/ }),

/***/ "./apps/server/src/utils/parseActivitiesFilter.ts":
/*!********************************************************!*\
  !*** ./apps/server/src/utils/parseActivitiesFilter.ts ***!
  \********************************************************/
/*! exports provided: parseActivitiesFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseActivitiesFilter", function() { return parseActivitiesFilter; });
const parseActivitiesFilter = (filter = "") => {
    return filter === null || filter === void 0 ? void 0 : filter.split(",");
};


/***/ }),

/***/ "./apps/server/src/utils/repeatActivities.ts":
/*!***************************************************!*\
  !*** ./apps/server/src/utils/repeatActivities.ts ***!
  \***************************************************/
/*! exports provided: repeatActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivities", function() { return repeatActivities; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");

const repeatActivities = (activities, currentWeek) => {
    let repeatedActivities = [];
    activities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["createActivityFromSchema"]).forEach((activity) => {
        const repeatedActivity = Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["repeatActivity"])(activity, currentWeek);
        if (repeatedActivity) {
            repeatedActivities = repeatedActivities.concat(repeatedActivity);
        }
    });
    return repeatedActivities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["createSchemaFromActivity"]);
};


/***/ }),

/***/ "./apps/server/src/utils/validateActivity.ts":
/*!***************************************************!*\
  !*** ./apps/server/src/utils/validateActivity.ts ***!
  \***************************************************/
/*! exports provided: validateActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateActivity", function() { return validateActivity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validateActivityImportance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateActivityImportance */ "./apps/server/src/utils/validateActivityImportance.ts");
/* harmony import */ var _validateActivityTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateActivityTime */ "./apps/server/src/utils/validateActivityTime.ts");



const validateActivity = (activity) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    try {
        Object(_validateActivityTime__WEBPACK_IMPORTED_MODULE_2__["validateActivityTime"])(activity);
        yield Object(_validateActivityImportance__WEBPACK_IMPORTED_MODULE_1__["validateActivityImportance"])(activity);
        return;
    }
    catch (error) {
        return error;
    }
});


/***/ }),

/***/ "./apps/server/src/utils/validateActivityImportance.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/utils/validateActivityImportance.ts ***!
  \*************************************************************/
/*! exports provided: validateActivityImportance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateActivityImportance", function() { return validateActivityImportance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");


const validateActivityImportance = (activity) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    if (activity.isImportant) {
        const importantActivitySameDay = yield _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"].findOne({
            date: activity.date,
            isImportant: true,
        });
        if (importantActivitySameDay &&
            Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["isTimeCrossed"])(Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["createActivityFromSchema"])(activity), Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["createActivityFromSchema"])(importantActivitySameDay))) {
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
/*!*******************************************************!*\
  !*** ./apps/server/src/utils/validateActivityTime.ts ***!
  \*******************************************************/
/*! exports provided: validateActivityTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateActivityTime", function() { return validateActivityTime; });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");

const validateActivityTime = (activity) => {
    const startTime = Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseTime"])(activity.start);
    const endTime = Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseTime"])(activity.end);
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
/*!*************************************!*\
  !*** ./libs/constants/src/index.ts ***!
  \*************************************/
/*! exports provided: DATE_FORMAT, TIME_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants */ "./libs/constants/src/lib/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return _lib_constants__WEBPACK_IMPORTED_MODULE_0__["DATE_FORMAT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return _lib_constants__WEBPACK_IMPORTED_MODULE_0__["TIME_FORMAT"]; });




/***/ }),

/***/ "./libs/constants/src/lib/constants.ts":
/*!*********************************************!*\
  !*** ./libs/constants/src/lib/constants.ts ***!
  \*********************************************/
/*! exports provided: DATE_FORMAT, TIME_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return TIME_FORMAT; });
const DATE_FORMAT = "DD.MM.YYYY";
const TIME_FORMAT = "HH:mm";


/***/ }),

/***/ "./libs/domains/src/index.ts":
/*!***********************************!*\
  !*** ./libs/domains/src/index.ts ***!
  \***********************************/
/*! exports provided: createActivityAPI, ActivityModel, activitySlice, activityActions, activityReducer, RepeatTypeEnum, addActivityToGroup, createActivityFromSchema, createSchemaFromActivity, groupActivities, isTimeCrossed, sortActivitiesByTime, createWeekAPI, weekSlice, weekActions, weekReducer, createWeekFromSchema, createWeekInfoFromSchema, dateInfoToMoment, getCurrentDateInfo, getDateInfoFromMoment, getDateInfoQuery, getDaysOfWeek, repeatActivity, createDayAPI, daySlice, dayActions, dayReducer, createDayFromSchema, createCoachAPI, CoachModel, coachSlice, coachActions, coachReducer, createStudentAPI, StudentModel, studentSlice, studentActions, studentReducer, studentAuthSlice, studentAuthActions, studentAuthReducer, studentsSlice, studentsActions, studentsReducer, ColorEnum, ClockTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/activity */ "./libs/domains/src/lib/activity/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActivityAPI", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["createActivityAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityModel", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["ActivityModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activitySlice", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["activitySlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityActions", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["activityActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityReducer", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["activityReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatTypeEnum", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addActivityToGroup", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["addActivityToGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActivityFromSchema", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["createActivityFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSchemaFromActivity", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["createSchemaFromActivity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupActivities", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["groupActivities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeCrossed", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["isTimeCrossed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortActivitiesByTime", function() { return _lib_activity__WEBPACK_IMPORTED_MODULE_0__["sortActivitiesByTime"]; });

/* harmony import */ var _lib_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/week */ "./libs/domains/src/lib/week/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekAPI", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["createWeekAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekSlice", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["weekSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekActions", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["weekActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekReducer", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["weekReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekFromSchema", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["createWeekFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekInfoFromSchema", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["createWeekInfoFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateInfoToMoment", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["dateInfoToMoment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateInfo", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["getCurrentDateInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoFromMoment", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["getDateInfoFromMoment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoQuery", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["getDateInfoQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysOfWeek", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["getDaysOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivity", function() { return _lib_week__WEBPACK_IMPORTED_MODULE_1__["repeatActivity"]; });

/* harmony import */ var _lib_day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/day */ "./libs/domains/src/lib/day/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDayAPI", function() { return _lib_day__WEBPACK_IMPORTED_MODULE_2__["createDayAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daySlice", function() { return _lib_day__WEBPACK_IMPORTED_MODULE_2__["daySlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayActions", function() { return _lib_day__WEBPACK_IMPORTED_MODULE_2__["dayActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayReducer", function() { return _lib_day__WEBPACK_IMPORTED_MODULE_2__["dayReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDayFromSchema", function() { return _lib_day__WEBPACK_IMPORTED_MODULE_2__["createDayFromSchema"]; });

/* harmony import */ var _lib_coach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/coach */ "./libs/domains/src/lib/coach/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCoachAPI", function() { return _lib_coach__WEBPACK_IMPORTED_MODULE_3__["createCoachAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoachModel", function() { return _lib_coach__WEBPACK_IMPORTED_MODULE_3__["CoachModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachSlice", function() { return _lib_coach__WEBPACK_IMPORTED_MODULE_3__["coachSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachActions", function() { return _lib_coach__WEBPACK_IMPORTED_MODULE_3__["coachActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachReducer", function() { return _lib_coach__WEBPACK_IMPORTED_MODULE_3__["coachReducer"]; });

/* harmony import */ var _lib_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/student */ "./libs/domains/src/lib/student/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStudentAPI", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["createStudentAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentModel", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["StudentModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentSlice", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentActions", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentReducer", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthSlice", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentAuthSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthActions", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentAuthActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthReducer", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentAuthReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsSlice", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentsSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsActions", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsReducer", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["studentsReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEnum", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockTypeEnum", function() { return _lib_student__WEBPACK_IMPORTED_MODULE_4__["ClockTypeEnum"]; });








/***/ }),

/***/ "./libs/domains/src/lib/activity/api.ts":
/*!**********************************************!*\
  !*** ./libs/domains/src/lib/activity/api.ts ***!
  \**********************************************/
/*! exports provided: createActivityAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActivityAPI", function() { return createActivityAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./libs/domains/src/lib/activity/utils/index.ts");


const createActivityAPI = (client) => ({
    createActivity: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.post("/activity", Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createSchemaFromActivity"])(data));
        return request;
    }),
    updateActivity: (activity) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.put(`/activity/${activity._id}`, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createSchemaFromActivity"])(activity));
        return request;
    }),
    deleteActivity: (id) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.delete(`/activity/${id}`);
        return request;
    }),
    confirmActivity: ({ id, timestamp }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.put(`/activity/confirm/${id}/${timestamp}`);
        return request;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/activity/index.ts":
/*!************************************************!*\
  !*** ./libs/domains/src/lib/activity/index.ts ***!
  \************************************************/
/*! exports provided: createActivityAPI, ActivityModel, activitySlice, activityActions, activityReducer, RepeatTypeEnum, addActivityToGroup, createActivityFromSchema, createSchemaFromActivity, groupActivities, isTimeCrossed, sortActivitiesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./libs/domains/src/lib/activity/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActivityAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createActivityAPI"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./libs/domains/src/lib/activity/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ActivityModel"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ "./libs/domains/src/lib/activity/slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activitySlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["activitySlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityActions", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["activityActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityReducer", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["activityReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/activity/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatTypeEnum", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["RepeatTypeEnum"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./libs/domains/src/lib/activity/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addActivityToGroup", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["addActivityToGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActivityFromSchema", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["createActivityFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSchemaFromActivity", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["createSchemaFromActivity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupActivities", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["groupActivities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeCrossed", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["isTimeCrossed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortActivitiesByTime", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["sortActivitiesByTime"]; });








/***/ }),

/***/ "./libs/domains/src/lib/activity/model.ts":
/*!************************************************!*\
  !*** ./libs/domains/src/lib/activity/model.ts ***!
  \************************************************/
/*! exports provided: ActivityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModel", function() { return ActivityModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/activity/types.ts");


const activitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
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
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
        required: true,
    },
    repeatType: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_1__["RepeatTypeEnum"].None,
    },
    isCommon: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Boolean,
        required: true,
        default: false,
    },
    isImportant: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Boolean,
        required: true,
        default: false,
    },
    students: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Array,
        default: [],
    },
    confirmation: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Mixed,
        default: {},
    },
}, { versionKey: false, minimize: false });
const ActivityModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("activity", activitySchema);


/***/ }),

/***/ "./libs/domains/src/lib/activity/slice.ts":
/*!************************************************!*\
  !*** ./libs/domains/src/lib/activity/slice.ts ***!
  \************************************************/
/*! exports provided: activitySlice, activityActions, activityReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activitySlice", function() { return activitySlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityActions", function() { return activityActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityReducer", function() { return activityReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    activity: null,
};
const activitySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!************************************************!*\
  !*** ./libs/domains/src/lib/activity/types.ts ***!
  \************************************************/
/*! exports provided: RepeatTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatTypeEnum", function() { return RepeatTypeEnum; });
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
/*!*******************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/addActivityToGroup.ts ***!
  \*******************************************************************/
/*! exports provided: addActivityToGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActivityToGroup", function() { return addActivityToGroup; });
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
/*!************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/compareActivitiesByTime.ts ***!
  \************************************************************************/
/*! exports provided: compareActivitiesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareActivitiesByTime", function() { return compareActivitiesByTime; });
const compareActivitiesByTime = (a, b) => {
    return a.start.unix() - b.start.unix();
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/createActivityFromSchema.ts":
/*!*************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/createActivityFromSchema.ts ***!
  \*************************************************************************/
/*! exports provided: createActivityFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActivityFromSchema", function() { return createActivityFromSchema; });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");

const createActivityFromSchema = (activitySchema) => {
    return Object.assign(Object.assign({}, activitySchema), { date: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseDate"])(activitySchema.date), start: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseTime"])(activitySchema.start), end: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseTime"])(activitySchema.end) });
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/createSchemaFromActivity.ts":
/*!*************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/createSchemaFromActivity.ts ***!
  \*************************************************************************/
/*! exports provided: createSchemaFromActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchemaFromActivity", function() { return createSchemaFromActivity; });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");

const createSchemaFromActivity = (activity) => {
    return Object.assign(Object.assign({}, activity), { date: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["stringifyDate"])(activity.date), start: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["stringifyTime"])(activity.start), end: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["stringifyTime"])(activity.end) });
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/groupActivities.ts":
/*!********************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/groupActivities/groupActivities.ts ***!
  \********************************************************************************/
/*! exports provided: groupActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupActivities", function() { return groupActivities; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addActivityToGroup */ "./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");
/* harmony import */ var _makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeGroupFromActivity */ "./libs/domains/src/lib/activity/utils/groupActivities/makeGroupFromActivity.ts");
/* harmony import */ var _mergeGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeGroups */ "./libs/domains/src/lib/activity/utils/groupActivities/mergeGroups.ts");




const groupActivities = (activities = []) => {
    let groups = [];
    activities.forEach((activity) => {
        const groupsOfActivity = groups.filter((group) => Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["isTimeCrossed"])(group, activity));
        const otherGroups = groups.filter((group) => !Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["isTimeCrossed"])(group, activity));
        const shouldMergeGroups = groupsOfActivity.length > 1;
        const groupOfActivity = groupsOfActivity[0];
        if (shouldMergeGroups) {
            const mergedGroup = Object(_mergeGroups__WEBPACK_IMPORTED_MODULE_3__["mergeGroups"])(groupsOfActivity);
            groups = [...otherGroups, mergedGroup];
            return;
        }
        if (groupOfActivity) {
            Object(_addActivityToGroup__WEBPACK_IMPORTED_MODULE_1__["addActivityToGroup"])(groupOfActivity, activity);
        }
        else {
            const newGroup = Object(_makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_2__["makeGroupFromActivity"])(activity);
            groups.push(newGroup);
        }
    });
    return groups;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/index.ts":
/*!**********************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/groupActivities/index.ts ***!
  \**********************************************************************/
/*! exports provided: groupActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupActivities */ "./libs/domains/src/lib/activity/utils/groupActivities/groupActivities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupActivities", function() { return _groupActivities__WEBPACK_IMPORTED_MODULE_0__["groupActivities"]; });




/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/groupActivities/makeGroupFromActivity.ts":
/*!**************************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/groupActivities/makeGroupFromActivity.ts ***!
  \**************************************************************************************/
/*! exports provided: makeGroupFromActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGroupFromActivity", function() { return makeGroupFromActivity; });
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
/*!****************************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/groupActivities/mergeGroups.ts ***!
  \****************************************************************************/
/*! exports provided: mergeGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeGroups", function() { return mergeGroups; });
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addActivityToGroup */ "./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");

const mergeGroups = (groups) => {
    const baseGroup = groups[0];
    for (let i = 1; i < groups.length; i++) {
        groups[i].activities.forEach((activity) => Object(_addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__["addActivityToGroup"])(baseGroup, activity));
    }
    return baseGroup;
};


/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/index.ts":
/*!******************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/index.ts ***!
  \******************************************************/
/*! exports provided: addActivityToGroup, createActivityFromSchema, createSchemaFromActivity, groupActivities, isTimeCrossed, sortActivitiesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addActivityToGroup */ "./libs/domains/src/lib/activity/utils/addActivityToGroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addActivityToGroup", function() { return _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__["addActivityToGroup"]; });

/* harmony import */ var _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createActivityFromSchema */ "./libs/domains/src/lib/activity/utils/createActivityFromSchema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActivityFromSchema", function() { return _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__["createActivityFromSchema"]; });

/* harmony import */ var _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSchemaFromActivity */ "./libs/domains/src/lib/activity/utils/createSchemaFromActivity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSchemaFromActivity", function() { return _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__["createSchemaFromActivity"]; });

/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupActivities */ "./libs/domains/src/lib/activity/utils/groupActivities/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupActivities", function() { return _groupActivities__WEBPACK_IMPORTED_MODULE_3__["groupActivities"]; });

/* harmony import */ var _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTimeCrossed */ "./libs/domains/src/lib/activity/utils/isTimeCrossed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeCrossed", function() { return _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__["isTimeCrossed"]; });

/* harmony import */ var _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sortActivitiesByTime */ "./libs/domains/src/lib/activity/utils/sortActivitiesByTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortActivitiesByTime", function() { return _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__["sortActivitiesByTime"]; });









/***/ }),

/***/ "./libs/domains/src/lib/activity/utils/isTimeCrossed.ts":
/*!**************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/isTimeCrossed.ts ***!
  \**************************************************************/
/*! exports provided: isTimeCrossed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeCrossed", function() { return isTimeCrossed; });
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
/*!*********************************************************************!*\
  !*** ./libs/domains/src/lib/activity/utils/sortActivitiesByTime.ts ***!
  \*********************************************************************/
/*! exports provided: sortActivitiesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortActivitiesByTime", function() { return sortActivitiesByTime; });
/* harmony import */ var _compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareActivitiesByTime */ "./libs/domains/src/lib/activity/utils/compareActivitiesByTime.ts");

const sortActivitiesByTime = (activities) => {
    return activities.sort((a, b) => Object(_compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_0__["compareActivitiesByTime"])(a, b));
};


/***/ }),

/***/ "./libs/domains/src/lib/coach/api.ts":
/*!*******************************************!*\
  !*** ./libs/domains/src/lib/coach/api.ts ***!
  \*******************************************/
/*! exports provided: createCoachAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoachAPI", function() { return createCoachAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

const createCoachAPI = (client) => ({
    login: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.post("/coach/login", data);
        return request.data;
    }),
    logout: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.get("/coach/logout");
        return request.data;
    }),
    register: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.post("/coach", data);
        return request.data;
    }),
    getCoach: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.get("/coach");
        return request.data;
    }),
    updateCoach: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.put("/coach", data);
        return request.data;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/coach/index.ts":
/*!*********************************************!*\
  !*** ./libs/domains/src/lib/coach/index.ts ***!
  \*********************************************/
/*! exports provided: createCoachAPI, CoachModel, coachSlice, coachActions, coachReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./libs/domains/src/lib/coach/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCoachAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createCoachAPI"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./libs/domains/src/lib/coach/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoachModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CoachModel"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ "./libs/domains/src/lib/coach/slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["coachSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachActions", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["coachActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coachReducer", function() { return _slice__WEBPACK_IMPORTED_MODULE_2__["coachReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/coach/types.ts");
/* empty/unused harmony star reexport */





/***/ }),

/***/ "./libs/domains/src/lib/coach/model.ts":
/*!*********************************************!*\
  !*** ./libs/domains/src/lib/coach/model.ts ***!
  \*********************************************/
/*! exports provided: CoachModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachModel", function() { return CoachModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const coachSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
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
const CoachModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("coach", coachSchema);


/***/ }),

/***/ "./libs/domains/src/lib/coach/slice.ts":
/*!*********************************************!*\
  !*** ./libs/domains/src/lib/coach/slice.ts ***!
  \*********************************************/
/*! exports provided: coachSlice, coachActions, coachReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachSlice", function() { return coachSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachActions", function() { return coachActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachReducer", function() { return coachReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    coach: null,
    isLogged: false,
};
const coachSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!*********************************************!*\
  !*** ./libs/domains/src/lib/coach/types.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/day/api.ts":
/*!*****************************************!*\
  !*** ./libs/domains/src/lib/day/api.ts ***!
  \*****************************************/
/*! exports provided: createDayAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDayAPI", function() { return createDayAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");


const createDayAPI = (client) => ({
    getDay: (date) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const response = yield client.get(`/day/${date}`);
        return Object(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__["createDayFromSchema"])(response.data);
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/day/index.ts":
/*!*******************************************!*\
  !*** ./libs/domains/src/lib/day/index.ts ***!
  \*******************************************/
/*! exports provided: createDayAPI, daySlice, dayActions, dayReducer, createDayFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./libs/domains/src/lib/day/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDayAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createDayAPI"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./libs/domains/src/lib/day/slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daySlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["daySlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayActions", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["dayActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayReducer", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["dayReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/day/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./libs/domains/src/lib/day/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDayFromSchema", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createDayFromSchema"]; });







/***/ }),

/***/ "./libs/domains/src/lib/day/slice.ts":
/*!*******************************************!*\
  !*** ./libs/domains/src/lib/day/slice.ts ***!
  \*******************************************/
/*! exports provided: daySlice, dayActions, dayReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daySlice", function() { return daySlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayActions", function() { return dayActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayReducer", function() { return dayReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    day: null,
};
const daySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!*******************************************!*\
  !*** ./libs/domains/src/lib/day/types.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/day/utils/createDayFromSchema.ts":
/*!***************************************************************!*\
  !*** ./libs/domains/src/lib/day/utils/createDayFromSchema.ts ***!
  \***************************************************************/
/*! exports provided: createDayFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDayFromSchema", function() { return createDayFromSchema; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");


const createDayFromSchema = (daySchema) => {
    const day = {
        date: Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(daySchema.date),
        activities: daySchema.activities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["createActivityFromSchema"]),
    };
    return day;
};


/***/ }),

/***/ "./libs/domains/src/lib/day/utils/index.ts":
/*!*************************************************!*\
  !*** ./libs/domains/src/lib/day/utils/index.ts ***!
  \*************************************************/
/*! exports provided: createDayFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDayFromSchema */ "./libs/domains/src/lib/day/utils/createDayFromSchema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDayFromSchema", function() { return _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__["createDayFromSchema"]; });




/***/ }),

/***/ "./libs/domains/src/lib/student/api.ts":
/*!*********************************************!*\
  !*** ./libs/domains/src/lib/student/api.ts ***!
  \*********************************************/
/*! exports provided: createStudentAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStudentAPI", function() { return createStudentAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

const createStudentAPI = (client) => ({
    login: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.post("/student/login", data);
        return request.data;
    }),
    logout: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.get("/student/logout");
        return request.data;
    }),
    getStudent: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.get("/student");
        return request.data;
    }),
    createStudent: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.post("/student", data);
        return request;
    }),
    updateStudent: (_a) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        var { _id } = _a, data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["_id"]);
        const request = yield client.put(`/student/${_id}`, data);
        return request.data;
    }),
    deleteStudent: (id) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.delete(`/student/${id}`);
        return request;
    }),
    getStudents: (coachId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const request = yield client.get(`/student/coach/${coachId}`);
        return request.data;
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/student/index.ts":
/*!***********************************************!*\
  !*** ./libs/domains/src/lib/student/index.ts ***!
  \***********************************************/
/*! exports provided: createStudentAPI, StudentModel, studentSlice, studentActions, studentReducer, studentAuthSlice, studentAuthActions, studentAuthReducer, studentsSlice, studentsActions, studentsReducer, ColorEnum, ClockTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./libs/domains/src/lib/student/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStudentAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createStudentAPI"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./libs/domains/src/lib/student/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["StudentModel"]; });

/* harmony import */ var _studentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentSlice */ "./libs/domains/src/lib/student/studentSlice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentSlice", function() { return _studentSlice__WEBPACK_IMPORTED_MODULE_2__["studentSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentActions", function() { return _studentSlice__WEBPACK_IMPORTED_MODULE_2__["studentActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentReducer", function() { return _studentSlice__WEBPACK_IMPORTED_MODULE_2__["studentReducer"]; });

/* harmony import */ var _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studentAuthSlice */ "./libs/domains/src/lib/student/studentAuthSlice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthSlice", function() { return _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__["studentAuthSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthActions", function() { return _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__["studentAuthActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAuthReducer", function() { return _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__["studentAuthReducer"]; });

/* harmony import */ var _studentsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./studentsSlice */ "./libs/domains/src/lib/student/studentsSlice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsSlice", function() { return _studentsSlice__WEBPACK_IMPORTED_MODULE_4__["studentsSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsActions", function() { return _studentsSlice__WEBPACK_IMPORTED_MODULE_4__["studentsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentsReducer", function() { return _studentsSlice__WEBPACK_IMPORTED_MODULE_4__["studentsReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/student/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEnum", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["ColorEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockTypeEnum", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["ClockTypeEnum"]; });









/***/ }),

/***/ "./libs/domains/src/lib/student/model.ts":
/*!***********************************************!*\
  !*** ./libs/domains/src/lib/student/model.ts ***!
  \***********************************************/
/*! exports provided: StudentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModel", function() { return StudentModel; });
/* harmony import */ var _routine_support_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/types */ "./libs/types/src/index.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/student/types.ts");



const studentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    name: {
        type: String,
        required: true,
    },
    coachId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"].Types.ObjectId,
        required: true,
    },
    color: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_2__["ColorEnum"].Purple,
    },
    pinCode: {
        type: String,
        required: true,
        default: "0000",
    },
    clockType: {
        type: Number,
        required: true,
        default: _types__WEBPACK_IMPORTED_MODULE_2__["ClockTypeEnum"].Analog,
    },
    language: {
        type: String,
        required: true,
        default: _routine_support_types__WEBPACK_IMPORTED_MODULE_0__["LanguageEnum"].En,
    },
}, { versionKey: false });
const StudentModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_1__["model"])("student", studentSchema);


/***/ }),

/***/ "./libs/domains/src/lib/student/studentAuthSlice.ts":
/*!**********************************************************!*\
  !*** ./libs/domains/src/lib/student/studentAuthSlice.ts ***!
  \**********************************************************/
/*! exports provided: studentAuthSlice, studentAuthActions, studentAuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentAuthSlice", function() { return studentAuthSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentAuthActions", function() { return studentAuthActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentAuthReducer", function() { return studentAuthReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    student: null,
    isLogged: false,
};
const studentAuthSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!******************************************************!*\
  !*** ./libs/domains/src/lib/student/studentSlice.ts ***!
  \******************************************************/
/*! exports provided: studentSlice, studentActions, studentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentSlice", function() { return studentSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentActions", function() { return studentActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentReducer", function() { return studentReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    student: null,
};
const studentSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!*******************************************************!*\
  !*** ./libs/domains/src/lib/student/studentsSlice.ts ***!
  \*******************************************************/
/*! exports provided: studentsSlice, studentsActions, studentsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentsSlice", function() { return studentsSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentsActions", function() { return studentsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentsReducer", function() { return studentsReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    students: [],
};
const studentsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!***********************************************!*\
  !*** ./libs/domains/src/lib/student/types.ts ***!
  \***********************************************/
/*! exports provided: ColorEnum, ClockTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEnum", function() { return ColorEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockTypeEnum", function() { return ClockTypeEnum; });
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
/*!******************************************!*\
  !*** ./libs/domains/src/lib/week/api.ts ***!
  \******************************************/
/*! exports provided: createWeekAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWeekAPI", function() { return createWeekAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./libs/domains/src/lib/week/utils/index.ts");


const createWeekAPI = (client) => ({
    getWeek: (year, week, filter) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
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
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createWeekFromSchema"])(response.data);
    }),
});


/***/ }),

/***/ "./libs/domains/src/lib/week/index.ts":
/*!********************************************!*\
  !*** ./libs/domains/src/lib/week/index.ts ***!
  \********************************************/
/*! exports provided: createWeekAPI, weekSlice, weekActions, weekReducer, createWeekFromSchema, createWeekInfoFromSchema, dateInfoToMoment, getCurrentDateInfo, getDateInfoFromMoment, getDateInfoQuery, getDaysOfWeek, repeatActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./libs/domains/src/lib/week/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createWeekAPI"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./libs/domains/src/lib/week/slice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["weekSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekActions", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["weekActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weekReducer", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["weekReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./libs/domains/src/lib/week/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./libs/domains/src/lib/week/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekFromSchema", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createWeekFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekInfoFromSchema", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["createWeekInfoFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateInfoToMoment", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["dateInfoToMoment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateInfo", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getCurrentDateInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoFromMoment", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getDateInfoFromMoment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoQuery", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getDateInfoQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysOfWeek", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getDaysOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivity", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["repeatActivity"]; });







/***/ }),

/***/ "./libs/domains/src/lib/week/slice.ts":
/*!********************************************!*\
  !*** ./libs/domains/src/lib/week/slice.ts ***!
  \********************************************/
/*! exports provided: weekSlice, weekActions, weekReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekSlice", function() { return weekSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekActions", function() { return weekActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekReducer", function() { return weekReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    week: null,
};
const weekSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
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
/*!********************************************!*\
  !*** ./libs/domains/src/lib/week/types.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/domains/src/lib/week/utils/createWeekFromSchema.ts":
/*!*****************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/createWeekFromSchema.ts ***!
  \*****************************************************************/
/*! exports provided: createWeekFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWeekFromSchema", function() { return createWeekFromSchema; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWeekInfoFromSchema */ "./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts");


const createWeekFromSchema = (weekSchema) => {
    const week = {
        days: weekSchema.days.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["createDayFromSchema"]),
        weekInfo: Object(_createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__["createWeekInfoFromSchema"])(weekSchema.weekInfo),
    };
    return week;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts":
/*!*********************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts ***!
  \*********************************************************************/
/*! exports provided: createWeekInfoFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWeekInfoFromSchema", function() { return createWeekInfoFromSchema; });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");

const createWeekInfoFromSchema = (weekInfoSchema) => {
    const weekInfo = Object.assign(Object.assign({}, weekInfoSchema), { days: weekInfoSchema.days.map((day) => Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["parseDate"])(day)), timeRange: weekInfoSchema.timeRange });
    return weekInfo;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/dateInfoToMoment.ts":
/*!*************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/dateInfoToMoment.ts ***!
  \*************************************************************/
/*! exports provided: dateInfoToMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateInfoToMoment", function() { return dateInfoToMoment; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const dateInfoToMoment = (dateInfo) => {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()().year(dateInfo.year).isoWeek(dateInfo.week);
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getCurrentDateInfo.ts":
/*!***************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/getCurrentDateInfo.ts ***!
  \***************************************************************/
/*! exports provided: getCurrentDateInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateInfo", function() { return getCurrentDateInfo; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDateInfoFromMoment */ "./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts");


const getCurrentDateInfo = () => {
    return Object(_getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__["getDateInfoFromMoment"])(moment__WEBPACK_IMPORTED_MODULE_0___default()());
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts":
/*!******************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts ***!
  \******************************************************************/
/*! exports provided: getDateInfoFromMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateInfoFromMoment", function() { return getDateInfoFromMoment; });
const getDateInfoFromMoment = (moment) => {
    return {
        year: Number(moment.clone().get("year")),
        week: Number(moment.clone().format("W")),
    };
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDateInfoQuery.ts":
/*!*************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/getDateInfoQuery.ts ***!
  \*************************************************************/
/*! exports provided: getDateInfoQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateInfoQuery", function() { return getDateInfoQuery; });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/utils */ "./libs/utils/src/index.ts");

const getDateInfoQuery = (dateInfo) => {
    const query = Object(_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__["serialize"])(dateInfo);
    return query;
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/getDaysOfWeek.ts":
/*!**********************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/getDaysOfWeek.ts ***!
  \**********************************************************/
/*! exports provided: getDaysOfWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysOfWeek", function() { return getDaysOfWeek; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
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
/*!**************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/index.ts ***!
  \**************************************************/
/*! exports provided: createWeekFromSchema, createWeekInfoFromSchema, dateInfoToMoment, getCurrentDateInfo, getDateInfoFromMoment, getDateInfoQuery, getDaysOfWeek, repeatActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createWeekFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWeekFromSchema */ "./libs/domains/src/lib/week/utils/createWeekFromSchema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekFromSchema", function() { return _createWeekFromSchema__WEBPACK_IMPORTED_MODULE_0__["createWeekFromSchema"]; });

/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWeekInfoFromSchema */ "./libs/domains/src/lib/week/utils/createWeekInfoFromSchema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWeekInfoFromSchema", function() { return _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__["createWeekInfoFromSchema"]; });

/* harmony import */ var _dateInfoToMoment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateInfoToMoment */ "./libs/domains/src/lib/week/utils/dateInfoToMoment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateInfoToMoment", function() { return _dateInfoToMoment__WEBPACK_IMPORTED_MODULE_2__["dateInfoToMoment"]; });

/* harmony import */ var _getCurrentDateInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCurrentDateInfo */ "./libs/domains/src/lib/week/utils/getCurrentDateInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateInfo", function() { return _getCurrentDateInfo__WEBPACK_IMPORTED_MODULE_3__["getCurrentDateInfo"]; });

/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDateInfoFromMoment */ "./libs/domains/src/lib/week/utils/getDateInfoFromMoment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoFromMoment", function() { return _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_4__["getDateInfoFromMoment"]; });

/* harmony import */ var _getDateInfoQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDateInfoQuery */ "./libs/domains/src/lib/week/utils/getDateInfoQuery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateInfoQuery", function() { return _getDateInfoQuery__WEBPACK_IMPORTED_MODULE_5__["getDateInfoQuery"]; });

/* harmony import */ var _getDaysOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDaysOfWeek */ "./libs/domains/src/lib/week/utils/getDaysOfWeek.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysOfWeek", function() { return _getDaysOfWeek__WEBPACK_IMPORTED_MODULE_6__["getDaysOfWeek"]; });

/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repeatActivity */ "./libs/domains/src/lib/week/utils/repeatActivity/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivity", function() { return _repeatActivity__WEBPACK_IMPORTED_MODULE_7__["repeatActivity"]; });











/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/index.ts":
/*!*****************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/index.ts ***!
  \*****************************************************************/
/*! exports provided: repeatActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeatActivity */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivity", function() { return _repeatActivity__WEBPACK_IMPORTED_MODULE_0__["repeatActivity"]; });




/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivity.ts":
/*!**************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivity.ts ***!
  \**************************************************************************/
/*! exports provided: repeatActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivity", function() { return repeatActivity; });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/domains */ "./libs/domains/src/index.ts");
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeatActivityEveryDay */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/index.ts");
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repeatActivityThisMonth */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/index.ts");
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repeatActivityThisWeek */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/index.ts");
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repeatActivityThisYear */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/index.ts");





const repeatActivity = (activity, currentWeek) => {
    switch (activity.repeatType) {
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryDay:
            return Object(_repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_1__["repeatActivityEveryDay"])(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryWeek:
            return Object(_repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_3__["repeatActivityThisWeek"])(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryMonth:
            return Object(_repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_2__["repeatActivityThisMonth"])(activity, currentWeek);
        case _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__["RepeatTypeEnum"].EveryYear:
            return Object(_repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_4__["repeatActivityThisYear"])(activity, currentWeek);
        default:
            return;
    }
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/index.ts":
/*!****************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/index.ts ***!
  \****************************************************************************************/
/*! exports provided: repeatActivityEveryDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeatActivityEveryDay */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/repeatActivityEveryDay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivityEveryDay", function() { return _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__["repeatActivityEveryDay"]; });




/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/repeatActivityEveryDay.ts":
/*!*********************************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityEveryDay/repeatActivityEveryDay.ts ***!
  \*********************************************************************************************************/
/*! exports provided: repeatActivityEveryDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivityEveryDay", function() { return repeatActivityEveryDay; });
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
/*!*********************************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/getDayNumbersFromWeek.ts ***!
  \*********************************************************************************************************/
/*! exports provided: getDayNumbersFromWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayNumbersFromWeek", function() { return getDayNumbersFromWeek; });
const getDayNumbersFromWeek = (daysOfWeek) => {
    return daysOfWeek.map((day) => day.date());
};


/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/index.ts":
/*!*****************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: repeatActivityThisMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeatActivityThisMonth */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/repeatActivityThisMonth.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisMonth", function() { return _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__["repeatActivityThisMonth"]; });




/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/repeatActivityThisMonth.ts":
/*!***********************************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/repeatActivityThisMonth.ts ***!
  \***********************************************************************************************************/
/*! exports provided: repeatActivityThisMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisMonth", function() { return repeatActivityThisMonth; });
/* harmony import */ var _getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDayNumbersFromWeek */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisMonth/getDayNumbersFromWeek.ts");

const repeatActivityThisMonth = (activity, daysOfCurrentWeek) => {
    const dayNumbersOfWeek = Object(_getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_0__["getDayNumbersFromWeek"])(daysOfCurrentWeek);
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
/*!****************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/index.ts ***!
  \****************************************************************************************/
/*! exports provided: repeatActivityThisWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeatActivityThisWeek */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/repeatActivityThisWeek.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisWeek", function() { return _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__["repeatActivityThisWeek"]; });




/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/repeatActivityThisWeek.ts":
/*!*********************************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisWeek/repeatActivityThisWeek.ts ***!
  \*********************************************************************************************************/
/*! exports provided: repeatActivityThisWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisWeek", function() { return repeatActivityThisWeek; });
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
/*!****************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/index.ts ***!
  \****************************************************************************************/
/*! exports provided: repeatActivityThisYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeatActivityThisYear */ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/repeatActivityThisYear.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisYear", function() { return _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__["repeatActivityThisYear"]; });




/***/ }),

/***/ "./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/repeatActivityThisYear.ts":
/*!*********************************************************************************************************!*\
  !*** ./libs/domains/src/lib/week/utils/repeatActivity/repeatActivityThisYear/repeatActivityThisYear.ts ***!
  \*********************************************************************************************************/
/*! exports provided: repeatActivityThisYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatActivityThisYear", function() { return repeatActivityThisYear; });
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
/*!*********************************!*\
  !*** ./libs/types/src/index.ts ***!
  \*********************************/
/*! exports provided: LanguageEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/types */ "./libs/types/src/lib/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_0__["LanguageEnum"]; });




/***/ }),

/***/ "./libs/types/src/lib/types.ts":
/*!*************************************!*\
  !*** ./libs/types/src/lib/types.ts ***!
  \*************************************/
/*! exports provided: LanguageEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageEnum", function() { return LanguageEnum; });
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["En"] = "en";
    LanguageEnum["Nl"] = "nl";
    LanguageEnum["Ru"] = "ru";
})(LanguageEnum || (LanguageEnum = {}));


/***/ }),

/***/ "./libs/utils/src/index.ts":
/*!*********************************!*\
  !*** ./libs/utils/src/index.ts ***!
  \*********************************/
/*! exports provided: getMinutes, indexOfTimeRange, isToday, parseDate, parseTime, pxToNumber, serialize, stringifyDate, stringifyTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./libs/utils/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOfTimeRange", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["indexOfTimeRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["isToday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTime", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["parseTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToNumber", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["pxToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["serialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyDate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["stringifyDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyTime", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["stringifyTime"]; });




/***/ }),

/***/ "./libs/utils/src/lib/getMinutes.ts":
/*!******************************************!*\
  !*** ./libs/utils/src/lib/getMinutes.ts ***!
  \******************************************/
/*! exports provided: getMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
const getMinutes = (time) => {
    return time.get("hours") * 60 + time.get("minutes");
};


/***/ }),

/***/ "./libs/utils/src/lib/index.ts":
/*!*************************************!*\
  !*** ./libs/utils/src/lib/index.ts ***!
  \*************************************/
/*! exports provided: getMinutes, indexOfTimeRange, isToday, parseDate, parseTime, pxToNumber, serialize, stringifyDate, stringifyTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMinutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMinutes */ "./libs/utils/src/lib/getMinutes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return _getMinutes__WEBPACK_IMPORTED_MODULE_0__["getMinutes"]; });

/* harmony import */ var _indexOfTimeRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexOfTimeRange */ "./libs/utils/src/lib/indexOfTimeRange.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOfTimeRange", function() { return _indexOfTimeRange__WEBPACK_IMPORTED_MODULE_1__["indexOfTimeRange"]; });

/* harmony import */ var _isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isToday */ "./libs/utils/src/lib/isToday.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return _isToday__WEBPACK_IMPORTED_MODULE_2__["isToday"]; });

/* harmony import */ var _parseDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseDate */ "./libs/utils/src/lib/parseDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _parseDate__WEBPACK_IMPORTED_MODULE_3__["parseDate"]; });

/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseTime */ "./libs/utils/src/lib/parseTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTime", function() { return _parseTime__WEBPACK_IMPORTED_MODULE_4__["parseTime"]; });

/* harmony import */ var _pxToNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pxToNumber */ "./libs/utils/src/lib/pxToNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pxToNumber", function() { return _pxToNumber__WEBPACK_IMPORTED_MODULE_5__["pxToNumber"]; });

/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serialize */ "./libs/utils/src/lib/serialize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return _serialize__WEBPACK_IMPORTED_MODULE_6__["serialize"]; });

/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringifyDate */ "./libs/utils/src/lib/stringifyDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyDate", function() { return _stringifyDate__WEBPACK_IMPORTED_MODULE_7__["stringifyDate"]; });

/* harmony import */ var _stringifyTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stringifyTime */ "./libs/utils/src/lib/stringifyTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyTime", function() { return _stringifyTime__WEBPACK_IMPORTED_MODULE_8__["stringifyTime"]; });












/***/ }),

/***/ "./libs/utils/src/lib/indexOfTimeRange.ts":
/*!************************************************!*\
  !*** ./libs/utils/src/lib/indexOfTimeRange.ts ***!
  \************************************************/
/*! exports provided: indexOfTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOfTimeRange", function() { return indexOfTimeRange; });
const indexOfTimeRange = (timeRange, time) => {
    return timeRange.findIndex((timeString) => new RegExp(`^${time.get("hours")}:00`).test(timeString));
};


/***/ }),

/***/ "./libs/utils/src/lib/isToday.ts":
/*!***************************************!*\
  !*** ./libs/utils/src/lib/isToday.ts ***!
  \***************************************/
/*! exports provided: isToday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringifyDate */ "./libs/utils/src/lib/stringifyDate.ts");


const isToday = (date) => {
    return Object(_stringifyDate__WEBPACK_IMPORTED_MODULE_1__["stringifyDate"])(moment__WEBPACK_IMPORTED_MODULE_0___default()()) === Object(_stringifyDate__WEBPACK_IMPORTED_MODULE_1__["stringifyDate"])(date);
};


/***/ }),

/***/ "./libs/utils/src/lib/parseDate.ts":
/*!*****************************************!*\
  !*** ./libs/utils/src/lib/parseDate.ts ***!
  \*****************************************/
/*! exports provided: parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/constants */ "./libs/constants/src/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const parseDate = (date) => moment__WEBPACK_IMPORTED_MODULE_1___default()(date, _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__["DATE_FORMAT"]);


/***/ }),

/***/ "./libs/utils/src/lib/parseTime.ts":
/*!*****************************************!*\
  !*** ./libs/utils/src/lib/parseTime.ts ***!
  \*****************************************/
/*! exports provided: parseTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTime", function() { return parseTime; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
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
/*!******************************************!*\
  !*** ./libs/utils/src/lib/pxToNumber.ts ***!
  \******************************************/
/*! exports provided: pxToNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToNumber", function() { return pxToNumber; });
const pxToNumber = (px) => {
    return Number(px.split("px")[0]);
};


/***/ }),

/***/ "./libs/utils/src/lib/serialize.ts":
/*!*****************************************!*\
  !*** ./libs/utils/src/lib/serialize.ts ***!
  \*****************************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
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
/*!*********************************************!*\
  !*** ./libs/utils/src/lib/stringifyDate.ts ***!
  \*********************************************/
/*! exports provided: stringifyDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyDate", function() { return stringifyDate; });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/constants */ "./libs/constants/src/index.ts");

const stringifyDate = (date) => {
    return date.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__["DATE_FORMAT"]);
};


/***/ }),

/***/ "./libs/utils/src/lib/stringifyTime.ts":
/*!*********************************************!*\
  !*** ./libs/utils/src/lib/stringifyTime.ts ***!
  \*********************************************/
/*! exports provided: stringifyTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyTime", function() { return stringifyTime; });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routine-support/constants */ "./libs/constants/src/index.ts");

const stringifyTime = (time) => {
    return time.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__["TIME_FORMAT"]);
};


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./apps/server/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikitadmitriev/Desktop/routine-support-web/apps/server/src/main.ts */"./apps/server/src/main.ts");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-bearer-token":
/*!***************************************!*\
  !*** external "express-bearer-token" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-bearer-token");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map