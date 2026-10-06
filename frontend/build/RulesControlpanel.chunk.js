exports.ids = ["RulesControlpanel"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/icons/down.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/down.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/down.dde5dafc.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/up.svg"
/*!****************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/up.svg ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/up.0c346ab8.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/AddRule.jsx"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/AddRule.jsx ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/actions/rules/rules */ "./node_modules/@plone/volto/src/actions/rules/rules.js");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Rules\\AddRule.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Add content rule component.
 * @module components/manage/Controlpanels/Rules/AddRule
 */

;
















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  addRule: {
    id: 'Add Content Rule',
    defaultMessage: 'Add Content Rule'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  add: {
    id: 'Rule added',
    defaultMessage: 'Rule added'
  }
});

/**
 * AddRule class.
 * @class AddRule
 * @extends Component
 */
class AddRule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Rules
   */
  constructor(props) {
    super(props);
    this.state = {
      isClient: false,
      title: '',
      description: '',
      event: '',
      cascading: false,
      stop: false,
      enabled: false,
      invalidForm: true,
      invalidTitle: false,
      invalidEvent: false
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.setState({
      isClient: true
    });
    this.props.getContentRulesEvents((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname));
  }

  /**
   * Component did mount
   * @method componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title || prevState.event !== this.state.event) {
      if (this.state.title && this.state.event) {
        this.setState({
          invalidForm: false,
          invalidTitle: false,
          invalidEvent: false
        });
      } else {
        if (!this.state.title) {
          this.setState({
            invalidForm: true,
            invalidTitle: true
          });
        }
        if (!this.state.event) {
          this.setState({
            invalidForm: true,
            invalidEvent: true
          });
        }
      }
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.rules.add.loading && nextProps.rules.add.loaded) {
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.add),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }));
      this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname));
    }
  }

  /**
   * Back/Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname));
  }

  /**
   * Add rule handler
   * @method handleAdd
   * @returns {undefined}
   */
  handleAdd() {
    const {
      title,
      description,
      event,
      cascading,
      stop,
      enabled,
      invalidForm
    } = this.state;
    const data = {
      title,
      description,
      event,
      cascading,
      enabled,
      stop
    };
    if (!invalidForm) {
      this.props.addNewRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), data);
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$events, _this$props$events2, _this$props$events3;
    const {
      title,
      description,
      event,
      cascading,
      stop,
      enabled
    } = this.state;
    const triggeringEvents = (_this$props$events = this.props.events) !== null && _this$props$events !== void 0 && _this$props$events.items && ((_this$props$events2 = this.props.events) === null || _this$props$events2 === void 0 ? void 0 : _this$props$events2.items.length) > 0 ? (_this$props$events3 = this.props.events) === null || _this$props$events3 === void 0 ? void 0 : _this$props$events3.items.map(event => [event.token, event.title]) : '';
    return __jsx("div", {
      id: "page-rule-add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: this.props.intl.formatMessage(messages.addRule),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Add Rule",
      defaultMessage: "Add Rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Use the form below to define the new content rule",
      defaultMessage: "Use the form below to define the new content rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      className: 'title-field',
      title: 'Title',
      description: "Please set a descriptive title for the rule.",
      value: title,
      required: true,
      onChange: (e, t) => this.setState({
        title: t
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      title: 'Description',
      description: "Enter a short description of the rule and its purpose.",
      value: description,
      onChange: (e, d) => this.setState({
        description: d
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      required: true,
      title: 'Triggering event',
      description: "The rule will execute when the following event occurs.",
      choices: triggeringEvents,
      value: event,
      onChange: (e, v) => this.setState({
        event: v
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        enabled: checked
      }),
      label: 'Enabled',
      checked: enabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not the rule is currently enabled",
      defaultMessage: "Whether or not the rule is currently enabled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        stop: checked
      }),
      label: 'Stop Executing rules',
      checked: stop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not execution of further rules should stop after this rule is executed",
      defaultMessage: "Whether or not execution of further rules should stop after this rule is executed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        cascading: checked
      }),
      label: 'Cascading rule',
      checked: cascading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not other rules should be triggered by the actions launched by this rule. Activate this only if you are sure this won't create infinite loops",
      defaultMessage: "Whether or not other rules should be triggered by the actions launched by this rule. Activate this only if you are sure this won't create infinite loops",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      onClick: () => this.handleAdd(),
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Save",
      defaultMessage: "Save",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 19
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      onClick: () => this.onCancel(),
      secondary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Cancel",
      defaultMessage: "Cancel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 19
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 15
      }
    }, this.state.invalidTitle && __jsx("p", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Title field error. Value not provided or already existing.",
      defaultMessage: "Title field error. Value not provided or already existing.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 21
      }
    })), this.state.invalidEvent && __jsx("p", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Triggering event field error. Please select a value",
      defaultMessage: "Triggering event field error. Please select a value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 21
      }
    })))))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        className: "item",
        to: "#",
        onClick: () => this.onCancel(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 17
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default()),
        className: "contents circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 19
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
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
_defineProperty(AddRule, "propTypes", {
  getContentRulesEvents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addNewRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  rules: state.controlpanelrules,
  events: state.contentrulesevents,
  pathname: props.location.pathname
}), {
  getContentRulesEvents: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_15__.getContentRulesEvents,
  addNewRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_15__.addNewRule
}))(AddRule));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/ConfigureRule.jsx"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/ConfigureRule.jsx ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/UniversalLink/UniversalLink */ "./node_modules/@plone/volto/src/components/manage/UniversalLink/UniversalLink.tsx");
/* harmony import */ var _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/actions/rules/rules */ "./node_modules/@plone/volto/src/actions/rules/rules.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _plone_volto_icons_up_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/up.svg */ "./node_modules/@plone/volto/src/icons/up.svg");
/* harmony import */ var _plone_volto_icons_up_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_up_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_down_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/down.svg */ "./node_modules/@plone/volto/src/icons/down.svg");
/* harmony import */ var _plone_volto_icons_down_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_down_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_VariableModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/VariableModal */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/components/VariableModal.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Rules\\ConfigureRule.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Configure content rule component.
 * @module components/manage/Controlpanels/Rules/ConfigureRule
 */

;



















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  configRule: {
    id: 'Configure content rule',
    defaultMessage: 'Configure content rule'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  deleteCondition: {
    id: 'Delete condition',
    defaultMessage: 'Condition deleted'
  },
  addCondition: {
    id: 'Add condition',
    defaultMessage: 'Condition added'
  },
  deleteAction: {
    id: 'Delete action',
    defaultMessage: 'Action deleted'
  },
  addAction: {
    id: 'Add action',
    defaultMessage: 'Action added'
  },
  editAction: {
    id: 'Action changed',
    defaultMessage: 'Action changed'
  },
  editCondition: {
    id: 'Condition changed',
    defaultMessage: 'Condition changed'
  },
  move: {
    id: 'Position changed',
    defaultMessage: 'Position changed'
  },
  moveUp: {
    id: 'Move up',
    defaultMessage: 'Move up'
  },
  moveDown: {
    id: 'Move down',
    defaultMessage: 'Move down'
  }
});

/**
 * ConfigureRule class.
 * @class ConfigureRule
 * @extends Component
 */
class ConfigureRule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Rules
   */
  constructor(props) {
    super(props);
    this.openConditionModal = this.openConditionModal.bind(this);
    this.openActionModal = this.openActionModal.bind(this);
    this.handleConditionAdd = this.handleConditionAdd.bind(this);
    this.handleActionAdd = this.handleActionAdd.bind(this);
    this.openEditCondition = this.openEditCondition.bind(this);
    this.openEditAction = this.openEditAction.bind(this);
    this.handleEditCondition = this.handleEditCondition.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.state = {
      isClient: false,
      openModal: false,
      selConditionToAdd: '',
      selActionToAdd: '',
      selConditionToEdit: '',
      selActionToEdit: '',
      conditionFormData: '',
      actionFormData: ''
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props, _this$props$match, _this$props$match$par;
    this.setState({
      isClient: true
    });
    this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$match = _this$props.match) === null || _this$props$match === void 0 ? void 0 : (_this$props$match$par = _this$props$match.params) === null || _this$props$match$par === void 0 ? void 0 : _this$props$match$par.id);
  }

  /**
   * Component did mount
   * @method componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate(prevProps, prevState) {
    var _this$props3, _this$props3$rule, _this$props4, _this$props4$rule, _this$props7, _this$props7$rule, _this$props8, _this$props8$rule;
    if (this.state.selConditionToEdit && prevState.selConditionToEdit !== this.state.selConditionToEdit) {
      var _this$props2, _this$props2$match, _this$props2$match$pa;
      this.props.getCondition((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$match = _this$props2.match) === null || _this$props2$match === void 0 ? void 0 : (_this$props2$match$pa = _this$props2$match.params) === null || _this$props2$match$pa === void 0 ? void 0 : _this$props2$match$pa.id, this.state.selConditionToEdit.idx);
    }
    if ((_this$props3 = this.props) !== null && _this$props3 !== void 0 && (_this$props3$rule = _this$props3.rule) !== null && _this$props3$rule !== void 0 && _this$props3$rule.condition && ((_this$props4 = this.props) === null || _this$props4 === void 0 ? void 0 : (_this$props4$rule = _this$props4.rule) === null || _this$props4$rule === void 0 ? void 0 : _this$props4$rule.condition) !== (prevProps === null || prevProps === void 0 ? void 0 : prevProps.rule.condition)) {
      var _this$props5, _this$props5$rule;
      const conditionFormData = (_this$props5 = this.props) === null || _this$props5 === void 0 ? void 0 : (_this$props5$rule = _this$props5.rule) === null || _this$props5$rule === void 0 ? void 0 : _this$props5$rule.condition;
      this.setState({
        conditionFormData
      });
    }
    if (this.state.selActionToEdit && prevState.selActionToEdit !== this.state.selActionToEdit) {
      var _this$props6, _this$props6$match, _this$props6$match$pa;
      this.props.getAction((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props6 = this.props) === null || _this$props6 === void 0 ? void 0 : (_this$props6$match = _this$props6.match) === null || _this$props6$match === void 0 ? void 0 : (_this$props6$match$pa = _this$props6$match.params) === null || _this$props6$match$pa === void 0 ? void 0 : _this$props6$match$pa.id, this.state.selActionToEdit.idx);
    }
    if ((_this$props7 = this.props) !== null && _this$props7 !== void 0 && (_this$props7$rule = _this$props7.rule) !== null && _this$props7$rule !== void 0 && _this$props7$rule.action && ((_this$props8 = this.props) === null || _this$props8 === void 0 ? void 0 : (_this$props8$rule = _this$props8.rule) === null || _this$props8$rule === void 0 ? void 0 : _this$props8$rule.action) !== (prevProps === null || prevProps === void 0 ? void 0 : prevProps.rule.action)) {
      var _this$props9, _this$props9$rule;
      const actionFormData = (_this$props9 = this.props) === null || _this$props9 === void 0 ? void 0 : (_this$props9$rule = _this$props9.rule) === null || _this$props9$rule === void 0 ? void 0 : _this$props9$rule.action;
      this.setState({
        actionFormData
      });
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.rule.move.loading && nextProps.rule.move.loaded) {
      var _this$props0, _this$props0$match, _this$props0$match$pa;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.move),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props0 = this.props) === null || _this$props0 === void 0 ? void 0 : (_this$props0$match = _this$props0.match) === null || _this$props0$match === void 0 ? void 0 : (_this$props0$match$pa = _this$props0$match.params) === null || _this$props0$match$pa === void 0 ? void 0 : _this$props0$match$pa.id);
    }
    if (this.props.rule.deletecondition.loading && nextProps.rule.deletecondition.loaded) {
      var _this$props1, _this$props1$match, _this$props1$match$pa;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.deleteCondition),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props1 = this.props) === null || _this$props1 === void 0 ? void 0 : (_this$props1$match = _this$props1.match) === null || _this$props1$match === void 0 ? void 0 : (_this$props1$match$pa = _this$props1$match.params) === null || _this$props1$match$pa === void 0 ? void 0 : _this$props1$match$pa.id);
    }
    if (this.props.rule.editcondition.loading && nextProps.rule.editcondition.loaded) {
      var _this$props10, _this$props10$match, _this$props10$match$p;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.editCondition),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props10 = this.props) === null || _this$props10 === void 0 ? void 0 : (_this$props10$match = _this$props10.match) === null || _this$props10$match === void 0 ? void 0 : (_this$props10$match$p = _this$props10$match.params) === null || _this$props10$match$p === void 0 ? void 0 : _this$props10$match$p.id);
    }
    if (this.props.rule.editaction.loading && nextProps.rule.editaction.loaded) {
      var _this$props11, _this$props11$match, _this$props11$match$p;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.editAction),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props11 = this.props) === null || _this$props11 === void 0 ? void 0 : (_this$props11$match = _this$props11.match) === null || _this$props11$match === void 0 ? void 0 : (_this$props11$match$p = _this$props11$match.params) === null || _this$props11$match$p === void 0 ? void 0 : _this$props11$match$p.id);
    }
    if (this.props.rule.addcondition.loading && nextProps.rule.addcondition.loaded) {
      var _this$props12, _this$props12$match, _this$props12$match$p;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.addCondition),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props12 = this.props) === null || _this$props12 === void 0 ? void 0 : (_this$props12$match = _this$props12.match) === null || _this$props12$match === void 0 ? void 0 : (_this$props12$match$p = _this$props12$match.params) === null || _this$props12$match$p === void 0 ? void 0 : _this$props12$match$p.id);
    }
    if (this.props.rule.deleteaction.loading && nextProps.rule.deleteaction.loaded) {
      var _this$props13, _this$props13$match, _this$props13$match$p;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.deleteAction),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props13 = this.props) === null || _this$props13 === void 0 ? void 0 : (_this$props13$match = _this$props13.match) === null || _this$props13$match === void 0 ? void 0 : (_this$props13$match$p = _this$props13$match.params) === null || _this$props13$match$p === void 0 ? void 0 : _this$props13$match$p.id);
    }
    if (this.props.rule.addaction.loading && nextProps.rule.addaction.loaded) {
      var _this$props14, _this$props14$match, _this$props14$match$p;
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.addAction),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props14 = this.props) === null || _this$props14 === void 0 ? void 0 : (_this$props14$match = _this$props14.match) === null || _this$props14$match === void 0 ? void 0 : (_this$props14$match$p = _this$props14$match.params) === null || _this$props14$match$p === void 0 ? void 0 : _this$props14$match$p.id);
    }
  }

  /**
   * Back/Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname)));
  }

  /**
   * Remove condition handler
   * @method handleRemoveCondition
   * @returns {undefined}
   */
  handleRemoveCondition(conditionId) {
    var _this$props15, _this$props15$match, _this$props15$match$p;
    const ruleId = (_this$props15 = this.props) === null || _this$props15 === void 0 ? void 0 : (_this$props15$match = _this$props15.match) === null || _this$props15$match === void 0 ? void 0 : (_this$props15$match$p = _this$props15$match.params) === null || _this$props15$match$p === void 0 ? void 0 : _this$props15$match$p.id;
    this.props.removeCondition((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, conditionId);
  }

  /**
   * Edit condition handler
   * @method handleEditCondition
   * @returns {undefined}
   */
  handleEditCondition(val) {
    var _this$props16, _this$props16$match, _this$props16$match$p;
    const ruleId = (_this$props16 = this.props) === null || _this$props16 === void 0 ? void 0 : (_this$props16$match = _this$props16.match) === null || _this$props16$match === void 0 ? void 0 : (_this$props16$match$p = _this$props16$match.params) === null || _this$props16$match$p === void 0 ? void 0 : _this$props16$match$p.id;
    if (this.state.selConditionToEdit) {
      this.props.editCondition((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, val, this.state.selConditionToEdit.idx);
    }
  }

  /**
   * Edit action handler
   * @method handleEditAction
   * @returns {undefined}
   */
  handleEditAction(val) {
    var _this$props17, _this$props17$match, _this$props17$match$p;
    const ruleId = (_this$props17 = this.props) === null || _this$props17 === void 0 ? void 0 : (_this$props17$match = _this$props17.match) === null || _this$props17$match === void 0 ? void 0 : (_this$props17$match$p = _this$props17$match.params) === null || _this$props17$match$p === void 0 ? void 0 : _this$props17$match$p.id;
    if (this.state.selActionToEdit) {
      this.props.editAction((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, val, this.state.selActionToEdit.idx);
    }
  }

  /**
   * open modal edit condition handler
   * @method openEditCondition
   * @returns {undefined}
   */
  openEditCondition(cond_id) {
    this.setState({
      selConditionToEdit: cond_id,
      openModal: true,
      selActionToEdit: ''
    });
  }

  /**
   * open modal edit action handler
   * @method openEditAction
   * @returns {undefined}
   */
  openEditAction(action_id) {
    this.setState({
      selActionToEdit: action_id,
      openModal: true,
      selConditionToEdit: ''
    });
  }

  /**
   * Add condition handler
   * @method openConditionModal
   * @returns {undefined}
   */
  openConditionModal() {
    if (this.state.selConditionToAdd) {
      this.setState({
        openModal: true
      });
    }
  }

  /**
   * Condition save handler
   * @method handleConditionAdd
   * @returns {undefined}
   */
  handleConditionAdd(val) {
    var _this$props18, _this$props18$match, _this$props18$match$p;
    const ruleId = (_this$props18 = this.props) === null || _this$props18 === void 0 ? void 0 : (_this$props18$match = _this$props18.match) === null || _this$props18$match === void 0 ? void 0 : (_this$props18$match$p = _this$props18$match.params) === null || _this$props18$match$p === void 0 ? void 0 : _this$props18$match$p.id;
    this.props.addCondition((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, val);
    this.setState({
      selConditionToAdd: ''
    });
  }

  /**
   * Add action handler
   * @method openActionModal
   * @returns {undefined}
   */
  openActionModal() {
    this.setState({
      openModal: true
    });
  }

  /**
   * Action save handler
   * @method handleActionAdd
   * @returns {undefined}
   */
  handleActionAdd(val) {
    var _this$props19, _this$props19$match, _this$props19$match$p;
    const ruleId = (_this$props19 = this.props) === null || _this$props19 === void 0 ? void 0 : (_this$props19$match = _this$props19.match) === null || _this$props19$match === void 0 ? void 0 : (_this$props19$match$p = _this$props19$match.params) === null || _this$props19$match$p === void 0 ? void 0 : _this$props19$match$p.id;
    this.props.addAction((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, val);
    this.setState({
      selConditionToAdd: ''
    });
  }

  /**
   * Remove action handler
   * @method handleRemoveAction
   * @returns {undefined}
   */
  handleRemoveAction(actionId) {
    var _this$props20, _this$props20$match, _this$props20$match$p;
    const ruleId = (_this$props20 = this.props) === null || _this$props20 === void 0 ? void 0 : (_this$props20$match = _this$props20.match) === null || _this$props20$match === void 0 ? void 0 : (_this$props20$match$p = _this$props20$match.params) === null || _this$props20$match$p === void 0 ? void 0 : _this$props20$match$p.id;
    this.props.removeAction((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), ruleId, actionId);
  }

  /**
   * Move action handler
   * @method handleMoveAction
   * @returns {undefined}
   */
  handleMoveAction(action, direction) {
    var _this$props21, _this$props21$match, _this$props21$match$p;
    const ruleId = (_this$props21 = this.props) === null || _this$props21 === void 0 ? void 0 : (_this$props21$match = _this$props21.match) === null || _this$props21$match === void 0 ? void 0 : (_this$props21$match$p = _this$props21$match.params) === null || _this$props21$match$p === void 0 ? void 0 : _this$props21$match$p.id;
    this.props.moveRuleAction((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), {
      'form.button.Move': direction === 'up' ? '_move_up' : '_move_down'
    }, ruleId, action);
  }

  /**
   * Move action handler
   * @method handleMoveCondition
   * @returns {undefined}
   */
  handleMoveCondition(condition, direction) {
    var _this$props22, _this$props22$match, _this$props22$match$p;
    const ruleId = (_this$props22 = this.props) === null || _this$props22 === void 0 ? void 0 : (_this$props22$match = _this$props22.match) === null || _this$props22$match === void 0 ? void 0 : (_this$props22$match$p = _this$props22$match.params) === null || _this$props22$match$p === void 0 ? void 0 : _this$props22$match$p.id;
    this.props.moveRuleCondition((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), {
      'form.button.Move': direction === 'up' ? '_move_up' : '_move_down'
    }, ruleId, condition);
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      item = {}
    } = this.props.rule || {};
    const {
      actions = [],
      addable_actions = [],
      addable_conditions = [],
      assignments = [],
      conditions = [],
      title = ''
    } = item;
    const conditions_options = addable_conditions.map(cond => {
      return {
        key: cond.title,
        text: cond.title,
        value: cond
      };
    });
    const actions_options = addable_actions.map(act => {
      return {
        key: act.title,
        text: act.title,
        value: act
      };
    });
    return __jsx("div", {
      id: "page-rule-configure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: this.props.intl.formatMessage(messages.configRule),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 9
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Configure Content Rule: {title}",
      defaultMessage: "Configure Content Rule: {title}",
      values: {
        title: __jsx("q", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518,
            columnNumber: 36
          }
        }, title)
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Rules execute when a triggering event occurs. Rule actions will only be invoked if all the rule's conditions are met. You can add new actions and conditions using the buttons below.",
      defaultMessage: "Rules execute when a triggering event occurs. Rule actions will only be invoked if all the rule's conditions are met. You can add new actions and conditions using the buttons below.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      mobile: 16,
      tablet: 16,
      computer: 6,
      largeScreen: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "If all of the following conditions are met:",
      defaultMessage: "If all of the following conditions are met:",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 25
      }
    })), conditions && conditions.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 25
      }
    }, conditions.map((cond, i) => {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {
        fluid: true,
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 31
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 33
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 35
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 37
        }
      }, cond.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Description, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 35
        }
      }, cond.summary)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
        extra: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 33
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        onClick: () => this.openEditCondition(cond),
        compact: true,
        size: "tiny",
        primary: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 35
        }
      }, "Edit"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        onClick: () => this.handleRemoveCondition(cond.idx),
        compact: true,
        size: "tiny",
        color: "youtube",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 35
        }
      }, "Remove"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        compact: true,
        size: "tiny",
        primary: true,
        disabled: cond === null || cond === void 0 ? void 0 : cond.first,
        onClick: () => this.handleMoveCondition(cond.idx, 'up'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 35
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 37
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_up_svg__WEBPACK_IMPORTED_MODULE_17___default()),
        size: "10px",
        title: this.props.intl.formatMessage(messages.moveUp),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 39
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        compact: true,
        size: "tiny",
        primary: true,
        disabled: cond === null || cond === void 0 ? void 0 : cond.last,
        onClick: () => this.handleMoveCondition(cond.idx, 'down'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 35
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 37
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_down_svg__WEBPACK_IMPORTED_MODULE_18___default()),
        size: "10px",
        title: this.props.intl.formatMessage(messages.moveDown),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 39
        }
      })))));
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 23
      }
    }, __jsx("h4", {
      style: {
        marginTop: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 25
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Condition: ",
      defaultMessage: "Condition: ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 27
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
      style: {
        margin: '5px 0'
      },
      placeholder: "Select condition",
      fluid: true,
      selection: true,
      options: conditions_options,
      value: this.state.selConditionToAdd,
      onChange: (e, {
        value
      }) => this.setState({
        selConditionToAdd: value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 25
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      compact: true,
      onClick: this.openConditionModal,
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 25
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Add",
      defaultMessage: "Add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 27
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      mobile: 16,
      tablet: 16,
      computer: 6,
      largeScreen: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Perform the following actions:",
      defaultMessage: "Perform the following actions:",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 25
      }
    })), actions && actions.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 25
      }
    }, actions.map((action, i) => {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {
        fluid: true,
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 31
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 33
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 35
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 37
        }
      }, action.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Description, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 35
        }
      }, action.summary)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
        extra: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672,
          columnNumber: 33
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        onClick: () => this.openEditAction(action),
        compact: true,
        size: "tiny",
        primary: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 35
        }
      }, "Edit"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        onClick: () => this.handleRemoveAction(action.idx),
        compact: true,
        size: "tiny",
        color: "youtube",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 35
        }
      }, "Remove"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        compact: true,
        size: "tiny",
        primary: true,
        disabled: action === null || action === void 0 ? void 0 : action.first,
        onClick: () => this.handleMoveAction(action.idx, 'up'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 35
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700,
          columnNumber: 37
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_up_svg__WEBPACK_IMPORTED_MODULE_17___default()),
        size: "10px",
        title: this.props.intl.formatMessage(messages.moveUp),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 39
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        compact: true,
        size: "tiny",
        primary: true,
        disabled: action === null || action === void 0 ? void 0 : action.last,
        onClick: () => this.handleMoveAction(action.idx, 'down'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 35
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button.Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 37
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_down_svg__WEBPACK_IMPORTED_MODULE_18___default()),
        size: "10px",
        title: this.props.intl.formatMessage(messages.moveDown),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 39
        }
      })))));
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 23
      }
    }, __jsx("h4", {
      style: {
        marginTop: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 25
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Action: ",
      defaultMessage: "Action: ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 27
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
      style: {
        margin: '5px 0'
      },
      placeholder: "Select action",
      fluid: true,
      selection: true,
      options: actions_options,
      onChange: (e, {
        value
      }) => this.setState({
        selActionToAdd: value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 25
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      compact: true,
      onClick: () => this.openActionModal(),
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 25
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Add",
      defaultMessage: "Add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 27
      }
    }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Assignments",
      defaultMessage: "Assignments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 25
      }
    })), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "This rule is assigned to the following locations:",
      defaultMessage: "This rule is assigned to the following locations:",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 23
      }
    }), assignments.map((assignment, i) => __jsx(_plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: i,
      title: assignment.title,
      href: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(assignment.url),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776,
        columnNumber: 25
      }
    }, assignment.title))))))))), this.state.selConditionToAdd && __jsx(_components_VariableModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: this.state.openModal,
      onClose: () => this.setState({
        openModal: false,
        selConditionToAdd: ''
      }),
      onOpen: () => this.setState({
        openModal: true
      }),
      onSave: v => this.handleConditionAdd(v),
      value: this.state.selConditionToAdd,
      type: "Condition",
      action: "add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792,
        columnNumber: 11
      }
    }), this.state.selActionToAdd && __jsx(_components_VariableModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: this.state.openModal,
      onClose: () => this.setState({
        openModal: false,
        selActionToAdd: ''
      }),
      onOpen: () => this.setState({
        openModal: true
      }),
      onSave: v => this.handleActionAdd(v),
      value: this.state.selActionToAdd,
      type: "Action",
      action: "add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 11
      }
    }), this.state.selConditionToEdit && this.state.conditionFormData && __jsx(_components_VariableModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: this.state.openModal,
      onClose: () => this.setState({
        openModal: false,
        selConditionToEdit: '',
        conditionFormData: ''
      }),
      onOpen: () => this.setState({
        openModal: true
      }),
      onSave: v => this.handleEditCondition(v),
      value: this.state.selConditionToEdit,
      formData: this.state.conditionFormData,
      type: "Condition",
      action: "edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818,
        columnNumber: 11
      }
    }), this.state.selActionToEdit && this.state.actionFormData && __jsx(_components_VariableModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: this.state.openModal,
      onClose: () => this.setState({
        openModal: false,
        selActionToEdit: '',
        actionFormData: ''
      }),
      onOpen: () => this.setState({
        openModal: true
      }),
      onSave: this.handleEditAction,
      value: this.state.selActionToEdit,
      formData: this.state.actionFormData,
      type: "Action",
      action: "edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836,
        columnNumber: 11
      }
    }), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        className: "item",
        to: "#",
        onClick: () => this.onCancel(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859,
          columnNumber: 17
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default()),
        className: "contents circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860,
          columnNumber: 19
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
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
_defineProperty(ConfigureRule, "propTypes", {
  getControlPanelRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removeCondition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addCondition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removeAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  moveRuleCondition: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  moveRuleAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  pathname: props.location.pathname,
  rule: state.controlpanelrule
}), {
  getControlPanelRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.getControlPanelRule,
  removeCondition: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.removeCondition,
  addCondition: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.addCondition,
  editCondition: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.editCondition,
  getCondition: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.getCondition,
  getAction: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.getAction,
  removeAction: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.removeAction,
  addAction: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.addAction,
  editAction: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.editAction,
  moveRuleCondition: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.moveRuleCondition,
  moveRuleAction: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_13__.moveRuleAction
}))(ConfigureRule));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/EditRule.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/EditRule.jsx ***!
  \******************************************************************************************/
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/actions/rules/rules */ "./node_modules/@plone/volto/src/actions/rules/rules.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Rules\\EditRule.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Edit content rule component.
 * @module components/manage/Controlpanels/Rules/EditRule
 */

;
















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  configRule: {
    id: 'Configure Content Rule',
    defaultMessage: 'Configure Content Rule'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  edit: {
    id: 'Edit',
    defaultMessage: 'Rule edited'
  }
});

/**
 * EditRule class.
 * @class EditRule
 * @extends Component
 */
class EditRule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Rules
   */
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      isClient: false,
      title: '',
      description: '',
      event: '',
      cascading: false,
      stop: false,
      enabled: false,
      invalidForm: true,
      invalidTitle: false,
      invalidEvent: false
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    var _this$props, _this$props$match, _this$props$match$par;
    this.setState({
      isClient: true
    });
    this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$match = _this$props.match) === null || _this$props$match === void 0 ? void 0 : (_this$props$match$par = _this$props$match.params) === null || _this$props$match$par === void 0 ? void 0 : _this$props$match$par.id);
    this.props.getContentRulesEvents((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname));
  }

  /**
   * Component did mount
   * @method componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rule !== this.props.rule) {
      const {
        title,
        description,
        event,
        cascading,
        stop,
        enabled,
        id
      } = this.props.rule.item || {};
      this.setState({
        id,
        title,
        description,
        event,
        cascading,
        stop,
        enabled
      });
    }
    if (prevState.title !== this.state.title || prevState.event !== this.state.event) {
      if (this.state.title && this.state.event) {
        this.setState({
          invalidForm: false,
          invalidTitle: false,
          invalidEvent: false
        });
      } else {
        if (!this.state.title) {
          this.setState({
            invalidForm: true,
            invalidTitle: true
          });
        }
        if (!this.state.event) {
          this.setState({
            invalidForm: true,
            invalidEvent: true
          });
        }
      }
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.rule.edit.loading && nextProps.rule.edit.loaded) {
      var _this$props2, _this$props2$match, _this$props2$match$pa;
      react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.edit),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$match = _this$props2.match) === null || _this$props2$match === void 0 ? void 0 : (_this$props2$match$pa = _this$props2$match.params) === null || _this$props2$match$pa === void 0 ? void 0 : _this$props2$match$pa.id);
    }
  }

  /**
   * Back/Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getParentUrl)(this.props.pathname)));
  }

  /**
   * Update rule handler
   * @method handleUpdate
   * @returns {undefined}
   */
  handleUpdate() {
    const {
      id,
      title,
      description,
      event,
      cascading,
      stop,
      enabled,
      invalidForm
    } = this.state;
    const data = {
      title,
      description,
      event,
      cascading,
      enabled,
      stop
    };
    if (!invalidForm) {
      this.props.editRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_5__.getBaseUrl)(this.props.pathname), data, id);
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$events, _this$props$events2, _this$props$events3;
    const {
      title,
      description,
      event,
      cascading,
      stop,
      enabled
    } = this.state;
    const triggeringEvents = (_this$props$events = this.props.events) !== null && _this$props$events !== void 0 && _this$props$events.items && ((_this$props$events2 = this.props.events) === null || _this$props$events2 === void 0 ? void 0 : _this$props$events2.items.length) > 0 ? (_this$props$events3 = this.props.events) === null || _this$props$events3 === void 0 ? void 0 : _this$props$events3.items.map(event => [event.token, event.title]) : '';
    return __jsx("div", {
      id: "page-rule-edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: this.props.intl.formatMessage(messages.configRule),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Edit Rule",
      defaultMessage: "Edit Rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Use the form below to define the new content rule",
      defaultMessage: "Use the form below to define the new content rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      title: 'Title',
      description: "Please set a descriptive title for the rule.",
      value: title,
      required: true,
      onChange: (e, t) => this.setState({
        title: t
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      title: 'Description',
      description: "Enter a short description of the rule and its purpose.",
      value: description,
      onChange: (e, d) => this.setState({
        description: d
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.Field, {
      required: true,
      title: 'Triggering event',
      description: "The rule will execute when the following event occurs.",
      choices: triggeringEvents,
      value: event,
      onChange: (e, v) => this.setState({
        event: v
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 25
      }
    })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        enabled: checked
      }),
      label: 'Enabled',
      checked: enabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not the rule is currently enabled",
      defaultMessage: "Whether or not the rule is currently enabled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        stop: checked
      }),
      label: 'Stop Executing rules',
      checked: stop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not execution of further rules should stop after this rule is executed",
      defaultMessage: "Whether or not execution of further rules should stop after this rule is executed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        checked
      }) => this.setState({
        cascading: checked
      }),
      label: 'Cascading rule',
      checked: cascading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 19
      }
    }), __jsx("p", {
      style: {
        color: '#878f93',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        fontSize: '0.9rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Whether or not other rules should be triggered by the actions launched by this rule. Activate this only if you are sure this won't create infinite loops",
      defaultMessage: "Whether or not other rules should be triggered by the actions launched by this rule. Activate this only if you are sure this won't create infinite loops",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 21
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      onClick: () => this.handleUpdate(),
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Save",
      defaultMessage: "Save",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 19
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      onClick: () => this.onCancel(),
      secondary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Cancel",
      defaultMessage: "Cancel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 19
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }
    }, this.state.invalidTitle && __jsx("p", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Title field error. Value not provided or already existing.",
      defaultMessage: "Title field error. Value not provided or already existing.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 21
      }
    })), this.state.invalidEvent && __jsx("p", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 19
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Triggering event field error. Please select a value",
      defaultMessage: "Triggering event field error. Please select a value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 21
      }
    })))))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        className: "item",
        to: "#",
        onClick: () => this.onCancel(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 17
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_16___default()),
        className: "contents circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 19
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
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
_defineProperty(EditRule, "propTypes", {
  getContentRulesEvents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  editRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getControlPanelRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  events: state.contentrulesevents,
  rule: state.controlpanelrule,
  pathname: props.location.pathname
}), {
  getControlPanelRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.getControlPanelRule,
  getContentRulesEvents: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.getContentRulesEvents,
  editRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.editRule
}))(EditRule));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/Rules.jsx"
/*!***************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/Rules.jsx ***!
  \***************************************************************************************/
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/actions/rules/rules */ "./node_modules/@plone/volto/src/actions/rules/rules.js");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Rules\\Rules.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Moderate content rules component.
 * @module components/manage/Controlpanels/Rules/Rules
 */

;















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  rules: {
    id: 'Content Rules',
    defaultMessage: 'Content Rules'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  delete: {
    id: 'Deleted',
    defaultMessage: 'Deleted'
  },
  enable: {
    id: 'Rule enable changed',
    defaultMessage: 'Rule enable changed'
  }
});

/**
 * Rules class.
 * @class Rules
 * @extends Component
 */
class Rules extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Rules
   */
  constructor(props) {
    super(props);
    this.state = {
      isClient: false,
      selectedFilters: [],
      selectedRules: []
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getControlPanelRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname));
    this.props.getContentRulesEvents((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname));
    this.setState({
      isClient: true
    });
  }

  /**
   * Component did mount
   * @method componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rules !== this.props.rules && this.props.rules.items) {
      this.setState({
        selectedRules: this.props.rules.items
      });
    }
    if (prevState.selectedFilters !== this.state.selectedFilters && this.props.rules.items) {
      if (this.state.selectedFilters.length > 0) {
        let filteredRules = this.props.rules.items.filter(rule => this.state.selectedFilters.includes(rule.trigger));
        this.setState({
          selectedRules: filteredRules
        });
      } else {
        this.setState({
          selectedRules: this.props.rules.items
        });
      }
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.indivRule.edit.loading && nextProps.indivRule.edit.loaded) {
      react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_13__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.enable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }));
      this.props.getControlPanelRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname));
    }
    if (this.props.indivRule.delete.loading && nextProps.indivRule.delete.loaded) {
      this.props.getControlPanelRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname));
      react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_13__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.delete),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }));
    }
  }

  /**
   * Back/Cancel handler
   * @method onCancel
   * @returns {undefined}
   */
  onCancel() {
    this.props.history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getParentUrl)(this.props.pathname));
  }

  /**
   * Select filter type handler
   * @method handleSelectFilterType
   * @returns {undefined}
   */
  handleSelectFilterType(type) {
    this.setState({
      filterType: type
    });
  }

  /**
   * Add Rule handler
   * @method handleAddRule
   * @returns {undefined}
   */
  handleAddRule() {
    this.props.history.push(`${this.props.pathname}/add`);
  }

  /**
   * Configure Rule handler
   * @method handleConfigure
   * @returns {undefined}
   */
  handleConfigure(ruleId) {
    this.props.history.push(`${this.props.pathname}/${ruleId}/configure`);
  }

  /**
   * Edit Rule handler
   * @method handleEdit
   * @returns {undefined}
   */
  handleEdit(ruleId) {
    this.props.history.push(`${this.props.pathname}/${ruleId}/edit`);
  }

  /**
   * Delete Rule handler
   * @method handleDelete
   * @returns {undefined}
   */
  handleDelete(ruleId) {
    this.props.deleteControlPanelRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname), ruleId);
  }

  /**
   * Set filter handler
   * @method handleSetFilters
   * @returns {undefined}
   */
  handleSetFilters(value) {
    if (!this.state.selectedFilters.includes(value)) {
      this.setState({
        selectedFilters: [...this.state.selectedFilters, value]
      });
    } else {
      this.setState({
        selectedFilters: this.state.selectedFilters.filter(f => f !== value)
      });
    }
  }

  /**
   *Enable rule handler
   * @method handleEnableRule
   * @returns {undefined}
   */
  handleEnableRule(rule) {
    const {
      id,
      cascading,
      description,
      enabled,
      event,
      stop,
      title
    } = rule;
    this.props.editRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)(this.props.pathname), {
      id,
      cascading,
      description,
      enabled: !enabled,
      event,
      stop,
      title
    }, id);
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return __jsx("div", {
      id: "page-rules",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: this.props.intl.formatMessage(messages.rules),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Content Rules",
      defaultMessage: "Content Rules",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      className: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Use the form below to define, change or remove content rules. Rules will automatically perform actions on content when certain triggers take place. After defining rules, you may want to go to a folder to assign them, using the 'rules' item in the actions menu.",
      defaultMessage: "Use the form below to define, change or remove content rules. Rules will automatically perform actions on content when certain triggers take place. After defining rules, you may want to go to a folder to assign them, using the 'rules' item in the actions menu.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header, {
      size: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Filter Rules:",
      defaultMessage: "Filter Rules:",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 19
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 19
      }
    }, this.props.events && this.props.events.items && this.props.events.items.length > 0 && this.props.events.items.map(event => {
      return {
        label: event.title,
        value: event.title
      };
    }).map((o, i) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
      style: {
        marginRight: '15px'
      },
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 27
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, {
        value
      }) => this.handleSetFilters(value),
      checked: this.state.selectedFilters.includes[o.value],
      value: o.value,
      label: o.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 29
      }
    }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Content Rule",
      defaultMessage: "Content Rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Event",
      defaultMessage: "Event",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Status",
      defaultMessage: "Status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Actions",
      defaultMessage: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 25
      }
    }))), this.state.selectedRules && this.state.selectedRules.length > 0 && this.state.selectedRules.map((rule, i) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row, {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 27
      }
    }, __jsx("p", {
      style: {
        fontSize: '16px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 29
      }
    }, rule.title), __jsx("p", {
      style: {
        fontSize: '14px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 29
      }
    }, rule.description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 27
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 29
      }
    }, rule.trigger)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 27
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      onChange: (e, o) => this.handleEnableRule(rule),
      checked: rule.enabled,
      value: rule.enabled,
      label: "enabled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 31
      }
    }), !rule.assigned && __jsx("p", {
      style: {
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: '#ffc106',
        borderRadius: '5px',
        fontSize: '10px',
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 33
      }
    }, "not assigned"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 27
      }
    }, __jsx("div", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      size: "mini",
      primary: true,
      onClick: () => this.handleConfigure(rule.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 31
      }
    }, "Configure"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      size: "mini",
      secondary: true,
      onClick: () => this.handleEdit(rule.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 31
      }
    }, "Edit"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      size: "mini",
      color: "youtube",
      onClick: () => this.handleDelete(rule.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 31
      }
    }, "Delete"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      onClick: () => this.handleAddRule(),
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Add content rule",
      defaultMessage: "Add content rule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 19
      }
    })))))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        className: "item",
        to: "#",
        onClick: () => this.onCancel(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 17
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15___default()),
        className: "contents circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 19
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
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
_defineProperty(Rules, "propTypes", {
  getControlPanelRules: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteControlPanelRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getContentRulesEvents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  editRule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  indivRule: state.controlpanelrule,
  rules: state.controlpanelrules,
  events: state.contentrulesevents,
  pathname: props.location.pathname
}), {
  getControlPanelRules: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.getControlPanelRules,
  deleteControlPanelRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.deleteControlPanelRule,
  getContentRulesEvents: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.getContentRulesEvents,
  editRule: _plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_14__.editRule
}))(Rules));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/components/VariableModal.jsx"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/components/VariableModal.jsx ***!
  \**********************************************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/actions/vocabularies/vocabularies */ "./node_modules/@plone/volto/src/actions/vocabularies/vocabularies.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Rules\\components\\VariableModal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;






const setSchema = (name, choices = '') => {
  switch (name) {
    //conditions
    case 'Content type':
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['check_types']
        }],
        properties: {
          check_types: {
            title: 'Content Types',
            isMulti: true,
            default: choices && choices.length > 0 ? choices[0] : '',
            choices: choices
          }
        },
        required: ['check_types']
      };
    case 'File Extension':
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['file_extension']
        }],
        properties: {
          file_extension: {
            title: 'File Extension',
            type: 'string'
          }
        },
        required: ['file_extension']
      };
    case 'Workflow state':
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['wf_states']
        }],
        properties: {
          wf_states: {
            title: 'Workflow State',
            isMulti: true,
            default: choices && choices.length > 0 ? choices[0] : '',
            choices: choices
          }
        },
        required: ['wf_states']
      };
    case "User's group":
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['group_names']
        }],
        properties: {
          group_names: {
            title: 'Groups',
            isMulti: true,
            default: choices && choices.length > 0 ? choices[0] : '',
            choices: choices
          }
        },
        required: ['group_names']
      };
    case "User's role":
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['role_names']
        }],
        properties: {
          role_names: {
            title: 'Roles',
            isMulti: true,
            default: choices && choices.length > 0 ? choices[0] : '',
            choices: choices
          }
        },
        required: ['role_names']
      };
    case 'TALES expression':
      return {
        fieldsets: [{
          id: 'default',
          title: 'default',
          fields: ['tales_expression']
        }],
        properties: {
          tales_expression: {
            title: 'File Extension',
            type: 'string'
          }
        },
        required: ['tales_expression']
      };
    // actions
    case 'Logger':
      return {
        title: 'Logger',
        fieldsets: [{
          id: 'default',
          title: 'Logger Action',
          fields: ['targetLogger', 'Level', 'message']
        }],
        properties: {
          targetLogger: {
            title: 'Logger name',
            type: 'string'
          },
          Level: {
            title: 'Logging level',
            type: 'string'
          },
          message: {
            title: 'Message',
            type: 'string'
          }
        },
        required: ['targetLogger', 'Level', 'message']
      };
    case 'Notify user':
      return {
        title: 'Notify user',
        fieldsets: [{
          id: 'default',
          title: 'Message',
          fields: ['message', 'message_type']
        }],
        properties: {
          message: {
            title: 'Message',
            type: 'string'
          },
          message_type: {
            title: 'Message Type',
            default: ['info', 'info'],
            choices: [['info', 'info'], ['warning', 'warning'], ['error', 'error']]
          }
        },
        required: ['message', 'message_type']
      };
    case 'Copy to folder':
      return {
        title: 'Target folder: ',
        fieldsets: [{
          id: 'default',
          title: 'Target folder: ',
          fields: ['target_folder']
        }],
        properties: {
          target_folder: {
            title: 'Target folder: ',
            widget: 'internal_url'
          }
        },
        required: ['target_folder']
      };
    case 'Move to folder':
      return {
        title: 'Target folder: ',
        fieldsets: [{
          id: 'default',
          title: 'Target folder: ',
          fields: ['target_folder']
        }],
        properties: {
          target_folder: {
            title: 'Target folder: ',
            widget: 'internal_url'
          }
        },
        required: ['target_folder']
      };
    case 'Delete object':
      return {
        title: 'Delete',
        fieldsets: [{
          id: 'default',
          title: 'Target folder: ',
          fields: []
        }],
        properties: {},
        required: []
      };
    case 'Transition workflow state':
      return {
        fieldsets: [{
          id: 'default',
          title: 'Transition workflow state',
          fields: ['transition']
        }],
        properties: {
          transition: {
            title: 'Transition workflow state',
            isMulti: true,
            default: choices && choices.length > 0 ? choices[0] : '',
            choices: choices
          }
        },
        required: ['transition']
      };
    case 'Send email':
      return {
        title: 'Send mail',
        fieldsets: [{
          id: 'default',
          title: 'Send mail',
          fields: ['subject', 'source', 'recipients', 'exclude_actor', 'message']
        }],
        properties: {
          message: {
            title: 'Message',
            widget: 'textarea'
          },
          subject: {
            title: 'Subject',
            type: 'string'
          },
          source: {
            title: 'Email source',
            type: 'string'
          },
          recipients: {
            title: 'Email Recipients',
            type: 'string'
          },
          exclude_actor: {
            title: 'Exclude actor from recipients',
            description: 'Do not send the email to the user that did the action.',
            type: 'boolean'
          }
        },
        required: ['subject', 'recipients', 'message']
      };
    case 'Version object':
      return {
        title: 'Send mail',
        fieldsets: [{
          id: 'default',
          title: 'Send mail',
          fields: ['comment']
        }],
        properties: {
          comment: {
            title: 'Comment',
            type: 'string'
          }
        },
        required: ['comment']
      };
    case 'IMSv4: Retract and rename old Indicator':
      return {
        title: 'Delete',
        fieldsets: [{
          id: 'default',
          title: 'Target folder: ',
          fields: []
        }],
        properties: {},
        required: []
      };
    default:
      return '';
  }
};
const detectVocabulary = type => {
  switch (type) {
    case 'Content type':
      return 'plone.app.vocabularies.ReallyUserFriendlyTypes';
    case 'Workflow state':
      return 'plone.app.vocabularies.WorkflowStates';
    case "User's group":
      return 'plone.app.vocabularies.Groups';
    case "User's role":
      return 'plone.app.vocabularies.Roles';
    case 'Transition workflow state':
      return 'plone.app.vocabularies.WorkflowTransitions';
    default:
      return '';
  }
};
const processSchema = schema => {
  const properties = _objectSpread({}, schema.properties);
  Object.keys(properties).forEach(key => {
    var _value$vocabulary;
    const value = properties[key];
    const vocabId = value === null || value === void 0 ? void 0 : (_value$vocabulary = value.vocabulary) === null || _value$vocabulary === void 0 ? void 0 : _value$vocabulary['@id'];
    if (vocabId !== null && vocabId !== void 0 && vocabId.includes('@sources')) {
      value['widget'] = 'internal_url';
      delete value['vocabulary'];
    }
  });
  const newSchema = _objectSpread(_objectSpread({}, schema), {}, {
    properties
  });
  return newSchema;
};
const VariableModal = ({
  open,
  type,
  onClose,
  onOpen,
  onSave,
  value,
  vocabularies,
  getVocabulary,
  action,
  formData
}) => {
  const [vocabularyName, setVocabularyName] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const [inputSchema, setInputSchema] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const {
    addview = ''
  } = value || {};
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (value !== null && value !== void 0 && value.title) {
      const detectedVocab = detectVocabulary(value.title);
      if (detectedVocab) {
        setVocabularyName(detectedVocab);
        getVocabulary({
          vocabNameOrURL: detectedVocab
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, open, formData]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    //reset input schema to rehydrate options
    setInputSchema('');
    // On creation, @schema is provided by value
    // On update, @schema comes from formData
    const rawSchema = value['@schema'] || formData['@schema'];
    let schema;
    if (rawSchema) {
      schema = processSchema(rawSchema);
    } else {
      const vocabularyOptions = vocabularyName && vocabularies && vocabularies[vocabularyName] && vocabularies[vocabularyName].items ? vocabularies[vocabularyName].items.map((item, i) => {
        return [item.value, item.label];
      }) : [];
      //set schema with the new options from vocabulary
      schema = setSchema(value.title, vocabularyOptions);
    }
    setInputSchema(schema);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vocabularies, open, formData, value]);
  const handleSave = v => {
    if (action === 'add') {
      onSave(_objectSpread(_objectSpread({}, v), {}, {
        type: addview
      }));
    }
    if (action === 'edit') {
      onSave(v);
    }
    setInputSchema('');
    onClose();
  };
  const handleClose = () => {
    setInputSchema('');
    setVocabularyName('');
    onClose();
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 5
    }
  }, inputSchema && action === 'add' && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_6__.ModalForm, {
    dimmer: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Dimmer, {
      style: {
        zIndex: 99
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 19
      }
    }),
    open: open,
    onSubmit: data => handleSave(data),
    onCancel: handleClose,
    title: `Add ${value.title} ${type}`,
    schema: inputSchema,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 9
    }
  }), inputSchema && action === 'edit' && formData && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_6__.ModalForm, {
    dimmer: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Dimmer, {
      style: {
        zIndex: 99
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 19
      }
    }),
    open: open,
    onSubmit: data => handleSave(data),
    onCancel: handleClose,
    formData: formData ? formData : '',
    title: `Add ${value.title} ${type}`,
    schema: inputSchema,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_5__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state, props) => ({
  vocabularies: state.vocabularies
}), {
  getVocabulary: _plone_volto_actions_vocabularies_vocabularies__WEBPACK_IMPORTED_MODULE_3__.getVocabulary
}))(VariableModal));

/***/ }

};
;
//# sourceMappingURL=RulesControlpanel.chunk.js.map