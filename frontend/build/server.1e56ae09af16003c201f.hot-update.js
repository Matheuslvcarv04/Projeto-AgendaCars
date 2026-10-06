"use strict";
exports.ids = null;
exports.modules = {

/***/ "./package-volto-transporte/src/components/view/PainelGeral.jsx"
/*!**********************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/PainelGeral.jsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_transporte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/transporte */ "./package-volto-transporte/src/actions/transporte.js");
/* harmony import */ var _AppShell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppShell */ "./package-volto-transporte/src/components/AppShell.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\PainelGeral.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const PainelGeral = () => {
  var _situacoes$programada, _situacoes$em_andamen, _dados$veiculos_dispo;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const painel = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte;
    return (_state$transporte = state.transporte) === null || _state$transporte === void 0 ? void 0 : _state$transporte.painel;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.loadPainel)());
  }, [dispatch]);
  const dados = (painel === null || painel === void 0 ? void 0 : painel.data) || {};
  const situacoes = dados.viagens_por_situacao || {};
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePath: "/painel",
    title: "Painel de opera\xE7\xF5es",
    description: "Acompanhamento di\xE1rio da disponibilidade e da situa\xE7\xE3o das viagens.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    columns: 3,
    padded: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "transporte-stat transporte-stat--planned",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    label: "Viagens programadas",
    value: (_situacoes$programada = situacoes.programada) !== null && _situacoes$programada !== void 0 ? _situacoes$programada : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "transporte-stat transporte-stat--active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    label: "Viagens em andamento",
    value: (_situacoes$em_andamen = situacoes.em_andamento) !== null && _situacoes$em_andamen !== void 0 ? _situacoes$em_andamen : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    className: "transporte-stat transporte-stat--available",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    label: "Ve\xEDculos dispon\xEDveis",
    value: (_dados$veiculos_dispo = dados.veiculos_disponiveis) !== null && _dados$veiculos_dispo !== void 0 ? _dados$veiculos_dispo : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PainelGeral);

/***/ }

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ __webpack_require__.h = () => ("1a695c2fef951d30ddad");
/******/ 
/******/ }
;
//# sourceMappingURL=server.1e56ae09af16003c201f.hot-update.js.map