import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

test('CourseList renders without crashing', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper).toBeDefined();
});

test('CourseList renders 5 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find(CourseListRow).length).toBe(5);
});
