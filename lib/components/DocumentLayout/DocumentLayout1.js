"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _RenderLists = _interopRequireDefault(require("../RenderLists/RenderLists1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './styles'
// const DocumentLayout = ( styles, name ) => (
var DocumentLayout1 = function DocumentLayout1(styles, name, data) {
  return _react.default.createElement(_renderer.Document, null, _react.default.createElement(_renderer.Page, {
    size: "A4",
    style: styles.page,
    wrap: true
  }, _react.default.createElement(_renderer.View, {
    style: styles.section
  }, _react.default.createElement(_renderer.Text, {
    style: styles.text
  }, name), _react.default.createElement(_RenderLists.default, {
    data: data
  }))));
};

var _default = DocumentLayout1;
exports.default = _default;