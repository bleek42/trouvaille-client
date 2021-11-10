import React from 'react';
import Map from './Map';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Map />);
  });
