"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodaysDate = function TodaysDate() {
  return _react.default.createElement("div", null, "Today's date is ".concat(Date()));
};

var _default = TodaysDate;
exports.default = _default;