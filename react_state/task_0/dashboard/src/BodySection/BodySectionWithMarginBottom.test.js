import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {

    it('renders a <BodySectionWithMarginBottom /> component and checks that it renders a <BodySection />', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).prop('title')).toEqual('test title');
    });
});
