"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("@react-pdf/renderer");

var _List = _interopRequireWildcard(require("../List/List1"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _selector = require("../../selectors/selector");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO move this selector away from this not a container like component.
var styles = _renderer.StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: "blue"
  },
  skills: {
    fontSize: 14,
    marginBottom: 10
  }
});

var Lists1 = function Lists1(_ref) {
  var department = _ref.department,
      ingredients = _ref.ingredients;
  return _react.default.createElement(_renderer.View, null, _react.default.createElement(_renderer.Text, {
    style: styles.title
  }, department), _react.default.createElement(_List.default, null, ingredients.map(function (ingredient) {
    return _react.default.createElement(_List.Item, {
      key: (0, _v.default)()
    }, ingredient);
  })));
}; // @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later


var RenderLists1 = function RenderLists1(props) {
  return _react.default.createElement(_renderer.View, null, (0, _selector.getFullGrocery)(props.groceryName2).map(function (item) {
    return _react.default.createElement(Lists1, {
      key: (0, _v.default)(),
      department: item.department,
      ingredients: item.ingredients
    });
  }));
};

Lists1.propTypes = {
  name: _propTypes.default.string,
  skills: _propTypes.default.array
};
var _default = RenderLists1;
exports.default = _default;