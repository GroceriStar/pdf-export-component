"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _RenderLists = _interopRequireDefault(require("../RenderLists/RenderLists1"));

var _RenderLists2 = _interopRequireDefault(require("../RenderLists/RenderLists2"));

var _RenderLists3 = _interopRequireDefault(require("../RenderLists/RenderLists3"));

var _RenderLists4 = _interopRequireDefault(require("../RenderLists/RenderLists4"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './styles'
var DocumentLayouts = function DocumentLayouts(type, name, data) {
  var layout;

  switch (type) {
    case 'PDF1':
      layout = _react.default.createElement(_RenderLists.default, {
        data: data
      });
      break;

    case 'PDF2':
      layout = _react.default.createElement(_RenderLists2.default, {
        data: data
      });
      break;

    case 'PDF3':
      layout = _react.default.createElement(_RenderLists3.default, {
        data: data
      });
      break;

    case 'PDF4':
      layout = _react.default.createElement(_RenderLists4.default, {
        data: data
      });
      break;

    default:
      layout = _react.default.createElement(_RenderLists.default, {
        data: data
      });
      break;
  }

  return _react.default.createElement(_renderer.Document, null, _react.default.createElement(_renderer.Page, {
    size: "A4",
    style: _styles.default.page,
    wrap: true
  }, _react.default.createElement(_renderer.View, {
    style: _styles.default.section
  }, _react.default.createElement(_renderer.Text, {
    style: _styles.default.text
  }, name), layout)));
};

var _default = DocumentLayouts;
exports.default = _default;