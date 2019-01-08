"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _renderer = require("@react-pdf/renderer");

var _antd = require("antd");

var _index = require("../../index");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import RenderLists from '../RenderLists/RenderLists';
// @TODO rename this component name.
// because it's quite similar to component from @react-pdf - see above
// Maybe WrapperPDFDownloadLink is a long, but self exlpanatory name?
//@TODO create a method that will generate a name - in order to keep it better - maybe????
//@TODO right now color of text Download now is blue on blue background
// we also didn't see a text - loading now.....
var DownloadPDFLink2 =
/*#__PURE__*/
function (_Component) {
  _inherits(DownloadPDFLink2, _Component);

  function DownloadPDFLink2() {
    _classCallCheck(this, DownloadPDFLink2);

    return _possibleConstructorReturn(this, _getPrototypeOf(DownloadPDFLink2).apply(this, arguments));
  }

  _createClass(DownloadPDFLink2, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_antd.Button, {
        type: "primary",
        icon: "download",
        size: "large"
      }, _react.default.createElement(_renderer.PDFDownloadLink, {
        document: (0, _index.DocumentLayout2)(_styles.default, this.props.name),
        fileName: this.props.name + ".pdf"
      }, function (_ref) {
        var blob = _ref.blob,
            url = _ref.url,
            loading = _ref.loading,
            error = _ref.error;
        return loading ? 'Loading document...' : 'Download now!';
      }));
    }
  }]);

  return DownloadPDFLink2;
}(_react.Component);

var _default = DownloadPDFLink2;
exports.default = _default;