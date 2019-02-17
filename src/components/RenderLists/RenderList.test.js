import React       from 'react'

// import RenderList1 from './RenderLists1/RenderLists1.js'
// import RenderList2 from './RenderLists2/RenderLists2.js'
// import RenderList3 from './RenderLists3/RenderLists3.js'
// import RenderList4 from './RenderLists4/RenderLists4.js'
import {
  RenderLists1,
  RenderLists2,
  RenderLists3,
  RenderLists4
} from '/index';

import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { getFullGrocery, getRecipes } from "/selector";



// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Test RenderList attribute', () => {

  const data       = getFullGrocery("19 Gluten-Free Foods Shopping List");
  const recipeData = getRecipes()[0];
  //@TODO replace a similar tests with a function

  it('Renderlist1 has data attribute', () => {
    const renderList = shallow(<RenderList1 data={data} />);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })

  it('Renderlist2 has data attribute', () => {
    const renderList = shallow(<RenderList2 data={data} />);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })

  it('Renderlist3 has data attribute', () => {
    const renderList = shallow(<RenderList3 data={data} />);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })

  it('Renderlist4 has data attribute', () => {
    const renderList = shallow(<RenderList4 data={recipeData} />);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
})
