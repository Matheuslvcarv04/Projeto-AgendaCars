exports.ids = null;
exports.modules = {

/***/ "./node_modules/@plone/volto/src/icons/blank.svg"
/*!*******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/blank.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blank.0f85be1c.svg";

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

/***/ }

};
;
//# sourceMappingURL=Widgets.54621fc9754d8ce87ec3.hot-update.js.map