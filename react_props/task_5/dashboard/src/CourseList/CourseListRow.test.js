import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

describe('CourseListRow when isHeader is true', () => {
  test('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  test('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
    expect(wrapper.find('th').length).toBe(2);
  });
});

describe('CourseListRow when isHeader is false', () => {
  test('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="ES6" textSecondCell="60" />);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').length).toBe(2);
  });
});
