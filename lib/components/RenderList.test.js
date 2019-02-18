"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _RenderLists = _interopRequireDefault(require("./RenderLists1/RenderLists1"));

var _RenderLists2 = _interopRequireDefault(require("./RenderLists2/RenderLists2"));

var _RenderLists3 = _interopRequireDefault(require("./RenderLists3/RenderLists3"));

var _RenderLists4 = _interopRequireDefault(require("./RenderLists4/RenderLists4"));

var _selector = require("../selector");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {
//   RenderLists1,
//   RenderLists2,
//   RenderLists3,
//   RenderLists4
// } from '/index';
// Setup enzyme's react adapter
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
}); //@TODO move data to before section


describe('Test RenderList attribute', function () {
  var data = (0, _selector.getFullGrocery)("19 Gluten-Free Foods Shopping List");
  var recipeData = (0, _selector.getRecipes)()[0]; //@TODO replace a similar tests with a function
  // const wrapper = mount(<RenderList1 data={data} />);
  // console.log(wrapper.prop('data'))
  // expect(wrapper.prop('data')).isEmpty(false)
  // it('Renderlist1 has data attribute', () => {
  //
  //   // (typeof A === "object") && (A !== null)
  //
  //   const wrapper = mount(<RenderList1 data={data} />);
  //   // const prop = wrapper.props().data;
  //   // console.log(prop);
  //   expect(wrapper.prop('data').isEmpty()).to.equal(false)
  //   // expect(wrapper.props().data).toEqual(expect.any(Object))
  // })
  // it('Renderlist2 has data attribute', () => {
  //   const renderList = shallow(<RenderList2 data={data} />);
  //   const data = renderList.node.props.data;
  //   // expect(data).toBe('data')
  // })
  // it('Renderlist3 has data attribute', () => {
  //   const renderList = shallow(<RenderList3 data={data} />);
  //   const data = renderList.node.props.data;
  //   // expect(data).toBe('data')
  // })
  // it('Renderlist4 has data attribute', () => {
  //   const renderList = shallow(<RenderList4 data={recipeData} />);
  //   const data = renderList.node.props.data;
  //   // expect(data).toBe('data')
  // })
  // it('Render List1 should have Lists1 inside of it', () => {
  //   const wrapper = shallow(<RenderList1 data={data} />);
  //   expect(wrapper.find('List1')).toBe(true);
  // })
  //
}); // here we'll have an example about checking what is inside of our Render List components