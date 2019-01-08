"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _RenderLists = _interopRequireDefault(require("../RenderLists/RenderLists3"));

var _selector = require("../../selectors/selector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './styles'
// const DocumentLayout = ( styles, name ) => (
var DocumentLayout3 = function DocumentLayout3(styles, name) {
  return _react.default.createElement(_renderer.Document, null, _react.default.createElement(_renderer.Page, {
    size: "A4",
    style: styles.page,
    wrap: true
  }, _react.default.createElement(_renderer.View, {
    style: styles.section
  }, _react.default.createElement(_renderer.Text, {
    style: styles.text
  }, name), _react.default.createElement(_RenderLists.default, {
    data: (0, _selector.getFullGrocery)(name)
  }))));
};

var _default = DocumentLayout3;
exports.default = _default;