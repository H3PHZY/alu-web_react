import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

test('Footer renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toBeDefined();
});

test('Footer renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});
