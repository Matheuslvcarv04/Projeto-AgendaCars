"use strict";
exports.ids = ["GroupsControlpanel"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/actions/authRole/authRole.js"
/*!********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/actions/authRole/authRole.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticatedRole: () => (/* binding */ authenticatedRole)
/* harmony export */ });
/* harmony import */ var _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/constants/ActionTypes */ "./node_modules/@plone/volto/src/constants/ActionTypes.js");
/**
 * AuthRole actions.
 * @module actions/authRole/authRole
 */


function authenticatedRole(role) {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.AUTH_ROLE,
    result: role
  };
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/GroupsControlpanel.jsx"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/GroupsControlpanel.jsx ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/actions/groups/groups */ "./node_modules/@plone/volto/src/actions/groups/groups.js");
/* harmony import */ var _plone_volto_actions_roles_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/actions/roles/roles */ "./node_modules/@plone/volto/src/actions/roles/roles.js");
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_actions_authRole_authRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/actions/authRole/authRole */ "./node_modules/@plone/volto/src/actions/authRole/authRole.js");
/* harmony import */ var _plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/actions/users/users */ "./node_modules/@plone/volto/src/actions/users/users.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/theme/Pagination/Pagination */ "./node_modules/@plone/volto/src/components/theme/Pagination/Pagination.jsx");
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_manage_Controlpanels_Groups_RenderGroups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Groups/RenderGroups */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/RenderGroups.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/helpers/User/User */ "./node_modules/@plone/volto/src/helpers/User/User.js");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/add-user.svg */ "./node_modules/@plone/volto/src/icons/add-user.svg");
/* harmony import */ var _plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/plone.svg */ "./node_modules/@plone/volto/src/icons/plone.svg");
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash/pull */ "lodash/pull");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Groups\\GroupsControlpanel.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_25___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Users controlpanel container.
 * @module components/manage/Controlpanels/UsersControlpanel
 */
;
































/**
 * GroupsControlpanel class.
 * @class GroupsControlpanel
 * @extends Component
 */
class GroupsControlpanel extends react__WEBPACK_IMPORTED_MODULE_25__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Sharing
   */
  constructor(props) {
    super(props);
    _defineProperty(this, "fetchData", async () => {
      await this.props.getControlpanel('usergroup');
      await this.props.listRoles();
      if (!this.props.many_groups) {
        await this.props.listGroups();
        this.setState({
          groupEntries: this.props.groups
        });
      }
      await this.props.getUser(this.props.userId);
    });
    /**
     * @param {*} event
     * @memberof GroupsControlpanel
     */
    _defineProperty(this, "updateGroupRoleSubmit", e => {
      e.stopPropagation();
      this.state.groupEntries.forEach(item => {
        this.props.updateGroup(item.id, item);
      });
      this.props.authenticatedRole(this.state.authenticatedRole);
      react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
        success: true,
        title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.success),
        content: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.updateGroups),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 7
        }
      }));
    });
    /**
     * On change page
     * @method onChangePage
     * @param {object} event Event object.
     * @param {string} value Page value.
     * @returns {undefined}
     */
    _defineProperty(this, "onChangePage", (event, {
      value
    }) => {
      this.setState({
        currentPage: value
      });
    });
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearchGroups = this.onSearchGroups.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.onDeleteOk = this.onDeleteOk.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
    this.onAddGroupSubmit = this.onAddGroupSubmit.bind(this);
    this.onAddGroupError = this.onAddGroupError.bind(this);
    this.onAddGroupSuccess = this.onAddGroupSuccess.bind(this);
    this.updateGroupRole = this.updateGroupRole.bind(this);
    this.state = {
      search: '',
      isLoading: false,
      addGroupError: '',
      showDelete: false,
      groupToDelete: undefined,
      showAddGroup: false,
      groupEntries: [],
      isClient: false,
      authenticatedRole: props.inheritedRole || [],
      currentPage: 0,
      pageSize: 10
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
    this.fetchData();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.deleteGroupRequest.loading && nextProps.deleteGroupRequest.loaded || this.props.createGroupRequest.loading && nextProps.createGroupRequest.loaded) {
      this.props.listGroups(this.state.search);
    }
    if (this.props.deleteGroupRequest.loading && nextProps.deleteGroupRequest.loaded) {
      this.onDeleteGroupSuccess();
    }
    if (this.props.createGroupRequest.loading && nextProps.createGroupRequest.loaded) {
      this.onAddGroupSuccess();
    }
    if (this.props.createGroupRequest.loading && nextProps.createGroupRequest.error) {
      this.onAddGroupError(nextProps.createGroupRequest.error);
    }
    if (this.props.loadRolesRequest.loading && nextProps.loadRolesRequest.error) {
      this.setState({
        error: nextProps.loadRolesRequest.error
      });
    }
  }
  getGroupFromProps(value) {
    return lodash_find__WEBPACK_IMPORTED_MODULE_21___default()(this.props.groups, ['@id', value]);
  }

  /**
   *
   *
   * @param {*} event Event object
   * @memberof GroupsControlpanel
   * @returns {undefined}
   */
  onSearchGroups(event) {
    this.setState({
      isLoading: true
    });
    event.preventDefault();
    this.props.listGroups(this.state.search).then(() => {
      this.setState({
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });
      // eslint-disable-next-line no-console
      console.error('Error searching group', error);
    });
  }

  /**
   * On change search handler
   * @method onChangeSearch
   * @param {object} event Event object.
   * @returns {undefined}
   */
  onChangeSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  /**
   *
   *
   * @param {*} event Event object.
   * @param {*} { value } id (groupname)
   * @memberof GroupsControlpanel
   * @returns {undefined}
   */
  deleteGroup(event, {
    value
  }) {
    if (value) {
      this.setState({
        showDelete: true,
        groupToDelete: this.getGroupFromProps(value)
      });
    }
  }

  /**
   * On delete ok
   * @method onDeleteOk
   * @returns {undefined}
   */
  onDeleteOk() {
    if (this.state.groupToDelete) {
      this.props.deleteGroup(this.state.groupToDelete.id);
    }
  }

  /**
   * On delete cancel
   * @method onDeleteCancel
   * @returns {undefined}
   */
  onDeleteCancel() {
    this.setState({
      showDelete: false,
      itemsToDelete: [],
      groupToDelete: undefined
    });
  }

  /**
   *
   * @param {*} name
   * @param {*} value
   * @memberof GroupsControlpanel
   */
  updateGroupRole(name, value) {
    this.setState(prevState => ({
      groupEntries: lodash_map__WEBPACK_IMPORTED_MODULE_22___default()(this.state.groupEntries, entry => _objectSpread(_objectSpread({}, entry), {}, {
        roles: entry.id === name && !entry.roles.includes(value) ? [...entry.roles, value] : entry.id !== name ? entry.roles : lodash_pull__WEBPACK_IMPORTED_MODULE_23___default()(entry.roles, value)
      })),
      authenticatedRole: name === 'AuthenticatedUsers' && !prevState.authenticatedRole.includes(value) ? [...prevState.authenticatedRole, value] : name !== 'AuthenticatedUsers' ? prevState.authenticatedRole : lodash_pull__WEBPACK_IMPORTED_MODULE_23___default()(prevState.authenticatedRole, value)
    }));
  }
  /**
   *
   *
   * @param {object} data Form data from the ModalForm.
   * @param {func} callback to set new form data in the ModalForm
   * @memberof GroupsControlpanel
   * @returns {undefined}
   */
  onAddGroupSubmit(data, callback) {
    this.props.createGroup(data);
    this.setState({
      addGroupSetFormDataCallback: callback
    });
  }

  /**
   * Handle Errors after createGroup()
   *
   * @param {*} error object. Requires the property .message
   * @memberof GroupsControlpanel
   * @returns {undefined}
   */
  onAddGroupError(error) {
    this.setState({
      addGroupError: error.response.body.message
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.groups !== prevProps.groups) {
      this.setState({
        groupEntries: this.props.groups
      });
    }
  }

  /**
   * Handle Success after createGroup()
   *
   * @memberof GroupsControlpanel
   * @returns {undefined}
   */
  onAddGroupSuccess() {
    this.state.addGroupSetFormDataCallback({});
    this.setState({
      showAddGroup: false,
      addGroupError: undefined,
      addGroupSetFormDataCallback: undefined
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
      success: true,
      title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.success),
      content: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.groupCreated),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 7
      }
    }));
  }

  /**
   * Handle Success after deleteGroup()
   *
   * @returns {undefined}
   */
  onDeleteGroupSuccess() {
    this.setState({
      groupToDelete: undefined,
      showDelete: false
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
      success: true,
      title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.success),
      content: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.groupDeleted),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
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
    var _this$props, _this$props$deleteGro, _this$state$groupEntr;
    if (this.state.error) {
      return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
        error: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 14
        }
      });
    }
    /*let fullnameToDelete = this.state.groupToDelete
        ? this.state.groupToDelete.fullname
        : '';*/
    let groupNameToDelete = this.state.groupToDelete ? this.state.groupToDelete.id : '';
    const isUserManager = (0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_16__.isManager)(this.props.user);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Container, {
      className: "users-control-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 7
      }
    }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.groups),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Confirm, {
      open: this.state.showDelete,
      header: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.deleteGroupConfirmTitle),
      content: __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 15
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Dimmer, {
        active: this === null || this === void 0 ? void 0 : (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$deleteGro = _this$props.deleteGroupRequest) === null || _this$props$deleteGro === void 0 ? void 0 : _this$props$deleteGro.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 17
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Loader, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 19
        }
      }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
        id: "Loading",
        defaultMessage: "Loading.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 21
        }
      }))), __jsx("ul", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 17
        }
      }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
        id: "Do you really want to delete the group {groupname}?",
        defaultMessage: "Do you really want to delete the group {groupname}?",
        values: {
          groupname: __jsx("b", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 34
            }
          }, groupNameToDelete)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 19
        }
      }))),
      onCancel: this.onDeleteCancel,
      onConfirm: this.onDeleteOk,
      size: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 11
      }
    }), this.state.showAddGroup ? __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_12__.ModalForm, {
      open: this.state.showAddGroup,
      className: "modal",
      onSubmit: this.onAddGroupSubmit,
      submitError: this.state.addGroupError,
      onCancel: () => this.setState({
        showAddGroup: false
      }),
      title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormTitle),
      loading: this.props.createGroupRequest.loading,
      schema: {
        fieldsets: [{
          id: 'default',
          title: 'FIXME: Group Data',
          fields: ['title', 'description', 'groupname', 'email', 'roles']
        }],
        properties: {
          title: {
            title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormTitleTitle),
            type: 'string',
            description: ''
          },
          description: {
            title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormDescriptionTitle),
            type: 'string',
            description: ''
          },
          groupname: {
            title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormGroupNameTitle),
            type: 'string',
            description: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormGroupNameDescription)
          },
          email: {
            title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormEmailTitle),
            type: 'string',
            description: '',
            widget: 'email'
          },
          roles: {
            title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsFormRolesTitle),
            type: 'array',
            choices: this.props.roles.filter(role => (0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_16__.canAssignRole)(isUserManager, role)).map(role => [role.id, role.title]),
            noValueOption: false,
            description: ''
          }
        },
        required: ['groupname']
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 13
      }
    }) : null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 11
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
      id: "Groups",
      defaultMessage: "Groups",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Segment, {
      secondary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 11
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
      id: "Groups are logical collections of users, such as departments and business units. Groups are not directly related to permissions on a global level, you normally use Roles for that - and let certain Groups have a particular role. The symbol{plone_svg}indicates a role inherited from membership in another group.",
      defaultMessage: "Groups are logical collections of users, such as departments and business units. Groups are not directly related to permissions on a global level, you normally use Roles for that - and let certain Groups have a particular role. The symbol{plone_svg}indicates a role inherited from membership in another group.",
      values: {
        plone_svg: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: (_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_20___default()),
          size: "20px",
          color: "#007EB1",
          title: 'plone-svg',
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 19
          }
        })
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Form, {
      onSubmit: this.onSearchGroups,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Form.Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Input, {
      name: "SearchableText",
      action: {
        icon: 'search',
        loading: this.state.isLoading,
        disabled: this.state.isLoading
      },
      placeholder: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.searchGroups),
      onChange: this.onChangeSearch,
      id: "group-search-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 17
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Form, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 13
      }
    }, (this.props.many_groups && this.state.groupEntries.length > 0 || !this.props.many_groups) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table, {
      padded: true,
      striped: true,
      attached: true,
      unstackable: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
      id: "Groupname",
      defaultMessage: "Groupname",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 25
      }
    })), this.props.roles.map(role => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.HeaderCell, {
      key: role.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 25
      }
    }, role.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 23
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
      id: "Actions",
      defaultMessage: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 25
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Table.Body, {
      "data-group": "groups",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 19
      }
    }, this.state.groupEntries.slice(this.state.currentPage * 10, this.state.pageSize * (this.state.currentPage + 1)).map(group => __jsx(_plone_volto_components_manage_Controlpanels_Groups_RenderGroups__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: group.id,
      onDelete: this.deleteGroup,
      roles: this.props.roles,
      group: group,
      updateGroups: this.updateGroupRole,
      inheritedRole: this.state.authenticatedRole,
      isUserManager: isUserManager,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599,
        columnNumber: 25
      }
    })))), this.state.groupEntries.length === 0 && this.state.search && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 17
      }
    }, this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.groupSearchNoResults))), __jsx("div", {
      className: "contents-pagination",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 13
      }
    }, __jsx(_plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
      current: this.state.currentPage,
      total: Math.ceil(((_this$state$groupEntr = this.state.groupEntries) === null || _this$state$groupEntr === void 0 ? void 0 : _this$state$groupEntr.length) / this.state.pageSize),
      onChangePage: this.onChangePage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 15
      }
    })))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_27__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      pathname: this.props.pathname,
      hideDefaultViewButtons: true,
      inner: __jsx((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Button, {
        id: "toolbar-save",
        className: "save",
        "aria-label": this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.save),
        onClick: this.updateGroupRoleSubmit,
        loading: this.props.createGroupRequest.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_19___default()),
        className: "circled",
        size: "30px",
        title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.save),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 21
        }
      })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
        to: "/controlpanel",
        className: "cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_17___default()),
        className: "circled",
        "aria-label": this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.cancel),
        size: "30px",
        title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.cancel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 21
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.Button, {
        id: "toolbar-add",
        "aria-label": this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsButtonTitle),
        onClick: () => {
          this.setState({
            showAddGroup: true
          });
        },
        loading: this.props.createGroupRequest.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 19
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: (_plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_18___default()),
        size: "45px",
        color: "#826A6A",
        title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_15__.messages.addGroupsButtonTitle),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 21
        }
      }))),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
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
_defineProperty(GroupsControlpanel, "propTypes", {
  listRoles: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func).isRequired,
  listGroups: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func).isRequired,
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string).isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_24___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_24___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    '@type': (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)
  })).isRequired,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_24___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_24___default().shape({
    Title: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    Description: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    roles: prop_types__WEBPACK_IMPORTED_MODULE_24___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)),
    groupname: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)
  })).isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_24___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    email: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    fullname: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    groups: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().object),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    portrait: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    home_page: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string),
    roles: prop_types__WEBPACK_IMPORTED_MODULE_24___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)),
    username: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)
  }).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_30__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_26__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_28__.connect)((state, props) => {
  var _state$controlpanels, _state$controlpanels$, _state$controlpanels$2, _state$controlpanels2, _state$controlpanels3, _state$controlpanels4;
  return {
    user: state.users.user,
    userId: state.userSession.token ? jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(state.userSession.token).sub : '',
    roles: state.roles.roles,
    groups: state.groups.groups,
    description: state.description,
    many_users: (_state$controlpanels = state.controlpanels) === null || _state$controlpanels === void 0 ? void 0 : (_state$controlpanels$ = _state$controlpanels.controlpanel) === null || _state$controlpanels$ === void 0 ? void 0 : (_state$controlpanels$2 = _state$controlpanels$.data) === null || _state$controlpanels$2 === void 0 ? void 0 : _state$controlpanels$2.many_users,
    many_groups: (_state$controlpanels2 = state.controlpanels) === null || _state$controlpanels2 === void 0 ? void 0 : (_state$controlpanels3 = _state$controlpanels2.controlpanel) === null || _state$controlpanels3 === void 0 ? void 0 : (_state$controlpanels4 = _state$controlpanels3.data) === null || _state$controlpanels4 === void 0 ? void 0 : _state$controlpanels4.many_groups,
    pathname: props.location.pathname,
    deleteGroupRequest: state.groups.delete,
    createGroupRequest: state.groups.create,
    loadRolesRequest: state.roles,
    inheritedRole: state.authRole.authenticatedRole
  };
}, dispatch => (0,redux__WEBPACK_IMPORTED_MODULE_30__.bindActionCreators)({
  listRoles: _plone_volto_actions_roles_roles__WEBPACK_IMPORTED_MODULE_1__.listRoles,
  listGroups: _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_0__.listGroups,
  deleteGroup: _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_0__.deleteGroup,
  getControlpanel: _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_2__.getControlpanel,
  createGroup: _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_0__.createGroup,
  updateGroup: _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_0__.updateGroup,
  authenticatedRole: _plone_volto_actions_authRole_authRole__WEBPACK_IMPORTED_MODULE_3__.authenticatedRole,
  getUser: _plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_4__.getUser
}, dispatch)))(GroupsControlpanel));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/RenderGroups.jsx"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/RenderGroups.jsx ***!
  \***********************************************************************************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/plone.svg */ "./node_modules/@plone/volto/src/icons/plone.svg");
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/User/User */ "./node_modules/@plone/volto/src/helpers/User/User.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Groups\\RenderGroups.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







const RenderGroups = props => {
  const onChange = (event, {
    value
  }) => {
    const [group, role] = value.split('.');
    props.updateGroups(group, role);
  };
  const isAuthGroup = roleId => {
    return props.inheritedRole.includes(roleId);
  };
  const canDeleteGroup = () => {
    if (props.isUserManager) return true;
    return !props.group.roles.includes('Manager');
  };
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    key: props.group.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, props.group.groupname), props.roles.map(role => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    key: role.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, props.inheritedRole && props.inheritedRole.includes(role.id) && props.group.roles.includes('Authenticated') ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: (_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    size: "20px",
    color: "#007EB1",
    title: 'plone-svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
    checked: props.group.id === 'AuthenticatedUsers' ? isAuthGroup(role.id) : props.group.roles.includes(role.id),
    onChange: onChange,
    value: `${props.group.id}.${role.id}`,
    disabled: !(0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_7__.canAssignRole)(props.isUserManager, role),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    textAlign: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, canDeleteGroup() && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    icon: "ellipsis horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {
    className: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {
    onClick: props.onDelete,
    value: props.group['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Delete",
    defaultMessage: "Delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }))))));
};
RenderGroups.propTypes = {
  //single group
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    email: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    groupname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    roles: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
  }).isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  inheritedRole: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderGroups);

/***/ }

};
;
//# sourceMappingURL=GroupsControlpanel.chunk.js.map