import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

test('Header renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toBeDefined();
});

test('Header renders img and h1 tags', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').length).toBe(1);
  expect(wrapper.find('h1').length).toBe(1);
});
