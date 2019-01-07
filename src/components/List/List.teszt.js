import React    from 'react';
// import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '~/List/List';

Enzyme.configure({ adapter: new Adapter() });

describe("<DisplayList /> component shallow only methods ", () => {
  it("renders without crashing", () => {

    const wrapper = shallow(<List />);
    expect(wrapper).toBe(true)
      // ReactDOM.render(<List />, div);
  });
});
