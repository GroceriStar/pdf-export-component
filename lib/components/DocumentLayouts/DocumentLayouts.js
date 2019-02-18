"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _ = require("../..");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './styles'
// @TODO i don't like this approach, but it looks simple for now
//@TODO move away switch into a separated function
var DocumentLayouts = function DocumentLayouts(type, name, data) {
  var layout;
  console.log(type);
  console.log(name);

  switch (type) {
    case 'PDF1':
      layout = _react.default.createElement(_.RenderLists1, {
        data: data
      });
      break;

    case 'PDF2':
      layout = _react.default.createElement(_.RenderLists2, {
        data: data
      });
      break;

    case 'PDF3':
      layout = _react.default.createElement(_.RenderLists3, {
        data: data
      });
      break;

    case 'PDF4':
      layout = _react.default.createElement(_.RenderLists4, {
        data: data
      });
      break;

    default:
      layout = _react.default.createElement(_.RenderLists1, {
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