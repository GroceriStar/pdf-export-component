/* globals describe, it, expect */

import React from 'react'
// import ReactDOM from 'react-dom'
import {
  configure,
  // shallow,
  mount
} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Item from './Layouts/LayoutItem/LayoutItem'

// @TODO it was an old version. as we want to make this components lighter - we need to find another way to do tests as we want them
// import { getFullGrocery, getRecipes } from '/selector'

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() })

// @TODO move data to before section

describe('Test RenderList attribute', () => {
  // const data = getFullGrocery('19 Gluten-Free Foods Shopping List')
  // const recipeData = getRecipes()[0]
  const data = {
    'John Doe': 'John Doe',
    'Recipe': 'Recipe'
  }

  // @TODO replace a similar tests with a function

  // const wrapper = mount(<RenderList1 data={data} />);

  // console.log(wrapper.prop('data'))
  // expect(wrapper.prop('data')).isEmpty(false)

  it('Renderlist1 has data attribute', () => {
    // (typeof A === "object") && (A !== null)
    const wrapper = mount(<Item data={data} />)
    // const prop = wrapper.props().data;
    // console.log(prop);
    expect(wrapper.prop('data').isEmpty()).to.equal(false)
    // expect(wrapper.props().data).toEqual(expect.any(Object))
  })

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
})

//
// Setup enzyme's react adapter
// configure({ adapter: new EnzymeAdapter() })
//
// describe('<TodaysDate /> component shallow only methods ', () => {
//   it('renders without crashing', () => {
//     const wrapper = shallow(<TodaysDate />)
//
//     // expect(wrapper).toBe({});
//     // this 2 lines below don't make a lot of sense
//
//     // expect(wrapper).toBe(true)
//     //   ReactDOM.render(<List />, div);
//   })
// })

// here we'll have an example about checking what is inside of our Render List components
