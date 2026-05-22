import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

test('CourseList renders without crashing', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper).toBeDefined();
});

describe('With CourseList Empty', () => {
  test('renders correctly if you pass an empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('tbody').find(CourseListRow).length).toBe(1);
  });

  test('shows No course available yet when empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('tbody').find(CourseListRow).first().prop('textFirstCell')).toBe('No course available yet');
  });
});

describe('With CourseList containing elements', () => {
  test('renders correctly when passed a list of courses', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
