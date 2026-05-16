import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeDefined();
});

test('Notifications renders three NotificationItem elements', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find(NotificationItem).length).toBe(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});

test('First NotificationItem renders the correct html', () => {
  const wrapper = shallow(<Notifications />);
  const firstItem = wrapper.find(NotificationItem).first();
  expect(firstItem.prop('type')).toBe('default');
  expect(firstItem.prop('value')).toBe('New course available');
});
