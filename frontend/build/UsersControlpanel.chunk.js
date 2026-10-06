"use strict";
exports.ids = ["UsersControlpanel"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/RenderUsers.jsx"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/RenderUsers.jsx ***!
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/editing.svg */ "./node_modules/@plone/volto/src/icons/editing.svg");
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/actions/users/users */ "./node_modules/@plone/volto/src/actions/users/users.js");
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/plone.svg */ "./node_modules/@plone/volto/src/icons/plone.svg");
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/User/User */ "./node_modules/@plone/volto/src/helpers/User/User.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Users\\RenderUsers.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * RenderUsers component.
 * @module components/manage/Controlpanels/Users/RenderUsers
 */
;















/**
 * RenderUsers functional component.
 * @function RenderUsers
 */
const RenderUsers = props => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const updateRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    var _state$users;
    return (_state$users = state.users) === null || _state$users === void 0 ? void 0 : _state$users.update;
  });
  const {
    user: propsUser,
    listUsers,
    updateUser: updateUserRole,
    isUserManager,
    roles,
    inheritedRole,
    userschema,
    onDelete
  } = props;

  // Use dispatch to call updateUser action
  const updateUserData = (userId, userData) => {
    dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_10__.updateUser)(userId, userData)).then(() => {
      // Handle success
      setUser({});
      if (listUsers) {
        listUsers();
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_8__["default"], {
        success: true,
        title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__.messages.success),
        content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__.messages.updateUserSuccess),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }));
    }).catch(() => {
      // Handle error
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_8__["default"], {
        error: true,
        title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__.messages.error),
        content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__.messages.thereWereSomeErrors),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }));
    });
  };

  /**
   * @param {*} event
   * @param {*} { value }
   */
  const onChange = (_event, {
    value
  }) => {
    const [userId, role] = value.split('&role=');
    updateUserRole(userId, role);
  };
  const onEditUserSubmit = data => {
    // Do not handle groups and roles in this form
    delete data.groups;
    delete data.roles;
    updateUserData(data.id, data);
  };
  const onClickEdit = formProps => {
    const {
      formData
    } = formProps;
    setUser(_objectSpread({}, formData));
  };
  const canDeleteUser = () => {
    if (isUserManager) return true;
    return !propsUser.roles.includes('Manager');
  };
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {
    key: propsUser.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
    className: "fullname",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, propsUser.fullname ? propsUser.fullname : propsUser.username, " (", propsUser.username, ")"), roles.map(role => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
    key: role.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, inheritedRole && inheritedRole.includes(role.id) ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: (_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_11___default()),
    size: "20px",
    color: "#007EB1",
    title: 'plone-svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
    checked: propsUser.roles.includes(role.id),
    onChange: onChange,
    value: `${propsUser.id}&role=${role.id}`,
    disabled: !(0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_13__.canAssignRole)(isUserManager, role),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {
    textAlign: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, canDeleteUser() && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    icon: "ellipsis horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Menu, {
    className: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, userschema && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {
    id: "edit-user-button",
    onClick: () => {
      onClickEdit({
        formData: propsUser
      });
    },
    value: propsUser['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: (_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Edit",
    defaultMessage: "Edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {
    id: "delete-user-button",
    onClick: onDelete,
    value: propsUser['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    size: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Delete",
    defaultMessage: "Delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }))))), Object.keys(user).length > 0 && userschema.loaded && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    className: "modal",
    onSubmit: onEditUserSubmit,
    submitError: user.editUserError,
    formData: user,
    onCancel: () => setUser({}),
    title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_12__.messages.updateUserFormTitle),
    loading: updateRequest.loading,
    schema: userschema.userschema,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }));
};

// PropTypes to the component
RenderUsers.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    username: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    fullname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    roles: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isUserManager: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  listUsers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  updateUser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  inheritedRole: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  userschema: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    loaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    userschema: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderUsers);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/UsersControlpanel.jsx"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/UsersControlpanel.jsx ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/actions/users/users */ "./node_modules/@plone/volto/src/actions/users/users.js");
/* harmony import */ var _plone_volto_actions_roles_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/actions/roles/roles */ "./node_modules/@plone/volto/src/actions/roles/roles.js");
/* harmony import */ var _plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/actions/groups/groups */ "./node_modules/@plone/volto/src/actions/groups/groups.js");
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_actions_userschema_userschema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/actions/userschema/userschema */ "./node_modules/@plone/volto/src/actions/userschema/userschema.js");
/* harmony import */ var _plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/AsyncConnect */ "./node_modules/@plone/volto/src/helpers/AsyncConnect/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/Pagination/Pagination */ "./node_modules/@plone/volto/src/components/theme/Pagination/Pagination.jsx");
/* harmony import */ var _plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/theme/Error/Error */ "./node_modules/@plone/volto/src/components/theme/Error/Error.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_components_manage_Controlpanels_Users_RenderUsers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Users/RenderUsers */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/RenderUsers.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/helpers/User/User */ "./node_modules/@plone/volto/src/helpers/User/User.js");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/icons/add-user.svg */ "./node_modules/@plone/volto/src/icons/add-user.svg");
/* harmony import */ var _plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @plone/volto/icons/plone.svg */ "./node_modules/@plone/volto/src/icons/plone.svg");
/* harmony import */ var _plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash/pull */ "lodash/pull");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash/difference */ "lodash/difference");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Controlpanels\\Users\\UsersControlpanel.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
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
 * UsersControlpanel functional component.
 * @function UsersControlpanel
 */
const UsersControlpanel = props => {
  const {
    staticContext
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useDispatch)();

  // Redux state selectors
  const roles = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.roles.roles);
  const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.users.users);
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.users.user);
  const userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.userSession.token ? jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(state.userSession.token).sub : '');
  const groups = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.groups.groups);
  const many_users = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => {
    var _state$controlpanels, _state$controlpanels$, _state$controlpanels$2;
    return (_state$controlpanels = state.controlpanels) === null || _state$controlpanels === void 0 ? void 0 : (_state$controlpanels$ = _state$controlpanels.controlpanel) === null || _state$controlpanels$ === void 0 ? void 0 : (_state$controlpanels$2 = _state$controlpanels$.data) === null || _state$controlpanels$2 === void 0 ? void 0 : _state$controlpanels$2.many_users;
  });
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  const pathname = location.pathname;
  const deleteRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.users.delete);
  const createRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.users.create);
  const loadRolesRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.roles);
  const inheritedRole = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.authRole.authenticatedRole);
  const userschema = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => state.userschema);
  const controlPanelData = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(state => {
    var _state$controlpanels2;
    return (_state$controlpanels2 = state.controlpanels) === null || _state$controlpanels2 === void 0 ? void 0 : _state$controlpanels2.controlpanel;
  });

  // Action creators
  const listRolesAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch((0,_plone_volto_actions_roles_roles__WEBPACK_IMPORTED_MODULE_2__.listRoles)()), [dispatch]);
  const listUsersAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.listUsers)(params)), [dispatch]);
  const listGroupsAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch((0,_plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_3__.listGroups)()), [dispatch]);
  const getControlpanelAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(panel => dispatch((0,_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_4__.getControlpanel)(panel)), [dispatch]);
  const deleteUserAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(userId => dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.deleteUser)(userId)), [dispatch]);
  const updateUserAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((userId, data) => dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.updateUser)(userId, data)), [dispatch]);
  const updateGroupAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((groupId, data) => dispatch((0,_plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_3__.updateGroup)(groupId, data)), [dispatch]);
  const getUserSchemaAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch((0,_plone_volto_actions_userschema_userschema__WEBPACK_IMPORTED_MODULE_5__.getUserSchema)()), [dispatch]);
  const getUserAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(userId => dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.getUser)(userId)), [dispatch]);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showAddUser,
    1: setShowAddUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: addUserError,
    1: setAddUserError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: showDelete,
    1: setShowDelete
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: userToDelete,
    1: setUserToDelete
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const {
    0: entries,
    1: setEntries
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isClient,
    1: setIsClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: pageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  // eslint-disable-next-line no-unused-vars
  const {
    0: loginUsingEmail,
    1: setLoginUsingEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Reserved for future use to disable username field when email login is enabled
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    await getControlpanelAction('usergroup');
    await listRolesAction();
    if (!many_users) {
      listGroupsAction();
      await listUsersAction();
      setEntries(users);
    }
    // Only fetch user schema if it hasn't been loaded yet (e.g. by asyncConnect SSR)
    if (!(userschema !== null && userschema !== void 0 && userschema.loaded)) {
      await getUserSchemaAction();
    }
    await getUserAction(userId);
  }, [getControlpanelAction, listRolesAction, many_users, listGroupsAction, listUsersAction, users, userschema, getUserSchemaAction, getUserAction, userId]);

  /**
   * Check login using email status from security control panel
   * @method checkLoginUsingEmailStatus
   * @returns {undefined}
   */
  const checkLoginUsingEmailStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      var _controlPanelData$dat;
      await getControlpanelAction('security');
      if (controlPanelData !== null && controlPanelData !== void 0 && (_controlPanelData$dat = controlPanelData.data) !== null && _controlPanelData$dat !== void 0 && _controlPanelData$dat.use_email_as_login) {
        setLoginUsingEmail(controlPanelData.data.use_email_as_login);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching security control panel', error);
    }
  }, [getControlpanelAction, controlPanelData]);
  const getUserFromProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    return lodash_find__WEBPACK_IMPORTED_MODULE_24___default()(users, ['@id', value]);
  }, [users]);

  /**
   * Search handler
   * @method onSearch
   * @param {object} event Event object.
   * @returns {undefined}
   */
  const onSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    event.preventDefault();
    setIsLoading(true);
    listUsersAction({
      search: search
    }).then(() => {
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      // eslint-disable-next-line no-console
      console.error('Error searching users', error);
    });
  }, [listUsersAction, search]);

  /**
   * On change search handler
   * @method onChangeSearch
   * @param {object} event Event object.
   * @returns {undefined}
   */
  const onChangeSearch = event => {
    setSearch(event.target.value);
  };

  /**
   * Handle delete user click
   * @method handleDeleteUser
   * @param {object} event Event object.
   * @param {string} value username.
   * @returns {undefined}
   */
  const handleDeleteUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, data) => {
    var _event$target, _event$currentTarget;
    // Handle both formats: direct value from event target or object with value
    const value = (data === null || data === void 0 ? void 0 : data.value) || (event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) || (event === null || event === void 0 ? void 0 : (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.value);
    if (value) {
      setShowDelete(true);
      setUserToDelete(getUserFromProps(value));
    }
  }, [getUserFromProps]);

  /**
   * On delete ok
   * @method onDeleteOk
   * @returns {undefined}
   */
  const onDeleteOk = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (userToDelete) {
      const deleteAction = deleteUserAction(userToDelete.id);
      if (deleteAction && typeof deleteAction.then === 'function') {
        deleteAction.then(() => {
          // Handle success
          setUserToDelete(undefined);
          setShowDelete(false);

          // Refresh users list
          listUsersAction({
            search: search
          });

          // Show success message
          react_toastify__WEBPACK_IMPORTED_MODULE_31__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__["default"], {
            success: true,
            title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.success),
            content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.userDeleted),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }
          }));
        }).catch(error => {
          // Handle error
          // eslint-disable-next-line no-console
          console.error('Error deleting user', error);
        });
      }
    }
  }, [userToDelete, deleteUserAction, listUsersAction, search, intl]);

  /**
   * On delete cancel
   * @method onDeleteCancel
   * @returns {undefined}
   */
  const onDeleteCancel = () => {
    setShowDelete(false);
    setUserToDelete(undefined);
  };

  /**
   *@param {object} user
   *@returns {undefined}
   *@memberof UsersControlpanel
   */
  const addUserToGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(user => {
    const {
      groups: userGroups,
      username
    } = user;
    userGroups.forEach(group => {
      updateGroupAction(group, {
        users: {
          [username]: true
        }
      });
    });
  }, [updateGroupAction]);

  /**
   * Callback to be called by the ModalForm when the form is submitted.
   *
   * @param {object} data Form data from the ModalForm.
   * @param {func} callback to set new form data in the ModalForm
   * @returns {undefined}
   */
  const onAddUserSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data, callback) => {
    const {
      groups: userGroups,
      sendPasswordReset,
      password
    } = data;
    if (sendPasswordReset !== undefined && sendPasswordReset === true && password !== undefined) {
      react_toastify__WEBPACK_IMPORTED_MODULE_31__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__["default"], {
        error: true,
        title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.error),
        content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormPasswordAndSendPasswordTogetherNotAllowed),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }
      }));
    } else {
      if (userGroups && userGroups.length > 0) addUserToGroup(data);
      const createUserAction = (0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.createUser)(data, sendPasswordReset);
      dispatch(createUserAction).then(() => {
        // Handle success
        if (callback) {
          callback({});
        }
        setShowAddUser(false);
        setAddUserError(undefined);

        // Refresh users list
        listUsersAction({
          search: search
        });

        // Show success message
        react_toastify__WEBPACK_IMPORTED_MODULE_31__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__["default"], {
          success: true,
          title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.success),
          content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.userCreated),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 15
          }
        }));
      }).catch(error => {
        // Handle error
        setAddUserError((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_19__.getErrorMessage)(error));
      });
    }
  }, [intl, addUserToGroup, dispatch, search, listUsersAction]);

  /**
   * Update user role
   * @param {*} name
   * @param {*} value
   */
  const updateUserRole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, value) => {
    setEntries(lodash_map__WEBPACK_IMPORTED_MODULE_25___default()(entries, entry => _objectSpread(_objectSpread({}, entry), {}, {
      roles: entry.id === name && !entry.roles.includes(value) ? [...entry.roles, value] : entry.id !== name ? entry.roles : lodash_pull__WEBPACK_IMPORTED_MODULE_26___default()(entry.roles, value)
    })));
  }, [entries]);

  /**
   * Update user role submit
   * @param {*} event
   */
  const updateUserRoleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.stopPropagation();
    const roleIds = roles.map(item => item.id);
    entries.forEach(item => {
      const userData = {
        roles: {}
      };
      const removedRoles = lodash_difference__WEBPACK_IMPORTED_MODULE_27___default()(roleIds, item.roles);
      removedRoles.forEach(role => {
        userData.roles[role] = false;
      });
      item.roles.forEach(role => {
        userData.roles[role] = true;
      });
      updateUserAction(item.id, userData);
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_31__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__["default"], {
      success: true,
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.success),
      content: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.updateRoles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 9
      }
    }));
  }, [roles, entries, updateUserAction, intl]);

  /**
   * Handle Errors after createUser()
   *
   * @param {object} error object
   * @returns {undefined}
   */
  const onAddUserError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(error => {
    setAddUserError((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_19__.getErrorMessage)(error));
  }, []);

  /**
   * On change page
   * @method onChangePage
   * @param {object} event Event object.
   * @param {string} value Page value.
   * @returns {undefined}
   */
  const onChangePage = (event, {
    value
  }) => {
    setCurrentPage(value);
  };

  /**
   * Filters the roles a user can assign when adding a user.
   * @method canAssignAdd
   * @returns {arry}
   */
  const canAssignAdd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(isManager => {
    if (isManager) return roles;
    return user !== null && user !== void 0 && user.roles ? roles.filter(role => user.roles.includes(role.id)) : [];
  }, [roles, user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
    // Skip fetching if the store already has an error.
    if (loadRolesRequest !== null && loadRolesRequest !== void 0 && loadRolesRequest.error) return;
    fetchData();
    checkLoginUsingEmailStatus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setEntries(users);
  }, [users]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (createRequest !== null && createRequest !== void 0 && createRequest.error && !(createRequest !== null && createRequest !== void 0 && createRequest.loading)) {
      onAddUserError(createRequest.error);
    }
  }, [createRequest === null || createRequest === void 0 ? void 0 : createRequest.error, createRequest === null || createRequest === void 0 ? void 0 : createRequest.loading, onAddUserError]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loadRolesRequest !== null && loadRolesRequest !== void 0 && loadRolesRequest.error && !(loadRolesRequest !== null && loadRolesRequest !== void 0 && loadRolesRequest.loading)) {
      setError(loadRolesRequest.error);
    }
  }, [loadRolesRequest === null || loadRolesRequest === void 0 ? void 0 : loadRolesRequest.error, loadRolesRequest === null || loadRolesRequest === void 0 ? void 0 : loadRolesRequest.loading]);
  const effectiveError = error || (loadRolesRequest !== null && loadRolesRequest !== void 0 && loadRolesRequest.error && !(loadRolesRequest !== null && loadRolesRequest !== void 0 && loadRolesRequest.loading) ? loadRolesRequest.error : null);
  if (effectiveError) {
    return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: effectiveError,
      staticContext: staticContext,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 12
      }
    });
  }
  const usernameToDelete = userToDelete ? userToDelete.username : '';

  // Copy the userschema using JSON serialization/deserialization
  // this is really ugly, but if we don't do this the original value
  // of the userschema is changed and it is used like that through
  // the lifecycle of the application
  let adduserschema = {};
  let isUserManager = false;
  if (userschema !== null && userschema !== void 0 && userschema.loaded) {
    isUserManager = (0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_18__.isManager)(user);
    adduserschema = JSON.parse(JSON.stringify(userschema === null || userschema === void 0 ? void 0 : userschema.userschema));

    // Add custom form fields to the schema
    adduserschema.properties.username = {
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormUsernameTitle),
      type: 'string',
      description: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormUsernameDescription)
    };
    adduserschema.properties.password = {
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormPasswordTitle),
      type: 'password',
      description: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormPasswordDescription),
      widget: 'password'
    };
    adduserschema.properties.sendPasswordReset = {
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormSendPasswordResetTitle),
      type: 'boolean'
    };
    adduserschema.properties.roles = {
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormRolesTitle),
      type: 'array',
      choices: canAssignAdd(isUserManager).map(role => [role.id, role.title]),
      noValueOption: false
    };
    adduserschema.properties.groups = {
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserGroupNameTitle),
      type: 'array',
      choices: groups.filter(group => (0,_plone_volto_helpers_User_User__WEBPACK_IMPORTED_MODULE_18__.canAssignGroup)(isUserManager, group)).map(group => [group.id, group.id]),
      noValueOption: false
    };
    // Add custom fields to the first fieldset if they don't already exist
    if (adduserschema.fieldsets && adduserschema.fieldsets.length > 0 && !adduserschema.fieldsets[0].fields.includes('username')) {
      adduserschema.fieldsets[0].fields = adduserschema.fieldsets[0].fields.concat(['username', 'password', 'sendPasswordReset', 'roles', 'groups']);
    }
  }
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Container, {
    className: "users-control-panel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.users),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Confirm, {
    open: showDelete,
    header: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.deleteUserConfirmTitle),
    content: __jsx("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Dimmer, {
      active: deleteRequest === null || deleteRequest === void 0 ? void 0 : deleteRequest.loading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Loader, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
      id: "Loading",
      defaultMessage: "Loading.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 19
      }
    }))), __jsx("ul", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 15
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
      id: "Do you really want to delete the user {username}?",
      defaultMessage: "Do you really want to delete the user {username}?",
      values: {
        username: __jsx("b", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 31
          }
        }, usernameToDelete)
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 17
      }
    }))),
    onCancel: onDeleteCancel,
    onConfirm: onDeleteOk,
    size: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 9
    }
  }), userschema !== null && userschema !== void 0 && userschema.loaded && showAddUser ? __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_13__.ModalForm, {
    open: showAddUser,
    className: "modal",
    onSubmit: onAddUserSubmit,
    submitError: addUserError,
    onCancel: () => {
      setShowAddUser(false);
      setAddUserError(undefined);
    },
    title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserFormTitle),
    loading: createRequest === null || createRequest === void 0 ? void 0 : createRequest.loading,
    schema: adduserschema,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 11
    }
  }) : null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Segment.Group, {
    raised: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Segment, {
    className: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
    id: "Users",
    defaultMessage: "Users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Segment, {
    secondary: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
    id: "Note that roles set here apply directly to a user. The symbol{plone_svg}indicates a role inherited from membership in a group.",
    defaultMessage: "Note that roles set here apply directly to a user. The symbol{plone_svg}indicates a role inherited from membership in a group.",
    values: {
      plone_svg: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: (_plone_volto_icons_plone_svg__WEBPACK_IMPORTED_MODULE_23___default()),
        size: "20px",
        color: "#007EB1",
        title: 'plone-svg',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 17
        }
      })
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Form, {
    onSubmit: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Form.Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Input, {
    name: "SearchableText",
    action: {
      icon: 'search',
      loading: isLoading,
      disabled: isLoading
    },
    placeholder: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.searchUsers),
    onChange: onChangeSearch,
    id: "user-search-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 15
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Form, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 9
    }
  }, (many_users && entries.length > 0 || !many_users) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table, {
    padded: true,
    striped: true,
    attached: true,
    unstackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
    id: "User name",
    defaultMessage: "User name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 21
    }
  })), roles.map(role => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.HeaderCell, {
    key: role.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 21
    }
  }, role.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_28__.FormattedMessage, {
    id: "Actions",
    defaultMessage: "Actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 21
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Table.Body, {
    "data-user": "users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 15
    }
  }, entries.slice(currentPage * 10, pageSize * (currentPage + 1)).map(userItem => __jsx(_plone_volto_components_manage_Controlpanels_Users_RenderUsers__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: userItem.id,
    onDelete: handleDeleteUser,
    roles: roles,
    user: userItem,
    updateUser: updateUserRole,
    inheritedRole: inheritedRole,
    userschema: userschema,
    listUsers: listUsersAction,
    isUserManager: isUserManager,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 21
    }
  })))), entries.length === 0 && search && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 13
    }
  }, intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.userSearchNoResults)), __jsx("div", {
    className: "contents-pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
    current: currentPage,
    total: Math.ceil((entries === null || entries === void 0 ? void 0 : entries.length) / pageSize),
    onChangePage: onChangePage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 13
    }
  })))), isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_29__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    pathname: pathname,
    hideDefaultViewButtons: true,
    inner: __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Button, {
      id: "toolbar-save",
      className: "save",
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.save),
      onClick: updateUserRoleSubmit,
      loading: createRequest === null || createRequest === void 0 ? void 0 : createRequest.loading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_22___default()),
      className: "circled",
      size: "30px",
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.save),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 19
      }
    })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
      to: "/controlpanel",
      className: "cancel",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20___default()),
      className: "circled",
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.cancel),
      size: "30px",
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.cancel),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 19
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.Button, {
      id: "toolbar-add",
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserButtonTitle),
      onClick: () => {
        setShowAddUser(true);
      },
      loading: createRequest === null || createRequest === void 0 ? void 0 : createRequest.loading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_add_user_svg__WEBPACK_IMPORTED_MODULE_21___default()),
      size: "45px",
      color: "#826A6A",
      title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_17__.messages.addUserButtonTitle),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 19
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 11
    }
  }), document.getElementById('toolbar')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_6__.asyncConnect)([{
  key: 'controlpanels',
  promise: ({
    store: {
      dispatch,
      getState
    }
  }) => {
    return dispatch((0,_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_4__.getControlpanel)('usergroup')).then(() => {
      var _state$controlpanels3, _state$controlpanels4, _state$controlpanels5;
      const state = getState();
      const many_users = (_state$controlpanels3 = state.controlpanels) === null || _state$controlpanels3 === void 0 ? void 0 : (_state$controlpanels4 = _state$controlpanels3.controlpanel) === null || _state$controlpanels4 === void 0 ? void 0 : (_state$controlpanels5 = _state$controlpanels4.data) === null || _state$controlpanels5 === void 0 ? void 0 : _state$controlpanels5.many_users;
      if (!many_users) {
        dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.listUsers)());
        dispatch((0,_plone_volto_actions_groups_groups__WEBPACK_IMPORTED_MODULE_3__.listGroups)());
      }
    });
  }
}, {
  key: 'roles',
  promise: ({
    store: {
      dispatch
    }
  }) => {
    return dispatch((0,_plone_volto_actions_roles_roles__WEBPACK_IMPORTED_MODULE_2__.listRoles)());
  }
}, {
  key: 'userschema',
  promise: ({
    store: {
      dispatch
    }
  }) => {
    return dispatch((0,_plone_volto_actions_userschema_userschema__WEBPACK_IMPORTED_MODULE_5__.getUserSchema)());
  }
}, {
  key: 'user',
  promise: ({
    store: {
      dispatch,
      getState
    }
  }) => {
    const state = getState();
    const token = state.userSession.token;
    if (token) {
      const userId = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(token).sub;
      if (userId) {
        return dispatch((0,_plone_volto_actions_users_users__WEBPACK_IMPORTED_MODULE_1__.getUser)(userId));
      }
    }
  }
}])(UsersControlpanel));

/***/ }

};
;
//# sourceMappingURL=UsersControlpanel.chunk.js.map