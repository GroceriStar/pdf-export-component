"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("@react-pdf/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this component important to generation PDF
var styles = _renderer.StyleSheet.create({
  item: {
    flexDirection: 'row',
    // marginBottom: 5,
    "marginLeft": "25px"
  },
  bulletPoint: {
    width: 10,
    fontSize: 14
  },
  itemContent: {
    flex: 1,
    fontSize: 14
  },
  blockItem: {
    backgroundColor: '#e14427',
    // marginLeft:10,
    border: '1 solid black'
  },
  knob: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8
  }
});

var List3 = function List3(_ref) {
  var children = _ref.children;
  return children;
};

var Item = function Item(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(_renderer.View, {
    style: styles.blockItem
  }, _react.default.createElement(_renderer.View, {
    style: [styles.knob]
  }), _react.default.createElement(_renderer.View, {
    style: styles.item
  }, _react.default.createElement(_renderer.Text, {
    style: styles.itemContent
  }, children)));
};

exports.Item = Item;
List3.propTypes = {
  children: _propTypes.default.node
};
Item.propTypes = {
  children: _propTypes.default.node
};
var _default = List3;
exports.default = _default;