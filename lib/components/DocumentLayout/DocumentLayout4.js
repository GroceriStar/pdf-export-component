"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentLayout4 = function DocumentLayout4(styles, recipe) {
  return _react.default.createElement(_renderer.Document, null, _react.default.createElement(_renderer.Page, {
    size: "A4",
    style: styles.page,
    wrap: true
  }, _react.default.createElement(_renderer.View, {
    style: styles.section
  }, _react.default.createElement(_renderer.Text, null, recipe.title), _react.default.createElement(_renderer.Text, null, recipe.directions), _react.default.createElement(_renderer.Text, null, recipe.ingredients), _react.default.createElement(_renderer.Text, null, recipe.prep_time), _react.default.createElement(_renderer.Text, null, recipe.total_time), _react.default.createElement(_renderer.Text, null, recipe.recipe_yield), _react.default.createElement(_renderer.Text, null, recipe.url))));
};

var _default = DocumentLayout4;
exports.default = _default;