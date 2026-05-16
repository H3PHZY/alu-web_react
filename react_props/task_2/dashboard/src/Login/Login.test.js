import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

test('Login renders without crashing', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toBeDefined();
});

test('Login renders 2 input tags and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input').length).toBe(2);
  expect(wrapper.find('label').length).toBe(2);
});
