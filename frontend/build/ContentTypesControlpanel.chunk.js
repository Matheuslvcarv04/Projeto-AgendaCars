"use strict";
exports.ids = ["ContentTypesControlpanel"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentType.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentType.jsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/last */ "lodash/last");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/nth */ "lodash/nth");
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_nth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/join */ "lodash/join");
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\ContentType.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Content Type component.
 * @module components/manage/Controlpanels/ContentType
 */

;



















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  title: {
    id: '{id} Content Type',
    defaultMessage: '{id} Content Type'
  },
  changesSaved: {
    id: 'Changes saved.',
    defaultMessage: 'Changes saved.'
  },
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  save: {
    id: 'Save',
    defaultMessage: 'Save'
  },
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  info: {
    id: 'Info',
    defaultMessage: 'Info'
  }
});

/**
 * ContentType class.
 * @class ContentType
 * @extends Component
 */
class ContentType extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs ContentType
   */
  constructor(props) {
    super(props);
    this.state = {
      visual: false,
      error: null,
      isClient: false
    };
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getControlpanel(lodash_join__WEBPACK_IMPORTED_MODULE_11___default()([this.props.parent, this.props.id], '/'));
    this.setState({
      isClient: true
    });
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    // Control Panel GET
    if (this.props.cpanelRequest.get.loading && nextProps.cpanelRequest.get.error) {
      this.setState({
        error: nextProps.cpanelRequest.get.error
      });
    }

    // Control Panel PATCH
    if (this.props.cpanelRequest.update.loading && nextProps.cpanelRequest.update.loaded) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.info(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        info: true,
        title: this.props.intl.formatMessage(messages.info),
        content: this.props.intl.formatMessage(messages.changesSaved),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }
      }));
    }
  }

  /**
   * Submit handler
   * @method onSubmit
   * @param {object} data Form data.
   * @returns {undefined}
   */
  onSubmit(data) {
    this.props.updateControlpanel(this.props.controlpanel['@id'], data);
  }

  /**
   * Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.getParentUrl)(this.props.pathname));
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$controlpa;
    // Error
    if (this.state.error) {
      return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
        error: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 14
        }
      });
    }
    if ((_this$props$controlpa = this.props.controlpanel) !== null && _this$props$controlpa !== void 0 && _this$props$controlpa.data) {
      var _controlpanel$data, _controlpanel$data2;
      let controlpanel = this.props.controlpanel;
      if ((controlpanel === null || controlpanel === void 0 ? void 0 : (_controlpanel$data = controlpanel.data) === null || _controlpanel$data === void 0 ? void 0 : _controlpanel$data.filter_content_types) === false) {
        controlpanel.data.filter_content_types = {
          title: 'all',
          token: 'all'
        };
      }
      if ((controlpanel === null || controlpanel === void 0 ? void 0 : (_controlpanel$data2 = controlpanel.data) === null || _controlpanel$data2 === void 0 ? void 0 : _controlpanel$data2.filter_content_types) === true) {
        var _controlpanel$data3;
        if (((controlpanel === null || controlpanel === void 0 ? void 0 : (_controlpanel$data3 = controlpanel.data) === null || _controlpanel$data3 === void 0 ? void 0 : _controlpanel$data3.allowed_content_types) || []).length) {
          controlpanel.data.filter_content_types = {
            title: 'some',
            token: 'some'
          };
        } else {
          controlpanel.data.filter_content_types = {
            title: 'none',
            token: 'none'
          };
        }
      }
      return __jsx("div", {
        id: "page-controlpanel",
        className: "ui container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Header, {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }
      }, this.props.intl.formatMessage(messages.title, {
        id: controlpanel.title
      })), __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_16__.Form, {
        isEditForm: true,
        ref: this.form,
        schema: controlpanel.schema,
        formData: controlpanel.data,
        onSubmit: this.onSubmit,
        onCancel: this.onCancel,
        pathname: this.props.pathname,
        visual: this.state.visual,
        hideActions: true,
        loading: this.props.cpanelRequest.update.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }
      }), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        pathname: this.props.pathname,
        hideDefaultViewButtons: true,
        inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          id: "toolbar-save",
          className: "save",
          "aria-label": this.props.intl.formatMessage(messages.save),
          onClick: () => this.form.current.onSubmit(),
          disabled: this.props.cpanelRequest.update.loading,
          loading: this.props.cpanelRequest.update.loading,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_18___default()),
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.save),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 23
          }
        })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: "cancel",
          "aria-label": this.props.intl.formatMessage(messages.cancel),
          onClick: () => this.onCancel(),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_19___default()),
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.cancel),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 23
          }
        }))),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }), document.getElementById('toolbar')));
    }
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 12
      }
    });
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ContentType, "propTypes", {
  updateControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  cpanelRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  controlpanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    schema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ContentType, "defaultProps", {
  controlpanel: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  controlpanel: state.controlpanels.controlpanel,
  cpanelRequest: state.controlpanels,
  pathname: props.location.pathname,
  id: lodash_last__WEBPACK_IMPORTED_MODULE_9___default()(props.location.pathname.split('/')),
  parent: lodash_nth__WEBPACK_IMPORTED_MODULE_10___default()(props.location.pathname.split('/'), -2)
}), {
  getControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_17__.getControlpanel,
  updateControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_17__.updateControlpanel
}))(ContentType));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeLayout.jsx"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeLayout.jsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/nth */ "lodash/nth");
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_nth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/join */ "lodash/join");
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/manage/Sidebar/Sidebar */ "./node_modules/@plone/volto/src/components/manage/Sidebar/Sidebar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/actions/schema/schema */ "./node_modules/@plone/volto/src/actions/schema/schema.js");
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_23__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\ContentTypeLayout.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Content Type component.
 * @module components/manage/Controlpanels/ContentTypeLayout
 */

;























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  changesSaved: {
    id: 'Changes saved.',
    defaultMessage: 'Changes saved.'
  },
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  save: {
    id: 'Save',
    defaultMessage: 'Save'
  },
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  info: {
    id: 'Info',
    defaultMessage: 'Info'
  },
  enable: {
    id: 'Enable editable Blocks',
    defaultMessage: 'Enable editable Blocks'
  }
});

/**
 * ContentTypeLayout class.
 * @class ContentTypeLayout
 * @extends Component
 */
class ContentTypeLayout extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs ContentTypeLayout
   */
  constructor(props) {
    super(props);
    /**
     * Submit handler
     * @method onSubmit
     * @param {object} data Form data.
     * @returns {undefined}
     */
    _defineProperty(this, "onSubmit", data => {
      const schema = {
        properties: {}
      };
      Object.keys(data).filter(k => data[k]).forEach(k => schema.properties[k] = {
        default: data[k]
      });
      this.props.updateSchema(this.props.id, schema);
    });
    /**
     * Cancel handler
     * @method onCancel
     * @returns {undefined}
     */
    _defineProperty(this, "onCancel", () => {
      const url = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname);
      this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(url));
    });
    /**
     * Enable blocks handler
     * @method onEnableBlocks
     * @returns {undefined}
     */
    _defineProperty(this, "onEnableBlocks", () => {
      var _properties$blocksFie, _properties$blocksLay;
      const {
        properties = {}
      } = this.props.schema;
      const blocksFieldName = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(properties);
      const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksLayoutFieldname)(properties);
      const schema = {
        fieldsets: [{
          id: 'layout',
          title: 'Layout',
          fields: ['blocks', 'blocks_layout']
        }],
        properties: {
          blocks: {
            title: 'Blocks',
            type: 'dict',
            widget: 'json',
            factory: 'JSONField',
            default: ((_properties$blocksFie = properties[blocksFieldName]) === null || _properties$blocksFie === void 0 ? void 0 : _properties$blocksFie.default) || {}
          },
          blocks_layout: {
            title: 'Blocks Layout',
            type: 'dict',
            widget: 'json',
            factory: 'JSONField',
            default: ((_properties$blocksLay = properties[blocksLayoutFieldname]) === null || _properties$blocksLay === void 0 ? void 0 : _properties$blocksLay.default) || {
              items: []
            }
          }
        }
      };
      this.props.updateSchema(this.props.id, schema);
    });
    /**
     * Disable Blocks behavior handler
     * @method onDisableBlocksBehavior
     * @returns {undefined}
     */
    _defineProperty(this, "onDisableBlocksBehavior", () => {
      this.props.updateControlpanel(this.props.controlpanel['@id'], {
        [this.state.readOnlyBehavior]: false,
        'volto.blocks.editable.layout': true
      });
    });
    /**
     * Enable Blocks behavior handler
     * @method onEnableBlocksBehavior
     * @returns {undefined}
     */
    _defineProperty(this, "onEnableBlocksBehavior", () => {
      this.props.updateControlpanel(this.props.controlpanel['@id'], {
        'volto.blocks.editable.layout': true
      });
    });
    this.state = {
      visual: false,
      content: null,
      readOnlyBehavior: null,
      error: null,
      isClient: false
    };
    this.form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getControlpanel(lodash_join__WEBPACK_IMPORTED_MODULE_12___default()([this.props.parent, this.props.id], '/'));
    this.props.getSchema(this.props.id);
    this.setState({
      isClient: true
    });
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    // Control Panel GET
    if (this.props.cpanelRequest.get.loading && nextProps.cpanelRequest.get.error) {
      this.setState({
        error: nextProps.cpanelRequest.get.error
      });
    }

    // Schema GET
    if (this.props.schemaRequest.loading && nextProps.schemaRequest.loaded) {
      var _nextProps$schema;
      const properties = ((_nextProps$schema = nextProps.schema) === null || _nextProps$schema === void 0 ? void 0 : _nextProps$schema.properties) || {};
      const content = {};
      for (const key in properties) {
        const value = properties[key].default;
        if (value) {
          content[key] = value;
        }
      }
      if ((0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.hasBlocksData)(properties)) {
        var _properties$blocksFie2, _properties$blocksLay2, _properties$blocksFie3;
        this.setState({
          visual: true
        });
        const blocksFieldName = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(properties);
        const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksLayoutFieldname)(properties);
        content[blocksFieldName] = ((_properties$blocksFie2 = properties[blocksFieldName]) === null || _properties$blocksFie2 === void 0 ? void 0 : _properties$blocksFie2.default) || {};
        content[blocksLayoutFieldname] = ((_properties$blocksLay2 = properties[blocksLayoutFieldname]) === null || _properties$blocksLay2 === void 0 ? void 0 : _properties$blocksLay2.default) || {
          items: []
        };
        const blocksBehavior = ((_properties$blocksFie3 = properties[blocksFieldName]) === null || _properties$blocksFie3 === void 0 ? void 0 : _properties$blocksFie3.behavior) || '';
        this.setState({
          readOnlyBehavior: !blocksBehavior.includes('generated') ? blocksBehavior : ''
        });
      } else {
        this.setState({
          visual: false,
          readOnlyBehavior: ''
        });
      }
      this.setState({
        content: content
      });
    }

    // Schema updated
    if (this.props.schemaRequest.update.loading && nextProps.schemaRequest.update.loaded) {
      this.props.getSchema(this.props.id);
      react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.info(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_17__["default"], {
        info: true,
        title: this.props.intl.formatMessage(messages.info),
        content: this.props.intl.formatMessage(messages.changesSaved),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }
      }));
    }

    // Blocks behavior disabled
    if (this.props.cpanelRequest.update.loading && nextProps.cpanelRequest.update.loaded) {
      this.onEnableBlocks();
    }
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$schema, _this$props$schema2;
    // Error
    if (this.state.error) {
      return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_13__["default"], {
        error: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 14
        }
      });
    }
    if (!this.state.visual) {
      var _this$props, _this$props$controlpa;
      // Still loading
      if (!this.state.content) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 16
          }
        });
      }

      // Blocks are not enabled
      return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
        placeholder: true,
        id: "page-controlpanel-layout",
        className: "ui container center aligned",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 13
        }
      }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
        id: "Can not edit Layout for <strong>{type}</strong> content-type as it doesn't have support for <strong>Volto Blocks</strong> enabled",
        defaultMessage: "Can not edit Layout for <strong>{type}</strong> content-type as it doesn't have support for <strong>Volto Blocks</strong> enabled",
        values: {
          strong: (...chunks) => __jsx("strong", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 42
            }
          }, chunks),
          type: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$controlpa = _this$props.controlpanel) === null || _this$props$controlpa === void 0 ? void 0 : _this$props$controlpa.title) || this.props.id
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "ui divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        primary: true,
        onClick: this.onEnableBlocksBehavior,
        content: this.props.intl.formatMessage(messages.enable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 13
        }
      })), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        pathname: this.props.pathname,
        hideDefaultViewButtons: true,
        inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          className: "item",
          to: "#",
          onClick: () => this.onCancel(),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_23___default()),
          size: "30px",
          className: "contents circled",
          title: this.props.intl.formatMessage(messages.back),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 23
          }
        }))),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 15
        }
      }), document.getElementById('toolbar')));
    }
    if (this.state.readOnlyBehavior) {
      var _this$props2, _this$props2$controlp;
      return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
        placeholder: true,
        id: "page-controlpanel-layout",
        className: "ui container center aligned",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 13
        }
      }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
        id: "Can not edit Layout for <strong>{type}</strong> content-type as the <strong>Blocks behavior</strong> is enabled and <strong>read-only</strong>",
        defaultMessage: "Can not edit Layout for <strong>{type}</strong> content-type as the <strong>Blocks behavior</strong> is enabled and <strong>read-only</strong>",
        values: {
          strong: (...chunks) => __jsx("strong", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 42
            }
          }, chunks),
          type: ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$controlp = _this$props2.controlpanel) === null || _this$props2$controlp === void 0 ? void 0 : _this$props2$controlp.title) || this.props.id
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "ui divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        primary: true,
        onClick: this.onDisableBlocksBehavior,
        content: this.props.intl.formatMessage(messages.enable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 13
        }
      })), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        pathname: this.props.pathname,
        hideDefaultViewButtons: true,
        inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          className: "item",
          to: "#",
          onClick: () => this.onCancel(),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_23___default()),
          size: "30px",
          className: "contents circled",
          title: this.props.intl.formatMessage(messages.back),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 23
          }
        }))),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 15
        }
      }), document.getElementById('toolbar')));
    }

    // Render layout editor
    const blocksFieldName = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(((_this$props$schema = this.props.schema) === null || _this$props$schema === void 0 ? void 0 : _this$props$schema.properties) || {});
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksLayoutFieldname)(((_this$props$schema2 = this.props.schema) === null || _this$props$schema2 === void 0 ? void 0 : _this$props$schema2.properties) || {});
    return __jsx("div", {
      id: "page-controlpanel-layout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_18__.Form, {
      isAdminForm: true,
      ref: this.form,
      schema: {
        fieldsets: [{
          id: 'layout',
          title: 'Layout',
          fields: [blocksFieldName, blocksLayoutFieldname]
        }],
        properties: _objectSpread(_objectSpread({}, this.props.schema.properties[blocksFieldName]), this.props.schema.properties[blocksLayoutFieldname]),
        required: []
      },
      formData: this.state.content,
      onSubmit: this.onSubmit,
      onCancel: this.onCancel,
      pathname: this.props.pathname,
      visual: this.state.visual,
      hideActions: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 9
      }
    }), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      settingsTab: true,
      documentTab: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 13
      }
    }), document.getElementById('sidebar')), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        id: "toolbar-save",
        className: "save",
        "aria-label": this.props.intl.formatMessage(messages.save),
        onClick: () => this.form.current.onSubmit(),
        disabled: this.props.schemaRequest.update.loading,
        loading: this.props.schemaRequest.update.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_21___default()),
        className: "circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.save),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 21
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: "cancel",
        "aria-label": this.props.intl.formatMessage(messages.cancel),
        onClick: () => this.onCancel(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_22___default()),
        className: "circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.cancel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 21
        }
      }))),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 13
      }
    }), document.getElementById('toolbar')));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ContentTypeLayout, "propTypes", {
  updateControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getSchema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  updateSchema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  schemaRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  cpanelRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
  controlpanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    schema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ContentTypeLayout, "defaultProps", {
  schema: {},
  controlpanel: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  schema: state.schema.schema,
  schemaRequest: state.schema,
  cpanelRequest: state.controlpanels,
  controlpanel: state.controlpanels.controlpanel,
  pathname: props.location.pathname,
  id: lodash_nth__WEBPACK_IMPORTED_MODULE_11___default()(props.location.pathname.split('/'), -2),
  parent: lodash_nth__WEBPACK_IMPORTED_MODULE_11___default()(props.location.pathname.split('/'), -3)
}), {
  getSchema: _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_19__.getSchema,
  updateSchema: _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_19__.updateSchema,
  getControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_20__.getControlpanel,
  updateControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_20__.updateControlpanel
}))(ContentTypeLayout));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeSchema.jsx"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeSchema.jsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/actions/schema/schema */ "./node_modules/@plone/volto/src/actions/schema/schema.js");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/nth */ "lodash/nth");
/* harmony import */ var lodash_nth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_nth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\ContentTypeSchema.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_11___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Content type schema.
 * @module components/manage/Controlpanels/ContentTypeSchema
 */

;

















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({
  title: {
    id: '{id} Schema',
    defaultMessage: '{id} Schema'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  save: {
    id: 'Save',
    defaultMessage: 'Save'
  },
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  error: {
    id: 'Error',
    defaultMessage: 'Error'
  },
  typeCreated: {
    id: 'Schema updates',
    defaultMessage: 'Schema updates'
  },
  info: {
    id: 'Info',
    defaultMessage: 'Info'
  },
  changesSaved: {
    id: 'Changes saved.',
    defaultMessage: 'Changes saved.'
  }
});

/**
 * ContentTypeSchema class.
 * @class ContentTypeSchema
 * @extends Component
 */
class ContentTypeSchema extends react__WEBPACK_IMPORTED_MODULE_11__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    _defineProperty(this, "form", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createRef());
    _defineProperty(this, "makeSchemaList", schema => {
      const result = {
        title: 'Schema',
        type: 'object',
        fieldsets: [{
          fields: ['schema'],
          id: 'default',
          title: 'Default'
        }],
        properties: {
          schema: {
            description: 'Form schema',
            title: 'Form schema',
            type: 'schema',
            id: 'schema',
            widget: 'schema'
          }
        },
        required: [],
        layouts: null
      };
      result.layouts = schema.layouts.slice();
      return result;
    });
    _defineProperty(this, "isEditable", field => !field.behavior || field.behavior.includes('generated'));
    _defineProperty(this, "makeSchemaData", (schema, contentType) => {
      const fieldsets = schema.fieldsets.map(fieldset => {
        const readOnlyFields = fieldset.fields.filter(fieldId => !this.isEditable(schema.properties[fieldId]) && fieldId !== 'changeNote');
        const userCreatedFields = fieldset.fields.filter(fieldId => this.isEditable(schema.properties[fieldId]));
        const changeNote = fieldset.fields.filter(fieldId => fieldId === 'changeNote');
        return _objectSpread(_objectSpread({}, fieldset), {}, {
          fields: [...readOnlyFields, ...userCreatedFields, ...changeNote]
        });
      });
      const result = _objectSpread(_objectSpread({}, schema), {}, {
        fieldsets,
        contentType
      });
      return {
        schema: JSON.stringify(result)
      };
    });
    this.state = {
      error: null,
      schema: null,
      content: null,
      isClient: false
    };
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createRef();
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getSchema(this.props.id);
    this.setState({
      isClient: true
    });
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    // Schema error
    if (this.props.schemaRequest.loading && nextProps.schemaRequest.error) {
      this.setState({
        error: nextProps.schemaRequest.error
      });
    }

    // Schema GET
    if (this.props.schemaRequest.loading && nextProps.schemaRequest.loaded) {
      var _nextProps$schema;
      let properties = ((_nextProps$schema = nextProps.schema) === null || _nextProps$schema === void 0 ? void 0 : _nextProps$schema.properties) || {};
      let content = {};
      let value, key;
      for (key in properties) {
        value = properties[key].default;
        if (value) {
          content[key] = value;
        }
      }
      this.setState({
        schema: nextProps.schema,
        content: content
      });
    }

    // Schema updated
    if (this.props.schemaRequest.put.loading && nextProps.schemaRequest.put.loaded) {
      // this.props.getSchema(this.props.id);
      react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.info(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_5__["default"], {
        info: true,
        title: this.props.intl.formatMessage(messages.info),
        content: this.props.intl.formatMessage(messages.changesSaved),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }));
    }

    // Schema update error
    if (this.props.schemaRequest.put.loading && nextProps.schemaRequest.put.error) {
      var _nextProps$schemaRequ;
      react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_5__["default"], {
        error: true,
        title: this.props.intl.formatMessage(messages.error),
        content: JSON.stringify(((_nextProps$schemaRequ = nextProps.schemaRequest.put.error.response.body) === null || _nextProps$schemaRequ === void 0 ? void 0 : _nextProps$schemaRequ.message) || nextProps.schemaRequest.put.error.response.text),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 9
        }
      }));
    }
  }

  /**
   * Submit handler
   * @method onSubmit
   * @param {object} data Form data.
   * @returns {undefined}
   */
  onSubmit(data) {
    this.props.putSchema(this.props.id, data.schema);
  }

  /**
   * Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    let url = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_1__.getParentUrl)(this.props.pathname);
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_1__.getParentUrl)(url));
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    // Error
    if (this.state.error) {
      return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 14
        }
      });
    }
    if (this.state.schema) {
      var _this$props, _this$props$schema;
      const contentTypeSchema = this.makeSchemaList(this.state.schema);
      const schemaData = this.makeSchemaData(this.state.schema, this.props.id);
      return __jsx("div", {
        id: "page-controlpanel-schema",
        className: "ui container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.Header, {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }
      }, this.props.intl.formatMessage(messages.title, {
        id: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$schema = _this$props.schema) === null || _this$props$schema === void 0 ? void 0 : _this$props$schema.title) || this.props.id
      })), __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__.Form, {
        ref: this.form,
        schema: contentTypeSchema,
        formData: schemaData,
        pathname: this.props.pathname,
        onSubmit: this.onSubmit,
        onCancel: this.onCancel,
        hideActions: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }
      }), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_13__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        pathname: this.props.pathname,
        hideDefaultViewButtons: true,
        inner: __jsx((react__WEBPACK_IMPORTED_MODULE_11___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
          id: "toolbar-save",
          className: "save",
          "aria-label": this.props.intl.formatMessage(messages.save),
          onClick: () => this.form.current.onSubmit(),
          disabled: this.props.schemaRequest.put.loading,
          loading: this.props.schemaRequest.put.loading,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_9___default()),
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.save),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 23
          }
        })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
          className: "cancel",
          "aria-label": this.props.intl.formatMessage(messages.cancel),
          onClick: () => this.onCancel(),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 21
          }
        }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_8___default()),
          className: "circled",
          size: "30px",
          title: this.props.intl.formatMessage(messages.cancel),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 23
          }
        }))),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 15
        }
      }), document.getElementById('toolbar')));
    }
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 12
      }
    });
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ContentTypeSchema, "propTypes", {
  getSchema: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,
  putSchema: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string).isRequired,
  id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string).isRequired
});
/**
 * Default properties
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ContentTypeSchema, "defaultProps", {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_16__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_12__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)((state, props) => ({
  schema: state.schema.schema,
  schemaRequest: state.schema,
  pathname: props.location.pathname,
  id: lodash_nth__WEBPACK_IMPORTED_MODULE_2___default()(props.location.pathname.split('/'), -2)
}), {
  getSchema: _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_0__.getSchema,
  putSchema: _plone_volto_actions_schema_schema__WEBPACK_IMPORTED_MODULE_0__.putSchema
}))(ContentTypeSchema));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypes.jsx"
/*!****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypes.jsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/last */ "lodash/last");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Controlpanels_ContentTypesActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ContentTypesActions */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypesActions.jsx");
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/add-document.svg */ "./node_modules/@plone/volto/src/icons/add-document.svg");
/* harmony import */ var _plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\ContentTypes.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Content Types component.
 * @module components/manage/Controlpanels/ContentTypes
 */

;



















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  add: {
    id: 'Add',
    defaultMessage: 'Add'
  },
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  yes: {
    id: 'Yes',
    defaultMessage: 'Yes'
  },
  no: {
    id: 'No',
    defaultMessage: 'No'
  },
  addTypeFormTitle: {
    id: 'Add new content type',
    defaultMessage: 'Add new content type'
  },
  addTypeButtonTitle: {
    id: 'Add new content type',
    defaultMessage: 'Add new content type'
  },
  addTypeFormTitleTitle: {
    id: 'Title',
    defaultMessage: 'Title'
  },
  addTypeFormDescriptionTitle: {
    id: 'Description',
    defaultMessage: 'Description'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  typeCreated: {
    id: 'Content type created',
    defaultMessage: 'Content type created'
  },
  deleteConfirmTitle: {
    id: 'Delete Type',
    defaultMessage: 'Delete Type'
  },
  typeDeleted: {
    id: 'Content type deleted',
    defaultMessage: 'Content type deleted'
  }
});

/**
 * ContentTypes class.
 * @class ContentTypes
 * @extends Component
 */
class ContentTypes extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Types
   */
  constructor(props) {
    super(props);
    this.onAddTypeSubmit = this.onAddTypeSubmit.bind(this);
    this.onAddTypeError = this.onAddTypeError.bind(this);
    this.onAddTypeSuccess = this.onAddTypeSuccess.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.onSchema = this.onSchema.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
    this.onDeleteOk = this.onDeleteOk.bind(this);
    this.onDeleteTypeSuccess = this.onDeleteTypeSuccess.bind(this);
    this.state = {
      showAddType: false,
      addTypeError: '',
      showDelete: false,
      typeToDelete: undefined,
      error: null,
      isClient: false
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getControlpanel(this.props.id);
    this.setState({
      isClient: true
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    // Get
    if (this.props.cpanelRequest.get.loading && nextProps.cpanelRequest.get.error) {
      this.setState({
        error: nextProps.cpanelRequest.get.error
      });
    }

    // Create
    if (this.props.cpanelRequest.post.loading && nextProps.cpanelRequest.post.loaded) {
      this.props.getControlpanel(this.props.id);
      this.onAddTypeSuccess();
    }
    if (this.props.cpanelRequest.post.loading && nextProps.cpanelRequest.post.error) {
      this.onAddTypeError(nextProps.cpanelRequest.post.error);
    }

    // Delete
    if (this.props.cpanelRequest.delete.loading && nextProps.cpanelRequest.delete.loaded) {
      this.props.getControlpanel(this.props.id);
      this.onDeleteTypeSuccess();
    }
  }

  /** Add  */

  /**
   * @param {object} data Form data from the ModalForm.
   * @param {func} callback to set new form data in the ModalForm
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onAddTypeSubmit(data, callback) {
    this.props.postControlpanel(this.props.id, data);
    this.setState({
      addTypeSetFormDataCallback: callback
    });
  }

  /**
   * Handle Errors after postControlpanel()
   *
   * @param {*} error object. Requires the property .message
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onAddTypeError(error) {
    this.setState({
      addTypeError: error.message
    });
  }

  /**
   * Handle Success after postControlpanel()
   *
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onAddTypeSuccess() {
    var _this$_addTypeTrigger;
    this.state.addTypeSetFormDataCallback({});
    this.setState({
      showAddType: false,
      addTypeError: undefined,
      addTypeSetFormDataCallback: undefined
    });
    (_this$_addTypeTrigger = this._addTypeTrigger) === null || _this$_addTypeTrigger === void 0 ? void 0 : _this$_addTypeTrigger.focus();
    react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_14__["default"], {
      success: true,
      title: this.props.intl.formatMessage(messages.success),
      content: this.props.intl.formatMessage(messages.typeCreated),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 7
      }
    }));
  }

  /** Edit  */
  /**
   * @param {*} event Event object.
   * @param {*} { value }
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onEdit(event, {
    value
  }) {
    this.props.history.push(value);
  }

  /**
   * Layout button click
   * @param {*} event
   * @param {string} value
   * @returns {undefined}
   */
  onLayout(event, {
    value
  }) {
    this.props.history.push(value);
  }

  /** Delete */
  /**
   * @param {*} event Event object.
   * @param {*} { value }
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onDelete(event, {
    value
  }) {
    if (value) {
      this.setState({
        showDelete: true,
        typeToDelete: value
      });
    }
  }

  /** Folder
   * @param {Object} event Event object.
   * @param {string} { value }
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onSchema(event, {
    value
  }) {
    if (value) {
      this.props.history.push(`${this.props.pathname}/${value}/schema`);
    }
  }

  /**
   * On delete ok
   * @method onDeleteOk
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onDeleteOk() {
    const item = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getId)(this.state.typeToDelete);
    this.props.deleteControlpanel(this.props.id, item);
    this.setState({
      showDelete: false,
      typeToDelete: undefined
    });
  }

  /**
   * On delete cancel
   * @method onDeleteCancel
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onDeleteCancel() {
    this.setState({
      showDelete: false,
      typeToDelete: undefined
    });
  }

  /**
   * Handle Success after deleteControlpanel()
   *
   * @method onDeleteTypeSuccess
   * @memberof ContentTypes
   * @returns {undefined}
   */
  onDeleteTypeSuccess() {
    react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_14__["default"], {
      success: true,
      title: this.props.intl.formatMessage(messages.success),
      content: this.props.intl.formatMessage(messages.typeDeleted),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 7
      }
    }));
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    // Error
    if (this.state.error) {
      return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_11__["default"], {
        error: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 14
        }
      });
    }
    if (!this.props.controlpanel) {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 14
        }
      });
    }
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      className: "types-control-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Confirm, {
      open: this.state.showDelete,
      header: this.props.intl.formatMessage(messages.deleteConfirmTitle),
      cancelButton: this.props.intl.formatMessage(messages.no),
      confirmButton: this.props.intl.formatMessage(messages.yes),
      content: __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 15
        }
      }, __jsx("ul", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 17
        }
      }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
        id: "Do you really want to delete the type {typename}?",
        defaultMessage: "Do you really want to delete type {typename}?",
        values: {
          typename: __jsx("b", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 33
            }
          }, (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getId)(this.state.typeToDelete || ''))
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 19
        }
      }))),
      onCancel: this.onDeleteCancel,
      onConfirm: this.onDeleteOk,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 11
      }
    }), __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_19__.ModalForm, {
      open: this.state.showAddType,
      className: "modal add-content-type",
      onSubmit: this.onAddTypeSubmit,
      submitError: this.state.addTypeError,
      onCancel: () => {
        var _this$_addTypeTrigger2;
        this.setState({
          showAddType: false
        });
        (_this$_addTypeTrigger2 = this._addTypeTrigger) === null || _this$_addTypeTrigger2 === void 0 ? void 0 : _this$_addTypeTrigger2.focus();
      },
      title: this.props.intl.formatMessage(messages.addTypeFormTitle),
      loading: this.props.cpanelRequest.post.loading,
      schema: {
        fieldsets: [{
          id: 'default',
          title: 'Content type',
          fields: ['title', 'description']
        }],
        properties: {
          title: {
            title: this.props.intl.formatMessage(messages.addTypeFormTitleTitle),
            type: 'string',
            description: ''
          },
          description: {
            title: this.props.intl.formatMessage(messages.addTypeFormDescriptionTitle),
            type: 'string',
            description: ''
          }
        },
        required: ['title']
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 11
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 9
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header, {
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 13
      }
    }, this.props.controlpanel.title), __jsx("section", {
      id: "content-core",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {
      compact: true,
      singleLine: true,
      striped: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 21
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
      id: "Type",
      defaultMessage: "Type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 23
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 21
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
      id: "Description",
      defaultMessage: "Description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 23
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
      id: "Items",
      defaultMessage: "Items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 23
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      textAlign: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 21
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
      id: "Actions",
      defaultMessage: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 23
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 17
      }
    }, this.props.controlpanel.items.map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row, {
      key: item['@id'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 23
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: `${this.props.pathname}/${item['id']}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 25
      }
    }, item.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 23
      }
    }, item.description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 23
      }
    }, item.count), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      textAlign: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Controlpanels_ContentTypesActions__WEBPACK_IMPORTED_MODULE_15__["default"], {
      item: item,
      path: this.props.pathname,
      onEdit: this.onEdit,
      onDelete: this.onDelete,
      onSchema: this.onSchema,
      onLayout: this.onLayout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 25
      }
    }))))))))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname),
        className: "item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_18___default()),
        size: "30px",
        className: "contents circled",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 21
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: "add",
        "aria-label": this.props.intl.formatMessage(messages.add),
        tabIndex: 0,
        id: "toolbar-add",
        ref: el => {
          this._addTypeTrigger = el;
        },
        onClick: () => {
          this.setState({
            showAddType: true
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: (_plone_volto_icons_add_document_svg__WEBPACK_IMPORTED_MODULE_17___default()),
        title: this.props.intl.formatMessage(messages.addTypeButtonTitle),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 21
        }
      }))),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 13
      }
    }), document.getElementById('toolbar')));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ContentTypes, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  getControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  postControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteControlpanel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  cpanelRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)).isRequired,
  controlpanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().integer)
    }))
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  controlpanel: state.controlpanels.controlpanel,
  cpanelRequest: state.controlpanels,
  pathname: props.location.pathname,
  id: lodash_last__WEBPACK_IMPORTED_MODULE_7___default()(props.location.pathname.split('/'))
}), {
  getControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_16__.getControlpanel,
  postControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_16__.postControlpanel,
  deleteControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_16__.deleteControlpanel
}))(ContentTypes));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypesActions.jsx"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypesActions.jsx ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_file_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/file.svg */ "./node_modules/@plone/volto/src/icons/file.svg");
/* harmony import */ var _plone_volto_icons_file_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_file_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/folder.svg */ "./node_modules/@plone/volto/src/icons/folder.svg");
/* harmony import */ var _plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/pen.svg */ "./node_modules/@plone/volto/src/icons/pen.svg");
/* harmony import */ var _plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\ContentTypesActions.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
/**
 * Content Types component.
 * @module components/manage/Controlpanels/ContentTypesActions
 */









/**
 * ContentTypesActions class.
 * @class ContentTypesActions
 * @extends Component
 */
const ContentTypesActions = ({
  item,
  path,
  onEdit,
  onDelete,
  onLayout,
  onSchema
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    icon: "ellipsis horizontal",
    className: `actions-${item.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Menu, {
    className: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
    onClick: onEdit,
    value: `${path}/${item.id}`,
    className: `edit-${item.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_pen_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Edit",
    defaultMessage: "Edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
    onClick: onSchema,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_folder_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Schema",
    defaultMessage: "Schema",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
    onClick: onLayout,
    value: `${path}/${item.id}/layout`,
    className: `layout-${item.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_file_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Layout",
    defaultMessage: "Layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
    onClick: onDelete,
    value: item['@id'],
    className: `delete-${item.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Delete",
    defaultMessage: "Delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ContentTypesActions));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx"
/*!************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/Error/Error.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\theme\\Error\\Error.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * @module components/theme/Error/Error
 */

;


/**
 * Error function.
 * @function Error
 * @returns {string} Markup of the error page.
 */
const Error = props => {
  const {
    views
  } = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_1__["default"];
  const {
    error
  } = props;
  let FoundView;
  if (error.status === undefined) {
    // For some reason, while development and if CORS is in place and the
    // requested resource is 404, it returns undefined as status, then the
    // next statement will fail
    FoundView = views.errorViews.corsError;
  } else {
    FoundView = views.errorViews[error.status.toString()];
  }
  if (!FoundView) {
    FoundView = views.errorViews['404']; // default to 404
  }
  return __jsx("div", {
    id: "view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(FoundView, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }

};
;
//# sourceMappingURL=ContentTypesControlpanel.chunk.js.map