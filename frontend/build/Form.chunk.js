exports.ids = ["Form"];
exports.modules = {

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

/***/ "./node_modules/@plone/volto/src/icons/paste.svg"
/*!*******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/paste.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/paste.4a1fddf6.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/redo.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/redo.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/redo.b25d5210.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/icons/undo.svg"
/*!******************************************************!*\
  !*** ./node_modules/@plone/volto/src/icons/undo.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/undo.d0fa9115.svg";

/***/ },

/***/ "./node_modules/@plone/volto/src/actions/blocksClipboard/blocksClipboard.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/actions/blocksClipboard/blocksClipboard.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetBlocksClipboard: () => (/* binding */ resetBlocksClipboard),
/* harmony export */   setBlocksClipboard: () => (/* binding */ setBlocksClipboard)
/* harmony export */ });
/* harmony import */ var _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/constants/ActionTypes */ "./node_modules/@plone/volto/src/constants/ActionTypes.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

/**
 * Copy blocks to clipboard function.
 * @function copyBlocks
 * @param {array} blocksData Block data
 * @returns {Object} Copy action.
 */
function setBlocksClipboard(payload) {
  return _objectSpread({
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCKS_CLIPBOARD
  }, Object.assign({}, payload.cut ? {
    cut: payload.cut.filter(b => !!b)
  } : {}, payload.copy ? {
    copy: payload.copy.filter(b => !!b)
  } : {}));
}

/**
 * Reset blocks clipboard function.
 * @function resetBlocksClipboard
 * @returns {Object} Reset blocks clipboard
 */
function resetBlocksClipboard() {
  return {
    type: _plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.RESET_BLOCKS_CLIPBOARD
  };
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/BlocksForm.jsx"
/*!*************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/BlocksForm.jsx ***!
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
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Edit.jsx");
/* harmony import */ var _plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/manage/DragDropList/DragDropList */ "./node_modules/@plone/volto/src/components/manage/DragDropList/DragDropList.jsx");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_helpers_Utils_useDetectClickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Utils/useDetectClickOutside */ "./node_modules/@plone/volto/src/helpers/Utils/useDetectClickOutside.js");
/* harmony import */ var _plone_volto_helpers_Utils_useEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Utils/useEvent */ "./node_modules/@plone/volto/src/helpers/Utils/useEvent.js");
/* harmony import */ var _EditBlockWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditBlockWrapper */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/EditBlockWrapper.jsx");
/* harmony import */ var _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/actions/sidebar/sidebar */ "./node_modules/@plone/volto/src/actions/sidebar/sidebar.js");
/* harmony import */ var _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/actions/form/form */ "./node_modules/@plone/volto/src/actions/form/form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Order/Order */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Order.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\BlocksForm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;















const BlocksForm = props => {
  const {
    pathname,
    onChangeField,
    properties,
    type,
    navRoot,
    onChangeFormData,
    selectedBlock,
    multiSelected,
    onSelectBlock,
    allowedBlocks,
    showRestricted,
    title,
    description,
    metadata,
    manage,
    children,
    isMainForm = true,
    isContainer,
    stopPropagation,
    disableAddBlockOnEnterKey,
    blocksConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__["default"].blocks.blocksConfig,
    editable = true,
    direction = 'vertical',
    history,
    location,
    token,
    errors,
    blocksErrors
  } = props;
  const {
    0: isClient,
    1: setIsClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
  }, []);
  const blockList = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocks)(properties);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const ClickOutsideListener = () => {
    onSelectBlock(null);
    dispatch((0,_plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_10__.setSidebarTab)(0));
  };
  const ref = (0,_plone_volto_helpers_Utils_useDetectClickOutside__WEBPACK_IMPORTED_MODULE_7__.useDetectClickOutside)({
    onTriggered: ClickOutsideListener,
    triggerKeys: ['Escape'],
    // Disabled feature for now https://github.com/plone/volto/pull/2389#issuecomment-830027413
    disableClick: true,
    disableKeys: !isMainForm
  });
  const handleKeyDown = (e, index, block, node, {
    disableEnter = false,
    disableArrowUp = false,
    disableArrowDown = false
  } = {}) => {
    const isMultipleSelection = e.shiftKey;
    if (e.key === 'ArrowUp' && !disableArrowUp) {
      onFocusPreviousBlock(block, node, isMultipleSelection);
      e.preventDefault();
    }
    if (e.key === 'ArrowDown' && !disableArrowDown) {
      onFocusNextBlock(block, node, isMultipleSelection);
      e.preventDefault();
    }
    const blockConfig = blocksConfig[properties[(0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(properties)][block]['@type']];
    if (e.key === 'Enter' && !disableEnter && !blockConfig.disableEnter) {
      if (!disableAddBlockOnEnterKey) {
        onSelectBlock(onAddBlock(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__["default"].settings.defaultBlockType, index + 1));
      }
      e.preventDefault();
    }
  };
  const onFocusPreviousBlock = (currentBlock, blockNode, isMultipleSelection) => {
    const prev = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.previousBlockId)(properties, currentBlock);
    if (prev === null) return;
    blockNode.blur();
    onSelectBlock(prev, isMultipleSelection);
  };
  const onFocusNextBlock = (currentBlock, blockNode, isMultipleSelection) => {
    const next = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.nextBlockId)(properties, currentBlock);
    if (next === null) return;
    blockNode.blur();
    onSelectBlock(next, isMultipleSelection);
  };
  const onMutateBlock = (id, value) => {
    const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.mutateBlock)(properties, id, value, null, intl);
    onChangeFormData(newFormData);
  };
  const onInsertBlock = (id, value, current) => {
    const [newId, newFormData] = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.insertBlock)(properties, id, value, current, _plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__["default"].experimental.addBlockButton.enabled ? 1 : 0, null, intl);
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(newFormData);
    const blockData = newFormData[blocksFieldname][newId];
    newFormData[blocksFieldname][newId] = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.applyBlockDefaults)({
      data: blockData,
      intl,
      metadata,
      properties
    });
    onChangeFormData(newFormData);
    return newId;
  };
  const onAddBlock = (type, index) => {
    if (editable) {
      const [id, newFormData] = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.addBlock)(properties, type, index, null, intl);
      const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(newFormData);
      const blockData = newFormData[blocksFieldname][id];
      newFormData[blocksFieldname][id] = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.applyBlockDefaults)({
        data: blockData,
        intl,
        metadata,
        properties
      });
      onChangeFormData(newFormData);
      return id;
    }
  };
  const onChangeBlock = (id, value) => {
    const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.changeBlock)(properties, id, value);
    onChangeFormData(newFormData);
  };
  const onDeleteBlock = (id, selectPrev) => {
    const previous = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.previousBlockId)(properties, id);
    const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.deleteBlock)(properties, id, intl);
    onChangeFormData(newFormData);
    onSelectBlock(selectPrev ? previous : null);
  };
  const onMoveBlock = (dragIndex, hoverIndex) => {
    const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.moveBlock)(properties, dragIndex, hoverIndex);
    onChangeFormData(newFormData);
  };
  const onMoveBlockEnhanced = ({
    source,
    destination
  }) => {
    const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.moveBlockEnhanced)(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(properties), {
      source,
      destination
    });
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksFieldname)(newFormData);
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksLayoutFieldname)(newFormData);
    let error = false;
    const allowedBlocks = Object.keys(blocksConfig);
    lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(newFormData[blocksLayoutFieldname].items, id => {
      var _block$blocksLayoutFi;
      const block = newFormData[blocksFieldname][id];
      if (!allowedBlocks.includes(block['@type'])) {
        error = true;
      }
      if (Array.isArray((_block$blocksLayoutFi = block[blocksLayoutFieldname]) === null || _block$blocksLayoutFi === void 0 ? void 0 : _block$blocksLayoutFi.items)) {
        const size = block[blocksLayoutFieldname].items.length;
        const allowedSubBlocks = [...(blocksConfig[block['@type']].allowedBlocks || allowedBlocks), 'empty'] || ['empty'];
        if (size < 1 || size > (blocksConfig[block['@type']].maxLength || 4)) {
          error = true;
        }
        lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(block[blocksLayoutFieldname].items, subId => {
          const subBlock = block[blocksFieldname][subId];
          if (!allowedSubBlocks.includes(subBlock['@type'])) {
            error = true;
          }
        });
      }
    });
    if (!error) {
      onChangeFormData(newFormData);
      dispatch((0,_plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_11__.setUIState)({
        selected: null,
        multiSelected: [],
        gridSelected: null
      }));
    }
  };
  const defaultBlockWrapper = ({
    draginfo
  }, editBlock, blockProps) => __jsx(_EditBlockWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    draginfo: draginfo,
    blockProps: blockProps,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }
  }, editBlock);
  const editBlockWrapper = children || defaultBlockWrapper;

  // Remove invalid blocks on saving
  // Note they are already filtered by DragDropList, but we also want them
  // to be removed when the user saves the page next. Otherwise the invalid
  // blocks would linger for ever.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const invalidBlockIds = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getInvalidBlockLayoutIds)(properties);
    if (invalidBlockIds.length === 0) return;
    let newFormData = properties;
    for (const id of invalidBlockIds) {
      newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.deleteBlock)(newFormData, id, intl);
    }
    onChangeFormData(newFormData);
  }, [properties, intl, onChangeFormData]);
  (0,_plone_volto_helpers_Utils_useEvent__WEBPACK_IMPORTED_MODULE_8__.useEvent)('voltoClickBelowContent', () => {
    if (!_plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__["default"].experimental.addBlockButton.enabled || !isMainForm) return;
    onSelectBlock(onAddBlock(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_13__["default"].settings.defaultBlockType, blockList.length));
  });
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isMainForm && isClient && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_14__.createPortal)(__jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx(_Order_Order__WEBPACK_IMPORTED_MODULE_15__["default"], {
    items: (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.getBlocksHierarchy)(properties),
    onMoveBlock: onMoveBlockEnhanced,
    onDeleteBlock: onDeleteBlock,
    onSelectBlock: onSelectBlock,
    removable: true,
    errors: blocksErrors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  })), document.getElementById('sidebar-order')), __jsx("div", {
    className: "blocks-form",
    role: "presentation",
    ref: ref,
    onKeyDown: e => {
      if (stopPropagation) {
        e.stopPropagation();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, __jsx("fieldset", {
    className: "invisible",
    disabled: !editable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_manage_DragDropList_DragDropList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    childList: blockList,
    onMoveItem: result => {
      const {
        source,
        destination
      } = result;
      if (!destination) {
        return;
      }
      const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_6__.moveBlock)(properties, source.index, destination.index);
      onChangeFormData(newFormData);
      return true;
    },
    direction: direction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, dragProps => {
    const {
      child,
      childId,
      index
    } = dragProps;
    const blockProps = {
      allowedBlocks,
      showRestricted,
      block: childId,
      data: child,
      handleKeyDown,
      id: childId,
      formTitle: title,
      formDescription: description,
      index,
      manage,
      onAddBlock,
      onInsertBlock,
      onChangeBlock,
      onChangeField,
      onChangeFormData,
      onDeleteBlock,
      onFocusNextBlock,
      onFocusPreviousBlock,
      onMoveBlock,
      onMutateBlock,
      onSelectBlock,
      pathname,
      metadata,
      properties,
      contentType: type,
      navRoot,
      blocksConfig,
      selected: selectedBlock === childId,
      multiSelected: multiSelected === null || multiSelected === void 0 ? void 0 : multiSelected.includes(childId),
      type: child['@type'],
      editable,
      showBlockChooser: selectedBlock === childId,
      detached: isContainer,
      isContainer,
      // Properties to pass to the BlocksForm to match the View ones
      content: properties,
      history,
      location,
      token,
      errors,
      blocksErrors
    };
    return editBlockWrapper(dragProps, __jsx(_Edit__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: childId
    }, blockProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 17
      }
    })), blockProps);
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocksForm);

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultEdit.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/DefaultEdit.jsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/EditBlockWrapper.jsx"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/EditBlockWrapper.jsx ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/icons/drag.svg */ "./node_modules/@plone/volto/src/icons/drag.svg");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/includes */ "lodash/includes");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isBoolean */ "lodash/isBoolean");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_components_manage_BlockChooser_BlockChooserButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/components/manage/BlockChooser/BlockChooserButton */ "./node_modules/@plone/volto/src/components/manage/BlockChooser/BlockChooserButton.jsx");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\EditBlockWrapper.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  delete: {
    id: 'delete',
    defaultMessage: 'delete'
  },
  delete_block: {
    id: 'delete_block',
    defaultMessage: 'delete {type} block'
  },
  drag_block: {
    id: 'drag_block',
    defaultMessage: 'drag {type} block'
  }
});
const EditBlockWrapper = props => {
  const hideHandler = data => {
    return !!data.fixed || !_plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__["default"].experimental.addBlockButton.enabled && !((0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.blockHasValue)(data) && props.blockProps.editable);
  };
  const {
    intl,
    blockProps,
    draginfo,
    children
  } = props;
  const {
    allowedBlocks,
    showRestricted,
    block,
    blocksConfig,
    selected,
    type,
    onChangeBlock,
    onDeleteBlock,
    onInsertBlock,
    onSelectBlock,
    onMutateBlock,
    data: originalData,
    editable,
    properties,
    showBlockChooser,
    navRoot,
    contentType
  } = blockProps;
  const data = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.applyBlockDefaults)(_objectSpread(_objectSpread({
    data: originalData
  }, blockProps), {}, {
    intl
  }));
  const visible = selected && !hideHandler(data);
  const required = lodash_isBoolean__WEBPACK_IMPORTED_MODULE_6___default()(data.required) ? data.required : lodash_includes__WEBPACK_IMPORTED_MODULE_5___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__["default"].blocks.requiredBlocks, type);
  let classNames = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.buildStyleClassNamesFromData)(data.styles);
  classNames = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.buildStyleClassNamesExtenders)({
    block,
    content: properties,
    data,
    classNames
  });
  const style = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.buildStyleObjectFromData)(data);

  // We need to merge the StyleWrapper styles with the draggable props from b-D&D
  const styleMergedWithDragProps = _objectSpread(_objectSpread({}, draginfo.draggableProps), {}, {
    style: _objectSpread(_objectSpread({}, style), draginfo.draggableProps.style)
  });
  return __jsx("div", _extends({
    ref: draginfo.innerRef
  }, styleMergedWithDragProps, {
    // Right now, we can have the alignment information in the styles property or in the
    // block data root, we inject the classname here for having control over the whole
    // Block Edit wrapper
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(`block-editor-${data['@type']}`, classNames, {
      [data.align]: data.align
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("div", _extends({
    style: {
      visibility: visible ? 'visible' : 'hidden',
      display: 'inline-block'
    }
  }, draginfo.dragHandleProps, {
    className: "drag handle wrapper",
    "aria-label": intl.formatMessage(messages.drag_block, {
      type
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: (_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: `ui drag block inner ${type}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, children, selected && !required && editable && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "button",
    icon: true,
    basic: true,
    onClick: () => onDeleteBlock(block, true),
    className: "delete-button",
    "aria-label": intl.formatMessage(messages.delete_block, {
      type
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_11___default()),
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })), _plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__["default"].experimental.addBlockButton.enabled && showBlockChooser && __jsx(_plone_volto_components_manage_BlockChooser_BlockChooserButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data,
    block: block,
    onInsertBlock: (id, value) => {
      if ((0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.blockHasValue)(data)) {
        onSelectBlock(onInsertBlock(id, value));
      } else {
        const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.getBlocksFieldname)(properties);
        const newFormData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_2__.applyBlockInitialValue)({
          id,
          value,
          blocksConfig,
          formData: _objectSpread(_objectSpread({}, properties), {}, {
            [blocksFieldname]: _objectSpread(_objectSpread({}, properties[blocksFieldname]), {}, {
              [id]: value || null
            })
          }),
          intl
        });
        const newValue = newFormData[blocksFieldname][id];
        onChangeBlock(id, newValue);
      }
    },
    onMutateBlock: onMutateBlock,
    allowedBlocks: allowedBlocks,
    showRestricted: showRestricted,
    blocksConfig: blocksConfig,
    size: "24px",
    properties: properties,
    navRoot: navRoot,
    contentType: contentType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(EditBlockWrapper));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Item.jsx"
/*!*************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Item.jsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/includes */ "lodash/includes");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/actions/form/form */ "./node_modules/@plone/volto/src/actions/form/form.js");
/* harmony import */ var _plone_volto_helpers_I18n_I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/I18n/I18n */ "./node_modules/@plone/volto/src/helpers/I18n/I18n.ts");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/drag.svg */ "./node_modules/@plone/volto/src/icons/drag.svg");
/* harmony import */ var _plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["clone", "data", "depth", "disableSelection", "disableInteraction", "ghost", "id", "handleProps", "indentationWidth", "onRemove", "onSelectBlock", "parentId", "parentType", "style", "value", "wrapperRef", "errors"];
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\Order\\Item.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;











const Item = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  var _config$blocks$blocks, _config$blocks$blocks2, _config$blocks$blocks3;
  let {
      clone,
      data,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      id,
      handleProps,
      indentationWidth,
      onRemove,
      onSelectBlock,
      parentId,
      parentType,
      style,
      value,
      wrapperRef,
      errors
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
  const selected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.form.ui.selected);
  const hovered = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.form.ui.hovered);
  const multiSelected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.form.ui.multiSelected);
  const gridSelected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.form.ui.gridSelected);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const icon = ((_config$blocks$blocks = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_7__["default"].blocks.blocksConfig[data === null || data === void 0 ? void 0 : data['@type']]) === null || _config$blocks$blocks === void 0 ? void 0 : _config$blocks$blocks.icon) || ((_config$blocks$blocks2 = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_7__["default"].blocks.blocksConfig.title) === null || _config$blocks$blocks2 === void 0 ? void 0 : _config$blocks$blocks2.icon);
  const required = typeof (data === null || data === void 0 ? void 0 : data.required) === 'boolean' ? data.required : lodash_includes__WEBPACK_IMPORTED_MODULE_3___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_7__["default"].blocks.requiredBlocks, data === null || data === void 0 ? void 0 : data['@type']);
  const fixed = !!(data !== null && data !== void 0 && data.fixed);
  const configTitle = (_config$blocks$blocks3 = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_7__["default"].blocks.blocksConfig[data === null || data === void 0 ? void 0 : data['@type']]) === null || _config$blocks$blocks3 === void 0 ? void 0 : _config$blocks$blocks3.title;
  const blockTitle = (data === null || data === void 0 ? void 0 : data.plaintext) || (0,_plone_volto_helpers_I18n_I18n__WEBPACK_IMPORTED_MODULE_6__.formatMessageWithFallback)(intl, configTitle) || (data === null || data === void 0 ? void 0 : data.title);
  return __jsx("li", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('tree-item-wrapper', clone && 'clone', ghost && 'ghost', disableSelection && 'disable-selection', disableInteraction && 'disable-interaction'),
    role: "presentation",
    onMouseOver: () => dispatch((0,_plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_5__.setUIState)({
      hovered: id
    })),
    onFocus: () => dispatch((0,_plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_5__.setUIState)({
      hovered: id
    })),
    onMouseLeave: () => dispatch((0,_plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_5__.setUIState)({
      hovered: null
    })),
    onClick: e => {
      if (depth === 0) {
        const isMultipleSelection = e.shiftKey || e.ctrlKey || e.metaKey;
        selected !== id && onSelectBlock(id, selected === id ? false : isMultipleSelection, e);
      } else {
        dispatch((0,_plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_5__.setUIState)({
          selected: parentId,
          multiSelected: [],
          gridSelected: id
        }));
      }
    },
    ref: wrapperRef,
    style: {
      '--spacing': `${indentationWidth * depth}px`
    }
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('tree-item', (selected === id || gridSelected === id) && 'selected', hovered === id && 'hovered', lodash_includes__WEBPACK_IMPORTED_MODULE_3___default()(multiSelected, id) && 'multiSelected', `depth-${depth}`),
    ref: ref,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, !fixed && __jsx("button", _extends({
    ref: ref
  }, handleProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('action', 'drag'),
    tabIndex: 0,
    "data-cypress": "draggable-handle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: (_plone_volto_icons_drag_svg__WEBPACK_IMPORTED_MODULE_10___default()),
    size: "16px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text', {
      errored: errors && Object.keys(errors).length > 0
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, icon && __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: icon,
    size: "20px",
    style: {
      verticalAlign: 'middle'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }), ' ', blockTitle), !clone && onRemove && !required && __jsx("button", {
    onClick: onRemove,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('action', 'delete'),
    tabIndex: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_9___default()),
    size: "18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }))));
});

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Order.jsx"
/*!**************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Order.jsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* binding */ Order),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/utilities.js");
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SortableItem */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/SortableItem.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\Order\\Order.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  invalidBlockType: {
    id: 'You can not move this type of block to the new location',
    defaultMessage: 'You can not move this type of block to the new location'
  }
});
function Order({
  items = [],
  onMoveBlock,
  onDeleteBlock,
  onSelectBlock,
  indentationWidth = 25,
  removable,
  dndKitCore,
  dndKitSortable,
  dndKitUtilities,
  errors
}) {
  const {
    0: activeId,
    1: setActiveId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: overId,
    1: setOverId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: offsetLeft,
    1: setOffsetLeft
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: currentPosition,
    1: setCurrentPosition
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    MeasuringStrategy,
    defaultDropAnimation
  } = dndKitCore;
  const {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy
  } = dndKitSortable;
  const {
    CSS
  } = dndKitUtilities;
  const measuring = {
    droppable: {
      strategy: MeasuringStrategy.Always
    }
  };
  const dropAnimationConfig = {
    keyframes({
      transform
    }) {
      return [{
        opacity: 1,
        transform: CSS.Transform.toString(transform.initial)
      }, {
        opacity: 0,
        transform: CSS.Transform.toString(_objectSpread(_objectSpread({}, transform.final), {}, {
          x: transform.final.x + 5,
          y: transform.final.y + 5
        }))
      }];
    },
    easing: 'ease-out',
    sideEffects({
      active
    }) {
      active.node.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: defaultDropAnimation.duration,
        easing: defaultDropAnimation.easing
      });
    }
  };
  const flattenedItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utilities__WEBPACK_IMPORTED_MODULE_7__.removeChildrenOf)((0,_utilities__WEBPACK_IMPORTED_MODULE_7__.flattenTree)(items), activeId ? [activeId] : []), [activeId, items]);
  const projected = activeId && overId ? (0,_utilities__WEBPACK_IMPORTED_MODULE_7__.getProjection)(flattenedItems, activeId, overId, offsetLeft, indentationWidth, arrayMove) : null;
  const sensorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    items: flattenedItems,
    offset: offsetLeft
  });
  const sensors = useSensors(useSensor(PointerSensor));
  const sortedIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => flattenedItems.map(({
    id
  }) => id), [flattenedItems]);
  const activeItem = activeId ? flattenedItems.find(({
    id
  }) => id === activeId) : null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    sensorContext.current = {
      items: flattenedItems,
      offset: offsetLeft
    };
  }, [flattenedItems, offsetLeft]);
  const announcements = {
    onDragStart({
      active
    }) {
      return `Picked up ${active.id}.`;
    },
    onDragMove({
      active,
      over
    }) {
      return getMovementAnnouncement('onDragMove', active.id, over === null || over === void 0 ? void 0 : over.id);
    },
    onDragOver({
      active,
      over
    }) {
      return getMovementAnnouncement('onDragOver', active.id, over === null || over === void 0 ? void 0 : over.id);
    },
    onDragEnd({
      active,
      over
    }) {
      return getMovementAnnouncement('onDragEnd', active.id, over === null || over === void 0 ? void 0 : over.id);
    },
    onDragCancel({
      active
    }) {
      return `Moving was cancelled. ${active.id} was dropped in its original position.`;
    }
  };
  return __jsx(DndContext, {
    accessibility: {
      announcements
    },
    sensors: sensors,
    collisionDetection: closestCenter,
    measuring: measuring,
    onDragStart: handleDragStart,
    onDragMove: handleDragMove,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx(SortableContext, {
    items: sortedIds,
    strategy: verticalListSortingStrategy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, flattenedItems.map(({
    id,
    parentId,
    parentType,
    depth,
    data
  }) => __jsx(_SortableItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: id,
    id: id,
    parentId: parentId,
    parentType: parentType,
    data: data,
    depth: id === activeId && projected ? projected.depth : depth,
    indentationWidth: indentationWidth,
    onRemove: removable ? () => handleRemove(id) : undefined,
    onSelectBlock: onSelectBlock,
    errors: (errors === null || errors === void 0 ? void 0 : errors[id]) || {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  })), /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(__jsx(DragOverlay, {
    dropAnimation: dropAnimationConfig,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, activeId && activeItem ? __jsx(_SortableItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: activeId,
    depth: activeItem.depth,
    clone: true,
    data: lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(flattenedItems, {
      id: activeId
    }).data,
    indentationWidth: indentationWidth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }) : null), document.body)));
  function handleDragStart({
    active: {
      id: activeId
    }
  }) {
    setActiveId(activeId);
    setOverId(activeId);
    const activeItem = flattenedItems.find(({
      id
    }) => id === activeId);
    if (activeItem) {
      setCurrentPosition({
        parentId: activeItem.parentId,
        parentType: activeItem.parentType,
        overId: activeId
      });
    }
    document.body.style.setProperty('cursor', 'grabbing');
  }
  function handleDragMove({
    delta
  }) {
    setOffsetLeft(delta.x);
  }
  function handleDragOver({
    over
  }) {
    var _over$id;
    setOverId((_over$id = over === null || over === void 0 ? void 0 : over.id) !== null && _over$id !== void 0 ? _over$id : null);
  }
  function handleDragEnd({
    active,
    over
  }) {
    if (projected && over) {
      const {
        depth,
        parentId,
        parentType
      } = projected;
      const clonedItems = JSON.parse(JSON.stringify(flattenedItems));
      const overIndex = clonedItems.findIndex(({
        id
      }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({
        id
      }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];
      const oldParentId = activeTreeItem.parentId;
      const oldParentType = activeTreeItem.parentType;
      clonedItems[activeIndex] = _objectSpread(_objectSpread({}, activeTreeItem), {}, {
        depth,
        parentId,
        parentType
      });

      // Translate position depending on parent
      if (parentId === oldParentId) {
        // Move from and to toplevel or move within the same sub block

        let destIndex = clonedItems[overIndex].index;
        if (clonedItems[overIndex].depth > clonedItems[activeIndex].depth) {
          destIndex = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(clonedItems, {
            id: clonedItems[overIndex].parentId
          }).index;
        }
        onMoveBlock({
          source: {
            position: clonedItems[activeIndex].index,
            parent: oldParentId,
            id: active.id
          },
          destination: {
            position: destIndex,
            parent: parentId
          }
        });
      } else if (parentId && oldParentId) {
        // Move from one subblock to another

        if (parentType === oldParentType) {
          // Moving within the same type of subblock
          onMoveBlock({
            source: {
              position: clonedItems[activeIndex].index,
              parent: oldParentId,
              id: active.id
            },
            destination: {
              position: overIndex < activeIndex ? clonedItems[overIndex - 1].parentId ? clonedItems[overIndex - 1].index + 1 : clonedItems[overIndex].index : overIndex + 1 < clonedItems.length ? clonedItems[overIndex + 1].index : clonedItems[overIndex].index + 1,
              parent: parentId
            }
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: true,
            title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_6__.messages.error),
            content: intl.formatMessage(messages.invalidBlockType),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 13
            }
          }));
        }
      } else if (oldParentId) {
        // Moving to the main container from a subblock

        if (oldParentType === 'gridBlock') {
          onMoveBlock({
            source: {
              position: clonedItems[activeIndex].index,
              parent: oldParentId,
              id: active.id
            },
            destination: {
              position: overIndex > activeIndex ? overIndex + 1 < clonedItems.length ? clonedItems[overIndex + 1].index : clonedItems[overIndex].index + 1 : clonedItems[overIndex].index,
              parent: parentId
            }
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: true,
            title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_6__.messages.error),
            content: intl.formatMessage(messages.invalidBlockType),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 13
            }
          }));
        }
      } else {
        // Moving from the main container to a subblock

        if (parentType === 'gridBlock') {
          onMoveBlock({
            source: {
              position: clonedItems[activeIndex].index,
              parent: oldParentId,
              id: active.id
            },
            destination: {
              position: overIndex < activeIndex ? clonedItems[overIndex - 1].parentId ? clonedItems[overIndex - 1].index + 1 : clonedItems[overIndex].index : overIndex + 1 < clonedItems.length ? clonedItems[overIndex + 1].index : clonedItems[overIndex].index + 1,
              parent: parentId
            }
          });
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: true,
            title: intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_6__.messages.error),
            content: intl.formatMessage(messages.invalidBlockType),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 13
            }
          }));
        }
      }
    }
    resetState();
  }
  function handleDragCancel() {
    resetState();
  }
  function resetState() {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);
    setCurrentPosition(null);
    document.body.style.setProperty('cursor', '');
  }
  function handleRemove(id) {
    onDeleteBlock(id);
  }
  function getMovementAnnouncement(eventName, activeId, overId) {
    if (overId && projected) {
      if (eventName !== 'onDragEnd') {
        if (currentPosition && projected.parentId === currentPosition.parentId && overId === currentPosition.overId) {
          return;
        } else {
          setCurrentPosition({
            parentId: projected.parentId,
            parentType: projected.parentType,
            overId
          });
        }
      }
      const clonedItems = JSON.parse(JSON.stringify((0,_utilities__WEBPACK_IMPORTED_MODULE_7__.flattenTree)(items)));
      const overIndex = clonedItems.findIndex(({
        id
      }) => id === overId);
      const activeIndex = clonedItems.findIndex(({
        id
      }) => id === activeId);
      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const previousItem = sortedItems[overIndex - 1];
      let announcement;
      const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
      const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';
      if (!previousItem) {
        const nextItem = sortedItems[overIndex + 1];
        announcement = `${activeId} was ${movedVerb} before ${nextItem.id}.`;
      } else {
        if (projected.depth > previousItem.depth) {
          announcement = `${activeId} was ${nestedVerb} under ${previousItem.id}.`;
        } else {
          let previousSibling = previousItem;
          while (previousSibling && projected.depth < previousSibling.depth) {
            const parentId = previousSibling.parentId;
            previousSibling = sortedItems.find(({
              id
            }) => id === parentId);
          }
          if (previousSibling) {
            announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
          }
        }
      }
      return announcement;
    }
    return;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_9__.injectLazyLibs)(['dndKitCore', 'dndKitSortable', 'dndKitUtilities'])(Order));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/SortableItem.jsx"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/SortableItem.jsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableItem: () => (/* binding */ SortableItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/Item.jsx");
const _excluded = ["id", "depth", "dndKitSortable", "dndKitUtilities"];
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Blocks\\Block\\Order\\SortableItem.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;


const animateLayoutChanges = ({
  isSorting,
  wasDragging
}) => isSorting || wasDragging ? false : true;
function SortableItem(_ref) {
  let {
      id,
      depth,
      dndKitSortable,
      dndKitUtilities
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    useSortable
  } = dndKitSortable;
  const {
    CSS
  } = dndKitUtilities;
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition
  } = useSortable({
    id,
    animateLayoutChanges
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition
  };
  return __jsx(_Item__WEBPACK_IMPORTED_MODULE_2__.Item, _extends({
    ref: setDraggableNodeRef,
    wrapperRef: setDroppableNodeRef,
    style: style,
    depth: depth,
    ghost: isDragging,
    disableSelection: false,
    disableInteraction: isSorting,
    id: id,
    handleProps: _objectSpread(_objectSpread({}, attributes), listeners)
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_1__.injectLazyLibs)(['dndKitSortable', 'dndKitUtilities'])(SortableItem));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/utilities.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Order/utilities.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findItem: () => (/* binding */ findItem),
/* harmony export */   flattenTree: () => (/* binding */ flattenTree),
/* harmony export */   getProjection: () => (/* binding */ getProjection),
/* harmony export */   removeChildrenOf: () => (/* binding */ removeChildrenOf)
/* harmony export */ });
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

function getDragDepth(offset, indentationWidth) {
  return Math.round(offset / indentationWidth);
}
function getProjection(items, activeId, overId, dragOffset, indentationWidth, arrayMove) {
  const overItemIndex = items.findIndex(({
    id
  }) => id === overId);
  const activeItemIndex = items.findIndex(({
    id
  }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = getDragDepth(dragOffset, indentationWidth);
  const projectedDepth = activeItem.depth + dragDepth;
  const maxDepth = getMaxDepth({
    previousItem
  });
  const minDepth = getMinDepth({
    nextItem
  });
  let depth = projectedDepth;
  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }
  return _objectSpread({
    depth,
    maxDepth,
    minDepth
  }, getParent());
  function getParent() {
    if (depth === 0 || !previousItem) {
      return {
        parentId: null,
        parentType: null
      };
    }
    if (depth <= previousItem.depth) {
      return {
        parentId: previousItem.parentId,
        parentType: previousItem.parentType
      };
    }
    if (depth > previousItem.depth) {
      var _previousItem$data;
      return {
        parentId: previousItem.id,
        parentType: ((_previousItem$data = previousItem.data) === null || _previousItem$data === void 0 ? void 0 : _previousItem$data['@type']) || null
      };
    }
    const newParent = newItems.slice(0, overItemIndex).reverse().find(item => item.depth === depth);
    return newParent ? {
      parentId: newParent.parentId,
      parentType: newParent.parentType
    } : {
      parentId: null,
      parentType: null
    };
  }
}
function getMaxDepth({
  previousItem
}) {
  const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__.getBlocksLayoutFieldname)((previousItem === null || previousItem === void 0 ? void 0 : previousItem.data) || {});
  if (previousItem) {
    var _previousItem$data2, _previousItem$data2$b;
    return lodash_isArray__WEBPACK_IMPORTED_MODULE_0___default()((_previousItem$data2 = previousItem.data) === null || _previousItem$data2 === void 0 ? void 0 : (_previousItem$data2$b = _previousItem$data2[blocksLayoutFieldname]) === null || _previousItem$data2$b === void 0 ? void 0 : _previousItem$data2$b.items) ? previousItem.depth + 1 : previousItem.depth;
  }
  return 0;
}
function getMinDepth({
  nextItem
}) {
  if (nextItem) {
    return nextItem.depth;
  }
  return 0;
}
function flatten(items = [], parentId = null, parentType = null, depth = 0) {
  return items.reduce((acc, item, index) => {
    var _item$data;
    return [...acc, _objectSpread(_objectSpread({}, item), {}, {
      parentId,
      parentType,
      depth,
      index
    }), ...flatten(item.children, item.id, (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data['@type'], depth + 1)];
  }, []);
}
function flattenTree(items) {
  return flatten(items);
}
function findItem(items, itemId) {
  return items.find(({
    id
  }) => id === itemId);
}
function removeChildrenOf(items, ids) {
  const excludeParentIds = [...ids];
  return items.filter(item => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }
    return true;
  });
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Blocks/Block/Settings.jsx"
/*!***********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Blocks/Block/Settings.jsx ***!
  \***********************************************************************************/
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

/***/ "./node_modules/@plone/volto/src/components/manage/Form/BlockDataForm.jsx"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/BlockDataForm.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockDataForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_helpers_Extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/helpers/Extensions */ "./node_modules/@plone/volto/src/helpers/Extensions/index.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\BlockDataForm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;


const EnhancedBlockDataForm = (0,_plone_volto_helpers_Extensions__WEBPACK_IMPORTED_MODULE_2__.withVariationSchemaEnhancer)(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_1__.InlineForm);
function BlockDataForm(props) {
  const {
    onChangeBlock,
    block,
    applySchemaEnhancers = true
  } = props;
  if (!onChangeBlock) {
    // eslint-disable-next-line no-console
    console.warn('BlockDataForm component is used without passing down onChangeBlock as props');
  }
  const onChangeFormData = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(data => onChangeBlock(block, data), [block, onChangeBlock]);
  const Form = applySchemaEnhancers ? EnhancedBlockDataForm : _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_1__.InlineForm;
  return __jsx(Form, _extends({}, props, {
    onChangeFormData: onChangeBlock ? onChangeFormData : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }));
}

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/BlocksToolbar.jsx"
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/BlocksToolbar.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlocksToolbarComponent: () => (/* binding */ BlocksToolbarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/components/manage/Pluggable */ "./node_modules/@plone/volto/src/components/manage/Pluggable/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-localstorage-simple */ "redux-localstorage-simple");
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/without */ "lodash/without");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_actions_blocksClipboard_blocksClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/actions/blocksClipboard/blocksClipboard */ "./node_modules/@plone/volto/src/actions/blocksClipboard/blocksClipboard.js");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/copy.svg */ "./node_modules/@plone/volto/src/icons/copy.svg");
/* harmony import */ var _plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/cut.svg */ "./node_modules/@plone/volto/src/icons/cut.svg");
/* harmony import */ var _plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @plone/volto/icons/paste.svg */ "./node_modules/@plone/volto/src/icons/paste.svg");
/* harmony import */ var _plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _plone_volto_helpers_Blocks_cloneBlocks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/cloneBlocks */ "./node_modules/@plone/volto/src/helpers/Blocks/cloneBlocks.ts");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\BlocksToolbar.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;



















class BlocksToolbarComponent extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.copyBlocksToClipboard = this.copyBlocksToClipboard.bind(this);
    this.cutBlocksToClipboard = this.cutBlocksToClipboard.bind(this);
    this.deleteBlocks = this.deleteBlocks.bind(this);
    this.loadFromStorage = this.loadFromStorage.bind(this);
    this.pasteBlocks = this.pasteBlocks.bind(this);
    this.setBlocksClipboard = this.setBlocksClipboard.bind(this);
  }
  loadFromStorage() {
    var _load;
    const clipboard = (_load = (0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_9__.load)({
      states: ['blocksClipboard']
    })) === null || _load === void 0 ? void 0 : _load.blocksClipboard;
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default()(clipboard, this.props.blocksClipboard)) this.props.setBlocksClipboard(clipboard || {});
  }
  componentDidMount() {
    window.addEventListener('storage', this.loadFromStorage, true);
  }
  componentWillUnmount() {
    window.removeEventListener('storage', this.loadFromStorage);
  }
  deleteBlocks() {
    const blockIds = this.props.selectedBlocks;
    const {
      formData
    } = this.props;
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__.getBlocksFieldname)(formData);
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__.getBlocksLayoutFieldname)(formData);

    // Might need ReactDOM.unstable_batchedUpdates()
    this.props.onSelectBlock(null);
    const newBlockData = {
      [blocksFieldname]: lodash_omit__WEBPACK_IMPORTED_MODULE_11___default()(formData[blocksFieldname], blockIds),
      [blocksLayoutFieldname]: _objectSpread(_objectSpread({}, formData[blocksLayoutFieldname]), {}, {
        items: lodash_without__WEBPACK_IMPORTED_MODULE_12___default()(formData[blocksLayoutFieldname].items, ...blockIds)
      })
    };
    this.props.onChangeBlocks(newBlockData);
  }
  copyBlocksToClipboard() {
    this.setBlocksClipboard('copy');
  }
  cutBlocksToClipboard() {
    this.setBlocksClipboard('cut');
    this.deleteBlocks();
  }
  setBlocksClipboard(actionType) {
    const {
      formData
    } = this.props;
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__.getBlocksFieldname)(formData);
    const blocks = formData[blocksFieldname];
    const blocksData = this.props.selectedBlocks.map(blockId => [blockId, blocks[blockId]]).filter(([blockId]) => !!blockId); // Removes null blocks
    this.props.setBlocksClipboard({
      [actionType]: blocksData
    });
    this.props.onSetSelectedBlocks([]);
  }
  pasteBlocks(e) {
    const {
      formData,
      blocksClipboard = {},
      selectedBlock
    } = this.props;
    const mode = Object.keys(blocksClipboard).includes('cut') ? 'cut' : 'copy';
    const blocksData = blocksClipboard[mode] || [];
    const cloneWithIds = blocksData.filter(([blockId, blockData]) => blockId && !!blockData['@type']) // Removes null blocks
    .map(([blockId, blockData]) => {
      const blockConfig = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__["default"].blocks.blocksConfig[blockData['@type']];
      return mode === 'copy' ? blockConfig.cloneData ? blockConfig.cloneData(blockData) : [(0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)(), (0,_plone_volto_helpers_Blocks_cloneBlocks__WEBPACK_IMPORTED_MODULE_19__.cloneBlocks)(blockData)] : [blockId, blockData]; // if cut/pasting blocks, we don't clone
    }).filter(info => !!info); // some blocks may refuse to be copied
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__.getBlocksFieldname)(formData);
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_5__.getBlocksLayoutFieldname)(formData);
    const selectedIndex = formData[blocksLayoutFieldname].items.indexOf(selectedBlock) + 1;
    const newBlockData = {
      [blocksFieldname]: _objectSpread(_objectSpread({}, formData[blocksFieldname]), Object.assign({}, ...cloneWithIds.map(([id, data]) => ({
        [id]: data
      })))),
      [blocksLayoutFieldname]: _objectSpread(_objectSpread({}, formData[blocksLayoutFieldname]), {}, {
        items: [...formData[blocksLayoutFieldname].items.slice(0, selectedIndex), ...cloneWithIds.map(([id]) => id), ...formData[blocksLayoutFieldname].items.slice(selectedIndex)]
      })
    };
    if (!(e.ctrlKey || e.metaKey)) this.props.resetBlocksClipboard();
    this.props.onChangeBlocks(newBlockData);
  }
  render() {
    const {
      blocksClipboard = {},
      selectedBlock,
      selectedBlocks,
      intl
    } = this.props;
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, selectedBlocks.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_7__.Plug, {
      pluggable: "main.toolbar.bottom",
      id: "blocks-delete-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx("button", {
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_4__.messages.deleteBlocks),
      onClick: this.deleteBlocks,
      tabIndex: 0,
      className: "deleteBlocks",
      id: "toolbar-delete-blocks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: (_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_18___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }))), __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_7__.Plug, {
      pluggable: "main.toolbar.bottom",
      id: "blocks-cut-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, __jsx("button", {
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_4__.messages.cutBlocks),
      onClick: this.cutBlocksToClipboard,
      tabIndex: 0,
      className: "cutBlocks",
      id: "toolbar-cut-blocks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: (_plone_volto_icons_cut_svg__WEBPACK_IMPORTED_MODULE_16___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }))), __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_7__.Plug, {
      pluggable: "main.toolbar.bottom",
      id: "blocks-copy-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, __jsx("button", {
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_4__.messages.copyBlocks),
      onClick: this.copyBlocksToClipboard,
      tabIndex: 0,
      className: "copyBlocks",
      id: "toolbar-copy-blocks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: (_plone_volto_icons_copy_svg__WEBPACK_IMPORTED_MODULE_15___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    })))) : '', selectedBlock && ((blocksClipboard === null || blocksClipboard === void 0 ? void 0 : blocksClipboard.cut) || (blocksClipboard === null || blocksClipboard === void 0 ? void 0 : blocksClipboard.copy)) && __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_7__.Plug, {
      pluggable: "main.toolbar.bottom",
      id: "block-paste-btn",
      dependencies: [selectedBlock],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }
    }, __jsx("button", {
      "aria-label": intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_4__.messages.pasteBlocks),
      onClick: this.pasteBlocks,
      tabIndex: 0,
      className: "pasteBlocks",
      id: "toolbar-paste-blocks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "blockCount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, (blocksClipboard.cut || blocksClipboard.copy).length), __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: (_plone_volto_icons_paste_svg__WEBPACK_IMPORTED_MODULE_17___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 15
      }
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => {
  return {
    blocksClipboard: (state === null || state === void 0 ? void 0 : state.blocksClipboard) || {}
  };
}, {
  setBlocksClipboard: _plone_volto_actions_blocksClipboard_blocksClipboard__WEBPACK_IMPORTED_MODULE_13__.setBlocksClipboard,
  resetBlocksClipboard: _plone_volto_actions_blocksClipboard_blocksClipboard__WEBPACK_IMPORTED_MODULE_13__.resetBlocksClipboard
}))(BlocksToolbarComponent));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/Field.jsx"
/*!************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/Field.jsx ***!
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.jsx");
const _excluded = ["connectDropTarget", "connectDragSource", "connectDragPreview"];
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\Field.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Field component.
 * @module components/manage/Form/Field
 */

;




const MODE_HIDDEN = 'hidden'; //hidden mode. If mode is hidden, field is not rendered
/**
 * Get default widget
 * @method getViewDefault
 * @param {object} widgets Widgets config
 * @returns {string} Widget component.
 */
const getWidgetDefault = widgets => widgets.default;

/**
 * Get widget by field's `id` attribute
 * @method getWidgetById
 * @param {object} widgets Widgets config
 * @param {string} id Id
 * @returns {string} Widget component.
 */
const getWidgetByFieldId = (widgets, id) => widgets.id[id] || null;

/**
 * Get widget by factory attribute
 * @method getWidgetByFactory
 * @param {object} widgets Widgets config
 * @param {string} id Id
 * @returns {string} Widget component.
 */
const getWidgetByFactory = (widgets, factory) => {
  var _widgets$factory;
  return ((_widgets$factory = widgets.factory) === null || _widgets$factory === void 0 ? void 0 : _widgets$factory[factory]) || null;
};

/**
 * Get widget by field's `widget` attribute
 * @method getWidgetByName
 * @param {object} widgets Widgets config
 * @param {string} widget Widget
 * @returns {string} Widget component.
 */
const getWidgetByName = (widgets, widget) => typeof widget === 'string' ? widgets.widget[widget] || getWidgetDefault(widgets) : null;

/**
 * Get widget by tagged values
 * @param {object} widgetOptions
 * @param {object} widgets Widgets config
 * @returns {string} Widget component.
 *

directives.widget(
    'fieldname',
    frontendOptions={
        "widget": 'specialwidget',
        "version": 'extra'
    })

 */
const getWidgetFromTaggedValues = (widgets, widgetOptions) => {
  var _widgetOptions$fronte;
  return typeof (widgetOptions === null || widgetOptions === void 0 ? void 0 : (_widgetOptions$fronte = widgetOptions.frontendOptions) === null || _widgetOptions$fronte === void 0 ? void 0 : _widgetOptions$fronte.widget) === 'string' ? widgets.widget[widgetOptions.frontendOptions.widget] : null;
};

/**
 * Get widget props from tagged values
 * @param {object} widgets Widgets config
 * @param {object} widgetOptions
 * @returns {string} Widget component.
 *

directives.widget(
    "fieldname",
    frontendOptions={
        "widget": "specialwidget",
        "widgetProps": {"prop1": "specialprop"}
    })

 */
const getWidgetPropsFromTaggedValues = (widgets, widgetOptions) => {
  var _widgetOptions$fronte2;
  return typeof (widgetOptions === null || widgetOptions === void 0 ? void 0 : (_widgetOptions$fronte2 = widgetOptions.frontendOptions) === null || _widgetOptions$fronte2 === void 0 ? void 0 : _widgetOptions$fronte2.widgetProps) === 'object' ? widgetOptions.frontendOptions.widgetProps : null;
};

/**
 * Get widget by field's `vocabulary` attribute
 * @method getWidgetByVocabulary
 * @param {object} widgets Widgets config
 * @param {string} vocabulary Widget
 * @returns {string} Widget component.
 */
const getWidgetByVocabulary = (widgets, vocabulary) => vocabulary && vocabulary['@id'] ? widgets.vocabulary[vocabulary['@id'].replace(/^.*\/@vocabularies\//, '')] : null;

/**
 * Get widget by field's hints `vocabulary` attribute in widgetOptions
 * @method getWidgetByVocabularyFromHint
 * @param {object} widgets Widgets config
 * @param {string} props Widget props
 * @returns {string} Widget component.
 */
const getWidgetByVocabularyFromHint = (widgets, props) => props.widgetOptions && props.widgetOptions.vocabulary ? widgets.vocabulary[props.widgetOptions.vocabulary['@id'].replace(/^.*\/@vocabularies\//, '')] : null;

/**
 * Get widget by field's `choices` attribute
 * @method getWidgetByChoices
 * @param {object} widgets Widgets config
 * @param {string} choices Widget
 * @returns {string} Widget component.
 */
const getWidgetByChoices = (widgets, props) => {
  if (props.choices) {
    return widgets.choices;
  }
  if (props.vocabulary) {
    // If vocabulary exists, then it means it's a choice field in disguise with
    // no widget specified that probably contains a string then we force it
    // to be a select widget instead
    return widgets.choices;
  }
  return null;
};

/**
 * Get widget by field's `type` attribute
 * @method getWidgetByType
 * @param {object} widgets Widgets config
 * @param {string} type Type
 * @returns {string} Widget component.
 */
const getWidgetByType = (widgets, type) => widgets.type[type] || null;

/**
 * Field component class.
 * @function Field
 * @param {Object} props Properties.
 * @returns {string} Markup of the component.
 */
const UnconnectedField = (props, {
  intl
}) => {
  const widgets = props.widgets || _plone_volto_registry__WEBPACK_IMPORTED_MODULE_3__["default"].widgets;
  const Widget = getWidgetByFieldId(widgets, props.id) || getWidgetFromTaggedValues(widgets, props.widgetOptions) || getWidgetByName(widgets, props.widget) || getWidgetByChoices(widgets, props) || getWidgetByVocabulary(widgets, props.vocabulary) || getWidgetByVocabularyFromHint(widgets, props) || getWidgetByFactory(widgets, props.factory) || getWidgetByType(widgets, props.type) || getWidgetDefault(widgets);
  if (props.mode === MODE_HIDDEN) {
    return null;
  }

  // Adding the widget props from tagged values (if any)
  const widgetProps = _objectSpread(_objectSpread({}, props), getWidgetPropsFromTaggedValues(widgets, props.widgetOptions));
  if (props.onOrder) {
    const {
      DropTarget,
      DragSource
    } = props.reactDnd;
    const WrappedWidget = DropTarget('field', {
      hover(properties, monitor) {
        const dragOrder = monitor.getItem().order;
        const hoverOrder = properties.order;
        if (dragOrder === hoverOrder) {
          return;
        }
        properties.onOrder(dragOrder, hoverOrder - dragOrder);
        monitor.getItem().order = hoverOrder;
      }
    }, connect => ({
      connectDropTarget: connect.dropTarget()
    }))(DragSource('field', {
      beginDrag(properties) {
        return {
          id: properties.label,
          order: properties.order
        };
      }
    }, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    }))(_ref => {
      let {
          connectDropTarget,
          connectDragSource,
          connectDragPreview
        } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);
      return connectDropTarget(connectDragSource(connectDragPreview(__jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 17
        }
      }, __jsx(Widget, _extends({}, rest, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 19
        }
      }))))));
    }));
    return __jsx(WrappedWidget, _extends({}, widgetProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 12
      }
    }));
  }
  return __jsx(Widget, _extends({}, widgetProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 10
    }
  }));
};
const DndConnectedField = (0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__.injectLazyLibs)(['reactDnd'])(UnconnectedField);
const Field = props => props.onOrder ? __jsx(DndConnectedField, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 5
  }
})) : __jsx(UnconnectedField, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 5
  }
}));

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Field.propTypes = {
  widget: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  vocabulary: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    '@id': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  choices: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Field.defaultProps = {
  widget: null,
  vocabulary: null,
  choices: null,
  type: 'string',
  focus: false,
  onOrder: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(Field));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/Form.jsx"
/*!***********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/Form.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/components/manage/Toast/Toast */ "./node_modules/@plone/volto/src/components/manage/Toast/Toast.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_components_manage_Form_BlocksToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/manage/Form/BlocksToolbar */ "./node_modules/@plone/volto/src/components/manage/Form/BlocksToolbar.jsx");
/* harmony import */ var _plone_volto_components_manage_Form_UndoToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Form/UndoToolbar */ "./node_modules/@plone/volto/src/components/manage/Form/UndoToolbar.jsx");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_helpers_Extensions_withBlockSchemaEnhancer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Extensions/withBlockSchemaEnhancer */ "./node_modules/@plone/volto/src/helpers/Extensions/withBlockSchemaEnhancer.jsx");
/* harmony import */ var _plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/helpers/MessageLabels/MessageLabels */ "./node_modules/@plone/volto/src/helpers/MessageLabels/MessageLabels.js");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/ahead.svg */ "./node_modules/@plone/volto/src/icons/ahead.svg");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/up-key.svg */ "./node_modules/@plone/volto/src/icons/up-key.svg");
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/icons/down-key.svg */ "./node_modules/@plone/volto/src/icons/down-key.svg");
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/findIndex */ "lodash/findIndex");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash/mapValues */ "lodash/mapValues");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash/pickBy */ "lodash/pickBy");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash/without */ "lodash/without");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_xor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash/xor */ "lodash/xor");
/* harmony import */ var lodash_xor__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash_xor__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash/isBoolean */ "lodash/isBoolean");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @plone/volto/actions/sidebar/sidebar */ "./node_modules/@plone/volto/src/actions/sidebar/sidebar.js");
/* harmony import */ var _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @plone/volto/actions/form/form */ "./node_modules/@plone/volto/src/actions/form/form.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_components_theme_SlotRenderer_SlotRenderer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @plone/volto/components/theme/SlotRenderer/SlotRenderer */ "./node_modules/@plone/volto/src/components/theme/SlotRenderer/SlotRenderer.tsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\Form.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_26___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Form component.
 * @module components/manage/Form/Form
 */

;






































/**
 * Form container class.
 * @class Form
 * @extends Component
 */
class Form extends react__WEBPACK_IMPORTED_MODULE_26__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Form
   */
  constructor(props) {
    super(props);
    /**
     * getOnlyFormModifiedValues handler
     * It returns only the values of the fields that are have really changed since the
     * form was loaded. Useful for edit forms and PATCH operations, when we only want to
     * send the changed data.
     * @method getOnlyFormModifiedValues
     * @param {Object} event Event object.
     * @returns {undefined}
     */
    _defineProperty(this, "getOnlyFormModifiedValues", () => {
      const formData = this.state.formData;
      const fieldsModified = Object.keys((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__.difference)(formData, this.state.initialFormData));
      return _objectSpread(_objectSpread({}, lodash_pickBy__WEBPACK_IMPORTED_MODULE_20___default()(formData, (value, key) => fieldsModified.includes(key))), formData['@static_behaviors'] && {
        '@static_behaviors': formData['@static_behaviors']
      });
    });
    /**
     * Removed blocks and blocks_layout fields from the form.
     * @method removeBlocksLayoutFields
     * @param {object} schema The schema definition of the form.
     * @returns A modified copy of the given schema.
     */
    _defineProperty(this, "removeBlocksLayoutFields", schema => {
      const newSchema = _objectSpread({}, schema);
      const layoutFieldsetIndex = lodash_findIndex__WEBPACK_IMPORTED_MODULE_14___default()(newSchema.fieldsets, fieldset => fieldset.id === 'layout');
      if (layoutFieldsetIndex > -1) {
        const layoutFields = newSchema.fieldsets[layoutFieldsetIndex].fields;
        newSchema.fieldsets[layoutFieldsetIndex].fields = layoutFields.filter(field => field !== 'blocks' && field !== 'blocks_layout');
        if (newSchema.fieldsets[layoutFieldsetIndex].fields.length === 0) {
          newSchema.fieldsets = [...newSchema.fieldsets.slice(0, layoutFieldsetIndex), ...newSchema.fieldsets.slice(layoutFieldsetIndex + 1)];
        }
      }
      return newSchema;
    });
    const ids = {
      title: (0,uuid__WEBPACK_IMPORTED_MODULE_31__.v4)(),
      text: (0,uuid__WEBPACK_IMPORTED_MODULE_31__.v4)()
    };
    let {
      formData: _formData,
      schema: originalSchema
    } = props;
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.getBlocksFieldname)(_formData);
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.getBlocksLayoutFieldname)(_formData);
    const _schema = this.removeBlocksLayoutFields(originalSchema);
    this.props.setMetadataFieldsets(_schema !== null && _schema !== void 0 && _schema.fieldsets ? _schema.fieldsets.map(fieldset => fieldset.id) : []);
    if (!props.isEditForm) {
      // It's a normal (add form), get defaults from schema
      _formData = _objectSpread(_objectSpread({}, lodash_mapValues__WEBPACK_IMPORTED_MODULE_19___default()(props.schema.properties, 'default')), _formData);
    }

    // We initialize the formData snapshot in here, before the initial data checks
    const initialFormData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_22___default()(_formData);

    // Adding fallback in case the fields are empty, so we are sure that the edit form
    // shows at least the default blocks
    if (_formData.hasOwnProperty(blocksFieldname) && _formData.hasOwnProperty(blocksLayoutFieldname)) {
      if (!_formData[blocksLayoutFieldname] || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15___default()(_formData[blocksLayoutFieldname].items)) {
        _formData[blocksLayoutFieldname] = {
          items: [ids.title, ids.text]
        };
      }
      if (!_formData[blocksFieldname] || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15___default()(_formData[blocksFieldname])) {
        _formData[blocksFieldname] = {
          [ids.title]: {
            '@type': 'title'
          },
          [ids.text]: {
            '@type': _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].settings.defaultBlockType
          }
        };
      }
    }
    let selectedBlock = null;
    if (_formData.hasOwnProperty(blocksLayoutFieldname) && _formData[blocksLayoutFieldname].items.length > 0) {
      var _config$blocks, _config$blocks2;
      if (((_config$blocks = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks) === null || _config$blocks === void 0 ? void 0 : _config$blocks.initialBlocksFocus) === null) {
        selectedBlock = null;
      } else if (this.props.type in ((_config$blocks2 = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks) === null || _config$blocks2 === void 0 ? void 0 : _config$blocks2.initialBlocksFocus)) {
        // Default selected is not the first block, but the one from config.
        // TODO Select first block and not an arbitrary one.
        Object.keys(_formData[blocksFieldname]).forEach(b_key => {
          var _config$blocks3, _config$blocks3$initi;
          if (_formData[blocksFieldname][b_key]['@type'] === ((_config$blocks3 = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks) === null || _config$blocks3 === void 0 ? void 0 : (_config$blocks3$initi = _config$blocks3.initialBlocksFocus) === null || _config$blocks3$initi === void 0 ? void 0 : _config$blocks3$initi[this.props.type])) {
            selectedBlock = b_key;
          }
        });
      } else {
        selectedBlock = _formData[blocksLayoutFieldname].items[0];
      }
    }

    // Sync state to global state
    if (this.props.global) {
      this.props.setFormData(_formData);
    }
    this.props.setUIState({
      selected: selectedBlock,
      multiSelected: [],
      hovered: null
    });

    // Set initial state
    this.state = {
      formData: _formData,
      initialFormData,
      errors: {},
      isClient: false,
      // Ensure focus remain in field after change
      inFocus: {},
      sidebarMetadataIsAvailable: false
    };
    this.onChangeField = this.onChangeField.bind(this);
    this.onSelectBlock = this.onSelectBlock.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
    this.onBlurField = this.onBlurField.bind(this);
    this.onClickInput = this.onClickInput.bind(this);
    this.onToggleMetadataFieldset = this.onToggleMetadataFieldset.bind(this);
  }

  /**
   * On updates caused by props change
   * if errors from Backend come, these will be shown to their corresponding Fields
   * also the first Tab to have any errors will be selected
   * @param {Object} prevProps
   */
  async componentDidUpdate(prevProps, prevState) {
    let {
      requestError
    } = this.props;
    let errors = {};
    let activeIndex = 0;
    if (!this.props.isFormSelected && prevProps.isFormSelected) {
      this.props.setUIState({
        selected: null
      });
    }
    if (requestError && prevProps.requestError !== requestError) {
      errors = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].giveServerErrorsToCorrespondingFields(requestError);
      activeIndex = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].showFirstTabWithErrors({
        errors,
        schema: this.props.schema
      });
      this.setState({
        errors,
        activeIndex
      });
    }
    if (this.props.onChangeFormData) {
      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_16___default()(prevState === null || prevState === void 0 ? void 0 : prevState.formData, this.state.formData)) {
        this.props.onChangeFormData(this.state.formData);
      }
    }
    if (this.props.global && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_16___default()(this.props.globalData, prevProps.globalData)) {
      this.setState({
        formData: this.props.globalData
      });
    }
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_16___default()(prevProps.schema, this.props.schema)) {
      this.props.setMetadataFieldsets(this.removeBlocksLayoutFields(this.props.schema).fieldsets.map(fieldset => fieldset.id));
    }
    if (this.props.metadataFieldFocus !== '' && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_16___default()(prevProps.metadataFieldFocus, this.props.metadataFieldFocus)) {
      var _document$querySelect;
      // Scroll into view
      document.querySelector(`.field-wrapper-${this.props.metadataFieldFocus}`).scrollIntoView();

      // Set focus to first input if available
      (_document$querySelect = document.querySelector(`.field-wrapper-${this.props.metadataFieldFocus} input`)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus();

      // Reset focus field
      this.props.resetMetadataFocus();
    }
    if (!this.state.sidebarMetadataIsAvailable && document.getElementById('sidebar-metadata')) {
      this.setState(() => ({
        sidebarMetadataIsAvailable: true
      }));
    }
  }

  /**
   * Tab selection is done only by setting activeIndex in state
   */
  onTabChange(e, {
    activeIndex
  }) {
    const defaultFocus = this.props.schema.fieldsets[activeIndex].fields[0];
    this.setState(_objectSpread({
      activeIndex
    }, defaultFocus ? {
      inFocus: {
        [defaultFocus]: true
      }
    } : {}));
  }

  /**
   * If user clicks on input, the form will be not considered pristine
   * this will avoid onBlur effects without interaction with the form
   * @param {Object} e event
   */
  onClickInput(e) {
    this.setState({
      isFormPristine: false
    });
  }

  /**
   * Validate fields on blur
   * @method onBlurField
   * @param {string} id Id of the field
   * @param {*} value Value of the field
   * @returns {undefined}
   */
  onBlurField(id, value) {
    if (!this.state.isFormPristine) {
      const errors = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].validateFieldsPerFieldset({
        schema: this.props.schema,
        formData: this.state.formData,
        formatMessage: this.props.intl.formatMessage,
        touchedField: {
          [id]: value
        }
      });
      this.setState({
        errors
      });
    }
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
  }

  /**
   * Change field handler
   * Remove errors for changed field
   * @method onChangeField
   * @param {string} id Id of the field
   * @param {*} value Value of the field
   * @returns {undefined}
   */
  onChangeField(id, value) {
    this.setState(prevState => {
      const {
        errors,
        formData
      } = prevState;
      const newFormData = _objectSpread(_objectSpread({}, formData), {}, {
        // We need to catch also when the value equals false this fixes #888
        [id]: value || value !== undefined && lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24___default()(value) ? value : null
      });
      delete errors[id];
      if (this.props.global) {
        this.props.setFormData(newFormData);
      }
      return {
        errors,
        formData: newFormData,
        // Changing the form data re-renders the select widget which causes the
        // focus to get lost. To circumvent this, we set the focus back to
        // the input.
        // This could fix other widgets too but currently targeted
        // against the select widget only.
        // Ensure field to be in focus after the change
        inFocus: {
          [id]: true
        }
      };
    });
  }

  /**
   * Select block handler
   * @method onSelectBlock
   * @param {string} id Id of the field
   * @param {string} isMultipleSelection true if multiple blocks are selected
   * @returns {undefined}
   */
  onSelectBlock(id, isMultipleSelection, event) {
    let multiSelected = [];
    let selected = id;
    const formData = this.state.formData;
    if (isMultipleSelection) {
      selected = null;
      const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.getBlocksLayoutFieldname)(formData);
      const blocks_layout = formData[blocksLayoutFieldname].items;
      if (event.shiftKey) {
        const anchor = this.props.uiState.multiSelected.length > 0 ? blocks_layout.indexOf(this.props.uiState.multiSelected[0]) : blocks_layout.indexOf(this.props.uiState.selected);
        const focus = blocks_layout.indexOf(id);
        if (anchor === focus) {
          multiSelected = [id];
        } else if (focus > anchor) {
          multiSelected = [...blocks_layout.slice(anchor, focus + 1)];
        } else {
          multiSelected = [...blocks_layout.slice(focus, anchor + 1)];
        }
        window.getSelection().empty();
      }
      if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
        multiSelected = this.props.uiState.multiSelected || [];
        if (!this.props.uiState.multiSelected.includes(this.state.selected)) {
          multiSelected = [...multiSelected, this.props.uiState.selected];
          selected = null;
        }
        if (this.props.uiState.multiSelected.includes(id)) {
          selected = null;
          multiSelected = lodash_without__WEBPACK_IMPORTED_MODULE_21___default()(multiSelected, id);
        } else {
          multiSelected = [...multiSelected, id];
        }
      }
    }
    this.props.setUIState({
      selected,
      multiSelected,
      gridSelected: null
    });
    if (this.props.onSelectForm) {
      if (event) event.nativeEvent.stopImmediatePropagation();
      this.props.onSelectForm();
    }
  }

  /**
   * Cancel handler
   * It prevents event from triggering submit, reset form if props.resetAfterSubmit
   * and calls this.props.onCancel
   * @method onCancel
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onCancel(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.props.resetOnCancel || this.props.resetAfterSubmit) {
      this.setState({
        formData: this.props.formData
      });
      if (this.props.global) {
        this.props.setFormData(this.props.formData);
      }
    }
    this.props.onCancel(event);
  }

  /**
   * Submit handler also validate form and collect errors
   * @method onSubmit
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onSubmit(event) {
    const formData = this.state.formData;
    if (event) {
      event.preventDefault();
    }
    const errors = this.props.schema ? _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].validateFieldsPerFieldset({
      schema: this.props.schema,
      formData,
      formatMessage: this.props.intl.formatMessage
    }) : {};
    let blocksErrors = {};
    if ((0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.hasBlocksData)(formData)) {
      // Validate blocks
      const blocks = this.state.formData[(0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.getBlocksFieldname)(formData)];
      const blocksLayout = this.state.formData[(0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_7__.getBlocksLayoutFieldname)(formData)];
      const defaultSchema = {
        properties: {},
        fieldsets: [],
        required: []
      };
      blocksLayout.items.forEach(block => {
        let blockSchema = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks.blocksConfig[blocks[block]['@type']].blockSchema || defaultSchema;
        if (typeof blockSchema === 'function') {
          blockSchema = blockSchema({
            intl: this.props.intl,
            formData: blocks[block]
          });
        }
        if (_plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks.blocksConfig[blocks[block]['@type']].blockSchema) {
          blockSchema = (0,_plone_volto_helpers_Extensions_withBlockSchemaEnhancer__WEBPACK_IMPORTED_MODULE_8__.applySchemaEnhancer)({
            schema: blockSchema,
            formData: blocks[block],
            intl: this.props.intl,
            blocksConfig: _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].blocks.blocksConfig,
            navRoot: this.props.navRoot,
            contentType: this.props.content['@type']
          });
        }
        const blockErrors = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].validateFieldsPerFieldset({
          schema: blockSchema,
          formData: blocks[block],
          formatMessage: this.props.intl.formatMessage
        });
        if (lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(blockErrors).length > 0) {
          blocksErrors = _objectSpread(_objectSpread({}, blocksErrors), {}, {
            [block]: _objectSpread({}, blockErrors)
          });
        }
      });
    }
    if (lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(errors).length > 0 || lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(blocksErrors).length > 0) {
      const activeIndex = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"].showFirstTabWithErrors({
        errors,
        schema: this.props.schema
      });
      this.setState({
        errors: _objectSpread(_objectSpread({}, errors), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_15___default()(blocksErrors) && {
          blocks: blocksErrors
        }),
        activeIndex
      });
      if (lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(errors).length > 0) {
        // Changes the focus to the metadata tab in the sidebar if error
        Object.keys(errors).forEach(err => react_toastify__WEBPACK_IMPORTED_MODULE_32__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_1__["default"], {
          error: true,
          title: this.props.schema.properties[err].title || err,
          content: errors[err].join(', '),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 13
          }
        })));
        this.props.setSidebarTab(0);
      } else if (lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(blocksErrors).length > 0) {
        const errorField = Object.entries(Object.entries(blocksErrors)[0][1])[0][0];
        const errorMessage = Object.entries(Object.entries(blocksErrors)[0][1])[0][1];
        const errorFieldTitle = errorMessage.title || errorField;
        react_toastify__WEBPACK_IMPORTED_MODULE_32__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_1__["default"], {
          error: true,
          title: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.blocksFieldsErrorTitle, {
            errorField: errorFieldTitle
          }),
          content: errorMessage,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624,
            columnNumber: 11
          }
        }));
        this.props.setSidebarTab(1);
        this.props.setUIState({
          selected: Object.keys(blocksErrors)[0],
          multiSelected: [],
          hovered: null
        });
      }
    } else {
      // Get only the values that have been modified (Edit forms), send all in case that
      // it's an add form
      if (this.props.isEditForm) {
        this.props.onSubmit(this.getOnlyFormModifiedValues());
      } else {
        this.props.onSubmit(formData);
      }
      if (this.props.resetAfterSubmit) {
        this.setState({
          formData: this.props.formData
        });
        if (this.props.global) {
          this.props.setFormData(this.props.formData);
        }
      }
    }
  }
  /**
   * Toggle metadata fieldset handler
   * @method onToggleMetadataFieldset
   * @param {Object} event Event object.
   * @param {Object} blockProps Block properties.
   * @returns {undefined}
   */
  onToggleMetadataFieldset(event, blockProps) {
    const {
      index
    } = blockProps;
    this.props.setMetadataFieldsets(lodash_xor__WEBPACK_IMPORTED_MODULE_23___default()(this.props.metadataFieldsets, [index]));
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      settings
    } = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"];
    const {
      schema: originalSchema,
      onCancel,
      onSubmit,
      navRoot,
      type,
      metadataFieldsets,
      component,
      buttonComponent
    } = this.props;
    const formData = this.state.formData;
    const schema = this.removeBlocksLayoutFields(originalSchema);
    const Container = _plone_volto_registry__WEBPACK_IMPORTED_MODULE_36__["default"].getComponent({
      name: 'Container'
    }).component || semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Container;
    const FormComponent = component || semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Form;
    const ButtonComponent = buttonComponent || semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Button;
    return this.props.visual ?
    // Removing this from SSR is important, since react-beautiful-dnd supports SSR,
    // but draftJS don't like it much and the hydration gets messed up
    this.state.isClient && __jsx((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, __jsx(_plone_volto_components_theme_SlotRenderer_SlotRenderer__WEBPACK_IMPORTED_MODULE_37__["default"], {
      name: "aboveContent",
      content: this.props.content,
      navRoot: navRoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 11
      }
    }), __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 11
      }
    }, __jsx((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, __jsx(_plone_volto_components_manage_Form_BlocksToolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      formData: formData,
      selectedBlock: this.props.uiState.selected,
      selectedBlocks: this.props.uiState.multiSelected,
      onChangeBlocks: newBlockData => {
        const newFormData = _objectSpread(_objectSpread({}, formData), newBlockData);
        this.setState({
          formData: newFormData
        });
        if (this.props.global) {
          this.props.setFormData(newFormData);
        }
      },
      onSetSelectedBlocks: blockIds => this.props.setUIState({
        multiSelected: blockIds
      }),
      onSelectBlock: this.onSelectBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 15
      }
    }), __jsx(_plone_volto_components_manage_Form_UndoToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      state: {
        formData,
        selected: this.props.uiState.selected,
        multiSelected: this.props.uiState.multiSelected
      },
      enableHotKeys: true,
      onUndoRedo: ({
        state
      }) => {
        if (this.props.global) {
          this.props.setFormData(state.formData);
        }
        return this.setState(state);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779,
        columnNumber: 15
      }
    }), __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_2__.BlocksForm, {
      onChangeFormData: newData => {
        const newFormData = _objectSpread(_objectSpread({}, formData), newData);
        this.setState({
          formData: newFormData
        });
        if (this.props.global) {
          this.props.setFormData(newFormData);
        }
      },
      onChangeField: this.onChangeField,
      onSelectBlock: this.onSelectBlock,
      properties: formData,
      navRoot: navRoot,
      type: type,
      pathname: this.props.pathname,
      selectedBlock: this.props.uiState.selected,
      multiSelected: this.props.uiState.multiSelected,
      manage: this.props.isAdminForm,
      allowedBlocks: this.props.allowedBlocks,
      showRestricted: this.props.showRestricted,
      editable: this.props.editable,
      isMainForm: this.props.editable
      // Properties to pass to the BlocksForm to match the View ones
      ,
      history: this.props.history,
      location: this.props.location,
      token: this.props.token,
      errors: this.state.errors,
      blocksErrors: this.state.errors.blocks,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 15
      }
    }), this.state.isClient && this.state.sidebarMetadataIsAvailable && this.props.editable && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_28__.createPortal)(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Form, {
      method: "post",
      onSubmit: this.onSubmit,
      error: lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(this.state.errors).length > 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830,
        columnNumber: 19
      }
    }, schema && lodash_map__WEBPACK_IMPORTED_MODULE_18___default()(schema.fieldsets, fieldset => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Accordion, {
      fluid: true,
      styled: true,
      className: "form",
      key: fieldset.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837,
        columnNumber: 25
      }
    }, __jsx("div", {
      key: fieldset.id,
      id: `metadataform-fieldset-${fieldset.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 27
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Accordion.Title, {
      active: metadataFieldsets.includes(fieldset.id),
      index: fieldset.id,
      onClick: this.onToggleMetadataFieldset,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 29
      }
    }, fieldset.title, metadataFieldsets.includes(fieldset.id) ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      name: (_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_12___default()),
      size: "20px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 33
      }
    }) : __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      name: (_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_13___default()),
      size: "20px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856,
        columnNumber: 33
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Accordion.Content, {
      active: metadataFieldsets.includes(fieldset.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 29
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      className: "attached",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 862,
        columnNumber: 31
      }
    }, lodash_map__WEBPACK_IMPORTED_MODULE_18___default()(fieldset.fields, (field, index) => {
      var _document$getElementB;
      return __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_2__.Field, _extends({}, schema.properties[field], {
        id: field,
        fieldSet: fieldset.title.toLowerCase(),
        formData: formData,
        focus: this.state.isClient && (_document$getElementB = document.getElementById('sidebar-metadata')) !== null && _document$getElementB !== void 0 && _document$getElementB.contains(document.activeElement) ? this.state.inFocus[field] : false,
        value: formData === null || formData === void 0 ? void 0 : formData[field],
        required: schema.required.indexOf(field) !== -1,
        onChange: this.onChangeField,
        onBlur: this.onBlurField,
        onClick: this.onClickInput,
        key: field,
        error: this.state.errors[field],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864,
          columnNumber: 35
        }
      }));
    }))))))), document.getElementById('sidebar-metadata')), __jsx(_plone_volto_components_theme_SlotRenderer_SlotRenderer__WEBPACK_IMPORTED_MODULE_37__["default"], {
      name: "belowContent",
      content: this.props.content,
      navRoot: navRoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 15
      }
    })))) : __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 7
      }
    }, __jsx(FormComponent, {
      method: "post",
      onSubmit: this.onSubmit,
      error: lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(this.state.errors).length > 0,
      className: settings.verticalFormTabs ? 'vertical-form' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908,
        columnNumber: 9
      }
    }, __jsx("fieldset", {
      className: "invisible",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment.Group, {
      raised: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 13
      }
    }, schema && schema.fieldsets.length > 1 && __jsx((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, settings.verticalFormTabs && this.props.title && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      secondary: true,
      attached: true,
      key: this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 21
      }
    }, this.props.title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Tab, {
      menu: {
        secondary: true,
        pointing: true,
        attached: true,
        tabular: true,
        className: 'formtabs',
        vertical: settings.verticalFormTabs
      },
      grid: {
        paneWidth: 9,
        tabWidth: 3,
        stackable: true
      },
      onTabChange: this.onTabChange,
      activeIndex: this.state.activeIndex,
      panes: lodash_map__WEBPACK_IMPORTED_MODULE_18___default()(schema.fieldsets, item => ({
        menuItem: {
          key: item.id,
          content: item.title,
          as: 'button',
          type: 'button'
        },
        render: () => [!settings.verticalFormTabs && this.props.title && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
          secondary: true,
          attached: true,
          key: this.props.title,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 944,
            columnNumber: 27
          }
        }, this.props.title), item.description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Message, {
          attached: "bottom",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 949,
            columnNumber: 27
          }
        }, item.description), ...lodash_map__WEBPACK_IMPORTED_MODULE_18___default()(item.fields, (field, index) => __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_2__.Field, _extends({
          widgets: this.props.widgets
        }, schema.properties[field], {
          id: field,
          formData: formData,
          fieldSet: item.id,
          focus: this.state.inFocus[field],
          value: formData === null || formData === void 0 ? void 0 : formData[field],
          required: schema.required.indexOf(field) !== -1,
          onChange: this.props.editable ? this.onChangeField : () => {},
          onBlur: this.onBlurField,
          onClick: this.onClickInput,
          key: field,
          error: this.state.errors[field],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 954,
            columnNumber: 27
          }
        })))]
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 19
      }
    })), schema && schema.fieldsets.length === 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 17
      }
    }, this.props.title && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      className: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982,
        columnNumber: 21
      }
    }, __jsx("h1", {
      style: {
        fontSize: '16px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983,
        columnNumber: 23
      }
    }, " ", this.props.title)), this.props.description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      secondary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 987,
        columnNumber: 21
      }
    }, this.props.description), lodash_keys__WEBPACK_IMPORTED_MODULE_17___default()(this.state.errors).length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Message, {
      icon: "warning",
      negative: true,
      attached: true,
      header: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.error),
      content: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.thereWereSomeErrors),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 21
      }
    }), this.props.error && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Message, {
      icon: "warning",
      negative: true,
      attached: true,
      header: this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.error),
      content: this.props.error.message,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001,
        columnNumber: 21
      }
    }), lodash_map__WEBPACK_IMPORTED_MODULE_18___default()(schema.fieldsets[0].fields, field => __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_2__.Field, _extends({
      widgets: this.props.widgets
    }, schema.properties[field], {
      id: field,
      value: formData === null || formData === void 0 ? void 0 : formData[field],
      required: schema.required.indexOf(field) !== -1,
      onChange: this.onChangeField,
      onBlur: this.onBlurField,
      onClick: this.onClickInput,
      key: field,
      error: this.state.errors[field],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 21
      }
    })))), !this.props.hideActions && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.Segment, {
      className: "actions",
      clearing: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026,
        columnNumber: 17
      }
    }, onSubmit && (this.props.textButtons ? __jsx(ButtonComponent, {
      primary: true,
      floated: "right",
      type: "submit",
      "aria-label": this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.save),
      title: this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.save),
      loading: this.props.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1029,
        columnNumber: 23
      }
    }, this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.save)) : __jsx(ButtonComponent, {
      basic: true,
      primary: true,
      floated: "right",
      type: "submit",
      "aria-label": this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.save),
      title: this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.save),
      loading: this.props.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: "circled",
      name: (_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067,
        columnNumber: 25
      }
    }))), onCancel && (this.props.textButtons ? __jsx(ButtonComponent, {
      secondary: true,
      type: "button",
      "aria-label": this.props.cancelLabel ? this.props.cancelLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.cancel),
      title: this.props.cancelLabel ? this.props.cancelLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.cancel),
      floated: "right",
      onClick: this.onCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072,
        columnNumber: 23
      }
    }, this.props.cancelLabel ? this.props.cancelLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.cancel)) : __jsx(ButtonComponent, {
      basic: true,
      secondary: true,
      type: "button",
      "aria-label": this.props.cancelLabel ? this.props.cancelLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.cancel),
      title: this.props.cancelLabel ? this.props.cancelLabel : this.props.intl.formatMessage(_plone_volto_helpers_MessageLabels_MessageLabels__WEBPACK_IMPORTED_MODULE_9__.messages.cancel),
      floated: "right",
      onClick: this.onCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1093,
        columnNumber: 23
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: "circled",
      name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default()),
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110,
        columnNumber: 25
      }
    }))))))));
  }
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(Form, "propTypes", {
  schema: prop_types__WEBPACK_IMPORTED_MODULE_25___default().shape({
    fieldsets: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_25___default().shape({
      fields: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().string)),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
      title: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string)
    })),
    properties: prop_types__WEBPACK_IMPORTED_MODULE_25___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().any)),
    definitions: prop_types__WEBPACK_IMPORTED_MODULE_25___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().any)),
    required: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().string))
  }),
  widgets: prop_types__WEBPACK_IMPORTED_MODULE_25___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().any)),
  component: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().any),
  formData: prop_types__WEBPACK_IMPORTED_MODULE_25___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().any)),
  globalData: prop_types__WEBPACK_IMPORTED_MODULE_25___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().any)),
  metadataFieldsets: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().string)),
  metadataFieldFocus: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  submitLabel: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  cancelLabel: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  textButtons: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  buttonComponent: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().any),
  resetAfterSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  resetOnCancel: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  isEditForm: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  isAdminForm: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  error: prop_types__WEBPACK_IMPORTED_MODULE_25___default().shape({
    message: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string)
  }),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  hideActions: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  visual: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  blocks: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().object)),
  isFormSelected: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  onSelectForm: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  editable: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  onChangeFormData: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  requestError: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().string),
  allowedBlocks: prop_types__WEBPACK_IMPORTED_MODULE_25___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_25___default().string)),
  showRestricted: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool),
  global: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool)
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(Form, "defaultProps", {
  formData: null,
  widgets: null,
  component: null,
  onSubmit: null,
  onCancel: null,
  submitLabel: null,
  cancelLabel: null,
  textButtons: false,
  buttonComponent: null,
  resetAfterSubmit: false,
  resetOnCancel: false,
  isEditForm: false,
  isAdminForm: false,
  title: null,
  description: null,
  error: null,
  loading: null,
  hideActions: false,
  visual: false,
  blocks: [],
  pathname: '',
  schema: {},
  isFormSelected: true,
  onSelectForm: null,
  editable: true,
  requestError: null,
  allowedBlocks: null,
  global: false
});
const FormIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__.injectIntl)(Form, {
  forwardRef: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_35__.compose)((0,react_redux__WEBPACK_IMPORTED_MODULE_29__.connect)((state, props) => {
  var _state$form, _state$form2, _state$sidebar, _state$sidebar2;
  return {
    content: state.content.data,
    globalData: (_state$form = state.form) === null || _state$form === void 0 ? void 0 : _state$form.global,
    uiState: (_state$form2 = state.form) === null || _state$form2 === void 0 ? void 0 : _state$form2.ui,
    metadataFieldsets: (_state$sidebar = state.sidebar) === null || _state$sidebar === void 0 ? void 0 : _state$sidebar.metadataFieldsets,
    metadataFieldFocus: (_state$sidebar2 = state.sidebar) === null || _state$sidebar2 === void 0 ? void 0 : _state$sidebar2.metadataFieldFocus
  };
}, {
  setMetadataFieldsets: _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_33__.setMetadataFieldsets,
  setSidebarTab: _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_33__.setSidebarTab,
  setFormData: _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_34__.setFormData,
  setUIState: _plone_volto_actions_form_form__WEBPACK_IMPORTED_MODULE_34__.setUIState,
  resetMetadataFocus: _plone_volto_actions_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_33__.resetMetadataFocus
}, null, {
  forwardRef: true
}))(FormIntl));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/InlineForm.jsx"
/*!*****************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/InlineForm.jsx ***!
  \*****************************************************************************/
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
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-height */ "react-animate-height");
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_height__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jotai */ "jotai");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InlineFormState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InlineFormState */ "./node_modules/@plone/volto/src/components/manage/Form/InlineFormState.js");
/* harmony import */ var _plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/helpers/Utils/Utils */ "./node_modules/@plone/volto/src/helpers/Utils/Utils.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/up-key.svg */ "./node_modules/@plone/volto/src/icons/up-key.svg");
/* harmony import */ var _plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/down-key.svg */ "./node_modules/@plone/volto/src/icons/down-key.svg");
/* harmony import */ var _plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\InlineForm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;
















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  editValues: {
    id: 'Edit values',
    defaultMessage: 'Edit values'
  },
  error: {
    id: 'Error',
    defaultMessage: 'Error'
  },
  thereWereSomeErrors: {
    id: 'There were some errors',
    defaultMessage: 'There were some errors'
  }
});
const InlineForm = props => {
  const {
    block,
    description,
    error,
    // Such as {message: "It's not good"}
    errors = {},
    formData,
    onChangeFormData,
    onChangeField,
    schema,
    title,
    icon,
    headerActions,
    actionButton,
    footer,
    focusIndex,
    intl
  } = props;
  const _ = intl.formatMessage;
  const defaultFieldset = schema.fieldsets.find(o => o.id === 'default');
  const other = schema.fieldsets.filter(o => o.id !== 'default');
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // Will set field values from schema, by matching the default values

    const objectSchema = typeof schema === 'function' ? schema(props) : schema;
    const initialData = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_13__.applySchemaDefaults)({
      data: formData,
      schema: objectSchema,
      intl
    });
    if (onChangeFormData) {
      onChangeFormData(initialData);
    } else {
      Object.keys(initialData).forEach(k => {
        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_7___default()(initialData[k], formData === null || formData === void 0 ? void 0 : formData[k])) {
          onChangeField(k, initialData[k]);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [currentActiveFieldset, setCurrentActiveFieldset] = (0,jotai__WEBPACK_IMPORTED_MODULE_8__.useAtom)((0,_InlineFormState__WEBPACK_IMPORTED_MODULE_9__.inlineFormFieldsetsState)({
    name: block,
    fielsetList: other,
    initialState: _plone_volto_registry__WEBPACK_IMPORTED_MODULE_16__["default"].settings.blockSettingsTabFieldsetsInitialStateOpen ? (0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_10__.arrayRange)(0, other.length - 1, 1) : []
  }));
  function handleCurrentActiveFieldset(e, blockProps) {
    const {
      index
    } = blockProps;
    if (currentActiveFieldset.includes(index)) {
      setCurrentActiveFieldset((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_10__.removeFromArray)(currentActiveFieldset, currentActiveFieldset.indexOf(index)));
    } else {
      setCurrentActiveFieldset((0,_plone_volto_helpers_Utils_Utils__WEBPACK_IMPORTED_MODULE_10__.insertInArray)(currentActiveFieldset, index, currentActiveFieldset.length + 1));
    }
  }
  return __jsx("div", {
    className: "ui form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, title && __jsx("header", {
    className: "header pulled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, icon, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, title || _(messages.editValues)), headerActions), description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    secondary: true,
    className: "attached",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, description), lodash_keys__WEBPACK_IMPORTED_MODULE_5___default()(errors).length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    icon: "warning",
    negative: true,
    attached: true,
    header: _(messages.error),
    content: _(messages.thereWereSomeErrors),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), error && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    icon: "warning",
    negative: true,
    attached: true,
    header: _(messages.error),
    content: error.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: `blockform-fieldset-${defaultFieldset.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "form attached",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(defaultFieldset.fields, (field, index) => {
    var _errors$block;
    return __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_12__.Field, _extends({}, schema.properties[field], {
      id: field,
      fieldSet: defaultFieldset.title.toLowerCase(),
      focus: index === focusIndex,
      value: formData[field],
      required: schema.required.indexOf(field) !== -1,
      onChange: (id, value, itemInfo) => {
        onChangeField(id, value, itemInfo);
      },
      key: field,
      error: (errors === null || errors === void 0 ? void 0 : (_errors$block = errors[block]) === null || _errors$block === void 0 ? void 0 : _errors$block[field]) || [],
      block: block,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }));
  }), actionButton && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "attached actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, actionButton))), other.map((fieldset, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
    fluid: true,
    styled: true,
    className: "form",
    key: fieldset.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: fieldset.id,
    id: `blockform-fieldset-${fieldset.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion.Title, {
    active: currentActiveFieldset.includes(index),
    index: index,
    onClick: handleCurrentActiveFieldset,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, fieldset.title && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, fieldset.title), currentActiveFieldset.includes(index) ? __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: (_plone_volto_icons_up_key_svg__WEBPACK_IMPORTED_MODULE_14___default()),
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }) : __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: (_plone_volto_icons_down_key_svg__WEBPACK_IMPORTED_MODULE_15___default()),
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion.Content, {
    active: currentActiveFieldset.includes(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx((react_animate_height__WEBPACK_IMPORTED_MODULE_4___default()), {
    animateOpacity: true,
    duration: 500,
    height: currentActiveFieldset.includes(index) ? 'auto' : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "attached",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(fieldset.fields, field => {
    var _errors$block2;
    return __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_12__.Field, _extends({}, schema.properties[field], {
      id: field,
      value: formData[field],
      required: schema.required.indexOf(field) !== -1,
      onChange: (id, value) => {
        onChangeField(id, value);
      },
      key: field,
      error: (errors === null || errors === void 0 ? void 0 : (_errors$block2 = errors[block]) === null || _errors$block2 === void 0 ? void 0 : _errors$block2[field]) || [],
      block: block,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 21
      }
    }));
  }))))))), footer);
};
InlineForm.defaultProps = {
  block: null,
  description: null,
  formData: null,
  onChangeField: null,
  error: null,
  errors: {},
  schema: {},
  focusIndex: null
};
InlineForm.propTypes = {
  block: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    fieldsets: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })),
    properties: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
    definitions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
    required: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
  }),
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
  pathname: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChangeField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  focusIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(InlineForm, {
  forwardRef: true
}));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/InlineFormState.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/InlineFormState.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inlineFormFieldsetsState: () => (/* binding */ inlineFormFieldsetsState)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ "jotai");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);



const inlineFormFieldsetsState = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomFamily)(({
  name,
  initialState
}) => (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(initialState), (a, b) => a.name === b.name && lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(a.fielsetList, b.fielsetList));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/ModalForm.jsx"
/*!****************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/ModalForm.jsx ***!
  \****************************************************************************/
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
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/helpers/FormValidation/FormValidation */ "./node_modules/@plone/volto/src/helpers/FormValidation/FormValidation.jsx");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var _plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components/manage/Form */ "./node_modules/@plone/volto/src/components/manage/Form/index.tsx");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/ahead.svg */ "./node_modules/@plone/volto/src/icons/ahead.svg");
/* harmony import */ var _plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\ModalForm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Modal form component.
 * @module components/manage/Form/ModalForm
 */

;











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  required: {
    id: 'Required input is missing.',
    defaultMessage: 'Required input is missing.'
  },
  minLength: {
    id: 'Minimum length is {len}.',
    defaultMessage: 'Minimum length is {len}.'
  },
  uniqueItems: {
    id: 'Items must be unique.',
    defaultMessage: 'Items must be unique.'
  },
  save: {
    id: 'Save',
    defaultMessage: 'Save'
  },
  cancel: {
    id: 'Cancel',
    defaultMessage: 'Cancel'
  },
  dialogOpened: {
    id: 'Pop-up opened: {title}',
    defaultMessage: 'Pop-up opened: {title}'
  },
  dialogClosed: {
    id: 'Pop-up closed.',
    defaultMessage: 'Pop-up closed.'
  }
});

/**
 * Modal form container class.
 * @class ModalForm
 * @extends Component
 */
class ModalForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs ModalForm
   */
  constructor(props) {
    super(props);
    this.headerId = `modal-title-${++ModalForm.idCounter}`;
    this.state = {
      currentTab: 0,
      errors: {},
      isFormPristine: true,
      formData: props.formData
    };
    this.modalRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.announceRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.selectTab = this.selectTab.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onBlurField = this.onBlurField.bind(this);
    this.onClickInput = this.onClickInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  /**
   * Change field handler
   * @method onChangeField
   * @param {string} id Id of the field
   * @param {*} value Value of the field
   * @returns {undefined}
   */
  onChangeField(id, value) {
    this.setState({
      formData: _objectSpread(_objectSpread({}, this.state.formData), {}, {
        [id]: value
      })
    });
  }

  /**
   * If user clicks on input, the form will be not considered pristine
   * this will avoid onBlur effects without interaction with the form
   * @param {Object} e event
   */
  onClickInput(e) {
    this.setState({
      isFormPristine: false
    });
  }

  /**
   * Validate fields on blur
   * @method onBlurField
   * @param {string} id Id of the field
   * @param {*} value Value of the field
   * @returns {undefined}
   */
  onBlurField(id, value) {
    if (!this.state.isFormPristine) {
      const errors = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_7__["default"].validateFieldsPerFieldset({
        schema: this.props.schema,
        formData: this.state.formData,
        formatMessage: this.props.intl.formatMessage,
        touchedField: {
          [id]: value
        }
      });
      this.setState({
        errors
      });
    }
  }

  /**
   * Submit handler
   * @method onSubmit
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onSubmit(event) {
    event.preventDefault();
    const errors = _plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_7__["default"].validateFieldsPerFieldset({
      schema: this.props.schema,
      formData: this.state.formData,
      formatMessage: this.props.intl.formatMessage
    });
    if (lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(errors).length > 0) {
      this.setState({
        errors
      });
    } else {
      let setFormDataCallback = formData => {
        this.setState({
          formData: formData,
          errors: {}
        });
      };
      this.props.onSubmit(this.state.formData, setFormDataCallback);
    }
  }

  /**
   * Select tab handler
   * @method selectTab
   * @param {Object} event Event object.
   * @param {number} index Selected tab index.
   * @returns {undefined}
   */
  selectTab(event, {
    index
  }) {
    this.setState({
      currentTab: index
    });
  }
  onKeyDown(event) {
    var _document$getElementB;
    if (event.key !== 'Tab') return;
    const modal = (_document$getElementB = document.getElementById(this.headerId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.closest('.ui.modal');
    if (!modal) return;
    const focusable = modal.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  /**
   * Component did update lifecycle handler
   * @param {Object} prevProps
   * @param {Object} prevState
   */
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.open && this.props.open) {
      var _this$modalRef$curren;
      document.addEventListener('keydown', this.onKeyDown);
      (_this$modalRef$curren = this.modalRef.current) === null || _this$modalRef$curren === void 0 ? void 0 : _this$modalRef$curren.focus();
      if (this.announceRef.current) {
        this.announceRef.current.textContent = this.props.intl.formatMessage(messages.dialogOpened, {
          title: this.props.title
        });
      }
    }
    if (prevProps.open && !this.props.open) {
      document.removeEventListener('keydown', this.onKeyDown);
      if (this.announceRef.current) {
        this.announceRef.current.textContent = this.props.intl.formatMessage(messages.dialogClosed);
      }
    }
    if (this.props.onChangeFormData) {
      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevState === null || prevState === void 0 ? void 0 : prevState.formData, this.state.formData)) {
        this.props.onChangeFormData(this.state.formData);
      }
    }
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevProps.formData, this.props.formData)) {
      let newFormData = {};
      lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.props.formData), field => {
        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevProps.formData[field], this.props.formData[field])) {
          newFormData[field] = this.props.formData[field];
        }
      });
      this.setState({
        formData: _objectSpread(_objectSpread({}, this.state.formData), newFormData)
      });
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var _schema$fieldsets;
    const {
      schema,
      onCancel,
      description
    } = this.props;
    const currentFieldset = schema.fieldsets[this.state.currentTab];
    const fields = currentFieldset ? lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(currentFieldset.fields, field => _objectSpread(_objectSpread({}, schema.properties[field]), {}, {
      id: field,
      value: this.state.formData[field],
      required: schema.required.indexOf(field) !== -1,
      onChange: this.onChangeField,
      onBlur: this.onBlurField,
      onClick: this.onClickInput
    })) : [];
    const state_errors = lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.state.errors).length > 0;
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
      ref: this.announceRef,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        opacity: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
      role: "dialog",
      dimmer: this.props.dimmer,
      open: this.props.open,
      className: this.props.className,
      "aria-labelledby": this.headerId,
      "aria-modal": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Header, {
      id: this.headerId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 11
      }
    }, this.props.title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Dimmer, {
      active: this.props.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Loader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 13
      }
    }, this.props.loadingMessage || __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "Loading",
      defaultMessage: "Loading.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 17
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Content, {
      scrolling: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 11
      }
    }, __jsx("div", {
      ref: this.modalRef,
      tabIndex: -1,
      className: "modal-focus-trap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
      method: "post",
      onSubmit: this.onSubmit,
      error: state_errors || Boolean(this.props.submitError),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 15
      }
    }, description, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
      error: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 17
      }
    }, state_errors ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
      id: "There were some errors.",
      defaultMessage: "There were some errors.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 21
      }
    }) : '', __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 19
      }
    }, this.props.submitError)), ((_schema$fieldsets = schema.fieldsets) === null || _schema$fieldsets === void 0 ? void 0 : _schema$fieldsets.length) > 1 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {
      tabular: true,
      stackable: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 19
      }
    }, lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(schema.fieldsets, (item, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {
      name: item.id,
      index: index,
      key: item.id,
      active: this.state.currentTab === index,
      onClick: this.selectTab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 23
      }
    }, item.title))), fields.map(field => __jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_9__.Field, _extends({}, field, {
      key: field.id,
      onBlur: this.onBlurField,
      onClick: this.onClickInput,
      error: this.state.errors[field.id],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 19
      }
    })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Actions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 11
      }
    }, onCancel && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
      type: "button",
      basic: true,
      circular: true,
      secondary: true,
      "aria-label": this.props.intl.formatMessage(messages.cancel),
      title: this.props.intl.formatMessage(messages.cancel),
      onClick: onCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 15
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default()),
      className: "circled",
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
      basic: true,
      circular: true,
      primary: true,
      "aria-label": this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(messages.save),
      title: this.props.submitLabel ? this.props.submitLabel : this.props.intl.formatMessage(messages.save),
      onClick: this.onSubmit,
      loading: this.props.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 13
      }
    }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: (_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_10___default()),
      className: "contents circled",
      size: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 15
      }
    })))));
  }
}
_defineProperty(ModalForm, "idCounter", 0);
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
_defineProperty(ModalForm, "propTypes", {
  schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    fieldsets: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })),
    properties: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
    required: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
  }).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)),
  submitError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onChangeFormData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  submitLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  loadingMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
});
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
_defineProperty(ModalForm, "defaultProps", {
  submitLabel: null,
  onCancel: null,
  formData: {},
  open: true,
  loading: null,
  loadingMessage: null,
  submitError: null,
  className: null,
  dimmer: null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(ModalForm));

/***/ },

/***/ "./node_modules/@plone/volto/src/components/manage/Form/UndoToolbar.jsx"
/*!******************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Form/UndoToolbar.jsx ***!
  \******************************************************************************/
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
/* harmony import */ var _plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/components/manage/Pluggable */ "./node_modules/@plone/volto/src/components/manage/Pluggable/index.js");
/* harmony import */ var _plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/components/theme/Icon/Icon */ "./node_modules/@plone/volto/src/components/theme/Icon/Icon.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_UndoManager_useUndoManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/UndoManager/useUndoManager */ "./node_modules/@plone/volto/src/helpers/UndoManager/useUndoManager.js");
/* harmony import */ var _plone_volto_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/registry */ "./node_modules/@plone/volto/src/registry.js");
/* harmony import */ var _plone_volto_icons_undo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/undo.svg */ "./node_modules/@plone/volto/src/icons/undo.svg");
/* harmony import */ var _plone_volto_icons_undo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_undo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_icons_redo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/icons/redo.svg */ "./node_modules/@plone/volto/src/icons/redo.svg");
/* harmony import */ var _plone_volto_icons_redo_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_redo_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\node_modules\\@plone\\volto\\src\\components\\manage\\Form\\UndoToolbar.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  undo: {
    id: 'Undo',
    defaultMessage: 'Undo'
  },
  redo: {
    id: 'Redo',
    defaultMessage: 'Redo'
  }
});
const UndoToolbar = ({
  state,
  onUndoRedo,
  maxUndoLevels,
  enableHotKeys
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const undoLevels = maxUndoLevels !== null && maxUndoLevels !== void 0 ? maxUndoLevels : _plone_volto_registry__WEBPACK_IMPORTED_MODULE_6__["default"].settings.maxUndoLevels;
  const {
    doUndo,
    doRedo,
    canUndo,
    canRedo
  } = (0,_plone_volto_helpers_UndoManager_useUndoManager__WEBPACK_IMPORTED_MODULE_5__["default"])(state, onUndoRedo, {
    maxUndoLevels: undoLevels
  });
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_2__.Plug, {
    pluggable: "main.toolbar.bottom",
    id: "undo-btn",
    dependencies: [canUndo, canRedo],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "button",
    className: "undo",
    onClick: () => doUndo(),
    "aria-label": intl.formatMessage(messages.undo),
    disabled: !canUndo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_undo_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    className: "circled",
    size: "30px",
    title: intl.formatMessage(messages.undo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), __jsx(_plone_volto_components_manage_Pluggable__WEBPACK_IMPORTED_MODULE_2__.Plug, {
    pluggable: "main.toolbar.bottom",
    id: "redo-btn",
    dependencies: [canUndo, canRedo],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "button",
    className: "redo",
    onClick: () => doRedo(),
    "aria-label": intl.formatMessage(messages.redo),
    disabled: !canRedo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: (_plone_volto_icons_redo_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    className: "circled",
    size: "30px",
    title: intl.formatMessage(messages.redo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UndoToolbar);

/***/ },

/***/ "./node_modules/@plone/volto/src/helpers/Blocks/cloneBlocks.ts"
/*!*********************************************************************!*\
  !*** ./node_modules/@plone/volto/src/helpers/Blocks/cloneBlocks.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneBlocks: () => (/* binding */ cloneBlocks)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plone/volto/helpers/Blocks/Blocks */ "./node_modules/@plone/volto/src/helpers/Blocks/Blocks.js");
/* harmony import */ var _plone_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/registry */ "@plone/registry");
/* harmony import */ var _plone_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plone_registry__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// @ts-nocheck
;


function cloneBlocks(blocksData) {
  if ((0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlocksData)(blocksData)) {
    const blocksFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__.getBlocksFieldname)(blocksData);
    const blocksLayoutFieldname = (0,_plone_volto_helpers_Blocks_Blocks__WEBPACK_IMPORTED_MODULE_1__.getBlocksLayoutFieldname)(blocksData);
    const cloneWithIds = Object.keys(blocksData.blocks).map(key => {
      const block = blocksData.blocks[key];
      const blockConfig = (_plone_registry__WEBPACK_IMPORTED_MODULE_2___default().blocks).blocksConfig[blocksData['@type']];
      return blockConfig !== null && blockConfig !== void 0 && blockConfig.cloneData ? blockConfig.cloneData(block) : [(0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(), cloneBlocks(block)];
    }).filter(info => !!info); // some blocks may refuse to be copied

    const newBlockData = _objectSpread(_objectSpread({}, blocksData), {}, {
      [blocksFieldname]: _objectSpread({}, Object.assign({}, ...cloneWithIds.map(([id, data]) => ({
        [id]: data
      })))),
      [blocksLayoutFieldname]: _objectSpread(_objectSpread({}, blocksData[blocksLayoutFieldname]), {}, {
        items: [...cloneWithIds.map(([id]) => id)]
      })
    });
    return newBlockData;
  }
  return blocksData;
}

/***/ },

/***/ "./node_modules/@plone/volto/src/helpers/UndoManager/useUndoManager.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/helpers/UndoManager/useUndoManager.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var undoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! undoo */ "undoo");
/* harmony import */ var undoo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(undoo__WEBPACK_IMPORTED_MODULE_1__);



// Code based on Apache-2.0 License
// https://github.com/reaviz/reaflow/blob/78d60aa04f514947a17097c906efdbbd6bae5080/src/helpers/useUndo.ts

const useUndoManager = (state, onUndoRedo, {
  maxUndoLevels,
  enableHotKeys = true
}) => {
  const [canUndo, setCanUndo] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [canRedo, setCanRedo] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const manager = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new (undoo__WEBPACK_IMPORTED_MODULE_1___default())({
    maxLength: maxUndoLevels
  }));
  // Reference:
  // https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
  const callbackRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(onUndoRedo);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    callbackRef.current = onUndoRedo;
  }, [onUndoRedo]);
  const doUndo = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    manager.current.undo(({
      state
    }) => {
      const nextUndo = manager.current.canUndo();
      const nextRedo = manager.current.canRedo();
      setCanUndo(nextUndo);
      setCanRedo(nextRedo);
      callbackRef.current({
        state,
        type: 'undo',
        canUndo: nextUndo,
        canRedo: nextRedo
      });
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    manager.current.save({
      state
    });
    setCanUndo(manager.current.canUndo());
    setCanRedo(manager.current.canRedo());
  }, [state]);
  const doRedo = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    manager.current.redo(({
      state
    }) => {
      const nextUndo = manager.current.canUndo();
      const nextRedo = manager.current.canRedo();
      setCanUndo(nextUndo);
      setCanRedo(nextRedo);
      callbackRef.current({
        state,
        type: 'redo',
        canUndo: nextUndo,
        canRedo: nextRedo
      });
    });
  }, []);
  const handleKeys = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(event => {
    const keyName = event.key;
    if (keyName === 'Control' || keyName === 'Meta') {
      // do not alert when only Control key is pressed.
      return;
    }
    if (event.ctrlKey || event.metaKey) {
      if (keyName === 'z') {
        event.preventDefault();
        event.stopPropagation();
        doUndo();
      } else if (keyName === 'y') {
        event.preventDefault();
        event.stopPropagation();
        doRedo();
      }
    } else {
      return;
    }
  }, [doUndo, doRedo]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!enableHotKeys) return;
    document.addEventListener('keydown', handleKeys);
    return () => document.removeEventListener('keydown', handleKeys);
  }, [enableHotKeys, handleKeys]);
  return {
    doUndo,
    doRedo,
    canUndo,
    canRedo
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUndoManager);

/***/ },

/***/ "./node_modules/@plone/volto/src/helpers/Utils/useEvent.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@plone/volto/src/helpers/Utils/useEvent.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ useEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hook to listen for an event on the document
 */
function useEvent(event, handler) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // initiate the event handler
    document.addEventListener(event, handler);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      document.removeEventListener(event, handler);
    };
  });
}

/***/ }

};
;
//# sourceMappingURL=Form.chunk.js.map