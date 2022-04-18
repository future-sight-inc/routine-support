(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 13761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _mui_lab_AdapterMoment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8598);
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41633);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76699);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7267);
/* harmony import */ var _features_coach_components_Forms_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82961);
/* harmony import */ var _features_coach_components_Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75752);
/* harmony import */ var _features_coach_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52925);
/* harmony import */ var _features_coach_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4518);
/* harmony import */ var _features_students_Students__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70570);
/* harmony import */ var _features_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83969);
/* harmony import */ var _services_LinkService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80824);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/app/app.tsx";













const App = () => {
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10__.LocalizationProvider, {
    dateAdapter: _mui_lab_AdapterMoment__WEBPACK_IMPORTED_MODULE_11__["default"],
    locale: i18n.language,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: _services_LinkService__WEBPACK_IMPORTED_MODULE_7__.LinkService.login(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_coach_components_Forms_LoginForm__WEBPACK_IMPORTED_MODULE_1__.LoginForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: _services_LinkService__WEBPACK_IMPORTED_MODULE_7__.LinkService.register(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_coach_components_Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__.RegisterForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_coach_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__.PrivateRoute, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_coach_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
          exact: true,
          path: _services_LinkService__WEBPACK_IMPORTED_MODULE_7__.LinkService.home(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_week__WEBPACK_IMPORTED_MODULE_6__.Week, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
          exact: true,
          path: _services_LinkService__WEBPACK_IMPORTED_MODULE_7__.LinkService.students(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_features_students_Students__WEBPACK_IMPORTED_MODULE_5__.Students, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 8463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch),
/* harmony export */   "useAppSelector": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4792);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ 94043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88658);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    week: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.weekReducer,
    activity: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.activityReducer,
    coach: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.coachReducer,
    student: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.studentReducer,
    students: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.studentsReducer
  }
});

/***/ }),

/***/ 27383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityNameInput": () => (/* binding */ ActivityNameInput)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73570);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2;



const ActivityNameInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])(_t || (_t = _`
  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t2 || (_t2 = _`
    font-size: ${0};
    font-weight: ${0};
    font-family: ${0};
    border: none;
    outline: none;
    width: 100%;
    resize: none;
  `), theme.fonts.caption4.size, theme.fonts.caption4.weight, theme.fontFamily));

/***/ }),

/***/ 12084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityNameInput": () => (/* reexport safe */ _ActivityNameInput__WEBPACK_IMPORTED_MODULE_0__.ActivityNameInput)
/* harmony export */ });
/* harmony import */ var _ActivityNameInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27383);


/***/ }),

/***/ 52262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppWrapper": () => (/* binding */ AppWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65952);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4792);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47933);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81334);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82740);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94043);
/* harmony import */ var _styled_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51975);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/AppWrapper/AppWrapper.tsx";







 // todo Выпилить фиксом, проблемы в библиотеках


const AppWrapper = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
      injectFirst: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
        theme: _styled_theme__WEBPACK_IMPORTED_MODULE_4__.Theme,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
          store: _app_store__WEBPACK_IMPORTED_MODULE_3__.store,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ 96642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppWrapper": () => (/* reexport safe */ _AppWrapper__WEBPACK_IMPORTED_MODULE_0__.AppWrapper)
/* harmony export */ });
/* harmony import */ var _AppWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52262);


/***/ }),

/***/ 99548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _LabelWithHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12905);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38941);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29184);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/Checkbox/Checkbox.tsx";





const Checkbox = ({
  label,
  helperText,
  value,
  onChange,
  labelVariant,
  color
}) => {
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value != null ? value : false);

  const handleToggle = () => {
    setChecked(checked => {
      onChange(!checked);
      return !checked;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    onClick: handleToggle,
    "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.CheckboxLocators.Wrapper,
    color: color,
    children: [checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.CheckboxLocators.CheckedIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.EmptyIcon, {
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.CheckboxLocators.EmptyIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_LabelWithHelper__WEBPACK_IMPORTED_MODULE_1__.LabelWithHelper, {
      helperText: helperText,
      color: "normal",
      variant: labelVariant,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 52212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_0__.Checkbox)
/* harmony export */ });
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99548);


/***/ }),

/***/ 38941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxLocators": () => (/* binding */ CheckboxLocators)
/* harmony export */ });
let CheckboxLocators;

(function (CheckboxLocators) {
  CheckboxLocators["Wrapper"] = "CheckboxCheckedWrapper";
  CheckboxLocators["CheckedIcon"] = "CheckboxCheckedIcon";
  CheckboxLocators["EmptyIcon"] = "CheckboxEmptyIcon";
})(CheckboxLocators || (CheckboxLocators = {}));

/***/ }),

/***/ 29184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckIcon": () => (/* binding */ CheckIcon),
/* harmony export */   "EmptyIcon": () => (/* binding */ EmptyIcon),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99074);
/* harmony import */ var _mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22499);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _LabelWithHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12905);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;





const CheckIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t || (_t = _``));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  height: 40px;

  ${0};
`), ({
  theme,
  color
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
    ${0} {
      color: ${0};
    }
  `), CheckIcon, color ? color : theme.palette.primary.main));
const EmptyIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t4 || (_t4 = _`
  color: ${0};
`), ({
  theme
}) => theme.palette.secondary.text);
const Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_LabelWithHelper__WEBPACK_IMPORTED_MODULE_0__.LabelWithHelper)(_t5 || (_t5 = _``));

/***/ }),

/***/ 61969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypePicker": () => (/* binding */ ClockTypePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3399);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36725);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/ClockTypePicker/ClockTypePicker.tsx";





const ClockTypePicker = ({
  value: defaultValue,
  onChange
}) => {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue || _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Analog);

  const handleSelect = value => {
    setValue(value);
    onChange(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TypeWrapper, {
      isChecked: value === _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Analog,
      onClick: () => handleSelect(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Analog),
      "data-testid": (0,_locators__WEBPACK_IMPORTED_MODULE_2__.createClockTypeDataTestId)({
        locator: _locators__WEBPACK_IMPORTED_MODULE_2__.ClockTypePickerLocators.Analog,
        isActive: value === _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Analog
      }),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TypeText, {
        children: "12:34"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TypeWrapper, {
      isChecked: value === _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Digital,
      onClick: () => handleSelect(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Digital),
      "data-testid": (0,_locators__WEBPACK_IMPORTED_MODULE_2__.createClockTypeDataTestId)({
        locator: _locators__WEBPACK_IMPORTED_MODULE_2__.ClockTypePickerLocators.Digital,
        isActive: value === _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ClockTypeEnum.Digital
      }),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TypeIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 35932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypePicker": () => (/* reexport safe */ _ClockTypePicker__WEBPACK_IMPORTED_MODULE_0__.ClockTypePicker)
/* harmony export */ });
/* harmony import */ var _ClockTypePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61969);


/***/ }),

/***/ 3399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypePickerLocators": () => (/* binding */ ClockTypePickerLocators),
/* harmony export */   "createClockTypeDataTestId": () => (/* binding */ createClockTypeDataTestId)
/* harmony export */ });
let ClockTypePickerLocators;

(function (ClockTypePickerLocators) {
  ClockTypePickerLocators["Digital"] = "ClockTypePickerColor";
  ClockTypePickerLocators["Analog"] = "ClockTypePickerActiveColor";
})(ClockTypePickerLocators || (ClockTypePickerLocators = {}));

const createClockTypeDataTestId = ({
  locator,
  isActive
}) => {
  return `${locator}${isActive ? "-active" : ""}`;
};

/***/ }),

/***/ 36725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeIcon": () => (/* binding */ TypeIcon),
/* harmony export */   "TypeText": () => (/* binding */ TypeText),
/* harmony export */   "TypeWrapper": () => (/* binding */ TypeWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14118);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  gap: 8px;
  padding-top: 4px;
`));
const TypeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  width: 120px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${0}

  ${0}
`), ({
  isChecked,
  theme
}) => !isChecked && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
      border: 1px solid ${0};

      & * {
        color: ${0};
      }

      &:hover {
        border: 1px solid ${0};

        & * {
          color: ${0};
        }
      }
    `), theme.palette.border.main, theme.palette.secondary.text, theme.palette.primary.main, theme.palette.primary.main), ({
  isChecked,
  theme
}) => isChecked && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t4 || (_t4 = _`
      background: ${0};

      & * {
        color: ${0};
      }
    `), theme.palette.primary.main, theme.palette.common.white));
const TypeText = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t5 || (_t5 = _``));
const TypeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_AccessTime__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs(() => ({
  sx: {
    fontSize: 30
  }
}))(_t6 || (_t6 = _``));

/***/ }),

/***/ 60473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30376);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99169);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16599);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/ColorPicker/ColorPicker.tsx";






const ColorPicker = ({
  value,
  onChange
}) => {
  const [activeColor, setActiveColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value != null ? value : _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.Purple);

  const handleChange = value => {
    setActiveColor(value);
    onChange(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    children: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.map((color, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Color, {
      color: color.color,
      isActive: color.value === activeColor,
      onClick: () => handleChange(color.value),
      "data-testid": color.value === activeColor ? (0,_locators__WEBPACK_IMPORTED_MODULE_3__.createActiveColorDataTestId)(color.value) : (0,_locators__WEBPACK_IMPORTED_MODULE_3__.createColorDataTestId)(color.value)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 18775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* reexport safe */ _ColorPicker__WEBPACK_IMPORTED_MODULE_0__.ColorPicker)
/* harmony export */ });
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60473);


/***/ }),

/***/ 99169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPickerLocators": () => (/* binding */ ColorPickerLocators),
/* harmony export */   "createActiveColorDataTestId": () => (/* binding */ createActiveColorDataTestId),
/* harmony export */   "createColorDataTestId": () => (/* binding */ createColorDataTestId)
/* harmony export */ });
let ColorPickerLocators;

(function (ColorPickerLocators) {
  ColorPickerLocators["Color"] = "ColorPickerColor";
  ColorPickerLocators["ActiveColor"] = "ColorPickerActiveColor";
})(ColorPickerLocators || (ColorPickerLocators = {}));

const createColorDataTestId = value => {
  return `${ColorPickerLocators.Color}-${value}`;
};
const createActiveColorDataTestId = value => {
  return `${ColorPickerLocators.ActiveColor}-${value}`;
};

/***/ }),

/***/ 16599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`));
const Color = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t2 || (_t2 = _`
  ${0}
`), ({
  theme,
  color,
  isActive
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t3 || (_t3 = _`
    margin-top: 4px;
    width: 40px;
    height: 40px;
    background: ${0};
    border-radius: ${0};
    box-sizing: border-box;
    cursor: pointer;

    ${0}
  `), color, theme.borderRadius, isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t4 || (_t4 = _`
      border: 2px solid ${0};
      transform: scale(1.2);
    `), theme.palette.primary.main)));

/***/ }),

/***/ 97946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFlagPicker": () => (/* binding */ CommonFlagPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76699);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8751);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60304);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/CommonFlagPicker/CommonFlagPicker.tsx";





const CommonFlagPicker = ({
  value,
  onChange
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const [isCommon, setIsCommon] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value != null ? value : true);

  const handleChange = value => {
    setIsCommon(value);
    onChange(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => handleChange(true),
      isActive: isCommon,
      "data-testid": isCommon ? (0,_locators__WEBPACK_IMPORTED_MODULE_1__.createActiveButtonDataTestId)(_locators__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPickerLocators.Common) : _locators__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPickerLocators.Common,
      children: t("Common")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => handleChange(false),
      isActive: !isCommon,
      "data-testid": !isCommon ? (0,_locators__WEBPACK_IMPORTED_MODULE_1__.createActiveButtonDataTestId)(_locators__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPickerLocators.Individual) : _locators__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPickerLocators.Individual,
      children: t("Individ.")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 71155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFlagPicker": () => (/* reexport safe */ _CommonFlagPicker__WEBPACK_IMPORTED_MODULE_0__.CommonFlagPicker)
/* harmony export */ });
/* harmony import */ var _CommonFlagPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97946);


/***/ }),

/***/ 8751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFlagPickerLocators": () => (/* binding */ CommonFlagPickerLocators),
/* harmony export */   "createActiveButtonDataTestId": () => (/* binding */ createActiveButtonDataTestId)
/* harmony export */ });
let CommonFlagPickerLocators;

(function (CommonFlagPickerLocators) {
  CommonFlagPickerLocators["Common"] = "CommonFlagPickerCommon";
  CommonFlagPickerLocators["Individual"] = "CommonFlagPickerIndividual";
})(CommonFlagPickerLocators || (CommonFlagPickerLocators = {}));

const createActiveButtonDataTestId = locator => {
  return `${locator}-active`;
};

/***/ }),

/***/ 60304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  gap: 8px;
`));
const Button = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t2 || (_t2 = _`
  width: 140px;

  ${0}
`), ({
  theme,
  isActive
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
    ${0}

    ${0}
  `), isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t4 || (_t4 = _`
      pointer-events: none;
    `)), !isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t5 || (_t5 = _`
      background: none;
      border: 1px solid ${0};
      color: ${0};

      &:hover {
        background: none;
        border: 1px solid ${0};
        color: ${0};
      }
    `), theme.palette.border.main, theme.palette.secondary.text, theme.palette.primary.main, theme.palette.primary.main)));

/***/ }),

/***/ 11694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61108);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/ContentWrapper/ContentWrapper.tsx";



const ContentWrapper = ({
  loading,
  error,
  children
}) => {
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.SpinnerWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ErrorWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ErrorText, {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ 98949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* reexport safe */ _ContentWrapper__WEBPACK_IMPORTED_MODULE_0__.ContentWrapper)
/* harmony export */ });
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11694);


/***/ }),

/***/ 61108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorText": () => (/* binding */ ErrorText),
/* harmony export */   "ErrorWrapper": () => (/* binding */ ErrorWrapper),
/* harmony export */   "ReloadButton": () => (/* binding */ ReloadButton),
/* harmony export */   "Spinner": () => (/* binding */ Spinner),
/* harmony export */   "SpinnerWrapper": () => (/* binding */ SpinnerWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90838);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var _ErrorText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16461);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 16px;
  overflow: scroll;
`));
const ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t2 || (_t2 = _`
  max-width: 600px;
  margin: 0 auto;
`));
const ErrorText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_ErrorText__WEBPACK_IMPORTED_MODULE_1__.ErrorText)(_t3 || (_t3 = _``));
const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t4 || (_t4 = _`
  width: 100%;
  height: 100vh;
`));
const Spinner = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_t5 || (_t5 = _`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`));
const ReloadButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t6 || (_t6 = _`
  margin-left: 16px;
`));

/***/ }),

/***/ 38435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorText": () => (/* binding */ ErrorText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29674);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/ErrorText/ErrorText.tsx";



const ErrorText = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ErrorText, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 16461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorText": () => (/* reexport safe */ _ErrorText__WEBPACK_IMPORTED_MODULE_0__.ErrorText)
/* harmony export */ });
/* harmony import */ var _ErrorText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38435);


/***/ }),

/***/ 29674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorText": () => (/* binding */ ErrorText),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  min-height: 40px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${0};
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t2 || (_t2 = _`
    background: ${0};
    border-radius: ${0};
  `), theme.palette.error.main, theme.borderRadius));
const ErrorText = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2",
  color: "error"
}))(_t3 || (_t3 = _``));

/***/ }),

/***/ 85239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76699);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18412);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18524);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/Footer/Footer.tsx";





const Footer = () => {
  const {
    models: {
      showRussianSwitch,
      showEnglishSwitch,
      showDutchSwitch
    },
    operations: {
      handleLanguageChange
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useFooterComponent)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Rights, {
        children: t("Rights info")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.LanguageWrapper, {
        children: [showDutchSwitch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitch, {
          onClick: () => handleLanguageChange("nl"),
          children: "Nederlands"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), showEnglishSwitch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitch, {
          onClick: () => handleLanguageChange("en"),
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined), showRussianSwitch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitch, {
          onClick: () => handleLanguageChange("ru"),
          children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 18412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFooterComponent": () => (/* binding */ useFooterComponent)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76699);

const useFooterComponent = () => {
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const showRussianSwitch = i18n.language !== "ru";
  const showEnglishSwitch = i18n.language !== "en";
  const showDutchSwitch = i18n.language !== "nl";

  const handleLanguageChange = lang => {
    i18n.changeLanguage(lang);
  };

  return {
    models: {
      showRussianSwitch,
      showEnglishSwitch,
      showDutchSwitch
    },
    operations: {
      handleLanguageChange
    }
  };
};

/***/ }),

/***/ 28243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Footer)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85239);


/***/ }),

/***/ 18524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "LanguageSwitch": () => (/* binding */ LanguageSwitch),
/* harmony export */   "LanguageWrapper": () => (/* binding */ LanguageWrapper),
/* harmony export */   "Rights": () => (/* binding */ Rights),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  background: ${0};
  color: ${0};
  padding: 0 16px;
`), ({
  theme
}) => theme.palette.secondary.main, ({
  theme
}) => theme.palette.secondary.text);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: ${0};
  margin: 0 auto;
`), ({
  theme
}) => theme.size.maxWidth);
const LanguageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t3 || (_t3 = _`
  position: absolute;
  right: 32px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`));
const LanguageSwitch = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2Bold",
  color: "secondary"
}))(_t4 || (_t4 = _`
  cursor: pointer;

  &:hover {
    color: ${0};
  }
`), ({
  theme
}) => theme.palette.common.black);
const Rights = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2",
  color: "secondary"
}))(_t5 || (_t5 = _``));

/***/ }),

/***/ 52813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityNameInput": () => (/* binding */ ActivityNameInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _ActivityNameInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12084);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/ActivityNameInput/ActivityNameInput.tsx";




const ActivityNameInput = ({
  name,
  control,
  required,
  disabled,
  placeholder
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ActivityNameInput__WEBPACK_IMPORTED_MODULE_1__.ActivityNameInput, Object.assign({}, field, {
      placeholder: placeholder
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 75510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityNameInput": () => (/* reexport safe */ _ActivityNameInput__WEBPACK_IMPORTED_MODULE_0__.ActivityNameInput)
/* harmony export */ });
/* harmony import */ var _ActivityNameInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52813);


/***/ }),

/***/ 43963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypePicker": () => (/* binding */ ClockTypePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _ClockTypePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35932);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/ClockTypePicker/ClockTypePicker.tsx";




const ClockTypePicker = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ClockTypePicker__WEBPACK_IMPORTED_MODULE_1__.ClockTypePicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 43546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypePicker": () => (/* reexport safe */ _ClockTypePicker__WEBPACK_IMPORTED_MODULE_0__.ClockTypePicker)
/* harmony export */ });
/* harmony import */ var _ClockTypePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43963);


/***/ }),

/***/ 48006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18775);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/ColorPicker/ColorPicker.tsx";




const ColorPicker = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 31435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* reexport safe */ _ColorPicker__WEBPACK_IMPORTED_MODULE_0__.ColorPicker)
/* harmony export */ });
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48006);


/***/ }),

/***/ 16236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFlagPicker": () => (/* binding */ CommonFlagPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _CommonFlagPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71155);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/CommonFlagPicker/CommonFlagPicker.tsx";




const CommonFlagPicker = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CommonFlagPicker__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 18158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFlagPicker": () => (/* reexport safe */ _CommonFlagPicker__WEBPACK_IMPORTED_MODULE_0__.CommonFlagPicker)
/* harmony export */ });
/* harmony import */ var _CommonFlagPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16236);


/***/ }),

/***/ 35573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63955);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76699);
/* harmony import */ var _LabelWithHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12905);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24246);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/Controller/Controller.tsx";






const Controller = ({
  name,
  control,
  render,
  label,
  required,
  helperText
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
    name: name,
    control: control,
    rules: {
      required: required && t("Required field")
    },
    render: ({
      field,
      fieldState,
      formState
    }) => {
      var _fieldState$error;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
        children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_LabelWithHelper__WEBPACK_IMPORTED_MODULE_1__.LabelWithHelper, {
          ref: field.ref,
          helperText: helperText,
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined), render({
          field,
          fieldState,
          formState
        }), ((_fieldState$error = fieldState.error) == null ? void 0 : _fieldState$error.message) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Error, {
          children: t(fieldState.error.message)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 56075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* reexport safe */ _Controller__WEBPACK_IMPORTED_MODULE_0__.Controller)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35573);


/***/ }),

/***/ 24246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 4px;
`));
const Error = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text3",
  color: "error"
}))(_t2 || (_t2 = _``));

/***/ }),

/***/ 77918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePicker": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86737);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);

const _excluded = ["value", "onChange"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/DatePicker/DatePicker.tsx";





const HTML_DATE_FORMAT = "YYYY-MM-DD";
const DatePicker = ({
  name,
  label,
  control,
  required,
  disabled,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_4__.Controller, {
    name: name,
    control: control,
    label: label,
    required: required,
    disabled: disabled,
    helperText: helperText,
    render: _ref => {
      let {
        field: {
          value,
          onChange
        },
        fieldState
      } = _ref,
          field = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref.field, _excluded);

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TextField__WEBPACK_IMPORTED_MODULE_3__.TextField, Object.assign({
        type: "date"
      }, field, {
        value: value.format(HTML_DATE_FORMAT),
        onChange: event => onChange(moment__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value, HTML_DATE_FORMAT)),
        error: Boolean(fieldState.error)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 24586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePicker": () => (/* reexport safe */ _DatePicker__WEBPACK_IMPORTED_MODULE_0__.DatePicker)
/* harmony export */ });
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77918);


/***/ }),

/***/ 29978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportantFlagPicker": () => (/* binding */ ImportantFlagPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _ImportantFlagPicker_ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41871);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/ImportantFlagPicker/ImportantFlagPicker.tsx";




const ImportantFlagPicker = ({
  name,
  control,
  required,
  disabled,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ImportantFlagPicker_ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_1__.ImportantFlagPicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 27632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportantFlagPicker": () => (/* reexport safe */ _ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_0__.ImportantFlagPicker)
/* harmony export */ });
/* harmony import */ var _ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29978);


/***/ }),

/***/ 92752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePicker": () => (/* binding */ LanguagePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _LanguagePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95349);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/LanguagePicker/LanguagePicker.tsx";




const LanguagePicker = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_LanguagePicker__WEBPACK_IMPORTED_MODULE_1__.LanguagePicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 71304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePicker": () => (/* reexport safe */ _LanguagePicker__WEBPACK_IMPORTED_MODULE_0__.LanguagePicker)
/* harmony export */ });
/* harmony import */ var _LanguagePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92752);


/***/ }),

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictogramPicker": () => (/* binding */ PictogramPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _PictogramPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97508);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/PictogramPicker/PictogramPicker.tsx";




const PictogramPicker = ({
  name,
  control,
  required,
  disabled
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PictogramPicker__WEBPACK_IMPORTED_MODULE_1__.PictogramPicker, {
      value: field.value,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 73322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictogramPicker": () => (/* reexport safe */ _PictogramPicker__WEBPACK_IMPORTED_MODULE_0__.PictogramPicker)
/* harmony export */ });
/* harmony import */ var _PictogramPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8758);


/***/ }),

/***/ 80015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypePicker": () => (/* binding */ RepeatTypePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _RepeatTypePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90853);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/RepeatTypePicker/RepeatTypePicker.tsx";




const RepeatTypePicker = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    helperText: helperText,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_RepeatTypePicker__WEBPACK_IMPORTED_MODULE_1__.RepeatTypePicker, {
      value: field.value,
      onChange: field.onChange,
      disabled: disabled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 81395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypePicker": () => (/* reexport safe */ _RepeatTypePicker__WEBPACK_IMPORTED_MODULE_0__.RepeatTypePicker)
/* harmony export */ });
/* harmony import */ var _RepeatTypePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80015);


/***/ }),

/***/ 27095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86737);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);

const _excluded = ["name", "label", "control", "required", "disabled", "helperText"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/TextField/TextField.tsx";




const TextField = _ref => {
  let {
    name,
    label,
    control,
    required,
    disabled,
    helperText
  } = _ref,
      props = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_3__.Controller, {
    name: name,
    control: control,
    label: label,
    required: required,
    disabled: disabled,
    helperText: helperText,
    render: ({
      field,
      fieldState
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, Object.assign({
      error: Boolean(fieldState.error)
    }, props, field), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__.TextField)
/* harmony export */ });
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27095);


/***/ }),

/***/ 52672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePicker": () => (/* binding */ TimePicker)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17675);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86737);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56075);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);

const _excluded = ["value", "onChange"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/FormFields/TimePicker/TimePicker.tsx";





const TimePicker = ({
  name,
  control,
  label,
  required,
  disabled
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Controller__WEBPACK_IMPORTED_MODULE_4__.Controller, {
    name: name,
    control: control,
    label: label,
    required: required,
    disabled: disabled,
    render: _ref => {
      let {
        field: {
          value,
          onChange
        },
        fieldState
      } = _ref,
          field = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref.field, _excluded);

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TextField__WEBPACK_IMPORTED_MODULE_3__.TextField, Object.assign({
        type: "time"
      }, field, {
        value: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_2__.stringifyTime)(value),
        onChange: event => onChange((0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_2__.parseTime)(event.target.value)),
        error: Boolean(fieldState.error)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 15693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePicker": () => (/* reexport safe */ _TimePicker__WEBPACK_IMPORTED_MODULE_0__.TimePicker)
/* harmony export */ });
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52672);


/***/ }),

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4237);
/* harmony import */ var _mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66984);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91131);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11559);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76699);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63183);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17415);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/Header/Header.tsx";










const Header = ({
  user,
  onLogout
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.UserWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.UserEmail, {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Navigation, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__.NavigationLink, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.IconWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CurrentDay, {
              children: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("D")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, undefined),
          to: "/",
          children: t("Calendar")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__.NavigationLink, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, undefined),
          to: "/students",
          children: t("Students")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.LogoutWrapper, {
        onClick: onLogout,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.LogoutText, {
          children: t("Logout")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1479);


/***/ }),

/***/ 17415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "CurrentDay": () => (/* binding */ CurrentDay),
/* harmony export */   "IconWrapper": () => (/* binding */ IconWrapper),
/* harmony export */   "LogoutText": () => (/* binding */ LogoutText),
/* harmony export */   "LogoutWrapper": () => (/* binding */ LogoutWrapper),
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "UserEmail": () => (/* binding */ UserEmail),
/* harmony export */   "UserWrapper": () => (/* binding */ UserWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71525);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  padding: 0 16px;

  ${0};
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t2 || (_t2 = _`
      background: ${0};
      box-shadow: 0 0 20px ${0};
    `), theme.palette.common.white, (0,polished__WEBPACK_IMPORTED_MODULE_2__.rgba)(theme.palette.common.black, 0.2)));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t3 || (_t3 = _`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 0 auto;

  max-width: ${0};
`), ({
  theme
}) => theme.size.maxWidth);
const UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t4 || (_t4 = _`
  width: 180px;
  display: flex;
  align-items: center;
  gap: 8px;
`));
const UserEmail = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2Bold"
}))(_t5 || (_t5 = _`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`));
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_t6 || (_t6 = _`
  display: flex;
  gap: 16px;
`));
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t7 || (_t7 = _`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`));
const CurrentDay = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t8 || (_t8 = _`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding-top: 4px;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 10px;
`));
const LogoutText = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2Bold"
}))(_t9 || (_t9 = _``));
const LogoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t10 || (_t10 = _`
  display: flex;
  gap: 8px;
  margin-left: auto;
  align-items: center;
  cursor: pointer;
  height: 50px;

  ${0}, & * {
    color: ${0};
  }

  &:hover {
    ${0},& * {
      color: ${0};
    }
  }
`), LogoutText, ({
  theme
}) => theme.palette.secondary.text, LogoutText, ({
  theme
}) => theme.palette.common.black);

/***/ }),

/***/ 41871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportantFlagPicker": () => (/* binding */ ImportantFlagPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99548);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47191);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20887);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/ImportantFlagPicker/ImportantFlagPicker.tsx";





const ImportantFlagPicker = ({
  value,
  onChange
}) => {
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Boolean(value));

  const handleToggle = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CheckboxWrapper, {
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.ImportantFlagPickerLocators.Checkbox,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        value: checked,
        onChange: handleToggle,
        label: "Is important",
        helperText: "Some text about importance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.MessageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Message, {
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.ImportantFlagPickerLocators.Message,
        children: "\u0414\u0430\u043D\u043D\u0430\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u043D\u0430\u0438\u0432\u044B\u0441\u0448\u0435\u043C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 47191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportantFlagPickerLocators": () => (/* binding */ ImportantFlagPickerLocators)
/* harmony export */ });
let ImportantFlagPickerLocators;

(function (ImportantFlagPickerLocators) {
  ImportantFlagPickerLocators["Checkbox"] = "ImportantFlagPickerCheckbox";
  ImportantFlagPickerLocators["Message"] = "ImportantFlagPickerMessage";
})(ImportantFlagPickerLocators || (ImportantFlagPickerLocators = {}));

/***/ }),

/***/ 20887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxWrapper": () => (/* binding */ CheckboxWrapper),
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "MessageWrapper": () => (/* binding */ MessageWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 8px;
`));
const CheckboxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _``));
const MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t3 || (_t3 = _`
  padding: 8px;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t4 || (_t4 = _`
    background: ${0};
    border-radius: ${0};
  `), theme.palette.primary.message, theme.borderRadius));
const Message = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t5 || (_t5 = _``));

/***/ }),

/***/ 20685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelWithHelper": () => (/* binding */ LabelWithHelper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54023);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79647);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/LabelWithHelper/LabelWithHelper.tsx";




const LabelWithHelper = ({
  color: _color = "secondary",
  variant: _variant = "text2",
  children,
  helperText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      color: _color,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.LabelWithHelperLocators.Label,
      variant: _variant,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), helperText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.HelpIconWrapper, {
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.LabelWithHelperLocators.HelpIcon,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.HelpIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.HelperText, {
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.LabelWithHelperLocators.HelperText,
        variant: _variant,
        children: helperText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 12905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelWithHelper": () => (/* reexport safe */ _LabelWithHelper__WEBPACK_IMPORTED_MODULE_0__.LabelWithHelper)
/* harmony export */ });
/* harmony import */ var _LabelWithHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20685);


/***/ }),

/***/ 54023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelWithHelperLocators": () => (/* binding */ LabelWithHelperLocators)
/* harmony export */ });
let LabelWithHelperLocators;

(function (LabelWithHelperLocators) {
  LabelWithHelperLocators["Label"] = "LabelWithHelperLabel";
  LabelWithHelperLocators["HelpIcon"] = "LabelWithHelperHelpIcon";
  LabelWithHelperLocators["HelperText"] = "LabelWithHelperHelperText";
})(LabelWithHelperLocators || (LabelWithHelperLocators = {}));

/***/ }),

/***/ 79647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpIcon": () => (/* binding */ HelpIcon),
/* harmony export */   "HelpIconWrapper": () => (/* binding */ HelpIconWrapper),
/* harmony export */   "HelperText": () => (/* binding */ HelperText),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16549);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  align-items: center;
`));
const Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t2 || (_t2 = _`
  display: flex;
  align-items: center;
  user-select: none;

  ${0}
`), ({
  color
}) => (0,_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.getTypographyColorStyles)(color));
const HelpIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs(() => ({
  sx: {
    fontSize: 16
  }
}))(_t3 || (_t3 = _`
  color: ${0};
  cursor: pointer;

  &:hover {
    color: ${0};
  }

  margin-left: 4px;
`), ({
  theme
}) => theme.palette.secondary.text, ({
  theme
}) => theme.palette.common.black);
const HelperText = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t4 || (_t4 = _`
  display: none;

  ${0};
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t5 || (_t5 = _`
    border-radius: ${0};
    box-shadow: ${0};
    background: ${0};
  `), theme.borderRadius, theme.boxShadow.small, theme.palette.common.white));
const HelpIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t6 || (_t6 = _`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    ${0} {
      display: block;
      position: absolute;
      top: -4px;
      left: 4px;
      transform: translateY(-100%);
      padding: 12px;
      height: 40px;
      box-sizing: border-box;
      white-space: nowrap;
    }
  }
`), HelperText);

/***/ }),

/***/ 47020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePicker": () => (/* binding */ LanguagePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48520);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76699);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12242);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/LanguagePicker/LanguagePicker.tsx";





const LanguagePicker = _ref => {
  let props = Object.assign({}, _ref);
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, props, {
    defaultValue: _routine_support_types__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum[i18n.language] || _routine_support_types__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum.En,
    options: [{
      value: _routine_support_types__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum.En,
      text: t("English")
    }, {
      value: _routine_support_types__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum.Nl,
      text: t("Nederlands")
    }, {
      value: _routine_support_types__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum.Ru,
      text: t("Русский")
    }]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 95349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePicker": () => (/* reexport safe */ _LanguagePicker__WEBPACK_IMPORTED_MODULE_0__.LanguagePicker)
/* harmony export */ });
/* harmony import */ var _LanguagePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47020);


/***/ }),

/***/ 82894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19744);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30274);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59665);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/Modal/Modal.tsx";





const Modal = ({
  isOpened,
  onClose,
  children
}) => {
  if (!isOpened) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_portal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpened,
    closePortal: onClose,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      onClick: onClose,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.ModalLocators.Container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
        onClick: event => event.stopPropagation(),
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.ModalLocators.Content,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
          onClick: onClose,
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_1__.ModalLocators.CloseIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 87309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82894);


/***/ }),

/***/ 30274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalLocators": () => (/* binding */ ModalLocators)
/* harmony export */ });
let ModalLocators;

(function (ModalLocators) {
  ModalLocators["Container"] = "ModalContainer";
  ModalLocators["Content"] = "ModalContent";
  ModalLocators["CloseIcon"] = "ModalCloseIcon";
})(ModalLocators || (ModalLocators = {}));

/***/ }),

/***/ 59665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseIcon": () => (/* binding */ CloseIcon),
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalContent": () => (/* binding */ ModalContent)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92679);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71525);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;




const Modal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1000;
  overflow: scroll;

  padding-bottom: 32px;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t2 || (_t2 = _`
    background: ${0};
  `), (0,polished__WEBPACK_IMPORTED_MODULE_1__.rgba)(theme.palette.common.black, 0.5)));
const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t3 || (_t3 = _`
  box-sizing: border-box;
  width: 400px;
  min-height: 200px;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 32px;
  padding: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;
  position: relative;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t4 || (_t4 = _`
    background: ${0};
    border-radius: ${0};
    box-shadow: ${0};
  `), theme.palette.common.white, theme.borderRadius, theme.boxShadow.medium));
const CloseIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t5 || (_t5 = _`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t6 || (_t6 = _`
    color: ${0};

    &:hover {
      color: ${0};
    }}
  `), theme.palette.secondary.text, theme.palette.primary.text));

/***/ }),

/***/ 98088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationLink": () => (/* binding */ NavigationLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7267);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51984);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/NavigationLink/NavigationLink.tsx";




const NavigationLink = ({
  icon,
  to: _to = "/",
  children
}) => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const isActive = _to === location.pathname;

  const handleClick = () => {
    if (isActive) {
      return;
    }

    history.push(_to);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    isActive: isActive,
    onClick: handleClick,
    children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 63183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationLink": () => (/* reexport safe */ _NavigationLink__WEBPACK_IMPORTED_MODULE_0__.NavigationLink)
/* harmony export */ });
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98088);


/***/ }),

/***/ 51984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 50px;
  width: auto;

  ${0}}

    ${0}}
`), ({
  theme,
  isActive
}) => !isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t2 || (_t2 = _`
      & ${0}, & * {
        color: ${0};
      }

      &:hover {
        & ${0}, & * {
          color: ${0};
        }
      }
    `), Text, theme.palette.secondary.text, Text, theme.palette.primary.text), ({
  theme,
  isActive
}) => isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
        & ${0}, & * {
          color: ${0};
        }
      `), Text, theme.palette.primary.main));
const Text = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2Bold"
}))(_t4 || (_t4 = _``));

/***/ }),

/***/ 16824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedLayout": () => (/* binding */ NotAuthorizedLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28243);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32260);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/NotAuthorizedLayout/NotAuthorizedLayout.tsx";




const NotAuthorizedLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.FooterWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 98258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedLayout": () => (/* reexport safe */ _NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__.NotAuthorizedLayout)
/* harmony export */ });
/* harmony import */ var _NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16824);


/***/ }),

/***/ 32260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": () => (/* binding */ FooterWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _``));
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t2 || (_t2 = _`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`));

/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictogramPicker": () => (/* binding */ PictogramPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87309);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86737);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76931);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37813);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5753);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/PictogramPicker/PictogramPicker.tsx";








const PictogramPicker = ({
  value,
  onChange
}) => {
  const {
    models: {
      selectedPictogram,
      opened,
      searchString,
      pictograms
    },
    operations: {
      onModalClose,
      onModalOpen,
      onPictogramClick,
      onSearchStringChange
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.usePictogramPickerComponent)(value, {
    onChange
  });
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    backgroundImage: selectedPictogram,
    children: [selectedPictogram ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.EditButton, {
      onClick: onModalOpen,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_4__.PictogramPickerLocators.EditButton,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.EditIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.OpenButton, {
      onClick: onModalOpen,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_4__.PictogramPickerLocators.OpenButton,
      children: t("Choose")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      isOpened: opened,
      onClose: onModalClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_4__.PictogramPickerLocators.ModalContent,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.ModalTitle, {
          children: t("Pictograms")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          placeholder: t("Search"),
          value: searchString,
          onChange: onSearchStringChange,
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_4__.PictogramPickerLocators.SearchField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.PictogramsWrapper, {
          children: pictograms.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Pictogram, {
            src: item.url,
            active: selectedPictogram === item.url,
            "data-testid": `${(0,_locators__WEBPACK_IMPORTED_MODULE_4__.createPictogramDataTestId)({
              name: item.en,
              isActive: selectedPictogram === item.url
            })}`,
            onClick: () => onPictogramClick(item.url)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 76931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePictogramPickerComponent": () => (/* binding */ usePictogramPickerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _pictograms_info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58416);


const usePictogramPickerComponent = (value, actions) => {
  const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [pictograms, setPictograms] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_pictograms_info_json__WEBPACK_IMPORTED_MODULE_1__.pictograms);
  const [selectedPictogram, setSelectedPictogram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);

  const onSearchStringChange = evt => {
    const {
      value
    } = evt.target;
    const regexp = new RegExp(`^${value}`);
    setSearchString(value);
    setPictograms(_pictograms_info_json__WEBPACK_IMPORTED_MODULE_1__.pictograms.filter(pictogram => regexp.test(pictogram.en) || regexp.test(pictogram.nl) || regexp.test(pictogram.ru)));
  };

  const onSearchStringClear = () => {
    setSearchString("");
  };

  const onModalOpen = () => {
    setOpened(true);
  };

  const onModalClose = () => {
    setOpened(false);
  };

  const onPictogramClick = pictogram => {
    setSelectedPictogram(pictogram);
    actions.onChange(pictogram);
    onModalClose();
  };

  return {
    models: {
      selectedPictogram,
      pictograms,
      opened,
      searchString
    },
    operations: {
      onModalOpen,
      onModalClose,
      onPictogramClick,
      onSearchStringChange,
      onSearchStringClear
    }
  };
};

/***/ }),

/***/ 97508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictogramPicker": () => (/* reexport safe */ _PictogramPicker__WEBPACK_IMPORTED_MODULE_0__.PictogramPicker)
/* harmony export */ });
/* harmony import */ var _PictogramPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8351);


/***/ }),

/***/ 37813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictogramPickerLocators": () => (/* binding */ PictogramPickerLocators),
/* harmony export */   "createPictogramDataTestId": () => (/* binding */ createPictogramDataTestId)
/* harmony export */ });
let PictogramPickerLocators;

(function (PictogramPickerLocators) {
  PictogramPickerLocators["OpenButton"] = "PictogramPickerOpenButton";
  PictogramPickerLocators["EditButton"] = "PictogramPickerEditButton";
  PictogramPickerLocators["ModalContent"] = "PictogramPickerModalContent";
  PictogramPickerLocators["SearchField"] = "PictogramPickerSearchField";
  PictogramPickerLocators["Pictogram"] = "PictogramPickerPictogram";
  PictogramPickerLocators["ActivePictogram"] = "PictogramPickerActivePictogram";
})(PictogramPickerLocators || (PictogramPickerLocators = {}));

const createPictogramDataTestId = ({
  name,
  isActive
}) => {
  return `${isActive ? PictogramPickerLocators.ActivePictogram : PictogramPickerLocators.Pictogram}-${name}`;
};

/***/ }),

/***/ 5753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditButton": () => (/* binding */ EditButton),
/* harmony export */   "EditIcon": () => (/* binding */ EditIcon),
/* harmony export */   "ModalContent": () => (/* binding */ ModalContent),
/* harmony export */   "ModalTitle": () => (/* binding */ ModalTitle),
/* harmony export */   "OpenButton": () => (/* binding */ OpenButton),
/* harmony export */   "Pictogram": () => (/* binding */ Pictogram),
/* harmony export */   "PictogramsWrapper": () => (/* binding */ PictogramsWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29754);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 184px;
  width: 100%;

  ${0};

  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: auto 168px;
`), ({
  theme,
  backgroundImage
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t2 || (_t2 = _`
      background: ${0};
      background-image: url(${0});
      border-radius: ${0};
    `), backgroundImage ? theme.palette.common.black : theme.palette.secondary.main, backgroundImage, theme.borderRadius));
const OpenButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  fontColor: "white"
}))(_t3 || (_t3 = _`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  box-shadow: ${0};
`), ({
  theme
}) => theme.boxShadow.small);
const EditButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  fontColor: "white"
}))(_t4 || (_t4 = _`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`));
const EditIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs(() => ({
  sx: {
    fontSize: 14
  }
}))(_t5 || (_t5 = _``));
const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t6 || (_t6 = _`
  display: flex;
  flex-direction: column;
  gap: 16px;
`));
const ModalTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t7 || (_t7 = _``));
const PictogramsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t8 || (_t8 = _`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`));
const Pictogram = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_t9 || (_t9 = _`
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;

  ${0}

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t10 || (_t10 = _`
    border-radius: ${0};
  `), theme.borderRadius), ({
  active,
  theme
}) => active && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t11 || (_t11 = _`
      border: 2px solid ${0};
    `), theme.palette.primary.main));

/***/ }),

/***/ 73932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypePicker": () => (/* binding */ RepeatTypePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76699);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12242);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/RepeatTypePicker/RepeatTypePicker.tsx";





const RepeatTypePicker = _ref => {
  let props = Object.assign({}, _ref);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, props, {
    defaultValue: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None,
    options: [{
      text: t("Never"),
      value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None
    }, {
      text: t("Every day"),
      value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.EveryDay
    }, {
      text: t("Every week"),
      value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.EveryWeek
    }, {
      text: t("Every month"),
      value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.EveryMonth
    }, {
      text: t("Every year"),
      value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.EveryYear
    }]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 90853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypePicker": () => (/* reexport safe */ _RepeatTypePicker__WEBPACK_IMPORTED_MODULE_0__.RepeatTypePicker)
/* harmony export */ });
/* harmony import */ var _RepeatTypePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73932);


/***/ }),

/***/ 1826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2412);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95894);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);

const _excluded = ["options", "onChange", "value", "defaultValue"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/Select/Select.tsx";





const Select = _ref => {
  var _options$find;

  let {
    options = [],
    onChange,
    value,
    defaultValue
  } = _ref,
      props = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value != null ? value : defaultValue);
  const [isOpened, setIsOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSelected(value);
  }, [value]);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleSelect = option => {
    setSelected(option.value);
    onChange(option.value);
    handleClose();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [isOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
      onClick: handleClose,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.Overlay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TextField, Object.assign({
        onClick: handleOpen
      }, props, {
        value: (_options$find = options.find(option => option.value === selected)) == null ? void 0 : _options$find.text,
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.TextField
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.IconWrapper, {
        children: isOpened ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.IconUp, {
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.IconUp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.IconDown, {
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.IconDown
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), isOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Menu, {
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.Menu,
        children: options.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.OptionWrapper, {
          isActive: item.value === selected,
          onClick: () => handleSelect(item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Option, {
            "data-testid": item.value === selected ? _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.SelectedOption : _locators__WEBPACK_IMPORTED_MODULE_2__.SelectLocators.Option,
            children: item.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ 12242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.Select),
/* harmony export */   "SelectProps": () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.SelectProps)
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);



/***/ }),

/***/ 2412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLocators": () => (/* binding */ SelectLocators)
/* harmony export */ });
let SelectLocators;

(function (SelectLocators) {
  SelectLocators["Overlay"] = "SelectOverlay";
  SelectLocators["TextField"] = "SelectTextField";
  SelectLocators["IconUp"] = "SelectIconUp";
  SelectLocators["IconDown"] = "SelectIconDown";
  SelectLocators["Menu"] = "SelectMenu";
  SelectLocators["Option"] = "SelectOption";
  SelectLocators["SelectedOption"] = "SelectedOption";
})(SelectLocators || (SelectLocators = {}));

/***/ }),

/***/ 95894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconDown": () => (/* binding */ IconDown),
/* harmony export */   "IconUp": () => (/* binding */ IconUp),
/* harmony export */   "IconWrapper": () => (/* binding */ IconWrapper),
/* harmony export */   "Menu": () => (/* binding */ Menu),
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "OptionWrapper": () => (/* binding */ OptionWrapper),
/* harmony export */   "Overlay": () => (/* binding */ Overlay),
/* harmony export */   "TextField": () => (/* binding */ TextField),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44481);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63655);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
/* harmony import */ var _styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86737);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13;






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  position: relative;
`));
const TextField = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextField__WEBPACK_IMPORTED_MODULE_1__.TextField)(_t2 || (_t2 = _`
  width: 100%;
  caret-color: transparent;
  cursor: pointer;
`));
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t3 || (_t3 = _`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 4000;
  overflow: hidden;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t4 || (_t4 = _`
    background: ${0};
    border-radius: ${0};
    box-shadow: ${0};
  `), theme.palette.common.white, theme.borderRadius, theme.boxShadow.small));
const OptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t5 || (_t5 = _`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  cursor: pointer;

  ${0}
`), ({
  theme,
  isActive
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t6 || (_t6 = _`
    ${0}

    ${0}
  `), !isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t7 || (_t7 = _`
      &:hover {
        background: ${0};
      }
    `), theme.palette.secondary.main), isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t8 || (_t8 = _`
      background: ${0};
      color: ${0};
    `), theme.palette.primary.main, theme.palette.common.white)));
const Option = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t9 || (_t9 = _``));
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t10 || (_t10 = _`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
`));
const IconDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs(() => ({
  sx: {
    fontSize: 16
  }
}))(_t11 || (_t11 = _``));
const IconUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_4__["default"]).attrs(() => ({
  sx: {
    fontSize: 16
  }
}))(_t12 || (_t12 = _``));
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t13 || (_t13 = _`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;
`));

/***/ }),

/***/ 42335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50601);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/components/TextField/TextField.tsx";



const TextField = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.TextField, Object.assign({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ 86737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__.TextField),
/* harmony export */   "TextFieldProps": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__.TextFieldProps)
/* harmony export */ });
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42335);


/***/ }),

/***/ 50601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;


const TextField = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_t || (_t = _`
  height: 40px;
  box-sizing: border-box;
  padding: 0 8px;
  border: none;
  outline: none;
  border: 1px solid;

  ${0}

  & * {
    font-size: 19px;
  }
`), ({
  theme,
  error
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t2 || (_t2 = _`
    border-color: ${0};

    font-family: ${0};
    font-size: ${0};
    font-weight: ${0};
    border-radius: ${0};

    &::placeholder {
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      color: ${0};

      ${0}
    }

    ${0}

    &:hover,
    &:focus,
    &:active {
      border-color: ${0};

      ${0}
    }

    &:disabled {
      pointer-events: none;
    }
  `), theme.palette.border.main, theme.fontFamily, theme.fonts.text2.size, theme.fonts.text2.weight, theme.borderRadius, theme.fontFamily, theme.fonts.text2.size, theme.fonts.text2.weight, theme.palette.secondary.text, error && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t3 || (_t3 = _`
        border-color: ${0};
      `), theme.palette.error.main), error && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t4 || (_t4 = _`
      border-color: ${0};
    `), theme.palette.error.text), theme.palette.primary.main, error && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t5 || (_t5 = _`
        border-color: ${0};
      `), theme.palette.error.text)));

/***/ }),

/***/ 30376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var _styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51975);


const COLORS = [{
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Purple,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.purple
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Pink,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.pink
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Red,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.red
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Mint,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.mint
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Orange,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.orange
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.Brown,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.brown
}, {
  value: _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.ColorEnum.DarkGreen,
  color: _styled_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.darkgreen
}];

/***/ }),

/***/ 66269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMON_ACTIVITY_COLOR": () => (/* binding */ COMMON_ACTIVITY_COLOR),
/* harmony export */   "GROUP_ACTIVITY_COLOR": () => (/* binding */ GROUP_ACTIVITY_COLOR),
/* harmony export */   "IMPORTANT_ACTIVITY_COLOR": () => (/* binding */ IMPORTANT_ACTIVITY_COLOR)
/* harmony export */ });
/* harmony import */ var _styled_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51975);

const COMMON_ACTIVITY_COLOR = _styled_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.palette.common.blue;
const GROUP_ACTIVITY_COLOR = _styled_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.palette.common.green;
const IMPORTANT_ACTIVITY_COLOR = _styled_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.palette.common.yellow;

/***/ }),

/***/ 52388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityForm": () => (/* binding */ ActivityForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_FormFields_CommonFlagPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18158);
/* harmony import */ var apps_web_src_components_FormFields_ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27632);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76699);
/* harmony import */ var _components_ErrorText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16461);
/* harmony import */ var _components_FormFields_ActivityNameInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75510);
/* harmony import */ var _components_FormFields_DatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24586);
/* harmony import */ var _components_FormFields_PictogramPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73322);
/* harmony import */ var _components_FormFields_RepeatTypePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81395);
/* harmony import */ var _components_FormFields_TimePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15693);
/* harmony import */ var _students_components_StudentsPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72643);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39585);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59770);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/activity/components/ActivityForm/ActivityForm.tsx";














const ActivityForm = ({
  coach,
  activity,
  actions
}) => {
  const {
    models: {
      control,
      isDirty,
      isSubmitting,
      submitError,
      shouldShowStudents,
      isRepeatTypeAvailable
    },
    operations: {
      handleSubmit,
      onDelete
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useActivityFormComponent)(coach, activity, actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_ActivityNameInput__WEBPACK_IMPORTED_MODULE_4__.ActivityNameInput, {
        name: "name",
        control: control,
        required: true,
        placeholder: t("Activity name")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.DateWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_DatePicker__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {
          name: "date",
          control: control,
          label: t("Activity date"),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_TimePicker__WEBPACK_IMPORTED_MODULE_8__.TimePicker, {
          name: "start",
          control: control,
          label: t("Activity start time"),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_TimePicker__WEBPACK_IMPORTED_MODULE_8__.TimePicker, {
          name: "end",
          control: control,
          label: t("Activity end time"),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_PictogramPicker__WEBPACK_IMPORTED_MODULE_6__.PictogramPicker, {
        name: "pictogram",
        control: control,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(apps_web_src_components_FormFields_CommonFlagPicker__WEBPACK_IMPORTED_MODULE_1__.CommonFlagPicker, {
        label: t("Activity type"),
        control: control,
        name: "isCommon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), shouldShowStudents && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_students_components_StudentsPicker__WEBPACK_IMPORTED_MODULE_9__.StudentsPicker, {
        name: "students",
        label: t("Students"),
        required: true,
        control: control
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.RepeatWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_FormFields_RepeatTypePicker__WEBPACK_IMPORTED_MODULE_7__.RepeatTypePicker, {
          control: control,
          name: "repeatType",
          label: t("Repeat type"),
          disabled: !isRepeatTypeAvailable
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(apps_web_src_components_FormFields_ImportantFlagPicker__WEBPACK_IMPORTED_MODULE_2__.ImportantFlagPicker, {
        control: control,
        name: "isImportant"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.ButtonsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.SubmitButton, {
          type: "submit",
          isLoading: isSubmitting,
          disabled: !isDirty,
          children: activity != null && activity._id ? t("Update") : t("Create")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_11__.SecondaryButton, {
          type: "button",
          onClick: activity != null && activity._id ? onDelete : actions.closeModal,
          children: activity != null && activity._id ? t("Delete") : t("Cancel")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), submitError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_ErrorText__WEBPACK_IMPORTED_MODULE_3__.ErrorText, {
        children: submitError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 39585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActivityFormComponent": () => (/* binding */ useActivityFormComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var apps_web_src_utils_setFormErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7170);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63955);





const useActivityFormComponent = (coach, activity, actions) => {
  const defaultValues = Object.assign({
    date: moment__WEBPACK_IMPORTED_MODULE_3___default()(),
    start: moment__WEBPACK_IMPORTED_MODULE_3___default()(),
    end: moment__WEBPACK_IMPORTED_MODULE_3___default()().add("hours", 1),
    isCommon: true,
    isImportant: false
  }, activity);
  const {
    control,
    handleSubmit,
    formState,
    getValues,
    setValue,
    setError,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    defaultValues
  });
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [shouldShowStudents, setShouldShowStudent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!defaultValues.isCommon);
  const [isRepeatTypeAvailable, setRepeatTypeAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!defaultValues.isImportant);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ! баг в react-hook-form
    const subscription = watch((value, {
      name
    }) => {
      if (name === "isCommon") {
        setShouldShowStudent(!value.isCommon); // ! баг в react-hook-form

        setError("students", null);

        if (value.isCommon) {
          // ! баг в react-hook-form
          setValue("students", []);
        }
      }

      if (name === "isImportant") {
        if (value.isImportant) {
          setRepeatTypeAvailable(false); // ! баг в react-hook-form

          setValue("repeatType", _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None);
        } else {
          setRepeatTypeAvailable(true);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const onSubmit = handleSubmit(async values => {
    try {
      setSubmitError(undefined);

      if (values._id) {
        await actions.updateActivity(Object.assign({}, values, {
          coachId: coach._id
        }));
      } else {
        await actions.createActivity(Object.assign({}, values, {
          coachId: coach._id
        }));
      }

      actions.getWeek({
        config: {
          silent: true
        }
      });
    } catch (error) {
      var _response;

      const data = (_response = error.response) == null ? void 0 : _response.data;
      (0,apps_web_src_utils_setFormErrors__WEBPACK_IMPORTED_MODULE_2__.setFormErrors)(data, setError, setSubmitError);
    }
  });

  const onDelete = async () => {
    const id = getValues()._id;

    if (window.confirm("Confirm your action") && id) {
      await actions.deleteActivity(id);
      actions.getWeek({
        config: {
          silent: true
        }
      });
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
      shouldShowStudents,
      isRepeatTypeAvailable
    },
    operations: {
      handleSubmit: onSubmit,
      onDelete
    }
  };
};

/***/ }),

/***/ 54465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityForm": () => (/* reexport safe */ _ActivityForm__WEBPACK_IMPORTED_MODULE_0__.ActivityForm)
/* harmony export */ });
/* harmony import */ var _ActivityForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52388);


/***/ }),

/***/ 59770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsWrapper": () => (/* binding */ ButtonsWrapper),
/* harmony export */   "DateWrapper": () => (/* binding */ DateWrapper),
/* harmony export */   "NameInput": () => (/* binding */ NameInput),
/* harmony export */   "RepeatWrapper": () => (/* binding */ RepeatWrapper),
/* harmony export */   "SecondaryButton": () => (/* binding */ SecondaryButton),
/* harmony export */   "SubmitButton": () => (/* binding */ SubmitButton),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 16px;
`));
const NameInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_t2 || (_t2 = _`
  font-size: 24px;
  border: none;
  outline: none;
`));
const DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t3 || (_t3 = _`
  display: grid;
  grid-template-columns: 1fr 90px 90px;
  gap: 8px;
`));
const RepeatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t4 || (_t4 = _`
  width: 200px;
`));
const SubmitButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t5 || (_t5 = _`
  width: 120px;
`));
const SecondaryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  variant: "secondary"
}))(_t6 || (_t6 = _`
  width: 120px;
`));
const ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t7 || (_t7 = _`
  display: flex;
  gap: 8px;
`));

/***/ }),

/***/ 24377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActivity": () => (/* binding */ useActivity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8463);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78294);




const useActivity = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    activity
  } = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.activity);
  const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();

  const setActivity = activity => {
    dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.activityActions.setActivity(activity || null));
  };

  const createActivity = async activity => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.activityAPI.createActivity(activity);
      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const updateActivity = async activity => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.activityAPI.updateActivity(activity);
      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteActivity = async id => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.activityAPI.deleteActivity(id);
      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openActivityModal = activity => {
    setActivity(activity);
    setOpened(true);
  };

  const openNewActivityModal = activity => {
    setActivity(activity);
    setOpened(true);
  };

  const closeActivityModal = () => {
    setActivity();
    setOpened(false);
  };

  return {
    models: {
      activity,
      opened,
      loading
    },
    operations: {
      setActivity,
      createActivity,
      updateActivity,
      deleteActivity,
      openActivityModal,
      openNewActivityModal,
      closeActivityModal
    }
  };
};

/***/ }),

/***/ 42409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_ErrorText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16461);
/* harmony import */ var apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2967);
/* harmony import */ var apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80824);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99246);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77196);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Forms/LoginForm/LoginForm.tsx";








const LoginForm = ({
  actions
}) => {
  const {
    models: {
      submitError,
      control
    },
    operations: {
      handleSubmit
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useLoginFormComponent)(actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Form, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Title, {
        children: t("Log in")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.FieldsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          name: "email",
          type: "email",
          control: control,
          required: true,
          placeholder: t("Email")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          name: "password",
          type: "password",
          control: control,
          required: true,
          placeholder: t("Password")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.ButtonWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.SubmitButton, {
          type: "submit",
          children: t("Submit")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), submitError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_ErrorText__WEBPACK_IMPORTED_MODULE_1__.ErrorText, {
          children: submitError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 27
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.LinkText, {
        children: ["Don't have an account?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_3__.LinkService.register(),
          children: "Create"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 77196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLoginFormComponent": () => (/* binding */ useLoginFormComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63955);


const useLoginFormComponent = actions => {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const onSubmit = handleSubmit(async data => {
    try {
      setSubmitError(undefined);
      await actions.login(data);
    } catch (error) {
      setSubmitError(error.message);
    }
  });
  return {
    models: {
      isSubmitting,
      submitError,
      control
    },
    operations: {
      register,
      handleSubmit: onSubmit
    }
  };
};

/***/ }),

/***/ 82961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98258);
/* harmony import */ var apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80824);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18671);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7267);
/* harmony import */ var _useCoach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33595);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42409);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Forms/LoginForm/index.tsx";









const LoginForm = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const {
    models: {
      isLogged
    },
    operations: {
      login
    }
  } = (0,_useCoach__WEBPACK_IMPORTED_MODULE_4__.useCoach)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLogged) {
      return history.push(apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__.LinkService.home());
    }
  }, [isLogged, history]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_1__.NotAuthorizedLayout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: t("Sign in")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_LoginForm__WEBPACK_IMPORTED_MODULE_5__.LoginForm, {
      actions: {
        login
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 70873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterForm": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_ErrorText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16461);
/* harmony import */ var apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2967);
/* harmony import */ var apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80824);
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7964);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76699);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99246);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54259);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Forms/RegisterForm/RegisterForm.tsx";









const RegisterForm = ({
  actions
}) => {
  const {
    models: {
      submitError,
      control
    },
    operations: {
      handleSubmit
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useRegisterFormComponent)(actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Form, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Title, {
        children: t("Sign up")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.FieldsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          name: "name",
          type: "text",
          control: control,
          required: true,
          placeholder: t("Name")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          name: "email",
          type: "email",
          control: control,
          required: true,
          placeholder: t("Email")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
          name: "password",
          type: "password",
          control: control,
          required: true,
          placeholder: t("Password")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
          type: "submit",
          children: t("Submit")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), submitError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_ErrorText__WEBPACK_IMPORTED_MODULE_1__.ErrorText, {
          children: submitError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 27
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.LinkText, {
        children: ["Have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Link, {
          to: apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_3__.LinkService.login(),
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 54259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRegisterFormComponent": () => (/* binding */ useRegisterFormComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63955);


const useRegisterFormComponent = actions => {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const onSubmit = handleSubmit(async data => {
    try {
      setSubmitError(undefined);
      await actions.register(data);
    } catch (error) {
      setSubmitError(error.message);
    }
  });
  return {
    models: {
      isSubmitting,
      submitError,
      control
    },
    operations: {
      register,
      handleSubmit: onSubmit
    }
  };
};

/***/ }),

/***/ 75752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterForm": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98258);
/* harmony import */ var apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80824);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18671);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7267);
/* harmony import */ var _useCoach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33595);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70873);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Forms/RegisterForm/index.tsx";









const RegisterForm = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const {
    models: {
      isLogged
    },
    operations: {
      register
    }
  } = (0,_useCoach__WEBPACK_IMPORTED_MODULE_4__.useCoach)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLogged) {
      return history.push(apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__.LinkService.home());
    }
  }, [isLogged, history]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_NotAuthorizedLayout__WEBPACK_IMPORTED_MODULE_1__.NotAuthorizedLayout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: t("Sign up")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_RegisterForm__WEBPACK_IMPORTED_MODULE_5__.RegisterForm, {
      actions: {
        register
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 99246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper),
/* harmony export */   "FieldsWrapper": () => (/* binding */ FieldsWrapper),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "LinkText": () => (/* binding */ LinkText),
/* harmony export */   "SubmitButton": () => (/* binding */ SubmitButton),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47933);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${0};
  border-radius: ${0};
`), ({
  theme
}) => theme.boxShadow.medium, ({
  theme
}) => theme.borderRadius);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_t2 || (_t2 = _`
  display: flex;
  flex-direction: column;
  gap: 24px;
`));
const FieldsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t3 || (_t3 = _`
  display: flex;
  flex-direction: column;
  gap: 12px;
`));
const Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t4 || (_t4 = _``));
const SubmitButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t5 || (_t5 = _``));
const ButtonWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FieldsWrapper)(_t6 || (_t6 = _``));
const Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)(_t7 || (_t7 = _``));
const LinkText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography)(_t8 || (_t8 = _`
  text-align: center;

  & ${0} {
    text-decoration: none;

    ${0}
  }
`), Link, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t9 || (_t9 = _`
      font-weight: ${0};
      color: ${0};
    `), theme.fonts.text2Bold.weight, theme.palette.primary.main));

/***/ }),

/***/ 30832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28243);
/* harmony import */ var apps_web_src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84603);
/* harmony import */ var _useLayoutComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7501);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Layout/Layout.tsx";






const Layout = ({
  children,
  user,
  actions
}) => {
  const {
    operations: {
      handleLogout
    }
  } = (0,_useLayoutComponent__WEBPACK_IMPORTED_MODULE_4__.useLayoutComponent)(actions);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(apps_web_src_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {
        user: user,
        onLogout: handleLogout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Content, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(apps_web_src_components_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 52925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _useCoach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33595);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30832);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/Layout/index.tsx";



const Layout = ({
  children
}) => {
  const {
    models: {
      coach
    },
    operations: {
      logout
    }
  } = (0,_useCoach__WEBPACK_IMPORTED_MODULE_0__.useCoach)();

  if (!coach) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {
    user: coach,
    actions: {
      logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 84603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "DayNumber": () => (/* binding */ DayNumber),
/* harmony export */   "FooterWrapper": () => (/* binding */ FooterWrapper),
/* harmony export */   "HeaderWrapper": () => (/* binding */ HeaderWrapper),
/* harmony export */   "HomeItemIcon": () => (/* binding */ HomeItemIcon),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Links": () => (/* binding */ Links),
/* harmony export */   "LogoutButton": () => (/* binding */ LogoutButton),
/* harmony export */   "Name": () => (/* binding */ Name),
/* harmony export */   "UserIcon": () => (/* binding */ UserIcon),
/* harmony export */   "UserWrapper": () => (/* binding */ UserWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11559);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79312);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83993);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47933);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12;






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  display: grid;
  grid-template-row: 50px 1fr 50px;
  height: 100vh;
  cursor: default;
`));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t2 || (_t2 = _`
  height: 50px;
`));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t3 || (_t3 = _`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: ${0};
  margin: 0 auto;
  overflow: hidden;
`), ({
  theme
}) => theme.size.maxWidth);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t4 || (_t4 = _``));
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t5 || (_t5 = _`
  display: flex;
  gap: 12px;
`));
const Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)(_t6 || (_t6 = _`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${0};
  }
`), ({
  theme
}) => theme.palette.common.white);
const HomeItemIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(_t7 || (_t7 = _`
  position: relative;
`));
const DayNumber = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_t8 || (_t8 = _`
  font-size: 10px;
  position: absolute;
  top: 7px;
  left: 0;
  width: 24px;
  text-align: center;
`));
const UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t9 || (_t9 = _`
  color: ${0};
  display: flex;
  align-items: center;

  margin-right: auto;
`), ({
  theme
}) => theme.palette.common.white);
const Name = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_t10 || (_t10 = _`
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`));
const UserIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__["default"])(_t11 || (_t11 = _`
  font-size: 32px;
  margin-right: 8px;
`));
const LogoutButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])(_t12 || (_t12 = _`
  background: rgba(0, 0, 0, 0.1);
  margin-top: auto;
  height: 48px;
`));

/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLayoutComponent": () => (/* binding */ useLayoutComponent)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76699);

const useLayoutComponent = actions => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();

  const handleLogout = () => {
    if (window.confirm(t("Logout confirm message"))) {
      actions.logout();
    }
  };

  return {
    operations: {
      handleLogout
    }
  };
};

/***/ }),

/***/ 24818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateRoute": () => (/* binding */ PrivateRoute)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90838);
/* harmony import */ var apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80824);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45205);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);

const _excluded = ["loading", "isLogged", "isChecked"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/PrivateRoute/PrivateRoute.tsx";






const PrivateRoute = _ref => {
  let {
    loading,
    isLogged,
    isChecked
  } = _ref,
      routeProps = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.LoaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined);
  }

  if (!isLogged && isChecked) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: apps_web_src_services_LinkService__WEBPACK_IMPORTED_MODULE_2__.LinkService.login()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, routeProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ 89570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePrivateRouteComponent": () => (/* binding */ usePrivateRouteComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _useCoach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33595);


const usePrivateRouteComponent = () => {
  const {
    models: {
      loading,
      isLogged,
      isChecked
    },
    operations
  } = (0,_useCoach__WEBPACK_IMPORTED_MODULE_1__.useCoach)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isLogged && !isChecked) {
      operations.getCoach();
    }
  }, [isLogged, isChecked, operations]);
  return {
    models: {
      loading,
      isLogged,
      isChecked
    }
  };
};

/***/ }),

/***/ 4518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateRoute": () => (/* binding */ PrivateRoute)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89570);
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24818);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/coach/components/PrivateRoute/index.tsx";



const PrivateRoute = props => {
  const {
    models: {
      loading,
      isLogged,
      isChecked
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.usePrivateRouteComponent)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_PrivateRoute__WEBPACK_IMPORTED_MODULE_1__.PrivateRoute, Object.assign({
    loading: loading,
    isLogged: isLogged,
    isChecked: isChecked
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 45205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderWrapper": () => (/* binding */ LoaderWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t;


const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`));

/***/ }),

/***/ 33595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCoach": () => (/* binding */ useCoach)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8463);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78294);




const useCoach = () => {
  const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  const {
    coach,
    isLogged
  } = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.coach);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const login = async data => {
    try {
      setLoading(true);
      const user = await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.coachAPI.login(data);
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(user));
    } catch (error) {
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.coachAPI.logout();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  const register = async data => {
    try {
      setLoading(true);
      const user = await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.coachAPI.register(data);
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(user));
    } catch (error) {
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const getCoach = async () => {
    try {
      setLoading(true);
      const user = await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.coachAPI.getCoach();
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(user));
    } catch (_unused) {
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const updateCoach = async data => {
    try {
      setLoading(true);
      const user = await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.coachAPI.updateCoach(data);
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(user));
    } catch (_unused2) {
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.coachActions.setCoach(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  return {
    models: {
      coach,
      isLogged,
      isChecked,
      loading
    },
    operations: {
      login,
      register,
      logout,
      getCoach,
      updateCoach
    }
  };
};

/***/ }),

/***/ 36900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsForm": () => (/* binding */ SettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_FormFields_ClockTypePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43546);
/* harmony import */ var apps_web_src_components_FormFields_LanguagePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71304);
/* harmony import */ var apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2967);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76699);
/* harmony import */ var _components_ErrorText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16461);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39188);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50641);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/student/components/SettingsForm/SettingsForm.tsx";









const SettingsForm = ({
  student,
  actions
}) => {
  const {
    models: {
      control,
      isDirty,
      isSubmitting,
      submitError
    },
    operations: {
      handleSubmit
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSettingsFormComponent)(student, actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.Title, {
        children: t("App settings")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.LanguagePickerWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_LanguagePicker__WEBPACK_IMPORTED_MODULE_2__.LanguagePicker, {
          name: "language",
          control: control,
          label: t("Preferred language")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_ClockTypePicker__WEBPACK_IMPORTED_MODULE_1__.ClockTypePicker, {
        name: "clockType",
        control: control,
        label: t("Clock type")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.PinCodeWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_3__.TextField, {
          name: "pinCode",
          control: control,
          label: t("PIN code"),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.ButtonsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.SubmitButton, {
          type: "submit",
          isLoading: isSubmitting,
          disabled: !isDirty,
          children: t("Update")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.SecondaryButton, {
          onClick: actions.closeModal,
          children: t("Cancel")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), submitError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ErrorText__WEBPACK_IMPORTED_MODULE_4__.ErrorText, {
        children: submitError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 39188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettingsFormComponent": () => (/* binding */ useSettingsFormComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63955);



const useSettingsFormComponent = (student, actions) => {
  const {
    control,
    handleSubmit,
    formState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: Object.assign({
      pinCode: "0000",
      color: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.Purple
    }, student)
  });
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const onSubmit = handleSubmit(async values => {
    try {
      setSubmitError(null);
      await actions.updateSettings(values);
      actions.getStudents();
    } catch (error) {
      setSubmitError(error.message);
    }
  });
  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

/***/ }),

/***/ 95411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsForm": () => (/* reexport safe */ _SettingsForm__WEBPACK_IMPORTED_MODULE_0__.SettingsForm)
/* harmony export */ });
/* harmony import */ var _SettingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36900);


/***/ }),

/***/ 50641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsWrapper": () => (/* binding */ ButtonsWrapper),
/* harmony export */   "LanguagePickerWrapper": () => (/* binding */ LanguagePickerWrapper),
/* harmony export */   "PinCodeWrapper": () => (/* binding */ PinCodeWrapper),
/* harmony export */   "SecondaryButton": () => (/* binding */ SecondaryButton),
/* harmony export */   "SubmitButton": () => (/* binding */ SubmitButton),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 24px;
`));
const Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t2 || (_t2 = _``));
const LanguagePickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t3 || (_t3 = _`
  width: 248px;
`));
const PinCodeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t4 || (_t4 = _`
  width: 80px;
`));
const SubmitButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t5 || (_t5 = _`
  width: 120px;
`));
const SecondaryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  variant: "secondary"
}))(_t6 || (_t6 = _`
  width: 120px;
`));
const ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t7 || (_t7 = _`
  display: flex;
  gap: 8px;
`));

/***/ }),

/***/ 76222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentForm": () => (/* binding */ StudentForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_FormFields_ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31435);
/* harmony import */ var apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2967);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var _components_ErrorText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16461);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63094);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14285);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/student/components/StudentForm/StudentForm.tsx";








const StudentForm = ({
  student,
  actions
}) => {
  const {
    models: {
      control,
      isDirty,
      isSubmitting,
      submitError
    },
    operations: {
      handleSubmit,
      onDelete
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStudentFormComponent)(student, actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Title, {
        children: student != null && student._id ? t("Modify student") : t("Add student")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_FormFields_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
        name: "name",
        control: control,
        label: t("Name"),
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_FormFields_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        name: "color",
        control: control,
        label: t("Name"),
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.SubmitButton, {
          type: "submit",
          isLoading: isSubmitting,
          disabled: !isDirty,
          children: student != null && student._id ? t("Update") : t("Create")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.SecondaryButton, {
          onClick: student != null && student._id ? onDelete : actions.closeModal,
          children: student != null && student._id ? t("Delete") : t("Cancel")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), submitError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ErrorText__WEBPACK_IMPORTED_MODULE_3__.ErrorText, {
        children: submitError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 63094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStudentFormComponent": () => (/* binding */ useStudentFormComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63955);



const useStudentFormComponent = (student, actions) => {
  const {
    control,
    handleSubmit,
    formState,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: Object.assign({
      pinCode: "0000",
      color: _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.Purple
    }, student)
  });
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const onSubmit = handleSubmit(async values => {
    try {
      setSubmitError(null);

      if (values._id) {
        await actions.updateStudent(values);
      } else {
        await actions.createStudent(values);
      }

      actions.getStudents();
    } catch (error) {
      setSubmitError(error.message);
    }
  });

  const onDelete = async () => {
    const student = getValues();

    if (window.confirm("Confirm your action") && student._id) {
      await actions.deleteStudent(student);
      actions.getStudents();
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError
    },
    operations: {
      handleSubmit: onSubmit,
      onDelete
    }
  };
};

/***/ }),

/***/ 14285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsWrapper": () => (/* binding */ ButtonsWrapper),
/* harmony export */   "SecondaryButton": () => (/* binding */ SecondaryButton),
/* harmony export */   "SubmitButton": () => (/* binding */ SubmitButton),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 24px;
`));
const Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t2 || (_t2 = _``));
const SubmitButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)(_t3 || (_t3 = _`
  width: 120px;
`));
const SecondaryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  variant: "secondary"
}))(_t4 || (_t4 = _`
  width: 120px;
`));
const ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t5 || (_t5 = _`
  display: flex;
  gap: 8px;
`));

/***/ }),

/***/ 14940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStudent": () => (/* binding */ useStudent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8463);
/* harmony import */ var _services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8719);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78294);





const useStudent = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [studentModalOpened, setStudentModalOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [settingsModalOpened, setSettingsModalOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    student
  } = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.student);
  const coachId = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => {
    var _state$coach$coach;

    return (_state$coach$coach = state.coach.coach) == null ? void 0 : _state$coach$coach._id;
  });
  const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();

  const setStudent = student => {
    dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.studentActions.setStudent(student || null));
  };

  const createStudent = async student => {
    if (coachId) {
      try {
        setLoading(true);
        const response = await _services_ApiService__WEBPACK_IMPORTED_MODULE_4__.studentAPI.createStudent(Object.assign({}, student, {
          coachId
        }));
        _services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_3__.ActivityFilterService.addStudent(response.data._id);
        setStudentModalOpened(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateStudent = async student => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_4__.studentAPI.updateStudent(student);
      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async student => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_4__.studentAPI.deleteStudent(student._id);
      _services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_3__.ActivityFilterService.removeStudent(student._id);
      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openStudentModal = student => {
    setStudent(student);
    setStudentModalOpened(true);
  };

  const openNewStudentModal = () => {
    setStudent();
    setStudentModalOpened(true);
  };

  const closeStudentModal = () => {
    setStudent();
    setStudentModalOpened(false);
  };

  const updateSettings = async student => {
    try {
      setLoading(true);
      await _services_ApiService__WEBPACK_IMPORTED_MODULE_4__.studentAPI.updateStudent(student);
      setSettingsModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openSettingsModal = student => {
    setStudent(student);
    setSettingsModalOpened(true);
  };

  const closeSettingsModal = () => {
    setStudent();
    setSettingsModalOpened(false);
  };

  return {
    models: {
      student,
      studentModalOpened,
      settingsModalOpened,
      loading
    },
    operations: {
      setStudent,
      createStudent,
      updateStudent,
      deleteStudent,
      openStudentModal,
      openNewStudentModal,
      closeStudentModal,
      updateSettings,
      openSettingsModal,
      closeSettingsModal
    }
  };
};

/***/ }),

/***/ 70570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Students": () => (/* binding */ Students)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18671);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76699);
/* harmony import */ var _components_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98949);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87309);
/* harmony import */ var _student_components_SettingsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95411);
/* harmony import */ var _student_components_StudentForm_StudentForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76222);
/* harmony import */ var _student_useStudent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14940);
/* harmony import */ var _components_StudentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74750);
/* harmony import */ var _useStudents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85094);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/Students.tsx";











const Students = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  const Students = (0,_useStudents__WEBPACK_IMPORTED_MODULE_8__.useStudents)();
  const Student = (0,_student_useStudent__WEBPACK_IMPORTED_MODULE_6__.useStudent)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    Students.operations.getStudents();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, {
    loading: Students.models.loading,
    error: Students.models.error,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
        children: t("Students")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StudentList__WEBPACK_IMPORTED_MODULE_7__.StudentList, {
      students: Students.models.students,
      actions: {
        openStudentModal: Student.operations.openStudentModal,
        openNewStudentModal: Student.operations.openNewStudentModal,
        openSettingsModal: Student.operations.openSettingsModal,
        deleteStudent: Student.operations.deleteStudent,
        getStudents: Students.operations.getStudents
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      isOpened: Student.models.studentModalOpened,
      onClose: Student.operations.closeStudentModal,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_student_components_StudentForm_StudentForm__WEBPACK_IMPORTED_MODULE_5__.StudentForm, {
        student: Student.models.student,
        actions: {
          createStudent: Student.operations.createStudent,
          updateStudent: Student.operations.updateStudent,
          deleteStudent: Student.operations.deleteStudent,
          closeModal: Student.operations.closeStudentModal,
          getStudents: Students.operations.getStudents
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      isOpened: Student.models.settingsModalOpened,
      onClose: Student.operations.closeSettingsModal,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_student_components_SettingsForm__WEBPACK_IMPORTED_MODULE_4__.SettingsForm, {
        student: Student.models.student,
        actions: {
          updateSettings: Student.operations.updateSettings,
          closeModal: Student.operations.closeStudentModal,
          getStudents: Students.operations.getStudents
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 52404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentCard": () => (/* binding */ AddStudentCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95972);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/components/AddStudentCard/AddStudentCard.tsx";



const AddStudentCard = ({
  onStudentModalOpen
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {
    onClick: onStudentModalOpen,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.AddIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 69045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentCard": () => (/* reexport safe */ _AddStudentCard__WEBPACK_IMPORTED_MODULE_0__.AddStudentCard)
/* harmony export */ });
/* harmony import */ var _AddStudentCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52404);


/***/ }),

/***/ 95972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddIcon": () => (/* binding */ AddIcon),
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56569);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;



const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  width: 176px;
  height: 196px;

  border-radius: ${0};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${0}

  &:hover {
    box-shadow: 0px 0px 0px 2px ${0}
      inset;
  }
`), ({
  theme
}) => theme.borderRadius, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t2 || (_t2 = _`
    background: ${0};
  `), theme.palette.common.white), ({
  theme
}) => theme.palette.primary.main);
const AddIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_1__["default"]).attrs(() => ({
  sx: {
    fontSize: 80
  }
}))(_t3 || (_t3 = _`
  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t4 || (_t4 = _`
    color: ${0};
  `), theme.palette.primary.main));

/***/ }),

/***/ 6459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCard": () => (/* binding */ StudentCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_utils_getColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38070);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45955);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/components/StudentCard/StudentCard.tsx";




const StudentCard = ({
  student,
  onStudentModalOpen,
  onSettingsModalOpen,
  onQROpen,
  onStudentDelete
}) => {
  const handleStudentModalOpen = event => {
    event.stopPropagation();
    onStudentModalOpen(student);
  };

  const handleSettingsModalOpen = event => {
    event.stopPropagation();
    onSettingsModalOpen(student);
  };

  const handleQROpen = event => {
    event.stopPropagation();
    onQROpen(student);
  };

  const handleDelete = event => {
    event.stopPropagation();
    onStudentDelete(student);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Card, {
    studentColor: (0,apps_web_src_utils_getColor__WEBPACK_IMPORTED_MODULE_1__.getColor)(student.color),
    onClick: handleStudentModalOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Name, {
      children: student.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.FaceIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ControlsPanel, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.IconWrapper, {
        onClick: handleStudentModalOpen,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ModifyIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.IconWrapper, {
        onClick: handleSettingsModalOpen,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.SettingsIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.IconWrapper, {
        onClick: handleQROpen,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.QRCodeIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.IconWrapper, {
        onClick: handleDelete,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.DeleteIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 24193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCard": () => (/* reexport safe */ _StudentCard__WEBPACK_IMPORTED_MODULE_0__.StudentCard)
/* harmony export */ });
/* harmony import */ var _StudentCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6459);


/***/ }),

/***/ 45955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "ControlsPanel": () => (/* binding */ ControlsPanel),
/* harmony export */   "DeleteIcon": () => (/* binding */ DeleteIcon),
/* harmony export */   "FaceIcon": () => (/* binding */ FaceIcon),
/* harmony export */   "IconWrapper": () => (/* binding */ IconWrapper),
/* harmony export */   "ModifyIcon": () => (/* binding */ ModifyIcon),
/* harmony export */   "Name": () => (/* binding */ Name),
/* harmony export */   "QRCodeIcon": () => (/* binding */ QRCodeIcon),
/* harmony export */   "SettingsIcon": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6163);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29754);
/* harmony import */ var _mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55129);
/* harmony import */ var _mui_icons_material_QrCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48330);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13264);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11;








const FaceIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_Face__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs(() => ({
  sx: {
    fontSize: 80
  }
}))(_t || (_t = _``));
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  width: 176px;
  height: 196px;

  box-sizing: border-box;
  padding: 16px;

  border-radius: ${0};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${0}

  &:hover {
    box-shadow: 0px 0px 0px 2px ${0} inset;
  }

  & ${0} {
    color: ${0};
  }
`), ({
  theme
}) => theme.borderRadius, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
    background: ${0};
  `), theme.palette.common.white), ({
  studentColor
}) => studentColor, FaceIcon, ({
  studentColor
}) => studentColor);
const Name = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text1Bold"
}))(_t4 || (_t4 = _`
  width: 100%;
  line-height: 38px;
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`));
const ControlsPanel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t5 || (_t5 = _`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`));
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t6 || (_t6 = _`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${0};
  cursor: pointer;

  ${0}
`), ({
  theme
}) => theme.borderRadius, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t7 || (_t7 = _`
    color: ${0};

    &:hover {
      background-color: ${0};
    }}
  `), theme.palette.common.black, theme.palette.secondary.main));
const ModifyIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t8 || (_t8 = _``));
const SettingsIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t9 || (_t9 = _``));
const QRCodeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_QrCode__WEBPACK_IMPORTED_MODULE_5__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t10 || (_t10 = _``));
const DeleteIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"]).attrs(() => ({
  sx: {
    fontSize: 20
  }
}))(_t11 || (_t11 = _``));

/***/ }),

/***/ 5151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentList": () => (/* binding */ StudentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87309);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var _AddStudentCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69045);
/* harmony import */ var _StudentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24193);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42183);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31661);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/components/StudentList/StudentList.tsx";








const StudentList = ({
  students,
  actions
}) => {
  const {
    models: {
      qr,
      currentStudent
    },
    operations: {
      onStudentDelete,
      onQrOpen,
      onQrClose
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStudentListComponent)(actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_AddStudentCard__WEBPACK_IMPORTED_MODULE_2__.AddStudentCard, {
      onStudentModalOpen: actions.openNewStudentModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), students.map((student, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_StudentCard__WEBPACK_IMPORTED_MODULE_3__.StudentCard, {
      student: student,
      onStudentModalOpen: actions.openStudentModal,
      onStudentDelete: onStudentDelete,
      onSettingsModalOpen: actions.openSettingsModal,
      onQROpen: onQrOpen
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      isOpened: Boolean(qr),
      onClose: onQrClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.QrTitle, {
        children: [t("QR code for"), " ", currentStudent == null ? void 0 : currentStudent.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), qr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Qr, {
        src: qr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.QrTitle, {
        children: [t("QR instructions start"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), t("QR instructions end")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 42183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStudentListComponent": () => (/* binding */ useStudentListComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74061);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76699);



const useStudentListComponent = actions => {
  const [qr, setQR] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentStudent, setCurrentStudent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [qrLoading, setQrLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();

  const onStudentDelete = async student => {
    if (window.confirm(t("Confirm student delete"))) {
      await actions.deleteStudent(student);
      actions.getStudents();
    }
  };

  const onQrOpen = async student => {
    try {
      setQrLoading(true);
      const qr = await qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(JSON.stringify({
        id: student._id
      }));
      setQR(qr);
      setCurrentStudent(student);
    } catch (error) {
      console.error(error);
    } finally {
      setQrLoading(false);
    }
  };

  const onQrClose = () => {
    setQR(null);
    setCurrentStudent(null);
  };

  return {
    models: {
      qr,
      qrLoading,
      currentStudent
    },
    operations: {
      onStudentDelete,
      onQrOpen,
      onQrClose
    }
  };
};

/***/ }),

/***/ 74750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentList": () => (/* reexport safe */ _StudentList__WEBPACK_IMPORTED_MODULE_0__.StudentList)
/* harmony export */ });
/* harmony import */ var _StudentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5151);


/***/ }),

/***/ 31661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ Qr),
/* harmony export */   "QrTitle": () => (/* binding */ QrTitle),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`));
const QrTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "caption4"
}))(_t2 || (_t2 = _`
  text-align: center;
`));
const Qr = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_t3 || (_t3 = _`
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 0 auto;
  height: auto;
`));

/***/ }),

/***/ 20345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPicker": () => (/* binding */ StudentsPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_utils_getStudentsByIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71693);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76699);
/* harmony import */ var _locators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53352);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89537);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13293);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/components/StudentsPicker/StudentsPicker.tsx";








const StudentsPicker = ({
  value,
  students,
  onChange
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  const [isOpened, setIsOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedStudents, setSelectedStudents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || []);
  const studentsToChoose = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.filterStudents)({
    students,
    selectedStudents,
    filter
  });

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
    setFilter("");
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSelect = student => {
    selectedStudents.push(student._id);
    setSelectedStudents(selectedStudents);
    onChange(selectedStudents);
    handleClose();
  };

  const handleDeleteStudent = studentToDelete => {
    const updatedStudents = selectedStudents.filter(student => student !== studentToDelete._id);
    setSelectedStudents(updatedStudents);
    onChange(updatedStudents);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [isOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
      onClick: handleClose,
      "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.Overlay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FieldWrapper, {
        isActive: isOpened,
        onClick: handleOpen,
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.FieldWrapper,
        children: [selectedStudents.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StudentsWrapper, {
          children: (0,apps_web_src_utils_getStudentsByIds__WEBPACK_IMPORTED_MODULE_1__.getStudentsByIds)(students, selectedStudents).map((student, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StudentWrapper, {
            "data-testid": (0,_locators__WEBPACK_IMPORTED_MODULE_2__.createStudentDataTestId)(student),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StudentName, {
              children: student.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.DeleteStudentIcon, {
              onClick: event => {
                event.stopPropagation();
                handleDeleteStudent(student);
              },
              "data-testid": (0,_locators__WEBPACK_IMPORTED_MODULE_2__.createDeleteIconDataTestId)(student)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined), isOpened ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.SearchField, {
          placeholder: t("Pick a student"),
          value: filter,
          onChange: handleFilterChange,
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.SearchField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.OpenText, {
          onClick: handleOpen,
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.OpenText,
          children: t("+ Add student")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), isOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Menu, {
        "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.Menu,
        children: studentsToChoose.length > 0 ? studentsToChoose.map((student, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Option, {
          onClick: () => handleSelect(student),
          "data-testid": (0,_locators__WEBPACK_IMPORTED_MODULE_2__.createOptionDataTestId)(student),
          children: student.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.EmptyText, {
          "data-testid": _locators__WEBPACK_IMPORTED_MODULE_2__.StudentsPickerLocators.EmptyText,
          children: t("No one to pick")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ 72643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPicker": () => (/* binding */ StudentsPicker)
/* harmony export */ });
/* harmony import */ var apps_web_src_components_FormFields_Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56075);
/* harmony import */ var _useStudents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85094);
/* harmony import */ var _StudentsPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20345);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/students/components/StudentsPicker/index.tsx";




const StudentsPicker = ({
  name,
  control,
  required,
  disabled,
  label
}) => {
  const {
    models: {
      students
    }
  } = (0,_useStudents__WEBPACK_IMPORTED_MODULE_1__.useStudents)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(apps_web_src_components_FormFields_Controller__WEBPACK_IMPORTED_MODULE_0__.Controller, {
    name: name,
    control: control,
    required: required,
    disabled: disabled,
    label: label,
    render: ({
      field
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_StudentsPicker__WEBPACK_IMPORTED_MODULE_2__.StudentsPicker, {
      value: field.value,
      students: students,
      onChange: field.onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 53352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPickerLocators": () => (/* binding */ StudentsPickerLocators),
/* harmony export */   "createDeleteIconDataTestId": () => (/* binding */ createDeleteIconDataTestId),
/* harmony export */   "createOptionDataTestId": () => (/* binding */ createOptionDataTestId),
/* harmony export */   "createStudentDataTestId": () => (/* binding */ createStudentDataTestId)
/* harmony export */ });
let StudentsPickerLocators;

(function (StudentsPickerLocators) {
  StudentsPickerLocators["Overlay"] = "StudentsPickerOverlay";
  StudentsPickerLocators["FieldWrapper"] = "StudentsPickerFieldWrapper";
  StudentsPickerLocators["Student"] = "StudentsPickerStudent";
  StudentsPickerLocators["DeleteStudent"] = "StudentsPickerDeleteStudent";
  StudentsPickerLocators["SearchField"] = "StudentsPickerSearchField";
  StudentsPickerLocators["OpenText"] = "StudentsPickerOpenText";
  StudentsPickerLocators["Menu"] = "StudentsPickerMenu";
  StudentsPickerLocators["Option"] = "StudentsPickerOption";
  StudentsPickerLocators["EmptyText"] = "StudentsPickerEmptyText";
})(StudentsPickerLocators || (StudentsPickerLocators = {}));

const createStudentDataTestId = student => {
  return `${StudentsPickerLocators.Student}-${student._id}`;
};
const createOptionDataTestId = student => {
  return `${StudentsPickerLocators.Option}-${student._id}`;
};
const createDeleteIconDataTestId = student => {
  return `${StudentsPickerLocators.DeleteStudent}-${student._id}`;
};

/***/ }),

/***/ 89537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteStudentIcon": () => (/* binding */ DeleteStudentIcon),
/* harmony export */   "EmptyText": () => (/* binding */ EmptyText),
/* harmony export */   "FieldWrapper": () => (/* binding */ FieldWrapper),
/* harmony export */   "Menu": () => (/* binding */ Menu),
/* harmony export */   "OpenText": () => (/* binding */ OpenText),
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "Overlay": () => (/* binding */ Overlay),
/* harmony export */   "SearchField": () => (/* binding */ SearchField),
/* harmony export */   "StudentName": () => (/* binding */ StudentName),
/* harmony export */   "StudentWrapper": () => (/* binding */ StudentWrapper),
/* harmony export */   "StudentsWrapper": () => (/* binding */ StudentsWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54675);
/* harmony import */ var apps_web_src_components_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86737);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14,
    _t15,
    _t16,
    _t17;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  position: relative;
`));
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t2 || (_t2 = _`
  ${0}
`), ({
  theme,
  isActive
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t3 || (_t3 = _`
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    border-radius: ${0};
    padding: 8px;
    transition: background 0.2s;

    &:hover {
      background: ${0};

      ${0} {
        background: ${0};
      }
    }

    ${0}
  `), theme.borderRadius, theme.palette.secondary.main, StudentWrapper, theme.palette.common.white, isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t4 || (_t4 = _`
      background: ${0};

      ${0} {
        background: ${0};
      }
    `), theme.palette.secondary.main, StudentWrapper, theme.palette.common.white)));
const OpenText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  color: "primary"
}))(_t5 || (_t5 = _`
  height: 40px;
  line-height: 40px;
`));
const SearchField = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_components_TextField__WEBPACK_IMPORTED_MODULE_0__.TextField)(_t6 || (_t6 = _`
  border: none;
  background: none;
  padding: 0;
`));
const StudentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t7 || (_t7 = _`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`));
const StudentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t8 || (_t8 = _`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  transition: background 0.2s;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t9 || (_t9 = _`
    background: ${0};
    border-radius: ${0};
  `), theme.palette.secondary.main, theme.borderRadius));
const StudentName = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography)(_t10 || (_t10 = _``));
const DeleteStudentIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs(() => ({
  sx: {
    fontSize: 14
  }
}))(_t11 || (_t11 = _`
  color: ${0};

  &:hover {
    color: ${0};
  }
`), ({
  theme
}) => theme.palette.secondary.text, ({
  theme
}) => theme.palette.primary.text);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t12 || (_t12 = _`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  transform: translateY(100%);
  z-index: 1000;

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t13 || (_t13 = _`
    border-radius: ${0};
    background: ${0};
    box-shadow: ${0};
  `), theme.borderRadius, theme.palette.common.white, theme.boxShadow.small));
const Option = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography)(_t14 || (_t14 = _`
  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t15 || (_t15 = _`
    height: 40px;
    line-height: 40px;
    padding: 0 8px;

    &:hover {
      background: ${0};
    }
  `), theme.palette.secondary.main));
const EmptyText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  color: "secondary"
}))(_t16 || (_t16 = _`
  height: 40px;
  line-height: 40px;
  padding: 0 8px;
`));
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t17 || (_t17 = _`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`));

/***/ }),

/***/ 13293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterStudents": () => (/* binding */ filterStudents)
/* harmony export */ });
const filterStudents = ({
  students,
  selectedStudents,
  filter
}) => {
  let filtered = students;
  selectedStudents.forEach(selectedStudent => {
    filtered = filtered.filter(student => student._id !== selectedStudent);
  });

  if (filter.length) {
    filtered = filtered.filter(student => student.name.includes(filter));
  }

  return filtered;
};

/***/ }),

/***/ 85094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStudents": () => (/* binding */ useStudents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8463);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78294);




const useStudents = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    students
  } = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.students);
  const coachId = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => {
    var _state$coach$coach;

    return (_state$coach$coach = state.coach.coach) == null ? void 0 : _state$coach$coach._id;
  });
  const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const getStudents = async () => {
    if (coachId) {
      try {
        setError(null);
        setLoading(true);
        const students = await _services_ApiService__WEBPACK_IMPORTED_MODULE_3__.studentAPI.getStudents(coachId);
        dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.studentsActions.setStudents(students));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    models: {
      students,
      loading,
      error
    },
    operations: {
      getStudents
    }
  };
};

/***/ }),

/***/ 32994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Week": () => (/* binding */ Week)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18671);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76699);
/* harmony import */ var _components_ContentWrapper_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11694);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87309);
/* harmony import */ var _features_activity_components_ActivityForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54465);
/* harmony import */ var _activity_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24377);
/* harmony import */ var _coach_useCoach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33595);
/* harmony import */ var _students_useStudents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85094);
/* harmony import */ var _components_ActivityFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33826);
/* harmony import */ var _components_AddActivityButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27212);
/* harmony import */ var _components_MiniCalendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58527);
/* harmony import */ var _components_WeekCalendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74197);
/* harmony import */ var _components_WeekLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38302);
/* harmony import */ var _components_WeekRange__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92646);
/* harmony import */ var _useWeek__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82583);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/Week.tsx";

















const Week = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
  const Week = (0,_useWeek__WEBPACK_IMPORTED_MODULE_14__.useWeek)();
  const Activity = (0,_activity_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
  const Students = (0,_students_useStudents__WEBPACK_IMPORTED_MODULE_7__.useStudents)();
  const Coach = (0,_coach_useCoach__WEBPACK_IMPORTED_MODULE_6__.useCoach)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Coach.models.coach) {
      Week.operations.getWeek();
      Students.operations.getStudents();
    }
  }, [Coach.models.coach]);

  if (!Coach.models.coach) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_ContentWrapper_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, {
    loading: Week.models.loading,
    error: Week.models.error,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("title", {
        children: t("Calendar")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_WeekLayout__WEBPACK_IMPORTED_MODULE_12__.WeekLayout, {
      miniCalendar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_MiniCalendar__WEBPACK_IMPORTED_MODULE_10__.MiniCalendar, {
        currentDate: Week.models.currentDate,
        actions: {
          getWeek: Week.operations.getWeek
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined),
      weekRange: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_WeekRange__WEBPACK_IMPORTED_MODULE_13__.WeekRange, {
        week: Week.models.week
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 20
      }, undefined),
      calendar: Week.models.week && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_WeekCalendar__WEBPACK_IMPORTED_MODULE_11__.WeekCalendar, {
        week: Week.models.week,
        students: Students.models.students,
        actions: {
          openActivityModal: Activity.operations.openActivityModal,
          openNewActivityModal: Activity.operations.openNewActivityModal
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, undefined),
      addActivityButton: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_AddActivityButton__WEBPACK_IMPORTED_MODULE_9__.AddActivityButton, {
        onClick: () => Activity.operations.openNewActivityModal()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined),
      activityFilter: !Students.models.loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_ActivityFilter__WEBPACK_IMPORTED_MODULE_8__.ActivityFilter, {
        students: Students.models.students,
        actions: {
          getWeek: Week.operations.getWeek
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined),
      activityModal: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        isOpened: Activity.models.opened,
        onClose: Activity.operations.closeActivityModal,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_features_activity_components_ActivityForm__WEBPACK_IMPORTED_MODULE_4__.ActivityForm, {
          coach: Coach.models.coach,
          activity: Activity.models.activity,
          actions: {
            createActivity: Activity.operations.createActivity,
            updateActivity: Activity.operations.updateActivity,
            deleteActivity: Activity.operations.deleteActivity,
            closeModal: Activity.operations.closeActivityModal,
            getWeek: Week.operations.getWeek
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 54415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityFilter": () => (/* binding */ ActivityFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52212);
/* harmony import */ var apps_web_src_constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66269);
/* harmony import */ var apps_web_src_utils_getColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38070);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76699);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20625);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(977);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/ActivityFilter/ActivityFilter.tsx";








const ActivityFilter = ({
  students,
  actions
}) => {
  const {
    models: {
      activityFilter
    },
    operations: {
      handleChange
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useActivityFilterComponent)(students, actions);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();

  if (!Object.keys(activityFilter).length) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Title, {
      children: t("Filters")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.FilterWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
        color: apps_web_src_constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_2__.COMMON_ACTIVITY_COLOR,
        onChange: value => handleChange("common", value),
        value: activityFilter.common,
        label: t("Common"),
        labelVariant: "text1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), students.map(student => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.FilterWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(apps_web_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        color: (0,apps_web_src_utils_getColor__WEBPACK_IMPORTED_MODULE_3__.getColor)(student.color),
        onChange: value => handleChange(student._id, value),
        value: activityFilter.common,
        label: student.name,
        labelVariant: "text1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 20625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActivityFilterComponent": () => (/* binding */ useActivityFilterComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var apps_web_src_services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8719);


const useActivityFilterComponent = (students, actions) => {
  const savedActivityFilter = apps_web_src_services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_1__.ActivityFilterService.getFilter();
  const [activityFilter, setActivityFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(savedActivityFilter || {});

  const handleChange = (name, value) => {
    const newActivityFilter = activityFilter;
    newActivityFilter[name] = value;
    apps_web_src_services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_1__.ActivityFilterService.setFilter(newActivityFilter);
    setActivityFilter(newActivityFilter);
    actions.getWeek({
      activityFilter: newActivityFilter,
      config: {
        silent: true
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!savedActivityFilter) {
      let ids = ["common"];

      if (students.length) {
        ids = ids.concat(students.map(student => student._id));
      }

      const defaultFilter = {};
      ids.forEach(id => defaultFilter[id] = true);
      apps_web_src_services_ActivityFilterService__WEBPACK_IMPORTED_MODULE_1__.ActivityFilterService.setFilter(defaultFilter);
      setActivityFilter(defaultFilter);
    }
  }, [savedActivityFilter, students]);
  return {
    models: {
      activityFilter
    },
    operations: {
      handleChange
    }
  };
};

/***/ }),

/***/ 33826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityFilter": () => (/* reexport safe */ _ActivityFilter__WEBPACK_IMPORTED_MODULE_0__.ActivityFilter)
/* harmony export */ });
/* harmony import */ var _ActivityFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54415);


/***/ }),

/***/ 977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox),
/* harmony export */   "FilterWrapper": () => (/* binding */ FilterWrapper),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52212);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  align-self: flex-start;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`));
const Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "text1Bold"
}))(_t2 || (_t2 = _``));
const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t3 || (_t3 = _`
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 8px;
  box-sizing: border-box;

  &:hover {
    ${0};
  }
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t4 || (_t4 = _`
        background: ${0};
        border-radius: ${0};
      `), theme.palette.secondary.main, theme.borderRadius));
const Checkbox = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_0__.Checkbox)(_t5 || (_t5 = _``));

/***/ }),

/***/ 52825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddActivityButton": () => (/* binding */ AddActivityButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76699);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24831);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/AddActivityButton/AddActivityButton.tsx";




const AddActivityButton = ({
  onClick
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: onClick,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ButtonText, {
      children: ["+ ", t("Activity")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 27212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddActivityButton": () => (/* reexport safe */ _AddActivityButton__WEBPACK_IMPORTED_MODULE_0__.AddActivityButton)
/* harmony export */ });
/* harmony import */ var _AddActivityButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52825);


/***/ }),

/***/ 24831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonText": () => (/* binding */ ButtonText)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7964);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2;




const Button = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button).attrs(() => ({
  fontColor: "white"
}))(_t || (_t = _`
  width: 100%;
`));
const ButtonText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Typography).attrs(() => ({
  variant: "text1Bold",
  color: "white"
}))(_t2 || (_t2 = _``));

/***/ }),

/***/ 97293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniCalendar": () => (/* binding */ MiniCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48049);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51209);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76699);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52941);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/MiniCalendar/MiniCalendar.tsx";








const MiniCalendar = ({
  currentDate: defaultCurrentDate,
  onWeekSelect
}) => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultCurrentDate);
  const [displayedMonth, setDisplayedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultCurrentDate);
  const weeksOfCalendar = getWeeksOfCalendar(displayedMonth);

  const handleWeekSelect = week => {
    setCurrentDate(week);
    onWeekSelect(week);
  };

  const handleMonthSelect = month => {
    setDisplayedMonth(month);
  };

  const handlePrevMonthClick = () => {
    handleMonthSelect(displayedMonth.clone().add("months", -1));
  };

  const handleNextMonthClick = () => {
    handleMonthSelect(displayedMonth.clone().add("months", 1));
  };

  const handleTodayClick = () => {
    const today = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    handleWeekSelect(today);
    handleMonthSelect(today);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CurrentMonthRow, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CurrentMonth, {
        children: displayedMonth.locale(i18n.language).format("MMM YYYY")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Buttons, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ButtonWrapper, {
          onClick: handlePrevMonthClick,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ButtonWrapper, {
          onClick: handleNextMonthClick,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.WeeksWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.DayNames, {
        children: weeksOfCalendar[0].map(day => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Day, {
          children: day.locale(i18n.language).format("dd")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), weeksOfCalendar.map(week => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Week, {
        isCurrent: week[0].isoWeek() === currentDate.isoWeek(),
        onClick: () => handleWeekSelect(moment__WEBPACK_IMPORTED_MODULE_2___default()().isoWeek(week[0].isoWeek())),
        children: week.map(day => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Day, {
          isCurrentMonth: displayedMonth.month() === day.month(),
          children: day.format("D")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.TodayWrapper, {
      onClick: handleTodayClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Today, {
        children: t("Today")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

const getWeeksOfCalendar = currentDate => {
  const start = currentDate.clone().startOf("month");
  const end = currentDate.clone().endOf("month");
  const weeks = [];
  let isIncomplete = true;

  while (isIncomplete) {
    weeks.push((0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.getDaysOfWeek)((0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.getDateInfoFromMoment)(start)));
    start.add("weeks", 1);

    if (start.isSameOrAfter(end)) {
      isIncomplete = false;
    }
  }

  return weeks;
};

/***/ }),

/***/ 58527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniCalendar": () => (/* binding */ MiniCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _MiniCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97293);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/MiniCalendar/index.tsx";




const MiniCalendar = ({
  currentDate,
  actions
}) => {
  const handleWeekSelect = week => {
    actions.getWeek({
      params: (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.getDateInfoFromMoment)(week),
      config: {
        silent: true
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MiniCalendar__WEBPACK_IMPORTED_MODULE_2__.MiniCalendar, {
    currentDate: currentDate,
    onWeekSelect: handleWeekSelect
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 52941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper),
/* harmony export */   "Buttons": () => (/* binding */ Buttons),
/* harmony export */   "CurrentMonth": () => (/* binding */ CurrentMonth),
/* harmony export */   "CurrentMonthRow": () => (/* binding */ CurrentMonthRow),
/* harmony export */   "Day": () => (/* binding */ Day),
/* harmony export */   "DayNames": () => (/* binding */ DayNames),
/* harmony export */   "Today": () => (/* binding */ Today),
/* harmony export */   "TodayWrapper": () => (/* binding */ TodayWrapper),
/* harmony export */   "Week": () => (/* binding */ Week),
/* harmony export */   "WeeksWrapper": () => (/* binding */ WeeksWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14,
    _t15,
    _t16,
    _t17,
    _t18,
    _t19;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: default;
`));
const CurrentMonthRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`));
const CurrentMonth = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text1Bold"
}))(_t3 || (_t3 = _`
  text-transform: capitalize;
`));
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t4 || (_t4 = _`
  display: flex;
  align-items: center;
  gap: 4px;
`));
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t5 || (_t5 = _`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${0}

  &:hover {
    ${0};
  }
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t6 || (_t6 = _`
      border-radius: ${0};
    `), theme.borderRadius), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t7 || (_t7 = _`
        background: ${0};
      `), theme.palette.secondary.main));
const WeeksWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t8 || (_t8 = _`
  display: flex;
  flex-direction: column;
  gap: 4px;
`));
const Week = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t9 || (_t9 = _`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 8px;
  cursor: pointer;

  ${0}

  &:hover {
    ${0};
  }

  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t10 || (_t10 = _`
      border-radius: ${0};
    `), theme.borderRadius), ({
  theme,
  isCurrent
}) => !isCurrent && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t11 || (_t11 = _`
        background: ${0};
      `), theme.palette.secondary.main), ({
  theme,
  isCurrent
}) => isCurrent && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t12 || (_t12 = _`
      background: ${0};

      ${0} {
        color: ${0};
      }
    `), theme.palette.primary.main, Day, theme.palette.common.white));
const Day = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t13 || (_t13 = _`
  width: 21px;
  text-align: center;

  ${0}
`), ({
  theme,
  isCurrentMonth: _isCurrentMonth = true
}) => _isCurrentMonth ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t14 || (_t14 = _`
          color: ${0};
        `), theme.palette.primary.text) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t15 || (_t15 = _`
          color: ${0};
        `), theme.palette.secondary.text));
const DayNames = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Week)(_t16 || (_t16 = _`
  text-transform: capitalize;
  cursor: default;

  &:hover {
    background: none;
  }
`));
const Today = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2Bold"
}))(_t17 || (_t17 = _``));
const TodayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t18 || (_t18 = _`
  ${0}
`), ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t19 || (_t19 = _`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: ${0};
    cursor: pointer;

    background: ${0};
  `), theme.borderRadius, theme.palette.secondary.main));

/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekCalendar": () => (/* binding */ WeekCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17675);
/* harmony import */ var _components_ActivityGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21109);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11032);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1092);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97543);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekCalendar/WeekCalendar.tsx";









const WeekCalendar = ({
  week,
  students,
  actions
}) => {
  const wrapperRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const {
    models: {
      timelineTopOffset
    },
    operations: {
      onCellClick
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useWeekCalendarComponent)(wrapperRef, actions);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    ref: wrapperRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.TimeColumn, {
      children: week.weekInfo.timeRange.map((time, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Cell, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Time, {
          children: time
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), week.weekInfo.days.map(day => {
      var _week$days$find;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Column, {
        isWeekend: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isWeekend)(day),
        children: [week.weekInfo.timeRange.map(time => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.Cell, {
          onClick: () => onCellClick(time, day)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, undefined)), (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.groupActivities)((_week$days$find = week.days.find(item => (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_2__.stringifyDate)(item.date) === (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_2__.stringifyDate)(day))) == null ? void 0 : _week$days$find.activities).map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ActivityGroup__WEBPACK_IMPORTED_MODULE_3__.ActivityGroup, {
          students: students,
          timeRange: week.weekInfo.timeRange,
          activities: group.activities,
          onActivityClick: actions.openActivityModal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined)), (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_5__.TimeLine, {
          top: timelineTopOffset
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 82331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityGroup": () => (/* binding */ ActivityGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);
/* harmony import */ var apps_web_src_utils_getActivityColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3166);
/* harmony import */ var _components_ActivityCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79096);
/* harmony import */ var _components_ConfirmationStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49065);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekCalendar/components/ActivityGroup/ActivityGroup.tsx";







const ActivityGroup = ({
  timeRange,
  activities,
  students,
  onActivityClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: activities.map((activity, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ActivityCard__WEBPACK_IMPORTED_MODULE_3__.ActivityCard, {
      backgroundColor: (0,apps_web_src_utils_getActivityColor__WEBPACK_IMPORTED_MODULE_2__.getActivityColor)(activity, students),
      index: index,
      count: activities.length,
      rowStart: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.indexOfTimeRange)(timeRange, activity.start),
      onClick: onActivityClick,
      activity: activity,
      confirmationStatus: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ConfirmationStatus__WEBPACK_IMPORTED_MODULE_4__.ConfirmationStatus, {
        students: students,
        activity: activity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined))
  }, void 0, false);
};

/***/ }),

/***/ 39943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCard": () => (/* binding */ ActivityCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5757);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekCalendar/components/ActivityGroup/components/ActivityCard/ActivityCard.tsx";




const ActivityCard = ({
  rowStart,
  activity,
  index,
  count,
  backgroundColor,
  onClick,
  confirmationStatus
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    backgroundColor: backgroundColor,
    rowStart: rowStart,
    marginTop: activity.start.get("minutes") / 60,
    height: ((0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.getMinutes)(activity.end) - (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.getMinutes)(activity.start)) / 60,
    index: index,
    count: count,
    onClick: () => onClick(activity),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Name, {
      children: activity.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Time, {
      children: [(0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyTime)(activity.start), " - ", (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyTime)(activity.end)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), confirmationStatus]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 79096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCard": () => (/* reexport safe */ _ActivityCard__WEBPACK_IMPORTED_MODULE_0__.ActivityCard)
/* harmony export */ });
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39943);


/***/ }),

/***/ 5757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Name": () => (/* binding */ Name),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
/* harmony import */ var styled_container_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35697);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;





const TimeText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2"
}))(_t || (_t = _``));
const Time = (0,styled_container_query__WEBPACK_IMPORTED_MODULE_1__["default"])(TimeText)(_t2 || (_t2 = _`
  &:container(max-width: 100px) {
    visibility: hidden;
    height: 0;
  }

  &:container(min-width: 140px) {
    visibility: visible;
  }
`));
const NameText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text1Bold"
}))(_t3 || (_t3 = _``));
const Name = (0,styled_container_query__WEBPACK_IMPORTED_MODULE_1__["default"])(NameText)(_t4 || (_t4 = _`
  &:container(max-width: 140px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:container(max-height: 100px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`));
const Wrapper = styled_container_query__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t5 || (_t5 = _`
  box-sizing: border-box;
  overflow: hidden;

  background: ${0};

  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 8px;

  &:container(max-width: 100px) {
    padding: 4px;
  }

  ${0}

  ${0}

  pointer-events: all;
  cursor: pointer;

  &:container(max-height: 100px) {
    ${0} {
      display: none;
    }
  }
`), ({
  backgroundColor
}) => backgroundColor, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t6 || (_t6 = _`
    border-radius: ${0};
  `), theme.borderRadius), ({
  rowStart,
  marginTop,
  count,
  index,
  height,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_t7 || (_t7 = _`
    top: calc(
      ${0} * ${0} + ${0} *
        ${0} + 1px * ${0}
    );
    height: calc(${0} * ${0} + ${0}px - 1px);
    width: calc(100% / ${0} - 4px);
    left: calc(100% / ${0} * ${0} + 2px);
  `), rowStart, theme.size.cellHeight, marginTop, theme.size.cellHeight, rowStart, height, theme.size.cellHeight, height, count, count, index), Time);

/***/ }),

/***/ 91019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationStatus": () => (/* binding */ ConfirmationStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79312);
/* harmony import */ var apps_web_src_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87309);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76699);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81385);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80017);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekCalendar/components/ActivityGroup/components/ConfirmationStatus/ConfirmationStatus.tsx";







const ConfirmationStatus = ({
  activity,
  students
}) => {
  const {
    models: {
      modalOpened,
      confirmedStudents,
      assignedStudents
    },
    operations: {
      handleModalOpen,
      handleModalClose
    }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useConfirmationStatusComponent)(activity, students);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    onClick: event => event.stopPropagation(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ConfirmationWrapper, {
      onClick: handleModalOpen,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.CheckedIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ConfirmedNumber, {
        children: [confirmedStudents.length, "/", assignedStudents.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(apps_web_src_components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      isOpened: modalOpened,
      onClose: handleModalClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ModalTitle, {
        children: t("Activity status")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.List, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ListHeading, {
            children: t("Completed")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), confirmedStudents.map(student => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: student.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.List, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.ListHeading, {
            children: t("Pending")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), assignedStudents.map(student => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: student.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 81385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConfirmationStatusComponent": () => (/* binding */ useConfirmationStatusComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);
/* harmony import */ var apps_web_src_utils_getStudentsByIds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71693);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65685);




const useConfirmationStatusComponent = (activity, students) => {
  const [modalOpened, setModalOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  let confirmedStudents = [];
  let assignedStudents = students;

  if (activity.confirmation) {
    confirmedStudents = (0,apps_web_src_utils_getStudentsByIds__WEBPACK_IMPORTED_MODULE_2__.getStudentsByIds)(students, activity.confirmation[(0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(activity.date)]);
  }

  if (activity.students.length) {
    assignedStudents = (0,apps_web_src_utils_getStudentsByIds__WEBPACK_IMPORTED_MODULE_2__.getStudentsByIds)(students, activity.students);
  }

  return {
    models: {
      modalOpened,
      confirmedStudents,
      assignedStudents,
      pendingStudents: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPendingStudents)(assignedStudents, confirmedStudents)
    },
    operations: {
      handleModalOpen,
      handleModalClose
    }
  };
};

/***/ }),

/***/ 49065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationStatus": () => (/* reexport safe */ _ConfirmationStatus__WEBPACK_IMPORTED_MODULE_0__.ConfirmationStatus)
/* harmony export */ });
/* harmony import */ var _ConfirmationStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91019);


/***/ }),

/***/ 80017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckedIcon": () => (/* binding */ CheckedIcon),
/* harmony export */   "ConfirmationWrapper": () => (/* binding */ ConfirmationWrapper),
/* harmony export */   "ConfirmedNumber": () => (/* binding */ ConfirmedNumber),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ListHeading": () => (/* binding */ ListHeading),
/* harmony export */   "ModalContent": () => (/* binding */ ModalContent),
/* harmony export */   "ModalTitle": () => (/* binding */ ModalTitle),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42713);
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82740);
/* harmony import */ var styled_container_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35697);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9;





const ConfirmedNumberText = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2"
}))(_t || (_t = _``));
const ConfirmedNumber = (0,styled_container_query__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfirmedNumberText)(_t2 || (_t2 = _``));
const CheckedIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__["default"])(_t3 || (_t3 = _`
  font-size: 18px;
  margin-right: 2px;
`));
const ConfirmationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t4 || (_t4 = _`
  color: ${0};
  transition: background 0.2s;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: ${0};
  overflow: hidden;
  width: auto;

  background: rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0);
  }
`), ({
  theme
}) => theme.palette.common.black, ({
  theme
}) => theme.borderRadius);
const Wrapper = styled_container_query__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t5 || (_t5 = _`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  &:container(max-width: 50px) {
    margin-left: auto;
    box-sizing: auto;

    & ${0} {
      width: 24px;
      height: 18px;
      justify-content: center;
    }

    & ${0} {
      font-size: 0px;
      width: 0px;
    }

    & ${0} {
      margin: 0;
      order: 2;
      font-size: 14px;
    }
  }
`), ConfirmationWrapper, ConfirmedNumber, CheckedIcon);
const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t6 || (_t6 = _`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  border: 1px solid ${0};
  border-radius: 5px;
`), ({
  theme
}) => theme.palette.border.main);
const ModalTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t7 || (_t7 = _`
  font-size: 24px;
  font-weight: medium;
  margin-bottom: 16px;
`));
const List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t8 || (_t8 = _`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding-bottom: 8px;

  &:first-child {
    border-right: 1px solid ${0};
  }
`), ({
  theme
}) => theme.palette.border.main);
const ListHeading = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography)(_t9 || (_t9 = _`
  margin-bottom: 4px;
  font-weight: bold;
  padding: 8px;

  background: ${0};
`), ({
  theme
}) => theme.palette.secondary.main);

/***/ }),

/***/ 65685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPendingStudents": () => (/* binding */ getPendingStudents)
/* harmony export */ });
const getPendingStudents = (assignedStudents = [], confirmedStudents = []) => {
  return assignedStudents.filter(student => !confirmedStudents.includes(student));
};

/***/ }),

/***/ 21109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityGroup": () => (/* reexport safe */ _ActivityGroup__WEBPACK_IMPORTED_MODULE_0__.ActivityGroup)
/* harmony export */ });
/* harmony import */ var _ActivityGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82331);


/***/ }),

/***/ 11032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWeekCalendarComponent": () => (/* binding */ useWeekCalendarComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51975);




const useWeekCalendarComponent = (containerRef, actions) => {
  const [timelineTopOffset, setTimelineTopOffset] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkOffset = () => {
      var _containerRef$current;

      const frame = containerRef == null ? void 0 : (_containerRef$current = containerRef.current) == null ? void 0 : _containerRef$current.scrollHeight;
      const minutes = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.getMinutes)(moment__WEBPACK_IMPORTED_MODULE_2___default()());
      const offsetTop = minutes / (24 * 60) * (frame || 0);

      if (!scrolled) {
        var _containerRef$current2;

        setTimelineTopOffset(offsetTop);
        containerRef == null ? void 0 : (_containerRef$current2 = containerRef.current) == null ? void 0 : _containerRef$current2.scrollTo({
          top: offsetTop - (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.pxToNumber)(_styled_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.size.cellHeight)
        });
        setScrolled(true);
      }
    };

    checkOffset();
    const timerId = setInterval(() => checkOffset(), 60 * 1000);
    return () => clearInterval(timerId);
  }, [containerRef]);

  const onCellClick = (time, day) => {
    actions.openNewActivityModal({
      date: day,
      start: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(time),
      end: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(time).add(1, "hours")
    });
  };

  return {
    models: {
      timelineTopOffset
    },
    operations: {
      onCellClick
    }
  };
};

/***/ }),

/***/ 74197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekCalendar": () => (/* reexport safe */ _WeekCalendar__WEBPACK_IMPORTED_MODULE_0__.WeekCalendar)
/* harmony export */ });
/* harmony import */ var _WeekCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);


/***/ }),

/***/ 1092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsoluteColumn": () => (/* binding */ AbsoluteColumn),
/* harmony export */   "Cell": () => (/* binding */ Cell),
/* harmony export */   "Column": () => (/* binding */ Column),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "TimeColumn": () => (/* binding */ TimeColumn),
/* harmony export */   "TimeLine": () => (/* binding */ TimeLine),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: grid;
  grid-template-columns: 55px repeat(7, 1fr);
  background: ${0};
  grid-column-gap: 1px;
`), ({
  theme
}) => theme.palette.border.main);
const Cell = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t2 || (_t2 = _`
  padding: 8px;
  min-height: ${0};
  box-sizing: border-box;
  background: ${0};
  background: white;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    ${0}
  }
`), ({
  theme
}) => theme.size.cellHeight, ({
  theme
}) => theme.palette.secondary.main, ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t3 || (_t3 = _`
        box-shadow: inset ${0} 0px 1px 1px,
          inset ${0} 0px 0px 0px 1px;
      `), theme.palette.primary.main, theme.palette.primary.main));
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t4 || (_t4 = _`
  display: grid;
  grid-template-columns: repeat(auto, ${0});
  grid-row-gap: 1px;
  height: 100%;

  position: relative;

  ${0}
`), ({
  theme
}) => theme.size.cellHeight, ({
  isWeekend
}) => isWeekend && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t5 || (_t5 = _`
      & ${0} {
        background: ${0};
      }
    `), Cell, ({
  theme
}) => theme.palette.common.lightblue));
const AbsoluteColumn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t6 || (_t6 = _`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;

  pointer-events: none;
`));
const TimeColumn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Column)(_t7 || (_t7 = _`
  text-align: center;
  grid-row-gap: 0;

  & ${0} {
    display: flex;

    padding: 0;

    background: white;
    justify-content: center;
    cursor: default;

    &:hover {
      box-shadow: none;
    }
  }
`), Cell);
const Time = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text2",
  color: "secondary"
}))(_t8 || (_t8 = _`
  margin-top: -14px;
`));
const TimeLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t9 || (_t9 = _`
  position: absolute;

  top: ${0}px;

  left: 0;
  right: 0;
  height: 2px;

  background: ${0};

  &::before {
    display: block;
    width: 10px;
    height: 10px;
    background: grey;
    margin-top: -4px;
    margin-left: -6px;
    border-radius: 50%;
    content: "";

    background: ${0};
  }
`), ({
  top
}) => top, ({
  theme
}) => theme.palette.primary.main, ({
  theme
}) => theme.palette.primary.main);

/***/ }),

/***/ 97543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWeekend": () => (/* binding */ isWeekend)
/* harmony export */ });
const isWeekend = day => {
  const WEEKEND_DAY_NUMBERS = [6, 7];
  return WEEKEND_DAY_NUMBERS.includes(day.isoWeekday());
};

/***/ }),

/***/ 79745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekLayout": () => (/* binding */ WeekLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekLayout/WeekLayout.tsx";



const WeekLayout = ({
  miniCalendar,
  weekRange,
  calendar,
  addActivityButton,
  activityModal,
  activityFilter
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ActionsWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ButtonWrapper, {
        children: addActivityButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.MiniCalendarWrapper, {
        children: miniCalendar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.FilterWrapper, {
        children: activityFilter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.CalendarWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: weekRange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.Body, {
        children: calendar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), activityModal]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 38302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekLayout": () => (/* reexport safe */ _WeekLayout__WEBPACK_IMPORTED_MODULE_0__.WeekLayout)
/* harmony export */ });
/* harmony import */ var _WeekLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79745);


/***/ }),

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsWrapper": () => (/* binding */ ActionsWrapper),
/* harmony export */   "Body": () => (/* binding */ Body),
/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper),
/* harmony export */   "CalendarWrapper": () => (/* binding */ CalendarWrapper),
/* harmony export */   "FilterWrapper": () => (/* binding */ FilterWrapper),
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "MiniCalendarWrapper": () => (/* binding */ MiniCalendarWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t || (_t = _`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  overflow: hidden;
`));
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t2 || (_t2 = _`
  height: 40px;
  display: grid;
  padding-left: 60px;
  gap: 1px;
`));
const ActionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t3 || (_t3 = _`
  height: calc(100vh - 132px);
  display: grid;
  grid-template-rows: 40px auto 1fr;
  gap: 24px;
`));
const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t4 || (_t4 = _`
  overflow: scroll;
`));
const MiniCalendarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t5 || (_t5 = _``));
const CalendarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t6 || (_t6 = _`
  height: calc(100vh - 132px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`));
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t7 || (_t7 = _`
  display: flex;
`));
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_t8 || (_t8 = _`
  position: relative;
  overflow-y: scroll;
`));

/***/ }),

/***/ 92984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekRange": () => (/* binding */ WeekRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76699);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71374);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/features/week/components/WeekRange/WeekRange.tsx";






const WeekRange = ({
  week
}) => {
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: week == null ? void 0 : week.weekInfo.days.map(day => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Day, {
      isToday: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.isToday)(day),
      isPassed: day.isBefore(moment__WEBPACK_IMPORTED_MODULE_2___default()()),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.DayNumber, {
        children: day.locale(i18n.language).format("D")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.DayName, {
        children: day.format("dddd")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 92646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekRange": () => (/* reexport safe */ _WeekRange__WEBPACK_IMPORTED_MODULE_0__.WeekRange)
/* harmony export */ });
/* harmony import */ var _WeekRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92984);


/***/ }),

/***/ 71374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Day": () => (/* binding */ Day),
/* harmony export */   "DayName": () => (/* binding */ DayName),
/* harmony export */   "DayNumber": () => (/* binding */ DayNumber),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`));
const DayNumber = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text1Bold"
}))(_t2 || (_t2 = _`
  margin-right: 8px;
`));
const DayName = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(apps_web_src_styled_components_Typography__WEBPACK_IMPORTED_MODULE_0__.Typography).attrs(() => ({
  variant: "text1"
}))(_t3 || (_t3 = _`
  text-transform: capitalize;
`));
const Day = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t4 || (_t4 = _`
  height: 40px;
  display: flex;
  align-items: center;

  ${0}

  ${0}
`), ({
  isPassed,
  theme
}) => isPassed && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t5 || (_t5 = _`
      ${0}, ${0} {
        color: ${0};
      }
    `), DayNumber, DayName, theme.palette.secondary.text), ({
  isToday,
  theme
}) => isToday && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_t6 || (_t6 = _`
      ${0}, ${0} {
        color: ${0};
      }
    `), DayNumber, DayName, theme.palette.primary.main));

/***/ }),

/***/ 83969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Week": () => (/* reexport safe */ _Week__WEBPACK_IMPORTED_MODULE_0__.Week)
/* harmony export */ });
/* harmony import */ var _Week__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32994);


/***/ }),

/***/ 82583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWeek": () => (/* binding */ useWeek)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8463);
/* harmony import */ var _hooks_useDateInfoQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88357);
/* harmony import */ var _hooks_useSavedActivityFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48464);
/* harmony import */ var _hooks_useUpdateCurrentDateInfoQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79086);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78294);








const useWeek = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    week
  } = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.week);
  const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  const dateInfoQuery = (0,_hooks_useDateInfoQuery__WEBPACK_IMPORTED_MODULE_4__.useDateInfoQuery)();
  const currentDateInfo = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateInfo)();
  const updateCurrentDateInfoQuery = (0,_hooks_useUpdateCurrentDateInfoQuery__WEBPACK_IMPORTED_MODULE_6__.useUpdateCurrentDateInfoQuery)();
  const savedActivityFilter = (0,_hooks_useSavedActivityFilter__WEBPACK_IMPORTED_MODULE_5__.useSavedActivityFilter)();
  const currentDate = dateInfoQuery ? (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.dateInfoToMoment)(dateInfoQuery) : moment__WEBPACK_IMPORTED_MODULE_2___default()();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // todo refactor args, add default config obj

  const getWeek = async data => {
    try {
      var _data$config, _data$params, _data$params2;

      !(data != null && (_data$config = data.config) != null && _data$config.silent) && setLoading(true);
      const date = {
        year: (data == null ? void 0 : (_data$params = data.params) == null ? void 0 : _data$params.year) || (dateInfoQuery == null ? void 0 : dateInfoQuery.year) || currentDateInfo.year,
        week: (data == null ? void 0 : (_data$params2 = data.params) == null ? void 0 : _data$params2.week) || (dateInfoQuery == null ? void 0 : dateInfoQuery.week) || currentDateInfo.week
      };
      updateCurrentDateInfoQuery(date);
      const week = await _services_ApiService__WEBPACK_IMPORTED_MODULE_7__.weekAPI.getWeek(date.year, date.week, (data == null ? void 0 : data.activityFilter) || savedActivityFilter);
      dispatch(_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.weekActions.setWeek(week));
    } catch (error) {
      setError(error.message);
    } finally {
      var _data$config2;

      !(data != null && (_data$config2 = data.config) != null && _data$config2.silent) && setLoading(false);
    }
  };

  return {
    models: {
      week,
      currentDate,
      loading,
      error
    },
    operations: {
      getWeek
    }
  };
};

/***/ }),

/***/ 88357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDateInfoQuery": () => (/* binding */ useDateInfoQuery)
/* harmony export */ });
/* harmony import */ var _useQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54351);

const useDateInfoQuery = () => {
  const query = (0,_useQueryParams__WEBPACK_IMPORTED_MODULE_0__.useQueryParams)();
  const year = query.get("year");
  const week = query.get("week");

  if (year && week) {
    return {
      year: Number(year),
      week: Number(week)
    };
  }

  return undefined;
};

/***/ }),

/***/ 54351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryParams": () => (/* binding */ useQueryParams)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7267);

const useQueryParams = () => {
  return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)().search);
};

/***/ }),

/***/ 48464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSavedActivityFilter": () => (/* binding */ useSavedActivityFilter)
/* harmony export */ });
const useSavedActivityFilter = () => {
  const savedFilter = localStorage.getItem("filter");

  if (savedFilter) {
    return JSON.parse(savedFilter);
  }

  return undefined;
};

/***/ }),

/***/ 79086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUpdateCurrentDateInfoQuery": () => (/* binding */ useUpdateCurrentDateInfoQuery)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7267);
/* harmony import */ var _utils_updateCurrentDateInfoQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34727);


const useUpdateCurrentDateInfoQuery = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  return date => (0,_utils_updateCurrentDateInfoQuery__WEBPACK_IMPORTED_MODULE_0__.updateCurrentDateInfoQuery)(date, history);
};

/***/ }),

/***/ 61871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24991);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60790);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28316);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71648);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81334);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13761);
/* harmony import */ var _components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96642);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20790);
/* harmony import */ var _locales_nl_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13055);
/* harmony import */ var _locales_ru_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69672);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49663);
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/main.tsx";











i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__["default"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_10__.initReactI18next).init({
  resources: {
    en: {
      translation: _locales_en_json__WEBPACK_IMPORTED_MODULE_6__
    },
    ru: {
      translation: _locales_ru_json__WEBPACK_IMPORTED_MODULE_8__
    },
    nl: {
      translation: _locales_nl_json__WEBPACK_IMPORTED_MODULE_7__
    }
  },
  fallbackLng: "en"
});
react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_AppWrapper__WEBPACK_IMPORTED_MODULE_5__.AppWrapper, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined), document.getElementById("root"));

/***/ }),

/***/ 5487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityFilterService": () => (/* binding */ ActivityFilterService)
/* harmony export */ });
const ActivityFilterService = {
  getFilter: () => {
    const savedActivityFilter = localStorage.getItem("filter");

    if (savedActivityFilter) {
      return JSON.parse(savedActivityFilter);
    }

    return undefined;
  },
  setFilter: newActivityFilter => {
    localStorage.setItem("filter", JSON.stringify(newActivityFilter));
  },
  clearFilter: () => {
    localStorage.removeItem("filter");
  },
  addStudent: id => {
    const savedActivityFilter = ActivityFilterService.getFilter();

    if (savedActivityFilter) {
      savedActivityFilter[id] = true;
      ActivityFilterService.setFilter(savedActivityFilter);
    }
  },
  removeStudent: id => {
    const savedActivityFilter = ActivityFilterService.getFilter();

    if (savedActivityFilter) {
      delete savedActivityFilter[id];
      ActivityFilterService.setFilter(savedActivityFilter);
    }
  }
};

/***/ }),

/***/ 8719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityFilterService": () => (/* reexport safe */ _ActivityFilterService__WEBPACK_IMPORTED_MODULE_0__.ActivityFilterService)
/* harmony export */ });
/* harmony import */ var _ActivityFilterService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5487);


/***/ }),

/***/ 78294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activityAPI": () => (/* binding */ activityAPI),
/* harmony export */   "coachAPI": () => (/* binding */ coachAPI),
/* harmony export */   "studentAPI": () => (/* binding */ studentAPI),
/* harmony export */   "weekAPI": () => (/* binding */ weekAPI)
/* harmony export */ });
/* harmony import */ var _routine_support_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99611);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);


const client = (0,_routine_support_api_client__WEBPACK_IMPORTED_MODULE_0__.createClient)("/api" || 0);
const activityAPI = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createActivityAPI)(client);
const studentAPI = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createStudentAPI)(client);
const coachAPI = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createCoachAPI)(client);
const weekAPI = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createWeekAPI)(client);

/***/ }),

/***/ 9641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkService": () => (/* binding */ LinkService)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4463);

const LinkService = {
  login: () => _types__WEBPACK_IMPORTED_MODULE_0__.PathEnum.Login,
  register: () => _types__WEBPACK_IMPORTED_MODULE_0__.PathEnum.Register,
  home: () => _types__WEBPACK_IMPORTED_MODULE_0__.PathEnum.Home,
  profile: id => `${_types__WEBPACK_IMPORTED_MODULE_0__.PathEnum.Profile}/${id}`,
  students: () => _types__WEBPACK_IMPORTED_MODULE_0__.PathEnum.Students
};

/***/ }),

/***/ 80824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkService": () => (/* reexport safe */ _LinkService__WEBPACK_IMPORTED_MODULE_0__.LinkService)
/* harmony export */ });
/* harmony import */ var _LinkService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9641);


/***/ }),

/***/ 4463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathEnum": () => (/* binding */ PathEnum)
/* harmony export */ });
let PathEnum;

(function (PathEnum) {
  PathEnum["Login"] = "/login";
  PathEnum["Register"] = "/register";
  PathEnum["Home"] = "/";
  PathEnum["Profile"] = "/user";
  PathEnum["Students"] = "/students";
})(PathEnum || (PathEnum = {}));

/***/ }),

/***/ 44374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26245);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49663);

const _excluded = ["variant", "type", "isLoading", "disabled", "children"];
var _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/styled/components/Button/Button.tsx";



const Button = _ref => {
  let {
    variant = "primary",
    type = "button",
    isLoading,
    disabled,
    children
  } = _ref,
      props = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wrapper, Object.assign({
    variant: variant,
    disabled: disabled,
    type: type
  }, props, {
    children: isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }, undefined) : children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ 7964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Button)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44374);


/***/ }),

/***/ 26245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": () => (/* binding */ Spinner),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16367);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82740);
let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_t || (_t = _`
  height: 40px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  ${0}

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`), ({
  theme,
  variant
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t2 || (_t2 = _`
    font-size: ${0};
    font-weight: ${0};
    border-radius: ${0};

    ${0}

    ${0}
  `), theme.fonts.text1Bold.size, theme.fonts.text1Bold.weight, theme.borderRadius, variant === "primary" && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t3 || (_t3 = _`
      background: ${0};
      color: ${0};

      &:hover {
        background: ${0};
      }

      &:active {
        background: ${0};
      }
    `), theme.palette.primary.main, theme.palette.common.white, theme.palette.primary.hovered, theme.palette.primary.clicked), variant === "secondary" && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_t4 || (_t4 = _`
      background: ${0};
      color: ${0};

      &:hover {
        background: ${0};
      }

      &:active {
        background: ${0};
      }
    `), theme.palette.secondary.main, theme.palette.primary.text, theme.palette.secondary.hovered, theme.palette.secondary.clicked)));
const Spinner = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"]).attrs(() => ({
  size: 16,
  color: "inherit"
}))(_t5 || (_t5 = _``));

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typography": () => (/* binding */ Typography),
/* harmony export */   "getTypographyColorStyles": () => (/* binding */ getTypographyColorStyles)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82740);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51975);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49663);

const _excluded = ["variant", "color"];

let _jsxFileName = "/Users/nikitadmitriev/Desktop/routine-support-web/apps/web/src/styled/components/Typography/Typography.tsx",
    _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14,
    _t15,
    _t16,
    _t17,
    _t18,
    _t19,
    _t20;




const getTypographyColorStyles = color => {
  switch (color) {
    case "secondary":
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t || (_t = _`
        color: ${0};
      `), _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.secondary.text);

    case "primary":
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t2 || (_t2 = _`
        color: ${0};
      `), _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.primary.main);

    case "white":
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t3 || (_t3 = _`
        color: ${0};
      `), _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.common.white);

    case "error":
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t4 || (_t4 = _`
        color: ${0};
      `), _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.palette.error.text);

    default:
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t5 || (_t5 = _`
        color: inherit;
      `));
  }
};
const DEFAULT_STYLES = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t6 || (_t6 = _`
  margin: 0;
`));
const Caption4 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h6(_t7 || (_t7 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t8 || (_t8 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.caption4.size, theme.fonts.caption4.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t9 || (_t9 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t10 || (_t10 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text1.size, theme.fonts.text1.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t11 || (_t11 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t12 || (_t12 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text2.size, theme.fonts.text2.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text3 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t13 || (_t13 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t14 || (_t14 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text3.size, theme.fonts.text3.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text1Bold = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t15 || (_t15 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t16 || (_t16 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text1Bold.size, theme.fonts.text1Bold.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text2Bold = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t17 || (_t17 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t18 || (_t18 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text2Bold.size, theme.fonts.text2Bold.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Text3Bold = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_t19 || (_t19 = _`
  ${0}
  ${0}
`), ({
  color,
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(_t20 || (_t20 = _`
      font-family: ${0};
      font-size: ${0};
      font-weight: ${0};
      ${0}
    `), theme.fontFamily, theme.fonts.text3Bold.size, theme.fonts.text3Bold.weight, getTypographyColorStyles(color)), DEFAULT_STYLES);
const Typography = _ref => {
  let {
    variant,
    color
  } = _ref,
      props = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  switch (variant) {
    case "caption4":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Caption4, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 12
      }, undefined);

    case "text1":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text1, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 12
      }, undefined);

    case "text2":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text2, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 12
      }, undefined);

    case "text3":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text3, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 12
      }, undefined);

    case "text1Bold":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text1Bold, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 12
      }, undefined);

    case "text2Bold":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text2Bold, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 12
      }, undefined);

    case "text3Bold":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text3Bold, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 12
      }, undefined);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text2, Object.assign({
        color: color
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 12
      }, undefined);
  }
};

/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typography": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.Typography),
/* harmony export */   "TypographyColor": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.TypographyColor),
/* harmony export */   "TypographyVariant": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.TypographyVariant),
/* harmony export */   "getTypographyColorStyles": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.getTypographyColorStyles)
/* harmony export */ });
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);


/***/ }),

/***/ 51975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": () => (/* binding */ Theme)
/* harmony export */ });
const Theme = {
  palette: {
    primary: {
      main: "#2F80ED",
      hovered: "#1A6EDE",
      clicked: "#075DD0",
      message: "#CFE4FF",
      text: "#000000"
    },
    secondary: {
      main: "#EFEFEF",
      hovered: "#E3E3E3",
      clicked: "#D7D7D7",
      text: "#9A9A9A"
    },
    error: {
      main: "#FFE8E8",
      text: "#d32f2f"
    },
    border: {
      main: "#DEDEDE"
    },
    common: {
      black: "#000000",
      white: "#ffffff",
      lightblue: "#F5FCFF",
      green: "#95E19B",
      yellow: "#FFD74A",
      blue: "#D0ECFF",
      purple: "#A08EFF",
      pink: "#FFC1E6",
      red: "#FF9191",
      mint: "#7EF5F5",
      orange: "#FF9A6F",
      brown: "#B59388",
      darkgreen: "#60B667"
    }
  },
  borderRadius: "5px",
  // todo разобраться в структуре, постараться выпилить
  size: {
    cellHeight: "140px",
    maxWidth: "1900px"
  },
  fonts: {
    caption4: {
      size: "20px",
      weight: "bold"
    },
    text1: {
      size: "16px",
      weight: "normal"
    },
    text2: {
      size: "14px",
      weight: "normal"
    },
    text3: {
      size: "12px",
      weight: "normal"
    },
    text1Bold: {
      size: "16px",
      weight: "bold"
    },
    text2Bold: {
      size: "14px",
      weight: "bold"
    },
    text3Bold: {
      size: "12px",
      weight: "bold"
    }
  },
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  boxShadow: {
    medium: "0px 16px 24px rgba(0, 0, 0, 0.1)",
    small: "0px 4px 10px 3px rgba(0, 0, 0, 0.1)"
  }
};

/***/ }),

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActivityColor": () => (/* binding */ getActivityColor)
/* harmony export */ });
/* harmony import */ var _constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66269);
/* harmony import */ var _getColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38070);
/* harmony import */ var _getStudentsByIds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71693);



const getActivityColor = (activity, students) => {
  if (activity.students.length === 1) {
    const student = (0,_getStudentsByIds__WEBPACK_IMPORTED_MODULE_2__.getStudentsByIds)(students, activity.students)[0];

    if (student) {
      return (0,_getColor__WEBPACK_IMPORTED_MODULE_1__.getColor)(student.color);
    }
  }

  if (activity.students.length > 1) {
    return _constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_0__.GROUP_ACTIVITY_COLOR;
  }

  if (activity.isImportant) {
    return _constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_0__.IMPORTANT_ACTIVITY_COLOR;
  }

  return _constants_defaultActivityColor__WEBPACK_IMPORTED_MODULE_0__.COMMON_ACTIVITY_COLOR;
};

/***/ }),

/***/ 38070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColor": () => (/* binding */ getColor)
/* harmony export */ });
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30376);

const getColor = color => {
  var _COLORS$find;

  return ((_COLORS$find = _constants_Colors__WEBPACK_IMPORTED_MODULE_0__.COLORS.find(colorInfo => colorInfo.value === color)) == null ? void 0 : _COLORS$find.color) || "";
};

/***/ }),

/***/ 71693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStudentsByIds": () => (/* binding */ getStudentsByIds)
/* harmony export */ });
const getStudentsByIds = (students = [], ids = []) => {
  const result = [];
  ids.forEach(id => {
    const student = students.find(student => student._id === id);

    if (student) {
      result.push(student);
    }
  });
  return result;
};

/***/ }),

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFormErrors": () => (/* binding */ setFormErrors)
/* harmony export */ });
const setFormErrors = (submitErrorData = {
  isValid: true
}, setError, setSubmitError) => {
  var _submitErrorData$erro;

  setSubmitError(submitErrorData == null ? void 0 : submitErrorData.error);
  (_submitErrorData$erro = submitErrorData.errors) == null ? void 0 : _submitErrorData$erro.forEach(error => {
    setError(error.name, error);
  });
};

/***/ }),

/***/ 34727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCurrentDateInfoQuery": () => (/* binding */ updateCurrentDateInfoQuery)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);

const updateCurrentDateInfoQuery = (dateInfo, history) => {
  const dateInfoQuery = (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.getDateInfoQuery)(dateInfo);
  history.push("/?" + dateInfoQuery);
};

/***/ }),

/***/ 99611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClient": () => (/* reexport safe */ _lib_api_client__WEBPACK_IMPORTED_MODULE_0__.createClient)
/* harmony export */ });
/* harmony import */ var _lib_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93116);


/***/ }),

/***/ 93116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClient": () => (/* binding */ createClient)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89644);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const createConfig = baseURL => {
  return {
    baseURL,
    timeout: 30 * 1000,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cache: "no-cache"
    }
  };
};

const onFulfilled = response => {
  return response;
};

const onRejected = error => {
  return Promise.reject(error);
};

const createClient = baseUrl => {
  const client = axios__WEBPACK_IMPORTED_MODULE_1___default().create(createConfig(baseUrl));
  client.interceptors.response.use(onFulfilled, onRejected);
  return client;
};

/***/ }),

/***/ 45038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT),
/* harmony export */   "TIME_FORMAT": () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.TIME_FORMAT)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71822);


/***/ }),

/***/ 71822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "TIME_FORMAT": () => (/* binding */ TIME_FORMAT)
/* harmony export */ });
const DATE_FORMAT = "DD.MM.YYYY";
const TIME_FORMAT = "HH:mm";

/***/ }),

/***/ 63624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _lib_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _lib_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83934);
/* harmony import */ var _lib_day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25085);
/* harmony import */ var _lib_coach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70680);
/* harmony import */ var _lib_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24225);






/***/ }),

/***/ 67254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActivityAPI": () => (/* binding */ createActivityAPI)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11713);


const createActivityAPI = client => ({
  createActivity: async data => {
    const request = await client.post("/activity", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSchemaFromActivity)(data));
    return request;
  },
  updateActivity: async activity => {
    const request = await client.put(`/activity/${activity._id}`, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSchemaFromActivity)(activity));
    return request;
  },
  deleteActivity: async id => {
    const request = await client.delete(`/activity/${id}`);
    return request;
  },
  confirmActivity: async ({
    id,
    timestamp
  }) => {
    const request = await client.put(`/activity/confirm/${id}/${timestamp}`);
    return request;
  }
});

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67254);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21731);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23111);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67697);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11713);






/***/ }),

/***/ 21731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModel": () => (/* binding */ ActivityModel)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89559);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67697);


const activitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: {
    type: String,
    required: true
  },
  pictogram: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  coachId: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
    required: true
  },
  repeatType: {
    type: Number,
    required: true,
    default: _types__WEBPACK_IMPORTED_MODULE_1__.RepeatTypeEnum.None
  },
  isCommon: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Boolean,
    required: true,
    default: false
  },
  isImportant: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Boolean,
    required: true,
    default: false
  },
  students: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Array,
    default: []
  },
  confirmation: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Mixed,
    default: {}
  }
}, {
  versionKey: false,
  minimize: false
});
const ActivityModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("activity", activitySchema);

/***/ }),

/***/ 23111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activityActions": () => (/* binding */ activityActions),
/* harmony export */   "activityReducer": () => (/* binding */ activityReducer),
/* harmony export */   "activitySlice": () => (/* binding */ activitySlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  activity: null
};
const activitySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "activity",
  initialState,
  reducers: {
    setActivity: (state, action) => {
      state.activity = action.payload;
    }
  }
});
const activityActions = activitySlice.actions;
const activityReducer = activitySlice.reducer;

/***/ }),

/***/ 67697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatTypeEnum": () => (/* binding */ RepeatTypeEnum)
/* harmony export */ });
let RepeatTypeEnum;

(function (RepeatTypeEnum) {
  RepeatTypeEnum[RepeatTypeEnum["None"] = 0] = "None";
  RepeatTypeEnum[RepeatTypeEnum["EveryDay"] = 1] = "EveryDay";
  RepeatTypeEnum[RepeatTypeEnum["EveryWeek"] = 2] = "EveryWeek";
  RepeatTypeEnum[RepeatTypeEnum["EveryMonth"] = 3] = "EveryMonth";
  RepeatTypeEnum[RepeatTypeEnum["EveryYear"] = 4] = "EveryYear";
})(RepeatTypeEnum || (RepeatTypeEnum = {}));

/***/ }),

/***/ 72464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 93891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareActivitiesByTime": () => (/* binding */ compareActivitiesByTime)
/* harmony export */ });
const compareActivitiesByTime = (a, b) => {
  return a.start.unix() - b.start.unix();
};

/***/ }),

/***/ 43814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActivityFromSchema": () => (/* binding */ createActivityFromSchema)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);


const createActivityFromSchema = activitySchema => {
  return Object.assign({}, activitySchema, {
    date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(activitySchema.date),
    start: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(activitySchema.start),
    end: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(activitySchema.end)
  });
};

/***/ }),

/***/ 11191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSchemaFromActivity": () => (/* binding */ createSchemaFromActivity)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);


const createSchemaFromActivity = activity => {
  return Object.assign({}, activity, {
    date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(activity.date),
    start: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyTime)(activity.start),
    end: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyTime)(activity.end)
  });
};

/***/ }),

/***/ 77410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupActivities": () => (/* binding */ groupActivities)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63624);
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72464);
/* harmony import */ var _makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96321);
/* harmony import */ var _mergeGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68187);






const groupActivities = (activities = []) => {
  let groups = [];
  activities.forEach(activity => {
    const groupsOfActivity = groups.filter(group => (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.isTimeCrossed)(group, activity));
    const otherGroups = groups.filter(group => !(0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_2__.isTimeCrossed)(group, activity));
    const shouldMergeGroups = groupsOfActivity.length > 1;
    const groupOfActivity = groupsOfActivity[0];

    if (shouldMergeGroups) {
      const mergedGroup = (0,_mergeGroups__WEBPACK_IMPORTED_MODULE_5__.mergeGroups)(groupsOfActivity);
      groups = [...otherGroups, mergedGroup];
      return;
    }

    if (groupOfActivity) {
      (0,_addActivityToGroup__WEBPACK_IMPORTED_MODULE_3__.addActivityToGroup)(groupOfActivity, activity);
    } else {
      const newGroup = (0,_makeGroupFromActivity__WEBPACK_IMPORTED_MODULE_4__.makeGroupFromActivity)(activity);
      groups.push(newGroup);
    }
  });
  return groups;
};

/***/ }),

/***/ 21148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupActivities": () => (/* reexport safe */ _groupActivities__WEBPACK_IMPORTED_MODULE_0__.groupActivities)
/* harmony export */ });
/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77410);


/***/ }),

/***/ 96321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGroupFromActivity": () => (/* binding */ makeGroupFromActivity)
/* harmony export */ });
const makeGroupFromActivity = activity => {
  const group = {
    start: activity.start,
    end: activity.end,
    activities: [activity]
  };
  return group;
};

/***/ }),

/***/ 68187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeGroups": () => (/* binding */ mergeGroups)
/* harmony export */ });
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72464);

const mergeGroups = groups => {
  const baseGroup = groups[0];

  for (let i = 1; i < groups.length; i++) {
    groups[i].activities.forEach(activity => (0,_addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__.addActivityToGroup)(baseGroup, activity));
  }

  return baseGroup;
};

/***/ }),

/***/ 11713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addActivityToGroup": () => (/* reexport safe */ _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__.addActivityToGroup),
/* harmony export */   "createActivityFromSchema": () => (/* reexport safe */ _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__.createActivityFromSchema),
/* harmony export */   "createSchemaFromActivity": () => (/* reexport safe */ _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__.createSchemaFromActivity),
/* harmony export */   "groupActivities": () => (/* reexport safe */ _groupActivities__WEBPACK_IMPORTED_MODULE_3__.groupActivities),
/* harmony export */   "isTimeCrossed": () => (/* reexport safe */ _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__.isTimeCrossed),
/* harmony export */   "sortActivitiesByTime": () => (/* reexport safe */ _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__.sortActivitiesByTime)
/* harmony export */ });
/* harmony import */ var _addActivityToGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72464);
/* harmony import */ var _createActivityFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43814);
/* harmony import */ var _createSchemaFromActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11191);
/* harmony import */ var _groupActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21148);
/* harmony import */ var _isTimeCrossed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34623);
/* harmony import */ var _sortActivitiesByTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2115);







/***/ }),

/***/ 34623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTimeCrossed": () => (/* binding */ isTimeCrossed)
/* harmony export */ });
const isTimeCrossed = (time1, time2) => {
  const isTime1StartInTime2Period = time2.start <= time1.start && time1.start < time2.end;
  const isTime1EndInTime2Period = time2.start < time1.end && time1.end <= time2.end;
  const isTime2StartInTime1Period = time1.start <= time2.start && time2.start < time1.end;
  const isTime2EndInTime1Period = time1.start < time2.end && time2.end <= time1.end;
  return isTime1StartInTime2Period || isTime1EndInTime2Period || isTime2StartInTime1Period || isTime2EndInTime1Period;
};

/***/ }),

/***/ 2115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortActivitiesByTime": () => (/* binding */ sortActivitiesByTime)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43430);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93891);


const sortActivitiesByTime = activities => {
  return activities.sort((a, b) => (0,_compareActivitiesByTime__WEBPACK_IMPORTED_MODULE_1__.compareActivitiesByTime)(a, b));
};

/***/ }),

/***/ 86433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCoachAPI": () => (/* binding */ createCoachAPI)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

const createCoachAPI = client => ({
  login: async data => {
    const request = await client.post("/coach/login", data);
    return request.data;
  },
  logout: async () => {
    const request = await client.get("/coach/logout");
    return request.data;
  },
  register: async data => {
    const request = await client.post("/coach", data);
    return request.data;
  },
  getCoach: async () => {
    const request = await client.get("/coach");
    return request.data;
  },
  updateCoach: async data => {
    const request = await client.put("/coach", data);
    return request.data;
  }
});

/***/ }),

/***/ 70680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachModel": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.CoachModel),
/* harmony export */   "coachActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachActions),
/* harmony export */   "coachReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachReducer),
/* harmony export */   "coachSlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_2__.coachSlice),
/* harmony export */   "createCoachAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createCoachAPI)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86433);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48780);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48542);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18528);





/***/ }),

/***/ 48780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachModel": () => (/* binding */ CoachModel)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89559);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const coachSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, {
  versionKey: false
});
const CoachModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("coach", coachSchema);

/***/ }),

/***/ 48542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coachActions": () => (/* binding */ coachActions),
/* harmony export */   "coachReducer": () => (/* binding */ coachReducer),
/* harmony export */   "coachSlice": () => (/* binding */ coachSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  coach: null,
  isLogged: false
};
const coachSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "coach",
  initialState,
  reducers: {
    setCoach: (state, action) => {
      state.coach = action.payload;
      state.isLogged = !!action.payload;
    }
  }
});
const coachActions = coachSlice.actions;
const coachReducer = coachSlice.reducer;

/***/ }),

/***/ 18528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 45792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayAPI": () => (/* binding */ createDayAPI)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63624);


const createDayAPI = client => ({
  getDay: async date => {
    const response = await client.get(`/day/${date}`);
    return (0,_routine_support_domains__WEBPACK_IMPORTED_MODULE_1__.createDayFromSchema)(response.data);
  }
});

/***/ }),

/***/ 25085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayAPI": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.createDayAPI),
/* harmony export */   "createDayFromSchema": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createDayFromSchema),
/* harmony export */   "dayActions": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.dayActions),
/* harmony export */   "dayReducer": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.dayReducer),
/* harmony export */   "daySlice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_1__.daySlice)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45792);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52414);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96698);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82551);





/***/ }),

/***/ 52414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayActions": () => (/* binding */ dayActions),
/* harmony export */   "dayReducer": () => (/* binding */ dayReducer),
/* harmony export */   "daySlice": () => (/* binding */ daySlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  day: null
};
const daySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "day",
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    }
  }
});
const dayActions = daySlice.actions;
const dayReducer = daySlice.reducer;

/***/ }),

/***/ 96698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 11349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayFromSchema": () => (/* binding */ createDayFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);


const createDayFromSchema = daySchema => {
  const day = {
    date: (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(daySchema.date),
    activities: daySchema.activities.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createActivityFromSchema)
  };
  return day;
};

/***/ }),

/***/ 82551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayFromSchema": () => (/* reexport safe */ _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__.createDayFromSchema)
/* harmony export */ });
/* harmony import */ var _createDayFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11349);


/***/ }),

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStudentAPI": () => (/* binding */ createStudentAPI)
/* harmony export */ });
/* harmony import */ var _Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31461);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);

const _excluded = ["_id"];

const createStudentAPI = client => ({
  login: async data => {
    const request = await client.post("/student/login", data);
    return request.data;
  },
  logout: async () => {
    const request = await client.get("/student/logout");
    return request.data;
  },
  getStudent: async () => {
    const request = await client.get("/student");
    return request.data;
  },
  createStudent: async data => {
    const request = await client.post("/student", data);
    return request;
  },
  updateStudent: async _ref => {
    let {
      _id
    } = _ref,
        data = (0,_Users_nikitadmitriev_Desktop_routine_support_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

    const request = await client.put(`/student/${_id}`, data);
    return request.data;
  },
  deleteStudent: async id => {
    const request = await client.delete(`/student/${id}`);
    return request;
  },
  getStudents: async coachId => {
    const request = await client.get(`/student/coach/${coachId}`);
    return request.data;
  }
});

/***/ }),

/***/ 24225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5820);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6879);
/* harmony import */ var _studentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5102);
/* harmony import */ var _studentAuthSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51994);
/* harmony import */ var _studentsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56268);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75757);







/***/ }),

/***/ 6879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentModel": () => (/* binding */ StudentModel)
/* harmony export */ });
/* harmony import */ var _routine_support_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48520);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89559);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75757);



const studentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
  name: {
    type: String,
    required: true
  },
  coachId: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema.Types.ObjectId,
    required: true
  },
  color: {
    type: Number,
    required: true,
    default: _types__WEBPACK_IMPORTED_MODULE_2__.ColorEnum.Purple
  },
  pinCode: {
    type: String,
    required: true,
    default: "0000"
  },
  clockType: {
    type: Number,
    required: true,
    default: _types__WEBPACK_IMPORTED_MODULE_2__.ClockTypeEnum.Analog
  },
  language: {
    type: String,
    required: true,
    default: _routine_support_types__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum.En
  }
}, {
  versionKey: false
});
const StudentModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_1__.model)("student", studentSchema);

/***/ }),

/***/ 51994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentAuthActions": () => (/* binding */ studentAuthActions),
/* harmony export */   "studentAuthReducer": () => (/* binding */ studentAuthReducer),
/* harmony export */   "studentAuthSlice": () => (/* binding */ studentAuthSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  student: null,
  isLogged: false
};
const studentAuthSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      var _action$payload;

      state.student = action.payload;
      state.isLogged = Boolean((_action$payload = action.payload) == null ? void 0 : _action$payload._id);
    }
  }
});
const studentAuthActions = studentAuthSlice.actions;
const studentAuthReducer = studentAuthSlice.reducer;

/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentActions": () => (/* binding */ studentActions),
/* harmony export */   "studentReducer": () => (/* binding */ studentReducer),
/* harmony export */   "studentSlice": () => (/* binding */ studentSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  student: null
};
const studentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    }
  }
});
const studentActions = studentSlice.actions;
const studentReducer = studentSlice.reducer;

/***/ }),

/***/ 56268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "studentsActions": () => (/* binding */ studentsActions),
/* harmony export */   "studentsReducer": () => (/* binding */ studentsReducer),
/* harmony export */   "studentsSlice": () => (/* binding */ studentsSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  students: []
};
const studentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    }
  }
});
const studentsActions = studentsSlice.actions;
const studentsReducer = studentsSlice.reducer;

/***/ }),

/***/ 75757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockTypeEnum": () => (/* binding */ ClockTypeEnum),
/* harmony export */   "ColorEnum": () => (/* binding */ ColorEnum)
/* harmony export */ });
let ColorEnum;

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

let ClockTypeEnum;

(function (ClockTypeEnum) {
  ClockTypeEnum[ClockTypeEnum["Analog"] = 0] = "Analog";
  ClockTypeEnum[ClockTypeEnum["Digital"] = 1] = "Digital";
})(ClockTypeEnum || (ClockTypeEnum = {}));

/***/ }),

/***/ 44296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekAPI": () => (/* binding */ createWeekAPI)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57328);


const createWeekAPI = client => ({
  getWeek: async (year, week, filter) => {
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

    const response = await client.get(`/week/${year}/${week}`, {
      params: {
        filter: filterParam
      }
    });
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createWeekFromSchema)(response.data);
  }
});

/***/ }),

/***/ 83934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44296);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36356);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78469);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57328);





/***/ }),

/***/ 36356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekActions": () => (/* binding */ weekActions),
/* harmony export */   "weekReducer": () => (/* binding */ weekReducer),
/* harmony export */   "weekSlice": () => (/* binding */ weekSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);

const initialState = {
  week: null
};
const weekSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "week",
  initialState,
  reducers: {
    setWeek: (state, action) => {
      state.week = action.payload;
    }
  }
});
const weekActions = weekSlice.actions;
const weekReducer = weekSlice.reducer;

/***/ }),

/***/ 78469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 63509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekFromSchema": () => (/* binding */ createWeekFromSchema)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3866);


const createWeekFromSchema = weekSchema => {
  const week = {
    days: weekSchema.days.map(_routine_support_domains__WEBPACK_IMPORTED_MODULE_0__.createDayFromSchema),
    weekInfo: (0,_createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__.createWeekInfoFromSchema)(weekSchema.weekInfo)
  };
  return week;
};

/***/ }),

/***/ 3866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekInfoFromSchema": () => (/* binding */ createWeekInfoFromSchema)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17675);


const createWeekInfoFromSchema = weekInfoSchema => {
  const weekInfo = Object.assign({}, weekInfoSchema, {
    days: weekInfoSchema.days.map(day => (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(day)),
    timeRange: weekInfoSchema.timeRange
  });
  return weekInfo;
};

/***/ }),

/***/ 58920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateInfoToMoment": () => (/* binding */ dateInfoToMoment)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const dateInfoToMoment = dateInfo => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()().year(dateInfo.year).isoWeek(dateInfo.week);
};

/***/ }),

/***/ 61908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentDateInfo": () => (/* binding */ getCurrentDateInfo)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22960);


const getCurrentDateInfo = () => {
  return (0,_getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_1__.getDateInfoFromMoment)(moment__WEBPACK_IMPORTED_MODULE_0___default()());
};

/***/ }),

/***/ 22960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateInfoFromMoment": () => (/* binding */ getDateInfoFromMoment)
/* harmony export */ });
const getDateInfoFromMoment = moment => {
  return {
    year: Number(moment.clone().get("year")),
    week: Number(moment.clone().format("W"))
  };
};

/***/ }),

/***/ 64557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateInfoQuery": () => (/* binding */ getDateInfoQuery)
/* harmony export */ });
/* harmony import */ var _routine_support_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17675);

const getDateInfoQuery = dateInfo => {
  const query = (0,_routine_support_utils__WEBPACK_IMPORTED_MODULE_0__.serialize)(dateInfo);
  return query;
};

/***/ }),

/***/ 72209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDaysOfWeek": () => (/* binding */ getDaysOfWeek)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getDaysOfWeek = ({
  week,
  year
}) => {
  const monday = moment__WEBPACK_IMPORTED_MODULE_0___default()().year(year).day("Monday").isoWeek(week);
  const days = [monday];

  for (let i = 1; i < 7; i++) {
    const day = moment__WEBPACK_IMPORTED_MODULE_0___default()(monday).add(i, "days");
    days.push(day);
  }

  return days;
};

/***/ }),

/***/ 57328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _createWeekFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63509);
/* harmony import */ var _createWeekInfoFromSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3866);
/* harmony import */ var _dateInfoToMoment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58920);
/* harmony import */ var _getCurrentDateInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61908);
/* harmony import */ var _getDateInfoFromMoment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22960);
/* harmony import */ var _getDateInfoQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64557);
/* harmony import */ var _getDaysOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72209);
/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37301);









/***/ }),

/***/ 37301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivity": () => (/* reexport safe */ _repeatActivity__WEBPACK_IMPORTED_MODULE_0__.repeatActivity)
/* harmony export */ });
/* harmony import */ var _repeatActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42487);


/***/ }),

/***/ 42487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivity": () => (/* binding */ repeatActivity)
/* harmony export */ });
/* harmony import */ var _routine_support_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95533);
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44951);
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31872);
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50226);





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

/***/ 95533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityEveryDay": () => (/* reexport safe */ _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__.repeatActivityEveryDay)
/* harmony export */ });
/* harmony import */ var _repeatActivityEveryDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14615);


/***/ }),

/***/ 14615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityEveryDay": () => (/* binding */ repeatActivityEveryDay)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);

const repeatActivityEveryDay = (activity, daysOfCurrentWeek) => {
  const repeatedActivity = [];
  daysOfCurrentWeek.forEach(day => {
    const shouldRepeatActivity = day.isSameOrAfter(activity.date);

    if (shouldRepeatActivity) {
      repeatedActivity.push(Object.assign({}, activity, {
        date: day
      }));
    }
  });
  return repeatedActivity;
};

/***/ }),

/***/ 16624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayNumbersFromWeek": () => (/* binding */ getDayNumbersFromWeek)
/* harmony export */ });
const getDayNumbersFromWeek = daysOfWeek => {
  return daysOfWeek.map(day => day.date());
};

/***/ }),

/***/ 44951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisMonth": () => (/* reexport safe */ _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisMonth)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisMonth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


/***/ }),

/***/ 96732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisMonth": () => (/* binding */ repeatActivityThisMonth)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16624);


const repeatActivityThisMonth = (activity, daysOfCurrentWeek) => {
  const dayNumbersOfWeek = (0,_getDayNumbersFromWeek__WEBPACK_IMPORTED_MODULE_1__.getDayNumbersFromWeek)(daysOfCurrentWeek);
  const activityDayNumber = activity.date.date();
  const repeatActivityDayIndex = dayNumbersOfWeek.indexOf(activityDayNumber);
  const shouldRepeatActivity = repeatActivityDayIndex !== -1;

  if (shouldRepeatActivity) {
    return Object.assign({}, activity, {
      date: daysOfCurrentWeek[repeatActivityDayIndex]
    });
  }

  return undefined;
};

/***/ }),

/***/ 31872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisWeek": () => (/* reexport safe */ _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisWeek)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46764);


/***/ }),

/***/ 46764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisWeek": () => (/* binding */ repeatActivityThisWeek)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);

const repeatActivityThisWeek = (activity, daysOfCurrentWeek) => {
  // todo Решить проблемы с локалью в 22 задаче
  const dayOfWeekIndex = activity.date.locale("ru").weekday();
  const repeatedActivityDate = daysOfCurrentWeek[dayOfWeekIndex];
  const shouldRepeatActivity = repeatedActivityDate.isSameOrAfter(activity.date);

  if (shouldRepeatActivity) {
    return Object.assign({}, activity, {
      date: repeatedActivityDate
    });
  }

  return undefined;
};

/***/ }),

/***/ 50226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisYear": () => (/* reexport safe */ _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__.repeatActivityThisYear)
/* harmony export */ });
/* harmony import */ var _repeatActivityThisYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45162);


/***/ }),

/***/ 45162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeatActivityThisYear": () => (/* binding */ repeatActivityThisYear)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);

const repeatActivityThisYear = (activity, daysOfCurrentWeek) => {
  const newActivityDate = daysOfCurrentWeek.find(day => isSameDatesWithoutYear(day, activity.date));

  if (newActivityDate && newActivityDate >= activity.date) {
    return Object.assign({}, activity, {
      date: newActivityDate
    });
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

const getDateStringWithoutYear = date => {
  return date.format("DD.MM");
};

/***/ }),

/***/ 48520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageEnum": () => (/* reexport safe */ _lib_types__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum)
/* harmony export */ });
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38813);


/***/ }),

/***/ 38813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageEnum": () => (/* binding */ LanguageEnum)
/* harmony export */ });
let LanguageEnum;

(function (LanguageEnum) {
  LanguageEnum["En"] = "en";
  LanguageEnum["Nl"] = "nl";
  LanguageEnum["Ru"] = "ru";
})(LanguageEnum || (LanguageEnum = {}));

/***/ }),

/***/ 17675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15330);


/***/ }),

/***/ 87545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMinutes": () => (/* binding */ getMinutes)
/* harmony export */ });
const getMinutes = time => {
  return time.get("hours") * 60 + time.get("minutes");
};

/***/ }),

/***/ 15330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _getMinutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87545);
/* harmony import */ var _indexOfTimeRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24304);
/* harmony import */ var _isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95796);
/* harmony import */ var _parseDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32764);
/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37702);
/* harmony import */ var _pxToNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22317);
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54898);
/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37864);
/* harmony import */ var _stringifyTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53638);










/***/ }),

/***/ 24304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexOfTimeRange": () => (/* binding */ indexOfTimeRange)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17368);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77950);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88233);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);



const indexOfTimeRange = (timeRange, time) => {
  return timeRange.findIndex(timeString => new RegExp(`^${time.get("hours")}:00`).test(timeString));
};

/***/ }),

/***/ 95796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isToday": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stringifyDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37864);


const isToday = date => {
  return (0,_stringifyDate__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(moment__WEBPACK_IMPORTED_MODULE_0___default()()) === (0,_stringifyDate__WEBPACK_IMPORTED_MODULE_1__.stringifyDate)(date);
};

/***/ }),

/***/ 32764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDate": () => (/* binding */ parseDate)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45038);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const parseDate = date => moment__WEBPACK_IMPORTED_MODULE_1___default()(date, _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT);

/***/ }),

/***/ 37702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseTime": () => (/* binding */ parseTime)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48319);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77950);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19034);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





const parseTime = time => {
  const [hours, minutes] = time.split(":");
  const newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().set({
    hours: Number(hours),
    minutes: Number(minutes)
  });
  return newDate;
};

/***/ }),

/***/ 22317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pxToNumber": () => (/* binding */ pxToNumber)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48319);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77950);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);


const pxToNumber = px => {
  return Number(px.split("px")[0]);
};

/***/ }),

/***/ 54898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": () => (/* binding */ serialize)
/* harmony export */ });
const serialize = obj => {
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

/***/ 37864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyDate": () => (/* binding */ stringifyDate)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45038);

const stringifyDate = date => {
  return date.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT);
};

/***/ }),

/***/ 53638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyTime": () => (/* binding */ stringifyTime)
/* harmony export */ });
/* harmony import */ var _routine_support_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45038);

const stringifyTime = time => {
  return time.format(_routine_support_constants__WEBPACK_IMPORTED_MODULE_0__.TIME_FORMAT);
};

/***/ }),

/***/ 96616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 95191,
	"./af.js": 95191,
	"./ar": 54358,
	"./ar-dz": 71727,
	"./ar-dz.js": 71727,
	"./ar-kw": 98279,
	"./ar-kw.js": 98279,
	"./ar-ly": 87895,
	"./ar-ly.js": 87895,
	"./ar-ma": 72766,
	"./ar-ma.js": 72766,
	"./ar-sa": 52796,
	"./ar-sa.js": 52796,
	"./ar-tn": 12386,
	"./ar-tn.js": 12386,
	"./ar.js": 54358,
	"./az": 57452,
	"./az.js": 57452,
	"./be": 79053,
	"./be.js": 79053,
	"./bg": 65428,
	"./bg.js": 65428,
	"./bm": 21569,
	"./bm.js": 21569,
	"./bn": 56212,
	"./bn-bd": 24635,
	"./bn-bd.js": 24635,
	"./bn.js": 56212,
	"./bo": 13667,
	"./bo.js": 13667,
	"./br": 192,
	"./br.js": 192,
	"./bs": 51802,
	"./bs.js": 51802,
	"./ca": 19118,
	"./ca.js": 19118,
	"./cs": 39990,
	"./cs.js": 39990,
	"./cv": 30557,
	"./cv.js": 30557,
	"./cy": 4227,
	"./cy.js": 4227,
	"./da": 95406,
	"./da.js": 95406,
	"./de": 87994,
	"./de-at": 44139,
	"./de-at.js": 44139,
	"./de-ch": 86591,
	"./de-ch.js": 86591,
	"./de.js": 87994,
	"./dv": 94649,
	"./dv.js": 94649,
	"./el": 14453,
	"./el.js": 14453,
	"./en-au": 48428,
	"./en-au.js": 48428,
	"./en-ca": 36972,
	"./en-ca.js": 36972,
	"./en-gb": 13224,
	"./en-gb.js": 13224,
	"./en-ie": 18843,
	"./en-ie.js": 18843,
	"./en-il": 32732,
	"./en-il.js": 32732,
	"./en-in": 76579,
	"./en-in.js": 76579,
	"./en-nz": 29851,
	"./en-nz.js": 29851,
	"./en-sg": 70442,
	"./en-sg.js": 70442,
	"./eo": 10654,
	"./eo.js": 10654,
	"./es": 63621,
	"./es-do": 68791,
	"./es-do.js": 68791,
	"./es-mx": 67278,
	"./es-mx.js": 67278,
	"./es-us": 60717,
	"./es-us.js": 60717,
	"./es.js": 63621,
	"./et": 72404,
	"./et.js": 72404,
	"./eu": 62944,
	"./eu.js": 62944,
	"./fa": 30496,
	"./fa.js": 30496,
	"./fi": 98137,
	"./fi.js": 98137,
	"./fil": 32872,
	"./fil.js": 32872,
	"./fo": 6545,
	"./fo.js": 6545,
	"./fr": 49090,
	"./fr-ca": 13049,
	"./fr-ca.js": 13049,
	"./fr-ch": 12338,
	"./fr-ch.js": 12338,
	"./fr.js": 49090,
	"./fy": 95088,
	"./fy.js": 95088,
	"./ga": 77812,
	"./ga.js": 77812,
	"./gd": 8374,
	"./gd.js": 8374,
	"./gl": 63649,
	"./gl.js": 63649,
	"./gom-deva": 52674,
	"./gom-deva.js": 52674,
	"./gom-latn": 44948,
	"./gom-latn.js": 44948,
	"./gu": 24033,
	"./gu.js": 24033,
	"./he": 10175,
	"./he.js": 10175,
	"./hi": 58055,
	"./hi.js": 58055,
	"./hr": 41678,
	"./hr.js": 41678,
	"./hu": 85111,
	"./hu.js": 85111,
	"./hy-am": 26530,
	"./hy-am.js": 26530,
	"./id": 19126,
	"./id.js": 19126,
	"./is": 11696,
	"./is.js": 11696,
	"./it": 98710,
	"./it-ch": 38821,
	"./it-ch.js": 38821,
	"./it.js": 98710,
	"./ja": 93974,
	"./ja.js": 93974,
	"./jv": 70648,
	"./jv.js": 70648,
	"./ka": 54731,
	"./ka.js": 54731,
	"./kk": 43501,
	"./kk.js": 43501,
	"./km": 84398,
	"./km.js": 84398,
	"./kn": 91825,
	"./kn.js": 91825,
	"./ko": 13729,
	"./ko.js": 13729,
	"./ku": 19670,
	"./ku.js": 19670,
	"./ky": 78797,
	"./ky.js": 78797,
	"./lb": 50627,
	"./lb.js": 50627,
	"./lo": 65859,
	"./lo.js": 65859,
	"./lt": 80355,
	"./lt.js": 80355,
	"./lv": 16594,
	"./lv.js": 16594,
	"./me": 45324,
	"./me.js": 45324,
	"./mi": 11689,
	"./mi.js": 11689,
	"./mk": 61308,
	"./mk.js": 61308,
	"./ml": 85241,
	"./ml.js": 85241,
	"./mn": 76320,
	"./mn.js": 76320,
	"./mr": 96771,
	"./mr.js": 96771,
	"./ms": 20503,
	"./ms-my": 77748,
	"./ms-my.js": 77748,
	"./ms.js": 20503,
	"./mt": 55534,
	"./mt.js": 55534,
	"./my": 62727,
	"./my.js": 62727,
	"./nb": 7550,
	"./nb.js": 7550,
	"./ne": 49899,
	"./ne.js": 49899,
	"./nl": 41228,
	"./nl-be": 31225,
	"./nl-be.js": 31225,
	"./nl.js": 41228,
	"./nn": 97130,
	"./nn.js": 97130,
	"./oc-lnc": 93130,
	"./oc-lnc.js": 93130,
	"./pa-in": 91282,
	"./pa-in.js": 91282,
	"./pl": 28190,
	"./pl.js": 28190,
	"./pt": 41549,
	"./pt-br": 78135,
	"./pt-br.js": 78135,
	"./pt.js": 41549,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 89272,
	"./ru.js": 89272,
	"./sd": 79248,
	"./sd.js": 79248,
	"./se": 74969,
	"./se.js": 74969,
	"./si": 65522,
	"./si.js": 65522,
	"./sk": 61581,
	"./sk.js": 61581,
	"./sl": 56428,
	"./sl.js": 56428,
	"./sq": 34611,
	"./sq.js": 34611,
	"./sr": 19821,
	"./sr-cyrl": 20185,
	"./sr-cyrl.js": 20185,
	"./sr.js": 19821,
	"./ss": 35029,
	"./ss.js": 35029,
	"./sv": 80939,
	"./sv.js": 80939,
	"./sw": 73107,
	"./sw.js": 73107,
	"./ta": 72304,
	"./ta.js": 72304,
	"./te": 72550,
	"./te.js": 72550,
	"./tet": 99717,
	"./tet.js": 99717,
	"./tg": 87669,
	"./tg.js": 87669,
	"./th": 94959,
	"./th.js": 94959,
	"./tk": 92661,
	"./tk.js": 92661,
	"./tl-ph": 52234,
	"./tl-ph.js": 52234,
	"./tlh": 94120,
	"./tlh.js": 94120,
	"./tr": 81111,
	"./tr.js": 81111,
	"./tzl": 53080,
	"./tzl.js": 53080,
	"./tzm": 88246,
	"./tzm-latn": 25385,
	"./tzm-latn.js": 25385,
	"./tzm.js": 88246,
	"./ug-cn": 48777,
	"./ug-cn.js": 48777,
	"./uk": 2014,
	"./uk.js": 2014,
	"./ur": 45953,
	"./ur.js": 45953,
	"./uz": 89716,
	"./uz-latn": 87791,
	"./uz-latn.js": 87791,
	"./uz.js": 89716,
	"./vi": 99816,
	"./vi.js": 99816,
	"./x-pseudo": 94450,
	"./x-pseudo.js": 94450,
	"./yo": 22556,
	"./yo.js": 22556,
	"./zh-cn": 7414,
	"./zh-cn.js": 7414,
	"./zh-hk": 50824,
	"./zh-hk.js": 50824,
	"./zh-mo": 88589,
	"./zh-mo.js": 88589,
	"./zh-tw": 63285,
	"./zh-tw.js": 63285
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 96616;

/***/ }),

/***/ 58416:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"pictograms":[{"url":"https://www.sclera.be/resources/pictos/drieband%20t.png","en":"three-cushion","nl":"drieband","ru":"три подушки"},{"url":"https://www.sclera.be/resources/pictos/bloemschikken%20t.png","en":"flower arranging","nl":"bloemschikken","ru":"аранжировка цветов"},{"url":"https://www.sclera.be/resources/pictos/kunst%20t.png","en":"art","nl":"kunst","ru":"Изобразительное искусство"},{"url":"https://www.sclera.be/resources/pictos/ballenbad%20spelen%20t.png","en":"play ball pool","nl":"ballenbad spelen","ru":"играть в бильярд"},{"url":"https://www.sclera.be/resources/pictos/ballenbad%20ballen%20gooien%20t.png","en":"ball pool throwing balls","nl":"ballenbad ballen gooien","ru":"мяч пул метание мячей"},{"url":"https://www.sclera.be/resources/pictos/barbeque%20t.png","en":"barbecue","nl":"barbeque","ru":"барбекю"},{"url":"https://www.sclera.be/resources/pictos/zee%20t.png","en":"sea","nl":"zee","ru":"море"},{"url":"https://www.sclera.be/resources/pictos/werkbank%20speelgoed%20t.png","en":"workbench toys","nl":"werkbank speelgoed","ru":"верстак игрушки"},{"url":"https://www.sclera.be/resources/pictos/fietsen%20t.png","en":"bicycles","nl":"fietsen","ru":"велосипеды"},{"url":"https://www.sclera.be/resources/pictos/biljart%20t.png","en":"billiards","nl":"biljart","ru":"бильярд"},{"url":"https://www.sclera.be/resources/pictos/blokken%20bouw%20t.png","en":"building blocks","nl":"blokken bouw","ru":"строительные блоки"},{"url":"https://www.sclera.be/resources/pictos/blokken%20lego%20t.png","en":"blocks lego","nl":"blokken lego","ru":"блоки лего"},{"url":"https://www.sclera.be/resources/pictos/bellen%20blazen%202%20t.png","en":"blow bubbles 2","nl":"bellen blazen 2","ru":"мыльные пузыри 2"},{"url":"https://www.sclera.be/resources/pictos/bellen%20blazen%20t.png","en":"blow bubbles","nl":"bellen blazen","ru":"пускать мыльные пузыри"},{"url":"https://www.sclera.be/resources/pictos/ballon%20blazen%20t.png","en":"blow a balloon","nl":"ballon blazen","ru":"надуть воздушный шар"},{"url":"https://www.sclera.be/resources/pictos/boek%20t.png","en":"book","nl":"boek","ru":"книга"},{"url":"https://www.sclera.be/resources/pictos/boek%202%20t.png","en":"book 2","nl":"boek 2","ru":"книга 2"},{"url":"https://www.sclera.be/resources/pictos/bowlen%20t.png","en":"bowling","nl":"bowlen","ru":"боулинг"},{"url":"https://www.sclera.be/resources/pictos/boksbal%20slaan%20t.png","en":"hitting punching bag","nl":"boksbal slaan","ru":"удар боксерской груши"},{"url":"https://www.sclera.be/resources/pictos/boksbal%20slaan%202%20t.png","en":"punching punch bag 2","nl":"boksbal slaan 2","ru":"боксерский мешок 2"},{"url":"https://www.sclera.be/resources/pictos/snoep%20kopen%20t.png","en":"buy candy","nl":"snoep kopen","ru":"купить конфету"},{"url":"https://www.sclera.be/resources/pictos/tv%202%20kabel%20t.png","en":"tv 2 cable","nl":"tv 2 kabel","ru":"ТВ 2 кабель"},{"url":"https://www.sclera.be/resources/pictos/tv%20kabel%20t.png","en":"tv cable","nl":"tv kabel","ru":"ТВ кабель"},{"url":"https://www.sclera.be/resources/pictos/kamp%20t.png","en":"camp","nl":"kamp","ru":"лагерь"},{"url":"https://www.sclera.be/resources/pictos/kampvuur%20t.png","en":"campfire","nl":"kampvuur","ru":"костер"},{"url":"https://www.sclera.be/resources/pictos/kampvuur%202%20t.png","en":"campfire 2","nl":"kampvuur 2","ru":"у костра 2"},{"url":"https://www.sclera.be/resources/pictos/kamp%20t.png","en":"camp","nl":"kamp","ru":"лагерь"},{"url":"https://www.sclera.be/resources/pictos/snoep%20kopen%20t.png","en":"buy candy","nl":"snoep kopen","ru":"купить конфету"},{"url":"https://www.sclera.be/resources/pictos/kaarten%20t.png","en":"Cards","nl":"kaarten","ru":"Карты"},{"url":"https://www.sclera.be/resources/pictos/kerk%20t.png","en":"church","nl":"kerk","ru":"церковь"},{"url":"https://www.sclera.be/resources/pictos/kaas%20en%20wijn%20t.png","en":"cheese and wine","nl":"kaas en wijn","ru":"сыр и вино"},{"url":"https://www.sclera.be/resources/pictos/kaas%20en%20wijn%20t.png","en":"cheese and wine","nl":"kaas en wijn","ru":"сыр и вино"},{"url":"https://www.sclera.be/resources/pictos/draaimolen%20t.png","en":"carousel","nl":"draaimolen","ru":"карусель"},{"url":"https://www.sclera.be/resources/pictos/chiro%20groep%20t.png","en":"chiro group","nl":"chiro groep","ru":"группа чиро"},{"url":"https://www.sclera.be/resources/pictos/koor%20t.png","en":"choir","nl":"koor","ru":"хор"},{"url":"https://www.sclera.be/resources/pictos/kerstmarkt%20t.png","en":"Christmas market","nl":"kerstmarkt","ru":"Рождественский магазин"},{"url":"https://www.sclera.be/resources/pictos/kerstboomverbranding%20t.png","en":"christmas tree burning","nl":"kerstboomverbranding","ru":"горящая елка"},{"url":"https://www.sclera.be/resources/pictos/kerk%20t.png","en":"church","nl":"kerk","ru":"церковь"},{"url":"https://www.sclera.be/resources/pictos/cinema%20t.png","en":"cinema","nl":"cinema","ru":"кино"},{"url":"https://www.sclera.be/resources/pictos/circus%20t.png","en":"circus","nl":"circus","ru":"цирк"},{"url":"https://www.sclera.be/resources/pictos/stad%20t.png","en":"city","nl":"stad","ru":"город"},{"url":"https://www.sclera.be/resources/pictos/klei%20bewerking%20t.png","en":"clay processing","nl":"klei bewerking","ru":"обработка глины"},{"url":"https://www.sclera.be/resources/pictos/clics%20t.png","en":"clicks","nl":"clics","ru":"щелчки"},{"url":"https://www.sclera.be/resources/pictos/koffie%20t.png","en":"coffee","nl":"koffie","ru":"кофе"},{"url":"https://www.sclera.be/resources/pictos/koffie%202%20t.png","en":"coffee 2","nl":"koffie 2","ru":"кофе 2"},{"url":"https://www.sclera.be/resources/pictos/koffie%20t.png","en":"coffee","nl":"koffie","ru":"кофе"},{"url":"https://www.sclera.be/resources/pictos/koffie%202%20t.png","en":"coffee 2","nl":"koffie 2","ru":"кофе 2"},{"url":"https://www.sclera.be/resources/pictos/koffietafel%20t.png","en":"coffee table","nl":"koffietafel","ru":"журнальный столик"},{"url":"https://www.sclera.be/resources/pictos/kleurboek%20stift%20t.png","en":"coloring book marker","nl":"kleurboek stift","ru":"книжка-раскраска маркер"},{"url":"https://www.sclera.be/resources/pictos/kleurboek%20kleurpotlood%20t.png","en":"coloring book colored pencil","nl":"kleurboek kleurpotlood","ru":"книжка-раскраска цветной карандаш"},{"url":"https://www.sclera.be/resources/pictos/stripverhaal%20t.png","en":"comic strip","nl":"stripverhaal","ru":"комикс"},{"url":"https://www.sclera.be/resources/pictos/computer%20verhaaltje%20t.png","en":"computer story","nl":"computer verhaaltje","ru":"компьютерная история"},{"url":"https://www.sclera.be/resources/pictos/computer%20wai-not%20t.png","en":"computer wai-not","nl":"computer wai-not","ru":"компьютер вай-нет"},{"url":"https://www.sclera.be/resources/pictos/computer%20tv%20kijken%20t.png","en":"watch computer tv","nl":"computer tv kijken","ru":"компьютер смотрит телевизор"},{"url":"https://www.sclera.be/resources/pictos/muziek%20optreden%20t.png","en":"music performance","nl":"muziek optreden","ru":"музыкальное представление"},{"url":"https://www.sclera.be/resources/pictos/disco%20t.png","en":"disco","nl":"disco","ru":"дискотека"},{"url":"https://www.sclera.be/resources/pictos/discotheek%20t.png","en":"disco","nl":"discotheek","ru":"дискотека"},{"url":"https://www.sclera.be/resources/pictos/danslabo%20t.png","en":"dance lab","nl":"danslabo","ru":"танцевальная лаборатория"},{"url":"https://www.sclera.be/resources/pictos/fuif%20t.png","en":"party","nl":"fuif","ru":"вечеринка"},{"url":"https://www.sclera.be/resources/pictos/afspraak%20date%202%20t.png","en":"appointment date 2","nl":"afspraak date 2","ru":"дата встречи 2"},{"url":"https://www.sclera.be/resources/pictos/afspraak%20date%20t.png","en":"appointment date","nl":"afspraak date","ru":"назначенная дата"},{"url":"https://www.sclera.be/resources/pictos/afspraak%20date%204%20t.png","en":"appointment date 4","nl":"afspraak date 4","ru":"дата встречи 4"},{"url":"https://www.sclera.be/resources/pictos/afspraak%20date%203%20t.png","en":"appointment date 3","nl":"afspraak date 3","ru":"дата встречи 3"},{"url":"https://www.sclera.be/resources/pictos/vrije%20dag%202%20kruis%20rood%20t.png","en":"day off 2 cross red","nl":"vrije dag 2 kruis rood","ru":"выходной 2 крест красный"},{"url":"https://www.sclera.be/resources/pictos/vrije%20dag%20t.png","en":"day off","nl":"vrije dag","ru":"выходной"},{"url":"https://www.sclera.be/resources/pictos/vrije%20dag%20school%20t.png","en":"day off school","nl":"vrije dag school","ru":"выходной день в школе"},{"url":"https://www.sclera.be/resources/pictos/vrije%20dag%202%20kruis%20t.png","en":"day off 2 cross","nl":"vrije dag 2 kruis","ru":"выходной 2 крест"},{"url":"https://www.sclera.be/resources/pictos/disco%20t.png","en":"disco","nl":"disco","ru":"дискотека"},{"url":"https://www.sclera.be/resources/pictos/discotheek%20t.png","en":"disco","nl":"discotheek","ru":"дискотека"},{"url":"https://www.sclera.be/resources/pictos/pop%20t.png","en":"doll","nl":"pop","ru":"кукла"},{"url":"https://www.sclera.be/resources/pictos/poppen%20barbie%20t.png","en":"dolls barbie","nl":"poppen barbie","ru":"куклы барби"},{"url":"https://www.sclera.be/resources/pictos/poppen%20barbie%20t.png","en":"dolls barbie","nl":"poppen barbie","ru":"куклы барби"},{"url":"https://www.sclera.be/resources/pictos/poppenhoek%20rommel%20t.png","en":"doll corner mess","nl":"poppenhoek rommel","ru":"кукла угловой беспорядок"},{"url":"https://www.sclera.be/resources/pictos/domino%202%20t.png","en":"domino 2","nl":"domino 2","ru":"домино 2"},{"url":"https://www.sclera.be/resources/pictos/bier%20tappen%20t.png","en":"tap beer","nl":"bier tappen","ru":"разливное пиво"},{"url":"https://www.sclera.be/resources/pictos/tekenen%20t.png","en":"draw","nl":"tekenen","ru":"рисовать"},{"url":"https://www.sclera.be/resources/pictos/duplo%20t.png","en":"duplicate","nl":"duplo","ru":"дублировать"},{"url":"https://www.sclera.be/resources/pictos/dvd%20t.png","en":"DVD","nl":"dvd","ru":"DVD"},{"url":"https://www.sclera.be/resources/pictos/vissen%20ww%20t.png","en":"fishing ww","nl":"vissen ww","ru":"рыбалка ww"},{"url":"https://www.sclera.be/resources/pictos/tafelvoetbal%202%20t.png","en":"table football 2","nl":"tafelvoetbal 2","ru":"настольный футбол 2"},{"url":"https://www.sclera.be/resources/pictos/tafelvoetbal%20t.png","en":"table football","nl":"tafelvoetbal","ru":"настольный футбол"},{"url":"https://www.sclera.be/resources/pictos/park%20t.png","en":"park","nl":"park","ru":"парк"},{"url":"https://www.sclera.be/resources/pictos/xbox%20t.png","en":"xbox","nl":"xbox","ru":"Xbox"},{"url":"https://www.sclera.be/resources/pictos/gameboy%20advanced%202%20t.png","en":"gameboy advanced 2","nl":"gameboy advanced 2","ru":"gameboy продвинутый 2"},{"url":"https://www.sclera.be/resources/pictos/gameboy%20t.png","en":"gameboy","nl":"gameboy","ru":"геймбой"},{"url":"https://www.sclera.be/resources/pictos/gameboy%20advanced%20t.png","en":"gameboy advanced","nl":"gameboy advanced","ru":"gameboy продвинутый"},{"url":"https://www.sclera.be/resources/pictos/geschenkenbeurs%20t.png","en":"gift fair","nl":"geschenkenbeurs","ru":"ярмарка подарков"},{"url":"https://www.sclera.be/resources/pictos/terrasje%20doen%20t.png","en":"do a terrace","nl":"terrasje doen","ru":"сделать террасу"},{"url":"https://www.sclera.be/resources/pictos/uit%20eten%20gaan%20t.png","en":"to go out for dinner","nl":"uit eten gaan","ru":"пойти куда-нибудь пообедать"},{"url":"https://www.sclera.be/resources/pictos/knutselen%20t.png","en":"to craft","nl":"knutselen","ru":"крафтить"},{"url":"https://www.sclera.be/resources/pictos/knutselen%202%20t.png","en":"tinkering 2","nl":"knutselen 2","ru":"мастеринг 2"},{"url":"https://www.sclera.be/resources/pictos/terrasje%20doen%20t.png","en":"do a terrace","nl":"terrasje doen","ru":"сделать террасу"},{"url":"https://www.sclera.be/resources/pictos/recreatieve%20vorming%202%20t.png","en":"recreational education 2","nl":"recreatieve vorming 2","ru":"рекреационное образование 2"},{"url":"https://www.sclera.be/resources/pictos/hobby%20ontwikkeling%20t.png","en":"hobby development","nl":"hobby ontwikkeling","ru":"развитие хобби"},{"url":"https://www.sclera.be/resources/pictos/recreatieve%20vorming%20t.png","en":"recreational training","nl":"recreatieve vorming","ru":"рекреационная подготовка"},{"url":"https://www.sclera.be/resources/pictos/hometrainer%20t.png","en":"exercise bike","nl":"hometrainer","ru":"вело тренажер"},{"url":"https://www.sclera.be/resources/pictos/hometrainer%202%20t.png","en":"exercise bike 2","nl":"hometrainer 2","ru":"велотренажер 2"},{"url":"https://www.sclera.be/resources/pictos/ijsschaatsbaan%202%20t.png","en":"ice skating rink 2","nl":"ijsschaatsbaan 2","ru":"каток 2"},{"url":"https://www.sclera.be/resources/pictos/ijsschaatsbaan%20t.png","en":"ice skating rink","nl":"ijsschaatsbaan","ru":"ледовый каток"},{"url":"https://www.sclera.be/resources/pictos/springkasteel%202%20t.png","en":"bouncy castle 2","nl":"springkasteel 2","ru":"надувной замок 2"},{"url":"https://www.sclera.be/resources/pictos/springkasteel%20t.png","en":"bouncy castle","nl":"springkasteel","ru":"надувной замок"},{"url":"https://www.sclera.be/resources/pictos/zwembad%20oplaasbaar%20t.png","en":"swimming pool rechargeable","nl":"zwembad oplaasbaar","ru":"бассейн перезаряжаемый"},{"url":"https://www.sclera.be/resources/pictos/strijkparels%20rond%20t.png","en":"iron on beads round","nl":"strijkparels rond","ru":"утюжить бусины круглые"},{"url":"https://www.sclera.be/resources/pictos/strijkparels%20t.png","en":"iron on beads","nl":"strijkparels","ru":"утюжить бусины"},{"url":"https://www.sclera.be/resources/pictos/knex%20t.png","en":"knex","nl":"knex","ru":"Knex"},{"url":"https://www.sclera.be/resources/pictos/vlieger%20t.png","en":"kite","nl":"vlieger","ru":"летающий змей"},{"url":"https://www.sclera.be/resources/pictos/vlieger%202%20t.png","en":"kite 2","nl":"vlieger 2","ru":"воздушный змей 2"},{"url":"https://www.sclera.be/resources/pictos/doolhof%20balletje%20t.png","en":"maze ball","nl":"doolhof balletje","ru":"мяч лабиринт"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20lampionnen%20t.png","en":"walking lanterns","nl":"wandelen lampionnen","ru":"ходячие фонари"},{"url":"https://www.sclera.be/resources/pictos/laptop%20verhaaltje%20t.png","en":"laptop story","nl":"laptop verhaaltje","ru":"история ноутбука"},{"url":"https://www.sclera.be/resources/pictos/laptop%20wai-not%20t.png","en":"laptop wai-not","nl":"laptop wai-not","ru":"ноутбук вай-нет"},{"url":"https://www.sclera.be/resources/pictos/laptop%20tv%20kijken%20t.png","en":"watch laptop tv","nl":"laptop tv kijken","ru":"смотреть ноутбук телевизор"},{"url":"https://www.sclera.be/resources/pictos/blokken%20lego%20t.png","en":"blocks lego","nl":"blokken lego","ru":"блоки лего"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%202%20t.png","en":"library 2","nl":"bibliotheek 2","ru":"библиотека 2"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%203%20t.png","en":"library 3","nl":"bibliotheek 3","ru":"библиотека 3"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%205%20t.png","en":"library 5","nl":"bibliotheek 5","ru":"библиотека 5"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%204%20t.png","en":"library 4","nl":"bibliotheek 4","ru":"библиотека 4"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%20t.png","en":"library","nl":"bibliotheek","ru":"библиотека"},{"url":"https://www.sclera.be/resources/pictos/walkman%20t.png","en":"walkman","nl":"walkman","ru":"Walkman"},{"url":"https://www.sclera.be/resources/pictos/muziek%20luisteren%20t.png","en":"listen to music","nl":"muziek luisteren","ru":"слушать музыку"},{"url":"https://www.sclera.be/resources/pictos/computer%20verhaaltje%20t.png","en":"computer story","nl":"computer verhaaltje","ru":"компьютерная история"},{"url":"https://www.sclera.be/resources/pictos/laptop%20verhaaltje%20t.png","en":"laptop story","nl":"laptop verhaaltje","ru":"история ноутбука"},{"url":"https://www.sclera.be/resources/pictos/radio%20t.png","en":"radio","nl":"radio","ru":"радио"},{"url":"https://www.sclera.be/resources/pictos/lotto%20dieren%20t.png","en":"lotto animals","nl":"lotto dieren","ru":"лотерея животных"},{"url":"https://www.sclera.be/resources/pictos/lotto%20abstract%20t.png","en":"lotto abstract","nl":"lotto abstract","ru":"лото аннотация"},{"url":"https://www.sclera.be/resources/pictos/magnetic%20t.png","en":"magnetic","nl":"magnetic","ru":"магнитный"},{"url":"https://www.sclera.be/resources/pictos/zandkasteel%20t.png","en":"sand castle","nl":"zandkasteel","ru":"замок из песка"},{"url":"https://www.sclera.be/resources/pictos/muziek%20maken%20t.png","en":"make music","nl":"muziek maken","ru":"создавать музыку"},{"url":"https://www.sclera.be/resources/pictos/samenspel%20t.png","en":"interplay","nl":"samenspel","ru":"взаимодействие"},{"url":"https://www.sclera.be/resources/pictos/samenspel%202%20t.png","en":"interplay 2","nl":"samenspel 2","ru":"взаимодействие 2"},{"url":"https://www.sclera.be/resources/pictos/samenspel%202%20t.png","en":"interplay 2","nl":"samenspel 2","ru":"взаимодействие 2"},{"url":"https://www.sclera.be/resources/pictos/marionet%20speler%20t.png","en":"puppet player","nl":"marionet speler","ru":"марионеточный игрок"},{"url":"https://www.sclera.be/resources/pictos/markt%20t.png","en":"market","nl":"markt","ru":"рынок"},{"url":"https://www.sclera.be/resources/pictos/markt%202%20t.png","en":"market 2","nl":"markt 2","ru":"рынок 2"},{"url":"https://www.sclera.be/resources/pictos/paardenmolen%20t.png","en":"horse mill","nl":"paardenmolen","ru":"конная мельница"},{"url":"https://www.sclera.be/resources/pictos/draaimolen%20t.png","en":"carousel","nl":"draaimolen","ru":"карусель"},{"url":"https://www.sclera.be/resources/pictos/kampvuur%20t.png","en":"campfire","nl":"kampvuur","ru":"костер"},{"url":"https://www.sclera.be/resources/pictos/kampvuur%202%20t.png","en":"campfire 2","nl":"kampvuur 2","ru":"у костра 2"},{"url":"https://www.sclera.be/resources/pictos/minigolf%20t.png","en":"mini golf","nl":"minigolf","ru":"мини гольф"},{"url":"https://www.sclera.be/resources/pictos/moto%20meeting%20t.png","en":"motorcycle meeting","nl":"moto meeting","ru":"мотоциклетная встреча"},{"url":"https://www.sclera.be/resources/pictos/bergbeklimmen%20t.png","en":"mountaineering","nl":"bergbeklimmen","ru":"альпинизм"},{"url":"https://www.sclera.be/resources/pictos/bergbeklimmen%20t.png","en":"mountaineering","nl":"bergbeklimmen","ru":"альпинизм"},{"url":"https://www.sclera.be/resources/pictos/cinema%20t.png","en":"cinema","nl":"cinema","ru":"кино"},{"url":"https://www.sclera.be/resources/pictos/museum%20t.png","en":"museum","nl":"museum","ru":"музей"},{"url":"https://www.sclera.be/resources/pictos/museum%20openlucht%20t.png","en":"museum open air","nl":"museum openlucht","ru":"музей под открытым небом"},{"url":"https://www.sclera.be/resources/pictos/muziek%20maken%20t.png","en":"make music","nl":"muziek maken","ru":"создавать музыку"},{"url":"https://www.sclera.be/resources/pictos/muziek%20maken%20t.png","en":"make music","nl":"muziek maken","ru":"создавать музыку"},{"url":"https://www.sclera.be/resources/pictos/musical%20t.png","en":"musical","nl":"musical","ru":"музыкальный"},{"url":"https://www.sclera.be/resources/pictos/muziek%20optreden%20t.png","en":"music performance","nl":"muziek optreden","ru":"музыкальное представление"},{"url":"https://www.sclera.be/resources/pictos/nintendo%20ds%20t.png","en":"nintendo ds","nl":"nintendo ds","ru":"Nintendo DS"},{"url":"https://www.sclera.be/resources/pictos/nintendo%20wii%20t.png","en":"nintendo wi","nl":"nintendo wii","ru":"Nintendo Wi"},{"url":"https://www.sclera.be/resources/pictos/origami%202%20t.png","en":"origami 2","nl":"origami 2","ru":"оригами 2"},{"url":"https://www.sclera.be/resources/pictos/origami%20t.png","en":"origami","nl":"origami","ru":"оригами"},{"url":"https://www.sclera.be/resources/pictos/koffer%20pakken%20t.png","en":"pack a suitcase","nl":"koffer pakken","ru":"паковать чемодан"},{"url":"https://www.sclera.be/resources/pictos/pootje%20baden%20t.png","en":"paddling","nl":"pootje baden","ru":"гребля"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20lampionnen%20t.png","en":"walking lanterns","nl":"wandelen lampionnen","ru":"ходячие фонари"},{"url":"https://www.sclera.be/resources/pictos/park%20t.png","en":"park","nl":"park","ru":"парк"},{"url":"https://www.sclera.be/resources/pictos/receptie%20t.png","en":"front desk","nl":"receptie","ru":"стойка регистрации"},{"url":"https://www.sclera.be/resources/pictos/wandelen%202%20t.png","en":"walking 2","nl":"wandelen 2","ru":"ходьба 2"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20t.png","en":"to walk","nl":"wandelen","ru":"гулять"},{"url":"https://www.sclera.be/resources/pictos/petanque%20t.png","en":"petanque","nl":"petanque","ru":"петанк"},{"url":"https://www.sclera.be/resources/pictos/kinderboerderij%20t.png","en":"petting zoo","nl":"kinderboerderij","ru":"зоопарк"},{"url":"https://www.sclera.be/resources/pictos/picnic%20t.png","en":"picnic","nl":"picnic","ru":"пикник"},{"url":"https://www.sclera.be/resources/pictos/kaarten%20t.png","en":"Cards","nl":"kaarten","ru":"Карты"},{"url":"https://www.sclera.be/resources/pictos/zandbak%20spelen%20t.png","en":"play sandbox","nl":"zandbak spelen","ru":"играть в песочницу"},{"url":"https://www.sclera.be/resources/pictos/poppenkast%20spelen%20t.png","en":"play puppet show","nl":"poppenkast spelen","ru":"играть в кукольный спектакль"},{"url":"https://www.sclera.be/resources/pictos/duplo%20t.png","en":"duplicate","nl":"duplo","ru":"дублировать"},{"url":"https://www.sclera.be/resources/pictos/blokken%20bouw%20t.png","en":"building blocks","nl":"blokken bouw","ru":"строительные блоки"},{"url":"https://www.sclera.be/resources/pictos/blokken%20lego%20t.png","en":"blocks lego","nl":"blokken lego","ru":"блоки лего"},{"url":"https://www.sclera.be/resources/pictos/spelen%20vriendje%20bij%20mij%20t.png","en":"play boyfriend with me","nl":"spelen vriendje bij mij","ru":"поиграй со мной в парня"},{"url":"https://www.sclera.be/resources/pictos/spelen%20vriendje%20bij%20mij%202%20t.png","en":"play boyfriend with me 2","nl":"spelen vriendje bij mij 2","ru":"поиграй со мной в парня 2"},{"url":"https://www.sclera.be/resources/pictos/spelen%20ik%20bij%20vriendje%20t.png","en":"i play with boyfriend","nl":"spelen ik bij vriendje","ru":"я играю с парнем"},{"url":"https://www.sclera.be/resources/pictos/spelen%20ik%20bij%20vriendje%202%20t.png","en":"i play with boyfriend 2","nl":"spelen ik bij vriendje 2","ru":"я играю с парнем 2"},{"url":"https://www.sclera.be/resources/pictos/playback%20t.png","en":"playback","nl":"playback","ru":"воспроизведение"},{"url":"https://www.sclera.be/resources/pictos/speeltuin%20t.png","en":"playground","nl":"speeltuin","ru":"детская площадка"},{"url":"https://www.sclera.be/resources/pictos/playmobil%20t.png","en":"playmobil","nl":"playmobil","ru":"playmobil"},{"url":"https://www.sclera.be/resources/pictos/playstation%203%20t.png","en":"playstation 3","nl":"playstation 3","ru":"PlayStation 3"},{"url":"https://www.sclera.be/resources/pictos/playstation%20singstar%20t.png","en":"playstation singstar","nl":"playstation singstar","ru":"PlayStation Singstar"},{"url":"https://www.sclera.be/resources/pictos/playstation%20portable%20t.png","en":"playstation portable","nl":"playstation portable","ru":"PlayStation портативный"},{"url":"https://www.sclera.be/resources/pictos/playstation%20eye%20toy%20t.png","en":"playstation eye toy","nl":"playstation eye toy","ru":"playstation глаз игрушка"},{"url":"https://www.sclera.be/resources/pictos/playstation%20buzz%20t.png","en":"play station buzz","nl":"playstation buzz","ru":"жужжание игровой приставки"},{"url":"https://www.sclera.be/resources/pictos/playstation%20t.png","en":"playstation","nl":"playstation","ru":"игровая приставка"},{"url":"https://www.sclera.be/resources/pictos/pottenbakken%20t.png","en":"pottery","nl":"pottenbakken","ru":"керамика"},{"url":"https://www.sclera.be/resources/pictos/cafe%202%20t.png","en":"cafe 2","nl":"cafe 2","ru":"кафе 2"},{"url":"https://www.sclera.be/resources/pictos/cafe%20t.png","en":"Cafe","nl":"cafe","ru":"Кафе"},{"url":"https://www.sclera.be/resources/pictos/prikblok%20t.png","en":"puncture block","nl":"prikblok","ru":"блок прокола"},{"url":"https://www.sclera.be/resources/pictos/poppenkast%20t.png","en":"puppet show","nl":"poppenkast","ru":"Кукольный спектакль"},{"url":"https://www.sclera.be/resources/pictos/puzzelen%20t.png","en":"puzzle","nl":"puzzelen","ru":"головоломка"},{"url":"https://www.sclera.be/resources/pictos/puzzelen%202%20t.png","en":"puzzle 2","nl":"puzzelen 2","ru":"головоломка 2"},{"url":"https://www.sclera.be/resources/pictos/quiz%20t.png","en":"quiz","nl":"quiz","ru":"контрольный опрос"},{"url":"https://www.sclera.be/resources/pictos/radio%20t.png","en":"radio","nl":"radio","ru":"радио"},{"url":"https://www.sclera.be/resources/pictos/boek%202%20t.png","en":"book 2","nl":"boek 2","ru":"книга 2"},{"url":"https://www.sclera.be/resources/pictos/boek%20t.png","en":"book","nl":"boek","ru":"книга"},{"url":"https://www.sclera.be/resources/pictos/verhaal%20voorlezen%20t.png","en":"read the story","nl":"verhaal voorlezen","ru":"читать рассказ"},{"url":"https://www.sclera.be/resources/pictos/voorlezen%20t.png","en":"to read aloud","nl":"voorlezen","ru":"читать вслух"},{"url":"https://www.sclera.be/resources/pictos/op%20bezoek%20t.png","en":"visiting","nl":"op bezoek","ru":"посещение"},{"url":"https://www.sclera.be/resources/pictos/bezoek%20van%20t.png","en":"visit from","nl":"bezoek van","ru":"визит из"},{"url":"https://www.sclera.be/resources/pictos/receptie%20t.png","en":"front desk","nl":"receptie","ru":"стойка регистрации"},{"url":"https://www.sclera.be/resources/pictos/vrije%20tijd%20t.png","en":"leisure","nl":"vrije tijd","ru":"досуг"},{"url":"https://www.sclera.be/resources/pictos/uit%20eten%20gaan%20t.png","en":"to go out for dinner","nl":"uit eten gaan","ru":"пойти куда-нибудь пообедать"},{"url":"https://www.sclera.be/resources/pictos/speelgoed%20trein%202%20t.png","en":"toy train 2","nl":"speelgoed trein 2","ru":"игрушечный поезд 2"},{"url":"https://www.sclera.be/resources/pictos/speelgoed%20trein%20t.png","en":"toy train","nl":"speelgoed trein","ru":"игрушечный поезд"},{"url":"https://www.sclera.be/resources/pictos/trampoline%20rond%20t.png","en":"trampoline round","nl":"trampoline rond","ru":"батут круглый"},{"url":"https://www.sclera.be/resources/pictos/trampoline%20vierkant%20t.png","en":"trampoline square","nl":"trampoline vierkant","ru":"батутная площадка"},{"url":"https://www.sclera.be/resources/pictos/op%20reis%20t.png","en":"traveling","nl":"op reis","ru":"путешествие"},{"url":"https://www.sclera.be/resources/pictos/tv%20kijken%20t.png","en":"watch TV","nl":"tv kijken","ru":"смотреть телевизор"},{"url":"https://www.sclera.be/resources/pictos/kermis%20t.png","en":"fair","nl":"kermis","ru":"справедливый"},{"url":"https://www.sclera.be/resources/pictos/bezoek%20van%20t.png","en":"visit from","nl":"bezoek van","ru":"визит из"},{"url":"https://www.sclera.be/resources/pictos/op%20bezoek%20t.png","en":"visiting","nl":"op bezoek","ru":"посещение"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%20t.png","en":"library","nl":"bibliotheek","ru":"библиотека"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%204%20t.png","en":"library 4","nl":"bibliotheek 4","ru":"библиотека 4"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%202%20t.png","en":"library 2","nl":"bibliotheek 2","ru":"библиотека 2"},{"url":"https://www.sclera.be/resources/pictos/bib%20cd%20t.png","en":"library cd","nl":"bib cd","ru":"библиотечный компакт-диск"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%203%20t.png","en":"library 3","nl":"bibliotheek 3","ru":"библиотека 3"},{"url":"https://www.sclera.be/resources/pictos/bibliotheek%205%20t.png","en":"library 5","nl":"bibliotheek 5","ru":"библиотека 5"},{"url":"https://www.sclera.be/resources/pictos/laptop%20wai-not%20t.png","en":"laptop wai-not","nl":"laptop wai-not","ru":"ноутбук вай-нет"},{"url":"https://www.sclera.be/resources/pictos/computer%20wai-not%20t.png","en":"computer wai-not","nl":"computer wai-not","ru":"компьютер вай-нет"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20t.png","en":"to walk","nl":"wandelen","ru":"гулять"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20in%20de%20rij%20t.png","en":"walking in line","nl":"wandelen in de rij","ru":"идущий в очереди"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20groep%20t.png","en":"walking group","nl":"wandelen groep","ru":"прогулочная группа"},{"url":"https://www.sclera.be/resources/pictos/stappen%20t.png","en":"steps","nl":"stappen","ru":"шаги"},{"url":"https://www.sclera.be/resources/pictos/wandeling%20avond%20t.png","en":"evening walk","nl":"wandeling avond","ru":"вечерняя прогулка"},{"url":"https://www.sclera.be/resources/pictos/wandelen%202%20t.png","en":"walking 2","nl":"wandelen 2","ru":"ходьба 2"},{"url":"https://www.sclera.be/resources/pictos/wandeling%20park%20bos%20t.png","en":"walk park forest","nl":"wandeling park bos","ru":"прогулка по парку в лесу"},{"url":"https://www.sclera.be/resources/pictos/wandeling%20boten%20t.png","en":"walk boats","nl":"wandeling boten","ru":"ходить на лодках"},{"url":"https://www.sclera.be/resources/pictos/hond%20wandelen%20t.png","en":"dog walking","nl":"hond wandelen","ru":"выгул собак"},{"url":"https://www.sclera.be/resources/pictos/hond%20wandelen%203%20t.png","en":"dog walking 3","nl":"hond wandelen 3","ru":"выгул собак 3"},{"url":"https://www.sclera.be/resources/pictos/hond%20wandelen%202%20t.png","en":"dog walking 2","nl":"hond wandelen 2","ru":"выгул собак 2"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20alleen%20t.png","en":"walking alone","nl":"wandelen alleen","ru":"гулять в одиночестве"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20alleen%20kruis%20rood%20t.png","en":"walking alone cross red","nl":"wandelen alleen kruis rood","ru":"гулять в одиночестве крест красный"},{"url":"https://www.sclera.be/resources/pictos/wandelen%20samen%20t.png","en":"walking together","nl":"wandelen samen","ru":"гулять вместе"},{"url":"https://www.sclera.be/resources/pictos/walkman%20t.png","en":"walkman","nl":"walkman","ru":"Walkman"},{"url":"https://www.sclera.be/resources/pictos/computer%20tv%20kijken%20t.png","en":"computer watching tv","nl":"computer tv kijken","ru":"компьютер смотрит телевизор"},{"url":"https://www.sclera.be/resources/pictos/laptop%20tv%20kijken%20t.png","en":"watch laptop tv","nl":"laptop tv kijken","ru":"смотреть ноутбук телевизор"},{"url":"https://www.sclera.be/resources/pictos/tv%20kijken%20t.png","en":"watch TV","nl":"tv kijken","ru":"смотреть телевизор"},{"url":"https://www.sclera.be/resources/pictos/tv%20kijken%202%20t.png","en":"watch tv 2","nl":"tv kijken 2","ru":"смотреть телевизор 2"},{"url":"https://www.sclera.be/resources/pictos/doolhof%20balletje%20t.png","en":"maze ball","nl":"doolhof balletje","ru":"мяч лабиринт"},{"url":"https://www.sclera.be/resources/pictos/xbox%20t.png","en":"xbox","nl":"xbox","ru":"Xbox"},{"url":"https://www.sclera.be/resources/pictos/zoo%202%20t.png","en":"zoo 2","nl":"zoo 2","ru":"зоопарк 2"},{"url":"https://www.sclera.be/resources/pictos/zoo%20t.png","en":"zoo","nl":"zoo","ru":"зоопарк"}]}');

/***/ }),

/***/ 20790:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Create":"Create","Update":"Update","Delete":"Delete","Log in":"Sign in","Logout":"Sign out","Sign up":"Sign up","Name":"Name","Email":"Email","Password":"Password","Submit":"Submit","Link to register":"No account yet? Sign up here","Link to sign in":"Already have an account? Sign in here","Logout confirm message":"Are you sure you want to log out?","Calendar":"Calendar","Activity":"Activity","Activity status":"Activity status","Completed":"Completed","Pending":"Pending","Required field":"Required field","Activity name":"Activity title","Activity date":"Date","Activity start time":"Start","Activity end time":"End","Change pictogram":"Change pictogram","Choose pictogram":"Choose pictogram","Search":"Search...","Repeat type":"Repeat","Activity type":"Activity type","Every day":"Every day","Every week":"Every week","Every month":"Every month","Never":"Never","Filters":"Filters","Today":"Today","Common":"Common","Common activity":"Common","Individual activity":"Individual","Choose students":"Choose student(s)","Student":"Student","Students":"Students","Clock type":"Clock type","Digital":"Digital","Analog":"Analog","PIN code":"PIN code","Modify student":"Modify student","Add student":"Add student","Confirm student delete":"Confirm your action","No students":"There are no students yet","QR instructions start":"Use QR scanner in","QR instructions end":"Routine Support app to sign in","Rights info":"Routine Support. 2022. All rights reserved"}');

/***/ }),

/***/ 13055:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Create":"Maken","Update":"Bijwerken","Delete":"Verwijderen","Log in":"Inloggen","Logout":"Uitloggen","Sign up":"Inschrijven","Name":"Naam","Email":"E-mail","Password":"Wachtwoord","Submit":"Verzenden","Link to register":"Nog geen account? Meld u hier aan","Link to sign in":"Heeft u al een account? Log hier in","Logout confirm message":"Weet u zeker dat u wilt uitloggen?","Calendar":"Kalender","Activity":"Activiteit","Activity status":"Activiteitsstatus","Completed":"Voltooid","Pending":"In behandeling","Required field":"Verplicht veld","Activity name":"Activiteitstitel","Activity date":"Datum","Activity start time":"Start","Activity end time":"Einde","Change pictogram":"Pictogram wijzigen","Choose pictogram":"Kies pictogram","Search":"Search...","Repeat type":"Herhaal","Activity type":"Activiteitstype","Every day":"Elke dag","Every week":"Elke week","Every month":"Elke maand","Never":"Nooit","Filters":"Filters","Today":"Vandaag","Common":"Algemeen","Common activity":"Algemeen","Individual activity":"Individuele","Choose students":"Kies student(en)","Student":"Student","Students":"Studenten","Clock type":"Kloktype","Digital":"Digitaal","Analog":"Analoog","PIN code":"PIN code","Modify student":"Wijzig leerling","Add student":"Leerling toevoegen","Confirm student delete":"Bevestig je actie","No students":"Er zijn nog geen studenten","QR instructions start":"Gebruik QR-scanner in","QR instructions end":"de Routine Support-app om in te loggen","Rights info":"Routine Support. 2022. Alle rechten voorbehouden"}');

/***/ }),

/***/ 69672:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Create":"Создать","Update":"Обновить","Delete":"Удалить","Log in":"Вход","Logout":"Выйти","Sign up":"Регистрация","Name":"Имя","Email":"Почта","Password":"Пароль","Submit":"Отправить","Link to register":"Нет аккаунта? Зарегистрироваться","Link to sign in":"Уже есть аккаунт? Вход","Logout confirm message":"Вы уверены, что хотите выйти?","Calendar":"Календарь","Activity":"Событие","Activity status":"Статус прохождения","Completed":"Прошли","Pending":"Ожидаются","Required field":"Обязательное поле","Activity name":"Название события","Activity date":"Дата","Activity start time":"Начало","Activity end time":"Окончание","Change pictogram":"Изменить пиктограмму","Choose pictogram":"Выбрать пиктограмму","Search":"Поиск...","Repeat type":"Повторять","Activity type":"Тип активности","Every day":"Каждый день","Every week":"Каждую неделю","Every month":"Каждый месяц","Never":"Никогда","Filters":"Фильтры","Today":"Сегодня","Common":"Общие","Common activity":"Общая","Individual activity":"Индивидуальная","Choose students":"Выберите студента или студентов","Student":"Студент","Students":"Студенты","Clock type":"Тип часов","Digital":"Цифровые","Analog":"Со стрелками","PIN code":"PIN код","Modify student":"Редактирование студента","Add student":"Добавить студента","Confirm student delete":"Подтвердите удаление","No students":"Пока нет ни одного студента","QR instructions start":"Отсканируйте в приложении","QR instructions end":"Routine Support, чтобы войти","Rights info":"Routine Support. 2022. Все права защищены"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(61871)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map