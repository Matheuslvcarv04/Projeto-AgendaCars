"use strict";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@plone/volto/src/actions/clipboard/clipboard.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/actions/clipboard/clipboard.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   copyContent: () => (/* binding */ copyContent),
/* harmony export */   cut: () => (/* binding */ cut),
/* harmony export */   moveContent: () => (/* binding */ moveContent)
/* harmony export */ });
/* harmony import */ var _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/constants/ActionTypes */ "./node_modules/@plone/volto/src/constants/ActionTypes.js");
/**
 * Clipboard actions.
 * @module actions/clipboard/clipboard
 */



/**
 * Copy content function.
 * @function copyContent
 * @param {array} source Source urls.
 * @param {string} target Target url.
 * @returns {Object} Copy content action.
 */
function copyContent(source, target) {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.COPY_CONTENT,
    request: {
      op: 'post',
      path: `${target}/@copy`,
      data: {
        source
      }
    }
  };
}

/**
 * Move content function.
 * @function moveContent
 * @param {array} source Source urls.
 * @param {string} target Target url.
 * @returns {Object} Move content action.
 */
function moveContent(source, target) {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.MOVE_CONTENT,
    request: {
      op: 'post',
      path: `${target}/@move`,
      data: {
        source
      }
    }
  };
}

/**
 * Copy function.
 * @function copy
 * @param {array} urls Source urls.
 * @returns {Object} Copy action.
 */
function copy(urls) {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.COPY,
    source: urls
  };
}

/**
 * Cut function.
 * @function cut
 * @param {array} urls Source urls.
 * @returns {Object} Cut action.
 */
function cut(urls) {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.CUT,
    source: urls
  };
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/circle.jsx"
/*!*****************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/circle.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\circle.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const Circle = ({
  color
}) => __jsx("svg", {
  height: "10",
  width: "10",
  style: {
    marginRight: 5
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "5",
  cy: "5",
  r: "4",
  fill: color || '#51aa55',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/theme/FormattedDate/FormattedRelativeDate.jsx"
/*!************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/FormattedDate/FormattedRelativeDate.jsx ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_helpers_Utils_Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Date */ "./node_modules/@plone/volto/src/helpers/Utils/Date.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\theme\\FormattedDate\\FormattedRelativeDate.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;


const FormattedRelativeDate = ({
  date,
  style,
  relativeTo,
  className,
  locale,
  children,
  live = false,
  refresh = 5000
}) => {
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => locale || state.intl.locale);
  const [liveRelativeTo, setLiveRelativeTo] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(relativeTo ? (0,_plone_volto_helpers_Utils_Date__WEBPACK_IMPORTED_MODULE_1__.toDate)(relativeTo) : new Date());
  const interval = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (live) {
      interval.current = setInterval(() => {
        setLiveRelativeTo(new Date());
      }, refresh);
    }
    return () => interval.current && clearInterval(interval.current);
  }, [refresh, live]);
  const args = {
    locale: language,
    date,
    style,
    relativeTo: liveRelativeTo
  };
  return __jsx("time", {
    className: className,
    dateTime: date,
    title: new Intl.DateTimeFormat(language, _plone_volto_helpers_Utils_Date__WEBPACK_IMPORTED_MODULE_1__.long_date_format).format(new Date(date)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, children ? children((0,_plone_volto_helpers_Utils_Date__WEBPACK_IMPORTED_MODULE_1__.formatRelativeDate)(_objectSpread(_objectSpread({}, args), {}, {
    formatToParts: true
  }))) : (0,_plone_volto_helpers_Utils_Date__WEBPACK_IMPORTED_MODULE_1__.formatRelativeDate)(args));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedRelativeDate);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/theme/Pagination/Pagination.jsx"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/Pagination/Pagination.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/left-key.svg */ "./node_modules/@plone/volto/src/icons/left-key.svg");
/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/right-key.svg */ "./node_modules/@plone/volto/src/icons/right-key.svg");
/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\theme\\Pagination\\Pagination.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * Pagination component.
 * @module components/theme/Pagination/Pagination
 */










/**
 * Component to display pagination.
 * @function Pagination
 * @param {number} current Current page
 * @param {number} total Total amount of pages
 * @param {number} pageSize Current page size
 * @param {Array} pageSizes Available page sizes
 * @param {function} onChangePage On page change handler
 * @param {function} onChangePageSize On page size change handler
 * @returns {string} Markup of the component.
 */
const Pagination = ({
  current,
  total,
  pageSize,
  pageSizes,
  onChangePage,
  onChangePageSize
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
  secondary: true,
  attached: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, current > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current - 1,
  icon: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: (_plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    size: "23px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }),
  className: "chevron-left-icon",
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}), current > 2 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: 0,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, "1"), current > 3 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  disabled: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 23
  }
}, "..."), current > 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current - 2,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
}, current - 1), current > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current - 1,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }
}, current), total > 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current,
  active: true,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }
}, current + 1), total > current + 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current + 1,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }
}, current + 2), total > current + 2 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current + 2,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }
}, current + 3), total > current + 4 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  disabled: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 31
  }
}, "..."), total > current + 3 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: total - 1,
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }
}, total), current < total - 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  value: current + 1,
  icon: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: (_plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    size: "23px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }),
  className: "chevron-right-icon",
  onClick: onChangePage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }
})), pageSize && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
  position: "right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }
}, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  id: "Show",
  defaultMessage: "Show",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 11
  }
}), ":"), lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(pageSizes, size => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
  key: size,
  value: size,
  active: size === pageSize,
  onClick: onChangePageSize,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 11
  }
}, size))));

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Pagination.propTypes = {
  /**
   * Current page
   */
  current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired,
  /**
   * Total number of pages
   */
  total: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired,
  /**
   * Number of items per page
   */
  pageSize: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  /**
   * Page sizes to choose from
   */
  pageSizes: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])),
  /**
   * Handler called when changing the page
   */
  onChangePage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  /**
   * Handler called when changing the pagesize
   */
  onChangePageSize: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};

/**
 * Default props.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Pagination.defaultProps = {
  pageSize: null,
  pageSizes: [],
  onChangePageSize: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(Pagination));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/theme/Popup/Popup.jsx"
/*!************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/Popup/Popup.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["menu", "onOpen", "onClose"];
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\theme\\Popup\\Popup.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;



/**
 * Renders a preview image for a catalog brain result item.
 *
 */
function Popup(props) {
  const {
      menu,
      onOpen,
      onClose
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, props) => {
    setOpen(true);
    onOpen && onOpen(e, props);
  }, [onOpen, setOpen]);
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (menu) {
      setTimeout(() => {
        var _e$nativeEvent;
        !((_e$nativeEvent = e.nativeEvent) !== null && _e$nativeEvent !== void 0 && _e$nativeEvent.defaultPrevented) && setOpen(false);
      });
    }
  }, [menu, setOpen]);
  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, props) => {
    setOpen(false);
    onClose && onClose(e, props);
  }, [onClose, setOpen]);
  const PopupContainer = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(props => {
    return __jsx("div", _extends({}, props, {
      onClickCapture: handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 14
      }
    }));
  }, [handleClick]);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, _extends({
    as: PopupContainer,
    open: open,
    onOpen: handleOpen,
    onClose: handleClose
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }));
}
Popup.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }

};
;
//# sourceMappingURL=Contents.54621fc9754d8ce87ec3.hot-update.js.map