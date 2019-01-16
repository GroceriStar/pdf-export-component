"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderer = require("@react-pdf/renderer");

var styles = _renderer.StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column'
    }
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    "font-size": "18px"
  },
  block: {
    backgroundColor: 'red'
  },
  block1: {
    backgroundColor: 'green',
    border: '1 solid purple'
  }
});

var _default = styles;
exports.default = _default;