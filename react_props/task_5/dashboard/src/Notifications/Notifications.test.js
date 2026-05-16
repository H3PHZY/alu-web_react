import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeDefined();
});

test('menu item is displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('.menuItem').length).toBe(1);
});

test('div.Notifications is not displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('.Notifications').length).toBe(0);
});

test('menu item is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('.menuItem').length).toBe(1);
});

test('div.Notifications is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('.Notifications').length).toBe(1);
});

describe('With empty listNotifications', () => {
  test('renders correctly if you pass an empty array or no listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper).toBeDefined();
  });

  test('shows No new notification for now and not the list text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');
    expect(wrapper.find('.Notifications').text()).not.toContain('Here is the list of notifications');
  });
});

describe('With listNotifications containing elements', () => {
  test('renders the correct number of NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  test('first NotificationItem renders the correct html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().prop('type')).toBe('default');
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
  });
});
