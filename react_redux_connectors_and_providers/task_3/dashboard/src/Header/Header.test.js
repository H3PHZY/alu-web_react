/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

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

    it('verifies that the logoutSection is not created with default user prop', () => {
        const wrapper = shallow(<Header user={{ email: '', password: '', isLoggedIn: false }} logout={() => {}} />);
        expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });

    it('verifies that the logoutSection is created with user logged in', () => {
        const wrapper = shallow(<Header user={{ email: 'test@example.com', password: '123', isLoggedIn: true }} logout={() => {}} />);
        expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });

    it('verifies that clicking the logout link calls the logout spy', () => {
        const logOutSpy = jest.fn();
        const wrapper = shallow(<Header user={{ email: 'test@example.com', password: '123', isLoggedIn: true }} logout={logOutSpy} />);
        const link = wrapper.find('#logoutSection a');
        link.simulate('click', { preventDefault() {} });
        expect(logOutSpy).toHaveBeenCalled();
    });
});