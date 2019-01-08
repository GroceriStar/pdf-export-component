"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("@react-pdf/renderer");

var _List = _interopRequireWildcard(require("../List/List3"));

var _v = _interopRequireDefault(require("uuid/v1"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    // padding: 4,
    // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection: 'column'
  },
  skills: {
    fontSize: '14px' // marginBottom: 10,

  },
  main: {
    marginTop: '10px',
    display: 'flex',
    minHeight: '60px',
    border: '1px solid black',
    width: '300px' // borderLeft: '1 solid black',
    // borderRight: '1 solid black',

  },
  block: {
    margin: '0',
    flexDirection: 'column',
    backgroundColor: 'green'
  }
});

var ListsDepartment = function ListsDepartment(_ref) {
  var department = _ref.department,
      ingredients = _ref.ingredients;
  return _react.default.createElement(_renderer.View, {
    style: styles.main
  }, _react.default.createElement(_renderer.View, null, _react.default.createElement(_renderer.Text, {
    style: styles.title
  }, department)), _react.default.createElement(_List.default, null, ingredients.map(function (ingredient, num) {
    return _react.default.createElement(_List.Item, {
      key: (0, _v.default)()
    }, ingredient);
  })));
}; // @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later


var RenderLists3 = function RenderLists3(_ref2) {
  var data = _ref2.data;
  // const { data } = props;
  // console.log( data );
  // console.log( props );
  return _react.default.createElement(_renderer.View, null, data && data.map(function (item) {
    return _react.default.createElement(ListsDepartment, {
      key: (0, _v.default)(),
      department: item.department,
      ingredients: item.ingredients
    });
  }));
};

ListsDepartment.propTypes = {
  // name: PropTypes.array, because getting an error expected array but receiving string
  department: _propTypes.default.string,
  ingredients: _propTypes.default.array
};
var _default = RenderLists3;
exports.default = _default;