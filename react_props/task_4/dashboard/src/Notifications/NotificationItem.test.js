import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

test('NotificationItem renders without crashing', () => {
  const wrapper = shallow(<NotificationItem />);
  expect(wrapper).toBeDefined();
});

test('NotificationItem renders correct html with type and value props', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" />);
  expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  expect(wrapper.find('li').text()).toBe('test');
});

test('NotificationItem renders correct html with html prop', () => {
  const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
  expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
});
