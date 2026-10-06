exports.ids = ["Contents"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/icons/checkbox-checked.svg"
/*!******************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/checkbox-checked.svg ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/checkbox-checked.2197263d.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/checkbox-indeterminate.svg"
/*!************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/checkbox-indeterminate.svg ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/checkbox-indeterminate.a9e250a1.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/checkbox-unchecked.svg"
/*!********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/checkbox-unchecked.svg ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/checkbox-unchecked.fca312f6.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/configuration-app.svg"
/*!*******************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/configuration-app.svg ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/configuration-app.9c74f587.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/copy.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/copy.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/copy.8e592807.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/cut.svg"
/*!*****************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/cut.svg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cut.bb8862ff.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/drag.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/drag.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/drag.c428b057.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/move-down.svg"
/*!***********************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/move-down.svg ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/move-down.7706c949.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/move-up.svg"
/*!*********************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/move-up.svg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/move-up.72a42e34.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/paste.svg"
/*!*******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/paste.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/paste.4a1fddf6.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/properties.svg"
/*!************************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/properties.svg ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/properties.320f5ea4.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/rename.svg"
/*!********************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/rename.svg ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rename.91ea7d36.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/semaphore.svg"
/*!***********************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/semaphore.svg ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/semaphore.44d1a2ac.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/tag.svg"
/*!*****************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/tag.svg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tag.36bab3e8.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/actions/clipboard/clipboard.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/actions/clipboard/clipboard.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/Contents.jsx"
/*!*******************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/Contents.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __test__: () => (/* binding */ __test__),
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/indexOf */ "lodash/indexOf");
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_indexOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/mapValues */ "lodash/mapValues");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/pull */ "lodash/pull");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-move */ "lodash-move");
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_move__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/helpers/AsyncConnect */ "./node_modules/@plone/volto/src/helpers/AsyncConnect/index.js");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/actions/search/search */ "./node_modules/@plone/volto/src/actions/search/search.js");
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/actions/clipboard/clipboard */ "./node_modules/@plone/volto/src/actions/clipboard/clipboard.js");
/* harmony import */ var _plone_volto_actions_actions_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @plone/volto/actions/actions/actions */ "./node_modules/@plone/volto/src/actions/actions/actions.js");
/* harmony import */ var _plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @plone/volto/constants/Indexes */ "./node_modules/@plone/volto/src/constants/Indexes.js");
/* harmony import */ var _plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @plone/volto/components/theme/Pagination/Pagination */ "./node_modules/@plone/volto/src/components/theme/Pagination/Pagination.jsx");
/* harmony import */ var _plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @plone/volto/components/theme/Popup/Popup */ "./node_modules/@plone/volto/src/components/theme/Popup/Popup.jsx");
/* harmony import */ var _plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @plone/volto/components/manage/Toolbar/Toolbar */ "./node_modules/@plone/volto/src/components/manage/Toolbar/Toolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_theme_Unauthorized_Unauthorized__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @plone/volto/components/theme/Unauthorized/Unauthorized */ "./node_modules/@plone/volto/src/components/theme/Unauthorized/Unauthorized.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsBreadcrumbs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsBreadcrumbs */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbs.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsIndexHeader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsIndexHeader */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsIndexHeader.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsItem */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsItem.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @plone/volto/components/manage/Contents */ "./node_modules/@plone/volto/src/components/manage/Contents/index.tsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsUploadModal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsUploadModal */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsUploadModal.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsDeleteModal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsDeleteModal */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsDeleteModal.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsWorkflowModal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsWorkflowModal */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsWorkflowModal.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsTagsModal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsTagsModal */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsTagsModal.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsPropertiesModal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsPropertiesModal */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsPropertiesModal.jsx");
/* harmony import */ var _plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @plone/volto/helpers/Helmet/Helmet */ "./node_modules/@plone/volto/src/helpers/Helmet/Helmet.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @plone/volto/icons/back.svg */ "./node_modules/@plone/volto/src/icons/back.svg");
/* harmony import */ var _plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @plone/volto/icons/cut.svg */ "./node_modules/@plone/volto/src/icons/cut.svg");
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @plone/volto/icons/copy.svg */ "./node_modules/@plone/volto/src/icons/copy.svg");
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _plone_volto_icons_tag_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @plone/volto/icons/tag.svg */ "./node_modules/@plone/volto/src/icons/tag.svg");
/* harmony import */ var _plone_volto_icons_tag_svg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_tag_svg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _plone_volto_icons_rename_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @plone/volto/icons/rename.svg */ "./node_modules/@plone/volto/src/icons/rename.svg");
/* harmony import */ var _plone_volto_icons_rename_svg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_rename_svg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _plone_volto_icons_semaphore_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @plone/volto/icons/semaphore.svg */ "./node_modules/@plone/volto/src/icons/semaphore.svg");
/* harmony import */ var _plone_volto_icons_semaphore_svg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_semaphore_svg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @plone/volto/icons/upload.svg */ "./node_modules/@plone/volto/src/icons/upload.svg");
/* harmony import */ var _plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _plone_volto_icons_properties_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @plone/volto/icons/properties.svg */ "./node_modules/@plone/volto/src/icons/properties.svg");
/* harmony import */ var _plone_volto_icons_properties_svg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_properties_svg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @plone/volto/icons/paste.svg */ "./node_modules/@plone/volto/src/icons/paste.svg");
/* harmony import */ var _plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _plone_volto_icons_zoom_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @plone/volto/icons/zoom.svg */ "./node_modules/@plone/volto/src/icons/zoom.svg");
/* harmony import */ var _plone_volto_icons_zoom_svg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_zoom_svg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @plone/volto/icons/checkbox-unchecked.svg */ "./node_modules/@plone/volto/src/icons/checkbox-unchecked.svg");
/* harmony import */ var _plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @plone/volto/icons/checkbox-checked.svg */ "./node_modules/@plone/volto/src/icons/checkbox-checked.svg");
/* harmony import */ var _plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _plone_volto_icons_checkbox_indeterminate_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @plone/volto/icons/checkbox-indeterminate.svg */ "./node_modules/@plone/volto/src/icons/checkbox-indeterminate.svg");
/* harmony import */ var _plone_volto_icons_checkbox_indeterminate_svg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_checkbox_indeterminate_svg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _plone_volto_icons_configuration_app_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @plone/volto/icons/configuration-app.svg */ "./node_modules/@plone/volto/src/icons/configuration-app.svg");
/* harmony import */ var _plone_volto_icons_configuration_app_svg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_configuration_app_svg__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _plone_volto_icons_sort_down_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @plone/volto/icons/sort-down.svg */ "./node_modules/@plone/volto/src/icons/sort-down.svg");
/* harmony import */ var _plone_volto_icons_sort_down_svg__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_sort_down_svg__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _plone_volto_icons_sort_up_svg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @plone/volto/icons/sort-up.svg */ "./node_modules/@plone/volto/src/icons/sort-up.svg");
/* harmony import */ var _plone_volto_icons_sort_up_svg__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_sort_up_svg__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @plone/volto/icons/down-key.svg */ "./node_modules/@plone/volto/src/icons/down-key.svg");
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @plone/volto/icons/more.svg */ "./node_modules/@plone/volto/src/icons/more.svg");
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _DropZoneContent__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./DropZoneContent */ "./node_modules/@plone/volto/src/components/manage/Contents/DropZoneContent.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\Contents.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Contents component.
 * @module components/manage/Contents/Contents
 */

;






























































const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__.defineMessages)({
  back: {
    id: 'Back',
    defaultMessage: 'Back'
  },
  contents: {
    id: 'Contents',
    defaultMessage: 'Contents'
  },
  copy: {
    id: 'Copy',
    defaultMessage: 'Copy'
  },
  cut: {
    id: 'Cut',
    defaultMessage: 'Cut'
  },
  error: {
    id: "You can't paste this content here",
    defaultMessage: "You can't paste this content here"
  },
  delete: {
    id: 'Delete',
    defaultMessage: 'Delete'
  },
  deleteError: {
    id: 'The item could not be deleted.',
    defaultMessage: 'The item could not be deleted.'
  },
  loading: {
    id: 'loading',
    defaultMessage: 'Loading'
  },
  home: {
    id: 'Home',
    defaultMessage: 'Home'
  },
  filter: {
    id: 'Filter…',
    defaultMessage: 'Filter…'
  },
  messageCopied: {
    id: 'Item(s) copied.',
    defaultMessage: 'Item(s) copied.'
  },
  messageCut: {
    id: 'Item(s) cut.',
    defaultMessage: 'Item(s) cut.'
  },
  messageUpdate: {
    id: 'Item(s) has been updated.',
    defaultMessage: 'Item(s) has been updated.'
  },
  messageReorder: {
    id: 'Item successfully moved.',
    defaultMessage: 'Item successfully moved.'
  },
  messagePasted: {
    id: 'Item(s) pasted.',
    defaultMessage: 'Item(s) pasted.'
  },
  messageWorkflowUpdate: {
    id: 'Item(s) state has been updated.',
    defaultMessage: 'Item(s) state has been updated.'
  },
  paste: {
    id: 'Paste',
    defaultMessage: 'Paste'
  },
  properties: {
    id: 'Properties',
    defaultMessage: 'Properties'
  },
  rearrangeBy: {
    id: 'Rearrange items by…',
    defaultMessage: 'Rearrange items by…'
  },
  rename: {
    id: 'Rename',
    defaultMessage: 'Rename'
  },
  select: {
    id: 'Select…',
    defaultMessage: 'Select…'
  },
  selected: {
    id: '{count} selected',
    defaultMessage: '{count} selected'
  },
  selectColumns: {
    id: 'Select columns to show',
    defaultMessage: 'Select columns to show'
  },
  sort: {
    id: 'sort',
    defaultMessage: 'sort'
  },
  state: {
    id: 'State',
    defaultMessage: 'State'
  },
  tags: {
    id: 'Tags',
    defaultMessage: 'Tags'
  },
  upload: {
    id: 'Upload',
    defaultMessage: 'Upload'
  },
  success: {
    id: 'Success',
    defaultMessage: 'Success'
  },
  publicationDate: {
    id: 'Publication date',
    defaultMessage: 'Publication date'
  },
  createdOn: {
    id: 'Created on',
    defaultMessage: 'Created on'
  },
  expirationDate: {
    id: 'Expiration date',
    defaultMessage: 'Expiration date'
  },
  id: {
    id: 'ID',
    defaultMessage: 'ID'
  },
  uid: {
    id: 'UID',
    defaultMessage: 'UID'
  },
  reviewState: {
    id: 'Review state',
    defaultMessage: 'Review state'
  },
  folder: {
    id: 'Folder',
    defaultMessage: 'Folder'
  },
  excludedFromNavigation: {
    id: 'Excluded from navigation',
    defaultMessage: 'Excluded from navigation'
  },
  objectSize: {
    id: 'Object Size',
    defaultMessage: 'Object Size'
  },
  lastCommentedDate: {
    id: 'Last comment date',
    defaultMessage: 'Last comment date'
  },
  totalComments: {
    id: 'Total comments',
    defaultMessage: 'Total comments'
  },
  creator: {
    id: 'Creator',
    defaultMessage: 'Creator'
  },
  endDate: {
    id: 'End Date',
    defaultMessage: 'End Date'
  },
  startDate: {
    id: 'Start Date',
    defaultMessage: 'Start Date'
  },
  all: {
    id: 'All',
    defaultMessage: 'All'
  },
  resultCount: {
    id: 'resultCount',
    defaultMessage: 'Result count'
  }
});

/**
 * Contents class.
 * @class Contents
 * @extends Component
 */
class Contents extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs ContentsComponent
   */
  constructor(props) {
    var _this$props$sort, _this$props$sort2;
    super(props);
    this.onDeselect = this.onDeselect.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
    this.onSelectIndex = this.onSelectIndex.bind(this);
    this.onSelectNone = this.onSelectNone.bind(this);
    this.onDeleteOk = this.onDeleteOk.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
    this.onUploadOk = this.onUploadOk.bind(this);
    this.onUploadCancel = this.onUploadCancel.bind(this);
    this.onRenameOk = this.onRenameOk.bind(this);
    this.onRenameCancel = this.onRenameCancel.bind(this);
    this.onTagsOk = this.onTagsOk.bind(this);
    this.onTagsCancel = this.onTagsCancel.bind(this);
    this.onPropertiesOk = this.onPropertiesOk.bind(this);
    this.onPropertiesCancel = this.onPropertiesCancel.bind(this);
    this.onWorkflowOk = this.onWorkflowOk.bind(this);
    this.onWorkflowCancel = this.onWorkflowCancel.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangePageSize = this.onChangePageSize.bind(this);
    this.onOrderIndex = this.onOrderIndex.bind(this);
    this.onOrderItem = this.onOrderItem.bind(this);
    this.onSortItems = this.onSortItems.bind(this);
    this.onMoveToTop = this.onMoveToTop.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onMoveToBottom = this.onMoveToBottom.bind(this);
    this.cut = this.cut.bind(this);
    this.copy = this.copy.bind(this);
    this.delete = this.delete.bind(this);
    this.upload = this.upload.bind(this);
    this.rename = this.rename.bind(this);
    this.tags = this.tags.bind(this);
    this.properties = this.properties.bind(this);
    this.workflow = this.workflow.bind(this);
    this.paste = this.paste.bind(this);
    this.fetchContents = this.fetchContents.bind(this);
    this.orderTimeout = null;
    this.state = {
      selected: [],
      showDelete: false,
      showUpload: false,
      showRename: false,
      showTags: false,
      showProperties: false,
      showWorkflow: false,
      itemsToDelete: [],
      items: this.props.items,
      filter: '',
      currentPage: 0,
      pageSize: 50,
      index: this.props.index || {
        order: lodash_keys__WEBPACK_IMPORTED_MODULE_11___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"]),
        values: lodash_mapValues__WEBPACK_IMPORTED_MODULE_13___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"], (value, key) => _objectSpread(_objectSpread({}, value), {}, {
          selected: lodash_indexOf__WEBPACK_IMPORTED_MODULE_10___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__.defaultIndexes, key) !== -1
        })),
        selectedCount: _plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__.defaultIndexes.length + 1
      },
      sort_on: ((_this$props$sort = this.props.sort) === null || _this$props$sort === void 0 ? void 0 : _this$props$sort.on) || 'getObjPositionInParent',
      sort_order: ((_this$props$sort2 = this.props.sort) === null || _this$props$sort2 === void 0 ? void 0 : _this$props$sort2.order) || 'ascending',
      isClient: false
    };
    this.filterTimeout = null;
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.fetchContents();
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
    if (this.props.clipboardRequest.loading && nextProps.clipboardRequest.loaded || this.props.deleteRequest.loading && nextProps.deleteRequest.loaded || this.props.updateRequest.loading && nextProps.updateRequest.loaded) {
      this.fetchContents(nextProps.pathname);
    }
    if (this.props.updateRequest.loading && nextProps.updateRequest.loaded) {
      this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.messageUpdate),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 9
        }
      }));
    }
    if (this.props.pathname !== nextProps.pathname) {
      // Refetching content to sync the current object in the toolbar
      this.props.getContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(nextProps.pathname));
      this.setState({
        currentPage: 0,
        selected: []
      }, () => this.setState({
        filter: ''
      }, () => this.fetchContents(nextProps.pathname)));
    }
    if (this.props.searchRequest.loading && nextProps.searchRequest.loaded) {
      this.setState({
        items: nextProps.items
      });
    }
    if (this.props.clipboardRequest.loading && nextProps.clipboardRequest.error) {
      var _nextProps$clipboardR, _nextProps$clipboardR2, _nextProps$clipboardR3;
      const msgBody = ((_nextProps$clipboardR = nextProps.clipboardRequest.error) === null || _nextProps$clipboardR === void 0 ? void 0 : (_nextProps$clipboardR2 = _nextProps$clipboardR.response) === null || _nextProps$clipboardR2 === void 0 ? void 0 : (_nextProps$clipboardR3 = _nextProps$clipboardR2.body) === null || _nextProps$clipboardR3 === void 0 ? void 0 : _nextProps$clipboardR3.message) || this.props.intl.formatMessage(messages.error);
      this.props.toastify.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
        error: true,
        title: this.props.intl.formatMessage(messages.error),
        content: msgBody,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 9
        }
      }));
    }
    if (this.props.clipboardRequest.loading && nextProps.clipboardRequest.loaded) {
      this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.messagePasted),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 9
        }
      }));
    }
    if (this.props.deleteRequest.loading && nextProps.deleteRequest.error) {
      var _nextProps$deleteRequ, _nextProps$deleteRequ2, _nextProps$deleteRequ3;
      const deleteErrorMessageTitle = this.props.intl.formatMessage(messages.deleteError);
      const deleteErrorMessageContent = ((_nextProps$deleteRequ = nextProps.deleteRequest.error) === null || _nextProps$deleteRequ === void 0 ? void 0 : (_nextProps$deleteRequ2 = _nextProps$deleteRequ.response) === null || _nextProps$deleteRequ2 === void 0 ? void 0 : (_nextProps$deleteRequ3 = _nextProps$deleteRequ2.body) === null || _nextProps$deleteRequ3 === void 0 ? void 0 : _nextProps$deleteRequ3.message) || deleteErrorMessageTitle;
      this.props.toastify.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
        error: true,
        title: deleteErrorMessageTitle,
        content: deleteErrorMessageContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 9
        }
      }));
    }
    if (this.props.orderRequest.loading && nextProps.orderRequest.loaded) {
      this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
        success: true,
        title: this.props.intl.formatMessage(messages.success),
        content: this.props.intl.formatMessage(messages.messageReorder),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 9
        }
      }));
    }
  }

  /**
   * On deselect handler
   * @method onDeselect
   * @param {object} event Event object
   * @param {string} value Value
   * @returns {undefined}
   */
  onDeselect(event, {
    value
  }) {
    this.setState({
      selected: lodash_pull__WEBPACK_IMPORTED_MODULE_14___default()(this.state.selected, value)
    });
  }

  /**
   * On select handler
   * @method onSelect
   * @param {object} event Event object
   * @returns {undefined}
   */
  onSelect(event, id) {
    if (lodash_indexOf__WEBPACK_IMPORTED_MODULE_10___default()(this.state.selected, id) === -1) {
      this.setState({
        selected: lodash_concat__WEBPACK_IMPORTED_MODULE_7___default()(this.state.selected, id)
      });
    } else {
      this.setState({
        selected: lodash_pull__WEBPACK_IMPORTED_MODULE_14___default()(this.state.selected, id)
      });
    }
  }

  /**
   * On select all handler
   * @method onSelectAll
   * @returns {undefined}
   */
  onSelectAll() {
    this.setState({
      selected: lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.items, item => item['@id'])
    });
  }

  /**
   * On select none handler
   * @method onSelectNone
   * @returns {undefined}
   */
  onSelectNone() {
    this.setState({
      selected: []
    });
  }

  /**
   * On select index
   * @method onSelectIndex
   * @param {object} event Event object.
   * @param {string} value Index value.
   * @returns {undefined}
   */
  onSelectIndex(event, {
    value
  }) {
    let newIndex = _objectSpread(_objectSpread({}, this.state.index), {}, {
      selectedCount: this.state.index.selectedCount + (this.state.index.values[value].selected ? -1 : 1),
      values: lodash_mapValues__WEBPACK_IMPORTED_MODULE_13___default()(this.state.index.values, (indexValue, indexKey) => _objectSpread(_objectSpread({}, indexValue), {}, {
        selected: indexKey === value ? !indexValue.selected : indexValue.selected
      }))
    });
    this.setState({
      index: newIndex
    });
    this.props.updateColumnsContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), newIndex);
  }

  /**
   * On change filter
   * @method onChangeFilter
   * @param {object} event Event object.
   * @param {string} value Filter value.
   * @returns {undefined}
   */
  onChangeFilter(event, {
    value
  }) {
    const self = this;
    clearTimeout(self.filterTimeout);
    this.setState({
      filter: value
    }, () => {
      self.filterTimeout = setTimeout(() => {
        self.fetchContents();
      }, 200);
    });
  }

  /**
   * On change selected values (Filter)
   * @method onChangeSelected
   * @param {object} event Event object.
   * @param {string} value Filter value.
   * @returns {undefined}
   */
  onChangeSelected(event, {
    value
  }) {
    event.stopPropagation();
    const {
      items,
      selected
    } = this.state;
    const filteredItems = lodash_filter__WEBPACK_IMPORTED_MODULE_8___default()(selected, selectedItem => lodash_find__WEBPACK_IMPORTED_MODULE_9___default()(items, item => item['@id'] === selectedItem).title.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      filteredItems,
      selectedMenuFilter: value
    });
  }

  /**
   * On change page
   * @method onChangePage
   * @param {object} event Event object.
   * @param {string} value Page value.
   * @returns {undefined}
   */
  onChangePage(event, {
    value
  }) {
    this.setState({
      currentPage: value,
      selected: []
    }, () => this.fetchContents());
  }

  /**
   * On change page size
   * @method onChangePageSize
   * @param {object} event Event object.
   * @param {string} value Page size value.
   * @returns {undefined}
   */
  onChangePageSize(event, {
    value
  }) {
    this.setState({
      pageSize: value,
      currentPage: 0,
      selected: []
    }, () => this.fetchContents());
  }

  /**
   * On order index
   * @method onOrderIndex
   * @param {number} index Index
   * @param {number} delta Delta
   * @returns {undefined}
   */
  onOrderIndex(index, delta) {
    this.setState({
      index: _objectSpread(_objectSpread({}, this.state.index), {}, {
        order: lodash_move__WEBPACK_IMPORTED_MODULE_15___default()(this.state.index.order, index, index + delta)
      })
    });
    this.props.updateColumnsContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), this.state.index);
  }

  /**
   * On order item
   * @method onOrderItem
   * @param {string} id Item id
   * @param {number} itemIndex Item index
   * @param {number} delta Delta
   * @returns {undefined}
   */
  onOrderItem(id, itemIndex, delta, backend) {
    if (backend) {
      this.props.orderContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), id.replace(/^.*\//, ''), delta);
    } else {
      this.setState(prevState => ({
        items: lodash_move__WEBPACK_IMPORTED_MODULE_15___default()(prevState.items, itemIndex, itemIndex + delta)
      }));
    }
  }

  /**
   * On sort items
   * @method onSortItems
   * @param {object} event Event object
   * @param {string} value Item index
   * @returns {undefined}
   */
  onSortItems(event, {
    value
  }) {
    const values = value.split('|');
    this.setState({
      sort_on: values[0],
      sort_order: values[1],
      selected: []
    });
    this.props.sortContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), values[0], values[1]);
  }

  /**
   * On move to top
   * @method onMoveToTop
   * @param {object} event Event object
   * @param {string} value Item index
   * @returns {undefined}
   */
  onMoveToTop(event, {
    value
  }) {
    const id = this.state.items[value]['@id'];
    this.props.orderContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), id.replace(/^.*\//, ''), 'top').then(() => {
      this.setState({
        currentPage: 0,
        selected: []
      }, () => this.fetchContents());
    });
  }

  /**
   * On move to bottom
   * @method onMoveToBottom
   * @param {object} event Event object
   * @param {string} value Item index
   * @returns {undefined}
   */
  onMoveToBottom(event, {
    value
  }) {
    const id = this.state.items[value]['@id'];
    this.props.orderContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname), id.replace(/^.*\//, ''), 'bottom').then(() => {
      this.setState({
        currentPage: 0,
        selected: []
      }, () => this.fetchContents());
    });
  }

  /**
   * On delete ok
   * @method onDeleteOk
   * @returns {undefined}
   */
  onDeleteOk() {
    this.props.deleteContent(this.state.itemsToDelete);
    this.setState({
      showDelete: false,
      itemsToDelete: [],
      selected: []
    });
  }

  /**
   * On delete cancel
   * @method onDeleteCancel
   * @returns {undefined}
   */
  onDeleteCancel() {
    this.setState({
      showDelete: false,
      itemsToDelete: []
    });
  }

  /**
   * On upload ok
   * @method onUploadOk
   * @returns {undefined}
   */
  onUploadOk() {
    this.fetchContents();
    this.setState({
      showUpload: false
    });
  }

  /**
   * On upload cancel
   * @method onUploadCancel
   * @returns {undefined}
   */
  onUploadCancel() {
    this.setState({
      showUpload: false
    });
  }

  /**
   * On rename ok
   * @method onRenameOk
   * @returns {undefined}
   */
  onRenameOk() {
    this.setState({
      showRename: false,
      selected: []
    });
  }

  /**
   * On rename cancel
   * @method onRenameCancel
   * @returns {undefined}
   */
  onRenameCancel() {
    this.setState({
      showRename: false
    });
  }

  /**
   * On tags ok
   * @method onTagsOk
   * @returns {undefined}
   */
  onTagsOk() {
    this.setState({
      showTags: false,
      selected: []
    });
  }

  /**
   * On tags cancel
   * @method onTagsCancel
   * @returns {undefined}
   */
  onTagsCancel() {
    this.setState({
      showTags: false
    });
  }

  /**
   * On properties ok
   * @method onPropertiesOk
   * @returns {undefined}
   */
  onPropertiesOk() {
    this.setState({
      showProperties: false,
      selected: []
    });
  }

  /**
   * On properties cancel
   * @method onPropertiesCancel
   * @returns {undefined}
   */
  onPropertiesCancel() {
    this.setState({
      showProperties: false
    });
  }

  /**
   * On workflow ok
   * @method onWorkflowOk
   * @returns {undefined}
   */
  onWorkflowOk() {
    this.fetchContents();
    this.setState({
      showWorkflow: false,
      selected: []
    });
    this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
      success: true,
      title: this.props.intl.formatMessage(messages.success),
      content: this.props.intl.formatMessage(messages.messageWorkflowUpdate),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936,
        columnNumber: 7
      }
    }));
  }

  /**
   * On workflow cancel
   * @method onWorkflowCancel
   * @returns {undefined}
   */
  onWorkflowCancel() {
    this.setState({
      showWorkflow: false
    });
  }

  /**
   * Get field by id
   * @method getFieldById
   * @param {string} id Id of object
   * @param {string} field Field of object
   * @returns {string} Field of object
   */
  getFieldById(id, field) {
    const item = lodash_find__WEBPACK_IMPORTED_MODULE_9___default()(this.state.items, {
      '@id': id
    });
    return item ? item[field] : '';
  }

  /**
   * Fetch contents handler
   * @method fetchContents
   * @param {string} pathname Pathname to fetch contents.
   * @returns {undefined}
   */
  fetchContents(pathname) {
    if (this.state.pageSize === this.props.intl.formatMessage(messages.all)) {
      //'All'
      this.props.searchContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(pathname || this.props.pathname), _objectSpread({
        'path.depth': 1,
        sort_on: this.state.sort_on,
        sort_order: this.state.sort_order,
        metadata_fields: '_all',
        b_size: 100000000,
        show_inactive: true
      }, this.state.filter && {
        SearchableText: `${this.state.filter}*`
      }));
    } else {
      this.props.searchContent((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(pathname || this.props.pathname), _objectSpread(_objectSpread({
        'path.depth': 1,
        sort_on: this.state.sort_on,
        sort_order: this.state.sort_order,
        metadata_fields: '_all'
      }, this.state.filter && {
        SearchableText: `${this.state.filter}*`
      }), {}, {
        b_size: this.state.pageSize,
        b_start: this.state.currentPage * this.state.pageSize,
        show_inactive: true
      }));
    }
  }

  /**
   * Cut handler
   * @method cut
   * @param {Object} event Event object.
   * @param {string} value Value of the event.
   * @returns {undefined}
   */
  cut(event, {
    value
  }) {
    this.props.cut(value ? [value] : this.state.selected);
    this.onSelectNone();
    this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
      success: true,
      title: this.props.intl.formatMessage(messages.success),
      content: this.props.intl.formatMessage(messages.messageCut),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 7
      }
    }));
  }

  /**
   * Copy handler
   * @method copy
   * @param {Object} event Event object.
   * @param {string} value Value of the event.
   * @returns {undefined}
   */
  copy(event, {
    value
  }) {
    this.props.copy(value ? [value] : this.state.selected);
    this.onSelectNone();
    this.props.toastify.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_27__["default"], {
      success: true,
      title: this.props.intl.formatMessage(messages.success),
      content: this.props.intl.formatMessage(messages.messageCopied),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1029,
        columnNumber: 7
      }
    }));
  }

  /**
   * Delete handler
   * @method delete
   * @param {Object} event Event object.
   * @param {string} value Value of the event.
   * @returns {undefined}
   */
  delete(event, {
    value
  }) {
    this.setState({
      showDelete: true,
      itemsToDelete: value ? [value] : this.state.selected
    });
  }

  /**
   * Upload handler
   * @method upload
   * @returns {undefined}
   */
  upload() {
    this.setState({
      showUpload: true
    });
  }

  /**
   * Rename handler
   * @method rename
   * @returns {undefined}
   */
  rename() {
    this.setState({
      showRename: true
    });
  }

  /**
   * Tags handler
   * @method tags
   * @returns {undefined}
   */
  tags() {
    this.setState({
      showTags: true
    });
  }

  /**
   * Properties handler
   * @method properties
   * @returns {undefined}
   */
  properties() {
    this.setState({
      showProperties: true
    });
  }

  /**
   * Workflow handler
   * @method workflow
   * @returns {undefined}
   */
  workflow() {
    this.setState({
      showWorkflow: true
    });
  }

  /**
   * Paste handler
   * @method paste
   * @returns {undefined}
   */
  paste() {
    if (this.props.action === 'copy') {
      this.props.copyContent(this.props.source, (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname));
    }
    if (this.props.action === 'cut') {
      this.props.moveContent(this.props.source, (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname));
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _this$props$clipboard, _this$props$clipboard2, _this$props$deleteReq, _this$props$deleteReq2, _this$props$updateReq, _this$props$updateReq2, _this$props$orderRequ, _this$props$orderRequ2, _this$props$searchReq, _this$props$searchReq2, _this$props$objectAct;
    const selected = this.state.selected.length > 0;
    const filteredItems = this.state.filteredItems || this.state.selected;
    const path = (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname);
    const folderContentsAction = lodash_find__WEBPACK_IMPORTED_MODULE_9___default()(this.props.objectActions, {
      id: 'folderContents'
    });
    const loading = ((_this$props$clipboard = this.props.clipboardRequest) === null || _this$props$clipboard === void 0 ? void 0 : _this$props$clipboard.loading) && !((_this$props$clipboard2 = this.props.clipboardRequest) !== null && _this$props$clipboard2 !== void 0 && _this$props$clipboard2.error) || ((_this$props$deleteReq = this.props.deleteRequest) === null || _this$props$deleteReq === void 0 ? void 0 : _this$props$deleteReq.loading) && !((_this$props$deleteReq2 = this.props.deleteRequest) !== null && _this$props$deleteReq2 !== void 0 && _this$props$deleteReq2.error) || ((_this$props$updateReq = this.props.updateRequest) === null || _this$props$updateReq === void 0 ? void 0 : _this$props$updateReq.loading) && !((_this$props$updateReq2 = this.props.updateRequest) !== null && _this$props$updateReq2 !== void 0 && _this$props$updateReq2.error) || ((_this$props$orderRequ = this.props.orderRequest) === null || _this$props$orderRequ === void 0 ? void 0 : _this$props$orderRequ.loading) && !((_this$props$orderRequ2 = this.props.orderRequest) !== null && _this$props$orderRequ2 !== void 0 && _this$props$orderRequ2.error) || ((_this$props$searchReq = this.props.searchRequest) === null || _this$props$searchReq === void 0 ? void 0 : _this$props$searchReq.loading) && !((_this$props$searchReq2 = this.props.searchRequest) !== null && _this$props$searchReq2 !== void 0 && _this$props$searchReq2.error);
    const Container = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_41__["default"].getComponent({
      name: 'Container'
    }).component || semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container;
    return this.props.token && ((_this$props$objectAct = this.props.objectActions) === null || _this$props$objectAct === void 0 ? void 0 : _this$props$objectAct.length) > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, folderContentsAction ? __jsx(Container, {
      id: "page-contents",
      className: "folder-contents",
      "aria-live": "polite",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dimmer.Dimmable, {
      as: "div",
      blurring: true,
      dimmed: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1157,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dimmer, {
      active: loading,
      inverted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1158,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Loader, {
      indeterminate: true,
      size: "massive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1159,
        columnNumber: 17
      }
    }, this.props.intl.formatMessage(messages.loading))), __jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_39__["default"], {
      title: this.props.intl.formatMessage(messages.contents),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1164,
        columnNumber: 15
      }
    }), __jsx(_DropZoneContent__WEBPACK_IMPORTED_MODULE_62__["default"], {
      onOk: this.onUploadOk,
      onCancel: this.onUploadCancel,
      pathname: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1167,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1172,
        columnNumber: 17
      }
    }, __jsx("article", {
      id: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1173,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components_manage_Contents_ContentsDeleteModal__WEBPACK_IMPORTED_MODULE_35__["default"], {
      open: this.state.showDelete,
      onCancel: this.onDeleteCancel,
      onOk: this.onDeleteOk,
      items: this.state.items,
      itemsToDelete: this.state.itemsToDelete,
      hasMultiplePages: Math.ceil(this.props.total / this.state.pageSize) > 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1174,
        columnNumber: 21
      }
    }), __jsx(_plone_volto_components_manage_Contents_ContentsUploadModal__WEBPACK_IMPORTED_MODULE_34__["default"], {
      open: this.state.showUpload,
      onCancel: this.onUploadCancel,
      onOk: this.onUploadOk,
      pathname: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(this.props.pathname),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1184,
        columnNumber: 21
      }
    }), __jsx(_plone_volto_components_manage_Contents__WEBPACK_IMPORTED_MODULE_33__.ContentsRenameModal, {
      open: this.state.showRename,
      onCancel: this.onRenameCancel,
      onOk: this.onRenameOk,
      items: lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.selected, item => ({
        url: item,
        title: this.getFieldById(item, 'title'),
        id: this.getFieldById(item, 'id')
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1190,
        columnNumber: 21
      }
    }), __jsx(_plone_volto_components_manage_Contents_ContentsTagsModal__WEBPACK_IMPORTED_MODULE_37__["default"], {
      open: this.state.showTags,
      onCancel: this.onTagsCancel,
      onOk: this.onTagsOk,
      items: lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.selected, item => ({
        url: item,
        subjects: this.getFieldById(item, 'Subject')
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1200,
        columnNumber: 21
      }
    }), __jsx(_plone_volto_components_manage_Contents_ContentsPropertiesModal__WEBPACK_IMPORTED_MODULE_38__["default"], {
      open: this.state.showProperties,
      onCancel: this.onPropertiesCancel,
      onOk: this.onPropertiesOk,
      items: this.state.selected,
      values: lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.selected, id => lodash_find__WEBPACK_IMPORTED_MODULE_9___default()(this.state.items, {
        '@id': id
      })).filter(item => item),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1209,
        columnNumber: 21
      }
    }), this.state.showWorkflow && __jsx(_plone_volto_components_manage_Contents_ContentsWorkflowModal__WEBPACK_IMPORTED_MODULE_36__["default"], {
      open: this.state.showWorkflow,
      onCancel: this.onWorkflowCancel,
      onOk: this.onWorkflowOk,
      items: this.state.selected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1219,
        columnNumber: 23
      }
    }), __jsx("section", {
      id: "content-core",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1226,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1227,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
      secondary: true,
      attached: true,
      className: "top-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1228,
        columnNumber: 25
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Menu, {
      className: "top-menu-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1229,
        columnNumber: 27
      }
    }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.upload,
        className: "upload",
        "aria-controls": "contents-table-wrapper",
        "aria-label": this.props.intl.formatMessage(messages.filter),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1232,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_49___default()),
        color: "#007eb1",
        size: "24px",
        className: "upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1242,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.upload),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1230,
        columnNumber: 29
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Menu, {
      className: "top-menu-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1257,
        columnNumber: 27
      }
    }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.rename,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.rename),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1260,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_rename_svg__WEBPACK_IMPORTED_MODULE_47___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "rename",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1269,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.rename),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1258,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.workflow,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.state),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1285,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_semaphore_svg__WEBPACK_IMPORTED_MODULE_48___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "semaphore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1294,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.state),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1283,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.tags,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.tags),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1310,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_tag_svg__WEBPACK_IMPORTED_MODULE_46___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "tag",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1319,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.tags),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1308,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.properties,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.properties),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1336,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_properties_svg__WEBPACK_IMPORTED_MODULE_50___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "properties",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1345,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.properties),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1334,
        columnNumber: 29
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Menu, {
      className: "top-menu-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1360,
        columnNumber: 27
      }
    }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.cut,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.cut),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1363,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_43___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "cut",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1372,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.cut),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1361,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.copy,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.copy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1388,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_45___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "copy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1397,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.copy),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1386,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.paste,
        disabled: !this.props.action,
        "aria-label": this.props.intl.formatMessage(messages.paste),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1414,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_51___default()),
        color: selected ? '#826a6a' : 'grey',
        size: "24px",
        className: "paste",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1423,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.paste),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1412,
        columnNumber: 29
      }
    }), __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
        icon: true,
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button,
        onClick: this.delete,
        disabled: !selected,
        "aria-label": this.props.intl.formatMessage(messages.delete),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1440,
          columnNumber: 33
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_44___default()),
        color: selected ? '#e40166' : 'grey',
        size: "24px",
        className: "delete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1449,
          columnNumber: 35
        }
      })),
      position: "top center",
      content: this.props.intl.formatMessage(messages.delete),
      size: "mini",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1438,
        columnNumber: 29
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Menu, {
      position: "right",
      className: "top-menu-searchbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1464,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "ui right aligned category search item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1468,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
      type: "text",
      transparent: true,
      placeholder: this.props.intl.formatMessage(messages.filter),
      size: "small",
      value: this.state.filter,
      onChange: this.onChangeFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1469,
        columnNumber: 31
      }
    }), this.state.filter && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
      className: "icon icon-container",
      onClick: () => {
        this.onChangeFilter('', {
          value: ''
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1480,
        columnNumber: 33
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_61___default()),
      size: "30px",
      color: "#e40166",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1486,
        columnNumber: 35
      }
    })), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_zoom_svg__WEBPACK_IMPORTED_MODULE_52___default()),
      size: "30px",
      color: "#007eb1",
      className: "zoom",
      style: {
        flexShrink: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1493,
        columnNumber: 31
      }
    }), __jsx("div", {
      className: "results",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1500,
        columnNumber: 31
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      secondary: true,
      attached: true,
      className: "contents-breadcrumbs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1504,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components_manage_Contents_ContentsBreadcrumbs__WEBPACK_IMPORTED_MODULE_30__["default"], {
      items: this.props.breadcrumbs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1509,
        columnNumber: 27
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {
      item: true,
      upward: false,
      icon: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_60___default()),
        size: "24px",
        color: "#826a6a",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1514,
          columnNumber: 31
        }
      }),
      className: "right floating selectIndex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1510,
        columnNumber: 27
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Menu, {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1522,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Header, {
      content: this.props.intl.formatMessage(messages.selectColumns),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1523,
        columnNumber: 31
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Menu, {
      scrolling: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1528,
        columnNumber: 31
      }
    }, lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_8___default()(this.state.index.order, index => index !== 'sortable_title'), index => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {
      key: index,
      value: index,
      onClick: this.onSelectIndex,
      className: "iconAlign",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1535,
        columnNumber: 37
      }
    }, this.state.index.values[index].selected ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54___default()),
      size: "24px",
      color: "#007eb1",
      className: this.state.index.values[index].label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1543,
        columnNumber: 41
      }
    }) : __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53___default()),
      className: this.state.index.values[index].label,
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1552,
        columnNumber: 41
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1560,
        columnNumber: 39
      }
    }, ' ', this.props.intl.formatMessage({
      id: this.state.index.values[index].label,
      defaultMessage: this.state.index.values[index].label
    })))))))), __jsx("div", {
      id: "contents-table-wrapper",
      className: "contents-table-wrapper",
      role: "region",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1577,
        columnNumber: 25
      }
    }, __jsx("span", {
      "aria-live": "polite",
      className: "search-feedback",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1582,
        columnNumber: 27
      }
    }, `${this.props.intl.formatMessage(messages.resultCount)}: ${this.props.total || 0}`), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {
      selectable: true,
      compact: true,
      singleLine: true,
      attached: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1591,
        columnNumber: 27
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1592,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1593,
        columnNumber: 31
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1594,
        columnNumber: 33
      }
    }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      menu: true,
      position: "bottom left",
      flowing: true,
      basic: true,
      on: "click",
      popper: {
        className: 'dropdown-popup'
      },
      trigger: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_configuration_app_svg__WEBPACK_IMPORTED_MODULE_56___default()),
        size: "24px",
        color: "#826a6a",
        className: "dropdown-popup-trigger configuration-svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1605,
          columnNumber: 39
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1595,
        columnNumber: 35
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
      vertical: true,
      borderless: true,
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1613,
        columnNumber: 37
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Header, {
      content: this.props.intl.formatMessage(messages.rearrangeBy),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1614,
        columnNumber: 39
      }
    }), lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(['id', 'sortable_title', 'EffectiveDate', 'CreationDate', 'ModificationDate', 'portal_type'], index => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {
      key: index,
      item: true,
      simple: true,
      className: `sort_${index} icon-align`,
      icon: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_59___default()),
        size: "24px",
        className: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1635,
          columnNumber: 47
        }
      }),
      text: this.props.intl.formatMessage({
        id: _plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"][index].label
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1629,
        columnNumber: 43
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Menu, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1647,
        columnNumber: 45
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {
      onClick: this.onSortItems,
      value: `${_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"][index].sort_on}|ascending`,
      className: `sort_${_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"][index].sort_on}_ascending icon-align`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1648,
        columnNumber: 47
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_sort_down_svg__WEBPACK_IMPORTED_MODULE_57___default()),
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1653,
        columnNumber: 49
      }
    }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "Ascending",
      defaultMessage: "Ascending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1657,
        columnNumber: 49
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {
      onClick: this.onSortItems,
      value: `${_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"][index].sort_on}|descending`,
      className: `sort_${_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"][index].sort_on}_descending icon-align`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1662,
        columnNumber: 47
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_sort_up_svg__WEBPACK_IMPORTED_MODULE_58___default()),
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1667,
        columnNumber: 49
      }
    }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "Descending",
      defaultMessage: "Descending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1671,
        columnNumber: 49
      }
    })))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1683,
        columnNumber: 33
      }
    }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_25__["default"], {
      menu: true,
      position: "bottom left",
      flowing: true,
      basic: true,
      on: "click",
      popper: {
        className: 'dropdown-popup'
      },
      trigger: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: this.state.selected.length === 0 ? (_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53___default()) : this.state.selected.length === this.state.items.length ? (_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54___default()) : (_plone_volto_icons_checkbox_indeterminate_svg__WEBPACK_IMPORTED_MODULE_55___default()),
        color: this.state.selected.length > 0 ? '#007eb1' : '#826a6a',
        className: "dropdown-popup-trigger",
        size: "24px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1694,
          columnNumber: 39
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1684,
        columnNumber: 35
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
      vertical: true,
      borderless: true,
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1713,
        columnNumber: 37
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Header, {
      content: this.props.intl.formatMessage(messages.select),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1714,
        columnNumber: 39
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      onClick: this.onSelectAll,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1719,
        columnNumber: 39
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_54___default()),
      color: "#007eb1",
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1720,
        columnNumber: 41
      }
    }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "All",
      defaultMessage: "All",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1725,
        columnNumber: 41
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      onClick: this.onSelectNone,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1730,
        columnNumber: 39
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_53___default()),
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1731,
        columnNumber: 41
      }
    }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "None",
      defaultMessage: "None",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1735,
        columnNumber: 41
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1740,
        columnNumber: 39
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Header, {
      content: this.props.intl.formatMessage(messages.selected, {
        count: this.state.selected.length
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1741,
        columnNumber: 39
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
      icon: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_zoom_svg__WEBPACK_IMPORTED_MODULE_52___default()),
        size: "24px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1751,
          columnNumber: 43
        }
      }),
      iconPosition: "left",
      className: "item search",
      placeholder: this.props.intl.formatMessage(messages.filter),
      value: this.state.selectedMenuFilter || '',
      onChange: this.onChangeSelected,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1749,
        columnNumber: 39
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Menu, {
      scrolling: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1767,
        columnNumber: 39
      }
    }, lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(filteredItems, item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      key: item,
      value: item,
      onClick: this.onDeselect,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1769,
        columnNumber: 43
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
      name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_44___default()),
      color: "#e40166",
      size: "24px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1774,
        columnNumber: 45
      }
    }), ' ', this.getFieldById(item, 'title'))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {
      width: Math.ceil(16 / this.state.index.selectedCount),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1786,
        columnNumber: 33
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "Title",
      defaultMessage: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1791,
        columnNumber: 35
      }
    })), lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.index.order, (index, order) => this.state.index.values[index].selected && __jsx(_plone_volto_components_manage_Contents_ContentsIndexHeader__WEBPACK_IMPORTED_MODULE_31__["default"], {
      key: index,
      width: Math.ceil(16 / this.state.index.selectedCount),
      label: this.state.index.values[index].label,
      order: order,
      onOrderIndex: this.onOrderIndex,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1800,
        columnNumber: 39
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {
      textAlign: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1813,
        columnNumber: 33
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
      id: "Actions",
      defaultMessage: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1814,
        columnNumber: 35
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1821,
        columnNumber: 29
      }
    }, this.state.items.map((item, order) => __jsx(_plone_volto_components_manage_Contents_ContentsItem__WEBPACK_IMPORTED_MODULE_32__["default"], {
      key: item['@id'],
      item: item,
      order: order,
      selected: lodash_indexOf__WEBPACK_IMPORTED_MODULE_10___default()(this.state.selected, item['@id']) !== -1,
      onClick: this.onSelect,
      indexes: lodash_filter__WEBPACK_IMPORTED_MODULE_8___default()(lodash_map__WEBPACK_IMPORTED_MODULE_12___default()(this.state.index.order, index => ({
        id: index,
        type: this.state.index.values[index].type
      })), index => this.state.index.values[index.id].selected),
      onCut: this.cut,
      onCopy: this.copy,
      onDelete: this.delete,
      onOrderItem: this.onOrderItem,
      onMoveToTop: this.onMoveToTop,
      onMoveToBottom: this.onMoveToBottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1823,
        columnNumber: 33
      }
    }))))), __jsx("div", {
      className: "contents-pagination",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1855,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components_theme_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_24__["default"], {
      current: this.state.currentPage,
      total: Math.ceil(this.props.total / this.state.pageSize),
      pageSize: this.state.pageSize,
      pageSizes: [50, this.props.intl.formatMessage(messages.all)],
      onChangePage: this.onChangePage,
      onChangePageSize: this.onChangePageSize,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1856,
        columnNumber: 27
      }
    }))))))), this.state.isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
      pathname: this.props.pathname,
      inner: __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: `${path}`,
        "aria-label": this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1880,
          columnNumber: 23
        }
      }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_28__["default"], {
        name: (_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_42___default()),
        className: "contents circled",
        size: "30px",
        title: this.props.intl.formatMessage(messages.back),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1886,
          columnNumber: 25
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1877,
        columnNumber: 19
      }
    }), document.getElementById('toolbar')))) : __jsx(_plone_volto_components_theme_Unauthorized_Unauthorized__WEBPACK_IMPORTED_MODULE_29__["default"], {
      staticContext: this.props.staticContext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1900,
        columnNumber: 11
      }
    })) : __jsx(_plone_volto_components_theme_Unauthorized_Unauthorized__WEBPACK_IMPORTED_MODULE_29__["default"], {
      staticContext: this.props.staticContext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1904,
        columnNumber: 7
      }
    });
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(Contents, "propTypes", {
  action: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  searchContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  cut: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  copy: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  copyContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  moveContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  orderContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  sortContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  updateColumnsContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  clipboardRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    loaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  deleteRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    loaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  updateRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    loaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  searchRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    loaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    '@type': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })),
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(Contents, "defaultProps", {
  items: [],
  action: null,
  source: null,
  index: {
    order: lodash_keys__WEBPACK_IMPORTED_MODULE_11___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"]),
    values: lodash_mapValues__WEBPACK_IMPORTED_MODULE_13___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__["default"], (value, key) => _objectSpread(_objectSpread({}, value), {}, {
      selected: lodash_indexOf__WEBPACK_IMPORTED_MODULE_10___default()(_plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__.defaultIndexes, key) !== -1
    })),
    selectedCount: _plone_volto_constants_Indexes__WEBPACK_IMPORTED_MODULE_23__.defaultIndexes.length + 1
  }
});
let dndContext;
const DragDropConnector = props => {
  const {
    DragDropContext
  } = props.reactDnd;
  const HTML5Backend = props.reactDndHtml5Backend.default;
  const DndConnectedContents = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    if (!dndContext) {
      dndContext = DragDropContext(HTML5Backend);
    }
    return dndContext(Contents);
  }, [DragDropContext, HTML5Backend]);
  return __jsx(DndConnectedContents, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1922,
      columnNumber: 10
    }
  }));
};
const __test__ = (0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_16__.injectIntl, (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_40__.injectLazyLibs)(['toastify', 'reactDnd']), (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((store, props) => {
  return {
    token: store.userSession.token,
    items: store.search.items,
    sort: store.content.update.sort,
    index: store.content.updatecolumns.idx,
    breadcrumbs: store.breadcrumbs.items,
    total: store.search.total,
    searchRequest: {
      loading: store.search.loading,
      loaded: store.search.loaded
    },
    pathname: props.location.pathname,
    action: store.clipboard.action,
    source: store.clipboard.source,
    clipboardRequest: store.clipboard.request,
    deleteRequest: store.content.delete,
    updateRequest: store.content.update,
    objectActions: store.actions.actions.object,
    orderRequest: store.content.order
  };
}, {
  searchContent: _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_19__.searchContent,
  cut: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.cut,
  copy: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.copy,
  copyContent: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.copyContent,
  deleteContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.deleteContent,
  listActions: _plone_volto_actions_actions_actions__WEBPACK_IMPORTED_MODULE_22__.listActions,
  moveContent: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.moveContent,
  orderContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.orderContent,
  sortContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.sortContent,
  updateColumnsContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.updateColumnsContent,
  getContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.getContent
}))(Contents);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_3__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_16__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((store, props) => {
  return {
    token: store.userSession.token,
    items: store.search.items,
    sort: store.content.update.sort,
    index: store.content.updatecolumns.idx,
    breadcrumbs: store.breadcrumbs.items,
    total: store.search.total,
    searchRequest: {
      loading: store.search.loading,
      loaded: store.search.loaded
    },
    pathname: props.location.pathname,
    action: store.clipboard.action,
    source: store.clipboard.source,
    clipboardRequest: store.clipboard.request,
    deleteRequest: store.content.delete,
    updateRequest: store.content.update,
    objectActions: store.actions.actions.object,
    orderRequest: store.content.order
  };
}, {
  searchContent: _plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_19__.searchContent,
  cut: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.cut,
  copy: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.copy,
  copyContent: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.copyContent,
  deleteContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.deleteContent,
  listActions: _plone_volto_actions_actions_actions__WEBPACK_IMPORTED_MODULE_22__.listActions,
  moveContent: _plone_volto_actions_clipboard_clipboard__WEBPACK_IMPORTED_MODULE_21__.moveContent,
  orderContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.orderContent,
  sortContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.sortContent,
  updateColumnsContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.updateColumnsContent,
  getContent: _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_20__.getContent
}), (0,_plone_volto_helpers_AsyncConnect__WEBPACK_IMPORTED_MODULE_17__.asyncConnect)([{
  key: 'actions',
  // Dispatch async/await to make the operation synchronous, otherwise it returns
  // before the promise is resolved
  promise: async ({
    location,
    store: {
      dispatch
    }
  }) => await dispatch((0,_plone_volto_actions_actions_actions__WEBPACK_IMPORTED_MODULE_22__.listActions)((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_18__.getBaseUrl)(location.pathname)))
}]), (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_40__.injectLazyLibs)(['toastify', 'reactDnd', 'reactDndHtml5Backend']))(DragDropConnector));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbs.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbs.jsx ***!
  \******************************************************************************************/
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
/* harmony import */ var _plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/manage/UniversalLink/UniversalLink */ "./node_modules/@plone/volto/src/components/manage/UniversalLink/UniversalLink.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/LanguageMap/LanguageMap */ "./node_modules/@plone/volto/src/helpers/LanguageMap/LanguageMap.js");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsBreadcrumbsRootItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsBreadcrumbsRootItem */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsRootItem.jsx");
/* harmony import */ var _plone_volto_components_manage_Contents_ContentsBreadcrumbsHomeItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/ContentsBreadcrumbsHomeItem */ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsHomeItem.jsx");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsBreadcrumbs.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  home: {
    id: 'Home',
    defaultMessage: 'Home'
  },
  root: {
    id: 'Root',
    defaultMessage: 'Root'
  }
});
const ContentsBreadcrumbs = props => {
  var _pathname$split, _langmap$lang$nativeN, _langmap$lang;
  const {
    settings
  } = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_8__["default"];
  const {
    items
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)().pathname;
  const lang = pathname.split('/')[1];
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, settings.isMultilingual && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/contents",
    className: "section",
    title: intl.formatMessage(messages.root),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_plone_volto_components_manage_Contents_ContentsBreadcrumbsRootItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb.Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), settings.isMultilingual && (pathname === null || pathname === void 0 ? void 0 : (_pathname$split = pathname.split('/')) === null || _pathname$split === void 0 ? void 0 : _pathname$split.length) > 2 && __jsx(_plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: `/${lang}/contents`,
    className: "section",
    title: intl.formatMessage(messages.home),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, (_langmap$lang$nativeN = _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_5__["default"] === null || _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_5__["default"] === void 0 ? void 0 : (_langmap$lang = _plone_volto_helpers_LanguageMap_LanguageMap__WEBPACK_IMPORTED_MODULE_5__["default"][lang]) === null || _langmap$lang === void 0 ? void 0 : _langmap$lang.nativeName) !== null && _langmap$lang$nativeN !== void 0 ? _langmap$lang$nativeN : lang), !settings.isMultilingual && __jsx(_plone_volto_components_manage_UniversalLink_UniversalLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/contents",
    className: "section",
    title: intl.formatMessage(messages.home),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_manage_Contents_ContentsBreadcrumbsHomeItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })), items.map((breadcrumb, index, breadcrumbs) => [__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb.Divider, {
    key: `divider-${breadcrumb.url}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), index < breadcrumbs.length - 1 ? __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    key: breadcrumb.url,
    to: `${breadcrumb.url}/contents`,
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, breadcrumb.nav_title || breadcrumb.title) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb.Section, {
    key: breadcrumb.url,
    active: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, breadcrumb.nav_title || breadcrumb.title)]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsBreadcrumbs);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsHomeItem.jsx"
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsHomeItem.jsx ***!
  \**************************************************************************************************/
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

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  home: {
    id: 'Home',
    defaultMessage: 'Home'
  }
});
const ContentsBreadcrumbsHomeItem = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, intl.formatMessage(messages.home));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsBreadcrumbsHomeItem);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsRootItem.jsx"
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsBreadcrumbsRootItem.jsx ***!
  \**************************************************************************************************/
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

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  root: {
    id: 'Root',
    defaultMessage: 'Root'
  }
});
const ContentsBreadcrumbsRootItem = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, intl.formatMessage(messages.root));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsBreadcrumbsRootItem);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsDeleteModal.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsDeleteModal.jsx ***!
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Url/Url */ "./node_modules/@plone/volto/src/helpers/Url/Url.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsDeleteModal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  deleteConfirmSingleItem: {
    id: 'Delete this item?',
    defaultMessage: 'Delete this item?'
  },
  deleteConfirmMultipleItems: {
    id: 'Delete selected items?',
    defaultMessage: 'Delete selected items?'
  },
  navigate_to_this_item: {
    id: 'Navigate to this item',
    defaultMessage: 'Navigate to this item'
  },
  loading: {
    id: 'link-integrity: loading references',
    defaultMessage: 'Checking references...'
  },
  delete: {
    id: 'Delete',
    defaultMessage: 'Delete'
  },
  delete_and_broken_links: {
    id: 'link-integrity: Delete item and break links',
    defaultMessage: 'Delete item and break links'
  },
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  }
});
const ContentsDeleteModal = props => {
  const {
    itemsToDelete = [],
    open,
    onCancel,
    onOk,
    items,
    hasMultiplePages
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const linkintegrityInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    var _state$linkIntegrity;
    return (_state$linkIntegrity = state.linkIntegrity) === null || _state$linkIntegrity === void 0 ? void 0 : _state$linkIntegrity.result;
  });
  const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    var _state$linkIntegrity2;
    return (_state$linkIntegrity2 = state.linkIntegrity) === null || _state$linkIntegrity2 === void 0 ? void 0 : _state$linkIntegrity2.loading;
  });
  const {
    0: brokenReferences,
    1: setBrokenReferences
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: containedItemsToDelete,
    1: setContainedItemsToDelete
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: breaches,
    1: setBreaches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: linksAndReferencesViewLink,
    1: setLinkAndReferencesViewLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const titlesToDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => itemsToDelete.reduce((acc, id) => {
    const item = items.find(item => item['@id'] === id);
    acc[id] = item ? item.Title : null;
    return acc;
  }, {}), [itemsToDelete, items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFieldById = (id, field) => {
      const item = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(items, {
        '@id': id
      });
      return item ? item[field] : '';
    };
    if (itemsToDelete.length > 0 && open) {
      dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_7__.linkIntegrityCheck)(lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(itemsToDelete, item => getFieldById(item, 'UID'))));
    }
  }, [itemsToDelete, items, open, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (linkintegrityInfo) {
      const containedItems = linkintegrityInfo.map(result => {
        var _result$items_total;
        return (_result$items_total = result.items_total) !== null && _result$items_total !== void 0 ? _result$items_total : 0;
      }).reduce((acc, value) => acc + value, 0);
      const breaches = linkintegrityInfo.flatMap(result => result.breaches.map(source => ({
        source: source,
        target: result
      })));
      const source_by_uid = breaches.reduce((acc, value) => acc.set(value.source.uid, value.source), new Map());
      const by_source = breaches.reduce((acc, value) => {
        if (acc.get(value.source.uid) === undefined) {
          acc.set(value.source.uid, new Set());
        }
        acc.get(value.source.uid).add(value.target);
        return acc;
      }, new Map());
      setContainedItemsToDelete(containedItems);
      setBrokenReferences(by_source.size);
      setLinkAndReferencesViewLink(linkintegrityInfo.length ? linkintegrityInfo[0]['@id'] + '/links-to-item' : null);
      setBreaches(Array.from(by_source, entry => ({
        source: source_by_uid.get(entry[0]),
        targets: Array.from(entry[1])
      })));
    } else {
      setContainedItemsToDelete([]);
      setBrokenReferences(0);
      setLinkAndReferencesViewLink(null);
      setBreaches([]);
    }
  }, [linkintegrityInfo]);
  return open && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Confirm, {
    open: open,
    confirmButton: brokenReferences === 0 ? intl.formatMessage(messages.delete) : intl.formatMessage(messages.delete_and_broken_links),
    cancelButton: intl.formatMessage(messages.cancel),
    header: itemsToDelete.length === 1 ? intl.formatMessage(messages.deleteConfirmSingleItem) : intl.formatMessage(messages.deleteConfirmMultipleItems),
    content: __jsx("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Dimmer, {
      active: loading,
      inverted: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Loader, {
      indeterminate: true,
      size: "massive",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, intl.formatMessage(messages.loading))), itemsToDelete.length > 1 && items.length === itemsToDelete.length ? hasMultiplePages ? __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "You are about to delete all items in the current pagination of this folder.",
      defaultMessage: "You are about to delete all items in the current pagination of this folder.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    })) : __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "You are about to delete all items in this folder.",
      defaultMessage: "You are about to delete all items in this folder.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    })) : __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    }, itemsToDelete.map(id => {
      return __jsx("li", {
        key: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_8__.flattenToAppURL)(id),
        target: "_blank",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 23
        }
      }, titlesToDelete[id] || id));
    })), itemsToDelete.length > 1 ? containedItemsToDelete > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Some items are also a folder. By deleting them you will delete {containedItemsToDelete} {variation} inside the folders.",
      defaultMessage: "Some items are also a folder. By deleting them you will delete {containedItemsToDelete} {variation} inside the folders.",
      values: {
        containedItemsToDelete: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }
        }, containedItemsToDelete),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }
        }, containedItemsToDelete === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "item",
          defaultMessage: "item",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 29
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "items",
          defaultMessage: "items",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 29
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }), brokenReferences > 0 && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 23
      }
    }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Some items are referenced by other contents. By deleting them {brokenReferences} {variation} will be broken.",
      defaultMessage: "Some items are referenced by other contents. By deleting them {brokenReferences} {variation} will be broken.",
      values: {
        brokenReferences: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 45
          }
        }, brokenReferences),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }
        }, brokenReferences === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "reference",
          defaultMessage: "reference",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 33
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "references",
          defaultMessage: "references",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 33
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 23
      }
    }))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, brokenReferences > 0 && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Some items are referenced by other contents. By deleting them {brokenReferences} {variation} will be broken.",
      defaultMessage: "Some items are referenced by other contents. By deleting them {brokenReferences} {variation} will be broken.",
      values: {
        brokenReferences: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 45
          }
        }, brokenReferences),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 29
          }
        }, brokenReferences === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "reference",
          defaultMessage: "reference",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 33
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "references",
          defaultMessage: "references",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 33
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 23
      }
    }))) : containedItemsToDelete > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "This item is also a folder. By deleting it you will delete {containedItemsToDelete} {variation} inside the folder.",
      defaultMessage: "This item is also a folder. By deleting it you will delete {containedItemsToDelete} {variation} inside the folder.",
      values: {
        containedItemsToDelete: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 23
          }
        }, containedItemsToDelete),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 23
          }
        }, containedItemsToDelete === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "item",
          defaultMessage: "item",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 27
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "items",
          defaultMessage: "items",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 27
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }), brokenReferences > 0 && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 21
      }
    }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Deleting this item breaks {brokenReferences} {variation}.",
      defaultMessage: "Deleting this item breaks {brokenReferences} {variation}.",
      values: {
        brokenReferences: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 43
          }
        }, brokenReferences),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 27
          }
        }, brokenReferences === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "reference",
          defaultMessage: "reference",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 31
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "references",
          defaultMessage: "references",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 31
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 21
      }
    }), __jsx(BrokenLinksList, {
      intl: intl,
      breaches: breaches,
      linksAndReferencesViewLink: linksAndReferencesViewLink,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 21
      }
    }))) : brokenReferences > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Deleting this item breaks {brokenReferences} {variation}.",
      defaultMessage: "Deleting this item breaks {brokenReferences} {variation}.",
      values: {
        brokenReferences: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 39
          }
        }, brokenReferences),
        variation: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 23
          }
        }, brokenReferences === 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "reference",
          defaultMessage: "reference",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 27
          }
        }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "references",
          defaultMessage: "references",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 27
          }
        }))
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 17
      }
    }), __jsx(BrokenLinksList, {
      intl: intl,
      breaches: breaches,
      linksAndReferencesViewLink: linksAndReferencesViewLink,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 17
      }
    })) : null),
    onCancel: onCancel,
    onConfirm: onOk,
    size: "medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  });
};
const BrokenLinksList = ({
  intl,
  breaches,
  linksAndReferencesViewLink
}) => {
  return __jsx("div", {
    className: "broken-links-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 5
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
    id: "These items will have broken links",
    defaultMessage: "These items will have broken links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 7
    }
  }), ":", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table, {
    compact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }, breaches.map(breach => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Row, {
    key: breach.source['@id'],
    verticalAlign: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_8__.flattenToAppURL)(breach.source['@id']),
    title: intl.formatMessage(messages.navigate_to_this_item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  }, breach.source.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Cell, {
    style: {
      minWidth: '140px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
    id: "refers to",
    defaultMessage: "refers to",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }), ":"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 15
    }
  }, __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  }, breach.targets.map(target => __jsx("li", {
    key: target['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 21
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_8__.flattenToAppURL)(target['@id']),
    title: intl.formatMessage(messages.navigate_to_this_item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 23
    }
  }, target.title))))))))), linksAndReferencesViewLink && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: (0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_8__.flattenToAppURL)(linksAndReferencesViewLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
    id: "View links and references to this item",
    defaultMessage: "View links and references to this item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  })));
};
ContentsDeleteModal.propTypes = {
  itemsToDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    UID: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsDeleteModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsIndexHeader.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsIndexHeader.jsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentsIndexHeaderComponent: () => (/* binding */ ContentsIndexHeaderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsIndexHeader.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contents index header component.
 * @module components/manage/Contents/ContentsIndexHeader
 */

;



const widthValues = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen'];

/**
 * Contents index header component class.
 * @function ContentsIndexHeaderComponent
 * @returns {string} Markup of the component.
 */
const ContentsIndexHeaderComponent = ({
  intl,
  width,
  label,
  connectDragSource,
  connectDropTarget,
  isDragging
}) => connectDropTarget(connectDragSource(__jsx("th", {
  className: `${widthValues[width - 2]} wide`,
  style: {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
}, intl.formatMessage({
  id: label,
  defaultMessage: label
}))));

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ContentsIndexHeaderComponent.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  connectDragSource: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  connectDropTarget: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDragging: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  order: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onOrderIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
const DragDropConnector = props => {
  const {
    DropTarget,
    DragSource
  } = props.reactDnd;
  const DndConnectedContentsIndexHeader = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => DropTarget('index', {
    hover(props, monitor) {
      const dragOrder = monitor.getItem().order;
      const hoverOrder = props.order;
      if (dragOrder === hoverOrder) {
        return;
      }
      props.onOrderIndex(dragOrder, hoverOrder - dragOrder);
      monitor.getItem().order = hoverOrder;
    }
  }, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(DragSource('index', {
    beginDrag(props) {
      return {
        id: props.label,
        order: props.order
      };
    }
  }, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ContentsIndexHeaderComponent))), [DragSource, DropTarget]);
  return __jsx(DndConnectedContentsIndexHeader, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_3__.injectLazyLibs)('reactDnd')(DragDropConnector));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsItem.jsx"
/*!***********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsItem.jsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentsItemComponent: () => (/* binding */ ContentsItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_components_manage_Contents_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/manage/Contents/circle */ "./node_modules/@plone/volto/src/components/manage/Contents/circle.jsx");
/* harmony import */ var _plone_volto_components_theme_FormattedDate_FormattedDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/theme/FormattedDate/FormattedDate */ "./node_modules/@plone/volto/src/components/theme/FormattedDate/FormattedDate.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/theme/Popup/Popup */ "./node_modules/@plone/volto/src/components/theme/Popup/Popup.jsx");
/* harmony import */ var _plone_volto_helpers_Content_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/helpers/Content/Content */ "./node_modules/@plone/volto/src/helpers/Content/Content.js");
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/more.svg */ "./node_modules/@plone/volto/src/icons/more.svg");
/* harmony import */ var _plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/checkbox-unchecked.svg */ "./node_modules/@plone/volto/src/icons/checkbox-unchecked.svg");
/* harmony import */ var _plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/checkbox-checked.svg */ "./node_modules/@plone/volto/src/icons/checkbox-checked.svg");
/* harmony import */ var _plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/cut.svg */ "./node_modules/@plone/volto/src/icons/cut.svg");
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/copy.svg */ "./node_modules/@plone/volto/src/icons/copy.svg");
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/show.svg */ "./node_modules/@plone/volto/src/icons/show.svg");
/* harmony import */ var _plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_move_up_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/move-up.svg */ "./node_modules/@plone/volto/src/icons/move-up.svg");
/* harmony import */ var _plone_volto_icons_move_up_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_move_up_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_icons_move_down_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/move-down.svg */ "./node_modules/@plone/volto/src/icons/move-down.svg");
/* harmony import */ var _plone_volto_icons_move_down_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_move_down_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/editing.svg */ "./node_modules/@plone/volto/src/icons/editing.svg");
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @plone/volto/icons/drag.svg */ "./node_modules/@plone/volto/src/icons/drag.svg");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsItem.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contents item component.
 * @module components/manage/Contents/ContentsItem
 */

;























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  private: {
    id: 'private',
    defaultMessage: 'Private'
  },
  pending: {
    id: 'pending',
    defaultMessage: 'Pending'
  },
  published: {
    id: 'published',
    defaultMessage: 'Published'
  },
  intranet: {
    id: 'intranet',
    defaultMessage: 'Intranet'
  },
  draft: {
    id: 'draft',
    defaultMessage: 'Draft'
  },
  no_workflow_state: {
    id: 'no workflow state',
    defaultMessage: 'No workflow state'
  },
  none: {
    id: 'Not available',
    defaultMessage: 'None'
  }
});
function getColor(string) {
  switch (string) {
    case 'private':
      return '#ed4033';
    case 'published':
      return '#007bc1';
    case 'intranet':
      return '#51aa55';
    case 'draft':
      return '#f6a808';
    default:
      return 'grey';
  }
}

/**
 * Contents item component class.
 * @function ContentsItemComponent
 * @returns {string} Markup of the component.
 */
const ContentsItemComponent = ({
  item,
  selected,
  onClick,
  indexes,
  onCut,
  onCopy,
  onDelete,
  onMoveToTop,
  onMoveToBottom,
  connectDragPreview,
  connectDragSource,
  connectDropTarget,
  isDragging,
  order
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  return connectDropTarget(connectDragPreview(__jsx("tr", {
    key: item['@id'],
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
      'dragging-row': isDragging
    }),
    "aria-label": item['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
      'dragging-cell': isDragging
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, connectDragSource(__jsx("div", {
    style: {
      display: 'inline-block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: true,
    basic: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_21___default()),
    size: "20px",
    color: "#878f93",
    className: "content drag handle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
      'dragging-cell': isDragging
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, selected ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: true,
    basic: true,
    "aria-label": "Unchecked",
    onClick: e => onClick(e, item['@id']),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_13___default()),
    color: "#007eb1",
    size: "24px",
    className: "checked",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  })) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: true,
    basic: true,
    "aria-label": "Checked",
    onClick: e => onClick(e, item['@id']),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    color: "#826a6a",
    size: "24px",
    className: "unchecked",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
      'dragging-cell': isDragging
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "icon-align-name",
    to: `${item['@id']}${item.is_folderish ? '/contents' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "expire-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (0,_plone_volto_helpers_Content_Content__WEBPACK_IMPORTED_MODULE_10__.getContentIcon)(item['@type'], item.is_folderish),
    size: "20px",
    className: "icon-margin",
    color: "#878f93",
    title: item['Type'] || item['@type'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }), ' ', __jsx("span", {
    title: item.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, " ", item.title)), item.ExpirationDate !== 'None' && new Date(item.ExpirationDate).getTime() < new Date().getTime() && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button-margin",
    size: "mini",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Expired",
    defaultMessage: "Expired",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  })), item.EffectiveDate !== 'None' && new Date(item.EffectiveDate).getTime() > new Date().getTime() && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button-margin effective-future",
    size: "mini",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Scheduled",
    defaultMessage: "Scheduled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  })))), lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(indexes, index => {
    var _item$index$id;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
      className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
        'dragging-cell': isDragging
      }),
      key: index.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }, index.type === 'boolean' && (item[index.id] ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "Yes",
      defaultMessage: "Yes",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "No",
      defaultMessage: "No",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    })), index.type === 'string' && index.id !== 'review_state' && item[index.id], index.id === 'review_state' && __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components_manage_Contents_circle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: getColor(item[index.id]),
      size: "15px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 19
      }
    })), messages[item[index.id]] ? intl.formatMessage(messages[item[index.id]]) : item['review_title'] || item['review_state'] || intl.formatMessage(messages.no_workflow_state)), index.type === 'date' && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item[index === null || index === void 0 ? void 0 : index.id] && item[index.id] !== 'None' ? __jsx(_plone_volto_components_theme_FormattedDate_FormattedDate__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: item[index.id],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }) : intl.formatMessage(messages.none)), index.type === 'array' && __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 15
      }
    }, (_item$index$id = item[index.id]) === null || _item$index$id === void 0 ? void 0 : _item$index$id.join(', ')));
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('', {
      'dragging-cell': isDragging
    }),
    textAlign: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Popup_Popup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menu: true,
    position: "bottom right",
    flowing: true,
    basic: true,
    on: "click",
    popper: {
      className: 'dropdown-popup'
    },
    trigger: __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_more_svg__WEBPACK_IMPORTED_MODULE_11___default()),
      className: "dropdown-popup-trigger",
      size: "24px",
      color: "#007eb1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    vertical: true,
    borderless: true,
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "item icon-align",
    to: `${item['@id']}/edit`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_20___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Edit",
    defaultMessage: "Edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "item right-dropdown icon-align",
    to: item['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_show_svg__WEBPACK_IMPORTED_MODULE_17___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "View",
    defaultMessage: "View",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    onClick: onCut,
    value: item['@id'],
    className: "right-dropdown icon-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_14___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Cut",
    defaultMessage: "Cut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    onClick: onCopy,
    value: item['@id'],
    className: "right-dropdown icon-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_16___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Copy",
    defaultMessage: "Copy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    onClick: onDelete,
    value: item['@id'],
    className: "right-dropdown icon-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_15___default()),
    color: "#e40166",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Delete",
    defaultMessage: "Delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    onClick: onMoveToTop,
    value: order,
    className: "right-dropdown icon-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_move_up_svg__WEBPACK_IMPORTED_MODULE_18___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Move to top of folder",
    defaultMessage: "Move to top of folder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    onClick: onMoveToBottom,
    value: order,
    className: "right-dropdown icon-align",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: (_plone_volto_icons_move_down_svg__WEBPACK_IMPORTED_MODULE_19___default()),
    color: "#007eb1",
    size: "24px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 17
    }
  }), ' ', __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "Move to bottom of folder",
    defaultMessage: "Move to bottom of folder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }
  }))))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ContentsItemComponent.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    is_folderish: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    '@type': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired,
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  indexes: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  })).isRequired,
  onCut: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onCopy: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onMoveToTop: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onMoveToBottom: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  connectDragPreview: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  connectDragSource: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  connectDropTarget: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  isDragging: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  order: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired,
  onOrderItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
};
const DragDropConnector = props => {
  const {
    DropTarget,
    DragSource
  } = props.reactDnd;
  const DndConnectedContentsItem = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => DropTarget('item', {
    hover(props, monitor) {
      const id = monitor.getItem().id;
      const dragOrder = monitor.getItem().order;
      const hoverOrder = props.order;
      if (dragOrder === hoverOrder) {
        return;
      }
      props.onOrderItem(id, dragOrder, hoverOrder - dragOrder, false);
      monitor.getItem().order = hoverOrder;
    },
    drop(props, monitor) {
      const id = monitor.getItem().id;
      const dragOrder = monitor.getItem().startOrder;
      const dropOrder = monitor.getItem().order;
      if (dragOrder === dropOrder) {
        return;
      }
      props.onOrderItem(id, dragOrder, dropOrder - dragOrder, true);
    }
  }, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(DragSource('item', {
    beginDrag(props) {
      return {
        id: props.item['@id'],
        order: props.order,
        startOrder: props.order
      };
    }
  }, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }))(ContentsItemComponent)), [DragSource, DropTarget]);
  return __jsx(DndConnectedContentsItem, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_23__.injectLazyLibs)('reactDnd')(DragDropConnector));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsPropertiesModal.jsx"
/*!**********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsPropertiesModal.jsx ***!
  \**********************************************************************************************/
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
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsPropertiesModal.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  properties: {
    id: 'Properties',
    defaultMessage: 'Properties'
  },
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  effectiveTitle: {
    id: 'Publishing Date',
    defaultMessage: 'Publishing Date'
  },
  effectiveDescription: {
    id: 'If this date is in the future, the content will not show up in listings and searches until this date.',
    defaultMessage: 'If this date is in the future, the content will not show up in listings and searches until this date.'
  },
  expiresTitle: {
    id: 'Expiration Date',
    defaultMessage: 'Expiration Date'
  },
  expiresDescription: {
    id: 'When this date is reached, the content will nolonger be visible in listings and searches.',
    defaultMessage: 'When this date is reached, the content will nolonger be visible in listings and searches.'
  },
  rightsTitle: {
    id: 'Rights',
    defaultMessage: 'Rights'
  },
  rightsDescription: {
    id: 'Copyright statement or other rights information on this item.',
    defaultMessage: 'Copyright statement or other rights information on this item.'
  },
  creatorsTitle: {
    id: 'Creators',
    defaultMessage: 'Creators'
  },
  creatorsDescription: {
    id: 'Persons responsible for creating the content of this item. Please enter a list of user names, one per line. The principal creator should come first.',
    defaultMessage: 'Persons responsible for creating the content of this item. Please enter a list of user names, one per line. The principal creator should come first.'
  },
  excludeFromNavTitle: {
    id: 'Exclude from navigation',
    defaultMessage: 'Exclude from navigation'
  },
  excludeFromNavDescription: {
    id: 'If selected, this item will not appear in the navigation tree',
    defaultMessage: 'If selected, this item will not appear in the navigation tree'
  }
});
const ContentsPropertiesModal = props => {
  const {
    onCancel,
    onOk,
    open,
    items,
    values
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.content.update);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_6__.usePrevious)(request.loading);
  const baseSchema = {
    fieldsets: [{
      id: 'default',
      title: intl.formatMessage(messages.default),
      fields: ['effective', 'expires', 'rights', 'creators', 'exclude_from_nav']
    }],
    properties: {
      effective: {
        description: intl.formatMessage(messages.effectiveDescription),
        title: intl.formatMessage(messages.effectiveTitle),
        type: 'string',
        widget: 'datetime'
      },
      expires: {
        description: intl.formatMessage(messages.expiresDescription),
        title: intl.formatMessage(messages.expiresTitle),
        type: 'string',
        widget: 'datetime'
      },
      rights: {
        description: intl.formatMessage(messages.rightsDescription),
        title: intl.formatMessage(messages.rightsTitle),
        type: 'string',
        widget: 'textarea'
      },
      creators: {
        description: intl.formatMessage(messages.creatorsDescription),
        title: intl.formatMessage(messages.creatorsTitle),
        type: 'array'
      },
      exclude_from_nav: {
        description: intl.formatMessage(messages.excludeFromNavDescription),
        title: intl.formatMessage(messages.excludeFromNavTitle),
        type: 'boolean'
      }
    },
    required: []
  };
  const schemaEnhancer = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_10__["default"].settings.contentPropertiesSchemaEnhancer;
  let schema = schemaEnhancer ? schemaEnhancer({
    schema: (0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.cloneDeepSchema)(baseSchema),
    intl
  }) : baseSchema;
  const initialData = {};
  if (values !== null && values !== void 0 && values.length) {
    for (const name of Object.keys(schema.properties)) {
      const firstValue = values[0][name];
      // should not show floor or ceiling dates
      if (name === 'effective' && firstValue && firstValue <= '1970' || name === 'expires' && firstValue && firstValue >= '2499') {
        continue;
      }
      if (values.every(item => item[name] === firstValue)) {
        initialData[name] = firstValue;
      }
    }
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
    }
  }, [onOk, prevrequestloading, request.loaded]);
  const onSubmit = data => {
    let changes = {};
    for (const name of Object.keys(data)) {
      if (data[name] !== initialData[name]) {
        changes[name] = data[name];
      }
    }
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(changes)) {
      onOk();
    } else {
      dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_8__.updateContent)(items, lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(items, () => changes)));
    }
  };
  return open && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    open: open,
    onSubmit: onSubmit,
    onCancel: onCancel,
    title: intl.formatMessage(messages.properties),
    schema: schema,
    formData: initialData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  });
};
ContentsPropertiesModal.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsPropertiesModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsRenameModal.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsRenameModal.jsx ***!
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
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsRenameModal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  renameItems: {
    id: 'Rename items',
    defaultMessage: 'Rename items'
  },
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title'
  },
  shortName: {
    id: 'Short name',
    defaultMessage: 'Short name'
  },
  shortNameDescription: {
    id: 'This name will be displayed in the URL.',
    defaultMessage: 'This name will be displayed in the URL.'
  },
  loadingMessage: {
    id: 'Rename Items Loading Message',
    defaultMessage: 'Renaming items...'
  }
});
const ContentsRenameModal = props => {
  const {
    onOk,
    open,
    items,
    onCancel
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.content.update);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_7__.usePrevious)(request.loading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
    }
  }, [onOk, prevrequestloading, request.loaded]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_8__.updateContent)(lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(items, item => item.url), lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(items, (item, index) => ({
      id: data[`${index}_id`],
      title: data[`${index}_title`]
    }))));
  }, [items, dispatch]);
  return open && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    open: open,
    loading: request.loading,
    loadingMessage: intl.formatMessage(messages.loadingMessage),
    onSubmit: onSubmit,
    onCancel: onCancel,
    formData: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(items, (item, index) => ({
      [`${index}_title`]: item.title,
      [`${index}_id`]: item.id
    }))),
    title: intl.formatMessage(messages.renameItems),
    schema: {
      fieldsets: [{
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(items, (item, index) => [`${index}_title`, `${index}_id`]))
      }],
      properties: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(...lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(items, (item, index) => ({
        [`${index}_title`]: {
          title: intl.formatMessage(messages.title),
          type: 'string',
          description: ''
        },
        [`${index}_id`]: {
          title: intl.formatMessage(messages.shortName),
          type: 'id',
          description: intl.formatMessage(messages.shortNameDescription)
        }
      }))),
      required: []
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  });
};
ContentsRenameModal.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsRenameModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsTagsModal.jsx"
/*!****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsTagsModal.jsx ***!
  \****************************************************************************************/
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
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsTagsModal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  tags: {
    id: 'Tags',
    defaultMessage: 'Tags'
  },
  tagsToRemove: {
    id: 'Tags to remove',
    defaultMessage: 'Tags to remove'
  },
  tagsToAdd: {
    id: 'Tags to add',
    defaultMessage: 'Tags to add'
  }
});
const ContentsTagsModal = props => {
  const {
    items,
    open,
    onCancel,
    onOk
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.content.update);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_5__.usePrevious)(request.loading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
    }
  }, [onOk, prevrequestloading, request.loaded]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    tags_to_add = [],
    tags_to_remove = []
  }) => {
    dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_6__.updateContent)(lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(items, item => item.url), lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(items, item => {
      var _item$subjects;
      return {
        subjects: [...new Set(((_item$subjects = item.subjects) !== null && _item$subjects !== void 0 ? _item$subjects : []).filter(s => !tags_to_remove.includes(s)).concat(tags_to_add))]
      };
    })));
  }, [dispatch, items]);
  const currentSetTags = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...new Set(items.map(item => item.subjects).flat())], [items]);
  return open && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__.ModalForm, {
    open: open,
    onSubmit: onSubmit,
    onCancel: onCancel,
    title: intl.formatMessage(messages.tags),
    schema: {
      fieldsets: [{
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['tags_to_remove', 'tags_to_add']
      }],
      properties: {
        tags_to_remove: {
          type: 'array',
          widget: 'array',
          title: intl.formatMessage(messages.tagsToRemove),
          choices: currentSetTags.map(tag => [tag, tag])
        },
        tags_to_add: {
          type: 'array',
          widget: 'token',
          title: intl.formatMessage(messages.tagsToAdd),
          items: {
            vocabulary: {
              '@id': 'plone.app.vocabularies.Keywords'
            }
          }
        }
      },
      required: []
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  });
};
ContentsTagsModal.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    subjects: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsTagsModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsUploadModal.jsx"
/*!******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsUploadModal.jsx ***!
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filesize */ "filesize");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! promise-file-reader */ "promise-file-reader");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(promise_file_reader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_components_theme_FormattedDate_FormattedRelativeDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/FormattedDate/FormattedRelativeDate */ "./node_modules/@plone/volto/src/components/theme/FormattedDate/FormattedRelativeDate.jsx");
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/components/theme/Image/Image */ "./node_modules/@plone/volto/src/components/theme/Image/Image.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsUploadModal.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;















const Dropzone = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(() => (__webpack_require__.t(/*! react-dropzone */ "react-dropzone", 23))));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  upload: {
    id: '{count, plural, one {Upload {count} file} other {Upload {count} files}}',
    defaultMessage: '{count, plural, one {Upload {count} file} other {Upload {count} files}}'
  },
  filesUploaded: {
    id: 'Files uploaded: {uploadedFiles}',
    defaultMessage: 'Files uploaded: {uploadedFiles}'
  },
  totalFilesToUpload: {
    id: 'Total files to upload: {totalFiles}',
    defaultMessage: 'Total files to upload: {totalFiles}'
  }
});
const SUBREQUEST = 'batch-upload';
const ContentsUploadModal = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    var _state$content$subreq;
    return ((_state$content$subreq = state.content.subrequests) === null || _state$content$subreq === void 0 ? void 0 : _state$content$subreq[SUBREQUEST]) || {};
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual);
  const uploadedFiles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.content.uploadedFiles);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_14__.usePrevious)(request.loading);
  const {
    0: files,
    1: setFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: totalFiles,
    1: setTotalFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    onOk
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
      setFiles([]);
    }
  }, [prevrequestloading, request.loaded, onOk]);
  const onRemoveFile = event => {
    setFiles(lodash_filter__WEBPACK_IMPORTED_MODULE_6___default()(files, (file, index) => index !== parseInt(event.target.getAttribute('value'), 10)));
    setTotalFiles(totalFiles - 1);
  };
  const onDrop = async newFiles => {
    const validFiles = [];
    for (let i = 0; i < newFiles.length; i++) {
      if ((0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_13__.validateFileUploadSize)(newFiles[i], intl.formatMessage)) {
        await (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_9__.readAsDataURL)(newFiles[i]).then(data => {
          const fields = data.match(/^data:(.*);(.*),(.*)$/);
          newFiles[i].preview = fields[0];
        });
        validFiles.push(newFiles[i]);
      }
    }
    setFiles(lodash_concat__WEBPACK_IMPORTED_MODULE_5___default()(files, validFiles));
    setTotalFiles(validFiles.length);
  };
  const onCancel = () => {
    props.onCancel();
    setFiles([]);
    setTotalFiles(0);
  };
  const onChangeFileName = (e, index) => {
    let copyOfFiles = [...files];
    let originalFile = files[index];
    let newFile = new File([originalFile], e.target.value, {
      type: originalFile.type
    });
    newFile.preview = originalFile.preview;
    newFile.path = e.target.value;
    copyOfFiles[index] = newFile;
    setFiles(copyOfFiles);
  };
  const onSubmit = () => {
    Promise.all(lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(files, file => (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_9__.readAsDataURL)(file))).then(dataUrls => {
      dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_12__.createContent)(props.pathname, lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(files, (file, index) => {
        const fields = dataUrls[index].match(/^data:(.*);(.*),(.*)$/);
        const image = fields[1].split('/')[0] === 'image';
        return {
          '@type': image ? 'Image' : 'File',
          title: file.name,
          [image ? 'image' : 'file']: {
            data: fields[3],
            encoding: fields[2],
            'content-type': fields[1],
            filename: file.name
          }
        };
      }), SUBREQUEST));
    });
  };
  const {
    multiple = true,
    minSize = null,
    maxSize = null,
    accept = null,
    disabled = false
  } = props;
  const dropzoneOptions = {
    multiple,
    minSize,
    maxSize,
    accept,
    disabled
  };
  return props.open && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: "contents-upload-modal",
    open: props.open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Upload files",
    defaultMessage: "Upload files",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dimmer, {
    active: request.loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "progress-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Progress, {
    className: "progress-bar",
    value: uploadedFiles,
    total: totalFiles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, intl.formatMessage(messages.filesUploaded, {
    uploadedFiles
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }), intl.formatMessage(messages.totalFilesToUpload, {
    totalFiles
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx(Dropzone, _extends({
    onDrop: onDrop,
    className: "dropzone",
    noDragEventsBubbling: true
  }, dropzoneOptions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }), ({
    getRootProps,
    getInputProps
  }) => __jsx("div", _extends({}, getRootProps({
    className: 'dashed'
  }), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {
    basic: "very",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Drag and drop files from your computer onto this area or click the \u201CBrowse\u201D button.",
    defaultMessage: "Drag and drop files from your computer onto this area or click the \u201CBrowse\u201D button.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 27
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "ui button primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 27
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Browse",
    defaultMessage: "Browse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 29
    }
  })), __jsx("input", _extends({}, getInputProps({
    type: 'file',
    style: {
      display: 'none'
    }
  }), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 27
    }
  }))))))))), files.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {
    compact: true,
    singleLine: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Filename",
    defaultMessage: "Filename",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Last modified",
    defaultMessage: "Last modified",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "File size",
    defaultMessage: "File size",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "Preview",
    defaultMessage: "Preview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(files, (file, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    className: "upload-row",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    className: "file-name",
    value: file.name,
    onChange: e => onChangeFileName(e, index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 23
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, file.lastModifiedDate && __jsx(_plone_volto_components_theme_FormattedDate_FormattedRelativeDate__WEBPACK_IMPORTED_MODULE_11__["default"], {
    date: file.lastModifiedDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, filesize__WEBPACK_IMPORTED_MODULE_8___default()(file.size, {
    round: 0
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, file.type.split('/')[0] === 'image' && __jsx(_plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_15__["default"], {
    src: file.preview,
    height: 60,
    className: "ui image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 25
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: "close",
    value: index,
    link: true,
    onClick: onRemoveFile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal.Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, files.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    basic: true,
    circular: true,
    primary: true,
    floated: "right",
    icon: "arrow right",
    "aria-label": intl.formatMessage(messages.upload, {
      count: files.length
    }),
    onClick: onSubmit,
    title: intl.formatMessage(messages.upload, {
      count: files.length
    }),
    size: "big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    basic: true,
    circular: true,
    secondary: true,
    icon: "remove",
    "aria-label": intl.formatMessage(messages.cancel),
    title: intl.formatMessage(messages.cancel),
    floated: "right",
    size: "big",
    onClick: onCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  })));
};
ContentsUploadModal.propTypes = {
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  minSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  accept: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsUploadModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/ContentsWorkflowModal.jsx"
/*!********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/ContentsWorkflowModal.jsx ***!
  \********************************************************************************************/
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
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ "lodash/last");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/uniqBy */ "lodash/uniqBy");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_actions_workflow_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/actions/workflow/workflow */ "./node_modules/@plone/volto/src/actions/workflow/workflow.js");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\ContentsWorkflowModal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);












const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  default: {
    id: 'Default',
    defaultMessage: 'Default'
  },
  stateTitle: {
    id: 'Change State',
    defaultMessage: 'Change State'
  },
  includeChildrenTitle: {
    id: 'Change workflow state recursively',
    defaultMessage: 'Change workflow state recursively'
  },
  stateDescription: {
    id: 'Select the transition to be used for modifying the items state.',
    defaultMessage: 'Select the transition to be used for modifying the items state.'
  },
  loadingMessage: {
    id: 'Workflow Change Loading Message',
    defaultMessage: 'Updating workflow states...'
  }
});
const ContentsWorkflowModal = props => {
  const {
    onOk,
    items,
    open,
    onCancel
  } = props;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.workflow.transition);
  const workflows = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.workflow.multiple, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_9__.usePrevious)(request.loading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_plone_volto_actions_workflow_workflow__WEBPACK_IMPORTED_MODULE_10__.getWorkflow)(items));
  }, [dispatch, items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
    }
  }, [onOk, prevrequestloading, request.loaded]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    state,
    include_children
  }) => {
    if (!state) {
      return;
    }
    dispatch((0,_plone_volto_actions_workflow_workflow__WEBPACK_IMPORTED_MODULE_10__.transitionWorkflow)(lodash_filter__WEBPACK_IMPORTED_MODULE_4___default()(lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(...lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(workflows, workflow => workflow.transitions)), item => item['@id']), x => lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(x.split('/')) === state), include_children));
  }, [dispatch, workflows]);
  return open && workflows.length > 0 && __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_11__.ModalForm, {
    open: open,
    loading: request.loading,
    loadingMessage: intl.formatMessage(messages.loadingMessage),
    onSubmit: onSubmit,
    onCancel: onCancel,
    title: intl.formatMessage(messages.stateTitle),
    schema: {
      fieldsets: [{
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['state', 'include_children']
      }],
      properties: {
        state: {
          description: intl.formatMessage(messages.stateDescription),
          title: intl.formatMessage(messages.stateTitle),
          type: 'string',
          choices: lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default()(lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(...lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(workflows, workflow => workflow.transitions)), x => x.title), y => [lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(y['@id'].split('/')), y.title])
        },
        include_children: {
          title: intl.formatMessage(messages.includeChildrenTitle),
          type: 'boolean'
        }
      },
      required: []
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  });
};
ContentsWorkflowModal.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onOk: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsWorkflowModal);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/DropZoneContent.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/DropZoneContent.jsx ***!
  \**************************************************************************************/
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filesize */ "filesize");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! promise-file-reader */ "promise-file-reader");
/* harmony import */ var promise_file_reader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(promise_file_reader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/actions/content/content */ "./node_modules/@plone/volto/src/actions/content/content.js");
/* harmony import */ var _plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Utils/usePrevious */ "./node_modules/@plone/volto/src/helpers/Utils/usePrevious.js");
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/upload.svg */ "./node_modules/@plone/volto/src/icons/upload.svg");
/* harmony import */ var _plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_components_theme_FormattedDate_FormattedRelativeDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/components/theme/FormattedDate/FormattedRelativeDate */ "./node_modules/@plone/volto/src/components/theme/FormattedDate/FormattedRelativeDate.jsx");
/* harmony import */ var _plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/components/theme/Image/Image */ "./node_modules/@plone/volto/src/components/theme/Image/Image.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Contents\\DropZoneContent.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);















const SUBREQUEST = 'batch-upload';
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  upload: {
    id: '{count, plural, one {Upload {count} file} other {Upload {count} files}}',
    defaultMessage: '{count, plural, one {Upload {count} file} other {Upload {count} files}}'
  },
  filesUploaded: {
    id: 'Files uploaded: {uploadedFiles}',
    defaultMessage: 'Files uploaded: {uploadedFiles}'
  },
  dropFiles: {
    id: 'Drop files here to upload',
    defaultMessage: 'Drop files here to upload'
  },
  releaseToAdd: {
    id: 'Release to add file(s) to this folder',
    defaultMessage: 'Release to add file(s) to this folder'
  },
  totalFilesToUpload: {
    id: 'Total files to upload: {totalFiles}',
    defaultMessage: 'Total files to upload: {totalFiles}'
  },
  uploadFiles: {
    id: 'Upload Files ({count})',
    defaultMessage: 'Upload Files ({count})'
  }
});
const hasFiles = e => {
  return e.dataTransfer.types && e.dataTransfer.types.includes('Files');
};
const DropZoneContent = props => {
  const {
    onOk,
    onCancel,
    pathname,
    children
  } = props;
  const {
    0: isDragOver,
    1: setIsDragOver
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: droppedFiles,
    1: setDroppedFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: totalFiles,
    1: setTotalFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const request = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$content$subreq;
    return ((_state$content$subreq = state.content.subrequests) === null || _state$content$subreq === void 0 ? void 0 : _state$content$subreq[SUBREQUEST]) || {};
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  const uploadedFiles = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.content.uploadedFiles);
  const prevrequestloading = (0,_plone_volto_helpers_Utils_usePrevious__WEBPACK_IMPORTED_MODULE_8__.usePrevious)(request.loading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevrequestloading && request.loaded) {
      onOk();
      setDroppedFiles([]);
    }
  }, [prevrequestloading, request.loaded, onOk]);
  const handleDragEnter = e => {
    if (!hasFiles(e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };
  const handleDragLeave = e => {
    if (!hasFiles(e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false);
    }
  };
  const handleDragOver = e => {
    if (!hasFiles(e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
  };
  const onDrop = async e => {
    e.preventDefault();
    if (!hasFiles(e)) {
      return;
    }
    setIsDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files);
    const validFiles = [];
    for (let i = 0; i < newFiles.length; i++) {
      if ((0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_9__.validateFileUploadSize)(newFiles[i], intl.formatMessage)) {
        await (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_6__.readAsDataURL)(newFiles[i]).then(data => {
          const fields = data.match(/^data:(.*);(.*),(.*)$/);
          newFiles[i].preview = fields[0];
        });
        validFiles.push(newFiles[i]);
      }
    }
    setDroppedFiles(prev => prev.concat(validFiles));
    setTotalFiles(prev => prev + validFiles.length);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    onCancel();
    setDroppedFiles([]);
    setTotalFiles(0);
  };
  const onSubmit = () => {
    Promise.all(droppedFiles.map(file => (0,promise_file_reader__WEBPACK_IMPORTED_MODULE_6__.readAsDataURL)(file))).then(dataUrls => {
      dispatch((0,_plone_volto_actions_content_content__WEBPACK_IMPORTED_MODULE_7__.createContent)(pathname, droppedFiles.map((file, index) => {
        const fields = dataUrls[index].match(/^data:(.*);(.*),(.*)$/);
        const image = fields[1].split('/')[0] === 'image';
        return {
          '@type': image ? 'Image' : 'File',
          title: file.name,
          [image ? 'image' : 'file']: {
            data: fields[3],
            encoding: fields[2],
            'content-type': fields[1],
            filename: file.name
          }
        };
      }), SUBREQUEST));
    });
    handleCloseModal();
  };
  const onRemoveFile = index => {
    const updatedFiles = droppedFiles.filter((file, i) => i !== index);
    setDroppedFiles(updatedFiles);
    setTotalFiles(updatedFiles.length);
  };
  const onChangeFileName = (e, index) => {
    let copyOfFiles = [...droppedFiles];
    let originalFile = droppedFiles[index];
    let newFile = new File([originalFile], e.target.value, {
      type: originalFile.type
    });
    newFile.preview = originalFile.preview;
    newFile.path = e.target.value;
    copyOfFiles[index] = newFile;
    setDroppedFiles(copyOfFiles);
  };
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('contents-dropzone', {
      'drag-over': isDragOver,
      'drag-inactive': !isDragOver
    }),
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: onDrop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, children, isDragOver && __jsx("div", {
    className: "dropzone-overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "dropzone-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: (_plone_volto_icons_upload_svg__WEBPACK_IMPORTED_MODULE_11___default()),
    size: "48px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.dropFiles)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.releaseToAdd))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    open: totalFiles > 0 && showModal,
    onClose: handleCloseModal,
    className: "contents-upload-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, intl.formatMessage(messages.uploadFiles, {
    count: droppedFiles.length
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Dimmer, {
    active: request.loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "progress-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Progress, {
    className: "progress-bar",
    value: uploadedFiles,
    total: totalFiles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, intl.formatMessage(messages.filesUploaded, {
    uploadedFiles
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }), intl.formatMessage(messages.totalFilesToUpload, {
    totalFiles
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, droppedFiles.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {
    compact: true,
    singleLine: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Filename",
    defaultMessage: "Filename",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Last modified",
    defaultMessage: "Last modified",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "File size",
    defaultMessage: "File size",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Preview",
    defaultMessage: "Preview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, droppedFiles.map((file, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {
    className: "upload-row",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    className: "file-name",
    value: file.name,
    onChange: e => onChangeFileName(e, index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, file.lastModifiedDate && __jsx(_plone_volto_components_theme_FormattedDate_FormattedRelativeDate__WEBPACK_IMPORTED_MODULE_13__["default"], {
    date: file.lastModifiedDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  }, filesize__WEBPACK_IMPORTED_MODULE_5___default()(file.size, {
    round: 0
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }, file.type.split('/')[0] === 'image' && __jsx(_plone_volto_components_theme_Image_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
    src: file.preview,
    height: 60,
    className: "ui image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    size: "24px",
    onClick: () => onRemoveFile(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal.Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }, droppedFiles.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    basic: true,
    circular: true,
    primary: true,
    floated: "right",
    icon: "arrow right",
    "aria-label": intl.formatMessage(messages.upload, {
      count: droppedFiles.length
    }),
    onClick: onSubmit,
    title: intl.formatMessage(messages.upload, {
      count: droppedFiles.length
    }),
    size: "big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    basic: true,
    circular: true,
    secondary: true,
    icon: "remove",
    "aria-label": intl.formatMessage(messages.cancel),
    title: intl.formatMessage(messages.cancel),
    floated: "right",
    size: "big",
    onClick: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropZoneContent);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Contents/circle.jsx"
/*!*****************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Contents/circle.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ },

/***/ "./node_modules/@plone/volto/src/constants/Indexes.js"
/*!************************************************************!*\
  !*** ./node_modules/@plone/volto/src/constants/Indexes.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultIndexes: () => (/* binding */ defaultIndexes)
/* harmony export */ });
/**
 * Layouts.
 * @module constants/indexes
 */

const Indexes = {
  sortable_title: {
    label: 'Title',
    type: 'string',
    sort_on: 'sortable_title'
  },
  review_state: {
    label: 'Review state',
    type: 'string'
  },
  ModificationDate: {
    label: 'Last modified',
    type: 'date',
    sort_on: 'modified'
  },
  EffectiveDate: {
    label: 'Publication date',
    type: 'date',
    sort_on: 'effective'
  },
  id: {
    label: 'ID',
    type: 'string',
    sort_on: 'id'
  },
  ExpirationDate: {
    label: 'Expiration date',
    type: 'date'
  },
  CreationDate: {
    label: 'Created on',
    type: 'date',
    sort_on: 'created'
  },
  Subject: {
    label: 'Tags',
    type: 'array'
  },
  portal_type: {
    label: 'Type',
    type: 'string',
    sort_on: 'portal_type'
  },
  is_folderish: {
    label: 'Folder',
    type: 'boolean'
  },
  exclude_from_nav: {
    label: 'Excluded from navigation',
    type: 'boolean'
  },
  getObjSize: {
    label: 'Object Size',
    type: 'string'
  },
  last_comment_date: {
    label: 'Last comment date',
    type: 'date'
  },
  total_comments: {
    label: 'Total comments',
    type: 'number'
  },
  end: {
    label: 'End Date',
    type: 'date'
  },
  Description: {
    label: 'Description',
    type: 'string'
  },
  Creator: {
    label: 'Creator',
    type: 'string'
  },
  location: {
    label: 'Location',
    type: 'string'
  },
  UID: {
    label: 'UID',
    type: 'string'
  },
  start: {
    label: 'Start Date',
    type: 'date'
  },
  Type: {
    label: 'Type',
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Indexes);
const defaultIndexes = ['review_state', 'ModificationDate', 'EffectiveDate'];

/***/ }

};
;
//# sourceMappingURL=Contents.chunk.js.map