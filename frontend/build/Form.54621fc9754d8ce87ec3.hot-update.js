"use strict";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultEdit.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultEdit.jsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_manage_Sidebar_SidebarPortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/SidebarPortal */ "./node_modules/@plone/volto/src/components/manage/Sidebar/SidebarPortal.tsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _DefaultView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultView */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultView.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\DefaultEdit.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;





const DefaultBlockEdit = props => {
  var _blocksConfig$data$T, _blocksConfig$data$T2;
  const {
    blocksConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_1__["default"].blocks.blocksConfig
  } = props;
  const {
    data,
    onChangeBlock,
    block,
    selected,
    navRoot,
    contentType
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const blockSchema = blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$data$T = blocksConfig[data['@type']]) === null || _blocksConfig$data$T === void 0 ? void 0 : _blocksConfig$data$T.blockSchema;
  const schema = typeof blockSchema === 'function' ? blockSchema(_objectSpread(_objectSpread({}, props), {}, {
    intl
  })) : blockSchema;
  const BlockView = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$data$T2 = blocksConfig[data['@type']]) === null || _blocksConfig$data$T2 === void 0 ? void 0 : _blocksConfig$data$T2['view']) || _DefaultView__WEBPACK_IMPORTED_MODULE_5__["default"];
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(BlockView, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })), schema ? __jsx(_plone_volto_components_manage_Sidebar_SidebarPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selected: selected,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_4__.BlockDataForm, {
    block: block,
    schema: schema,
    title: schema.title,
    onChangeField: (id, value) => {
      onChangeBlock(block, _objectSpread(_objectSpread({}, data), {}, {
        [id]: value
      }));
    },
    formData: data,
    navRoot: navRoot,
    contentType: contentType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultBlockEdit);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Edit.jsx"
/*!*******************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Edit.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/actions/sidebar/sidebar */ "./node_modules/@plone/volto/src/actions/sidebar/sidebar.js");
/* harmony import */ var _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/actions/form/form */ "./node_modules/@plone/volto/src/actions/form/form.js");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/ObjectBrowser */ "./node_modules/@plone/volto/src/components/manage/Sidebar/ObjectBrowser.jsx");
/* harmony import */ var _plone_volto_components_manage_Blocks_Block_DefaultView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Blocks/Block/DefaultView */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultView.jsx");
/* harmony import */ var _plone_volto_components_manage_Blocks_Block_DefaultEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Blocks/Block/DefaultEdit */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultEdit.jsx");
/* harmony import */ var _plone_volto_components_manage_Sidebar_SidebarPortal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/SidebarPortal */ "./node_modules/@plone/volto/src/components/manage/Sidebar/SidebarPortal.tsx");
/* harmony import */ var _plone_volto_components_manage_Blocks_Block_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Blocks/Block/Settings */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Settings.jsx");
/* harmony import */ var _plone_volto_components_manage_Blocks_Block_Schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/manage/Blocks/Block/Schema */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Schema.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\Edit.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Edit block.
 * @module components/manage/Blocks/Block/Edit
 */

;














const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}'
  }
});

/**
 * Edit block class.
 * @class Edit
 * @extends Component
 */
class Edit extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "blockNode", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());
  }
  componentDidMount() {
    var _blocksConfig$type, _blocksConfig$type2;
    const {
      type
    } = this.props;
    const {
      blocksConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__["default"].blocks.blocksConfig
    } = this.props;
    const blockHasOwnFocusManagement = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type = blocksConfig[type]) === null || _blocksConfig$type === void 0 ? void 0 : _blocksConfig$type['blockHasOwnFocusManagement']) || null;
    if (!blockHasOwnFocusManagement && this.props.selected && this.blockNode.current) {
      this.blockNode.current.focus();
    }
    const tab = this.props.manage ? 1 : (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type2 = blocksConfig[type]) === null || _blocksConfig$type2 === void 0 ? void 0 : _blocksConfig$type2.sidebarTab) || 0;
    if (this.props.selected && this.props.editable && this.props.sidebarTab !== 2) {
      this.props.setSidebarTab(tab);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    var _blocksConfig$type3;
    const {
      blocksConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__["default"].blocks.blocksConfig
    } = this.props;
    const {
      selected,
      type
    } = this.props;
    const blockHasOwnFocusManagement = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type3 = blocksConfig[type]) === null || _blocksConfig$type3 === void 0 ? void 0 : _blocksConfig$type3['blockHasOwnFocusManagement']) || null;
    if (!blockHasOwnFocusManagement && nextProps.selected && selected !== nextProps.selected && this.blockNode.current) {
      this.blockNode.current.focus();
    }
    if ((!this.props.selected && nextProps.selected || type !== nextProps.type) && this.props.editable) {
      var _blocksConfig$nextPro;
      const tab = this.props.manage ? 1 : (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$nextPro = blocksConfig[nextProps.type]) === null || _blocksConfig$nextPro === void 0 ? void 0 : _blocksConfig$nextPro.sidebarTab) || 0;
      if (this.props.sidebarTab !== 2) {
        this.props.setSidebarTab(tab);
      }
    }
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$data, _blocksConfig$type4, _this$props$data2, _blocksConfig$type6, _blocksConfig$type7, _this$props$blocksErr;
    const {
      blocksConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__["default"].blocks.blocksConfig
    } = this.props;
    const {
      editable,
      type,
      isContainer: parentIsContainer
    } = this.props;
    const disableNewBlocks = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.disableNewBlocks;
    let Block = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type4 = blocksConfig[type]) === null || _blocksConfig$type4 === void 0 ? void 0 : _blocksConfig$type4['edit']) || _plone_volto_components_manage_Blocks_Block_DefaultEdit__WEBPACK_IMPORTED_MODULE_11__["default"];
    if ((_this$props$data2 = this.props.data) !== null && _this$props$data2 !== void 0 && _this$props$data2.readOnly || !editable && !_plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__["default"].blocks.showEditBlocksInBabelView) {
      var _blocksConfig$type5;
      Block = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type5 = blocksConfig[type]) === null || _blocksConfig$type5 === void 0 ? void 0 : _blocksConfig$type5['view']) || _plone_volto_components_manage_Blocks_Block_DefaultView__WEBPACK_IMPORTED_MODULE_10__["default"];
    }
    const schema = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type6 = blocksConfig[type]) === null || _blocksConfig$type6 === void 0 ? void 0 : _blocksConfig$type6['schema']) || _plone_volto_components_manage_Blocks_Block_Schema__WEBPACK_IMPORTED_MODULE_14__["default"];
    const blockHasOwnFocusManagement = (blocksConfig === null || blocksConfig === void 0 ? void 0 : (_blocksConfig$type7 = blocksConfig[type]) === null || _blocksConfig$type7 === void 0 ? void 0 : _blocksConfig$type7['blockHasOwnFocusManagement']) || null;
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Block !== null ? __jsx("div", {
      role: "presentation",
      onMouseEnter: e => {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.hovered !== this.props.id) {
          this.props.setUIState({
            hovered: this.props.id
          });
        }
      },
      onMouseLeave: e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.setUIState({
          hovered: null
        });
      },
      onClick: e => {
        const isMultipleSelection = e.shiftKey || e.ctrlKey || e.metaKey;
        !this.props.selected && this.props.onSelectBlock(this.props.id, this.props.selected ? false : isMultipleSelection, e);
      },
      onFocus: e => {
        const isMultipleSelection = e.shiftKey || e.ctrlKey || e.metaKey;
        !this.props.selected && this.props.onSelectBlock(this.props.id, this.props.selected ? false : isMultipleSelection, e);
      },
      onKeyDown: !(blockHasOwnFocusManagement || disableNewBlocks) ? e => this.props.handleKeyDown(e, this.props.index, this.props.id, this.blockNode.current) : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('block', type, this.props.data.variation, {
        selected: this.props.selected || this.props.multiSelected,
        multiSelected: this.props.multiSelected,
        hovered: this.props.hovered === this.props.id,
        error: !!((_this$props$blocksErr = this.props.blocksErrors) !== null && _this$props$blocksErr !== void 0 && _this$props$blocksErr[this.props.id])
      }),
      style: {
        outline: 'none'
      },
      ref: this.blockNode
      // The tabIndex is required for the keyboard navigation
      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */,
      tabIndex: !blockHasOwnFocusManagement ? -1 : null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    }, __jsx(Block, _extends({}, this.props, {
      blockNode: this.blockNode,
      data: this.props.data,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        contained: parentIsContainer
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    })), this.props.manage && __jsx(_plone_volto_components_manage_Sidebar_SidebarPortal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      selected: this.props.selected,
      tab: "sidebar-settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_manage_Blocks_Block_Settings__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, this.props, {
      schema: schema,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    })))) : __jsx("div", {
      role: "presentation",
      onMouseEnter: e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.setUIState({
          hovered: this.props.id
        });
      },
      onFocus: e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.setUIState({
          hovered: this.props.id
        });
      },
      onMouseLeave: e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.setUIState({
          hovered: null
        });
      },
      onClick: () => !this.props.selected && this.props.onSelectBlock(this.props.id),
      onKeyDown: !(blockHasOwnFocusManagement || disableNewBlocks) ? e => this.props.handleKeyDown(e, this.props.index, this.props.id, this.blockNode.current) : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(`block ${type}`, {
        selected: this.props.selected
      }),
      style: {
        outline: 'none'
      },
      ref: this.blockNode,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    }, this.props.intl.formatMessage(messages.unknownBlock, {
      block: type
    })));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(Edit, "propTypes", {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  // properties is mapped to formData, so it's not connected to changes of the object
  properties: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  multiSelected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  manage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onMoveBlock: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onDeleteBlock: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  editable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(Edit, "defaultProps", {
  manage: false,
  editable: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl, _plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_9__["default"], (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)((state, props) => {
  var _state$form, _state$sidebar;
  return {
    hovered: ((_state$form = state.form) === null || _state$form === void 0 ? void 0 : _state$form.ui.hovered) || null,
    sidebarTab: (_state$sidebar = state.sidebar) === null || _state$sidebar === void 0 ? void 0 : _state$sidebar.tab
  };
}, {
  setSidebarTab: _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__.setSidebarTab,
  setUIState: _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_7__.setUIState
}))(Edit));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Settings.jsx"
/*!***********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Settings.jsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\Settings.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;



const Settings = ({
  data,
  block,
  onChangeBlock,
  schema,
  navRoot,
  contentType
}) => {
  return __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_3__.BlockDataForm, {
    schema: schema,
    title: schema.title,
    onChangeField: (id, value) => {
      onChangeBlock(block, _objectSpread(_objectSpread({}, data), {}, {
        [id]: value
      }));
    },
    onChangeBlock: onChangeBlock,
    formData: data,
    applySchemaEnhancers: false,
    navRoot: navRoot,
    contentType: contentType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  });
};
Settings.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  block: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onChangeBlock: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(Settings));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }

};
;
//# sourceMappingURL=Form.54621fc9754d8ce87ec3.hot-update.js.map