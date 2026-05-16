import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeDefined();
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li').length).toBe(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});
