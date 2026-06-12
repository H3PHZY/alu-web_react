/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Notifications />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Header />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Login />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('tests to check that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it('renders an <App /> component checking for <Footer />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    // When isLoggedIn is true or user is logged into app
    it('verifies that the Login component is not included.', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ value: { user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: () => {} } });
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('verifies that the CourseList component is included.', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ value: { user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: () => {} } });
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('verifies that the user can log out using ctrl + h', () => {
        const events = {};
        window.addEventListener = jest.fn().mockImplementation((e, cb) => {
            events[e] = cb;
        });

        window.alert = jest.fn();

        const wrapper = shallow(<App />);
        wrapper.setState({ value: { user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: wrapper.instance().logOut } });
        
        events.keydown({ ctrlKey: true, key: 'h' });
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(wrapper.state('value').user.isLoggedIn).toBe(false);
        window.alert.mockRestore();
    });

    it('verifies that the logIn function updates the state correctly', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().logIn('test@example.com', '123');
        expect(wrapper.state('value').user.email).toBe('test@example.com');
        expect(wrapper.state('value').user.isLoggedIn).toBe(true);
    });

    it('verifies that the logOut function updates the state correctly', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().logIn('test@example.com', '123');
        expect(wrapper.state('value').user.isLoggedIn).toBe(true);
        wrapper.instance().logOut();
        expect(wrapper.state('value').user.email).toBe('');
        expect(wrapper.state('value').user.isLoggedIn).toBe(false);
    });

    it('verifies that markNotificationAsRead filters notifications correctly in state', () => {
        const wrapper = shallow(<App />);
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New course available' },
        ];
        wrapper.setState({ listNotifications });
        wrapper.instance().markNotificationAsRead(1);
        expect(wrapper.state('listNotifications')).toEqual([
            { id: 2, type: 'urgent', value: 'New course available' }
        ]);
    });
});

describe('mapStateToProps', () => {
    it('returns the right object when passing state', () => {
        let state = fromJS({
            isUserLoggedIn: true,
            isNotificationDrawerVisible: true
        });
        const expected = { isLoggedIn: true, displayDrawer: true };
        expect(mapStateToProps(state)).toEqual(expected);
    });
});