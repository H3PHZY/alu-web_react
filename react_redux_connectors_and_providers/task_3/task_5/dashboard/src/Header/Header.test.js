/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('<Header />', () => {

    it('renders an <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Header /> component checking for img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header img')).toHaveLength(1);
    });

    it('renders an <Header /> component checking for heading', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header h1')).toHaveLength(1);
    });

    it('verifies that the logoutSection is not created with default context value', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection')).toHaveLength(0);
        wrapper.unmount();
    });

    it('verifies that the logoutSection is created with user logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: () => {} }}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection')).toHaveLength(1);
        wrapper.unmount();
    });

    it('verifies that clicking the logout link calls the logOut spy', () => {
        const logOutSpy = jest.fn();
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: logOutSpy }}>
                <Header />
            </AppContext.Provider>
        );
        const link = wrapper.find('#logoutSection a');
        link.simulate('click', { preventDefault() {} });
        expect(logOutSpy).toHaveBeenCalled();
        wrapper.unmount();
    });
});