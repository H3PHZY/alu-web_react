/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('<Footer />', () => {
    it('renders an <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders an <Footer /> component checking for App-Footer text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-footer p').first().text()).toContain('Copyright');
    });

    it('verifies that the Contact us link is not displayed when the user is logged out', () => {
        const wrapper = shallow(<Footer user={{ email: '', password: '', isLoggedIn: false }} />);
        expect(wrapper.find('.App-footer a')).toHaveLength(0);
    });

    it('verifies that the Contact us link is displayed when the user is logged in', () => {
        const wrapper = shallow(<Footer user={{ email: 'test@example.com', password: '123', isLoggedIn: true }} />);
        expect(wrapper.find('.App-footer a')).toHaveLength(1);
        expect(wrapper.find('.App-footer a').text()).toBe('Contact us');
    });
});