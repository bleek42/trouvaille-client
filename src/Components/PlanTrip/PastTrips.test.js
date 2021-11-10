import React from 'react';
import PastTrips from './PastTrips';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<PastTrips />);
  });
