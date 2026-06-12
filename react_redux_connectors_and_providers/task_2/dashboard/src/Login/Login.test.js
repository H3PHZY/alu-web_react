import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
    it('renders an <Login /> component checking for App-Login', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    });

    it('renders an <Login /> component checking for input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body input')).toHaveLength(3);
    });

    it('renders an <Login /> component checking for label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body label')).toHaveLength(2);
    });

    it('verifies that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    it('verifies that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    });
});