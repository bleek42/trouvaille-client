import React from 'react';
import HamburgerIcon from './HamburgerIcon';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<HamburgerIcon />);
  });
