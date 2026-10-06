"use strict";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Controlpanels/index.tsx"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Controlpanels/index.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddRuleControlpanel: () => (/* binding */ AddRuleControlpanel),
/* harmony export */   AddonsControlpanel: () => (/* binding */ AddonsControlpanel),
/* harmony export */   AliasesControlpanel: () => (/* binding */ AliasesControlpanel),
/* harmony export */   ConfigureRuleControlpanel: () => (/* binding */ ConfigureRuleControlpanel),
/* harmony export */   ContentType: () => (/* binding */ ContentType),
/* harmony export */   ContentTypeLayout: () => (/* binding */ ContentTypeLayout),
/* harmony export */   ContentTypeSchema: () => (/* binding */ ContentTypeSchema),
/* harmony export */   ContentTypes: () => (/* binding */ ContentTypes),
/* harmony export */   Controlpanel: () => (/* binding */ Controlpanel),
/* harmony export */   Controlpanels: () => (/* binding */ Controlpanels),
/* harmony export */   DatabaseInformation: () => (/* binding */ DatabaseInformation),
/* harmony export */   EditRuleControlpanel: () => (/* binding */ EditRuleControlpanel),
/* harmony export */   GroupsControlpanel: () => (/* binding */ GroupsControlpanel),
/* harmony export */   ModerateComments: () => (/* binding */ ModerateComments),
/* harmony export */   RelationsControlpanel: () => (/* binding */ RelationsControlpanel),
/* harmony export */   RenderGroups: () => (/* binding */ RenderGroups),
/* harmony export */   RenderUsers: () => (/* binding */ RenderUsers),
/* harmony export */   RulesControlpanel: () => (/* binding */ RulesControlpanel),
/* harmony export */   UndoControlpanel: () => (/* binding */ UndoControlpanel),
/* harmony export */   UpgradeControlPanel: () => (/* binding */ UpgradeControlPanel),
/* harmony export */   UserGroupMembershipControlPanel: () => (/* binding */ UserGroupMembershipControlPanel),
/* harmony export */   UsersControlpanel: () => (/* binding */ UsersControlpanel),
/* harmony export */   VersionOverview: () => (/* binding */ VersionOverview)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/actions/controlpanels/controlpanels */ "./node_modules/@plone/volto/src/actions/controlpanels/controlpanels.js");
/* harmony import */ var _plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/helpers/AsyncConnect */ "./node_modules/@plone/volto/src/helpers/AsyncConnect/index.js");




// CONTROLPANELS

const LoadableControlpanels = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Controlpanels */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_VersionOverview_jsx"), __webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_Controlpanel_jsx-node_mo-68e9be"), __webpack_require__.e("Controlpanels")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Controlpanels */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Controlpanels.jsx"))));
const Controlpanels = (0,_plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_2__.asyncConnect)([{
  key: 'controlpanels',
  promise: async ({
    store: {
      dispatch
    }
  }) => await dispatch((0,_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_1__.listControlpanels)())
}, {
  key: 'systemInformation',
  promise: async ({
    store: {
      dispatch
    }
  }) => await dispatch((0,_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_1__.getSystemInformation)())
}])(LoadableControlpanels);
const Controlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Controlpanels */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_VersionOverview_jsx"), __webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_Controlpanel_jsx-node_mo-68e9be"), __webpack_require__.e("Controlpanels")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Controlpanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Controlpanel.jsx"))));

// RULES CONTROLPANELS

const RulesControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | RulesControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_actions_rules_rules_js"), __webpack_require__.e("RulesControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Rules/Rules */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/Rules.jsx"))));
const AddRuleControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | RulesControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_actions_rules_rules_js"), __webpack_require__.e("RulesControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Rules/AddRule */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/AddRule.jsx"))));
const EditRuleControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | RulesControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_actions_rules_rules_js"), __webpack_require__.e("RulesControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Rules/EditRule */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/EditRule.jsx"))));
const ConfigureRuleControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | RulesControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_actions_rules_rules_js"), __webpack_require__.e("RulesControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Rules/ConfigureRule */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Rules/ConfigureRule.jsx"))));

// USERS CONTROLPANELS

const UsersControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | UsersControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_icons_add-user_svg-node_modules_plone_volto_src_icons_pl-02668f"), __webpack_require__.e("UsersControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Users/UsersControlpanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/UsersControlpanel.jsx"))));
const RenderUsers = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | UsersControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_icons_add-user_svg-node_modules_plone_volto_src_icons_pl-02668f"), __webpack_require__.e("UsersControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Users/RenderUsers */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/RenderUsers.jsx"))));
const UserGroupMembershipControlPanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_Users_UserGroupMembershi-f34f6f").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Users/UserGroupMembershipControlPanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Users/UserGroupMembershipControlPanel.jsx"))));
const GroupsControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | GroupsControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_icons_add-user_svg-node_modules_plone_volto_src_icons_pl-02668f"), __webpack_require__.e("GroupsControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Groups/GroupsControlpanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/GroupsControlpanel.jsx"))));
const RenderGroups = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | GroupsControlpanel */[__webpack_require__.e("vendors-node_modules_plone_volto_src_icons_add-user_svg-node_modules_plone_volto_src_icons_pl-02668f"), __webpack_require__.e("GroupsControlpanel")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Groups/RenderGroups */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Groups/RenderGroups.jsx"))));

// RELATIONS CONTROLPANEL

const RelationsControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_Relations_Relations_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Relations/Relations */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Relations/Relations.jsx"))));

// ALIASES CONTROLPANEL

const AliasesControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_Aliases_jsx")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/Aliases */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/Aliases.jsx"))));

// UNDO CONTROLPANEL

const UndoControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_UndoControlpanel_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/UndoControlpanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/UndoControlpanel.jsx"))));

// ADDONS CONTROLPANEL

const AddonsControlpanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_AddonsControlpanel_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/AddonsControlpanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/AddonsControlpanel.jsx"))));

// CONTENT TYPES CONTROLPANEL

const ContentType = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() | ContentTypesControlpanel */ "ContentTypesControlpanel").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ContentType */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentType.jsx"))));
const ContentTypeLayout = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() | ContentTypesControlpanel */ "ContentTypesControlpanel").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ContentTypeLayout */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeLayout.jsx"))));
const ContentTypeSchema = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() | ContentTypesControlpanel */ "ContentTypesControlpanel").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ContentTypeSchema */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypeSchema.jsx"))));
const ContentTypes = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() | ContentTypesControlpanel */ "ContentTypesControlpanel").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ContentTypes */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ContentTypes.jsx"))));

// VERSION OVERVIEW

const VersionOverview = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Controlpanels_VersionOverview_jsx"), __webpack_require__.e("package_json")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/VersionOverview */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/VersionOverview.jsx"))));

// PLONE UPGRADES CONTROLPANELS

const UpgradeControlPanel = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_UpgradeControlPanel_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/UpgradeControlPanel */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/UpgradeControlPanel.jsx"))));

// MODERATE COMMENTS CONTROLPANEL

const ModerateComments = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_ModerateComments_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/ModerateComments */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/ModerateComments.jsx"))));

// DATABASE INFORMATION CONTROLPANELS

const DatabaseInformation = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_manage_Controlpanels_DatabaseInformation_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/manage/Controlpanels/DatabaseInformation */ "./node_modules/@plone/volto/src/components/manage/Controlpanels/DatabaseInformation.jsx"))));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/index.tsx"
/*!***************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/index.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignWidget: () => (/* binding */ AlignWidget),
/* harmony export */   ArrayWidget: () => (/* binding */ ArrayWidget),
/* harmony export */   ButtonsWidget: () => (/* binding */ ButtonsWidget),
/* harmony export */   CheckboxGroupWidget: () => (/* binding */ CheckboxGroupWidget),
/* harmony export */   CheckboxWidget: () => (/* binding */ CheckboxWidget),
/* harmony export */   ColorPickerWidget: () => (/* binding */ ColorPickerWidget),
/* harmony export */   DatetimeWidget: () => (/* binding */ DatetimeWidget),
/* harmony export */   EmailWidget: () => (/* binding */ EmailWidget),
/* harmony export */   FileWidget: () => (/* binding */ FileWidget),
/* harmony export */   FormFieldWrapper: () => (/* binding */ FormFieldWrapper),
/* harmony export */   HiddenWidget: () => (/* binding */ HiddenWidget),
/* harmony export */   IdWidget: () => (/* binding */ IdWidget),
/* harmony export */   ImageSizeWidget: () => (/* binding */ ImageSizeWidget),
/* harmony export */   InternalUrlWidget: () => (/* binding */ InternalUrlWidget),
/* harmony export */   NumberWidget: () => (/* binding */ NumberWidget),
/* harmony export */   ObjectBrowserWidget: () => (/* binding */ ObjectBrowserWidget),
/* harmony export */   ObjectListWidget: () => (/* binding */ ObjectListWidget),
/* harmony export */   ObjectWidget: () => (/* binding */ ObjectWidget),
/* harmony export */   PasswordWidget: () => (/* binding */ PasswordWidget),
/* harmony export */   QuerySortOnWidget: () => (/* binding */ QuerySortOnWidget),
/* harmony export */   QueryWidget: () => (/* binding */ QueryWidget),
/* harmony export */   QuerystringWidget: () => (/* binding */ QuerystringWidget),
/* harmony export */   RadioGroupWidget: () => (/* binding */ RadioGroupWidget),
/* harmony export */   RecurrenceWidget: () => (/* binding */ RecurrenceWidget),
/* harmony export */   ReferenceWidget: () => (/* binding */ ReferenceWidget),
/* harmony export */   RegistryImageWidget: () => (/* binding */ RegistryImageWidget),
/* harmony export */   SchemaWidget: () => (/* binding */ SchemaWidget),
/* harmony export */   SelectAutoComplete: () => (/* binding */ SelectAutoComplete),
/* harmony export */   SelectMetadataWidget: () => (/* binding */ SelectMetadataWidget),
/* harmony export */   SelectWidget: () => (/* binding */ SelectWidget),
/* harmony export */   StaticTextWidget: () => (/* binding */ StaticTextWidget),
/* harmony export */   TextWidget: () => (/* binding */ TextWidget),
/* harmony export */   TextareaWidget: () => (/* binding */ TextareaWidget),
/* harmony export */   TimeWidget: () => (/* binding */ TimeWidget),
/* harmony export */   TokenWidget: () => (/* binding */ TokenWidget),
/* harmony export */   UrlWidget: () => (/* binding */ UrlWidget),
/* harmony export */   VocabularyTermsWidget: () => (/* binding */ VocabularyTermsWidget),
/* harmony export */   WysiwygWidget: () => (/* binding */ WysiwygWidget)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);

const AlignWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/AlignWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/AlignWidget.jsx"))));
const ButtonsWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ButtonsWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ButtonsWidget.jsx"))));
const ArrayWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ArrayWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ArrayWidget.jsx"))));
const CheckboxWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/CheckboxWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxWidget.jsx"))));
const CheckboxGroupWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/CheckboxGroupWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/CheckboxGroupWidget.jsx"))));
const FileWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/FileWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/FileWidget.jsx"))));
const HiddenWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/HiddenWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/HiddenWidget.jsx"))));
const IdWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/IdWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/IdWidget.jsx"))));
const PasswordWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/PasswordWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/PasswordWidget.jsx"))));
const QueryWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/QueryWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/QueryWidget.jsx"))));
const QuerySortOnWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/QuerySortOnWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/QuerySortOnWidget.jsx"))));
const QuerystringWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/QuerystringWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/QuerystringWidget.jsx"))));
const RadioGroupWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/RadioGroupWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/RadioGroupWidget.jsx"))));
const SchemaWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/SchemaWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/SchemaWidget.jsx"))));
const SelectWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectWidget.jsx"))));
const StaticTextWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/StaticTextWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/StaticTextWidget.jsx"))));
const TextareaWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/TextareaWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/TextareaWidget.jsx"))));
const TextWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/TextWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/TextWidget.jsx"))));
const TokenWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/TokenWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/TokenWidget.jsx"))));
const WysiwygWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/WysiwygWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/WysiwygWidget.jsx"))));
const UrlWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/UrlWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/UrlWidget.jsx"))));
const InternalUrlWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/InternalUrlWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/InternalUrlWidget.jsx"))));
const EmailWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/EmailWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/EmailWidget.jsx"))));
const NumberWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/NumberWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/NumberWidget.jsx"))));
const ImageSizeWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ImageSizeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ImageSizeWidget.jsx"))));
const RegistryImageWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/RegistryImageWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/RegistryImageWidget.jsx"))));
const ReferenceWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ReferenceWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ReferenceWidget.jsx"))));
const ObjectBrowserWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectBrowserWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectBrowserWidget.jsx"))));
const ObjectWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectWidget.jsx"))));
const ObjectListWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ObjectListWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ObjectListWidget.jsx"))));
const VocabularyTermsWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/VocabularyTermsWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/VocabularyTermsWidget.jsx"))));
const SelectMetadataWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Blocks/Search/widgets/SelectMetadataField */ "./node_modules/@plone/volto/src/components/manage/Blocks/Search/widgets/SelectMetadataField.jsx"))));
const SelectAutoComplete = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectAutoComplete */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectAutoComplete.jsx"))));
const ColorPickerWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/ColorPickerWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/ColorPickerWidget.tsx"))));
const DatetimeWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/DatetimeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx"))));
const TimeWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/TimeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/TimeWidget.jsx"))));
const RecurrenceWidget = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx"))));
const FormFieldWrapper = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/*! import() | Widgets */[__webpack_require__.e("vendors-node_modules_plone_volto_src_components_manage_Widgets_DatetimeWidget_jsx"), __webpack_require__.e("Widgets")]).then(() => (__webpack_require__(/*! @plone/volto/components/manage/Widgets/FormFieldWrapper */ "./node_modules/@plone/volto/src/components/manage/Widgets/FormFieldWrapper.jsx"))));

/***/ },

/***/ "./node_modules/@plone/volto/src/config/Views.jsx"
/*!********************************************************!*\
  !*** ./node_modules/@plone/volto/src/config/Views.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypesViews: () => (/* binding */ contentTypesViews),
/* harmony export */   defaultView: () => (/* binding */ defaultView),
/* harmony export */   errorViews: () => (/* binding */ errorViews),
/* harmony export */   installDefaultViews: () => (/* binding */ installDefaultViews),
/* harmony export */   layoutViews: () => (/* binding */ layoutViews),
/* harmony export */   layoutViewsNamesMapping: () => (/* binding */ layoutViewsNamesMapping)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plone_volto_components_theme_View_DefaultView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/theme/View/DefaultView */ "./node_modules/@plone/volto/src/components/theme/View/DefaultView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_FileView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/View/FileView */ "./node_modules/@plone/volto/src/components/theme/View/FileView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_ImageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/View/ImageView */ "./node_modules/@plone/volto/src/components/theme/View/ImageView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_ListingView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/theme/View/ListingView */ "./node_modules/@plone/volto/src/components/theme/View/ListingView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_NewsItemView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/View/NewsItemView */ "./node_modules/@plone/volto/src/components/theme/View/NewsItemView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_SummaryView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/theme/View/SummaryView */ "./node_modules/@plone/volto/src/components/theme/View/SummaryView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_TabularView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/theme/View/TabularView */ "./node_modules/@plone/volto/src/components/theme/View/TabularView.jsx");
/* harmony import */ var _plone_volto_components_theme_View_LinkView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/theme/View/LinkView */ "./node_modules/@plone/volto/src/components/theme/View/LinkView.jsx");
/* harmony import */ var _plone_volto_components_theme_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/NotFound/NotFound */ "./node_modules/@plone/volto/src/components/theme/NotFound/NotFound.jsx");
/* harmony import */ var _plone_volto_components_theme_ConnectionRefused_ConnectionRefused__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/ConnectionRefused/ConnectionRefused */ "./node_modules/@plone/volto/src/components/theme/ConnectionRefused/ConnectionRefused.jsx");
/* harmony import */ var _plone_volto_components_theme_CorsError_CorsError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/theme/CorsError/CorsError */ "./node_modules/@plone/volto/src/components/theme/CorsError/CorsError.jsx");
/* harmony import */ var _plone_volto_components_theme_RequestTimeout_RequestTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/theme/RequestTimeout/RequestTimeout */ "./node_modules/@plone/volto/src/components/theme/RequestTimeout/RequestTimeout.jsx");
/* harmony import */ var _plone_volto_components_theme_View_AlbumView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/theme/View/AlbumView */ "./node_modules/@plone/volto/src/components/theme/View/AlbumView.jsx");
/* harmony import */ var _plone_volto_components_theme_Unauthorized_Unauthorized__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/theme/Unauthorized/Unauthorized */ "./node_modules/@plone/volto/src/components/theme/Unauthorized/Unauthorized.jsx");
/* harmony import */ var _plone_volto_components_theme_Forbidden_Forbidden__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components/theme/Forbidden/Forbidden */ "./node_modules/@plone/volto/src/components/theme/Forbidden/Forbidden.jsx");
/* harmony import */ var _plone_volto_components_theme_Error_ServerError__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/components/theme/Error/ServerError */ "./node_modules/@plone/volto/src/components/theme/Error/ServerError.jsx");


















const EventView = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_plone_volto_src_components_theme_View_EventView_jsx").then(() => (__webpack_require__(/*! @plone/volto/components/theme/View/EventView */ "./node_modules/@plone/volto/src/components/theme/View/EventView.jsx"))));
(0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  album_view: {
    id: 'Album view',
    defaultMessage: 'Album view'
  },
  event_listing: {
    id: 'Event listing',
    defaultMessage: 'Event listing'
  },
  full_view: {
    id: 'All content',
    defaultMessage: 'All content'
  },
  listing_view: {
    id: 'Listing view',
    defaultMessage: 'Listing view'
  },
  summary_view: {
    id: 'Summary view',
    defaultMessage: 'Summary view'
  },
  tabular_view: {
    id: 'Tabular view',
    defaultMessage: 'Tabular view'
  },
  layout_view: {
    id: 'Mosaic layout',
    defaultMessage: 'Mosaic layout'
  },
  document_view: {
    id: 'Document view',
    defaultMessage: 'Document view'
  },
  folder_listing: {
    id: 'Folder listing',
    defaultMessage: 'Folder listing'
  },
  newsitem_view: {
    id: 'News item view',
    defaultMessage: 'News item view'
  },
  link_redirect_view: {
    id: 'Link redirect view',
    defaultMessage: 'Link redirect view'
  },
  file_view: {
    id: 'File view',
    defaultMessage: 'File view'
  },
  image_view: {
    id: 'Image view',
    defaultMessage: 'Image view'
  },
  event_view: {
    id: 'Event view',
    defaultMessage: 'Event view'
  },
  view: {
    id: 'Default view',
    defaultMessage: 'Default view'
  },
  default: {
    id: 'Default view',
    defaultMessage: 'Default view'
  }
});

// Layout View Registry
const layoutViews = {
  document_view: _plone_volto_components_theme_View_DefaultView__WEBPACK_IMPORTED_MODULE_2__["default"],
  summary_view: _plone_volto_components_theme_View_SummaryView__WEBPACK_IMPORTED_MODULE_7__["default"],
  tabular_view: _plone_volto_components_theme_View_TabularView__WEBPACK_IMPORTED_MODULE_8__["default"],
  listing_view: _plone_volto_components_theme_View_ListingView__WEBPACK_IMPORTED_MODULE_5__["default"],
  link_redirect_view: _plone_volto_components_theme_View_LinkView__WEBPACK_IMPORTED_MODULE_9__["default"],
  album_view: _plone_volto_components_theme_View_AlbumView__WEBPACK_IMPORTED_MODULE_14__["default"]
};

// Content Types View Registry
const contentTypesViews = {
  'News Item': _plone_volto_components_theme_View_NewsItemView__WEBPACK_IMPORTED_MODULE_6__["default"],
  File: _plone_volto_components_theme_View_FileView__WEBPACK_IMPORTED_MODULE_3__["default"],
  Image: _plone_volto_components_theme_View_ImageView__WEBPACK_IMPORTED_MODULE_4__["default"],
  Event: EventView
};

// Default view
const defaultView = _plone_volto_components_theme_View_DefaultView__WEBPACK_IMPORTED_MODULE_2__["default"];
const errorViews = {
  404: _plone_volto_components_theme_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_10__["default"],
  401: _plone_volto_components_theme_Unauthorized_Unauthorized__WEBPACK_IMPORTED_MODULE_15__["default"],
  403: _plone_volto_components_theme_Forbidden_Forbidden__WEBPACK_IMPORTED_MODULE_16__["default"],
  408: _plone_volto_components_theme_RequestTimeout_RequestTimeout__WEBPACK_IMPORTED_MODULE_13__["default"],
  500: _plone_volto_components_theme_Error_ServerError__WEBPACK_IMPORTED_MODULE_17__["default"],
  ECONNREFUSED: _plone_volto_components_theme_ConnectionRefused_ConnectionRefused__WEBPACK_IMPORTED_MODULE_11__["default"],
  corsError: _plone_volto_components_theme_CorsError_CorsError__WEBPACK_IMPORTED_MODULE_12__["default"]
};
const layoutViewsNamesMapping = {
  album_view: 'Album view',
  event_listing: 'Event listing',
  full_view: 'All content',
  listing_view: 'Listing view',
  summary_view: 'Summary view',
  tabular_view: 'Tabular view',
  layout_view: 'Mosaic layout',
  document_view: 'Document view',
  folder_listing: 'Folder listing',
  newsitem_view: 'News item view',
  link_redirect_view: 'Link redirect view',
  file_view: 'File view',
  image_view: 'Image view',
  event_view: 'Event view',
  view: 'Default view',
  default: 'Default view'
};
function installDefaultViews(config) {
  config.views.layoutViews = layoutViews;
  config.views.contentTypesViews = contentTypesViews;
  config.views.defaultView = defaultView;
  config.views.errorViews = errorViews;
  config.views.layoutViewsNamesMapping = layoutViewsNamesMapping;
  return config;
}

/***/ },

/***/ "./src/routes.js"
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _plone_volto_routes__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _plone_volto_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/routes */ "./node_modules/@plone/volto/src/routes.js");


/***/ }

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ __webpack_require__.h = () => ("cd8d7a537352c178d6b9");
/******/ 
/******/ }
;
//# sourceMappingURL=server.54621fc9754d8ce87ec3.hot-update.js.map