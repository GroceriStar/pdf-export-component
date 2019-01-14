"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderer = require("@react-pdf/renderer");

var styles = _renderer.StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#45322E',
    color: "white",
    // borderBottomWidth: 5,
    //   borderBottomColor: 'red',
    // borderBottomStyle: "solid",
    padding: 4 // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',

  },
  main: {
    marginTop: 10 // borderLeft: '1 solid black',
    // borderRight: '1 solid black',

  }
});

var _default = styles;
exports.default = _default;