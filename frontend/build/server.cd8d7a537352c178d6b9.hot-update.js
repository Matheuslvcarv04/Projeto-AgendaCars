"use strict";
exports.ids = null;
exports.modules = {

/***/ "./package-volto-transporte/src/index.js"
/*!***********************************************!*\
  !*** ./package-volto-transporte/src/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducers_transporte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/transporte */ "./package-volto-transporte/src/reducers/transporte.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./package-volto-transporte/src/config.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

const applyConfig = config => {
  config.addonReducers = _objectSpread(_objectSpread({}, config.addonReducers || {}), {}, {
    transporte: _reducers_transporte__WEBPACK_IMPORTED_MODULE_0__["default"]
  });
  return (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyConfig);

/***/ }

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ __webpack_require__.h = () => ("d09a23f9dabad1b8834f");
/******/ 
/******/ }
;
//# sourceMappingURL=server.cd8d7a537352c178d6b9.hot-update.js.map