/**
 * @jest-environment jsdom
 */

import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders an <CourseListRow /> component', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders a <CourseListRow /> component with isHeader set to true and textSecondCell === null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('tests the component renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('tests the component renders correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
        expect(wrapper.find('tr td')).toHaveLength(2);
    });

    it('applies style for headerRow when isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('tr').prop('className')).toContain('headerRow');
    });

    it('applies style for defaultRow when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
        expect(wrapper.find('tr').prop('className')).toContain('defaultRow');
    });

    it('applies the correct styling for th elements when textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
        expect(wrapper.find('th').prop('className')).toContain('thStyle');
    });

    it('applies the correct styling for th elements when textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
        wrapper.find('th').forEach((node) => {
            expect(node.prop('className')).toContain('thStyle');
            expect(node.prop('className')).toContain('thSubHeaderStyle');
        });
    });

    it('renders a checkbox in the first cell when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
        expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
    });

    it('changes row style when checkbox is checked', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
        expect(wrapper.find('tr').prop('className')).toContain('defaultRow');
        expect(wrapper.find('tr').prop('className')).not.toContain('rowChecked');
        
        wrapper.find('input[type="checkbox"]').simulate('change');
        
        expect(wrapper.find('tr').prop('className')).toContain('rowChecked');
        expect(wrapper.find('tr').prop('className')).not.toContain('defaultRow');
    });
});
