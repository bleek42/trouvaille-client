import React from 'react';
import MyTrips from './MyTrips';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<MyTrips />);
  });
