"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function defaultSelector(state) {
  var intl = state.intl;
  return _objectSpread({
    key: intl.locale
  }, intl);
}

var mapStateToProps = function mapStateToProps(state, _ref) {
  var _ref$intlSelector = _ref.intlSelector,
      intlSelector = _ref$intlSelector === void 0 ? defaultSelector : _ref$intlSelector;
  return intlSelector(state);
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_reactIntl.IntlProvider);

exports.default = _default;