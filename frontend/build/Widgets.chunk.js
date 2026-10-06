exports.ids = ["Widgets"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/icons/blank.svg"
/*!*******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/blank.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blank.0f85be1c.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/drag.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/drag.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/drag.c428b057.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/image-narrow.svg"
/*!**************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/image-narrow.svg ***!
  \**************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image-narrow.2f8dc819.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Search/widgets/SelectMetadataField.jsx"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Search/widgets/SelectMetadataField.jsx ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/toPairs */ "lodash/toPairs");
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_toPairs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "lodash/groupBy");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_components_manage_Widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets */ "./node_modules/@plone/volto/src/components/manage/Widgets/index.tsx");
/* harmony import */ var _hocs_withQueryString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../hocs/withQueryString */ "./node_modules/@plone/volto/src/components/manage/Blocks/Search/hocs/withQueryString.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Search\\widgets\\SelectMetadataField.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SelectWidget component.
 * @module components/manage/Widgets/SelectWidget
 */

;











const identity = a => a;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  }
});

/**
 * SelectWidget component function.
 * @function SelectWidget
 * @returns {string} Markup of the component.
 */
const SelectWidget = props => {
  var _indexes$value$value;
  const {
    choices,
    vocabBaseUrl,
    getVocabulary
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!choices && vocabBaseUrl) {
      getVocabulary({
        vocabNameOrURL: vocabBaseUrl
      });
    }
  }, [choices, vocabBaseUrl, getVocabulary]);
  const {
    id,
    value,
    onChange,
    placeholder,
    querystring,
    filterOptions = identity
  } = props;
  const isDisabled = false;
  const {
    indexes = []
  } = querystring;
  const Select = props.reactSelect.default;
  return __jsx(_plone_volto_components_manage_Widgets__WEBPACK_IMPORTED_MODULE_8__.FormFieldWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), __jsx(Select, {
    id: `field-${id}`,
    name: id,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : props.intl.formatMessage(messages.select),
    isDisabled: isDisabled,
    className: "react-select-container",
    classNamePrefix: "react-select",
    options: lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_3___default()(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_3___default()(filterOptions(indexes)), item => item[1].group)), group => ({
      label: group[0],
      options: lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(group[1], item => item[1].enabled), field => ({
        label: field[1].title,
        value: field[0]
      }))
    })),
    styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_11__.customSelectStyles,
    theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_11__.selectTheme,
    components: {
      DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_11__.DropdownIndicator,
      Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_11__.Option
    },
    value: {
      value: value === null || value === void 0 ? void 0 : value.value,
      label: (_indexes$value$value = indexes[value === null || value === void 0 ? void 0 : value.value]) === null || _indexes$value$value === void 0 ? void 0 : _indexes$value$value.title
    },
    onChange: data => {
      let dataValue = [];
      if (Array.isArray(data)) {
        for (let obj of data) {
          dataValue.push(obj.value);
        }
        return onChange(id, dataValue);
      }
      return onChange(id, data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
};
SelectWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  querystring: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
SelectWidget.defaultProps = {
  description: null,
  required: false,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  loading: false,
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_7__.compose)(_hocs_withQueryString__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__.injectLazyLibs)(['reactSelect']))(SelectWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\DragDropList\\DragDropList.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;



const getVerticalPlaceholder = (draggedDOM, sourceIndex, destinationIndex, parentDOM) => {
  // Because of the margin rendering rules, there is no easy
  // way to calculate the offset of the placeholder.
  //
  // (Note that this is the reason we cannot use the solutions
  // published on the net, because they assume that we are in control
  // of the content and there are no additional margins involved.)
  //
  // To get a placeholder that looks good in all cases, we
  // fill up the space between the previous and the next element.
  const childrenArray = [...parentDOM.children];
  // Remove the source element
  childrenArray.splice(sourceIndex, 1);
  // Also remove the placeholder that the library always inserts at the end
  childrenArray.splice(-1, 1);
  const parentRect = parentDOM.getBoundingClientRect();
  const prevNode = childrenArray[destinationIndex - 1];
  const nextNode = childrenArray[destinationIndex];
  let top, bottom;
  if (prevNode) {
    const prevRect = prevNode.getBoundingClientRect();
    top = prevRect.top + prevRect.height - parentRect.top;
  } else {
    top = 0;
  }
  if (nextNode) {
    const nextRect = nextNode.getBoundingClientRect();
    bottom = nextRect.top - parentRect.top;
  } else {
    bottom = parentRect.bottom + draggedDOM.getBoundingClientRect().height - parentRect.top;
  }
  return {
    clientY: top,
    clientHeight: bottom - top,
    clientX: parseFloat(window.getComputedStyle(parentDOM).paddingLeft),
    clientWidth: draggedDOM.clientWidth
  };
};
const getHorizontalPlaceholder = (draggedDOM, destinationIndex, parentDOM) => {
  // The next element will be the one with a gray placeholder behind it.
  //
  // If the element is the last (doesn't have a next element), the whole draggable
  // area will be highlighted

  const parentRect = parentDOM.getBoundingClientRect();
  let height;
  height = parentRect.bottom - parentRect.top;
  let clientWidth = draggedDOM.clientWidth;
  let innerDroppablePlaceholderMarginLeft = parentDOM.children[destinationIndex].getBoundingClientRect().x;
  if (parentDOM.children.length - 1 === destinationIndex) {
    innerDroppablePlaceholderMarginLeft = parentRect.x;
    clientWidth = parentDOM.getBoundingClientRect().width;
  }
  return {
    clientY: 0,
    clientHeight: height,
    clientX: parseFloat(innerDroppablePlaceholderMarginLeft - parentRect.x),
    clientWidth: clientWidth
  };
};
const DragDropList = props => {
  const {
    childList,
    children,
    direction = 'vertical',
    onMoveItem,
    as = 'div',
    style,
    forwardedAriaLabelledBy,
    reactBeautifulDnd
  } = props; //renderChild
  const {
    DragDropContext,
    Draggable,
    Droppable
  } = reactBeautifulDnd;
  const [placeholderProps, setPlaceholderProps] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
  const [uid] = react__WEBPACK_IMPORTED_MODULE_0___default().useState((0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)());
  // queueing timed action
  const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onDragStart = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(event => {
    clearTimeout(timer.current);
    const queryAttr = 'data-rbd-draggable-id';
    const domQuery = `[${queryAttr}='${event.draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);
    if (!draggedDOM) {
      return;
    }
    const sourceIndex = event.source.index;
    setPlaceholderProps(direction === 'horizontal' ? getHorizontalPlaceholder(draggedDOM, sourceIndex, parentRef.current) : getVerticalPlaceholder(draggedDOM, sourceIndex, sourceIndex, parentRef.current));
  }, [direction]);
  const onDragEnd = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(result => {
    clearTimeout(timer.current);
    onMoveItem(result);
    setPlaceholderProps({});
  }, [onMoveItem]);
  const onDragUpdate = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(update => {
    clearTimeout(timer.current);
    setPlaceholderProps({});
    if (!update.destination) {
      return;
    }
    const draggableId = update.draggableId;
    const queryAttr = 'data-rbd-draggable-id';
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);
    if (!draggedDOM) {
      return;
    }
    const sourceIndex = update.source.index;
    const destinationIndex = update.destination.index;
    // Wait until the animations have finished, to make it look good.
    timer.current = setTimeout(() => {
      setPlaceholderProps(direction === 'horizontal' ? getHorizontalPlaceholder(draggedDOM, destinationIndex, parentRef.current) : getVerticalPlaceholder(draggedDOM, sourceIndex, destinationIndex, parentRef.current));
    }, 250);
  }, [direction]);
  const AsDomComponent = as;
  return __jsx(DragDropContext, {
    onDragStart: onDragStart,
    onDragUpdate: onDragUpdate,
    onDragEnd: onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx(Droppable, {
    droppableId: uid,
    direction: direction,
    renderClone: (provided, snapshot, rubric) => {
      const index = rubric.source.index;
      return children({
        child: childList[index][1],
        childId: childList[index][0],
        index,
        draginfo: provided
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, (provided, snapshot) => __jsx(AsDomComponent, _extends({
    ref: el => {
      provided.innerRef(el);
      parentRef.current = el;
    }
  }, provided.droppableProps, {
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative'
    }),
    "aria-labelledby": forwardedAriaLabelledBy,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }), childList.filter(([id, child]) => id && child) // beware numbers!
  .map(([childId, child], index) => __jsx(Draggable, {
    draggableId: childId.toString(),
    index: index,
    key: childId,
    style: {
      userSelect: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, draginfo => children({
    child,
    childId,
    index,
    draginfo
  }))), provided.placeholder, !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(placeholderProps) && snapshot.isDraggingOver && __jsx("div", {
    style: _objectSpread({
      position: 'absolute',
      top: placeholderProps.clientY,
      left: placeholderProps.clientX,
      height: placeholderProps.clientHeight,
      background: '#eee',
      width: placeholderProps.clientWidth,
      borderRadius: '3px'
    }, direction === 'horizontal' && {
      zIndex: -1
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_2__.injectLazyLibs)(['reactBeautifulDnd'])(DragDropList));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/AlignWidget.jsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/AlignWidget.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultActionsInfo: () => (/* binding */ defaultActionsInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonsWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonsWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ButtonsWidget.jsx");
/* harmony import */ var _plone_volto_icons_image_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/icons/image-left.svg */ "./node_modules/@plone/volto/src/icons/image-left.svg");
/* harmony import */ var _plone_volto_icons_image_left_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_left_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_icons_image_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/icons/image-right.svg */ "./node_modules/@plone/volto/src/icons/image-right.svg");
/* harmony import */ var _plone_volto_icons_image_right_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_right_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_image_fit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/image-fit.svg */ "./node_modules/@plone/volto/src/icons/image-fit.svg");
/* harmony import */ var _plone_volto_icons_image_fit_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_fit_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_icons_image_narrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/image-narrow.svg */ "./node_modules/@plone/volto/src/icons/image-narrow.svg");
/* harmony import */ var _plone_volto_icons_image_narrow_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_narrow_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_icons_image_wide_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/image-wide.svg */ "./node_modules/@plone/volto/src/icons/image-wide.svg");
/* harmony import */ var _plone_volto_icons_image_wide_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_wide_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_icons_image_full_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/image-full.svg */ "./node_modules/@plone/volto/src/icons/image-full.svg");
/* harmony import */ var _plone_volto_icons_image_full_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_image_full_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\AlignWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;








const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  left: {
    id: 'Left',
    defaultMessage: 'Left'
  },
  right: {
    id: 'Right',
    defaultMessage: 'Right'
  },
  center: {
    id: 'Center',
    defaultMessage: 'Center'
  },
  narrow: {
    id: 'Narrow',
    defaultMessage: 'Narrow'
  },
  wide: {
    id: 'Wide',
    defaultMessage: 'Wide'
  },
  full: {
    id: 'Full',
    defaultMessage: 'Full'
  }
});
const defaultActionsInfo = ({
  intl
}) => ({
  left: [(_plone_volto_icons_image_left_svg__WEBPACK_IMPORTED_MODULE_3___default()), intl.formatMessage(messages.left)],
  right: [(_plone_volto_icons_image_right_svg__WEBPACK_IMPORTED_MODULE_4___default()), intl.formatMessage(messages.right)],
  center: [(_plone_volto_icons_image_fit_svg__WEBPACK_IMPORTED_MODULE_5___default()), intl.formatMessage(messages.center)],
  narrow: [(_plone_volto_icons_image_narrow_svg__WEBPACK_IMPORTED_MODULE_6___default()), intl.formatMessage(messages.narrow)],
  wide: [(_plone_volto_icons_image_wide_svg__WEBPACK_IMPORTED_MODULE_7___default()), intl.formatMessage(messages.wide)],
  full: [(_plone_volto_icons_image_full_svg__WEBPACK_IMPORTED_MODULE_8___default()), intl.formatMessage(messages.full)]
});
const AlignWidget = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const {
    actions = ['left', 'right', 'center', 'full'],
    actionsInfoMap
  } = props;
  const actionsInfo = _objectSpread(_objectSpread({}, defaultActionsInfo({
    intl
  })), actionsInfoMap);
  return __jsx(_ButtonsWidget__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    actions: actions,
    actionsInfoMap: actionsInfo,
    defaultAction: props.defaultAction || 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ArrayWidget.jsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ArrayWidget.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayWidgetComponent: () => (/* binding */ ArrayWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ArrayWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * ArrayWidget component.
 * @module components/manage/Widgets/ArrayWidget
 */

;











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  },
  no_value: {
    id: 'No value',
    defaultMessage: 'No value'
  },
  no_options: {
    id: 'No options',
    defaultMessage: 'No options'
  }
});
function arrayMove(array, from, to) {
  const slicedArray = array.slice();
  slicedArray.splice(to < 0 ? array.length + to : to, 0, slicedArray.splice(from, 1)[0]);
  return slicedArray;
}
function normalizeArrayValue(choices, value) {
  if (!value || !Array.isArray(value)) return [];
  if (value.length === 0) return value;
  if (typeof value[0] === 'string') {
    // raw value like ['foo', 'bar']
    return value.map(v => {
      var _find;
      return {
        label: ((_find = lodash_find__WEBPACK_IMPORTED_MODULE_6___default()(choices, c => c.value === v)) === null || _find === void 0 ? void 0 : _find.label) || v,
        value: v
      };
    });
  }
  if (lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default()(value[0]) && Object.keys(value[0]).includes('token') // Array of objects, w/ label+value
  ) {
    return value.map(v => {
      const item = lodash_find__WEBPACK_IMPORTED_MODULE_6___default()(choices, c => c.value === v.token);
      return item ? {
        label: item.label || item.title || item.token,
        value: v.token
      } : {
        // avoid a crash if choices doesn't include this item
        label: v.label,
        value: v.token
      };
    }).filter(f => !!f);
  }
  return [];
}
function normalizeChoices(choices) {
  if (Array.isArray(choices) && choices.length && Array.isArray(choices[0])) {
    return choices.map(option => ({
      value: option[0],
      label:
      // Fix "None" on the serializer, to remove when fixed in p.restapi
      option[1] !== 'None' && option[1] ? option[1] : option[0]
    }));
  }
  return choices;
}

/**
 * Compare values and return true if equal.
 * Consider upper and lower case.
 * @method compareOption
 * @param {*} inputValue
 * @param {*} option
 * @param {*} accessors
 * @returns {boolean}
 */
const compareOption = (inputValue = '', option, accessors) => {
  const candidate = String(inputValue);
  const optionValue = String(accessors.getOptionValue(option));
  const optionLabel = String(accessors.getOptionLabel(option));
  return optionValue === candidate || optionLabel === candidate;
};

/**
 * ArrayWidget component class.
 * @class ArrayWidget
 * @extends Component
 *
 * A creatable select array widget will be rendered if the named vocabulary is
 * in the widget definition (hint) like:
 *
 * ```
 * list_field_voc_unconstrained = schema.List(
 *     title=u"List field with values from vocabulary but not constrained to them.",
 *     description=u"zope.schema.List",
 *     value_type=schema.TextLine(),
 *     required=False,
 *     missing_value=[],
 * )
 * directives.widget(
 *     "list_field_voc_unconstrained",
 *     AjaxSelectFieldWidget,
 *     vocabulary="plone.app.vocabularies.PortalTypes",
 * )
 * ```
 */
class ArrayWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props) {
    super(props);
    _defineProperty(this, "onSortEnd", (selectedOption, {
      oldIndex,
      newIndex
    }) => {
      const newValue = arrayMove(selectedOption, oldIndex, newIndex);
      this.handleChange(newValue);
    });
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props$items, _this$props$items$cho, _this$props$choices;
    if (!((_this$props$items = this.props.items) !== null && _this$props$items !== void 0 && (_this$props$items$cho = _this$props$items.choices) !== null && _this$props$items$cho !== void 0 && _this$props$items$cho.length) && !((_this$props$choices = this.props.choices) !== null && _this$props$choices !== void 0 && _this$props$choices.length) && this.props.vocabBaseUrl) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }
  componentDidUpdate() {
    var _this$props$items2, _this$props$items2$ch, _this$props$choices2;
    if (!((_this$props$items2 = this.props.items) !== null && _this$props$items2 !== void 0 && (_this$props$items2$ch = _this$props$items2.choices) !== null && _this$props$items2$ch !== void 0 && _this$props$items2$ch.length) && !((_this$props$choices2 = this.props.choices) !== null && _this$props$choices2 !== void 0 && _this$props$choices2.length) && this.props.vocabLoading === undefined && !this.props.vocabLoaded && this.props.vocabBaseUrl) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }

  /**
   * Handle the field change, store it in the local state and back to simple
   * array of tokens for correct serialization
   * @method handleChange
   * @param {array} selectedOption The selected options (already aggregated).
   * @returns {undefined}
   */
  handleChange(selectedOption) {
    this.props.onChange(this.props.id, selectedOption ? selectedOption.map(item => item.value) : null);
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props, _this$props2, _this$props$choices3, _this$props$placehold;
    const choices = normalizeChoices(((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.choices) || []);
    const selectedOption = normalizeArrayValue(choices, this.props.value);
    const CreatableSelect = this.props.reactSelectCreateable.default;
    const {
      SortableContainer
    } = this.props.reactSortableHOC;
    const Select = this.props.reactSelect.default;
    const SortableSelect =
    // It will be only creatable if the named vocabulary is in the widget definition
    // (hint) like:
    // list_field_voc_unconstrained = schema.List(
    //     title=u"List field with values from vocabulary but not constrained to them.",
    //     description=u"zope.schema.List",
    //     value_type=schema.TextLine(),
    //     required=False,
    //     missing_value=[],
    // )
    // directives.widget(
    //     "list_field_voc_unconstrained",
    //     AjaxSelectFieldWidget,
    //     vocabulary="plone.app.vocabularies.PortalTypes",
    // )
    (_this$props2 = this.props) !== null && _this$props2 !== void 0 && _this$props2.choices && !(0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromHint)(this.props) && !this.props.creatable ? SortableContainer(Select) : SortableContainer(CreatableSelect);
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 7
      }
    }), __jsx(SortableSelect, {
      useDragHandle: true
      // react-sortable-hoc props:
      ,
      axis: "xy",
      onSortEnd: sortProp => {
        this.onSortEnd(selectedOption, sortProp);
      },
      menuShouldScrollIntoView: false,
      distance: 4
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      ,
      getHelperDimensions: ({
        node
      }) => node.getBoundingClientRect(),
      id: `field-${this.props.id}`,
      fieldTitle: this.props.title,
      "aria-label": this.props.title || undefined,
      key: this.props.id,
      isDisabled: this.props.disabled || this.props.isDisabled,
      className: "react-select-container",
      classNamePrefix: "react-select"
      /* eslint-disable jsx-a11y/no-autofocus */,
      autoFocus: this.props.focus
      /* eslint-enable jsx-a11y/no-autofocus */,
      options: this.props.vocabBaseUrl ? choices : this.props.choices ? [...choices, ...(this.props.noValueOption && (this.props.default === undefined || this.props.default === null) ? [{
        label: this.props.intl.formatMessage(messages.no_value),
        value: 'no-value'
      }] : [])] : [{
        label: this.props.intl.formatMessage(messages.no_value),
        value: 'no-value'
      }],
      styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.customSelectStyles,
      theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.selectTheme,
      components: _objectSpread(_objectSpread({}, ((_this$props$choices3 = this.props.choices) === null || _this$props$choices3 === void 0 ? void 0 : _this$props$choices3.length) > 25 && {
        MenuList: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.MenuList
      }), {}, {
        MultiValueContainer: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.MultiValueContainer,
        MultiValue: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.SortableMultiValue,
        MultiValueLabel: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.SortableMultiValueLabel,
        DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.DropdownIndicator,
        ClearIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.ClearIndicator,
        Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_10__.Option
      }),
      value: selectedOption || [],
      placeholder: (_this$props$placehold = this.props.placeholder) !== null && _this$props$placehold !== void 0 ? _this$props$placehold : this.props.intl.formatMessage(messages.select),
      onChange: this.handleChange,
      isValidNewOption: (inputValue, selectValue, selectOptions, accessors) => !(!inputValue || selectValue.some(option => compareOption(inputValue, option, accessors)) || selectOptions.some(option => compareOption(inputValue, option, accessors))),
      isClearable: !this.props.required,
      isMulti: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }
    }));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ArrayWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)])),
  vocabLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  vocabLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)])),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  creatable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool) //if widget has no vocab and you want to be creatable
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ArrayWidget, "defaultProps", {
  description: null,
  required: false,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null,
  creatable: false
});
const ArrayWidgetComponent = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ArrayWidget);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__.injectLazyLibs)(['reactSelect', 'reactSelectCreateable', 'reactSortableHOC']), (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2, _props$items;
  const vocabBaseUrl = (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromItems)(props);
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : _state$vocabularies$v2[state.intl.locale];

  // If the schema already has the choices in it, then do not try to get the vocab,
  // even if there is one
  if ((_props$items = props.items) !== null && _props$items !== void 0 && _props$items.choices) {
    return {
      choices: props.items.choices,
      lang: state.intl.locale
    };
  } else if (vocabState) {
    return {
      choices: vocabState.items,
      vocabBaseUrl,
      vocabLoading: vocabState.loading,
      vocabLoaded: vocabState.loaded,
      lang: state.intl.locale
    };
  }
  return {
    vocabBaseUrl,
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_9__.getVocabulary
}))(ArrayWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ButtonsWidget.jsx"
/*!***********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ButtonsWidget.jsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ButtonsWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;




// The ButtonsWidget
const ButtonsWidget = props => {
  const {
    id,
    onChange,
    actions,
    actionsInfoMap,
    defaultAction,
    value
  } = props;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!props.value && props.default) {
      props.onChange(props.id, props.default);
    }
  });
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    className: "align-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "align-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, actions.map(action => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Group, {
    key: action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: true,
    basic: true,
    "aria-label": actionsInfoMap[action][1],
    onClick: () => onChange(id, action),
    active: action === defaultAction && !value || value === action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: actionsInfoMap[action][0],
    title: actionsInfoMap[action][1] || action,
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonsWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxGroupWidget.jsx"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxGroupWidget.jsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxGroupWidgetComponent: () => (/* binding */ CheckboxGroupWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/includes */ "lodash/includes");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/without */ "lodash/without");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\CheckboxGroupWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * CheckboxGroupWidget component.
 * @module components/manage/Widgets/CheckboxGroupWidget
 */

;












/**
 * CheckboxGroupWidget component class.
 * @function CheckboxGroupWidget
 * @returns {string} Markup of the component.
 */
class CheckboxGroupWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props$choices;
    if ((!this.props.choices || ((_this$props$choices = this.props.choices) === null || _this$props$choices === void 0 ? void 0 : _this$props$choices.length) === 0) && this.props.vocabBaseUrl) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }
  componentDidUpdate(prevProps) {
    var _this$props$choices2;
    if (this.props.vocabBaseUrl !== prevProps.vocabBaseUrl && (!this.props.choices || ((_this$props$choices2 = this.props.choices) === null || _this$props$choices2 === void 0 ? void 0 : _this$props$choices2.length) === 0)) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      id,
      choices,
      value,
      onChange,
      filterChoices,
      additionalChoices
    } = this.props;
    let options = this.props.vocabBaseUrl ? this.props.choices : [...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(choices, option => ({
      value: option[0],
      label:
      // Fix "None" on the serializer, to remove when fixed in p.restapi
      option[1] !== 'None' && option[1] ? option[1] : option[0]
    }))];
    if (additionalChoices) {
      options = [...(options || []), ...additionalChoices];
    }
    if (filterChoices) {
      options = lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(options, item => filterChoices.includes(item.value));
    }
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }
    }), options.map(option => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Checkbox, {
      label: option.label,
      key: option.value,
      name: id,
      value: option.value,
      checked: lodash_includes__WEBPACK_IMPORTED_MODULE_4___default()(value, option.value),
      onChange: (e, data) => {
        const newValue = value || [];
        if (data.checked) {
          onChange(id, [...newValue, data.value]);
        } else {
          onChange(id, lodash_without__WEBPACK_IMPORTED_MODULE_6___default()(newValue, data.value));
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    })));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(CheckboxGroupWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  filterChoices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getVocabularyTokenTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)])),
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(CheckboxGroupWidget, "defaultProps", {
  description: null,
  required: false,
  filterChoices: null,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null
});
const CheckboxGroupWidgetComponent = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(CheckboxGroupWidget);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2;
  const vocabBaseUrl = !props.choices ? (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromItems)(props) : '';
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : _state$vocabularies$v2[state.intl.locale];

  // If the schema already has the choices in it, then do not try to get the vocab,
  // even if there is one
  if (props.choices) {
    return {
      choices: props.choices,
      lang: state.intl.locale
    };
  } else if (vocabState) {
    var _vocabState$items;
    return {
      vocabBaseUrl,
      choices: (_vocabState$items = vocabState === null || vocabState === void 0 ? void 0 : vocabState.items) !== null && _vocabState$items !== void 0 ? _vocabState$items : [],
      lang: state.intl.locale
    };
    // There is a moment that vocabState is not there yet, so we need to pass the
    // vocabBaseUrl to the component.
  } else if (vocabBaseUrl) {
    return {
      vocabBaseUrl,
      lang: state.intl.locale
    };
  }
  return {
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_11__.getVocabulary,
  getVocabularyTokenTitle: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_11__.getVocabularyTokenTitle
})(CheckboxGroupWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxWidget.jsx"
/*!************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxWidget.jsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\CheckboxWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CheckboxWidget component.
 * @module components/manage/Widgets/CheckboxWidget
 */

;





/**
 * CheckboxWidget component class.
 * @function CheckboxWidget
 * @returns {string} Markup of the component.
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Active",
 *  type: 'boolean',
 * }
 * ```
 */
const CheckboxWidget = props => {
  const {
    id,
    title,
    value,
    onChange,
    isDisabled
  } = props;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    columns: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
    id: `field-${id}`,
    name: `field-${id}`,
    checked: value || false,
    disabled: isDisabled,
    onChange: (event, {
      checked
    }) => {
      onChange(id, checked);
    },
    label: __jsx("label", {
      htmlFor: `field-${id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 18
      }
    }, title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
CheckboxWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]).isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
CheckboxWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: null,
  onEdit: null,
  onDelete: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(CheckboxWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ColorPickerWidget.tsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ColorPickerWidget.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ColorPickerWidget.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  Color: {
    id: 'Color',
    defaultMessage: 'Color'
  }
});
const ColorPickerWidget = props => {
  const {
    id,
    title,
    required,
    value,
    onChange,
    colors,
    className
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(props.value) && props.default) {
      props.onChange(props.id, props.default);
    }
    // Yes, this is correct.
  });
  return colors.length > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    inline: true,
    required: required,
    className: className,
    id: 'field-' + id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    width: "12",
    className: "color-picker-widget",
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: `field-${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, title ? title : intl.formatMessage(messages.Color)), __jsx("div", {
    className: "buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, colors.map(color => {
    let colorValue;
    const colorName = color.name;
    if (color.style !== undefined) {
      colorValue = color.style;
    } else {
      colorValue = color.name;
    }
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: id + colorName,
      className: colorName,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        onChange(id, value === colorValue ? props.missing_value : colorValue);
      },
      style: color.style,
      active: lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(value, colorValue),
      circular: true,
      "aria-label": color.label,
      title: color.label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    });
  }))))))) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPickerWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/EmailWidget.jsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/EmailWidget.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\EmailWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EmailWidget component.
 * @module components/manage/Widgets/EmailWidget
 */

;




/** EmailWidget, a widget for email addresses
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Email",
 *  widget: 'email',
 * }
 * ```
 */
const EmailWidget = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    onClick,
    minLength,
    maxLength,
    placeholder,
    isDisabled
  } = props;
  const inputId = `field-${id}`;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, props, {
    className: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    id: inputId,
    name: id,
    type: "email",
    value: value || '',
    disabled: isDisabled,
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChange(id, target.value === '' ? undefined : target.value),
    onBlur: ({
      target
    }) => onBlur(id, target.value === '' ? undefined : target.value),
    onClick: () => onClick(),
    minLength: minLength || null,
    maxLength: maxLength || null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/**
 * Property types
 * @property {Object} propTypes Property types.
 * @static
 */
EmailWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EmailWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  minLength: null,
  maxLength: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/FileWidget.jsx"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/FileWidget.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! promise-file-reader */ "promise-file-reader");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(promise_file_reader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/UniversalLink/UniversalLink */ "./node_modules/@plone/volto/src/components/manage/UniversalLink/UniversalLink.tsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Image/Image */ "./node_modules/@plone/volto/src/components/theme/Image/Image.jsx");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\FileWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FileWidget component.
 * @module components/manage/Widgets/FileWidget
 */

;














const imageMimetypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg', 'image/gif', 'image/svg+xml'];
const Dropzone = _loadable_component__WEBPACK_IMPORTED_MODULE_11___default()(() => Promise.resolve(/*! import() */).then(() => (__webpack_require__.t(/*! react-dropzone */ "react-dropzone", 23))));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  releaseDrag: {
    id: 'Drop files here ...',
    defaultMessage: 'Drop files here ...'
  },
  editFile: {
    id: 'Drop file here to replace the existing file',
    defaultMessage: 'File upload area. Press Enter or click to replace the existing file'
  },
  fileDrag: {
    id: 'Drop file here to upload a new file',
    defaultMessage: 'File upload area. Press Enter or click to open the file browser'
  },
  replaceFile: {
    id: 'Replace existing file',
    defaultMessage: 'Replace existing file'
  },
  addNewFile: {
    id: 'Choose a file',
    defaultMessage: 'Choose a file'
  },
  maxSizeError: {
    id: 'The file you uploaded exceeded the maximum allowed size of {size} bytes',
    defaultMessage: 'The file you uploaded exceeded the maximum allowed size of {size} bytes'
  },
  acceptError: {
    id: 'File is not of the accepted type {accept}',
    defaultMessage: 'File is not of the accepted type {accept}'
  },
  dragAndDropActionA11y: {
    id: 'Press Enter to browse files from your computer.',
    defaultMessage: 'File upload area. Press Enter or click to open the file browser'
  },
  dragAndDropReplaceA11y: {
    id: 'File upload area. Press Enter or click to replace the existing file',
    defaultMessage: 'File upload area. Press Enter or click to replace the existing file'
  },
  requiredField: {
    id: 'This field is required.',
    defaultMessage: 'This field is required.'
  },
  downloadFile: {
    id: 'Download {filename}',
    defaultMessage: 'Download {filename}'
  }
});

/**
 * FileWidget component class.
 * @function FileWidget
 * @returns {string} Markup of the component.
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "File",
 *  widget: 'file',
 * }
 * ```
 * or:
 *
 * ```jsx
 * {
 *  title: "File",
 *  type: 'object',
 * }
 * ```
 *
 */
const FileWidget = props => {
  var _props$error;
  const {
    id,
    value,
    onChange,
    isDisabled,
    fieldSet
  } = props;
  const [fileType, setFileType] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (value && imageMimetypes.includes(value['content-type'])) {
      setFileType(true);
    }
  }, [value]);
  const imgAttrs = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    const data = {};
    if (value !== null && value !== void 0 && value.download) {
      data.item = {
        '@id': value.download.substring(0, value.download.indexOf('/@@images')),
        image: value
      };
    } else if (value !== null && value !== void 0 && value.data) {
      data.src = `data:${value['content-type']};${value.encoding},${value.data}`;
    }
    return data;
  }, [value]);

  /**
   * Drop handler
   * @method onDrop
   * @param {array} files File objects
   * @returns {undefined}
   */
  const onDrop = (files, rejectedFiles) => {
    rejectedFiles.forEach(file => {
      file.errors.forEach(err => {
        if (err.code === 'file-too-large') {
          react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: true,
            title: intl.formatMessage(messages.maxSizeError, {
              size: props.size
            }),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 13
            }
          }));
        }
        if (err.code === 'file-invalid-type') {
          react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: true,
            title: intl.formatMessage(messages.acceptError, {
              accept: props.accept
            }),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }
          }));
        }
      });
    });
    if (files.length < 1) return;
    const file = files[0];
    if (!(0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_12__.validateFileUploadSize)(file, intl.formatMessage)) return;
    (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_3__.readAsDataURL)(file).then(data => {
      const fields = data.match(/^data:(.*);(.*),(.*)$/);
      onChange(id, {
        data: fields[3],
        encoding: fields[2],
        'content-type': fields[1],
        filename: file.name
      });
    });
    let reader = new FileReader();
    reader.onload = function () {
      const fields = reader.result.match(/^data:(.*);(.*),(.*)$/);
      if (imageMimetypes.includes(fields[1])) {
        setFileType(true);
        let imagePreview = document.getElementById(`field-${id}-image`);
        if (imagePreview) imagePreview.src = reader.result;
      } else {
        setFileType(false);
      }
    };
    reader.readAsDataURL(files[0]);
  };
  const statusTextA11y = [value ? intl.formatMessage(messages.dragAndDropReplaceA11y) : intl.formatMessage(messages.dragAndDropActionA11y), props.required && intl.formatMessage(messages.requiredField), value === null || value === void 0 ? void 0 : value.filename].filter(Boolean).join('. ');
  const errorTextA11y = (_props$error = props.error) !== null && _props$error !== void 0 && _props$error.length ? props.error.join('. ') : null;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }), __jsx(Dropzone, _extends({
    onDrop: onDrop
  }, props.size ? {
    maxSize: props.size
  } : {}, props.accept ? {
    accept: props.accept
  } : {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), ({
    getRootProps,
    getInputProps,
    isDragActive
  }) => {
    var _props$error2;
    return __jsx("div", _extends({
      className: "file-widget-dropzone",
      role: "button",
      "aria-labelledby": `fieldset-${fieldSet}-field-label-${id}`,
      "aria-describedby": `field-${id}-status`
    }, getRootProps(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }
    }), isDragActive && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dimmer, {
      active: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 30
      }
    }), fileType ? __jsx(_plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      className: "image-preview small ui image",
      id: `field-${id}-image`
    }, imgAttrs, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 15
      }
    })) : __jsx("div", {
      className: "dropzone-placeholder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 15
      }
    }, isDragActive ? __jsx("p", {
      className: "dropzone-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 19
      }
    }, intl.formatMessage(messages.releaseDrag)) : value ? __jsx("p", {
      className: "dropzone-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 19
      }
    }, intl.formatMessage(messages.editFile)) : __jsx("p", {
      className: "dropzone-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 19
      }
    }, intl.formatMessage(messages.fileDrag))), __jsx("label", {
      className: "label-file-widget-input",
      htmlFor: `field-${id}`,
      "aria-hidden": "true",
      onClick: e => e.stopPropagation(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, value ? intl.formatMessage(messages.replaceFile) : intl.formatMessage(messages.addNewFile)), __jsx("span", {
      id: `field-${id}-status`,
      className: "visually-hidden-volto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 13
      }
    }, statusTextA11y), errorTextA11y && __jsx("span", {
      role: "alert",
      className: "visually-hidden-volto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, errorTextA11y), __jsx("input", _extends({}, getInputProps({
      type: 'file',
      style: {
        display: 'none'
      }
    }), {
      id: `field-${id}`
    }, props.required && {
      'aria-required': true
    }, ((_props$error2 = props.error) === null || _props$error2 === void 0 ? void 0 : _props$error2.length) > 0 && {
      'aria-invalid': true
    }, {
      name: id,
      disabled: isDisabled,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 13
      }
    })));
  }), value && __jsx("div", {
    className: "field-file-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: value.download,
    "aria-label": intl.formatMessage(messages.downloadFile, {
      filename: value.filename
    }),
    download: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, value.filename), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "button",
    icon: true,
    basic: true,
    className: "delete-button",
    "aria-label": "delete file",
    disabled: isDisabled,
    onClick: () => {
      onChange(id, null);
      setFileType(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fieldSet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@type': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
FileWidget.defaultProps = {
  description: null,
  required: false,
  fieldSet: null,
  error: [],
  value: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(FileWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/IdWidget.jsx"
/*!******************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/IdWidget.jsx ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/compact */ "lodash/compact");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/union */ "lodash/union");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/uniq */ "lodash/uniq");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_actions_querystring_querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/actions/querystring/querystring */ "./node_modules/@plone/volto/src/actions/querystring/querystring.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\IdWidget.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * IdWidget component.
 * @module components/manage/Widgets/IdWidget
 */

;













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  reservedId: {
    id: "This is a reserved name and can't be used",
    defaultMessage: "This is a reserved name and can't be used"
  },
  invalidCharacters: {
    id: 'Only 7-bit bytes characters are allowed. Cannot contain uppercase letters, special characters: <, >, &, #, /, ?, or others that are illegal in URLs. Cannot start with: _, aq_, @@, ++. Cannot end with __. Cannot be: request,contributors, ., .., "". Cannot contain new lines.',
    defaultMessage: 'Only 7-bit bytes characters are allowed. Cannot contain uppercase letters, special characters: <, >, &, #, /, ?, or others that are illegal in URLs. Cannot start with: _, aq_, @@, ++. Cannot end with __. Cannot be: request,contributors, ., .., "". Cannot contain new lines.'
  }
});
const IdWidget = props => {
  const {
    id,
    onClick,
    icon,
    iconAction,
    minLength,
    maxLength,
    onBlur,
    value,
    focus,
    isDisabled,
    placeholder,
    onChange
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const indexes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.querystring.indexes);
  const {
    0: errors,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: reservedIds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lodash_compact__WEBPACK_IMPORTED_MODULE_4___default()(lodash_uniq__WEBPACK_IMPORTED_MODULE_8___default()(lodash_union__WEBPACK_IMPORTED_MODULE_7___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_12__["default"].settings.reservedIds, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_12__["default"].settings.nonContentRoutes, route => String(route).replace(/[^a-z-]/g, ''))))));
  const fieldValidation = value => {
    const error = [];

    // Check reserved id's
    if (reservedIds.indexOf(value) !== -1) {
      error.push(intl.formatMessage(messages.reservedId));
    }

    // Check invalid characters
    if (
    // eslint-disable-next-line no-control-regex
    !/^(?!.*\\)(?!\+\+)(?!@@)(?!.*request)(?!.*contributors)(?!aq_)(?!.*__)(?!_)(?!((^|\/)\.\.?($|\/)|^"\s*"$))(?!.*[A-Z])(?:(?![\r\n<>/?&#\x00-\x1F\x7F])['\x00-\x7F\u0080-\uFFFF. _])*$/.test(value)) {
      error.push(intl.formatMessage(messages.invalidCharacters));
    }

    // Check indexes
    if (value in indexes) {
      error.push(intl.formatMessage(messages.reservedId));
    }
    setError(error);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focus) ref.current.focus();
    dispatch((0,_plone_volto_actions_querystring_querystring__WEBPACK_IMPORTED_MODULE_13__.getQuerystring)());
    fieldValidation(value);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [focus, value, dispatch]);
  const handleChange = ({
    target
  }) => {
    fieldValidation(target.value);
    onChange(id, target.value === '' ? undefined : target.value);
  };
  const handleBlur = ({
    target
  }) => {
    fieldValidation(target.value);
    onBlur(id, target.value === '' ? undefined : target.value);
  };
  props = _objectSpread(_objectSpread({}, props), {}, {
    error: lodash_concat__WEBPACK_IMPORTED_MODULE_5___default()(props.error, errors)
  });
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    id: `field-${id}`,
    name: id,
    value: value || '',
    disabled: isDisabled,
    icon: icon || null,
    placeholder: placeholder,
    onChange: handleChange,
    onBlur: handleBlur,
    onClick: () => onClick(),
    ref: ref,
    minLength: minLength || null,
    maxLength: maxLength || null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), icon && iconAction && __jsx("button", {
    className: `field-${id}-action-button`,
    onClick: iconAction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: icon,
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdWidget);
IdWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    xmlns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    viewBox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  iconAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
IdWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null,
  focus: false,
  icon: null,
  iconAction: null,
  minLength: null,
  maxLength: null
};

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ImageSizeWidget.jsx"
/*!*************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ImageSizeWidget.jsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ImageSizeWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;




const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  small: {
    id: 'Small',
    defaultMessage: 'Small'
  },
  medium: {
    id: 'Medium',
    defaultMessage: 'Medium'
  },
  large: {
    id: 'Large',
    defaultMessage: 'Large'
  }
});
const ImageSizeWidget = props => {
  const {
    onChange,
    id,
    disabled,
    intl,
    value,
    isDisabled
  } = props;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "8",
    className: "field-image_size",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: true,
    basic: true,
    "aria-label": intl.formatMessage(messages.small),
    onClick: () => onChange(id, 's'),
    active: value === 's',
    disabled: disabled || isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "image-sizes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "S"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: true,
    basic: true,
    "aria-label": intl.formatMessage(messages.medium),
    onClick: () => onChange(id, 'm'),
    active: value === 'm',
    disabled: disabled || isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "image-sizes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "M"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: true,
    basic: true,
    "aria-label": intl.formatMessage(messages.large),
    onClick: () => onChange(id, 'l'),
    active: value === 'l' || value === undefined,
    disabled: disabled || isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "image-sizes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "L")))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ImageSizeWidget.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ImageSizeWidget.defaultProps = {
  onChange: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ImageSizeWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/InternalUrlWidget.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/InternalUrlWidget.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalUrlWidget: () => (/* binding */ InternalUrlWidget),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/ObjectBrowser */ "./node_modules/@plone/volto/src/components/manage/Sidebar/ObjectBrowser.jsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/nav.svg */ "./node_modules/@plone/volto/src/icons/nav.svg");
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\InternalUrlWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UrlWidget component.
 * @module components/manage/Widgets/UrlWidget
 */

;









/** Widget to edit urls
 *
 * This is a widget used for getting and setting an internal url. You can also use
 * it by declaring a field like:
 *
 * ```jsx
 * {
 *  title: "URL",
 *  widget: 'internal_url',
 * }
 * ```
 */
const InternalUrlWidget = props => {
  const {
    id,
    onChange,
    onBlur,
    onClick,
    minLength,
    maxLength,
    placeholder,
    isDisabled,
    value
  } = props;
  const inputId = `field-${id}`;
  const {
    0: isInvalid,
    1: setIsInvalid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /**
   * Clear handler
   * @method clear
   * @param {Object} value Value
   * @returns {string} Empty string
   */
  const clear = () => {
    onChange(id, '');
  };
  const onChangeValue = _value => {
    var _newValue;
    let newValue = _value;
    if (((_newValue = newValue) === null || _newValue === void 0 ? void 0 : _newValue.length) > 0) {
      if (isInvalid && _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.isUrl(_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.normalizeUrl(newValue))) {
        setIsInvalid(false);
      }
      if ((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue)) {
        newValue = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.flattenToAppURL)(newValue);
      }
    }
    newValue = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue) ? (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.flattenToAppURL)(newValue) : newValue;
    if (!(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue) && newValue.length > 0) {
      const checkedURL = _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.checkAndNormalizeUrl(newValue);
      newValue = checkedURL.url;
      if (!checkedURL.isValid) {
        setIsInvalid(true);
      }
    }
    onChange(id, newValue);
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    className: "url wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: inputId,
    name: id,
    type: "url",
    value: value || '',
    disabled: isDisabled,
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChangeValue(target.value),
    onBlur: ({
      target
    }) => onBlur(id, target.value),
    onClick: () => onClick(),
    minLength: minLength,
    maxLength: maxLength,
    error: isInvalid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), (value === null || value === void 0 ? void 0 : value.length) > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    basic: true,
    className: "cancel",
    "aria-label": "clearUrlBrowser",
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      clear();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    size: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    basic: true,
    icon: true,
    "aria-label": "openUrlBrowser",
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      props.openObjectBrowser({
        mode: 'link',
        overlay: true,
        onSelectItem: url => {
          onChangeValue(url);
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  })))));
};

/**
 * Property types
 * @property {Object} propTypes Property types.
 * @static
 */
InternalUrlWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  openObjectBrowser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
InternalUrlWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  minLength: null,
  maxLength: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_6__["default"])(InternalUrlWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/NumberWidget.jsx"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/NumberWidget.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\NumberWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberWidget component.
 * @module components/manage/Widgets/PassswordWidget
 */

;





/**
 * NumberWidget component class.
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Number",
 *  type: 'number',
 * }
 * ```
 */
const NumberWidget = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    onClick,
    isDisabled,
    maximum,
    minimum,
    placeholder,
    step
  } = props;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: `field-${id}`,
    name: id,
    type: "number",
    disabled: isDisabled,
    min: minimum || null,
    max: maximum || null,
    step: step,
    value: value !== null && value !== void 0 ? value : '',
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChange(id, target.value === '' ? undefined : target.value),
    onBlur: ({
      target
    }) => onBlur(id, target.value === '' ? undefined : target.value),
    onClick: () => onClick(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NumberWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  maximum: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  minimum: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
NumberWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(NumberWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectBrowserWidget.jsx"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ObjectBrowserWidget.jsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectBrowserWidgetComponent: () => (/* binding */ ObjectBrowserWidgetComponent),
/* harmony export */   ObjectBrowserWidgetMode: () => (/* binding */ ObjectBrowserWidgetMode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/compact */ "lodash/compact");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/includes */ "lodash/includes");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_FormValidation_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/validators */ "./node_modules/@plone/volto/src/helpers/FormValidation/validators.ts");
/* harmony import */ var _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/actions/search/search */ "./node_modules/@plone/volto/src/actions/search/search.js");
/* harmony import */ var _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/ObjectBrowser */ "./node_modules/@plone/volto/src/components/manage/Sidebar/ObjectBrowser.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/nav.svg */ "./node_modules/@plone/volto/src/icons/nav.svg");
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/home.svg */ "./node_modules/@plone/volto/src/icons/home.svg");
/* harmony import */ var _plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/icons/ahead.svg */ "./node_modules/@plone/volto/src/icons/ahead.svg");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/icons/blank.svg */ "./node_modules/@plone/volto/src/icons/blank.svg");
/* harmony import */ var _plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @plone/volto/components/theme/Image/Image */ "./node_modules/@plone/volto/src/components/theme/Image/Image.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ObjectBrowserWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * ObjectBrowserWidget component.
 * @module components/manage/Widgets/ObjectBrowserWidget
 */

;
























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__.defineMessages)({
  placeholder: {
    id: 'No items selected',
    defaultMessage: 'No items selected'
  },
  edit: {
    id: 'Edit',
    defaultMessage: 'Edit'
  },
  delete: {
    id: 'Delete',
    defaultMessage: 'Delete'
  },
  openObjectBrowser: {
    id: 'Open object browser',
    defaultMessage: 'Open object browser'
  }
});

/**
 * ObjectBrowserWidget component class.
 * @class ObjectBrowserWidget
 * @extends Component
 */
class ObjectBrowserWidgetComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "state", {
      manualLinkInput: '',
      validURL: false,
      errors: []
    });
    _defineProperty(this, "removeItem", item => {
      let value = [...this.props.value];
      lodash_remove__WEBPACK_IMPORTED_MODULE_7___default()(value, function (_item) {
        return _item['@id'] === item['@id'];
      });
      this.props.onChange(this.props.id, value);
    });
    _defineProperty(this, "onChange", item => {
      var _this$props$widgetOpt, _this$props$widgetOpt2;
      let value = this.props.mode === 'multiple' && this.props.value ? [...this.props.value] : [];
      value = value.filter(item => item != null);
      const maxSize = ((_this$props$widgetOpt = this.props.widgetOptions) === null || _this$props$widgetOpt === void 0 ? void 0 : (_this$props$widgetOpt2 = _this$props$widgetOpt.pattern_options) === null || _this$props$widgetOpt2 === void 0 ? void 0 : _this$props$widgetOpt2.maximumSelectionSize) || -1;
      if (maxSize === 1 && value.length === 1) {
        value = []; //enable replace of selected item with another value, if maxsize is 1
      }
      let exists = false;
      let index = -1;
      value.forEach((_item, _index) => {
        if ((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(_item['@id']) === (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(item['@id'])) {
          exists = true;
          index = _index;
        }
      });
      //find(value, {
      //   '@id': flattenToAppURL(item['@id']),
      // });
      if (!exists) {
        // add item
        // Check if we want to filter the attributes of the selected item
        let resultantItem = item;
        if (this.props.selectedItemAttrs) {
          const allowedItemKeys = [...this.props.selectedItemAttrs,
          // Add the required attributes for the widget to work
          '@id', 'title'];
          resultantItem = Object.keys(item).filter(key => allowedItemKeys.includes(key)).reduce((obj, key) => {
            obj[key] = item[key];
            return obj;
          }, {});
        }
        // Add required @id field, just in case
        resultantItem = _objectSpread(_objectSpread({}, resultantItem), {}, {
          '@id': item['@id']
        });
        value.push(resultantItem);
        if (this.props.return === 'single') {
          this.props.onChange(this.props.id, value[0]);
        } else {
          this.props.onChange(this.props.id, value);
        }
      } else {
        //remove item
        value.splice(index, 1);
        this.props.onChange(this.props.id, value);
      }
    });
    _defineProperty(this, "onManualLinkInput", e => {
      this.setState({
        manualLinkInput: e.target.value
      });
      if (this.validateManualLink(e.target.value)) {
        this.setState({
          validURL: true
        });
      } else {
        this.setState({
          validURL: false
        });
      }
    });
    _defineProperty(this, "validateManualLink", url => {
      if (this.props.allowExternals && !url.startsWith('/')) {
        const error = (0,_plone_volto_helpers_FormValidation_validators__WEBPACK_IMPORTED_MODULE_11__.urlValidator)({
          value: url,
          formatMessage: this.props.intl.formatMessage
        });
        if (error && url !== '') {
          this.setState({
            errors: [error]
          });
        } else {
          this.setState({
            errors: []
          });
        }
        return !Boolean(error);
      } else {
        return (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.isInternalURL)(url);
      }
    });
    _defineProperty(this, "onSubmitManualLink", () => {
      if (this.validateManualLink(this.state.manualLinkInput)) {
        if ((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.isInternalURL)(this.state.manualLinkInput)) {
          const link = this.state.manualLinkInput;
          // convert it into an internal on if possible
          this.props.searchContent('/', {
            'path.query': (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(this.state.manualLinkInput),
            'path.depth': '0',
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
            b_size: 1000
          }, `${this.props.block}-${this.props.mode}`).then(resp => {
            var _resp$items;
            if (((_resp$items = resp.items) === null || _resp$items === void 0 ? void 0 : _resp$items.length) > 0) {
              this.onChange(resp.items[0]);
            } else {
              this.props.onChange(this.props.id, [{
                '@id': (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(link),
                title: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.removeProtocol)(link)
              }]);
            }
          });
        } else {
          this.props.onChange(this.props.id, [{
            '@id': (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.normalizeUrl)(this.state.manualLinkInput),
            title: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.removeProtocol)(this.state.manualLinkInput)
          }]);
        }
        this.setState({
          validURL: true,
          manualLinkInput: ''
        });
      }
    });
    _defineProperty(this, "onKeyDownManualLink", e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        this.onSubmitManualLink();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        // TODO: Do something on ESC key
      }
    });
    _defineProperty(this, "showObjectBrowser", ev => {
      var _this$props$widgetOpt3, _this$props$widgetOpt4, _this$props$widgetOpt5, _this$props$widgetOpt6, _this$props$widgetOpt7, _this$props$widgetOpt8;
      ev.preventDefault();
      this.props.openObjectBrowser({
        mode: this.props.mode,
        currentPath: this.props.initialPath || this.props.location.pathname,
        initialPath: this.props.initialPath,
        propDataName: 'value',
        onSelectItem: (url, item) => {
          this.onChange(item);
        },
        selectableTypes: ((_this$props$widgetOpt3 = this.props.widgetOptions) === null || _this$props$widgetOpt3 === void 0 ? void 0 : (_this$props$widgetOpt4 = _this$props$widgetOpt3.pattern_options) === null || _this$props$widgetOpt4 === void 0 ? void 0 : _this$props$widgetOpt4.selectableTypes) || this.props.selectableTypes,
        maximumSelectionSize: ((_this$props$widgetOpt5 = this.props.widgetOptions) === null || _this$props$widgetOpt5 === void 0 ? void 0 : (_this$props$widgetOpt6 = _this$props$widgetOpt5.pattern_options) === null || _this$props$widgetOpt6 === void 0 ? void 0 : _this$props$widgetOpt6.maximumSelectionSize) || this.props.maximumSelectionSize,
        onlyFolderishSelectable: ((_this$props$widgetOpt7 = this.props.widgetOptions) === null || _this$props$widgetOpt7 === void 0 ? void 0 : (_this$props$widgetOpt8 = _this$props$widgetOpt7.pattern_options) === null || _this$props$widgetOpt8 === void 0 ? void 0 : _this$props$widgetOpt8.onlyFolderishSelectable) || this.props.onlyFolderishSelectable
      });
    });
    _defineProperty(this, "handleSelectedItemsRefClick", e => {
      if (this.props.isDisabled) {
        return;
      }
      if (e.target.contains(this.selectedItemsRef.current) || e.target.contains(this.placeholderRef.current)) {
        this.showObjectBrowser(e);
      }
    });
    this.selectedItemsRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.placeholderRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  renderLabel(item) {
    const href = item['@id'];
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Popup, {
      key: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(href),
      content: __jsx("div", {
        style: {
          display: 'flex'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.isInternalURL)(href) ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: (_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_20___default()),
        size: "18px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }) : __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: (_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_22___default()),
        size: "18px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }
      }), "\xA0", (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_10__.flattenToAppURL)(href)),
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "item-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, lodash_includes__WEBPACK_IMPORTED_MODULE_4___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_17__["default"].settings.imageObjects, item['@type']) ? __jsx(_plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_24__["default"], {
        className: "small ui image",
        src: `${item['@id']}/@@images/image/thumb`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }) : item.title), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, this.props.mode === 'multiple' && __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default()),
        size: "12px",
        className: "right",
        onClick: event => {
          event.preventDefault();
          this.removeItem(item);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }))),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    });
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$placehold, _this$props$placehold2;
    const {
      id,
      description,
      fieldSet,
      value,
      mode,
      onChange,
      isDisabled
    } = this.props;
    let items = lodash_compact__WEBPACK_IMPORTED_MODULE_3___default()(!lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default()(value) && value ? [value] : value || []);
    let icon = mode === 'multiple' || items.length === 0 ? (_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_18___default()) : (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default());
    let iconAction = mode === 'multiple' || items.length === 0 ? this.showObjectBrowser : e => {
      e.preventDefault();
      onChange(id, this.props.return === 'single' ? null : []);
    };
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, this.props, {
      // At the moment, OBW handles its own errors and validation
      error: this.state.errors,
      className: description ? 'help text' : 'text',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "objectbrowser-field",
      "aria-labelledby": `fieldset-${fieldSet || 'default'}-field-label-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "selected-values",
      onClick: this.handleSelectedItemsRefClick,
      onKeyDown: this.handleSelectedItemsRefClick,
      role: "searchbox",
      tabIndex: 0,
      ref: this.selectedItemsRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 11
      }
    }, items.map(item => this.renderLabel(item)), items.length === 0 && this.props.mode === 'multiple' && __jsx("div", {
      className: "placeholder",
      ref: this.placeholderRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 15
      }
    }, (_this$props$placehold = this.props.placeholder) !== null && _this$props$placehold !== void 0 ? _this$props$placehold : this.props.intl.formatMessage(messages.placeholder)), this.props.allowExternals && items.length === 0 && this.props.mode !== 'multiple' && __jsx("input", {
      onBlur: this.onSubmitManualLink,
      onKeyDown: this.onKeyDownManualLink,
      onChange: this.onManualLinkInput,
      value: this.state.manualLinkInput,
      placeholder: (_this$props$placehold2 = this.props.placeholder) !== null && _this$props$placehold2 !== void 0 ? _this$props$placehold2 : this.props.intl.formatMessage(messages.placeholder),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 17
      }
    })), this.state.manualLinkInput && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(items) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
      basic: true,
      className: "cancel",
      onClick: e => {
        e.stopPropagation();
        this.setState({
          manualLinkInput: ''
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
      name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default()),
      size: "18px",
      color: "#e40166",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
      basic: true,
      primary: true,
      disabled: !this.state.validURL,
      onClick: e => {
        e.stopPropagation();
        this.onSubmitManualLink();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
      name: (_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_21___default()),
      size: "18px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 17
      }
    }))), !this.state.manualLinkInput && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
      "aria-label": this.props.intl.formatMessage(messages.openObjectBrowser),
      onClick: iconAction,
      className: "action",
      disabled: isDisabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 13
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
      name: icon,
      size: "18px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 15
      }
    }))));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ObjectBrowserWidgetComponent, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  mode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // link, image, multiple
  return: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // single, multiple
  initialPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  openObjectBrowser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  allowExternals: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onlyFolderishSelectable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ObjectBrowserWidgetComponent, "defaultProps", {
  description: null,
  required: false,
  error: [],
  value: [],
  mode: 'multiple',
  return: 'multiple',
  initialPath: '',
  allowExternals: false,
  onlyFolderishSelectable: false
});
const ObjectBrowserWidgetMode = mode => (0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_14__.injectIntl, _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_13__["default"], react_router__WEBPACK_IMPORTED_MODULE_23__.withRouter, (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(null, {
  searchContent: _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__.searchContent
}))(props => __jsx(ObjectBrowserWidgetComponent, _extends({}, props, {
  mode: mode,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 454,
    columnNumber: 16
  }
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_14__.injectIntl, _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_13__["default"], react_router__WEBPACK_IMPORTED_MODULE_23__.withRouter, (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(null, {
  searchContent: _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__.searchContent
}))(ObjectBrowserWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectListWidget.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ObjectListWidget.jsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/DragDropList/DragDropList */ "./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx");
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/icons/up-key.svg */ "./node_modules/@plone/volto/src/icons/up-key.svg");
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/down-key.svg */ "./node_modules/@plone/volto/src/icons/down-key.svg");
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/add.svg */ "./node_modules/@plone/volto/src/icons/add.svg");
/* harmony import */ var _plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/drag.svg */ "./node_modules/@plone/volto/src/icons/drag.svg");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ObjectListWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  labelRemoveItem: {
    id: 'Remove item',
    defaultMessage: 'Remove item'
  },
  labelCollapseItem: {
    id: 'Collapse item',
    defaultMessage: 'Collapse item'
  },
  labelShowItem: {
    id: 'Show item',
    defaultMessage: 'Show item'
  },
  emptyObjectList: {
    id: 'Empty object list',
    defaultMessage: 'Empty object list'
  },
  add: {
    id: 'Add (object list)',
    defaultMessage: 'Add'
  }
});

/**
 * This is a DataGridField-equivalent widget for schema-based values.
 * The shape of the items in the array is defined using a schema.
 *
 * ObjectListWidget can receive an optional `schemaExtender` prop which is
 * a function that can mutate the schema for each individual item in the array.
 * An example schema definition of the a field that renders with the
 * ObjectListWidget:
 *
 * ```jsx
 *  columns: {
 *    title: 'Columns',
 *    description: 'Leave empty to show all columns',
 *    schema: SomeItemSchema,
 *    widget: 'object_list',
 *    schemaExtender: (schema, data) => {
 *      const mutated = lodash.cloneDeep(schema);
 *      mutated.properties.extraField = {
 *        title: 'Extra field',
 *      }
 *      mutated.fieldsets[0].fields.push('extraField');
 *      return mutated;
 *    },
 *    activeObject: 0, // Current active object drilled down from the schema (if present)
 *    setActiveObject: () => {} // The current active object state updater function drilled down from the schema (if present)
 *  },
 * ```
 */
const ObjectListWidget = props => {
  var _props$activeObject;
  const {
    block,
    fieldSet,
    id,
    value = [],
    onChange,
    schemaExtender,
    schemaName
  } = props;

  // This allows to use a `schemaName` prop defined as source of the schema
  // if not present, it will use the schema defined in the schema prop
  const schema = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_15__["default"].getUtility({
    type: 'schema',
    name: schemaName
  }).method || props.schema;
  const [localActiveObject, setLocalActiveObject] = react__WEBPACK_IMPORTED_MODULE_0___default().useState((_props$activeObject = props.activeObject) !== null && _props$activeObject !== void 0 ? _props$activeObject : value.length - 1);
  let activeObject, setActiveObject;
  if ((props.activeObject || props.activeObject === 0) && props.setActiveObject) {
    activeObject = props.activeObject;
    setActiveObject = props.setActiveObject;
  } else {
    activeObject = localActiveObject;
    setActiveObject = setLocalActiveObject;
  }
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  function handleChangeActiveObject(e, blockProps) {
    const {
      index
    } = blockProps;
    const newIndex = activeObject === index ? -1 : index;
    setActiveObject(newIndex);
  }
  const objectSchema = typeof schema === 'function' ? schema(props) : schema;
  const topLayerShadow = '0 1px 1px rgba(0,0,0,0.15)';
  const secondLayer = ', 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15)';
  const thirdLayer = ', 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0,0,0,0.15)';
  return __jsx("div", {
    className: "objectlist-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    noForInFieldLabel: true,
    className: "objectlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "add-item-button-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    compact: true,
    icon: true,
    "aria-label": objectSchema.addMessage || `${intl.formatMessage(messages.add)} ${objectSchema.title}`,
    onClick: e => {
      e.preventDefault();
      const data = {
        '@id': (0,uuid__WEBPACK_IMPORTED_MODULE_14__.v4)()
      };
      const objSchema = schemaExtender ? schemaExtender(schema, data, intl) : objectSchema;
      const dataWithDefaults = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.applySchemaDefaults)({
        data,
        schema: objSchema,
        intl
      });
      onChange(id, [...value, dataWithDefaults]);
      setActiveObject(value.length);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: (_plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), "\xA0", objectSchema.addMessage || `${intl.formatMessage(messages.add)} ${objectSchema.title}`)), value.length === 0 && __jsx("input", {
    "aria-labelledby": `fieldset-${fieldSet || 'default'}-field-label-${id}`,
    type: "hidden",
    value: intl.formatMessage(messages.emptyObjectList),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  })), __jsx(_plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      boxShadow: `${topLayerShadow}${value.length > 1 ? secondLayer : ''}${value.length > 2 ? thirdLayer : ''}`
    },
    forwardedAriaLabelledBy: `fieldset-${fieldSet || 'default'}-field-label-${id}`,
    childList: value.map(o => [o['@id'], o]),
    onMoveItem: result => {
      const {
        source,
        destination
      } = result;
      if (!destination) {
        return;
      }
      const newValue = (0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.reorderArray)(value, source.index, destination.index);
      onChange(id, newValue);
      return true;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, ({
    child,
    childId,
    index,
    draginfo
  }) => {
    return __jsx("div", _extends({
      ref: draginfo.innerRef
    }, draginfo.draggableProps, {
      key: childId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
      key: index,
      fluid: true,
      styled: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion.Title, {
      active: activeObject === index,
      index: index,
      onClick: handleChangeActiveObject,
      "aria-label": `${activeObject === index ? intl.formatMessage(messages.labelCollapseItem) : intl.formatMessage(messages.labelShowItem)} #${index + 1}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, __jsx("button", _extends({
      style: {
        visibility: 'visible',
        display: 'inline-block'
      }
    }, draginfo.dragHandleProps, {
      className: "drag handle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 19
      }
    }), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: (_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_13___default()),
      size: "18px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "accordion-title-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 19
      }
    }, `${objectSchema.title} #${index + 1}`), __jsx("div", {
      className: "accordion-tools",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 19
      }
    }, __jsx("button", {
      "aria-label": `${intl.formatMessage(messages.labelRemoveItem)} #${index + 1}`,
      onClick: () => {
        onChange(id, value.filter((v, i) => i !== index));
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11___default()),
      size: "20px",
      color: "#e40166",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 23
      }
    })), activeObject === index ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: (_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_9___default()),
      size: "20px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    }) : __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: (_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_10___default()),
      size: "20px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 23
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion.Content, {
      active: activeObject === index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: `${id}-${index}`,
      key: `ow-${id}-${index}`,
      block: block,
      schema: schemaExtender ? schemaExtender(schema, child, intl) : objectSchema,
      value: child,
      onChange: (fi, fv) => {
        const newvalue = value.map((v, i) => i !== index ? v : fv);
        onChange(id, newvalue);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 21
      }
    })))));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectListWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
const _excluded = ["block", "schema", "value", "onChange", "errors", "id"];
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ObjectWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A generic widget for an object. If multiple
 *
 */

;




/**
 * Renders a field set. Passes some of the values in the schema to the Field
 * component used inside. Shows the current value, the errors, the required
 * status of the fields inside.
 *
 * @param {object} data
 * @param {number} index
 * @param {object} schema
 * @param {object} value
 * @param {object} errors
 * @param {function} onChange
 * @param {string} id
 */
const FieldSet = ({
  block,
  data,
  index,
  schema,
  value,
  errors,
  onChange,
  onChangeBlock,
  id
}) => {
  return data.fields.map((field, idx) => {
    var _schema$required;
    return __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_3__.Field, _extends({}, schema.properties[field], {
      id: `${field}-${idx}-${id}`,
      fieldSet: data.title.toLowerCase(),
      block: block,
      value: value === null || value === void 0 ? void 0 : value[field],
      objectvalue: value,
      required: ((_schema$required = schema.required) === null || _schema$required === void 0 ? void 0 : _schema$required.indexOf(field)) !== -1,
      onChange: (field2, fieldvalue) => {
        return onChange(id, _objectSpread(_objectSpread({}, value), {}, {
          [field]: fieldvalue
        }));
      },
      key: field,
      error: errors === null || errors === void 0 ? void 0 : errors[field],
      title: schema.properties[field].title,
      onChangeBlock: onChangeBlock,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }));
  });
};

/**
 *
 * A JSON data editor widget based on a schema. If you want to represent complex
 * data using a single field, this is the widget to use.
 *
 * If there are multiple field sets, it renders a Tab component with multiple
 * tab panes. Each tab has the title of the fieldset it renders.
 */
const ObjectWidget = _ref => {
  let {
      block,
      schema,
      value,
      // not checked to not contain unknown fields
      onChange,
      errors = {},
      id
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const createTab = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((fieldset, index) => {
    return {
      menuItem: fieldset.title,
      render: () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Pane, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx(FieldSet, {
        block: block,
        data: fieldset,
        index: index,
        schema: schema,
        errors: errors,
        value: value,
        onChange: onChange,
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }))
    };
  }, [block, errors, id, onChange, schema, value]);
  return schema.fieldsets.length === 1 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(FieldSet, {
    block: block,
    data: schema.fieldsets[0],
    index: 0,
    schema: schema,
    errors: errors,
    value: value,
    onChange: onChange,
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  })) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    panes: schema.fieldsets.map(createTab),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }) // lazy loading
;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ObjectWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  schema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ObjectWidget.defaultProps = {
  value: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/PasswordWidget.jsx"
/*!************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/PasswordWidget.jsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\PasswordWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PasswordWidget component.
 * @module components/manage/Widgets/PassswordWidget
 */

;





/**
 * PasswordWidget component class.
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Password",
 *  type: 'password',
 * }
 * ```
 */
const PasswordWidget = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    onClick,
    minLength,
    maxLength,
    placeholder,
    isDisabled
  } = props;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: `field-${id}`,
    name: id,
    type: "password",
    disabled: isDisabled,
    value: value || '',
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChange(id, target.value === '' ? undefined : target.value),
    onBlur: ({
      target
    }) => onBlur(id, target.value === '' ? undefined : target.value),
    onClick: () => onClick(),
    minLength: minLength || null,
    maxLength: maxLength || null,
    autoComplete: "off",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PasswordWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
PasswordWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  minLength: null,
  maxLength: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(PasswordWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/QuerySortOnWidget.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/QuerySortOnWidget.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/toPairs */ "lodash/toPairs");
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toPairs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/groupBy */ "lodash/groupBy");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\QuerySortOnWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;








const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  SortOn: {
    id: 'Sort on',
    defaultMessage: 'Sort on'
  },
  NoSelection: {
    id: 'No selection',
    defaultMessage: 'No selection'
  }
});
function QueryStringSortOrderWidget(props) {
  var _sortable_indexes$val;
  const {
    id,
    value,
    onChange,
    reactSelect,
    isDisabled
  } = props;
  const sortable_indexes = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.querystring.sortable_indexes);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const Select = reactSelect.default;
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    draggable: false,
    className: "query-sort-on-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx(Select, {
    id: "select-listingblock-sort-on",
    name: "select-listingblock-sort-on",
    className: "react-select-container",
    classNamePrefix: "react-select"
    // placeholder="Select criteria"
    ,
    isDisabled: isDisabled,
    options: [{
      label: intl.formatMessage(messages.NoSelection),
      value: ''
    }, ...lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_2___default()(lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_2___default()(sortable_indexes), item => item[1].group)), group => ({
      label: group[0],
      options: lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(group[1], field => ({
        label: field[1].title,
        value: field[0]
      }))
    }))],
    styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.customSelectStyles,
    theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.selectTheme,
    components: {
      DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.DropdownIndicator,
      Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.Option
    },
    value: {
      value: value || '',
      label: value && sortable_indexes ? (_sortable_indexes$val = sortable_indexes[value]) === null || _sortable_indexes$val === void 0 ? void 0 : _sortable_indexes$val.title : value || intl.formatMessage(messages.NoSelection)
    },
    onChange: field => {
      onChange(id, field.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_8__.injectLazyLibs)(['reactSelect'])(QueryStringSortOrderWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/QueryWidget.jsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/QueryWidget.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuerystringWidgetComponent: () => (/* binding */ QuerystringWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/toPairs */ "lodash/toPairs");
/* harmony import */ var lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/groupBy */ "lodash/groupBy");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_actions_querystring_querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/actions/querystring/querystring */ "./node_modules/@plone/volto/src/actions/querystring/querystring.js");
/* harmony import */ var _plone_volto_actions_querystringsearch_querystringsearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/actions/querystringsearch/querystringsearch */ "./node_modules/@plone/volto/src/actions/querystringsearch/querystringsearch.js");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_ObjectBrowserWidget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectBrowserWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectBrowserWidget.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_NumberWidget__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/NumberWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/NumberWidget.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\QueryWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * QuerystringWidget component.
 * @module components/manage/Widgets/QuerystringWidget
 */

;






















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  Criteria: {
    id: 'Criteria',
    defaultMessage: 'Criteria'
  },
  AddCriteria: {
    id: 'Add criteria',
    defaultMessage: 'Add criteria'
  },
  select: {
    id: 'querystring-widget-select',
    defaultMessage: 'Select…'
  },
  currentPath: {
    id: 'query-widget-currentPath',
    defaultMessage: 'Current path (./)'
  },
  parentPath: {
    id: 'query-widget-parentPath',
    defaultMessage: 'Parent path (../)'
  }
});
const parseUidDepth = val => {
  if (typeof val !== 'string') return {
    uid: '',
    depth: 1
  };
  const lastSep = String(val).lastIndexOf('::');
  if (lastSep !== -1) {
    const uid = val.substring(0, lastSep);
    const parsed = parseInt(val.substring(lastSep + 2), 10);
    return {
      uid,
      depth: Number.isNaN(parsed) ? 1 : parsed
    };
  }
  return {
    uid: val,
    depth: 1
  };
};

/**
 * Widget for a querystring value, to define a catalog search criteria.
 */
class QuerystringWidgetComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs EditComponent
   */
  constructor(props) {
    super(props);
    this.state = {
      visual: false
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.getWidget = this.getWidget.bind(this);
    this.loadReferenceWidgetItem = this.loadReferenceWidgetItem.bind(this);
  }

  /**
   * Component did mount lifecycle method
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (this.props.focus) {
      this.node.focus();
    }
    this.props.getQuerystring();
  }
  loadReferenceWidgetItem(v) {
    var _this$props$reference, _this$props$reference2;
    const loading = (_this$props$reference = (_this$props$reference2 = this.props.reference[`${v}_query_reference`]) === null || _this$props$reference2 === void 0 ? void 0 : _this$props$reference2.loading) !== null && _this$props$reference !== void 0 ? _this$props$reference : false;
    if (!loading && (v === null || v === void 0 ? void 0 : v.length) > 0) {
      this.props.getQueryStringResults('/', {
        b_size: 1,
        query: [{
          i: 'path',
          o: 'plone.app.querystring.operation.string.absolutePath',
          v: v + '::0'
        }]
      }, v + '_query_reference');
    }
  }

  /**
   * Get correct widget
   * @method getWidget
   * @param {Object} row Row object.
   * @param {number} index Row index.
   * @returns {Object} Widget.
   */
  getWidget(row, index, Select, intl) {
    var _relativePathOptions$;
    const props = {
      fluid: true,
      value: row.v,
      onChange: data => this.onChangeValue(index, data.target.value)
    };
    const values = this.props.indexes[row.i].values;
    const operator = this.props.indexes[row.i].operators[row.o];
    switch (operator.widget) {
      case null:
        return __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 16
          }
        });
      case 'DateWidget':
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _extends({
          type: "date"
        }, props, {
          value: row.v,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }
        })));
      case 'DateRangeWidget':
        // 2 date inputs
        return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _extends({
          type: "date"
        }, props, {
          value: row.v[0],
          onChange: data => this.onChangeValue(index, [data.target.value, row.v[1]]),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }
        }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _extends({
          type: "date"
        }, props, {
          value: row.v[1],
          onChange: data => this.onChangeValue(index, [row.v[0], data.target.value]),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 15
          }
        }))));
      case 'RelativeDateWidget':
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _extends({
          step: 1,
          type: "number"
        }, props, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }
        })));
      case 'MultipleSelectionWidget':
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto',
            maxWidth: '92%'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 11
          }
        }, __jsx(Select, _extends({}, props, {
          className: "react-select-container",
          classNamePrefix: "react-select",
          options: values ? lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default()(values), value => ({
            label: value[1].title,
            value: value[0]
          })) : [],
          styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.customSelectStyles,
          placeholder: this.props.intl.formatMessage(messages.select),
          theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.selectTheme,
          components: {
            DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.DropdownIndicator,
            Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.Option
          },
          onChange: data => {
            this.onChangeValue(index, lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(data, item => item.value));
          },
          isMulti: true,
          value: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(row.v, value => {
            var _values$value;
            return {
              label: (values === null || values === void 0 ? void 0 : (_values$value = values[value]) === null || _values$value === void 0 ? void 0 : _values$value.title) || value,
              value
            };
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }
        })));
      case 'autocomplete':
        const AutoCompleteComponent = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_20__["default"].widgets.widget.autocomplete;
        const vocabulary = {
          '@id': this.props.indexes[row.i].vocabulary
        };
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto',
            maxWidth: '92%'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 11
          }
        }, __jsx(AutoCompleteComponent, _extends({}, props, {
          vocabulary: vocabulary,
          wrapped: false,
          id: `id-${index}`,
          title: `title-${index}`,
          onChange: (_d, data) => {
            this.onChangeValue(index, data);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }
        })));
      case 'ReferenceWidget':
        const {
          uid: uidValue,
          depth: depthValue
        } = parseUidDepth(props.value);
        if (!this.props.reference[`${uidValue}_query_reference`]) {
          this.loadReferenceWidgetItem(uidValue);
        }
        const referenceItem = this.props.reference[`${uidValue}_query_reference`] ? this.props.reference[`${uidValue}_query_reference`].items[0] : null;
        return __jsx("div", {
          className: "location-object-browser",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          className: "object-browser-field",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }
        }, __jsx(_plone_volto_components_manage_Widgets_ObjectBrowserWidget__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: `query-reference-widget-${index}`,
          mode: "link",
          onChange: (id, data) => {
            var _itemSelected$UID;
            const itemSelected = data.length > 0 ? data[0] : {};
            const uid = (_itemSelected$UID = itemSelected.UID) !== null && _itemSelected$UID !== void 0 ? _itemSelected$UID : '';
            this.onChangeValue(index, uid ? `${uid}::${depthValue}` : '');
            this.loadReferenceWidgetItem(uid);
          },
          value: uidValue && this.props.reference ? [referenceItem] : [],
          wrapped: false,
          onlyFolderishSelectable: true,
          allowExternals: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        })), uidValue && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          className: "reference-widget-depth",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 15
          }
        }, __jsx(_plone_volto_components_manage_Widgets_NumberWidget__WEBPACK_IMPORTED_MODULE_17__["default"], {
          title: intl.formatMessage({
            id: 'Depth',
            defaultMessage: 'Depth'
          }),
          min: 1,
          step: 1,
          value: depthValue,
          onChange: (id, value) => {
            const newDepth = parseInt(value, 10) || 1;
            const curUid = uidValue || '';
            this.onChangeValue(index, `${curUid}::${newDepth}`);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 17
          }
        })));
      case 'RelativePathWidget':
        const relativePathOptions = [{
          label: intl.formatMessage(messages.currentPath),
          value: './'
        }, {
          label: intl.formatMessage(messages.parentPath),
          value: '../'
        }];
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto',
            maxWidth: '92%'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 11
          }
        }, __jsx(Select, _extends({}, props, {
          className: "react-select-container",
          classNamePrefix: "react-select",
          options: relativePathOptions,
          styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.customSelectStyles,
          placeholder: this.props.intl.formatMessage(messages.select),
          theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.selectTheme,
          components: {
            DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.DropdownIndicator,
            Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.Option
          },
          onChange: data => {
            this.onChangeValue(index, data.value);
          },
          isMulti: false,
          value: (_relativePathOptions$ = relativePathOptions.filter(p => p.value === props.value)) === null || _relativePathOptions$ === void 0 ? void 0 : _relativePathOptions$[0],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }
        })));
      default:
        // if (row.o === 'plone.app.querystring.operation.string.relativePath') {
        //   props.onChange = data => this.onChangeValue(index, data.target.value);
        // }
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
          style: {
            flex: '1 0 auto'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _extends({}, props, {
          description: operator.description,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }
        })));
    }
  }

  /**
   * Change value handler
   * @method onChangeValue
   * @param {Number} index Index of the row.
   * @param {String|Array} value Value of the row.
   * @returns {undefined}
   */
  onChangeValue(index, value) {
    this.props.onChange(this.props.id, lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(this.props.value, (row, i) => index === i ? _objectSpread(_objectSpread({}, row), {}, {
      v: value
    }) : row));
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      id,
      required,
      description,
      error,
      value,
      onChange,
      onEdit,
      indexes,
      fieldSet,
      reactSelect,
      intl
    } = this.props;
    const Select = reactSelect.default;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
      inline: true,
      required: required,
      error: error.length > 0,
      className: classnames__WEBPACK_IMPORTED_MODULE_19___default()('query-widget', description ? 'help' : ''),
      id: `${fieldSet || 'field'}-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "simple-field-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 15
      }
    }, intl.formatMessage(messages.Criteria)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 13
      }
    }, indexes && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(indexes) && lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(value, (row, index) => {
      var _indexes$row$i, _indexes$row$i$operat, _indexes$row$i2;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "main-fields-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 21
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
        style: {
          flex: '1 0 auto',
          marginRight: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 23
        }
      }, __jsx(Select, {
        id: `field-${id}`,
        name: id,
        disabled: onEdit !== null,
        className: "react-select-container",
        classNamePrefix: "react-select",
        options: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default()(lodash_groupBy__WEBPACK_IMPORTED_MODULE_8___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default()(indexes), item => item[1].group)), group => ({
          label: group[0],
          options: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_5___default()(group[1], item => item[1].enabled), field => ({
            label: field[1].title,
            value: field[0],
            isDisabled: (value || []).some(v => v['i'] !== 'path' && v['i'] === field[0])
          }))
        })),
        styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.customSelectStyles,
        theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.selectTheme,
        placeholder: intl.formatMessage(messages.select),
        components: {
          DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.DropdownIndicator,
          Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.Option
        },
        value: {
          value: row.i,
          label: (_indexes$row$i = indexes[row.i]) === null || _indexes$row$i === void 0 ? void 0 : _indexes$row$i.title
        },
        onChange: data => {
          onChange(id, lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(value, (curRow, curIndex) => curIndex === index ? {
            i: data.value,
            o: indexes[data.value].operations[0],
            v: ''
          } : curRow));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 25
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
        style: {
          flex: '1 0 auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 23
        }
      }, __jsx(Select, {
        id: `field-${id}`,
        name: id,
        disabled: onEdit !== null,
        className: "react-select-container",
        classNamePrefix: "react-select",
        options: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()((_indexes$row$i$operat = (_indexes$row$i2 = indexes[row.i]) === null || _indexes$row$i2 === void 0 ? void 0 : _indexes$row$i2.operations) !== null && _indexes$row$i$operat !== void 0 ? _indexes$row$i$operat : [], operation => ({
          value: operation,
          label: indexes[row.i].operators[operation].title
        })),
        styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.customSelectStyles,
        theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.selectTheme,
        placeholder: intl.formatMessage(messages.select),
        components: {
          DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.DropdownIndicator,
          Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.Option
        },
        value: {
          value: row.o,
          label: indexes[row.i].operators[row.o].title
        },
        onChange: data => onChange(id, lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(value, (curRow, curIndex) => curIndex === index ? {
          i: row.i,
          o: data.value,
          v: ''
        } : curRow)),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 25
        }
      })), !this.props.indexes[row.i].operators[row.o].widget && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: event => {
          onChange(id, lodash_remove__WEBPACK_IMPORTED_MODULE_6___default()(value, (v, i) => i !== index));
          event.preventDefault();
        },
        style: {
          background: 'none',
          paddingRight: 0,
          paddingLeft: 0,
          margin: 0
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 25
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22___default()),
        size: "24px",
        className: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 27
        }
      }))), this.getWidget(row, index, Select, intl), this.props.indexes[row.i].operators[row.o].widget && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: event => {
          onChange(id, lodash_remove__WEBPACK_IMPORTED_MODULE_6___default()(value, (v, i) => i !== index));
          event.preventDefault();
        },
        style: {
          background: 'none',
          paddingRight: 0,
          paddingLeft: 0,
          margin: 0
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 23
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22___default()),
        size: "24px",
        className: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 25
        }
      })));
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
      style: {
        flex: '1 0 auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 17
      }
    }, __jsx(Select, {
      id: `field-${id}`,
      name: id,
      disabled: onEdit !== null,
      className: "react-select-container",
      classNamePrefix: "react-select",
      placeholder: intl.formatMessage(messages.AddCriteria),
      options: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default()(lodash_groupBy__WEBPACK_IMPORTED_MODULE_8___default()(lodash_toPairs__WEBPACK_IMPORTED_MODULE_7___default()(indexes), item => item[1].group)), group => ({
        label: group[0],
        options: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_5___default()(group[1], item => item[1].enabled), field => ({
          label: field[1].title,
          value: field[0],
          // disable selecting indexes that are already used,
          // except for path, which has explicit support
          // in the backend for multipath queries
          isDisabled: (value || []).some(v => v['i'] !== 'path' && v['i'] === field[0])
        }))
      })),
      styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.customSelectStyles,
      theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.selectTheme,
      components: {
        DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.DropdownIndicator,
        Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_21__.Option
      },
      value: null,
      onChange: data => {
        onChange(id, [...(value || []), {
          i: data.value,
          o: indexes[data.value].operations[0],
          v: ''
        }]);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 19
      }
    }))), lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(error, message => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Label, {
      key: message,
      basic: true,
      color: "red",
      pointing: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 17
      }
    }, message)))), description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
      stretched: true,
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 17
      }
    }, description)))));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(QuerystringWidgetComponent, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  getQuerystring: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(QuerystringWidgetComponent, "defaultProps", {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: null,
  onEdit: null,
  onDelete: null,
  focus: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_11__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_18__.injectLazyLibs)(['reactSelect']), react_router__WEBPACK_IMPORTED_MODULE_12__.withRouter, (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)((state, props) => ({
  indexes: state.querystring.indexes,
  reference: state.querystringsearch.subrequests
}), {
  getQuerystring: _plone_volto_actions_querystring_querystring__WEBPACK_IMPORTED_MODULE_13__.getQuerystring,
  getQueryStringResults: _plone_volto_actions_querystringsearch_querystringsearch__WEBPACK_IMPORTED_MODULE_14__.getQueryStringResults
}))(QuerystringWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/QuerystringWidget.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/QuerystringWidget.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   objectSchema: () => (/* binding */ objectSchema)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\QuerystringWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;


const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  Criteria: {
    id: 'Criteria',
    defaultMessage: 'Criteria'
  },
  SortOn: {
    id: 'Sort on',
    defaultMessage: 'Sort on'
  },
  reversedOrder: {
    id: 'Reversed order',
    defaultMessage: 'Reversed order'
  },
  limit: {
    id: 'Results limit',
    defaultMessage: 'Results limit'
  },
  itemBatchSize: {
    id: 'Item batch size',
    defaultMessage: 'Item batch size'
  },
  NoSelection: {
    id: 'No selection',
    defaultMessage: 'No selection'
  }
});
const objectSchema = ({
  intl,
  isDisabled,
  value
}) => ({
  fieldsets: [{
    id: 'default',
    title: 'Default',
    fields: ['query', 'sort_on', 'sort_order_boolean', 'limit', 'b_size']
  }],
  properties: {
    query: {
      title: intl.formatMessage(messages.Criteria),
      widget: 'query'
    },
    sort_on: {
      title: intl.formatMessage(messages.SortOn),
      widget: 'query_sort_on',
      isDisabled: isDisabled
    },
    sort_order_boolean: {
      title: intl.formatMessage(messages.reversedOrder),
      type: 'boolean',
      isDisabled: isDisabled
    },
    limit: {
      title: intl.formatMessage(messages.limit),
      type: 'number',
      isDisabled: isDisabled
    },
    b_size: {
      title: intl.formatMessage(messages.itemBatchSize),
      type: 'number',
      isDisabled: isDisabled
    }
  },
  required: []
});
const QuerystringWidget = props => {
  var _props$value, _props$value$query;
  const {
    block,
    onChange,
    schemaEnhancer
  } = props;
  const isDisabled = (_props$value = props.value) !== null && _props$value !== void 0 && (_props$value$query = _props$value.query) !== null && _props$value$query !== void 0 && _props$value$query.length ? false : true;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  let schema = objectSchema(_objectSpread(_objectSpread({}, props), {}, {
    intl,
    isDisabled
  }));
  schema = schemaEnhancer ? schemaEnhancer(_objectSpread(_objectSpread({}, props), {}, {
    intl,
    schema
  })) : schema;
  return __jsx("div", {
    className: "querystring-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    block: block,
    schema: schema,
    onChange: (id, value) => {
      const adaptedValue = _objectSpread(_objectSpread({}, value), {}, {
        sort_order: value.sort_order_boolean ? 'descending' : 'ascending'
      });
      onChange(id, adaptedValue);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuerystringWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RadioGroupWidget.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RadioGroupWidget.jsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroupWidgetComponent: () => (/* binding */ RadioGroupWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies.js */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RadioGroupWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * RadioGroupWidget component.
 * @module components/manage/Widgets/RadioGroupWidget
 */

;










/**
 * RadioGroupWidget component class.
 * @function RadioGroupWidget
 * @returns {string} Markup of the component.
 */
class RadioGroupWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props$choices;
    if ((!this.props.choices || ((_this$props$choices = this.props.choices) === null || _this$props$choices === void 0 ? void 0 : _this$props$choices.length) === 0) && this.props.vocabBaseUrl) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }
  componentDidUpdate(prevProps) {
    var _this$props$choices2;
    if (this.props.vocabBaseUrl !== prevProps.vocabBaseUrl && (!this.props.choices || ((_this$props$choices2 = this.props.choices) === null || _this$props$choices2 === void 0 ? void 0 : _this$props$choices2.length) === 0)) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      id,
      choices,
      value,
      onChange,
      filterChoices,
      additionalChoices
    } = this.props;
    let options = this.props.vocabBaseUrl ? this.props.choices : [...lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(choices, option => ({
      value: option[0],
      label:
      // Fix "None" on the serializer, to remove when fixed in p.restapi
      option[1] !== 'None' && option[1] ? option[1] : option[0]
    }))];
    if (additionalChoices) {
      options = [...(options || []), ...additionalChoices];
    }
    if (filterChoices) {
      options = lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(options, item => filterChoices.includes(item.value));
    }
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 7
      }
    }), options.map(option => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Radio, {
      label: option.label,
      name: id,
      key: option.value,
      value: option.value,
      checked: option.value === value,
      onChange: (e, {
        value
      }) => {
        onChange(id, value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    })));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(RadioGroupWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  filterChoices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getVocabularyTokenTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)])),
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(RadioGroupWidget, "defaultProps", {
  description: null,
  required: false,
  filterChoices: null,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null
});
const RadioGroupWidgetComponent = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(RadioGroupWidget);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2;
  const vocabBaseUrl = !props.choices ? (0,_plone_volto_helpers_Vocabularies_Vocabularies_js__WEBPACK_IMPORTED_MODULE_6__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies_js__WEBPACK_IMPORTED_MODULE_6__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies_js__WEBPACK_IMPORTED_MODULE_6__.getVocabFromItems)(props) : '';
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : _state$vocabularies$v2[state.intl.locale];

  // If the schema already has the choices in it, then do not try to get the vocab,
  // even if there is one
  if (props.choices) {
    return {
      choices: props.choices,
      lang: state.intl.locale
    };
  } else if (vocabState) {
    var _vocabState$items;
    return {
      vocabBaseUrl,
      choices: (_vocabState$items = vocabState === null || vocabState === void 0 ? void 0 : vocabState.items) !== null && _vocabState$items !== void 0 ? _vocabState$items : [],
      lang: state.intl.locale
    };
    // There is a moment that vocabState is not there yet, so we need to pass the
    // vocabBaseUrl to the component.
  } else if (vocabBaseUrl) {
    return {
      vocabBaseUrl,
      lang: state.intl.locale
    };
  }
  return {
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_9__.getVocabulary,
  getVocabularyTokenTitle: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_9__.getVocabularyTokenTitle
})(RadioGroupWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\ByDayField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * ByDayField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByDayField
 */









/**
 * ByDayField component class.
 * @function ByDayField
 * @returns {string} Markup of the component.
 */
const ByDayField = ({
  label,
  value,
  onChange,
  moment: momentlib
}) => {
  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.intl.locale);
  const moment = momentlib.default;
  moment.locale((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.toBackendLang)(lang));
  const toggleWeekDay = dayName => {
    var day = _Utils__WEBPACK_IMPORTED_MODULE_3__.Days[dayName];
    var byweekday = value ? [...value] : [];
    var i = byweekday.indexOf(day);
    if (i >= 0) {
      byweekday.splice(i, 1);
    } else {
      byweekday.push(day);
    }
    onChange('byweekday', byweekday);
  };
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "byday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
    basic: true,
    className: "byday-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_3__.Days).map(d => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: d,
    active: (value === null || value === void 0 ? void 0 : value.indexOf(_Utils__WEBPACK_IMPORTED_MODULE_3__.Days[d])) >= 0,
    type: "button",
    content: moment.weekdaysShort(_Utils__WEBPACK_IMPORTED_MODULE_3__.Days[d].weekday + 1),
    onClick: () => {
      toggleWeekDay(d);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByDayField.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByDayField.defaultProps = {
  label: null,
  value: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__.injectLazyLibs)(['moment'])(ByDayField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx"
/*!******************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\ByMonthDayField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * ByMonthDayField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByMonthDayField
 */





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  bymonthDay: {
    id: 'Month day',
    defaultMessage: 'Day'
  },
  ofTheMonth: {
    id: 'of the month',
    defaultMessage: 'of the month'
  }
});
/**
 * ByMonthDayField component class.
 * @function ByMonthDayField
 * @returns {string} Markup of the component.
 */
const ByMonthDayField = ({
  value,
  disabled,
  onChange,
  hideAfterLabel,
  intl
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, intl.formatMessage(messages.bymonthDay)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "number",
    id: "bymonthday",
    name: "bymonthday",
    value: value || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : [parseInt(target.value)]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), !hideAfterLabel && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, intl.formatMessage(messages.ofTheMonth)));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByMonthDayField.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hideAfterLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByMonthDayField.defaultProps = {
  disabled: false,
  value: null,
  onChange: null,
  hideAfterLabel: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ByMonthDayField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByMonthDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx");
/* harmony import */ var _WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeekdayOfTheMonthIndexField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx");
/* harmony import */ var _WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeekdayOfTheMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\ByMonthField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * ByMonthField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByMonthField
 */









/**
 * ByMonthField component class.
 * @function ByMonthField
 * @returns {string} Markup of the component.
 */
const ByMonthField = ({
  label,
  value,
  bymonthday,
  weekdayOfTheMonthIndex,
  weekdayOfTheMonth,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "monthly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    label: "",
    name: "monthly",
    id: "monthly-bymonthday",
    value: "bymonthday",
    checked: value === 'bymonthday',
    onChange: (e, {
      value
    }) => onChange('monthly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), __jsx(_ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: bymonthday,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    label: "",
    name: "monthly",
    id: "monthly-byweekday",
    value: "byweekday",
    checked: value === 'byweekday',
    onChange: (e, {
      value
    }) => onChange('monthly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(_WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: value !== 'byweekday',
    value: weekdayOfTheMonthIndex,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(_WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: value !== 'byweekday',
    value: weekdayOfTheMonth,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByMonthField.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  bymonthday: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  weekdayOfTheMonthIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  weekdayOfTheMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByMonthField.defaultProps = {
  label: null,
  value: null,
  bymonthday: null,
  weekdayOfTheMonthIndex: null,
  weekdayOfTheMonth: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ByMonthField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx"
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByMonthDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx");
/* harmony import */ var _MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MonthOfTheYearField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx");
/* harmony import */ var _WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeekdayOfTheMonthIndexField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx");
/* harmony import */ var _WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WeekdayOfTheMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\ByYearField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * ByYearField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByYearField
 */









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  ofTheMonth: {
    id: 'of the month',
    defaultMessage: 'of the month'
  }
});
/**
 * ByYearField component class.
 * @function ByYearField
 * @returns {string} Markup of the component.
 */
const ByYearField = ({
  label,
  value,
  bymonthday,
  monthOfTheYear,
  weekdayOfTheMonthIndex,
  weekdayOfTheMonth,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    className: "text byyear-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "yearly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    className: "byyear-bymonthday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    label: "",
    name: "yearly",
    value: "bymonthday",
    id: "yearly-bymonthday",
    checked: value === 'bymonthday',
    onChange: (e, {
      value
    }) => onChange('yearly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(_ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: bymonthday,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    hideAfterLabel: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx(_MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: monthOfTheYear,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    className: "byyear-byday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    label: "",
    name: "yearly",
    id: "yearly-byday",
    value: "byday",
    checked: value === 'byday',
    onChange: (e, {
      value
    }) => onChange('yearly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx(_WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: value !== 'byday',
    value: weekdayOfTheMonthIndex,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx(_WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: value !== 'byday',
    value: weekdayOfTheMonth,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    disabled: value !== 'byday',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.ofTheMonth)), __jsx(_MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: monthOfTheYear,
    disabled: value !== 'byday',
    onChange: onChange,
    inline: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByYearField.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  bymonthday: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  monthOfTheYear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  weekdayOfTheMonthIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  weekdayOfTheMonth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByYearField.defaultProps = {
  label: null,
  value: null,
  bymonthday: null,
  monthOfTheYear: null,
  weekdayOfTheMonthIndex: null,
  weekdayOfTheMonth: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ByYearField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatetimeWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DatetimeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\EndField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * EndField component.
 * @module components/manage/Widgets/RecurrenceWidget/EndField
 */






const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  recurrenceEnds: {
    id: 'Recurrence ends',
    defaultMessage: 'Ends'
  },
  recurrenceEndsCount: {
    id: 'Recurrence ends after',
    defaultMessage: 'after'
  },
  recurrenceEndsUntil: {
    id: 'Recurrence ends on',
    defaultMessage: 'on'
  },
  occurrences: {
    id: 'Occurences',
    defaultMessage: 'occurrence(s)'
  }
});
/**
 * EndField component class.
 * @function EndField
 * @returns {string} Markup of the component.
 */
const EndField = ({
  value,
  count,
  until,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "recurrenceEnds",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.recurrenceEnds)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    label: "",
    name: "recurrenceEnds",
    id: "recurrenceEndsCount",
    value: "count",
    checked: value === 'count',
    onChange: (e, {
      value
    }) => onChange('recurrenceEnds', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.recurrenceEndsCount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    id: "count",
    name: "count",
    value: count || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.occurrences))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
    id: "recurrenceEndsUntil",
    label: "",
    name: "recurrenceEnds",
    value: "until",
    checked: value === 'until',
    onChange: (e, {
      value
    }) => onChange('recurrenceEnds', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    disabled: value !== 'until',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_DatetimeWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "until",
    title: intl.formatMessage(messages.recurrenceEndsUntil),
    dateOnly: true,
    value: until ? typeof until === 'string' ? until : until === null || until === void 0 ? void 0 : until.toISOString() : '',
    resettable: false,
    onChange: (id, value) => {
      onChange(id, value === '' ? undefined : value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EndField.propTypes = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  until: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EndField.defaultProps = {
  value: null,
  count: null,
  until: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(EndField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx"
/*!****************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\IntervalField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * IntervalField component.
 * @module components/manage/Widgets/RecurrenceWidget/IntervalField
 */





/**
 * IntervalField component class.
 * @function IntervalField
 * @returns {string} Markup of the component.
 */
const IntervalField = ({
  label,
  labelAfter,
  value,
  onChange
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "interval",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: "interval",
    name: "interval",
    value: value || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : parseInt(target.value));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), labelAfter && __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 30
    }
  }, labelAfter))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IntervalField.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  labelAfter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
IntervalField.defaultProps = {
  label: null,
  labelAfter: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntervalField);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\MonthOfTheYearField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * MonthOfTheYearField component.
 * @module components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField
 */










/**
 * MonthOfTheYearField component class.
 * @function MonthOfTheYearField
 * @returns {string} Markup of the component.
 */
const MonthOfTheYearField = ({
  value,
  disabled,
  inline,
  onChange,
  moment: momentlib
}) => {
  const moment = momentlib.default;
  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.intl.locale);
  moment.locale((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__.toBackendLang)(lang));
  const monthList = [...lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(moment.months(), (m, i) => ({
    value: i + 1,
    label: m
  }))];
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    inline: inline,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "monthOfTheYear",
    disabled: disabled,
    options: monthList,
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
MonthOfTheYearField.propTypes = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
MonthOfTheYearField.defaultProps = {
  value: null,
  disabled: false,
  inline: false,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__.injectLazyLibs)(['moment'])(MonthOfTheYearField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Occurences: () => (/* binding */ Occurences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/circle-plus.svg */ "./node_modules/@plone/volto/src/icons/circle-plus.svg");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\Occurences.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * Occurences component.
 * @module components/manage/Widgets/RecurrenceWidget/Occurences
 */













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  selected_dates: {
    id: 'Selected dates',
    defaultMessage: 'Selected dates'
  },
  start_of_recurrence: {
    id: 'Start of the recurrence',
    defaultMessage: 'Start of the recurrence'
  },
  additional_date: {
    id: 'Additional date',
    defaultMessage: 'Additional date'
  },
  other_items: {
    id: 'others',
    defaultMessage: 'others'
  },
  no_occurences: {
    id: 'No occurences set',
    defaultMessage: 'No occurences set'
  },
  exclude: {
    id: 'Exclude this occurence',
    defaultMessage: 'Exclude this occurence'
  },
  include: {
    id: 'Include this occurence',
    defaultMessage: 'Include this occurrence'
  }
});
const formatDate = (d, moment) => {
  const m = moment(d);
  return m.format('dddd') + ', ' + m.format('LL');
};

/**
 * Occurences component class.
 * @function Occurences
 * @returns {string} Markup of the component.
 */
const Occurences_ = ({
  rruleSet,
  exclude,
  undoExclude,
  intl,
  showTitle,
  editOccurences,
  moment: momentlib
}) => {
  const moment = momentlib.default;
  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.intl.locale);
  moment.locale((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_8__.toBackendLang)(lang));
  let all = [];
  const isExcluded = date => {
    var dateISO = (0,_Utils__WEBPACK_IMPORTED_MODULE_11__.toISOString)(date);
    var excluded = false;
    rruleSet.exdates().forEach(ex => {
      var exISO = (0,_Utils__WEBPACK_IMPORTED_MODULE_11__.toISOString)(ex);
      if (exISO === dateISO) {
        excluded = true;
      }
    });
    return excluded;
  };
  const isAdditional = date => {
    var dateISO = (0,_Utils__WEBPACK_IMPORTED_MODULE_11__.toISOString)(date);
    var additional = false;
    rruleSet.rdates().forEach(d => {
      var dd = (0,_Utils__WEBPACK_IMPORTED_MODULE_11__.toISOString)(d);
      if (dd === dateISO) {
        additional = true;
      }
    });
    return additional;
  };
  if (rruleSet) {
    all = rruleSet.all();
    rruleSet.exdates().forEach(date => {
      if (all.indexOf(date) < 0) {
        all.push(date);
      }
    });
    all.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }
  const others = all.splice(100);
  return __jsx("div", {
    className: "occurences",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, all.length === 0 && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, intl.formatMessage(messages.no_occurences)), showTitle && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header, {
    as: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, intl.formatMessage(messages.selected_dates)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List, {
    divided: true,
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, all.map((date, index) => {
    const excluded = isExcluded(date);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List.Item, {
      key: date.toString(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, editOccurences && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List.Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, index > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !excluded && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
      basic: true,
      icon: true,
      className: "exclude-button",
      onClick: () => {
        exclude(date);
      },
      "aria-label": intl.formatMessage(messages.exclude),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7___default()),
      size: "18px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 27
      }
    })), excluded && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
      basic: true,
      icon: true,
      className: "include-button",
      onClick: () => {
        undoExclude(date);
      },
      "aria-label": intl.formatMessage(messages.include),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: (_plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6___default()),
      size: "24px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 27
      }
    }))) : intl.formatMessage(messages.start_of_recurrence)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List.Content, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        excluded: excluded
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, formatDate(date, moment), isAdditional(date) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Label, {
      pointing: "left",
      size: "small",
      color: excluded ? 'grey' : 'green',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 19
      }
    }, intl.formatMessage(messages.additional_date))));
  }), others.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, `... ${intl.formatMessage(messages.other_items)} ${others.length}`))));
};
const Occurences = (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__.injectLazyLibs)(['moment'])(Occurences_);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Occurences.propTypes = {
  rruleSet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  showTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  editOccurences: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Occurences.defaultProps = {
  rruleSet: null,
  showTitle: true,
  editOccurences: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(Occurences));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/DatetimeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectWidget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectWidget.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/editing.svg */ "./node_modules/@plone/volto/src/icons/editing.svg");
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _IntervalField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IntervalField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx");
/* harmony import */ var _ByDayField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ByDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx");
/* harmony import */ var _EndField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./EndField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx");
/* harmony import */ var _ByMonthField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ByMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx");
/* harmony import */ var _ByYearField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ByYearField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx");
/* harmony import */ var _Occurences__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Occurences */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\RecurrenceWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * RecurrenceWidget component.
 * @module components/manage/Widgets/RecurrenceWidget
 */

;


























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  editRecurrence: {
    id: 'Edit recurrence',
    defaultMessage: 'Edit recurrence'
  },
  save: {
    id: 'Save recurrence',
    defaultMessage: 'Save'
  },
  remove: {
    id: 'Remove recurrence',
    defaultMessage: 'Remove'
  },
  repeat: {
    id: 'Repeat',
    defaultMessage: 'Repeat'
  },
  daily: {
    id: 'Daily',
    defaultMessage: 'Daily'
  },
  mondayfriday: {
    id: 'Monday and Friday',
    defaultMessage: 'Monday and Friday'
  },
  weekdays: {
    id: 'Weekday',
    defaultMessage: 'Weekday'
  },
  weekly: {
    id: 'Weekly',
    defaultMessage: 'Weekly'
  },
  monthly: {
    id: 'Monthly',
    defaultMessage: 'Monthly'
  },
  yearly: {
    id: 'Yearly',
    defaultMessage: 'Yearly'
  },
  repeatEvery: {
    id: 'Repeat every',
    defaultMessage: 'Repeat every'
  },
  repeatOn: {
    id: 'Repeat on',
    defaultMessage: 'Repeat on'
  },
  interval_daily: {
    id: 'Interval Daily',
    defaultMessage: 'days'
  },
  interval_weekly: {
    id: 'Interval Weekly',
    defaultMessage: 'week(s)'
  },
  interval_monthly: {
    id: 'Interval Monthly',
    defaultMessage: 'Month(s)'
  },
  interval_yearly: {
    id: 'Interval Yearly',
    defaultMessage: 'year(s)'
  },
  add_date: {
    id: 'Add date',
    defaultMessage: 'Add date'
  },
  select_date_to_add_to_recurrence: {
    id: 'Select a date to add to recurrence',
    defaultMessage: 'Select a date to add to recurrence'
  }
});
const NoRRuleOptions = ['recurrenceEnds', 'monthly', 'weekdayOfTheMonthIndex', 'weekdayOfTheMonth', 'yearly', 'monthOfTheYear', 'byhour', 'byminute', 'bysecond', 'bynmonthday', 'exdates', 'rdates'];
/**
 * RecurrenceWidget component class.
 * @function RecurrenceWidget
 * @returns {string} Markup of the component.
 */
class RecurrenceWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props, intl) {
    super(props);
    _defineProperty(this, "editRecurrence", () => {
      this.setRecurrenceStartEnd();
    });
    _defineProperty(this, "setRecurrenceStartEnd", () => {
      var _this$props$formData;
      const start = (_this$props$formData = this.props.formData) === null || _this$props$formData === void 0 ? void 0 : _this$props$formData.start;

      // The `start` date from Plone is in UTC
      const _start = new Date(start);
      this.setState(prevState => {
        let rruleSet = prevState.rruleSet;
        const formValues = this.getFormValues(rruleSet); //to set default values, included end

        rruleSet = this.updateRruleSet(rruleSet, formValues, 'dtstart', _start);
        return _objectSpread(_objectSpread({}, prevState), {}, {
          rruleSet,
          formValues
        });
      });
    });
    _defineProperty(this, "getUTCDate", date => {
      return date.match(/T(.)*(-|\+|Z)/g) ? this.moment(date).utc() : this.moment(`${date}Z`).utc();
    });
    _defineProperty(this, "show", dimmer => () => {
      this.setState({
        dimmer,
        open: true
      });
      this.editRecurrence();
    });
    _defineProperty(this, "close", () => this.setState({
      open: false
    }));
    _defineProperty(this, "getFreq", (number, weekdays) => {
      let freq = _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.DAILY;
      Object.entries(_Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences).forEach(([f, o]) => {
        if (o.rrule === number) {
          freq = f;
        }
      });
      if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKLY && weekdays) {
        if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(weekdays.sort(), _Utils__WEBPACK_IMPORTED_MODULE_20__.WEEKLY_DAYS.map(w => w.weekday).sort())) {
          freq = _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKDAYS;
        }
      }
      return freq;
    });
    _defineProperty(this, "getWeekday", number => {
      var day = null;
      const n = number === -1 ? 6 : number; //because sunday for moment has index 0, but for rrule has index 6
      Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_20__.Days).forEach(d => {
        if (_Utils__WEBPACK_IMPORTED_MODULE_20__.Days[d].weekday === n) {
          day = _Utils__WEBPACK_IMPORTED_MODULE_20__.Days[d];
        }
      });
      return day;
    });
    /**
     * Called on init, to populate form values
     * */
    _defineProperty(this, "getFormValues", rruleSet => {
      var _this$props$formData2;
      //default
      let formValues = {
        freq: _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.DAILY,
        interval: 1
      };
      formValues = this.changeField(formValues, 'recurrenceEnds', (_this$props$formData2 = this.props.formData) !== null && _this$props$formData2 !== void 0 && _this$props$formData2.end ? 'until' : 'count');
      const rrule = rruleSet.rrules()[0];
      if (rrule) {
        var freq = this.getFreq(rrule.options.freq, rrule.options.byweekday);

        //init with rruleOptions
        Object.entries(rrule.options).forEach(([option, value]) => {
          switch (option) {
            case 'freq':
              formValues[option] = freq;
              break;
            case 'count':
              if (value != null) {
                formValues['recurrenceEnds'] = option;
                formValues[option] = value;
              }
              break;
            case 'until':
              if (value != null) {
                formValues['recurrenceEnds'] = option;
                formValues[option] = value;
              }
              break;
            case 'byweekday':
              if (value && value.length > 0) {
                if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(value, _Utils__WEBPACK_IMPORTED_MODULE_20__.WEEKLY_DAYS)) {
                  formValues['freq'] = _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKDAYS;
                }
                if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(value, _Utils__WEBPACK_IMPORTED_MODULE_20__.MONDAYFRIDAY_DAYS)) {
                  formValues['freq'] = _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONDAYFRIDAY;
                }
              }
              formValues[option] = value ? value.map(d => {
                return this.getWeekday(d);
              }) : [];
              break;
            case 'bymonthday':
              if (value && value.length > 0) {
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONTHLY) {
                  formValues['monthly'] = option;
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY) {
                  formValues['yearly'] = option;
                }
              } else {
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONTHLY) {
                  formValues['monthly'] = null;
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY) {
                  formValues['yearly'] = null;
                }
              }
              formValues[option] = value;
              break;
            case 'bynweekday':
              if (value && value.length > 0) {
                //[weekDayNumber,orinal_number] -> translated is for example: [sunday, third] -> the third sunday of the month

                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.SMONTHLY) {
                  formValues['monthly'] = 'byweekday';
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY) {
                  formValues['yearly'] = 'byday';
                }
                formValues['weekdayOfTheMonth'] = value[0][0];
                formValues['weekdayOfTheMonthIndex'] = value[0][1];
              }
              break;
            case 'bymonth':
              if (freq === _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY) {
                formValues['yearly'] = 'byday';
              }
              formValues['monthOfTheYear'] = value ? value[0] : null;
              break;
            default:
              formValues[option] = value;
          }
        });
      }
      return formValues;
    });
    _defineProperty(this, "formValuesToRRuleOptions", formValues => {
      var values = Object.assign({}, formValues);

      //remove NoRRuleOptions
      NoRRuleOptions.forEach(opt => {
        delete values[opt];
      });

      //transform values for rrule
      Object.keys(values).forEach(field => {
        var value = values[field];
        switch (field) {
          case 'freq':
            if (value) {
              value = _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[value].rrule;
            }
            break;
          case 'until':
            let mDate = null;
            if (value) {
              mDate = this.moment(new Date(value));
              if (typeof value === 'string') {
                mDate = this.moment(new Date(value));
              } else {
                //object-->Date()
                mDate = this.moment(value);
              }
              if (this.props.formData.end) {
                //set time from formData.end
                const mEnd = this.moment(new Date(this.props.formData.end));
                mDate.set('hour', mEnd.get('hour'));
                mDate.set('minute', mEnd.get('minute'));
              }
            }
            value = value ? mDate.toDate() : null;
            break;
          default:
            break;
        }
        if (value === 0 || value) {
          //set value
          values[field] = value;
        } else {
          //remove empty values
          delete values[field];
        }
      });
      return values;
    });
    _defineProperty(this, "updateRruleSet", (rruleSet, formValues, field, value) => {
      var rruleOptions = this.formValuesToRRuleOptions(formValues);
      var dstart = field === 'dtstart' ? value : rruleSet.dtstart() ? rruleSet.dtstart() : new Date();
      var exdates = field === 'exdates' ? value : Object.assign([], rruleSet.exdates());
      var rdates = field === 'rdates' ? value : Object.assign([], rruleSet.rdates());
      rruleOptions.dtstart = dstart;
      const {
        RRule,
        RRuleSet
      } = this.props.rrule;
      let set = new RRuleSet();
      //set.dtstart(dstart);
      set.rrule(new RRule(rruleOptions));
      exdates.map(ex => set.exdate(ex));
      rdates.map(r => set.rdate(r));
      return set;
    });
    _defineProperty(this, "getDefaultUntil", freq => {
      var _this$props$formData3;
      const moment = this.moment;
      var end = (_this$props$formData3 = this.props.formData) !== null && _this$props$formData3 !== void 0 && _this$props$formData3.end ? moment(new Date(this.props.formData.end)) : null;
      var tomorrow = moment().add(1, 'days');
      var nextWeek = moment().add(7, 'days');
      var nextMonth = moment().add(1, 'months');
      var nextYear = moment().add(1, 'years');
      var until = end;
      switch (freq) {
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.DAILY:
          until = end ? end : tomorrow;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKLY:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKDAYS:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONDAYFRIDAY:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONTHLY:
          until = end ? end : nextMonth;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY:
          until = end ? end : nextYear;
          break;
        default:
          break;
      }
      if (this.props.formData.end) {
        //set default end time
        until.set('hour', end.get('hour'));
        until.set('minute', end.get('minute'));
      }
      until = new Date(until.get('year'), until.get('month'), until.get('date'), until.get('hour'), until.get('minute'));
      return until;
    });
    _defineProperty(this, "changeField", (formValues, field, value) => {
      var _this$state, _this$state$rruleSet, _this$props$formData4, _this$props$formData5, _this$props$formData6;
      //  git p.log('field', field, 'value', value);
      //get weekday from state.
      const moment = this.moment;
      const byweekday = ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$rruleSet = _this$state.rruleSet) === null || _this$state$rruleSet === void 0 ? void 0 : _this$state$rruleSet.rrules().length) > 0 ? this.state.rruleSet.rrules()[0].origOptions.byweekday : null;
      const currWeekday = this.getWeekday(moment().day() - 1);
      const currMonth = moment().month() + 1;
      const startMonth = (_this$props$formData4 = this.props.formData) !== null && _this$props$formData4 !== void 0 && _this$props$formData4.start ? moment(this.props.formData.start).month() + 1 : currMonth;
      const startWeekday = (_this$props$formData5 = this.props.formData) !== null && _this$props$formData5 !== void 0 && _this$props$formData5.start ? this.getWeekday(moment(this.props.formData.start).day() - 1) : currWeekday;
      formValues[field] = value;
      const defaultMonthDay = (_this$props$formData6 = this.props.formData) !== null && _this$props$formData6 !== void 0 && _this$props$formData6.start ? moment(this.props.formData.start).date() : moment().date();
      switch (field) {
        case 'freq':
          formValues.interval = 1;
          const fconfig = _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[value];

          //clear values
          if (!fconfig.interval) {
            formValues.interval = null;
          }
          formValues = this.changeField(formValues, 'byweekday', null);
          formValues = this.changeField(formValues, 'yearly', null);
          formValues = this.changeField(formValues, 'bymonthday', null);
          formValues = this.changeField(formValues, 'byweekday', null);
          formValues = this.changeField(formValues, 'monthOfTheYear', null);
          if (!formValues.until) {
            formValues.until = this.getDefaultUntil(value);
          }

          //set defaults
          switch (value) {
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.DAILY:
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKDAYS:
              formValues = this.changeField(formValues, 'byweekday', _Utils__WEBPACK_IMPORTED_MODULE_20__.WEEKLY_DAYS);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONDAYFRIDAY:
              formValues = this.changeField(formValues, 'byweekday', _Utils__WEBPACK_IMPORTED_MODULE_20__.MONDAYFRIDAY_DAYS);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKLY:
              formValues = this.changeField(formValues, 'byweekday', [startWeekday]);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.MONTHLY:
              formValues = this.changeField(formValues, 'monthly', 'bymonthday');
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.YEARLY:
              formValues = this.changeField(formValues, 'yearly', 'bymonthday');
              break;
            default:
              break;
          }
          break;
        case 'recurrenceEnds':
          if (value === 'count') {
            formValues.count = 1;
            formValues.until = null;
          }
          if (value === 'until') {
            formValues.until = this.getDefaultUntil(formValues.freq);
            formValues.count = null; //default value
          }
          break;
        case 'byweekday':
          formValues.byweekday = value;
          if (_Utils__WEBPACK_IMPORTED_MODULE_20__.FREQUENCES.WEEKLY !== formValues.freq) {
            formValues.weekdayOfTheMonth = value ? value[0].weekday : null;
            formValues.weekdayOfTheMonthIndex = value ? value[0].n : null;
          } else {
            delete formValues.weekdayOfTheMonth;
            delete formValues.weekdayOfTheMonthIndex;
          }
          break;
        case 'weekdayOfTheMonth':
          var weekday = this.getWeekday(value); // get new day
          var n = byweekday ? byweekday[0].n : 1;
          //set nth value
          formValues.byweekday = weekday ? [weekday.nth(n)] : null;
          break;
        case 'weekdayOfTheMonthIndex':
          var week_day = byweekday ? byweekday[0] : currWeekday; //get day from state. If not set get current day
          //set nth value
          formValues.byweekday = value ? [week_day.nth(value)] : null;
          break;
        case 'monthOfTheYear':
          if (value === null || value === undefined) {
            delete formValues.bymonth;
          } else {
            formValues.bymonth = [value];
          }
          break;
        case 'monthly':
          if (value === 'bymonthday') {
            formValues.bymonthday = [defaultMonthDay]; //default value
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }
          if (value === 'byweekday') {
            formValues.bymonthday = null; //default value
            formValues = this.changeField(formValues, 'byweekday', [currWeekday.nth(1)]); //default value
          }
          if (value === null) {
            formValues = this.changeField(formValues, 'bymonthday', null); //default value
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }
          break;
        case 'yearly':
          if (value === 'bymonthday') {
            //sets bymonth and bymonthday in rruleset
            formValues.bymonthday = [defaultMonthDay]; //default value

            formValues = this.changeField(formValues, 'monthOfTheYear', startMonth); //default value: current month
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }
          if (value === 'byday') {
            formValues = this.changeField(formValues, 'bymonthday', null); //default value
            formValues = this.changeField(formValues, 'byweekday', [startWeekday.nth(1)]); //default value
            formValues = this.changeField(formValues, 'monthOfTheYear', startMonth); //default value
          }
          break;
        default:
          break;
      }
      return formValues;
    });
    _defineProperty(this, "onChangeRule", (field, value) => {
      var formValues = Object.assign({}, this.state.formValues);
      formValues = this.changeField(formValues, field, value);
      this.setState(prevState => {
        var rruleSet = prevState.rruleSet;
        rruleSet = this.updateRruleSet(rruleSet, formValues, field, value);
        return _objectSpread(_objectSpread({}, prevState), {}, {
          rruleSet,
          formValues
        });
      });
    });
    _defineProperty(this, "exclude", date => {
      let list = this.state.rruleSet.exdates().slice(0);
      list.push(date);
      this.onChangeRule('exdates', list);
    });
    _defineProperty(this, "undoExclude", date => {
      let list = this.state.rruleSet.exdates().slice(0);
      lodash_remove__WEBPACK_IMPORTED_MODULE_9___default()(list, e => {
        return e.getTime() === date.getTime();
      });
      this.onChangeRule('exdates', list);
    });
    _defineProperty(this, "addDate", date => {
      const moment = this.moment;
      let all = lodash_concat__WEBPACK_IMPORTED_MODULE_8___default()(this.state.rruleSet.all(), this.state.rruleSet.exdates());
      var simpleDate = moment(new Date(date)).startOf('day').toDate().getTime();
      var exists = lodash_find__WEBPACK_IMPORTED_MODULE_7___default()(all, e => {
        var d = moment(e).startOf('day').toDate().getTime();
        return d === simpleDate;
      });
      if (!exists) {
        let list = this.state.rruleSet.rdates().slice(0);
        list.push(new Date(date));
        this.onChangeRule('rdates', list);
      }
    });
    _defineProperty(this, "saveRrule", () => {
      var value = this.state.rruleSet.toString();
      this.props.onChange(this.props.id, value);
    });
    _defineProperty(this, "save", () => {
      this.saveRrule();
      this.close();
    });
    _defineProperty(this, "remove", () => {
      const {
        RRuleSet
      } = this.props.rrule;
      this.props.onChange(this.props.id, null);
      let rruleSet = new RRuleSet();
      this.setState({
        rruleSet: rruleSet,
        formValues: this.getFormValues(rruleSet)
      });
    });
    const {
      RRuleSet: _RRuleSet,
      rrulestr
    } = props.rrule;
    this.moment = this.props.moment.default;
    this.moment.locale((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_15__.toBackendLang)(this.props.lang));
    let _rruleSet = this.props.value ? rrulestr(props.value, {
      compatible: true,
      //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
      forceset: true
      // dtstart: props.formData.start
      //   ? this.getUTCDate(props.formData.start)
      //       .startOf('day')
      //       .toDate()
      //   : null,
    }) : new _RRuleSet();
    this.state = {
      open: false,
      rruleSet: _rruleSet,
      formValues: this.getFormValues(_rruleSet),
      RRULE_LANGUAGE: (0,_Utils__WEBPACK_IMPORTED_MODULE_20__.rrulei18n)(this.props.intl, this.moment, (0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_15__.toBackendLang)(this.props.lang))
    };
  }
  componentDidMount() {
    if (this.props.value) {
      this.setRecurrenceStartEnd();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.value) {
      var _prevProps$formData, _this$props$formData7, _prevProps$formData2, _this$props$formData8;
      const changedStart = ((_prevProps$formData = prevProps.formData) === null || _prevProps$formData === void 0 ? void 0 : _prevProps$formData.start) !== ((_this$props$formData7 = this.props.formData) === null || _this$props$formData7 === void 0 ? void 0 : _this$props$formData7.start);
      const changedEnd = ((_prevProps$formData2 = prevProps.formData) === null || _prevProps$formData2 === void 0 ? void 0 : _prevProps$formData2.end) !== ((_this$props$formData8 = this.props.formData) === null || _this$props$formData8 === void 0 ? void 0 : _this$props$formData8.end);
      if (changedStart || changedEnd) {
        var _this$props$formData9;
        let start = this.getUTCDate((_this$props$formData9 = this.props.formData) === null || _this$props$formData9 === void 0 ? void 0 : _this$props$formData9.start).toDate();
        let changeFormValues = {};
        if (changedEnd) {
          var _this$props$formData0;
          changeFormValues.until = this.getUTCDate((_this$props$formData0 = this.props.formData) === null || _this$props$formData0 === void 0 ? void 0 : _this$props$formData0.end).toDate();
        }
        this.setState(prevState => {
          let rruleSet = prevState.rruleSet;
          rruleSet = this.updateRruleSet(rruleSet, _objectSpread(_objectSpread({}, prevState.formValues), changeFormValues), 'dtstart', start);
          return _objectSpread(_objectSpread({}, prevState), {}, {
            rruleSet
          });
        }, () => {
          //then, after set state, set recurrence rrule value
          this.saveRrule();
        });
      }
    }
  }
  render() {
    var _rruleSet$rrules$;
    const {
      open,
      dimmer,
      rruleSet,
      formValues,
      RRULE_LANGUAGE
    } = this.state;
    const {
      id,
      title,
      required,
      description,
      error,
      fieldSet,
      intl
    } = this.props;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Form.Field, {
      inline: true,
      required: required,
      error: error.length > 0,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('recurrence-widget', description ? 'help' : ''),
      id: `${fieldSet || 'field'}-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid.Row, {
      stretched: true,
      verticalAlign: "middle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 803,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid.Column, {
      width: "4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 15
      }
    }, __jsx("label", {
      htmlFor: `field-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806,
        columnNumber: 17
      }
    }, title))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid.Column, {
      width: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 13
      }
    }, rruleSet.rrules()[0] && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 812,
        columnNumber: 19
      }
    }, (_rruleSet$rrules$ = rruleSet.rrules()[0]) === null || _rruleSet$rrules$ === void 0 ? void 0 : _rruleSet$rrules$.toText(t => {
      return RRULE_LANGUAGE.strings[t];
    }, RRULE_LANGUAGE, RRULE_LANGUAGE.dateFormatter)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 19
      }
    }, __jsx(_Occurences__WEBPACK_IMPORTED_MODULE_26__["default"], {
      rruleSet: rruleSet,
      exclude: this.exclude,
      undoExclude: this.undoExclude,
      showTitle: false,
      editOccurences: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 21
      }
    }))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
      basic: true,
      disabled: this.props.isDisabled,
      color: "blue",
      className: "edit-recurrence",
      onClick: this.show('blurring'),
      type: "button",
      "aria-label": intl.formatMessage(messages.editRecurrence),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: (_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_18___default()),
      size: "20px",
      title: intl.formatMessage(messages.editRecurrence),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 19
      }
    })), this.props.value && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
      basic: true,
      color: "pink",
      className: "remove-recurrence",
      onClick: () => {
        this.remove();
      },
      type: "button",
      "aria-label": intl.formatMessage(messages.remove),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_19___default()),
      size: "20px",
      title: intl.formatMessage(messages.remove),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 21
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal, {
      dimmer: dimmer,
      open: open,
      onClose: this.close,
      className: "recurrence-form",
      closeIcon: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal.Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 17
      }
    }, intl.formatMessage(messages.editRecurrence), ' '), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal.Content, {
      scrolling: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 17
      }
    }, rruleSet.rrules().length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal.Description, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Form, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components_manage_Widgets_SelectWidget__WEBPACK_IMPORTED_MODULE_14__["default"], {
      id: "freq",
      title: intl.formatMessage(messages.repeat),
      getVocabulary: () => {},
      getVocabularyTokenTitle: () => {},
      choices: Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences).map(t => {
        return [t, intl.formatMessage(messages[t])];
      }),
      value: formValues.freq,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 27
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[formValues.freq].interval && __jsx(_IntervalField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: intl.formatMessage(messages.repeatEvery),
      labelAfter: formValues.freq && intl.formatMessage(messages['interval_' + formValues.freq]),
      value: formValues.interval,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[formValues.freq].byday && __jsx(_ByDayField__WEBPACK_IMPORTED_MODULE_22__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.byweekday,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[formValues.freq].bymonth && __jsx(_ByMonthField__WEBPACK_IMPORTED_MODULE_24__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.monthly,
      bymonthday: formValues.bymonthday,
      weekdayOfTheMonthIndex: formValues.weekdayOfTheMonthIndex,
      weekdayOfTheMonth: formValues.weekdayOfTheMonth,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_20__.OPTIONS.frequences[formValues.freq].byyear && __jsx(_ByYearField__WEBPACK_IMPORTED_MODULE_25__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.yearly,
      bymonthday: formValues.bymonthday,
      monthOfTheYear: formValues.monthOfTheYear,
      weekdayOfTheMonthIndex: formValues.weekdayOfTheMonthIndex,
      weekdayOfTheMonth: formValues.weekdayOfTheMonth,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935,
        columnNumber: 29
      }
    }), __jsx(_EndField__WEBPACK_IMPORTED_MODULE_23__["default"], {
      value: formValues.recurrenceEnds,
      count: formValues.count,
      until: formValues.until,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949,
        columnNumber: 27
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 957,
        columnNumber: 23
      }
    }, __jsx(_Occurences__WEBPACK_IMPORTED_MODULE_26__["default"], {
      rruleSet: rruleSet,
      exclude: this.exclude,
      undoExclude: this.undoExclude,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Header, {
      as: "h2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 965,
        columnNumber: 25
      }
    }, intl.formatMessage(messages.add_date)), __jsx(_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "addDate",
      title: intl.formatMessage(messages.select_date_to_add_to_recurrence),
      dateOnly: true,
      noPastDates: true,
      onChange: (id, value) => {
        this.addDate(value === '' ? undefined : value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969,
        columnNumber: 25
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal.Actions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 984,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
      className: "save",
      basic: true,
      onClick: () => {
        this.save();
      },
      "aria-label": intl.formatMessage(messages.save),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_17___default()),
      className: "circled",
      size: "30px",
      title: intl.formatMessage(messages.save),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 21
      }
    })))), lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(error, message => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Label, {
      key: message,
      basic: true,
      color: "red",
      pointing: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 17
      }
    }, message)))), description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid.Column, {
      stretched: true,
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1011,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012,
        columnNumber: 17
      }
    }, description)))));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(RecurrenceWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  formData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(RecurrenceWidget, "defaultProps", {
  description: null,
  required: false,
  error: [],
  value: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_16__.injectLazyLibs)(['moment', 'rrule']), (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => ({
  lang: state.intl.locale
})), react_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl)(RecurrenceWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx"
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\SelectInput.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * SelectInput component.
 * @module components/manage/Widgets/RecurrenceWidget/SelectInput
 */

;





/**
 * SelectInput component class.
 * @function SelectInput
 * @returns {string} Markup of the component.
 */
const SelectInput = ({
  name,
  disabled,
  options,
  value,
  onChange,
  reactSelect
}) => {
  const Select = reactSelect.default;
  const inlineSelectStyles = _objectSpread(_objectSpread({}, _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__.customSelectStyles), {}, {
    control: (styles, state) => _objectSpread(_objectSpread({}, _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__.customSelectStyles.control(styles, state)), {}, {
      minWidth: '130px'
    })
  });
  const getDefaultValue = (choices, value) => {
    const element = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(choices, o => o.value === value);
    return element ? element : {};
  };
  return __jsx(Select, {
    isDisabled: disabled,
    id: name,
    name: name,
    className: "react-select-container",
    classNamePrefix: "react-select",
    defaultValue: getDefaultValue(options, value),
    value: getDefaultValue(options, value),
    options: options,
    styles: inlineSelectStyles,
    theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__.selectTheme,
    components: {
      DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__.DropdownIndicator,
      Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_3__.Option
    },
    onChange: data => onChange(name, data.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  });
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SelectInput.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SelectInput.defaultProps = {
  name: 'select',
  options: [],
  disabled: false,
  value: null,
  onChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__.injectLazyLibs)('reactSelect')(SelectInput));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Days: () => (/* binding */ Days),
/* harmony export */   FREQUENCES: () => (/* binding */ FREQUENCES),
/* harmony export */   MONDAYFRIDAY_DAYS: () => (/* binding */ MONDAYFRIDAY_DAYS),
/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),
/* harmony export */   WEEKLY_DAYS: () => (/* binding */ WEEKLY_DAYS),
/* harmony export */   rrulei18n: () => (/* binding */ rrulei18n),
/* harmony export */   toISOString: () => (/* binding */ toISOString)
/* harmony export */ });
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rrule */ "rrule");
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rrule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);


const Days = {
  MO: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.MO,
  TU: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.TU,
  WE: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.WE,
  TH: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.TH,
  FR: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.FR,
  SA: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.SA,
  SU: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.SU
};
const WEEKLY_DAYS = [Days.MO, Days.TU, Days.WE, Days.TH, Days.FR];
const MONDAYFRIDAY_DAYS = [Days.MO, Days.FR];
const FREQUENCES = {
  DAILY: 'daily',
  MONDAYFRIDAY: 'mondayfriday',
  WEEKDAYS: 'weekdays',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
};
const OPTIONS = {
  frequences: {
    [FREQUENCES.DAILY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.DAILY,
      interval: true
    },
    [FREQUENCES.MONDAYFRIDAY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.WEEKLY
    },
    [FREQUENCES.WEEKDAYS]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.WEEKLY
    },
    [FREQUENCES.WEEKLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.WEEKLY,
      interval: true,
      byday: true
    },
    [FREQUENCES.MONTHLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.MONTHLY,
      interval: true,
      bymonth: true
    },
    [FREQUENCES.YEARLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__.RRule.YEARLY,
      interval: true,
      byyear: true
    }
  }
};
const toISOString = date => {
  return date.toISOString().split('T')[0];
};
const rrulei18n = (intl, moment, lang) => {
  moment.locale(lang);
  const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
    every: {
      id: 'rrule_every',
      defaultMessage: 'every'
    },
    until: {
      id: 'rrule_until',
      defaultMessage: 'until'
    },
    for: {
      id: 'rrule_for',
      defaultMessage: 'for'
    },
    time: {
      id: 'rrule_time',
      defaultMessage: 'time'
    },
    times: {
      id: 'rrule_times',
      defaultMessage: 'times'
    },
    '(~ approximate)': {
      id: 'rrule_approximate',
      defaultMessage: '(~approximate)'
    },
    hour: {
      id: 'rrule_hour',
      defaultMessage: 'hour'
    },
    hours: {
      id: 'rrule_hours',
      defaultMessage: 'hours'
    },
    minutes: {
      id: 'rrule_minutes',
      defaultMessage: 'minutes'
    },
    weekdays: {
      id: 'rrule_weekdays',
      defaultMessage: 'weekdays'
    },
    weekday: {
      id: 'rrule_weekday',
      defaultMessage: 'weekday'
    },
    day: {
      id: 'rrule_day',
      defaultMessage: 'day'
    },
    days: {
      id: 'rrule_days',
      defaultMessage: 'days'
    },
    in: {
      id: 'rrule_in',
      defaultMessage: 'in'
    },
    week: {
      id: 'rrule_week',
      defaultMessage: 'week'
    },
    weeks: {
      id: 'rrule_weeks',
      defaultMessage: 'weeks'
    },
    month: {
      id: 'rrule_month',
      defaultMessage: 'month'
    },
    months: {
      id: 'rrule_months',
      defaultMessage: 'months'
    },
    on: {
      id: 'rrule_on',
      defaultMessage: 'on'
    },
    year: {
      id: 'rrule_year',
      defaultMessage: 'year'
    },
    years: {
      id: 'rrule_years',
      defaultMessage: 'years'
    },
    'on the': {
      id: 'rrule_on the',
      defaultMessage: 'on the'
    },
    the: {
      id: 'rrule_the',
      defaultMessage: 'the'
    },
    and: {
      id: 'rrule_and',
      defaultMessage: 'and'
    },
    or: {
      id: 'rrule_or',
      defaultMessage: 'or'
    },
    at: {
      id: 'rrule_at',
      defaultMessage: 'at'
    },
    last: {
      id: 'rrule_last',
      defaultMessage: 'last'
    },
    st: {
      id: 'rrule_st',
      defaultMessage: 'st'
    },
    nd: {
      id: 'rrule_nd',
      defaultMessage: 'nd'
    },
    rd: {
      id: 'rrule_rd',
      defaultMessage: 'rd'
    },
    th: {
      id: 'rrule_th',
      defaultMessage: 'th'
    },
    dateFormat: {
      id: 'rrule_dateFormat',
      defaultMessage: '[month] [day], [year]'
    }
  });
  let strings = {};
  Object.keys(messages).map(k => strings[k] = intl.formatMessage(messages[k]));
  let dateFormat = strings.dateFormat.replace(new RegExp('\\[', 'g'), '${').replace(new RegExp('\\]', 'g'), '}');
  const dateFormatter = (year, month, day) => dateFormat.replace(/\$\{year\}/g, year).replace(/\$\{month\}/g, month).replace(/\$\{day\}/g, day);
  const LANGUAGE = {
    dayNames: moment.weekdays(),
    monthNames: moment.months(),
    strings: strings,
    dateFormatter: dateFormatter
  };
  return LANGUAGE;
};

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\WeekdayOfTheMonthField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WeekdayOfTheMonthField component.
 * @module components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField
 */

;








/**
 * WeekdayOfTheMonthField component class.
 * @function WeekdayOfTheMonthField
 * @returns {string} Markup of the component.
 */

const WeekdayOfTheMonthField = props => {
  const {
    disabled = false,
    moment: momentlib
  } = props;
  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.intl.locale);
  const moment = momentlib.default;
  moment.locale((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__.toBackendLang)(lang));
  const weekdayOfTheMonthList = [...lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_2__.Days), d => ({
    value: _Utils__WEBPACK_IMPORTED_MODULE_2__.Days[d].weekday,
    label: moment.weekdays(_Utils__WEBPACK_IMPORTED_MODULE_2__.Days[d].weekday + 1)
  }))];
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    name: "weekdayOfTheMonth",
    options: weekdayOfTheMonthList
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_6__.injectLazyLibs)(['moment'])(WeekdayOfTheMonthField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RecurrenceWidget\\WeekdayOfTheMonthIndexField.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WeekdayOfTheMonthIndexField component.
 * @module components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField
 */

;






/**
 * WeekdayOfTheMonthIndexField component class.
 * @function WeekdayOfTheMonthIndexField
 * @returns {string} Markup of the component.
 */

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  bymonthDayNumber: {
    id: 'Weeek day of month',
    defaultMessage: 'The'
  },
  first: {
    id: 'First',
    defaultMessage: 'First'
  },
  second: {
    id: 'Second',
    defaultMessage: 'Second'
  },
  third: {
    id: 'Third',
    defaultMessage: 'Third'
  },
  fourth: {
    id: 'Fourth',
    defaultMessage: 'Fourth'
  },
  last: {
    id: 'Last',
    defaultMessage: 'Last'
  }
});
const ORDINAL_NUMBERS = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  '-1': 'last'
};
class WeekdayOfTheMonthIndexField extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      intl,
      disabled
    } = this.props;
    const weekdayOfTheMonthIndexList = [...lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(Object.keys(ORDINAL_NUMBERS), option => ({
      value: parseInt(option),
      label: intl.formatMessage(messages[ORDINAL_NUMBERS[option]])
    }))];
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
      disabled: disabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, intl.formatMessage(messages.bymonthDayNumber)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {
      disabled: disabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      name: "weekdayOfTheMonthIndex",
      options: weekdayOfTheMonthIndexList
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }))));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(WeekdayOfTheMonthIndexField, "propTypes", {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(WeekdayOfTheMonthIndexField, "defaultProps", {
  disabled: false,
  value: null,
  onChange: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(WeekdayOfTheMonthIndexField));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/ReferenceWidget.jsx"
/*!*************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/ReferenceWidget.jsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/compact */ "lodash/compact");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/fromPairs */ "lodash/fromPairs");
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/values */ "lodash/values");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/uniqBy */ "lodash/uniqBy");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/actions/search/search */ "./node_modules/@plone/volto/src/actions/search/search.js");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\ReferenceWidget.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  no_results_found: {
    id: 'No results found.',
    defaultMessage: 'No results found.'
  },
  no_value: {
    id: 'No value',
    defaultMessage: 'No value'
  }
});
const ReferenceWidget = props => {
  const {
    id,
    title,
    value,
    multiple,
    onChange
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const search = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.search.items);
  const {
    0: choices,
    1: setChoices
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value ? multiple ? lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default()(lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(value, value => [value['@id'], {
    key: value['@id'],
    text: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(value['@id']),
    value: value['@id'],
    label: {
      content: value.title
    },
    data: value
  }])) : {
    [value['@id']]: {
      key: value['@id'],
      text: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(value),
      value: value['@id'],
      label: {
        content: value.title
      },
      data: value
    },
    novalue: {
      key: 'novalue',
      text: intl.formatMessage(messages.no_value),
      value: 'novalue',
      data: null
    }
  } : {});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__.resetSearchContent)());
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setChoices(_objectSpread(_objectSpread({}, lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default()(lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default()(lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(lodash_compact__WEBPACK_IMPORTED_MODULE_4___default()(lodash_concat__WEBPACK_IMPORTED_MODULE_5___default()(value, search)), item => _objectSpread(_objectSpread({}, item), {}, {
      '@id': (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(item['@id'])
    })), '@id'), value => [value['@id'], {
      key: value['@id'],
      text: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(value['@id']),
      value: value['@id'],
      label: {
        content: value.title
      },
      data: value
    }]))), {}, {
      novalue: {
        key: 'novalue',
        text: intl.formatMessage(messages.no_value),
        value: 'novalue',
        data: null
      }
    }));
  }, [intl, search, value]);
  const onSearchChange = (event, data) => {
    if (data.searchQuery && data.searchQuery !== '') {
      dispatch((0,_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__.searchContent)('', {
        Title: `*${data.searchQuery}*`
      }));
    } else {
      dispatch((0,_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_12__.resetSearchContent)());
    }
  };
  const renderLabel = (item, index, defaultProps) => {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Popup, {
      key: item.value,
      content: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "home",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }), " ", item.value),
      trigger: defaultProps && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Label, {
        active: defaultProps.active,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, item.label.content, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "delete",
        onClick: event => {
          defaultProps.onRemove(event, defaultProps);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      })),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }
    });
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    options: lodash_values__WEBPACK_IMPORTED_MODULE_8___default()(choices),
    placeholder: title,
    search: true,
    selection: true,
    fluid: true,
    noResultsMessage: intl.formatMessage(messages.no_results_found),
    multiple: multiple,
    value: multiple ? value ? lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(value, item => item && item['@id'] ? (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(item['@id']) : item) : [] : value ? (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_13__.flattenToAppURL)(value['@id']) : '',
    onChange: (event, data) => {
      return onChange(id, multiple ? lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(data.value, item => choices[item].data) : choices[data.value].data);
    },
    onSearchChange: onSearchChange,
    renderLabel: renderLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }));
};
ReferenceWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ReferenceWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  multiple: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferenceWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RegistryImageWidget.jsx"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RegistryImageWidget.jsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! promise-file-reader */ "promise-file-reader");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(promise_file_reader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var _plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/Image/Image */ "./node_modules/@plone/volto/src/components/theme/Image/Image.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\RegistryImageWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RegistryImageWidget component.
 * @module components/manage/Widgets/RegistryImageWidget
 */

;












const imageMimetypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg', 'image/gif', 'image/svg+xml'];
const Dropzone = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.resolve(/*! import() */).then(() => (__webpack_require__.t(/*! react-dropzone */ "react-dropzone", 23))));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  releaseDrag: {
    id: 'Drop files here ...',
    defaultMessage: 'Drop files here ...'
  },
  editFile: {
    id: 'Drop file here to replace the existing file',
    defaultMessage: 'File upload area. Press Enter or click to replace the existing file'
  },
  fileDrag: {
    id: 'Drop file here to upload a new file',
    defaultMessage: 'File upload area. Press Enter or click to open the file browser'
  },
  replaceFile: {
    id: 'Replace existing file',
    defaultMessage: 'Replace existing file'
  },
  addNewFile: {
    id: 'Choose a file',
    defaultMessage: 'Choose a file'
  }
});

/**
 * RegistryImageWidget component class.
 * @function RegistryImageWidget
 * @returns {string} Markup of the component.
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "File",
 *  widget: 'file',
 * }
 * ```
 * or:
 *
 * ```jsx
 * {
 *  title: "File",
 *  type: 'object',
 * }
 * ```
 *
 */
const RegistryImageWidget = props => {
  const {
    id,
    value,
    onChange,
    isDisabled
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();

  // State to manage the preview image source
  const {
    0: previewSrc,
    1: setPreviewSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const fileName = value === null || value === void 0 ? void 0 : value.split(';')[0];
    return fileName ? `${(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_9__.toPublicURL)('/')}@@site-logo/${atob(fileName.replace('filenameb64:', ''))}` : '';
  });

  /**
   * Drop handler
   * @method onDrop
   * @param {array} files File objects
   * @returns {undefined}
   */
  const onDrop = files => {
    const file = files[0];
    if (!(0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_10__.validateFileUploadSize)(file, intl.formatMessage)) return;
    (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_3__.readAsDataURL)(file).then(data => {
      const fields = data.match(/^data:(.*);(.*),(.*)$/);
      onChange(id, `filenameb64:${btoa(file.name)};datab64:${fields[3]}`);
    });
    let reader = new FileReader();
    reader.onload = function () {
      const fields = reader.result.match(/^data:(.*);(.*),(.*)$/);
      if (imageMimetypes.includes(fields[1])) {
        setPreviewSrc(reader.result);
      }
    };
    reader.readAsDataURL(files[0]);
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }), __jsx(Dropzone, {
    onDrop: onDrop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, ({
    getRootProps,
    getInputProps,
    isDragActive
  }) => __jsx("div", _extends({
    className: "file-widget-dropzone"
  }, getRootProps(), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }), isDragActive && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dimmer, {
    active: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 30
    }
  }), previewSrc ? __jsx(_plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "image-preview small ui image",
    id: `field-${id}-image`,
    src: previewSrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }) : __jsx("div", {
    className: "dropzone-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, isDragActive ? __jsx("p", {
    className: "dropzone-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, intl.formatMessage(messages.releaseDrag)) : value ? __jsx("p", {
    className: "dropzone-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, intl.formatMessage(messages.editFile)) : __jsx("p", {
    className: "dropzone-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, intl.formatMessage(messages.fileDrag))), __jsx("label", {
    className: "label-file-widget-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, value ? intl.formatMessage(messages.replaceFile) : intl.formatMessage(messages.addNewFile)), __jsx("input", _extends({}, getInputProps({
    type: 'file',
    style: {
      display: 'none'
    }
  }), {
    id: `field-${id}`,
    name: id,
    type: "file",
    disabled: isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "field-file-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, value && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: true,
    basic: true,
    className: "delete-button",
    "aria-label": "delete file",
    disabled: isDisabled,
    onClick: () => {
      onChange(id, '');
      setPreviewSrc(''); // Clear the preview image
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
RegistryImageWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
RegistryImageWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(RegistryImageWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidget.jsx"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidget.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/findIndex */ "lodash/findIndex");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/slice */ "lodash/slice");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/without */ "lodash/without");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-move */ "lodash-move");
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_move__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SchemaWidgetFieldset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SchemaWidgetFieldset */ "./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidgetFieldset.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\SchemaWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * SchemaWidget component.
 * @module components/manage/Widgets/SchemaWidget
 */

;





















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.defineMessages)({
  add: {
    id: 'Add',
    defaultMessage: 'Add'
  },
  addField: {
    id: 'Add field',
    defaultMessage: 'Add field'
  },
  addFieldset: {
    id: 'Add fieldset',
    defaultMessage: 'Add fieldset'
  },
  parentFieldSet: {
    id: 'Parent fieldset',
    defaultMessage: 'Parent fieldset'
  },
  editField: {
    id: 'Edit field',
    defaultMessage: 'Edit field'
  },
  editFieldset: {
    id: 'Edit fieldset',
    defaultMessage: 'Edit fieldset'
  },
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  defaultValue: {
    id: 'Default value',
    defaultMessage: 'Default value'
  },
  placeholder: {
    id: 'Placeholder',
    defaultMessage: 'Placeholder'
  },
  idTitle: {
    id: 'Short Name',
    defaultMessage: 'Short Name'
  },
  idDescription: {
    id: 'Used for programmatic access to the fieldset.',
    defaultMessage: 'Used for programmatic access to the fieldset.'
  },
  choices: {
    id: 'Possible values',
    defaultMessage: 'Possible values (Enter allowed choices one per line).'
  },
  string: {
    id: 'String',
    defaultMessage: 'String'
  },
  text: {
    id: 'Text',
    defaultMessage: 'Text'
  },
  richtext: {
    id: 'Richtext',
    defaultMessage: 'Richtext'
  },
  checkbox: {
    id: 'Checkbox',
    defaultMessage: 'Checkbox'
  },
  selection: {
    id: 'Selection',
    defaultMessage: 'Selection'
  },
  type: {
    id: 'Type',
    defaultMessage: 'Type'
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title'
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description'
  },
  queryParameterName: {
    id: 'Query Parameter Name',
    defaultMessage: 'Query Parameter Name'
  },
  queryParameterNameDescription: {
    id: 'Fills the value of the form field with the value supplied by a query parameter inside the URL with the given name.',
    defaultMessage: 'Fills the value of the form field with the value supplied by a query parameter inside the URL with the given name.'
  },
  required: {
    id: 'Required',
    defaultMessage: 'Required'
  },
  minLength: {
    id: 'minLength',
    defaultMessage: 'Minimum Length'
  },
  maxLength: {
    id: 'maxLength',
    defaultMessage: 'Maximum Length'
  },
  minimum: {
    id: 'minimum',
    defaultMessage: 'Start of the range'
  },
  maximum: {
    id: 'maximum',
    defaultMessage: 'End of the range (including the value itself)'
  },
  size: {
    id: 'size',
    defaultMessage: 'Maximum size of the file in bytes'
  },
  accept: {
    id: 'accept',
    defaultMessage: 'File types allowed'
  },
  deleteFieldset: {
    id: 'Are you sure you want to delete this fieldset including all fields?',
    defaultMessage: 'Are you sure you want to delete this fieldset including all fields?'
  },
  deleteField: {
    id: 'Are you sure you want to delete this field?',
    defaultMessage: 'Are you sure you want to delete this field?'
  },
  error: {
    id: 'Error',
    defaultMessage: 'Error'
  }
});

/**
 * Makes a list of fieldset types formatted for select widget
 * @param {Object[]} listOfTypes array of strings
 * @param {*} intl
 * @returns {Object[]} example [['default', 'default']]
 */
const makeFieldsetList = (listOfFieldsets, intl) => {
  const result = listOfFieldsets.map(type => [type.id, type.title]);
  return result;
};

// Register field factory properties utilities

_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'Rich Text',
  type: 'fieldFactoryProperties',
  method: intl => ({
    maxLength: {
      type: 'integer',
      title: intl.formatMessage(messages.maxLength)
    },
    default: {
      title: intl.formatMessage(messages.defaultValue),
      widget: 'richtext',
      type: 'string'
    }
  })
});
['URL', 'Password', 'label_password_field', 'Email', 'label_email'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      minLength: {
        type: 'integer',
        title: intl.formatMessage(messages.minLength)
      },
      maxLength: {
        type: 'integer',
        title: intl.formatMessage(messages.maxLength)
      },
      default: {
        type: 'string',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['Integer', 'label_integer_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      minimum: {
        type: 'integer',
        title: intl.formatMessage(messages.minimum)
      },
      maximum: {
        type: 'integer',
        title: intl.formatMessage(messages.maximum)
      },
      default: {
        type: 'integer',
        title: intl.formatMessage(messages.default)
      }
    })
  });
});
['Floating-point number', 'label_float_field', 'JSONField', 'Relation Choice', 'Relation List'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({})
  });
});
['Yes/No', 'label_boolean_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      default: {
        type: 'string',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['Date/Time', 'label_datetime_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      default: {
        type: 'string',
        widget: 'datetime',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['Date', 'label_date_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      default: {
        type: 'string',
        widget: 'date',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['time'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      default: {
        type: 'string',
        widget: 'time',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['File', 'File Upload', 'Image'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      size: {
        type: 'integer',
        title: intl.formatMessage(messages.size)
      },
      accept: {
        type: 'string',
        title: intl.formatMessage(messages.accept)
      }
    })
  });
});
['Multiple Choice', 'label_multi_choice_field', 'checkbox_group'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      values: {
        type: 'string',
        title: intl.formatMessage(messages.choices),
        widget: 'textarea'
      },
      default: {
        type: 'string',
        widget: 'textarea',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
['Choice', 'label_choice_field', 'radio_group'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryProperties',
    method: intl => ({
      values: {
        type: 'string',
        title: intl.formatMessage(messages.choices),
        widget: 'textarea'
      },
      default: {
        type: 'string',
        title: intl.formatMessage(messages.defaultValue)
      }
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'static_text',
  type: 'fieldFactoryProperties',
  method: intl => ({
    default: {
      title: intl.formatMessage(messages.text),
      widget: 'richtext',
      type: 'string'
    }
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'number',
  type: 'fieldFactoryProperties',
  method: intl => ({
    default: {
      type: 'number',
      title: intl.formatMessage(messages.defaultValue)
    }
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'hidden',
  type: 'fieldFactoryProperties',
  method: intl => ({
    default: {
      type: 'string',
      title: intl.formatMessage(messages.defaultValue)
    }
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'textarea',
  type: 'fieldFactoryProperties',
  method: intl => ({
    minLength: {
      type: 'integer',
      title: intl.formatMessage(messages.minLength)
    },
    maxLength: {
      type: 'integer',
      title: intl.formatMessage(messages.maxLength)
    },
    default: {
      type: 'string',
      widget: 'textarea',
      title: intl.formatMessage(messages.defaultValue)
    },
    placeholder: {
      type: 'string',
      title: intl.formatMessage(messages.placeholder)
    }
  })
});

// Register field factory initial data utilities

['Date/Time', 'label_datetime_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'string',
      widget: 'datetime',
      factory
    })
  });
});
['Date', 'label_date_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'string',
      widget: 'date',
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'time',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    widget: 'time',
    factory: 'time'
  })
});
['Email', 'label_email'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'string',
      widget: 'email',
      id: 'email',
      factory
    })
  });
});
['File', 'File Upload'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'object',
      factory
    })
  });
});
['Floating-point number', 'label_float_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'number',
      factory
    })
  });
});
['Integer', 'label_integer_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'integer',
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'Image',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'object',
    factory: 'Image'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'JSONField',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'dict',
    widget: 'json',
    factory: 'JSONField'
  })
});
['Multiple Choice', 'label_multi_choice_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'array',
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'Relation List',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'array',
    factory: 'Relation List'
  })
});
['Choice', 'label_choice_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'string',
      choices: [],
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'Relation Choice',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    factory: 'Relation Choice'
  })
});
['Password', 'label_password_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'string',
      widget: 'password',
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'Rich Text',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    widget: 'richtext',
    factory: 'Rich Text'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'URL',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    widget: 'url',
    factory: 'URL'
  })
});
['Yes/No', 'label_boolean_field'].forEach(factory => {
  _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
    name: factory,
    type: 'fieldFactoryInitialData',
    method: intl => ({
      type: 'boolean',
      factory
    })
  });
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'static_text',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'object',
    widget: 'static_text',
    factory: 'static_text'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'hidden',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    widget: 'hidden',
    factory: 'hidden'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'number',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'number',
    factory: 'number'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'radio_group',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    choices: [],
    widget: 'radio_group',
    factory: 'radio_group'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'checkbox_group',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'array',
    widget: 'checkbox_group',
    factory: 'checkbox_group'
  })
});
_plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].registerUtility({
  name: 'textarea',
  type: 'fieldFactoryInitialData',
  method: intl => ({
    type: 'string',
    widget: 'textarea',
    factory: 'textarea'
  })
});

/**
 * schemaField used for modal form, when editing a field
 * - based on the factory a set of fields is presented
 * - fields can be moved to another fieldset
 * @param {string} factory - the kind of field
 * @param {Object} intl
 * @param {*} fieldsets
 * @param {Boolean} allowEditId
 * @param {Boolean} allowEditQueryParameter
 * @param {Boolean} allowEditPlaceholder
 * @param {Object} extraFields
 * @return {Object} - schema
 */
const schemaField = (factory, intl, fieldsets, allowEditId, allowEditQueryParameter, allowEditPlaceholder, extraFields = {}) => {
  const utility = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].getUtility({
    name: factory,
    type: 'fieldFactoryProperties'
  });
  const properties = utility.method ? utility.method(intl) : _objectSpread({
    minLength: {
      type: 'integer',
      title: intl.formatMessage(messages.minLength)
    },
    maxLength: {
      type: 'integer',
      title: intl.formatMessage(messages.maxLength)
    },
    default: {
      type: 'string',
      title: intl.formatMessage(messages.defaultValue)
    }
  }, allowEditPlaceholder ? {
    placeholder: {
      type: 'string',
      title: intl.formatMessage(messages.placeholder)
    }
  } : {});
  return {
    fieldsets: [{
      id: 'default',
      title: 'default',
      fields: [...lodash_keys__WEBPACK_IMPORTED_MODULE_9___default()(extraFields), ...(allowEditId ? ['id'] : []), ...['title', 'description', 'parentFieldSet'], ...(allowEditQueryParameter ? ['queryParameterName'] : []), ...lodash_keys__WEBPACK_IMPORTED_MODULE_9___default()(properties), ...['required']]
    }],
    properties: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, extraFields), allowEditId ? {
      id: {
        type: 'string',
        title: intl.formatMessage(messages.idTitle)
      }
    } : {}), {}, {
      title: {
        type: 'string',
        title: intl.formatMessage(messages.title)
      },
      description: {
        type: 'string',
        widget: 'textarea',
        title: intl.formatMessage(messages.description)
      },
      parentFieldSet: {
        type: 'string',
        title: intl.formatMessage(messages.parentFieldSet),
        choices: makeFieldsetList(fieldsets)
      }
    }, allowEditQueryParameter ? {
      queryParameterName: {
        type: 'string',
        title: intl.formatMessage(messages.queryParameterName),
        description: intl.formatMessage(messages.queryParameterNameDescription)
      }
    } : {}), {}, {
      required: {
        type: 'boolean',
        title: intl.formatMessage(messages.required)
      }
    }, properties),
    required: ['type', 'title']
  };
};

/**
 * schema for adding a new field
 * @param {Object} intl
 */
const fieldsetSchema = intl => ({
  fieldsets: [{
    id: 'default',
    title: intl.formatMessage(messages.default),
    fields: ['title', 'id']
  }],
  properties: {
    id: {
      type: 'string',
      title: intl.formatMessage(messages.idTitle),
      description: intl.formatMessage(messages.idDescription)
    },
    title: {
      type: 'string',
      title: intl.formatMessage(messages.title)
    }
  },
  required: ['id', 'title']
});

/**
 * 'plone.dexterity.schema.generated' is considered user created
 * @param {Object} field
 */
const isEditable = field => !field.behavior || field.behavior.includes('generated');
const getItemStyle = (isDragging, draggableStyle) => _objectSpread({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // change background colour if dragging
  background: isDragging ? 'white' : 'transparent'
}, draggableStyle);
const getTabStyle = isDraggingOver => ({
  background: isDraggingOver ? '#f4f4f4' : 'transparent',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});
const getFieldStyle = isDraggingOver => ({
  background: isDraggingOver ? '#f4f4f4' : 'transparent'
});

/**
 * will transform a string with new lines in an array for each item on a line
 * @param {string} textarea - has '\r\n' characters
 */
const formatTextareaToArray = textarea => {
  const values = textarea && textarea ? textarea.split(/(\r\n|\n|\r)/gm).map(elem => elem.trim()).filter(elem => elem !== '') : null;
  return values ? {
    values
  } : {};
};
const formatArrayToTextarea = props => {
  var _props$items;
  if (props !== null && props !== void 0 && props.values) {
    return props.values.join('\n');
  }
  if (props !== null && props !== void 0 && props.choices) {
    return props.choices.map(elem => elem[0]).join('\n');
  }
  if (props !== null && props !== void 0 && (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.choices) {
    return props.items.choices.map(elem => elem[0]).join('\n');
  }
  return '';
};
const formatTextareaToChoices = (textarea, multiple) => {
  const choices = textarea && textarea ? textarea.split(/(\r\n|\n|\r)/gm).map(elem => elem.trim()).filter(elem => elem !== '').map(elem => [elem, elem]) : null;
  if (!multiple) {
    return choices ? {
      choices
    } : {};
  }
  const items = choices ? {
    choices: choices
  } : {};
  return items ? {
    items
  } : {};
};

/**
 * SchemaWidget component class.
 * @class SchemaWidget
 * @extends Component
 */
class SchemaWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeDefaultValue = this.onChangeDefaultValue.bind(this);
    this.onAddField = this.onAddField.bind(this);
    this.onAddFieldset = this.onAddFieldset.bind(this);
    this.onEditField = this.onEditField.bind(this);
    this.onEditFieldset = this.onEditFieldset.bind(this);
    this.onDeleteFieldset = this.onDeleteFieldset.bind(this);
    this.onDeleteField = this.onDeleteField.bind(this);
    this.onShowAddField = this.onShowAddField.bind(this);
    this.onShowAddFieldset = this.onShowAddFieldset.bind(this);
    this.onShowEditFieldset = this.onShowEditFieldset.bind(this);
    this.onShowEditField = this.onShowEditField.bind(this);
    this.onShowDeleteFieldset = this.onShowDeleteFieldset.bind(this);
    this.onShowDeleteField = this.onShowDeleteField.bind(this);
    this.onSetCurrentFieldset = this.onSetCurrentFieldset.bind(this);
    this.onOrderField = this.onOrderField.bind(this);
    this.onOrderFieldset = this.onOrderFieldset.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      addField: null,
      addFieldset: null,
      editFieldset: null,
      editField: null,
      deleteFieldset: null,
      deleteField: null,
      currentFieldset: 0
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getVocabulary({
      vocabNameOrURL: 'Fields',
      size: -1,
      subrequest: 'schemawidget'
    });
  }

  /**
   * Add field handler
   * @method onAddField
   * @param {Object} values Form values
   * @returns {undefined}
   */
  onAddField(values) {
    const fieldId = (0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_18__.slugify)(values.id || values.title, lodash_keys__WEBPACK_IMPORTED_MODULE_9___default()(this.props.value.properties));
    const currentFieldsetFields = this.props.value.fieldsets[this.state.currentFieldset].fields;
    const hasChangeNote = currentFieldsetFields.indexOf('changeNote') > -1;
    const newFieldsetFields = hasChangeNote ? [...currentFieldsetFields.slice(0, currentFieldsetFields.length - 1), fieldId, currentFieldsetFields[currentFieldsetFields.length - 1]] : [...currentFieldsetFields, fieldId];
    const utility = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].getUtility({
      name: values.factory,
      type: 'fieldFactoryInitialData'
    });
    const multiple = values.factory === 'Multiple Choice' || values.factory === 'label_multi_choice_field';
    const initialData = utility.method ? lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(utility.method(this.props.intl), ['id']) : {
      type: 'string',
      factory: values.factory
    };
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, 0, this.state.currentFieldset), _objectSpread(_objectSpread({}, this.props.value.fieldsets[this.state.currentFieldset]), {}, {
        fields: newFieldsetFields
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, this.state.currentFieldset + 1)],
      properties: _objectSpread(_objectSpread({}, this.props.value.properties), {}, {
        [fieldId]: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          id: fieldId
        }, lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(initialData, ['required'])), lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(values, ['factory', 'required', 'id', 'parentFieldset'])), formatTextareaToArray(values.values)), formatTextareaToChoices(values.values, multiple))
      }),
      required: [...this.props.value.required, ...(values.required || initialData.required ? [fieldId] : [])]
    }));
    this.onCancel();
  }

  /**
   * Add fieldset handler
   * @method onAddFieldset
   * @param {Object} values Form values
   * @returns {undefined}
   */
  onAddFieldset(values) {
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...this.props.value.fieldsets, _objectSpread(_objectSpread({}, values), {}, {
        fields: []
      })]
    }));
    this.onCancel();
  }

  /**
   * Edit fieldset handler
   * @method onEditFieldset
   * @param {Object} values Form values
   * @returns {undefined}
   */
  onEditFieldset(values) {
    var _this$props$value$fie;
    values.fields = values.fields || ((_this$props$value$fie = this.props.value.fieldsets[this.state.editFieldset]) === null || _this$props$value$fie === void 0 ? void 0 : _this$props$value$fie.fields) || [];
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, 0, this.state.editFieldset), values, ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, this.state.editFieldset + 1)]
    }));
    this.onCancel();
  }

  /**
   * Recreates the fieldset structure
   * will move change name of the field if needed and
   * change fieldset if changed
   * @param {Object[]} fieldsets
   * @param {string} parentFieldSet - id
   * @param {number} currentFieldset - index
   * @param {Object} oldfieldId
   * @param {Object} newfieldId
   * @returns {Object[]} fieldsets
   */
  editFieldset(fieldsets, parentFieldSet, currentFieldset, oldfieldId, newfieldId) {
    const moveToFieldsetWithNewName = () => {
      const newParentFieldsetIndex = fieldsets.findIndex(field => field.id === parentFieldSet);
      const indexOfChangeNote = fieldsets[newParentFieldsetIndex].fields.indexOf('changeNote');
      // remove from current fieldset
      const fieldsetsWithoutField = [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsets, 0, currentFieldset), _objectSpread(_objectSpread({}, fieldsets[currentFieldset]), {}, {
        fields: fieldsets[currentFieldset].fields.filter(fieldId => fieldId !== oldfieldId)
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsets, currentFieldset + 1)];
      const fieldsOfNewFieldset = indexOfChangeNote > -1 ? [...fieldsetsWithoutField[newParentFieldsetIndex].fields.slice(0, indexOfChangeNote + 1), oldfieldId, fieldsetsWithoutField[newParentFieldsetIndex].fields[indexOfChangeNote]] : [...fieldsetsWithoutField[newParentFieldsetIndex].fields, oldfieldId];

      // add to new fieldset
      const fieldsetsWithField = [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsetsWithoutField, 0, newParentFieldsetIndex), _objectSpread(_objectSpread({}, fieldsetsWithoutField[newParentFieldsetIndex]), {}, {
        fields: fieldsOfNewFieldset
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsetsWithoutField, newParentFieldsetIndex + 1)];
      return fieldsetsWithField;
    };
    const changeNameInFieldset = () => {
      return [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsets, 0, currentFieldset), _objectSpread(_objectSpread({}, fieldsets[currentFieldset]), {}, {
        fields: fieldsets[currentFieldset].fields.map(field => field === oldfieldId ? newfieldId : field)
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(fieldsets, currentFieldset + 1)];
    };
    const result = parentFieldSet !== fieldsets[currentFieldset].id ? moveToFieldsetWithNewName() : changeNameInFieldset();
    return result;
  }

  /**
   * Edit field handler
   * recreates the schema based on field changes (properties, name, fieldset)
   * @method onEditField
   * @param {Object} values Field values
   * @returns {undefined}
   */
  onEditField(values) {
    var _this$props$value$pro, _this$props$value$pro2;
    let formattedValues = _objectSpread({}, values);
    const listOfProp = ['minLength', 'maxLength', 'minimum', 'maximum'];
    listOfProp.forEach(prop => {
      formattedValues = _objectSpread(_objectSpread({}, formattedValues), {
        [prop]: values[prop] ? parseFloat(values[prop]) : undefined
      });
    });
    const multiple = ((_this$props$value$pro = this.props.value.properties[this.state.editField.id]) === null || _this$props$value$pro === void 0 ? void 0 : _this$props$value$pro.factory) === 'Multiple Choice' || ((_this$props$value$pro2 = this.props.value.properties[this.state.editField.id]) === null || _this$props$value$pro2 === void 0 ? void 0 : _this$props$value$pro2.factory) === 'label_multi_choice_field';
    let fieldsets = this.props.value.fieldsets;
    if (this.state.editField.id !== formattedValues.id) {
      this.props.value.fieldsets[this.state.currentFieldset].fields = this.props.value.fieldsets[this.state.currentFieldset].fields.map(field => field === this.state.editField.id ? formattedValues.id : field);
      const index = lodash_isArray__WEBPACK_IMPORTED_MODULE_7___default()(this.props.value.required) ? this.props.value.required.indexOf(formattedValues.id) : -1;
      if (index > -1) {
        this.props.value.required[index] = formattedValues.id;
      }
    }
    if (formattedValues.parentFieldSet) {
      fieldsets = this.editFieldset(this.props.value.fieldsets, formattedValues.parentFieldSet, this.state.currentFieldset, this.state.editField.id, formattedValues.id);
    }
    const result = _objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets,
      properties: _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(this.props.value.properties, [this.state.editField.id])), {}, {
        [formattedValues.id]: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.props.value.properties[this.state.editField.id]), lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(formattedValues, ['parentFieldSet'])), formatTextareaToArray(formattedValues.values)), formatTextareaToChoices(formattedValues.values, multiple))
      }),
      required: formattedValues.required ? lodash_concat__WEBPACK_IMPORTED_MODULE_4___default()(lodash_without__WEBPACK_IMPORTED_MODULE_12___default()(this.props.value.required, this.state.editField.id), [formattedValues.id]) : lodash_without__WEBPACK_IMPORTED_MODULE_12___default()(this.props.value.required, this.state.editField.id)
    });
    this.onChange(result);
    this.onCancel();
  }

  /**
   * Delete fieldset handler
   * @method onDeleteFieldset
   * @returns {undefined}
   */
  onDeleteFieldset() {
    if (this.state.currentFieldset > this.props.value.fieldsets.length - 2) {
      this.setState({
        currentFieldset: this.state.currentFieldset - 1
      });
    }
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, 0, this.state.deleteFieldset), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, this.state.deleteFieldset + 1)],
      properties: lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(this.props.value.properties, this.props.value.fieldsets[this.state.deleteFieldset].fields)
    }));
    this.onCancel();
  }

  /**
   * Delete field handler
   * @method onDeleteField
   * @returns {undefined}
   */
  onDeleteField() {
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, 0, this.state.currentFieldset), _objectSpread(_objectSpread({}, this.props.value.fieldsets[this.state.currentFieldset]), {}, {
        fields: lodash_without__WEBPACK_IMPORTED_MODULE_12___default()(this.props.value.fieldsets[this.state.currentFieldset].fields, this.state.deleteField)
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, this.state.currentFieldset + 1)],
      properties: lodash_omit__WEBPACK_IMPORTED_MODULE_10___default()(this.props.value.properties, [this.state.deleteField]),
      required: lodash_without__WEBPACK_IMPORTED_MODULE_12___default()(this.props.value.required || [], this.state.deleteField)
    }));
    this.onCancel();
  }

  /**
   * Change handler
   * @method onChange
   * @param {Object} value New schema
   * @returns {undefined}
   */
  onChange(value) {
    this.props.onChange(this.props.id, value);
  }

  /**
   * Change default value handler
   * @method onChangeDefaultValue
   * @param {string} fieldId
   * @param {string} fieldValue
   */
  onChangeDefaultValue(fieldId, fieldValue) {
    // Default values can have irreversible consequence, thus skip it for now.
    // const value = { default: fieldValue }
    const value = {};
    const fieldMerge = _objectSpread(_objectSpread({}, this.props.value.properties[fieldId]), value);
    const propsMerge = _objectSpread(_objectSpread({}, this.props.value.properties), {
      [fieldId]: fieldMerge
    });
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      properties: propsMerge
    }));
  }

  /**
   * Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.setState({
      addField: null,
      addFieldset: null,
      editFieldset: null,
      editField: null,
      deleteFieldset: null,
      deleteField: null
    });
  }

  /**
   * Show add field handler
   * @method onShowAddField
   * @returns {undefined}
   */
  onShowAddField(event) {
    this.setState({
      addField: ''
    });
    event.preventDefault();
  }

  /**
   * Show add fieldset handler
   * @method onShowAddFieldset
   * @returns {undefined}
   */
  onShowAddFieldset(event) {
    this.setState({
      addFieldset: true
    });
    event.preventDefault();
  }

  /**
   * Show edit fieldset handler
   * @method onShowEditFieldset
   * @param {Number} index Index of fieldset
   * @returns {undefined}
   */
  onShowEditFieldset(index) {
    this.setState({
      editFieldset: index
    });
  }

  /**
   * Show edit field handler
   * @method onShowEditField
   * @param {string} id Id of field
   * @param {Object} schema Schema of the field
   * @returns {undefined}
   */
  onShowEditField(id, schema) {
    return this.setState({
      editField: {
        id
      }
    });
  }

  /**
   * Show delete fieldset handler
   * @method onShowDeleteFieldset
   * @param {Number} index Index of fieldset
   * @param {Object} event Event object
   * @returns {undefined}
   */
  onShowDeleteFieldset(index) {
    this.setState({
      deleteFieldset: index
    });
  }

  /**
   * Show delete field handler
   * @method onShowDeleteField
   * @param {String} field Field to delete
   * @param {Object} event Event object
   * @returns {undefined}
   */
  onShowDeleteField(field) {
    this.setState({
      deleteField: field
    });
  }

  /**
   * Set current fieldset handler
   * @method onSetCurrentFieldset
   * @param {Number} index Index of fieldset
   * @returns {undefined}
   */
  onSetCurrentFieldset(index) {
    this.setState({
      currentFieldset: index
    });
  }

  /**
   * On order fieldset
   * @method onOrderField
   * @param {number} index Index
   * @param {number} delta Delta
   * @returns {undefined}
   */
  onOrderField(index, delta) {
    this.onChange(_objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: [...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, 0, this.state.currentFieldset), _objectSpread(_objectSpread({}, this.props.value.fieldsets[this.state.currentFieldset]), {}, {
        fields: lodash_move__WEBPACK_IMPORTED_MODULE_13___default()(this.props.value.fieldsets[this.state.currentFieldset].fields, index, delta)
      }), ...lodash_slice__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value.fieldsets, this.state.currentFieldset + 1)]
    }));
  }

  /**
   * On order fieldset
   * @method onOrderFieldset
   * @param {number} index Index
   * @param {number} delta Delta
   * @returns {undefined}
   */
  onOrderFieldset(index, delta) {
    const schema = _objectSpread(_objectSpread({}, this.props.value), {}, {
      fieldsets: lodash_move__WEBPACK_IMPORTED_MODULE_13___default()(this.props.value.fieldsets, index, delta)
    });
    this.setState({
      currentFieldset: lodash_findIndex__WEBPACK_IMPORTED_MODULE_6___default()(schema.fieldsets, {
        id: schema.fieldsets[this.state.currentFieldset].id
      })
    });
    this.onChange(schema);
  }

  /**
   * Set current fieldset handler
   * @method onDragEnd
   * @param {Number} index Index of fieldset
   * @returns {undefined}
   */
  onDragEnd(result) {
    if (result.destination && result.destination.droppableId === 'fields-schema-edit') {
      this.onOrderField(result.source.index, result.destination.index);
    }
    if (result.destination && result.destination.droppableId === 'tabs-schema-edit') {
      this.onOrderFieldset(result.source.index, result.destination.index);
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      additionalFactory,
      error,
      reactBeautifulDnd,
      filterFactory
    } = this.props;
    const {
      Draggable,
      DragDropContext,
      Droppable
    } = reactBeautifulDnd;
    if (!this.props.value) {
      return '';
    }
    const choices = [...this.props.fields, ...(this.props.additionalFactory || [])];
    let editFieldType = '';
    if (this.state.editField) {
      let factory = this.props.value.properties[this.state.editField.id].factory;
      if (factory.value) {
        factory = factory.value;
      }
      const fieldType = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(choices, {
        value: factory !== '' ? factory : 'label_text_field'
      });
      editFieldType = fieldType ? this.props.intl.formatMessage({
        id: fieldType.value,
        defaultMessage: fieldType.label
      }) : '';
    }
    const nonUserCreatedFields = this.props.value.fieldsets[this.state.currentFieldset].fields.filter(fieldId => !isEditable(this.props.value.properties[fieldId]) && fieldId !== 'changeNote');
    const hasChangeNote = this.props.value.fieldsets[this.state.currentFieldset].fields.indexOf('changeNote') > -1;
    const userCreatedFieldsStartingIndex = nonUserCreatedFields.length;
    const lastUserCreatedFieldsIndex = hasChangeNote ? this.props.value.fieldsets[this.state.currentFieldset].fields.length - 1 : this.props.value.fieldsets[this.state.currentFieldset].fields.length;
    // fields that were not created by the user, but are part of a behavior
    const makeNonUserFields = () => this.props.value.fieldsets[this.state.currentFieldset].fields.slice(0, userCreatedFieldsStartingIndex).map((field, index) => __jsx("div", {
      style: {
        background: '#c7d5d859'
      },
      key: `${field}-${this.state.currentFieldset}-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1585,
        columnNumber: 11
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.Field, _extends({}, this.props.value.properties[field], {
      id: field,
      required: this.props.value.required.indexOf(field) !== -1,
      widgets: this.props.widgets,
      onEdit: this.onShowEditField,
      draggable: false,
      isDisabled: true,
      order: index,
      onDelete: this.onShowDeleteField,
      onChange: this.onChangeDefaultValue,
      value: this.props.value.properties[field].default,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1589,
        columnNumber: 13
      }
    }))));
    // fields created by the user
    const makeUserFields = () => this.props.value.fieldsets[this.state.currentFieldset].fields.slice(userCreatedFieldsStartingIndex, lastUserCreatedFieldsIndex).map((field, index) => __jsx(Draggable, {
      draggableId: field,
      index: userCreatedFieldsStartingIndex + index,
      key: `${field}-${this.state.currentFieldset}-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1609,
        columnNumber: 11
      }
    }, (provided, snapshot) => __jsx("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      style: getItemStyle(snapshot.isDragging, provided.draggableProps.style),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1615,
        columnNumber: 15
      }
    }), __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.Field, _extends({}, this.props.value.properties[field], {
      id: field,
      required: this.props.value.required && this.props.value.required.indexOf(field) !== -1,
      widgets: this.props.widgets,
      onEdit: this.onShowEditField,
      draggable: true,
      isDisabled: false,
      order: index,
      onDelete: this.onShowDeleteField,
      onChange: this.onChangeDefaultValue,
      key: `${field}-${this.state.currentFieldset}-${index}`,
      value: this.props.value.properties[field].default,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1624,
        columnNumber: 17
      }
    })))));
    const canAddFields = this.state.currentFieldset === 0 || !this.props.value.fieldsets[this.state.currentFieldset].behavior || this.props.value.fieldsets[this.state.currentFieldset].behavior.includes('generated');
    const utility = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].getUtility({
      name: this.state.addField,
      type: 'fieldFactoryInitialData'
    });
    const id = utility !== null && utility !== void 0 && utility.method ? utility.method(this.props.intl).id : undefined;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1661,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Segment.Group, {
      style: {
        margin: '-1rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1662,
        columnNumber: 9
      }
    }, error.length > 0 && error.map((err, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
      icon: "warning",
      key: `${err}-${index}`,
      negative: true,
      attached: true,
      header: this.props.intl.formatMessage(messages.error),
      content: err,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1669,
        columnNumber: 15
      }
    })), __jsx(DragDropContext, {
      onDragEnd: this.onDragEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1678,
        columnNumber: 11
      }
    }, __jsx(Droppable, {
      droppableId: "tabs-schema-edit",
      direction: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1679,
        columnNumber: 13
      }
    }, (provided, snapshot) => __jsx("div", _extends({
      role: "tablist",
      className: "ui pointing secondary attached tabular menu",
      ref: provided.innerRef
    }, provided.draggableProps, {
      style: getTabStyle(snapshot.isDraggingOver),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1681,
        columnNumber: 17
      }
    }), this.props.value.fieldsets.map((fieldset, index) => __jsx(_plone_volto_components_manage_Widgets_SchemaWidgetFieldset__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: `${fieldset.id}-${this.state.currentFieldset}-${index}`,
      title: fieldset.title,
      order: index,
      active: index === this.state.currentFieldset,
      onClick: this.onSetCurrentFieldset,
      onShowEditFieldset: this.onShowEditFieldset,
      onShowDeleteFieldset: this.onShowDeleteFieldset,
      onOrderFieldset: this.onOrderFieldset,
      getItemStyle: getItemStyle,
      isDraggable: true,
      isDisabled: fieldset.behavior ? !fieldset.behavior.includes('generated') : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1689,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "item item-add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1707,
        columnNumber: 19
      }
    }, __jsx("button", {
      "aria-label": this.props.intl.formatMessage(messages.add),
      className: "item ui noborder button",
      onClick: this.onShowAddFieldset,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1708,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      name: "plus",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1713,
        columnNumber: 23
      }
    }))), provided.placeholder)), makeNonUserFields(), __jsx(Droppable, {
      droppableId: "fields-schema-edit",
      direction: "vertical",
      type: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1724,
        columnNumber: 13
      }
    }, (provided, snapshot) => __jsx("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, {
      style: getFieldStyle(snapshot.isDraggingOver),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1730,
        columnNumber: 17
      }
    }), makeUserFields(), provided.placeholder))), hasChangeNote ? __jsx("div", {
      style: {
        background: '#c7d5d859'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1744,
        columnNumber: 13
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.Field, _extends({}, this.props.value.properties.changeNote, {
      id: 'changeNote',
      required: this.props.value.required.indexOf('changeNote') !== -1,
      onEdit: this.onShowEditField,
      draggable: false,
      isDisabled: true,
      order: this.props.value.fieldsets[this.state.currentFieldset].length - 1,
      onDelete: this.onShowDeleteField,
      onChange: this.onChangeDefaultValue,
      key: 'changeNote',
      value: this.props.value.properties.changeNote.default,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1745,
        columnNumber: 15
      }
    }))) : null, canAddFields && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {
      inline: true,
      className: "addfield",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1767,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1768,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1769,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1770,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1771,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "addfield",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1772,
        columnNumber: 23
      }
    }, this.props.intl.formatMessage(messages.addField))), __jsx("div", {
      className: "toolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1776,
        columnNumber: 21
      }
    }, __jsx("button", {
      "aria-label": this.props.intl.formatMessage(messages.add),
      id: "addfield",
      className: "item ui noborder button",
      onClick: this.onShowAddField,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1777,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      name: "plus",
      color: "blue",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1783,
        columnNumber: 25
      }
    })))))))), this.state.addField !== null && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.ModalForm, {
      onSubmit: this.onAddField,
      onCancel: this.onCancel,
      className: `field-${(0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_18__.slugify)(lodash_isString__WEBPACK_IMPORTED_MODULE_8___default()(this.state.addField) && this.state.addField !== '' ? this.state.addField : 'label_text_field')}`,
      onChangeFormData: data => {
        this.setState({
          addField: data.factory
        });
      },
      title: this.props.intl.formatMessage(messages.addField),
      formData: {
        factory: lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(choices, {
          value: 'label_text_field'
        }) || undefined,
        id
      },
      schema: schemaField(this.state.addField, this.props.intl, this.props.value.fieldsets.filter(fieldset => !fieldset.behavior || fieldset.id === 'default' || fieldset.behavior.includes('generated')), this.props.allowEditId, this.props.allowEditQueryParameter, this.props.allowEditPlaceholder, {
        factory: {
          type: 'string',
          factory: 'Choice',
          title: this.props.intl.formatMessage(messages.type),
          vocabulary: {
            '@id': `Fields`
          },
          filterChoices: filterFactory,
          additionalChoices: additionalFactory,
          sort: true
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1793,
        columnNumber: 11
      }
    }), this.state.editField !== null && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.ModalForm, {
      onSubmit: this.onEditField,
      onCancel: this.onCancel,
      title: `${this.props.intl.formatMessage(messages.editField)}: ${editFieldType}`,
      className: `factory-${(0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_18__.slugify)(editFieldType)}`,
      formData: _objectSpread(_objectSpread({}, this.props.value.properties[this.state.editField.id]), {}, {
        id: this.state.editField.id,
        required: this.props.value.required.indexOf(this.state.editField.id) !== -1,
        parentFieldSet: this.props.value.fieldsets[this.state.currentFieldset].id,
        values: formatArrayToTextarea(this.props.value.properties[this.state.editField.id])
      }),
      schema: schemaField(this.props.value.properties[this.state.editField.id].factory, this.props.intl, this.props.value.fieldsets.filter(fieldset => !fieldset.behavior || fieldset.id === 'default' || fieldset.behavior.includes('generated')), this.props.allowEditId, this.props.allowEditQueryParameter, this.props.allowEditPlaceholder),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1837,
        columnNumber: 11
      }
    }), this.state.addFieldset !== null && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.ModalForm, {
      onSubmit: this.onAddFieldset,
      onCancel: this.onCancel,
      title: this.props.intl.formatMessage(messages.addFieldset),
      formData: {
        id: '',
        title: ''
      },
      schema: fieldsetSchema(this.props.intl),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1870,
        columnNumber: 11
      }
    }), this.state.editFieldset !== null && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_21__.ModalForm, {
      onSubmit: this.onEditFieldset,
      onCancel: this.onCancel,
      title: this.props.intl.formatMessage(messages.editFieldset),
      formData: {
        id: this.props.value.fieldsets[this.state.editFieldset].id,
        title: this.props.value.fieldsets[this.state.editFieldset].title
      },
      schema: fieldsetSchema(this.props.intl),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1882,
        columnNumber: 11
      }
    }), this.state.deleteFieldset !== null && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Confirm, {
      open: true,
      content: this.props.intl.formatMessage(messages.deleteFieldset),
      onCancel: this.onCancel,
      onConfirm: this.onDeleteFieldset,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1894,
        columnNumber: 11
      }
    }), this.state.deleteField !== null && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Confirm, {
      open: true,
      content: this.props.intl.formatMessage(messages.deleteField),
      onCancel: this.onCancel,
      onConfirm: this.onDeleteField,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1902,
        columnNumber: 11
      }
    }));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(SchemaWidget, "propTypes", {
  /**
   * Id of the field
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
  /**
   * Title of the field
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * Value of the field
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]),
  /**
   * List of error messages
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),
  /**
   * Filter for factory choices
   */
  filterFactory: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),
  /**
   * Additional factories
   */
  additionalFactory: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  /**
   * Allow editing of the id
   */
  allowEditId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * Allow editing of the query parameter
   */
  allowEditQueryParameter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * Allow editing of the placeholder
   */
  allowEditPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * On change handler
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  /**
   * Get vocabulary action
   */
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(SchemaWidget, "defaultProps", {
  required: false,
  value: {},
  error: [],
  filterFactory: null,
  additionalFactory: null,
  allowEditId: false,
  allowEditQueryParameter: false,
  allowEditPlaceholder: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_15__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_17__.injectLazyLibs)(['reactBeautifulDnd']), (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$F, _state$vocabularies$F2, _state$vocabularies$F3;
  return {
    value: lodash_isString__WEBPACK_IMPORTED_MODULE_8___default()(props.value) ? JSON.parse(props.value) : props.value,
    fields: ((_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$F = _state$vocabularies.Fields) === null || _state$vocabularies$F === void 0 ? void 0 : (_state$vocabularies$F2 = _state$vocabularies$F.subrequests) === null || _state$vocabularies$F2 === void 0 ? void 0 : (_state$vocabularies$F3 = _state$vocabularies$F2.schemawidget) === null || _state$vocabularies$F3 === void 0 ? void 0 : _state$vocabularies$F3.items) || []
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_19__.getVocabulary
}))(SchemaWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidgetFieldset.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidgetFieldset.jsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemaWidgetFieldsetComponent: () => (/* binding */ SchemaWidgetFieldsetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\SchemaWidgetFieldset.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * Schema widget fieldset.
 * @module components/manage/Widgets/SchemaWidgetFieldset
 */

;




/**
 * Schema widget fieldset component.
 * @function SchemaWidgetFieldset
 * @returns {string} Markup of the component.
 */
const SchemaWidgetFieldsetComponent = ({
  // isDragging,
  title,
  order,
  active,
  onShowEditFieldset,
  onShowDeleteFieldset,
  onClick,
  getItemStyle,
  isDraggable,
  isDisabled,
  reactBeautifulDnd
}) => __jsx(reactBeautifulDnd.Draggable, {
  draggableId: title,
  index: order,
  key: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
}, (provided, snapshot) => __jsx("div", _extends({
  className: `item${active ? ' active' : ''}`,
  onClick: () => onClick(order),
  ref: provided.innerRef
}, provided.draggableProps, {
  style: getItemStyle(snapshot.isDragging, provided.draggableProps.style),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}), isDraggable && __jsx("i", _extends({
  "aria-hidden": "true",
  className: "grey bars icon drag handle"
}, provided.dragHandleProps, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 11
  }
})), title, !isDisabled && __jsx("button", {
  className: "item ui noborder button",
  onClick: event => {
    event.stopPropagation();
    event.preventDefault();
    onShowEditFieldset(order);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  name: "write square",
  size: "large",
  color: "blue",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 13
  }
})), !isDisabled && __jsx("button", {
  className: "item ui noborder button",
  onClick: event => {
    event.stopPropagation();
    event.preventDefault();
    onShowDeleteFieldset(order);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  name: "close",
  size: "large",
  color: "red",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 13
  }
}))));

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SchemaWidgetFieldsetComponent.propTypes = {
  order: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool).isRequired,
  onOrderFieldset: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  onShowEditFieldset: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  onShowDeleteFieldset: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  getItemStyle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  isDraggable: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_3__.injectLazyLibs)(['reactBeautifulDnd'])(SchemaWidgetFieldsetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectAutoComplete.jsx"
/*!****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/SelectAutoComplete.jsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAutoCompleteComponent: () => (/* binding */ SelectAutoCompleteComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _SelectUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectUtils */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectUtils.js");
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\SelectAutoComplete.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * SelectAutoComplete component.
 * @module components/manage/Widgets/SelectAutoComplete
 */

;










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  },
  no_options: {
    id: 'No options',
    defaultMessage: 'No options'
  },
  type_text: {
    id: 'Type text...',
    defaultMessage: 'Type text...'
  }
});

/**
 * SelectAutoComplete component class.
 * @class SelectAutoComplete
 * @extends Component
 */
class SelectAutoComplete extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props) {
    super(props);
    _defineProperty(this, "timeoutRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());
    // How many characters to hold off searching from. Search tarts at this plus one.
    _defineProperty(this, "SEARCH_HOLDOFF", 2);
    _defineProperty(this, "loadOptions", query => {
      // Implement a debounce of 400ms and a min search of 3 chars
      if (query.length > this.SEARCH_HOLDOFF) {
        if (this.timeoutRef.current) clearTimeout(this.timeoutRef.current);
        return new Promise(resolve => {
          this.timeoutRef.current = setTimeout(async () => {
            const res = await this.fetchAvailableChoices(query);
            resolve(res);
          }, 400);
        });
      } else {
        return Promise.resolve([]);
      }
    });
    _defineProperty(this, "fetchAvailableChoices", async query => {
      const resp = await this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        query,
        size: -1,
        subrequest: this.props.lang
      });
      return (0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.normalizeChoices)(resp.items || [], this.props.intl);
    });
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchLength: 0,
      termsPairsCache: []
    };
  }
  componentDidMount() {
    const {
      id,
      lang,
      value,
      choices
    } = this.props;
    if (value && (value === null || value === void 0 ? void 0 : value.length) > 0) {
      let tokensQuery;
      if (typeof value === 'string') {
        tokensQuery = (0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.convertValueToVocabQuery)((0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.normalizeValue)(choices, [value], this.props.intl));
      } else {
        tokensQuery = (0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.convertValueToVocabQuery)((0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.normalizeValue)(choices, value, this.props.intl));
      }
      this.props.getVocabularyTokenTitle(_objectSpread({
        vocabNameOrURL: this.props.vocabBaseUrl,
        subrequest: `widget-${id}-${lang}`
      }, tokensQuery));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      value,
      choices
    } = this.props;
    if (this.state.termsPairsCache.length === 0 && (value === null || value === void 0 ? void 0 : value.length) > 0 && (choices === null || choices === void 0 ? void 0 : choices.length) > 0) {
      this.setState(state => ({
        termsPairsCache: [...state.termsPairsCache, ...choices]
      }));
    }
  }

  /**
   * Handle the field change, store it in the local state and back to simple
   * array of tokens for correct serialization
   * @method handleChange
   * @param {array} selectedOption The selected options (already aggregated).
   * @returns {undefined}
   */
  handleChange(selectedOption) {
    if (!Array.isArray(selectedOption)) {
      this.props.onChange(this.props.id, (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || null);
      if (selectedOption) {
        this.setState(state => ({
          termsPairsCache: [...state.termsPairsCache, selectedOption]
        }));
      }
    } else {
      this.props.onChange(this.props.id, selectedOption ? selectedOption.map(item => item.value) : null);
      this.setState(state => ({
        termsPairsCache: [...state.termsPairsCache, ...selectedOption]
      }));
    }
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$choices, _this$props$placehold;
    const selectedOption = (0,_SelectUtils__WEBPACK_IMPORTED_MODULE_6__.normalizeValue)(this.state.termsPairsCache, this.props.value, this.props.intl);
    const SelectAsync = this.props.reactSelectAsync.default;
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 7
      }
    }), __jsx(SelectAsync, {
      id: `field-${this.props.id}`,
      key: this.props.id,
      isDisabled: this.props.disabled || this.props.isDisabled,
      className: "react-select-container",
      classNamePrefix: "react-select",
      cacheOptions: true,
      defaultOptions: [],
      loadOptions: this.loadOptions,
      onInputChange: search => this.setState({
        searchLength: search.length
      }),
      noOptionsMessage: () => this.props.intl.formatMessage(this.state.searchLength > this.SEARCH_HOLDOFF ? messages.no_options : messages.type_text),
      styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.customSelectStyles,
      theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.selectTheme,
      components: _objectSpread(_objectSpread({}, ((_this$props$choices = this.props.choices) === null || _this$props$choices === void 0 ? void 0 : _this$props$choices.length) > 25 && {
        MenuList: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.MenuList
      }), {}, {
        MultiValueContainer: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.MultiValueContainer,
        ClearIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.ClearIndicator,
        DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.DropdownIndicator,
        Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_9__.Option
      }),
      value: selectedOption || [],
      placeholder: (_this$props$placehold = this.props.placeholder) !== null && _this$props$placehold !== void 0 ? _this$props$placehold : this.props.intl.formatMessage(messages.select),
      onChange: this.handleChange,
      isMulti: this.props.isMulti,
      isClearable: !this.props.isMulti,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }
    }));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(SelectAutoComplete, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)])),
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)])),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(SelectAutoComplete, "defaultProps", {
  description: null,
  required: false,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null,
  isMulti: true
});
const SelectAutoCompleteComponent = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(SelectAutoComplete);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__.injectLazyLibs)(['reactSelectAsync']), (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2, _state$vocabularies$v3, _props$items;
  const vocabBaseUrl = (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_7__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_7__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_7__.getVocabFromItems)(props);
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : (_state$vocabularies$v3 = _state$vocabularies$v2[`widget-${props.id}-${state.intl.locale}`]) === null || _state$vocabularies$v3 === void 0 ? void 0 : _state$vocabularies$v3.items;

  // If the schema already has the choices in it, then do not try to get
  // the vocab, even if there is one
  return (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.choices ? {
    choices: props.items.choices,
    lang: state.intl.locale
  } : vocabState ? {
    choices: vocabState,
    vocabBaseUrl,
    lang: state.intl.locale
  } : {
    vocabBaseUrl,
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabulary,
  getVocabularyTokenTitle: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabularyTokenTitle
}))(SelectAutoComplete));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectUtils.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/SelectUtils.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertValueToVocabQuery: () => (/* binding */ convertValueToVocabQuery),
/* harmony export */   normalizeChoices: () => (/* binding */ normalizeChoices),
/* harmony export */   normalizeSingleSelectOption: () => (/* binding */ normalizeSingleSelectOption),
/* harmony export */   normalizeValue: () => (/* binding */ normalizeValue)
/* harmony export */ });
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isBoolean */ "lodash/isBoolean");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  no_value: {
    id: 'No value',
    defaultMessage: 'No value'
  }
});

/**
 * Prepares a vocab endpoint query for tokens based on passed value.
 *
 * This can be used to facilitate querying a vocabulary endpoint for labels,
 * given some token values. This assumes that the value has already been
 * normalized by normalizeValue.
 */
function convertValueToVocabQuery(value) {
  var _value$value;
  if (lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(value) || lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default()(value)) return {
    token: value.toString()
  };
  if (!value) return {};
  if (Array.isArray(value)) {
    return {
      tokens: value.map(v => {
        var _v$value;
        return lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(v) ? (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : v.token : lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(v) || lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default()(v) ? v : null;
      }).filter(f => f !== null)
    };
  }
  const token = (_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : value.token;
  return lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(token) ? {
    token
  } : {};
}

/**
 * Normalizes provided value to a "best representation" value, as accepted by
 * react-select. In this case, it is an object of shape `{ label, value }`
 */
function normalizeSingleSelectOption(value, intl) {
  var _ref, _ref2, _value$token, _ref3, _ref4, _ref5;
  if (!value) return value;
  if (Array.isArray(value)) {
    // assuming [token, title] pair.
    if (value.length === 2) return {
      value: value[0],
      label: value[1] || value[0]
    };
    throw new Error(`Unknown value type of select widget: ${value}`);
  }
  const token = (_ref = (_ref2 = (_value$token = value.token) !== null && _value$token !== void 0 ? _value$token : value.value) !== null && _ref2 !== void 0 ? _ref2 : value.UID) !== null && _ref !== void 0 ? _ref : 'no-value';
  const label = (_ref3 = (_ref4 = (_ref5 = value.title && value.title !== 'None' ? value.title : undefined) !== null && _ref5 !== void 0 ? _ref5 : value.label) !== null && _ref4 !== void 0 ? _ref4 : value.token) !== null && _ref3 !== void 0 ? _ref3 : intl.formatMessage(messages.no_value);
  return {
    value: token,
    label
  };
}
const normalizeChoices = (items, intl) => items.map(item => normalizeSingleSelectOption(item, intl));

/**
 * Given the value from the API, it normalizes to a value valid to use in react-select.
 * This is necessary because of the inconsistencies in p.restapi vocabularies implementations as
 * they need to adapt to react-select public interface.
 * @function normalizeValue
 * @param {array} choices The choices
 * @param {string|object|boolean|array} value The value
 * @returns {Object} An object of shape {label: "", value: ""} (or an array)
 */
function normalizeValue(choices, value, intl) {
  choices = normalizeChoices(choices || [], intl);
  const choiceMap = Object.assign({}, ...choices.map(({
    label,
    value
  }) => ({
    [value]: label
  })));
  if (!lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(value) && lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    // We have a boolean value, which means we need to provide a "No value"
    // option
    const label = choiceMap[(0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_3__.getBoolean)(value)];
    return label ? {
      label,
      value
    } : {};
  }
  if (value === 'no-value') {
    return {
      label: intl.formatMessage(messages.no_value),
      value: 'no-value'
    };
  }
  if (value === undefined || !value || value.length === 0) return null;
  if (Array.isArray(value)) {
    // a list of values, like ['foo', 'bar'];
    return value.map(v => normalizeValue(choices, v, intl));
  }
  if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    // an object like `{label, value}` or `{ title, value }`
    return normalizeSingleSelectOption(value, intl);
  }

  // fallback: treat value as a token and look it up in choices
  return Object.keys(choiceMap).includes(value) ? {
    label: choiceMap[value],
    value
  } : {
    label: value,
    value
  };
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectWidget.jsx"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/SelectWidget.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectWidgetComponent: () => (/* binding */ SelectWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/sortBy */ "lodash/sortBy");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectUtils */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectUtils.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\SelectWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * SelectWidget component.
 * @module components/manage/Widgets/SelectWidget
 */

;













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  idTitle: {
    id: 'Short Name',
    defaultMessage: 'Short Name'
  },
  idDescription: {
    id: 'Used for programmatic access to the fieldset.',
    defaultMessage: 'Used for programmatic access to the fieldset.'
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title'
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description'
  },
  close: {
    id: 'Close',
    defaultMessage: 'Close'
  },
  choices: {
    id: 'Choices',
    defaultMessage: 'Choices'
  },
  required: {
    id: 'Required',
    defaultMessage: 'Required'
  },
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  },
  no_value: {
    id: 'No value',
    defaultMessage: 'No value'
  },
  no_options: {
    id: 'No options',
    defaultMessage: 'No options'
  }
});

/**
 * SelectWidget component class.
 * @function SelectWidget
 * @returns {string} Markup of the component.
 */
class SelectWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props$choices;
    if ((!this.props.choices || ((_this$props$choices = this.props.choices) === null || _this$props$choices === void 0 ? void 0 : _this$props$choices.length) === 0) && this.props.vocabBaseUrl) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }
  componentDidUpdate(prevProps) {
    var _this$props$choices2;
    if (this.props.vocabBaseUrl !== prevProps.vocabBaseUrl && (!this.props.choices || ((_this$props$choices2 = this.props.choices) === null || _this$props$choices2 === void 0 ? void 0 : _this$props$choices2.length) === 0)) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _options, _this$props$placehold;
    const {
      id,
      choices,
      value,
      intl,
      onChange,
      filterChoices,
      additionalChoices
    } = this.props;
    // Make sure that both disabled and isDisabled (from the DX layout feat work)
    const disabled = this.props.disabled || this.props.isDisabled;
    const Select = this.props.reactSelect.default;
    let options = this.props.vocabBaseUrl ? this.props.choices : [...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(choices, option => ({
      value: option[0],
      label:
      // Fix "None" on the serializer, to remove when fixed in p.restapi
      option[1] !== 'None' && option[1] ? option[1] : option[0]
    })),
    // Only set "no-value" option if there's no default in the field
    // TODO: also if this.props.defaultValue?
    ...(this.props.noValueOption && (this.props.default === undefined || this.props.default === null) ? [{
      label: this.props.intl.formatMessage(messages.no_value),
      value: 'no-value'
    }] : [])];
    if (additionalChoices) {
      options = [...(options || []), ...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(additionalChoices, choice => ({
        value: choice.value,
        label: intl.formatMessage({
          id: choice.value,
          defaultMessage: choice.label
        })
      }))];
    }
    if (filterChoices) {
      options = lodash_filter__WEBPACK_IMPORTED_MODULE_4___default()(options, item => filterChoices.includes(item.value));
    }
    if (this.props.sort) {
      options = lodash_sortBy__WEBPACK_IMPORTED_MODULE_6___default()(options, ['label']);
    }
    const normalizedValue = (0,_plone_volto_components_manage_Widgets_SelectUtils__WEBPACK_IMPORTED_MODULE_11__.normalizeValue)(options, value, intl);
    const isMulti = this.props.isMulti ? this.props.isMulti : id === 'roles' || id === 'groups' || this.props.type === 'array';
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 7
      }
    }), __jsx(Select, {
      id: `field-${id}`,
      fieldTitle: this.props.title,
      key: choices,
      name: id,
      "aria-label": this.props.title || undefined,
      menuShouldScrollIntoView: false,
      isDisabled: disabled,
      isSearchable: true,
      className: "react-select-container",
      classNamePrefix: "react-select",
      isMulti: isMulti,
      options: options,
      styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.customSelectStyles,
      theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.selectTheme,
      components: _objectSpread(_objectSpread({}, ((_options = options) === null || _options === void 0 ? void 0 : _options.length) > 25 && {
        MenuList: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.MenuList
      }), {}, {
        MultiValueContainer: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.MultiValueContainer,
        DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.DropdownIndicator,
        ClearIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.ClearIndicator,
        Option: this.props.customOptionStyling || _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_12__.Option
      }),
      value: normalizedValue,
      placeholder: (_this$props$placehold = this.props.placeholder) !== null && _this$props$placehold !== void 0 ? _this$props$placehold : this.props.intl.formatMessage(messages.select),
      onBlur: () => this.props.onBlur(id, value),
      onChange: selectedOption => {
        if (isMulti) {
          return onChange(id, selectedOption.map(el => el.value));
        }
        return onChange(id, selectedOption && selectedOption.value !== 'no-value' ? selectedOption.value : undefined);
      },
      isClearable: !this.props.required && this.props.isClearable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }
    }));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(SelectWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  filterChoices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getVocabularyTokenTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)])),
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noValueOption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  customOptionStyling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  isMulti: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  sort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isClearable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(SelectWidget, "defaultProps", {
  description: null,
  required: false,
  filterChoices: null,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null,
  noValueOption: true,
  customOptionStyling: null,
  sort: false,
  isClearable: true
});
const SelectWidgetComponent = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(SelectWidget);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_13__.injectLazyLibs)(['reactSelect']), (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2;
  const vocabBaseUrl = !props.choices ? (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_8__.getVocabFromItems)(props) : '';
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : _state$vocabularies$v2[state.intl.locale];

  // If the schema already has the choices in it, then do not try to get the vocab,
  // even if there is one
  if (props.choices) {
    return {
      choices: props.choices,
      lang: state.intl.locale
    };
  } else if (vocabState) {
    var _vocabState$items;
    return {
      vocabBaseUrl,
      choices: (_vocabState$items = vocabState === null || vocabState === void 0 ? void 0 : vocabState.items) !== null && _vocabState$items !== void 0 ? _vocabState$items : [],
      lang: state.intl.locale
    };
    // There is a moment that vocabState is not there yet, so we need to pass the
    // vocabBaseUrl to the component.
  } else if (vocabBaseUrl) {
    return {
      vocabBaseUrl,
      lang: state.intl.locale
    };
  }
  return {
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_10__.getVocabulary,
  getVocabularyTokenTitle: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_10__.getVocabularyTokenTitle
}))(SelectWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/TextWidget.jsx"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/TextWidget.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\TextWidget.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;




const TextWidget = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    onClick,
    icon,
    iconAction,
    minLength,
    maxLength,
    placeholder,
    isDisabled,
    focus,
    required,
    error
  } = props;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focus) {
      ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: `field-${id}`,
    name: id,
    value: value || '',
    disabled: isDisabled,
    icon: icon || null,
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChange(id, target.value === '' ? undefined : target.value),
    ref: ref,
    onBlur: ({
      target
    }) => onBlur(id, target.value === '' ? undefined : target.value),
    onClick: () => onClick(),
    minLength: minLength || null,
    maxLength: maxLength || null,
    "aria-required": required ? 'true' : undefined,
    "aria-invalid": (error === null || error === void 0 ? void 0 : error.length) > 0 ? 'true' : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), icon && iconAction && __jsx("button", {
    className: `field-${id}-action-button`,
    onClick: iconAction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: icon,
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextWidget);
TextWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    xmlns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    viewBox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  iconAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TextWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  onEdit: null,
  onDelete: null,
  focus: false,
  icon: null,
  iconAction: null,
  minLength: null,
  maxLength: null
};

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/TextareaWidget.jsx"
/*!************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/TextareaWidget.jsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\TextareaWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextareaWidget component.
 * @module components/manage/Widgets/TextareaWidget
 */

;





/**
 * TextareaWidget, a widget for multiple lines text
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Text",
 *  widget: 'textarea',
 * }
 * ```
 */
const TextareaWidget = props => {
  const {
    id,
    maxLength,
    value,
    onChange,
    placeholder,
    isDisabled
  } = props;
  const {
    0: lengthError,
    1: setlengthError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const onhandleChange = (id, value) => {
    if (maxLength & (value === null || value === void 0 ? void 0 : value.length)) {
      let remlength = maxLength - value.length;
      if (remlength < 0) {
        setlengthError(`You have exceed word limit by ${Math.abs(remlength)}`);
      } else {
        setlengthError('');
      }
    }
    onChange(id, value);
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    className: "textarea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
    id: `field-${id}`,
    name: id,
    value: value || '',
    disabled: isDisabled,
    placeholder: placeholder,
    onChange: ({
      target
    }) => onhandleChange(id, target.value === '' ? undefined : target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), lengthError.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Label, {
    key: lengthError,
    basic: true,
    color: "red",
    pointing: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, lengthError));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TextareaWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TextareaWidget.defaultProps = {
  description: null,
  maxLength: null,
  required: false,
  error: [],
  value: null,
  onChange: null,
  onEdit: null,
  onDelete: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(TextareaWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/TimeWidget.jsx"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/TimeWidget.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\TimeWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;









const TimePicker = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(() => (__webpack_require__.t(/*! rc-time-picker */ "rc-time-picker", 23))));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  time: {
    id: 'Time',
    defaultMessage: 'Time'
  }
});
const TimeWidgetComponent = props => {
  const {
    id,
    resettable,
    moment,
    value,
    onChange,
    isDisabled
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const lang = intl.locale;
  const onTimeChange = time => {
    if (time) {
      onChange(id, time.format('HH:mm'));
    }
  };
  const onResetTime = () => {
    onChange(id, null);
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "date-time-widget-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "ui input time-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(TimePicker, {
    disabled: isDisabled,
    defaultValue: moment.default(),
    value: value ? moment.default(value, 'HH:mm') : null,
    onChange: onTimeChange,
    allowEmpty: false,
    showSecond: false,
    use12Hours: lang === 'en',
    id: id,
    format: moment.default.localeData((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_6__.toBackendLang)(lang)).longDateFormat('LT'),
    placeholder: intl.formatMessage(messages.time),
    focusOnOpen: true,
    placement: "bottomRight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), resettable && __jsx("button", {
    type: "button",
    disabled: isDisabled || !value,
    onClick: onResetTime,
    className: "item ui noborder button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    size: "24px",
    className: "close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))));
};
TimeWidgetComponent.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  resettable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
TimeWidgetComponent.defaultProps = {
  description: null,
  required: false,
  error: [],
  dateOnly: false,
  noPastDates: false,
  value: null,
  resettable: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_7__.injectLazyLibs)(['reactDates', 'moment'])(TimeWidgetComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/TokenWidget.jsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/TokenWidget.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Vocabularies/Vocabularies */ "./node_modules/@plone/volto/src/helpers/Vocabularies/Vocabularies.js");
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\TokenWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * TokenWidget component.
 * @module components/manage/Widgets/TokenWidget
 */

;









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  },
  no_options: {
    id: 'No options',
    defaultMessage: 'No options'
  }
});

/**
 * TokenWidget component class.
 *
 * Because new terms are created through the web by using the widget, the token
 * widget conflates the meaning of token, label and value and assumes they can
 * be used interchangeably.
 *
 * @class TokenWidget
 * @extends Component
 */
class TokenWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props$choices;
    if (!((_this$props$choices = this.props.choices) !== null && _this$props$choices !== void 0 && _this$props$choices.length)) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }
  componentDidUpdate() {
    var _this$props$choices2;
    if (!((_this$props$choices2 = this.props.choices) !== null && _this$props$choices2 !== void 0 && _this$props$choices2.length) && this.props.vocabLoading === undefined && !this.props.vocabLoaded) {
      this.props.getVocabulary({
        vocabNameOrURL: this.props.vocabBaseUrl,
        size: -1,
        subrequest: this.props.lang
      });
    }
  }

  /**
   * Handle the field change, store it in the local state and back to simple
   * array of tokens for correct serialization
   * @method handleChange
   * @param {array} selectedOption The selected options (already aggregated).
   * @returns {undefined}
   */
  handleChange(selectedOption) {
    this.props.onChange(this.props.id, selectedOption ? selectedOption.map(item => item.label) : null);
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$placehold;
    const selectedOption = this.props.value ? this.props.value.map(item => ({
      label: item,
      value: item
    })) : [];
    const defaultOptions = (this.props.choices || []).filter(item => !selectedOption.find(({
      label
    }) => label === item.label)).map(item => ({
      label: item.label || item.value,
      value: item.value
    }));
    const CreatableSelect = this.props.reactSelectCreateable.default;
    return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    }), __jsx(CreatableSelect, {
      id: `field-${this.props.id}`,
      "aria-labelledby": `fieldset-${this.props.fieldSet}-field-label-${this.props.id}`,
      key: this.props.id,
      menuShouldScrollIntoView: false,
      isDisabled: this.props.isDisabled,
      className: "react-select-container",
      classNamePrefix: "react-select",
      defaultOptions: defaultOptions,
      options: defaultOptions,
      styles: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.customSelectStyles,
      theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.selectTheme,
      components: {
        MultiValueContainer: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.MultiValueContainer,
        ClearIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.ClearIndicator,
        DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.DropdownIndicator,
        Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_7__.Option
      },
      isMulti: true,
      value: selectedOption || [],
      onChange: this.handleChange,
      placeholder: (_this$props$placehold = this.props.placeholder) !== null && _this$props$placehold !== void 0 ? _this$props$placehold : this.props.intl.formatMessage(messages.select),
      noOptionsMessage: () => this.props.intl.formatMessage(messages.no_options),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(TokenWidget, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  getVocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  choices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  vocabLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  vocabLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  widgetOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    vocabulary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(TokenWidget, "defaultProps", {
  description: null,
  required: false,
  items: {
    vocabulary: null
  },
  widgetOptions: {
    vocabulary: null
  },
  error: [],
  choices: [],
  value: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__.injectLazyLibs)(['reactSelectCreateable']), (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)((state, props) => {
  var _state$vocabularies, _state$vocabularies$v, _state$vocabularies$v2;
  const vocabBaseUrl = (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_5__.getVocabFromHint)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_5__.getVocabFromField)(props) || (0,_plone_volto_helpers_Vocabularies_Vocabularies__WEBPACK_IMPORTED_MODULE_5__.getVocabFromItems)(props);
  const vocabState = (_state$vocabularies = state.vocabularies) === null || _state$vocabularies === void 0 ? void 0 : (_state$vocabularies$v = _state$vocabularies[vocabBaseUrl]) === null || _state$vocabularies$v === void 0 ? void 0 : (_state$vocabularies$v2 = _state$vocabularies$v.subrequests) === null || _state$vocabularies$v2 === void 0 ? void 0 : _state$vocabularies$v2[state.intl.locale];
  if (vocabState) {
    return {
      choices: vocabState.items ? vocabState.items.map(item => ({
        label: item.label || item.value,
        value: item.value
      })) : [],
      vocabLoading: vocabState.loading,
      vocabLoaded: vocabState.loaded,
      vocabBaseUrl,
      lang: state.intl.locale
    };
  }
  return {
    vocabBaseUrl,
    lang: state.intl.locale
  };
}, {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_6__.getVocabulary
}))(TokenWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/UrlWidget.jsx"
/*!*******************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/UrlWidget.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlWidget: () => (/* binding */ UrlWidget),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/ObjectBrowser */ "./node_modules/@plone/volto/src/components/manage/Sidebar/ObjectBrowser.jsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/icons/nav.svg */ "./node_modules/@plone/volto/src/icons/nav.svg");
/* harmony import */ var _plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\UrlWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UrlWidget component.
 * @module components/manage/Widgets/UrlWidget
 */

;









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  urlMissing: {
    id: 'URL is missing',
    defaultMessage: 'URL is missing'
  },
  urlInvalid: {
    id: 'URL is invalid',
    defaultMessage: 'URL is invalid'
  },
  clearUrl: {
    id: 'Clear URL',
    defaultMessage: 'Clear URL'
  },
  openUrlBrowser: {
    id: 'Open URL browser',
    defaultMessage: 'Open URL browser'
  }
});

/** Widget to edit urls
 *
 * This is the default widget used for the `remoteUrl` field. You can also use
 * it by declaring a field like:
 *
 * ```jsx
 * {
 *  title: "URL",
 *  widget: 'url',
 * }
 * ```
 */
const UrlWidget = props => {
  const {
    id,
    onChange,
    onBlur,
    onClick,
    minLength,
    maxLength,
    placeholder,
    isDisabled,
    required
  } = props;
  const inputId = `field-${id}`;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.flattenToAppURL)(props.value));
  const {
    0: isInvalid,
    1: setIsInvalid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /**
   * Clear handler
   * @method clear
   * @param {Object} value Value
   * @returns {undefined}
   */
  const clear = () => {
    setValue('');
    onChange(id, undefined);
    setIsInvalid(false);
  };
  const onChangeValue = _value => {
    var _newValue;
    let newValue = _value;
    if (((_newValue = newValue) === null || _newValue === void 0 ? void 0 : _newValue.length) > 0) {
      if (isInvalid && _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.isUrl(_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.normalizeUrl(newValue))) {
        setIsInvalid(false);
      }
      if ((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue)) {
        newValue = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.flattenToAppURL)(newValue);
      }
    }
    setValue(newValue);
    newValue = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue) ? (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.addAppURL)(newValue) : newValue;
    if (!(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.isInternalURL)(newValue) && newValue.length > 0) {
      const checkedURL = _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.URLUtils.checkAndNormalizeUrl(newValue);
      newValue = checkedURL.url;
      if (!checkedURL.isValid) {
        setIsInvalid(true);
      }
    }
    onChange(id, newValue === '' ? undefined : newValue);
  };

  // A11y: if the field is required and the user leaves it empty, we mark it as missing
  const handleBlur = ({
    target
  }) => {
    if (required && (!target.value || target.value === '')) {
      setIsInvalid(true);
    }
    onBlur(id, target.value === '' ? undefined : target.value);
  };
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    className: "url wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: inputId,
    name: id,
    type: "url",
    required: required,
    "aria-required": required,
    "aria-invalid": isInvalid,
    "aria-errormessage": isInvalid ? `${inputId}-error` : undefined,
    value: value || '',
    disabled: isDisabled,
    placeholder: placeholder,
    onChange: ({
      target
    }) => onChangeValue(target.value),
    onBlur: handleBlur,
    onClick: () => onClick(),
    minLength: minLength || null,
    maxLength: maxLength || null,
    error: isInvalid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), isInvalid && __jsx("span", {
    id: `${inputId}-error`,
    role: "alert",
    className: "visually-hidden-volto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, (value === null || value === void 0 ? void 0 : value.length) > 0 ? intl.formatMessage(messages.urlInvalid) : intl.formatMessage(messages.urlMissing)), (value === null || value === void 0 ? void 0 : value.length) > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "button",
    basic: true,
    className: "cancel",
    "aria-label": intl.formatMessage(messages.clearUrl),
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      clear();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    size: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "button",
    basic: true,
    icon: true,
    "aria-label": intl.formatMessage(messages.openUrlBrowser),
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      props.openObjectBrowser({
        mode: 'link',
        overlay: true,
        onSelectItem: url => {
          onChangeValue(url);
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_9___default()),
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  })))));
};

/**
 * Property types
 * @property {Object} propTypes Property types.
 * @static
 */
UrlWidget.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  openObjectBrowser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
UrlWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  minLength: null,
  maxLength: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_7__["default"])(UrlWidget));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/VocabularyTermsWidget.jsx"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/VocabularyTermsWidget.jsx ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/findIndex */ "lodash/findIndex");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/DragDropList/DragDropList */ "./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx");
/* harmony import */ var _plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx");
/* harmony import */ var _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/helpers/LanguageMap/LanguageMap */ "./node_modules/@plone/volto/src/helpers/LanguageMap/LanguageMap.js");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/add.svg */ "./node_modules/@plone/volto/src/icons/add.svg");
/* harmony import */ var _plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/drag.svg */ "./node_modules/@plone/volto/src/icons/drag.svg");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Widgets\\VocabularyTermsWidget.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * VocabularyTermsWidget
 * @module components/manage/Widgets/VocabularyTermsWidget
 * Widget for plone.schema.JSONField field meant for a SimpleVocabulary source
 *

VOCABULARY_SCHEMA = json.dumps(
    {
        "type": "object",
        "properties": {
            "items": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "token": {"type": "string"},
                        "titles": {
                            "type": "object",
                            "properties": {
                                "lang": {"type": "string"},
                                "title": {"type": "string"},
                            }
                        },
                    }
                }
            }
        },
    }
)


class IPloneconfSettings(Interface):

    types_of_foo = schema.JSONField(
        title="Types of Foo",
        description="Available types of a foo",
        required=False,
        schema=VOCABULARY_SCHEMA,
        widget="vocabularyterms",
        default={"items": [
            {
                "token": "talk",
                "titles": {
                    "en": "Talk",
                    "de": "Vortrag",
                }
            },
            {
                "token": "lightning-talk",
                "titles": {
                    "en": "Lightning-Talk",
                    "de": "kürzerer erleuchtender Vortrag",
                }
            },
        ]},
        missing_value={"items": []},
    )


@provider(IVocabularyFactory)
def TalkTypesVocabulary(context):
    name = "ploneconf.types_of_talk"
    registry_record_value = api.portal.get_registry_record(name)
    items = registry_record_value.get('items', [])
    lang = api.portal.get_current_language()
    return SimpleVocabulary.fromItems([[item['token'], item['token'], item['titles'][lang]] for item in items])


 * titles are editable
 * tokens are generated
 *
 * Purpose: Use this widget for a controlpanel field
 * that acts as a source of a vocabulary for a zope.schema.Choice field.
 * Vocabulary terms should change over time only in title, not value,
 * as vocabulary term values are stored on content type instances.
 *
 * Apply widget with `widget='vocabularyterms'`
 * Future widget directive coming: Apply widget with directive widget
 *
 * See storybook for a demo: Run
 * `yarn storybook`
 * or see https://docs.voltocms.com/storybook/
 */

;















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  title: {
    id: 'Vocabulary terms',
    defaultMessage: 'Vocabulary terms'
  },
  termtitle: {
    id: 'Vocabulary term',
    defaultMessage: 'Vocabulary term'
  },
  addTerm: {
    id: 'Add vocabulary term',
    defaultMessage: 'Add term'
  },
  removeTerm: {
    id: 'Remove term',
    defaultMessage: 'Remove term'
  },
  clearTermTitle: {
    id: 'Reset term title',
    defaultMessage: 'Reset title'
  },
  termtitlelabel: {
    id: 'Vocabulary term title',
    defaultMessage: 'Title'
  }
});
const VocabularyTermsWidget = props => {
  var _vocabularyterms$map;
  const {
    id,
    value = {},
    onChange
  } = props;
  var widgetvalue = value;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [toFocusId, setToFocusId] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const [editableToken, setEditableToken] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const element = document.getElementById(toFocusId);
    element && element.focus();
    setToFocusId('');
  }, [dispatch, toFocusId]);

  // LEGACY: value from unordered zope.schema.Dict instead of zope.schema.JSONField
  if (widgetvalue.items === undefined) {
    widgetvalue = {
      items: Object.keys(widgetvalue).map(key => {
        return {
          token: key,
          titles: {
            en: widgetvalue[key]
          }
        };
      })
    };
  }
  let vocabularyterms = widgetvalue.items;
  let supportedLanguages = Object.keys((vocabularyterms === null || vocabularyterms === void 0 ? void 0 : (_vocabularyterms$map = vocabularyterms.map(el => el.titles)) === null || _vocabularyterms$map === void 0 ? void 0 : _vocabularyterms$map.pop()) || {});
  const TermSchema = {
    title: 'Translation of term',
    fieldsets: [{
      id: 'default',
      title: 'Email',
      fields: supportedLanguages
    }],
    properties: Object.fromEntries(supportedLanguages.map(languageIdentifier => {
      var _langmap$languageIden, _langmap$languageIden2;
      return [languageIdentifier, {
        title: (_langmap$languageIden = (_langmap$languageIden2 = _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_12__["default"][languageIdentifier]) === null || _langmap$languageIden2 === void 0 ? void 0 : _langmap$languageIden2.nativeName) !== null && _langmap$languageIden !== void 0 ? _langmap$languageIden : languageIdentifier
      }];
    })),
    required: []
  };
  function onChangeFieldHandler(token, fieldid, fieldvalue) {
    let index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(widgetvalue.items, {
      token: token
    });
    let newitems = widgetvalue.items;
    newitems.splice(index, 1, {
      token: token,
      titles: fieldvalue
    });
    onChange(id, {
      items: newitems
    });
  }
  function addTermHandler(e) {
    e.preventDefault();
    const newtoken = (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)();
    let newitems = widgetvalue.items;
    newitems.push({
      token: newtoken,
      titles: Object.fromEntries(supportedLanguages.map(el => [el, '']))
    });
    onChange(id, {
      items: newitems
    });
    setToFocusId(`field-${supportedLanguages[0]}-0-${id}-${newtoken}`);
    setEditableToken(newtoken);
  }
  function swap(arr, from, to) {
    arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
  }
  let enhancedvocabularyterms = vocabularyterms.map(el => {
    return _objectSpread(_objectSpread({}, el), {}, {
      '@id': el.token
    });
  });
  return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    className: "vocabularytermswidget dictwidget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "add-item-button-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    "aria-label": intl.formatMessage(messages.termtitle),
    onClick: e => {
      addTermHandler(e);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: (_plone_volto_icons_add_svg__WEBPACK_IMPORTED_MODULE_14___default()),
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }), intl.formatMessage(messages.addTerm))), __jsx(_plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    childList: enhancedvocabularyterms.map(o => [o['@id'], o]),
    onMoveItem: result => {
      const {
        source,
        destination
      } = result;
      if (!destination) {
        return;
      }
      let newitems = widgetvalue.items;
      swap(newitems, source.index, destination.index);
      onChange(id, {
        items: newitems
      });
      return true;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, dragProps => {
    const {
      child,
      childId,
      index
    } = dragProps;
    let termProps = {
      index: index,
      id,
      vocabularyterms,
      vterm: child,
      onChange
    };
    return termsWrapper(dragProps, __jsx(_plone_volto_components_manage_Widgets_ObjectWidget__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: `${id}-${child.token}`,
      key: childId,
      onChange: (fieldid, fieldvalue) => {
        onChangeFieldHandler(child.token, fieldid, fieldvalue);
      },
      value: child.titles,
      schema: TermSchema,
      title: "Translation of term",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }
    }), _objectSpread({
      editableToken,
      setEditableToken
    }, termProps));
  }));
};
const termsWrapper = ({
  draginfo
}, OW, termProps) => __jsx(TermsWrapper, {
  draginfo: draginfo,
  termProps: termProps,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 3
  }
}, OW);
const TermsWrapper = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const {
    termProps,
    draginfo,
    children
  } = props;
  const {
    id,
    vocabularyterms,
    vterm,
    onChange
  } = termProps;
  const _updateTermsWithNewToken = (term, newtoken) => {
    let newitems = termProps.vocabularyterms;
    let index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(newitems, {
      token: term.token
    });
    newitems.splice(index, 1, {
      token: newtoken,
      titles: newitems[index].titles
    });
    onChange(id, {
      items: newitems
    });
  };
  function onChangeTokenHandler(event) {
    let value = event.target.value;
    // required token length: 3
    if (value.length > 2) {
      // check if value is different from already used tokens
      if (lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(termProps.vocabularyterms, el => el.token === value)) {
        // token already token. Stay with uuid.
      } else {
        // `token '${value}' is OK`
        _updateTermsWithNewToken(vterm, value);
        termProps.setEditableToken('');
      }
    }
  }
  return __jsx("div", _extends({
    ref: draginfo.innerRef
  }, draginfo.draggableProps, {
    className: "vocabularyterm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 5
    }
  }), __jsx("div", {
    style: {
      alignItems: 'center',
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }, __jsx("div", _extends({}, draginfo.dragHandleProps, {
    className: "draghandlewrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 9
    }
  }), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: (_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_15___default()),
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "ui drag block inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }
  }, children), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 9
    }
  }, vterm.token === termProps.editableToken ? __jsx("input", {
    id: `token-${vterm.token}`,
    title: "Token",
    placeholder: "token",
    onBlur: onChangeTokenHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    icon: true,
    basic: true,
    className: "delete-button",
    title: intl.formatMessage(messages.removeTerm),
    "aria-label": `${intl.formatMessage(messages.removeTerm)} #${vterm.token}`,
    onClick: e => {
      e.preventDefault();
      lodash_remove__WEBPACK_IMPORTED_MODULE_4___default()(vocabularyterms, el => el.token === vterm.token);
      onChange(id, {
        items: vocabularyterms
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_13___default()),
    size: "20px",
    color: "#e40166",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VocabularyTermsWidget);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/WysiwygWidget.jsx"
/*!***********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/WysiwygWidget.jsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plone_volto_slate_widgets_HtmlSlateWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto-slate/widgets/HtmlSlateWidget */ "./node_modules/@plone/volto-slate/src/widgets/HtmlSlateWidget.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_plone_volto_slate_widgets_HtmlSlateWidget__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }

};
;
//# sourceMappingURL=Widgets.chunk.js.map