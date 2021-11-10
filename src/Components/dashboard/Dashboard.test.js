import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Dashboard />);
  });
