"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderer = require("@react-pdf/renderer");

var listStyles = _renderer.StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
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
  knob: {
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

var styles = _renderer.StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: "blue"
  }
});

var _default = {
  styles: styles,
  listStyles: listStyles
};
exports.default = _default;