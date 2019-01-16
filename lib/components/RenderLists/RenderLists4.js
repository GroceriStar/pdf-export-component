"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderLists4 = function RenderLists4(_ref) {
  var data = _ref.data;
  return _react.default.createElement(_renderer.View, null, _react.default.createElement(_renderer.Text, null, data.title), _react.default.createElement(_renderer.Text, null, data.directions), _react.default.createElement(_renderer.Text, null, data.ingredients), _react.default.createElement(_renderer.Text, null, data.prep_time), _react.default.createElement(_renderer.Text, null, data.total_time), _react.default.createElement(_renderer.Text, null, data.recipe_yield), _react.default.createElement(_renderer.Text, null, data.url));
};

var _default = RenderLists4;
exports.default = _default;