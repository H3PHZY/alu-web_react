import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});

test('App contains the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications).length).toBe(1);
});

test('App contains the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toBe(1);
});

test('App contains the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Login).length).toBe(1);
});

test('App contains the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).length).toBe(1);
});

test('CourseList is not displayed when isLoggedIn is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CourseList).length).toBe(0);
});

describe('when isLoggedIn is true', () => {
  test('Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  test('CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});
