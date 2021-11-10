import React from 'react';
import Register from './Register';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Register />);
  });
