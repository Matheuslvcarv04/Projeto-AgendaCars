"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IntlProvider", {
  enumerable: true,
  get: function get() {
    return _IntlProvider2.default;
  }
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _Provider2.default;
  }
});
exports.initialState = exports.UPDATE = void 0;
exports.intlReducer = intlReducer;
exports.updateIntl = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _IntlProvider2 = _interopRequireDefault(require("./components/IntlProvider"));

var _Provider2 = _interopRequireDefault(require("./components/Provider"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var UPDATE = '@@intl/UPDATE';
exports.UPDATE = UPDATE;

var updateIntl = function updateIntl(_ref) {
  var locale = _ref.locale,
      formats = _ref.formats,
      messages = _ref.messages;
  return {
    type: UPDATE,
    payload: {
      locale: locale,
      formats: formats,
      messages: messages
    }
  };
};

exports.updateIntl = updateIntl;
var initialState = {
  locale: 'en',
  messages: {}
};
exports.initialState = initialState;

function intlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type !== UPDATE) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), action.payload);
}