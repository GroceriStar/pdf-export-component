import React    from 'react';
import RenderList1 from './RenderLists1.js';
import RenderList2 from './RenderLists2.js';
import RenderList3 from './RenderLists3.js';
import RenderList4 from './RenderLists4.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Test RenderList attribute', () => {
  it('Renderlist1 has data attribute', () => {
    const renderList = shallow(<RenderList1 data={data}/>);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
  
  it('Renderlist2 has data attribute', () => {
    const renderList = shallow(<RenderList2 data={data}/>);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
  
  it('Renderlist3 has data attribute', () => {
    const renderList = shallow(<RenderList3 data={data}/>);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
  
  it('Renderlist4 has data attribute', () => {
    const renderList = shallow(<RenderList4 data={data}/>);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
})
