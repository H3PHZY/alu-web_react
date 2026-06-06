/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('<Footer />', () => {
    it('renders an <Footer /> component', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('Footer')).toHaveLength(1);
        wrapper.unmount();
    });

    it('renders an <Footer /> component checking for App-Footer text', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('.App-footer p').first().text()).toContain('Copyright');
        wrapper.unmount();
    });

    it('verifies that the Contact us link is not displayed when the user is logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('.App-footer a')).toHaveLength(0);
        wrapper.unmount();
    });

    it('verifies that the Contact us link is displayed when the user is logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { email: 'test@example.com', password: '123', isLoggedIn: true }, logOut: () => {} }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('.App-footer a')).toHaveLength(1);
        expect(wrapper.find('.App-footer a').text()).toBe('Contact us');
        wrapper.unmount();
    });
});