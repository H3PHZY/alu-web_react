import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});
