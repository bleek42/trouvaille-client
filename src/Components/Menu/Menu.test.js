import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Menu />);
  });
