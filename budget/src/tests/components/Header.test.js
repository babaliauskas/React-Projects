import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';
import '../setupTests';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
