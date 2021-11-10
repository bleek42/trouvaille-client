import React from 'react';
import PlanTrip from './PlanTrip';
import { shallow } from 'enzyme';
import { ContextProvider } from '../../Context';

it('renders without crashing', () => {
  shallow(<ContextProvider>
    <PlanTrip />
  </ContextProvider>);
});
