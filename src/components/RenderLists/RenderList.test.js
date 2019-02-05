import React    from 'react';
import RenderList from './RenderLists2.js';
import Enzyme, { shallow } from 'enzyme';

describe('Test RenderList attribute', () => {
  it('Renderlist has data attribute', () => {
    const renderList = shallow(<RenderList />);
    const data = renderList.node.props.data;
    expect(data).toBe('data')
  })
})
