"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("@react-pdf/renderer");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this component important to generation of PDF
var List = function List(_ref) {
  var children = _ref.children;
  return children;
};

var Item = function Item(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(_renderer.View, null, _react.default.createElement(_renderer.View, {
    style: [_styles.listStyles.knob]
  }), _react.default.createElement(_renderer.View, {
    style: _styles.listStyles.item
  }, _react.default.createElement(_renderer.Text, {
    style: _styles.listStyles.itemContent
  }, children)));
};

exports.Item = Item;
List.propTypes = {
  children: _propTypes.default.node
};
Item.propTypes = {
  children: _propTypes.default.node
};
var _default = List;
exports.default = _default;