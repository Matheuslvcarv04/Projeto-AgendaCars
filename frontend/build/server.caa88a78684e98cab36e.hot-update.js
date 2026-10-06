"use strict";
exports.ids = null;
exports.modules = {

/***/ "./package-volto-transporte/src/components/AppShell.jsx"
/*!**************************************************************!*\
  !*** ./package-volto-transporte/src/components/AppShell.jsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\AppShell.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const NAV_ITEMS = [{
  path: '/painel',
  label: 'Painel',
  icon: 'chart bar'
}, {
  path: '/solicitacao',
  label: 'Solicitar viagem',
  icon: 'file alternate'
}, {
  path: '/aprovacao-gestor',
  label: 'Aprovacoes',
  icon: 'check circle'
}, {
  path: '/agenda',
  label: 'Agenda',
  icon: 'calendar alternate'
}, {
  path: '/checklist',
  label: 'Checklist',
  icon: 'check square'
}, {
  path: '/abastecimento',
  label: 'Abastecimento',
  icon: 'tint'
}];
const AppShell = ({
  activePath,
  title,
  description,
  children
}) => __jsx("div", {
  className: "transporte-app-shell",
  "data-page": activePath,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}, __jsx("header", {
  className: "transporte-topbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "transporte-brand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx("span", {
  className: "transporte-brand-mark",
  "aria-hidden": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, "PR"), __jsx("span", {
  className: "transporte-brand-copy",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
  }
}, "Porto do Recife"), __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 11
  }
}, "Gestao de transporte"))), __jsx("div", {
  className: "transporte-topbar-status",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, __jsx("span", {
  className: "transporte-status-dot",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), "Operacao interna")), __jsx("nav", {
  className: "transporte-nav",
  "aria-label": "Navegacao principal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "transporte-nav-inner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}, NAV_ITEMS.map(item => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
  key: item.path,
  to: item.path,
  exact: true,
  className: "transporte-nav-link",
  activeClassName: "is-active",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  name: item.icon,
  "aria-hidden": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }
}), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, item.label))))), __jsx("main", {
  className: "transporte-main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, __jsx("header", {
  className: "transporte-page-heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }
}, __jsx("p", {
  className: "transporte-eyebrow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }
}, "FROTA INSTITUCIONAL / PORTO DO RECIFE"), __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 11
  }
}, title), description && __jsx("p", {
  className: "transporte-page-description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 27
  }
}, description)), __jsx("span", {
  className: "transporte-page-marker",
  "aria-hidden": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}, "PR")), __jsx("div", {
  className: "transporte-page-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }
}, children)), __jsx("footer", {
  className: "transporte-footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 7
  }
}, "Porto do Recife"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 7
  }
}, "Sistema de gestao de transporte")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppShell);

/***/ },

/***/ "./package-volto-transporte/src/components/view/AbastecimentoForm.jsx"
/*!****************************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/AbastecimentoForm.jsx ***!
  \****************************************************************************/
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
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\AbastecimentoForm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;




const AbastecimentoForm = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const lista = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte;
    return (_state$transporte = state.transporte) === null || _state$transporte === void 0 ? void 0 : _state$transporte.abastecimentos;
  });
  const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte2;
    return (_state$transporte2 = state.transporte) === null || _state$transporte2 === void 0 ? void 0 : _state$transporte2.abastecimento;
  });
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    veiculo: '',
    data: new Date().toISOString().slice(0, 10),
    quilometragem: 0,
    litros: 0,
    valor: 0,
    posto: '',
    motorista: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.loadAbastecimentos)());
  }, [dispatch, status === null || status === void 0 ? void 0 : status.data]);
  const update = field => event => {
    setForm(current => _objectSpread(_objectSpread({}, current), {}, {
      [field]: event.target.value
    }));
  };
  const submit = event => {
    event.preventDefault();
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.createAbastecimento)(_objectSpread(_objectSpread({}, form), {}, {
      quilometragem: Number(form.quilometragem),
      litros: Number(form.litros),
      valor: Number(form.valor),
      motorista: form.motorista || undefined
    })));
  };
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePath: "/abastecimento",
    title: "Abastecimento",
    description: "Registre o consumo de combust\xEDvel e acompanhe o hist\xF3rico da frota.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "URL do ve\xEDculo",
    required: true,
    value: form.veiculo,
    onChange: update('veiculo'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Data",
    type: "date",
    required: true,
    value: form.data,
    onChange: update('data'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Quilometragem",
    type: "number",
    min: "0",
    required: true,
    value: form.quilometragem,
    onChange: update('quilometragem'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Litros",
    type: "number",
    min: "0",
    step: "0.01",
    required: true,
    value: form.litros,
    onChange: update('litros'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Valor",
    type: "number",
    min: "0",
    step: "0.01",
    required: true,
    value: form.valor,
    onChange: update('valor'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Posto",
    required: true,
    value: form.posto,
    onChange: update('posto'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "URL do motorista (opcional)",
    value: form.motorista,
    onChange: update('motorista'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    primary: true,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Salvar registro"), (status === null || status === void 0 ? void 0 : status.data) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    positive: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 28
    }
  }, "Abastecimento registrado."), (status === null || status === void 0 ? void 0 : status.error) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    negative: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "N\xE3o foi poss\xEDvel registrar o abastecimento."))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Hist\xF3rico"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
    compact: true,
    striped: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 34
    }
  }, "Data"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 75
    }
  }, "Km"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 114
    }
  }, "Litros"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 157
    }
  }, "Valor"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 199
    }
  }, "Posto"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, ((lista === null || lista === void 0 ? void 0 : lista.data) || []).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {
    key: item['@id'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 56
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 85
    }
  }, item.data), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 121
    }
  }, item.quilometragem), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 166
    }
  }, item.litros), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 204
    }
  }, item.valor), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 241
    }
  }, item.posto)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbastecimentoForm);

/***/ },

/***/ "./package-volto-transporte/src/components/view/AgendaViagensView.jsx"
/*!****************************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/AgendaViagensView.jsx ***!
  \****************************************************************************/
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
/* harmony import */ var _actions_viagens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/viagens */ "./package-volto-transporte/src/actions/viagens.js");
/* harmony import */ var _AppShell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppShell */ "./package-volto-transporte/src/components/AppShell.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\AgendaViagensView.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const AgendaView = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store => {
    var _store$transporte;
    return (_store$transporte = store.transporte) === null || _store$transporte === void 0 ? void 0 : _store$transporte.viagens;
  });
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().toISOString().slice(0, 10));
  const agendamentos = (state === null || state === void 0 ? void 0 : state.data) || [];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_viagens__WEBPACK_IMPORTED_MODULE_3__.loadViagens)(data));
  }, [dispatch, data]);
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePath: "/agenda",
    title: "Agenda de viagens",
    description: "Consulte a programa\xE7\xE3o de ve\xEDculos e motoristas por data.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Data",
    type: "date",
    value: data,
    onChange: event => setData(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
    itemsPerRow: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, agendamentos.map(agenda => {
    var _agenda$veiculo, _agenda$motorista;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
      key: agenda['@id'],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, agenda.horario || 'Horário não informado'), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, agenda.situacao), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "car",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 22
      }
    }), " Ve\xEDculo: ", ((_agenda$veiculo = agenda.veiculo) === null || _agenda$veiculo === void 0 ? void 0 : _agenda$veiculo.title) || 'Não atribuído'), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "user",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 22
      }
    }), " Motorista: ", ((_agenda$motorista = agenda.motorista) === null || _agenda$motorista === void 0 ? void 0 : _agenda$motorista.title) || 'Não atribuído'), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, "Destino: ", agenda.destino), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "Setor: ", agenda.setor))));
  })), (state === null || state === void 0 ? void 0 : state.error) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    negative: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 26
    }
  }, "N\xE3o foi poss\xEDvel carregar a agenda.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AgendaView);

/***/ },

/***/ "./package-volto-transporte/src/components/view/AprovacaoGestor.jsx"
/*!**************************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/AprovacaoGestor.jsx ***!
  \**************************************************************************/
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
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\AprovacaoGestor.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const AprovacaoGestor = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store => {
    var _store$transporte;
    return (_store$transporte = store.transporte) === null || _store$transporte === void 0 ? void 0 : _store$transporte.solicitacoes;
  });
  const pendentes = (state === null || state === void 0 ? void 0 : state.data) || [];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.loadSolicitacoes)());
  }, [dispatch]);
  const decidir = (item, transition) => {
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.transitionSolicitacao)(item['@id'], transition)).then(() => dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.loadSolicitacoes)()));
  };
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePath: "/aprovacao-gestor",
    title: "Aprova\xE7\xE3o do gestor",
    description: "Revise as solicita\xE7\xF5es pendentes e registre a decis\xE3o operacional.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
    celled: true,
    striped: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "N\xFAmero"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Solicitante"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Data/sa\xEDda"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Destino"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Passageiros"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Motivo"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "A\xE7\xF5es"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, pendentes.map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, item.id || item['@id']), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, item.solicitante), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, item.data, " ", item.horario_saida), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, item.destino), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, item.qtd_passageiros), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, item.motivo), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {
    collapsing: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    positive: true,
    onClick: () => decidir(item, 'aprovar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 75
    }
  }), " Aprovar"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    color: "yellow",
    onClick: () => decidir(item, 'alterar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 81
    }
  }), " Alterar"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    negative: true,
    onClick: () => decidir(item, 'recusar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 75
    }
  }), " Recusar")))))), (state === null || state === void 0 ? void 0 : state.error) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    negative: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 26
    }
  }, "N\xE3o foi poss\xEDvel carregar as solicita\xE7\xF5es.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AprovacaoGestor);

/***/ },

/***/ "./package-volto-transporte/src/components/view/ChecklistView.jsx"
/*!************************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/ChecklistView.jsx ***!
  \************************************************************************/
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
/* harmony import */ var _actions_viagem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/viagem */ "./package-volto-transporte/src/actions/viagem.js");
/* harmony import */ var _actions_viagens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/viagens */ "./package-volto-transporte/src/actions/viagens.js");
/* harmony import */ var _AppShell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppShell */ "./package-volto-transporte/src/components/AppShell.jsx");
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\ChecklistView.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;





const CHECKLIST_FIELDS = [['pneus', 'Pneus'], ['freios', 'Freios'], ['farois', 'Faróis'], ['lanternas', 'Lanternas'], ['limpadores', 'Limpadores'], ['cintos', 'Cintos'], ['combustivel_ok', 'Combustível ok'], ['documentacao', 'Documentação'], ['extintor', 'Extintor']];
const ChecklistView = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte;
    return (_state$transporte = state.transporte) === null || _state$transporte === void 0 ? void 0 : _state$transporte.viagem;
  });
  const viagens = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte2;
    return (_state$transporte2 = state.transporte) === null || _state$transporte2 === void 0 ? void 0 : _state$transporte2.viagens;
  });
  const {
    0: viagemUrl,
    1: setViagemUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_objectSpread(_objectSpread({}, Object.fromEntries(CHECKLIST_FIELDS.map(([field]) => [field, false]))), {}, {
    estado_geral: '',
    checklist_resultado: 'com_problema',
    km_saida: 0,
    km_chegada: 0,
    situacao: 'programada'
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_viagens__WEBPACK_IMPORTED_MODULE_4__.loadViagens)());
  }, [dispatch]);
  const setField = field => (event, data) => {
    setForm(current => {
      var _ref, _data$checked;
      return _objectSpread(_objectSpread({}, current), {}, {
        [field]: (_ref = (_data$checked = data === null || data === void 0 ? void 0 : data.checked) !== null && _data$checked !== void 0 ? _data$checked : data === null || data === void 0 ? void 0 : data.value) !== null && _ref !== void 0 ? _ref : event.target.value
      });
    });
  };
  const submit = event => {
    event.preventDefault();
    if (!viagemUrl) return;
    dispatch((0,_actions_viagem__WEBPACK_IMPORTED_MODULE_3__.updateViagem)(viagemUrl, _objectSpread(_objectSpread({}, form), {}, {
      km_saida: Number(form.km_saida),
      km_chegada: Number(form.km_chegada),
      situacao: form.checklist_resultado === 'apto' ? 'em_andamento' : 'programada'
    })));
  };
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activePath: "/checklist",
    title: "Checklist e quilometragem",
    description: "Selecione uma viagem, registre a inspe\xE7\xE3o e informe os quil\xF4metros.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Select, {
    label: "Viagem",
    placeholder: "Selecione uma viagem",
    options: ((viagens === null || viagens === void 0 ? void 0 : viagens.data) || []).map(viagem => ({
      key: viagem['@id'],
      text: `${viagem.title || viagem.destino} - ${viagem.horario || ''}`,
      value: viagem['@id']
    })),
    value: viagemUrl,
    onChange: (_event, data) => setViagemUrl(data.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), CHECKLIST_FIELDS.map(([field, label]) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Checkbox, {
    key: field,
    label: label,
    checked: form[field],
    onChange: setField(field),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.TextArea, {
    label: "Estado geral",
    value: form.estado_geral,
    onChange: setField('estado_geral'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Select, {
    label: "Resultado",
    value: form.checklist_resultado,
    options: [{
      text: 'Apto',
      value: 'apto'
    }, {
      text: 'Com problema',
      value: 'com_problema'
    }],
    onChange: setField('checklist_resultado'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Km de sa\xEDda",
    type: "number",
    min: "0",
    value: form.km_saida,
    onChange: setField('km_saida'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Km de chegada",
    type: "number",
    min: "0",
    value: form.km_chegada,
    onChange: setField('km_chegada'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    positive: true,
    type: "submit",
    disabled: !viagemUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Salvar checklist e quilometragem"), (status === null || status === void 0 ? void 0 : status.data) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    positive: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 28
    }
  }, "Viagem atualizada."), (status === null || status === void 0 ? void 0 : status.error) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    negative: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "N\xE3o foi poss\xEDvel atualizar a viagem.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistView);

/***/ },

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
    color: "teal",
    inverted: true,
    center: true,
    aligned: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    inverted: true,
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
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    color: "yellow",
    inverted: true,
    center: true,
    aligned: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    inverted: true,
    label: "Viagens em andamento",
    value: (_situacoes$em_andamen = situacoes.em_andamento) !== null && _situacoes$em_andamen !== void 0 ? _situacoes$em_andamen : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    color: "green",
    inverted: true,
    center: true,
    aligned: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {
    inverted: true,
    label: "Ve\xEDculos dispon\xEDveis",
    value: (_dados$veiculos_dispo = dados.veiculos_disponiveis) !== null && _dados$veiculos_dispo !== void 0 ? _dados$veiculos_dispo : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PainelGeral);

/***/ },

/***/ "./package-volto-transporte/src/components/view/solicitacaoview.jsx"
/*!**************************************************************************!*\
  !*** ./package-volto-transporte/src/components/view/solicitacaoview.jsx ***!
  \**************************************************************************/
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
var _jsxFileName = "C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\frontend\\package-volto-transporte\\src\\components\\view\\solicitacaoview.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;




const SolicitacaoView = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$transporte;
    return (_state$transporte = state.transporte) === null || _state$transporte === void 0 ? void 0 : _state$transporte.solicitacao;
  });
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    solicitante: '',
    setor: '',
    data: '',
    horario_saida: '',
    local_saida: '',
    destino: '',
    qtd_passageiros: 1,
    motivo: '',
    prioridade: 'media'
  });
  const update = field => (event, data) => {
    var _data$value;
    const value = (_data$value = data === null || data === void 0 ? void 0 : data.value) !== null && _data$value !== void 0 ? _data$value : event.target.value;
    setForm(current => _objectSpread(_objectSpread({}, current), {}, {
      [field]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch((0,_actions_transporte__WEBPACK_IMPORTED_MODULE_3__.createSolicitacao)(_objectSpread(_objectSpread({}, form), {}, {
      qtd_passageiros: Number(form.qtd_passageiros)
    })));
  };
  return __jsx(_AppShell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePath: "/solicitacao",
    title: "Solicitar viagem",
    description: "Informe os dados do deslocamento para enviar a solicita\xE7\xE3o \xE0 an\xE1lise do gestor.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Solicitante",
    required: true,
    value: form.solicitante,
    onChange: update('solicitante'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Setor",
    required: true,
    value: form.setor,
    onChange: update('setor'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Data",
    type: "date",
    required: true,
    value: form.data,
    onChange: update('data'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Hor\xE1rio de sa\xEDda",
    type: "time",
    required: true,
    value: form.horario_saida,
    onChange: update('horario_saida'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Local de sa\xEDda",
    required: true,
    value: form.local_saida,
    onChange: update('local_saida'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Destino",
    required: true,
    value: form.destino,
    onChange: update('destino'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Passageiros",
    type: "number",
    min: "1",
    required: true,
    value: form.qtd_passageiros,
    onChange: update('qtd_passageiros'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.TextArea, {
    label: "Motivo da viagem",
    required: true,
    value: form.motivo,
    onChange: update('motivo'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Select, {
    label: "Prioridade",
    options: [{
      text: 'Baixa',
      value: 'baixa'
    }, {
      text: 'Média',
      value: 'media'
    }, {
      text: 'Alta',
      value: 'alta'
    }],
    value: form.prioridade,
    onChange: update('prioridade'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    primary: true,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Enviar para Aprova\xE7\xE3o"), (status === null || status === void 0 ? void 0 : status.data) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    positive: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 28
    }
  }, "Solicita\xE7\xE3o enviada para an\xE1lise."), (status === null || status === void 0 ? void 0 : status.error) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    negative: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "N\xE3o foi poss\xEDvel enviar a solicita\xE7\xE3o.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolicitacaoView);

/***/ }

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ __webpack_require__.h = () => ("54621fc9754d8ce87ec3");
/******/ 
/******/ }
;
//# sourceMappingURL=server.caa88a78684e98cab36e.hot-update.js.map